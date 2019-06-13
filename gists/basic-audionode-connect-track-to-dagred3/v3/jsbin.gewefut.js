/* DIAGRED3 */
class Graph{
  
  static create(){
   Graph.nodes = [];
	Graph.edges = [];
	Graph.tips = [];
  }
  
  static addNode(node){
  	Graph.nodes.push(node);
  }
  
  static addEdge(edge){
  	Graph.edges.push(edge);
  }
  
  static addTips(tips){
  	Graph.tips.push(tips);
  }
  
 static draw(){
 	
 	// Data for this example
var nodes = Graph.nodes;
var edges = Graph.edges;
var tips = Graph.tips;
 
      
// Set up zoom support
var svg = d3.select("svg"),
    inner = svg.select("g"),
    zoom = d3.zoom().on("zoom", function() {
        inner.attr("transform", d3.event.transform);
    });
svg.call(zoom);



// Preparation of DagreD3 data structures
var g = new dagreD3.graphlib.Graph().setGraph({
    nodesep: 10,
    ranksep: 150,
    rankdir: "LR",
    marginx: 20,
    marginy: 20
});



// Add nodes
nodes.forEach(function(node) {
    if (node.indexOf("host") == 0) {
        g.setNode(node, {
            labelType: "html",
            label: "<b>Comp: "+node+"</b>",
            class: "host",
            rx: 5,
            ry: 5,
            width: 150
        });
    } else {
        g.setNode(node, {
            labelType: "html",
            label: "<b>"+node+"</b>",
            class: "comp",
            rx: 5,
            ry: 5,
            width: 150
        });

    }
});

// Add edges
edges.forEach(function(edge) {
    var edgeclass = "normal";
    if (edge.source == 'comp_d') {
        edgeclass = "warning";
    }
    g.setEdge(edge.source, edge.target,
        {
            label: "on",
            arrowhead: "vee",
            arrowheadStyle: "fill: #383838",
            class: edgeclass,
            lineInterpolate: 'bundle'
        });
});

var render = new dagreD3.render();
// Set graph height and init zoom
var height = 900;

var container = svg.select("g");

render(container, g);

svg.attr("height", height);

// Simple function to style the tooltip for the given node.
var styleTooltip = function(name, description) {
    return "<p class='name'>Version: " + description.version + "</p><p class='description'>Date: " + description.date + "</p>";
};

svg.selectAll("g.node").on("click", function(id) { var _node = g.node(id); console.log("Clicked "); });


  }}

Graph.create();
Graph.draw();

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
    console.log("number of inputs : "+ audioNode.numberOfInputs);
    console.log("number of Outputs : "+ audioNode.numberOfOutputs);
    console.log("new "+audioNode.constructor.name+" intercepté !");
    console.log(originalConstructor)
    WebAudioDebugger.nodeList.push(audioNode.constructor.name);
    WebAudioDebugger.nodeNumber++;
    Graph.addNode(audioNode.constructor.name);
   return audioNode;
  }
  
  
  // DECORATEURS DES METHODES
   static connectDecorator(nativeBoundConnect, originalArguments) {
    var result = nativeBoundConnect(this, originalArguments);

    console.log("connect appelé")
    WebAudioDebugger.nodeNumber++;
    WebAudioDebugger.nodeList.push(result.constructor.name + "(id "+WebAudioDebugger.nodeNumber+")");
    Graph.addNode(result.constructor.name + "(id "+WebAudioDebugger.nodeNumber+")");
    
  }
}


WebAudioDebugger.nodeList = [];
WebAudioDebugger.nodeNumber = 0;


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
  console.log(WebAudioDebugger.nodeList);
  Graph.draw();
  
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