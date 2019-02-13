# Mozilla-WebAudio

## Goal
Migrate Web Audio Tool to an extension web extension

- Analyse the codebase (server) (client) (I will send the deletion patch for you to look at in order to determine all of the pieces you need)
- Create a web extension (pure frontend application) which can achieve the same result as the old API. (This is made possible by weakRefs)

## Skills
- Working with upcoming JavaScript Proposals
- Understanding Shared Garbage Collection
- Web Audio Nodes
- Web Extension authoring
- Project Planning

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

## Timeline
- The other two panels will be deprecated as intended during q4 2018/q1 2019
- WebAudio panel will remain as it is until q2 2019
	- We will support the student and write up information regarding the different parts of the proposal
		- Nick → weakrefs / finalize
		- Paul → web audio specifics
		- Tom → content script
		- Yulia → devtools
		- lgreco → web extensions
