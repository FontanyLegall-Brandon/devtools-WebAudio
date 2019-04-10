# Meeting 2 - Meeting with Paul Adenot
With :
> Paul Adenot
> Michel Buffa

**This document is a summary of meeting. It does not contain the precise exchanges as well as any private information**
##  Weak References
The mechanism uses the fact that getElementByTagName returns an object that stores "weakrefs". Thus, we can use this "bug" to monitor variables because the attribute becomes a weakref.

After trying to use the WeakRef polypill we found a bug into the polyfill which prevents us to get the garbaged objects. A JSBin as been send to Mozilla and the problem as been validated. Unfortunately, the value of the polyfill is far lower, which in turn make it hard to justify spending time on fixing it.

*Todo :* Try to see where the polyfill uses this trick and understand / plot with the js debugger to correct 

 - A Plunker code that work as been done
 - Run it outside (locally) and test in FireFox, try to understand why the polyfill does not work ....
 -  compare with the jsbin

## CallWatcher

A new version of CallWatcher exist for the WebExtension, need to wait FireFox to get it. 

*Todo :* 
- Check on the FireFox source code the webaudio.js file that uses CallWatcher (old version)
- To monitor access to all properties of webaudio nodes, check the json that contains the list of nodes and their respective properties
- 

## Mentors

Mozilla :
 - Luca Greco : WebExtensions
 - Paul Arduino : Content Script / Weakrefs
 - Nick Fitzgerald : Content Script / Weakrefs
 - Tom : Content Script / Callwatcher
 - Nick : Weakrefs explanations
 - Yulia Startsev

Unice :
 - Michel Buffa

