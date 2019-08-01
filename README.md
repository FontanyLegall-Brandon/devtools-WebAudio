<h1 align="center">
  <br>
  <a href="https://github.com/FontanyLegall-Brandon/devtools-WebAudio"><img src="http://projects.fontany-legall.xyz/devtools-WebAudio/assets/icon96.png" alt="WebAudio"></a>
  <br>
WebAudio devtools extension
  <br>
</h1>

<h4 align="center">The  <a href="https://developer.mozilla.org/fr/docs/Web/API/Web_Audio_API" target="_blank">Web Audio Tool</a> migration  into an web extension</h4>

<p align="center">
<img src="https://travis-ci.com/FontanyLegall-Brandon/devtools-WebAudio.svg?token=ddDp96SuTBDWqbwuapYh&branch=master">
 <a href="">
    <img src="https://img.shields.io/amo/v/incomming.svg">
  </a>
 <img src="https://img.shields.io/github/tag/FontanyLegall-Brandon/devtools-webaudio.svg">
  <a href="https://github.com/FontanyLegall-Brandon/devtools-WebAudio/issues">
    <img src="https://img.shields.io/github/issues/FontanyLegall-Brandon/devtools-webaudio.svg">
  </a>
  <a href="https://github.com/FontanyLegall-Brandon/devtools-WebAudio/blob/master/LICENSE">
    <img src="https://img.shields.io/github/license/FontanyLegall-Brandon/devtools-webaudio.svg">
  </a>
  
</p>

<p align="center">
  <a href="#goal">Goal</a> •
  <a href="#versions">Versions</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#challenges">Challenges</a> •
  <a href="#technical-solutions">Technical Solutions</a> 
</p>


## Goal
Migrate Web Audio Tool to an extension web extension

- Analyse the codebase ([server](https://searchfox.org/mozilla-central/source/devtools/server/actors/webaudio.js)) ([client](https://searchfox.org/mozilla-central/source/devtools/client/webaudioeditor)) (I will send the deletion patch for you to look at in order to determine all of the pieces you need)
- Create a web extension (pure frontend application) which can achieve the same result as the old API. (This is made possible by [weakRefs](https://github.com/tc39/proposal-weakrefs))

## Versions

 - [x] **0.1.3 :**
	 - Create the extension
	 - Import library
	 - Set a basic example of the extension with dagre-d3
- [x] **0.1.4 :**
	 - Minor modifications
- [x] **Viewer 1 :**
	 - Create the viewer
	 - Impletementation of a first self-version of CallWatcher
	 - Transformation of the CallWatcher datas to a Dagre Json
	 - Creation of the Graph
	 - Render of the Graph with D3
	 - Possibility to zoom/click into graph nodes (events)
	 - Possibility to view all the audio parameters into the console
- [ ] **Viewer 2 :**
     - Implementation of a self-version of the WeakRef
	 - Possibility to view the WebAudio real time modifications

## Documentation
- Gists : https://github.com/FontanyLegall-Brandon/devtools-WebAudio/tree/master/gists
- Rapport : https://github.com/FontanyLegall-Brandon/devtools-WebAudio/blob/master/docs/devtools_webaudio.pdf
- Meetings : https://github.com/FontanyLegall-Brandon/devtools-WebAudio/tree/master/docs/meeting

## Challenges
- Two parts of its implementation to be addressed:
	- CallWatcher usage
		- observes connections between nodes
		- changes to settings/properties of nodes
	- ChromeOnly finalization API
		- Used to know when nodes are GC’d and can be removed from the graph
		- On allocation, each node is assigned an ID that is accessible via a ChromeOnly property
		- When a node is reclaimed, a ChromeOnly event is fired that says the ID of the reclaimed node

## Technical Solutions
- CallWatcher can be reimplemented in a content script
	- Tom (see Mozilla Support Staff) is working on formalizing this sort of thing in a new web extension API
- Finalization
	- Use TC39 WeakRef and Finalizer API
	- Native implementation maybe not ready by the time we want to remove the Web Audio tool
	- But there is a working polyfill! Till Schneidereit has it
	- In a content script:
		- assign each newly allocated audio node an ID
		- set a finalizer for that node that uses this ID as its holdings
		- when the node is reclaimed, the finalizer runs with the ID holdings, which we postMessage (or whatever messaging API content scripts have) the ID up to the web extension itself, so it can clean up

## Credits
- Referent : Michel Buffa
- Mentors :
    - Luca Greco
    - Paul Arduino
    - Nick Fitzgerald
    - Yulia Startsev
