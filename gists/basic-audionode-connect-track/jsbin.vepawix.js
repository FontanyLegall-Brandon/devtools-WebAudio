/**
 * A reference to a native function that performs the logic of
 * Function.prototype.bind([CONSTRUCTOR], arguments ...). We need this reference
 * because we rely on using that logic to construct various objects, but some
 * libraries such as prototype.js override the native bind and apply methods.
 * @private {!Function}
 */
nativeBindApplyMethod_ = Function.prototype.apply.bind(Function.prototype.bind);

class WebAudioDebugger {
   static wrapNativeFunction(originalNativeFunction, decorator) {
    return function() {
      return decorator.call(this, originalNativeFunction, arguments);
    };
  }
  
  // DECORATEURS DES CONSTRUCTEURS 
  // ici pour les create... car on peut créer un même noeud de 2 manières
  // différentes
  static newNodeDecorator(nativeApplyBoundToMethod, originalArguments) {
    var result = nativeApplyBoundToMethod(this, originalArguments);
    console.log("createStereoPanner intercepté")
    return result;
  }
  
  // ici pour les new ...
  static createAudioNodeUsingConstructor(originalConstructor, argumentsList) {
    // Null is the context. We cannot append to Arguments because it's not a
    // list. We convert it to a list by slicing.
    var audioNode =  (
        new (nativeBindApplyMethod_(
            originalConstructor, [null].concat(argumentsList))));
    console.log("new StereoPannerNode(ctx) intercepté !")
    return audioNode;
  }
  
  
  // DECORATEURS DES METHODES
   static connectDecorator(nativeBoundConnect, originalArguments) {
    var result = nativeBoundConnect(this, originalArguments);

    console.log("connect appelé")
    WebAudioDebugger.nodeList.push("toto");
    console.log(WebAudioDebugger.nodeList)
  }
}

WebAudioDebugger.nodeList = [];


/* ------------------------------------------------------------- */
/* On redéfinit toutes les appels de méthodes de la WebAudio API */
/* ------------------------------------------------------------- */
AudioNode.prototype.connect = WebAudioDebugger.wrapNativeFunction(
      Function.prototype.apply.bind(AudioNode.prototype.connect),
      WebAudioDebugger.connectDecorator);

/*--------------------------------*/

/* Redéfinition des constructeurs */
/*--------------------------------*/
/* Il existe deux manières de créer des noeuds : 1) avec ctx.create... et
   2) à l'aide d'un new de la classe du noeud. Ex: node = ctx.createStereoPannerNode()
      ou node = new StereoPannerNode(ctx). Il faut donc intercepter les
      deux types d'appels. Il faut donc deux redéfinitions par type de noeuds
      
/** @override de la fonction createStereoPannerNode */
  BaseAudioContext.prototype.createStereoPanner = WebAudioDebugger.wrapNativeFunction(
      Function.prototype.apply.bind(
          BaseAudioContext.prototype.createStereoPanner),
      WebAudioDebugger.newNodeDecorator);

/* Override du "vrai" constructeur de la classe StereoPannerNode */
  if (typeof window['StereoPannerNode'] == 'function') {
    var constructorName = 'StereoPannerNode';
    var originalStereoPannerNodeConstructor = StereoPannerNode;
    StereoPannerNode = function() {
      return WebAudioDebugger.createAudioNodeUsingConstructor(
          originalStereoPannerNodeConstructor,
          Array.prototype.slice.call(arguments));
    };
    StereoPannerNode['prototype'] =
        originalStereoPannerNodeConstructor.prototype;
    StereoPannerNode['prototype']['constructor'] = StereoPannerNode;
  }


/* CODE CLIENT */

// This line is a trick to initialize the AudioContext
// that will work on all recent browsers
var ctx = window.AudioContext || window.webkitAudioContext;
var audioContext;
var player, pannerSlider, pannerNode;

window.onload = function() {
  
   // get the AudioContext
   audioContext = new ctx();

    // the audio element
   playerPanner = document.querySelector('#pannerPlayer');
    playerPanner.onplay = (e) => {audioContext.resume();}

   pannerSlider = document.querySelector('#pannerSlider');

  buildAudioGraphPanner();
  
  // input listener on the gain slider
  pannerSlider.oninput = function(evt){
    pannerNode.pan.value = evt.target.value;
  }; 
};

function buildAudioGraphPanner() {
    // create source and gain node
    var source = audioContext.createMediaElementSource(playerPanner);
    // Ceci doit marcher pour créer un noeud de type StereoPanner
    //pannerNode = audioContext.createStereoPanner();
  
    // ceci doit marcher aussi : c'est l'autre manière de créer un noeud
    pannerNode =  new StereoPannerNode(audioContext);
  
    // connect nodes together
    source.connect(pannerNode);
    pannerNode.connect(audioContext.destination);

}