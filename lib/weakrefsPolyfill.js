var WeakRef;
var FinalizationGroup;

var [WeakRef, FinalizationGroup] = (function() {
    
    const defineProperty = Object.defineProperty;
    const defineProperties = Object.defineProperties;

    class ReliableMap extends Map {
        constructor() {
            super();
        }
    }

    defineProperties(ReliableMap.prototype, {
        get: { value: Map.prototype.get },
        set: { value: Map.prototype.set },
        has: { value: Map.prototype.has },
        delete : { value: Map.prototype.delete },
        clear : { value: Map.prototype.clear },
    });

    class ReliableWeakMap extends WeakMap {
        constructor() {
            super();
        }
    }

    defineProperties(ReliableWeakMap.prototype, {
        get: { value: WeakMap.prototype.get },
        set: { value: WeakMap.prototype.set },
        has: { value: WeakMap.prototype.has },
        delete : { value: WeakMap.prototype.delete },
        clear : { value: WeakMap.prototype.clear },
    });

    let setupWeakReference;
    let getWeakRefTarget;

    (function() {
        // "Polyfill" for browsers, based on the fact that
        // document.getElementsByTagName returns a weakly cached object,
        // which gets GC'd as long as no references are kept to it.
        if (typeof document === 'object' && document.getElementsByTagName) {
            const rnd = Math.random;
            const getElementsByTagName = document.getElementsByTagName.bind(document);
            const refKeys = new ReliableWeakMap();
            const refCollections = new ReliableWeakMap();
            
            setupWeakReference = function (ref, target) {
                let key = "refkey " + rnd();
                refKeys.set(ref, key);

                // Creates an object that will be GCd if nothing holds on to it.
                // Until it is GCd, however, the same object is returned for multiple calls.
                // This allows us to use it to store a weak reference on it.
                let collection = getElementsByTagName(key);
                defineProperty(collection, "wrTarget", { value: target });

                // Ensure that the object above is kept alive as long as the target object is.
                refCollections.set(target, collection);
            }
            
            getWeakRefTarget = function (ref) {
                let key = refKeys.get(ref);
                let collection = getElementsByTagName(key);
                return collection.wrTarget || null;
            }
        }
        // "Polyfill" for the SpiderMonkey shell, based on the ability to
        // iterate over WeakMaps entries.
        else if (typeof nondeterministicGetWeakMapKeys === 'function') {
            const getWeakMapKeys = nondeterministicGetWeakMapKeys;
            const refsMap = new ReliableWeakMap();
            
            setupWeakReference = function (ref, target) {
                // Need to use a WeakMap instead of a WeakSet because the SpiderMonkey
                // shell doesn't have a way to get a WeakSet's keys.
                const weakmap = new ReliableWeakMap();
                refsMap.set(ref, weakmap);
                weakmap.set(target, null);
            }
            
            getWeakRefTarget = function (ref) {
                const weakmap = refsMap.get(ref);
                if (!weakmap)
                return null;
                const keys = getWeakMapKeys(weakmap);
                if (keys.length === 0)
                return null;
                let target = keys[0];
                return target;
            }
        }
    })();

    const strongRefs = new ReliableMap();
    let strongRefsClearingTriggered = false;

    function addStrongRef(target) {
        strongRefs.set(target, true);
        ensureStrongRefsGetCleared();
    }

    function clearStrongRefs() {
        strongRefsClearingTriggered = false;
        strongRefs.clear();
    }

    async function ensureStrongRefsGetCleared() {
        if (strongRefsClearingTriggered) {
            return;
        }
        strongRefsClearingTriggered = true;
        // TODO: evaluate the policy for when to clear strong references.
        // Right now, it happens before the next full turn begins.
        await 1;
        clearStrongRefs();
    }

    class WeakRef {
        constructor(target) {
            setupWeakReference(this, target);
            addStrongRef(target);
        }

        deref() {
            let target = getWeakRefTarget(this);
            if (target) {
                addStrongRef(target);
            }
            return target;
        }
    }

    const cleanupFunctions = new ReliableWeakMap();
    const refsForGroups = new ReliableWeakMap();
    const tokensForGroups = new ReliableWeakMap();

    class FinalizationGroup {
        constructor(cleanup) {
            cleanupFunctions.set(this, cleanup);
            refsForGroups.set(this, new ReliableMap());
            tokensForGroups.set(this, new ReliableMap());
        }

        register(target, holdings, unregisterToken = undefined) {
            let ref = new WeakRef(target);
            // TODO: should this throw if the ref has already been registered?
            // TODO: what about with different holdings?
            refsForGroups.get(this).set(ref, holdings);
            if (unregisterToken) {
                // TODO: what about with different unregisterTokens?
                // TODO: or no unregisterToken before, but now we add one?
                // TODO: or we had one before, now a registration doesn't include it, but is otherwise the same?
                let refsForToken = tokensForGroups.get(this).get(unregisterToken);
                if (!refsForToken) {
                    refsForToken = [];
                    tokensForGroups.get(this).set(unregisterToken, refsForToken);
                }
                // TODO: prevent duplicates. Depending on the outcome of the above TODOs
                defineProperty(refsForToken, refsForToken.length, { value: ref });
            }
        }

        unregister(token) {
            let refsForToken = tokensForGroups.get(this).get(token);
            if (!refsForToken) {
                return 0;
            }

            for (let i = 0; i < refsForToken.length; i++) {
                let ref = refsForToken[i];
                refsForGroups.get(this).delete(ref);
            }
            tokensForGroups.get(this).delete(token);

            return refsForToken.length;
        }

        cleanupSome(cleanup) {
            cleanup(new FinalizationGroupCleanupIterator(this));
        }
    }

    const cleanupIteratorStates = new ReliableWeakMap();

    class FinalizationGroupCleanupIterator {
        constructor(group) {
            cleanupIteratorStates.set(this, { group, index: 0 });
        }

        next() {
            const state = cleanupIteratorStates.get(this);
            const refsMap = refsForGroups.get(state.group);
            const refs = refsMap.keys();
            while (true) {
                let entry = refs.next();
                if (entry.done) {
                    return entry;
                }
                let ref = entry.value;
                if (!getWeakRefTarget(ref)) {
                    let holdings = refsMap.get(ref);
                    refsMap.delete(ref);
                    return { done: false, value: holdings };
                }
            }
        }

        [Symbol.iterator]() {
            return this;
        }
    }
    return [WeakRef, FinalizationGroup];
})();
