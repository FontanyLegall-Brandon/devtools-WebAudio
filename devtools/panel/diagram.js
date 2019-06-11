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

// Data for this example
var data = {"nodes": ["node2_a", "node_a", "node_b", "node2_b", "node_c", "node_d"],
    "edges": [
        {"source": "node_a", "target": "node2_a"},
        {"source": "node_b", "target": "node2_a"},
        {"source": "node_c", "target": "node2_b"},
        {"source": "node_b", "target": "node2_b"},
        {"source": "node_d", "target": "node2_a"}
    ],
    "tips": {
        "node_a": {"version": "1.2",
            "date": "12/03/2014"},
        "node_b": {"version": "2.3.4",
            "date": "23/06/2014"},
        "node_c": {"version": "UNKNOWN",
            "date": "UNKNOWN"},
        "node_d": {"version": "0.4",
            "date": "01/11/2014"}}};

var nodes = data.nodes;
var edges = data.edges;

// Add nodes
nodes.forEach(function(node) {

        g.setNode(node, {
            labelType: "html",
            label: "<b>"+node+"</b>",
            class: "comp",
            rx: 5,
            ry: 5,
            width: 150
        });
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


d3.selectAll("g.node")
    .attr("title", function(v) {
        console.log("v=" + v.toString());
        if (v.indexOf('host') < 0) {
            return styleTooltip(v, data.tips[v]);
        } else {
            return "";
        }
    })
    .each(function(v) {
        $(this).tipsy({ gravity: "e", opacity: 1, html: true });
    });


svg.selectAll("g.node").on("click", function(id) { var _node = g.node(id); console.log("Clicked " + id,_node); });