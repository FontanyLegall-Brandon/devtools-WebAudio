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

    static addEdge(source,target){
        Graph.edges.push({"source": source, "target": target});
    }

    static addTips(tips){
        Graph.tips.push(tips);
    }

    static reset(){
        var svg = d3.select("svg > g");
        svg.selectAll("*").remove();

        Graph.nodes = [];
        Graph.edges = [];
        Graph.tips = [];

        WebAudioDebugger.nodeNumber = 1;
        WebAudioDebugger.lastest = null;
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
                g.setNode(node, {
                    labelType: "html",
                    label: "<b>"+node+"</b>",
                    class: "comp",
                    rx: 5,
                    ry: 5
                });

        });

// Add edges
        edges.forEach(function(edge) {
            var edgeclass = "normal";
            g.setEdge(edge.source, edge.target,
                {
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
 * Prototype to get name of a function
 * @returns {string}
 */
Object.prototype.getName = function() {
    var funcNameRegex = /function (.{1,})\(/;
    var results = (funcNameRegex).exec((this).constructor.toString());
    return (results && results.length > 1) ? results[1] : "";
};



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
        console.log("Audio constructeur intercepté !");
        WebAudioDebugger.nodeNumber++;
        return result;
    }

    // ici pour les new ...
    static createAudioNodeUsingConstructor(originalConstructor, argumentsList) {
        // Null is the context. We cannot append to Arguments because it's not a
        // list. We convert it to a list by slicing.
        var audioNode =  (
            new (nativeBindApplyMethod_(
                originalConstructor, [null].concat(argumentsList))));
        console.log("Audio constructeur intercepté !");
        WebAudioDebugger.nodeNumber++;
        //Graph.addNode("StereoPannerNode");
        //Graph.draw();
        return audioNode;
    }


    // DECORATEURS DES METHODES
    static connectDecorator(nativeBoundConnect, originalArguments) {
        var result = nativeBoundConnect(this, originalArguments);

        console.log("connect appelé");
        WebAudioDebugger.nodeNumber++;
        var name  = originalArguments[0].constructor.name.toString();
        var node = name+WebAudioDebugger.nodeNumber;
        console.log(originalArguments[0]);
        console.log(originalArguments[0].constructor.name);

        Graph.addNode(node);
        if(WebAudioDebugger.lastest != null){
            Graph.addEdge(WebAudioDebugger.lastest,node);
        }
        WebAudioDebugger.lastest = node;
        Graph.draw();

    }
}


WebAudioDebugger.nodeNumber = 1;
WebAudioDebugger.lastest = null;


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