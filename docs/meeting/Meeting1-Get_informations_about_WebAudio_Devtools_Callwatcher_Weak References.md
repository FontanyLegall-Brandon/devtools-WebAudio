# Meeting 1 - Get informations about WebAudio Devtools / Callwatcher / Weak References
With :
> Yulia Startsev
> Michel Buffa
> Fontany-Legall Brandon

**This document is a summary of meeting. It does not contain the precise exchanges as well as any private information**
##  Weak References
Weakrefs Git : https://github.com/tc39/proposal-weakrefs

Weak References is a proposed feature for use by library and framework creators to allow access to an object that has not yet been reclaimed but does not repent that object from being reclaimed. A WeakRef is an object that is used to refer to a target object without preserving it from garbage collection. WeakRefs can dereference to allow access to the target object, if the target object hasn't been reclaimed by garbage collection.

Specifications : (this specidfications are valid at the time of writing and and are likely to have evolved since)
 - Really experimental feature
 - Stage 1 of specification process
 - Possible trouble issues with browser (1 detected)

important : Is asked to make a maximum of feedback on the Weak References

## CallWatcher
~~CallWatcher : https://searchfox.org/mozilla-central/source/devtools/server/actors/utils/call-watcher.js~~
The CallWatcher is a API wich records every function call that is no longer available and it will be necessary to recover it by replicating the code .


## Conclusion
Here is the probable and non definitive presentation of the creation of the graph
<p align="center">
  <img src="http://projects.fontany-legall.xyz/devtools-WebAudio/assets/meeting1.png" alt="presentation">
</p>


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
