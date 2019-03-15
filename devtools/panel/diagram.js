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
var data = {"nodes": ["host_a", "comp_with_long_name", "comp_b", "host_b", "comp_c", "comp_d"],
    "edges": [
        {"source": "comp_with_long_name", "target": "host_a"},
        {"source": "comp_b", "target": "host_a"},
        {"source": "comp_c", "target": "host_b"},
        {"source": "comp_b", "target": "host_b"},
        {"source": "comp_d", "target": "host_a"}
    ],
    "tips": {
        "comp_with_long_name": {"version": "1.2",
            "date": "12/03/2014"},
        "comp_b": {"version": "2.3.4",
            "date": "23/06/2014"},
        "comp_c": {"version": "UNKNOWN",
            "date": "UNKNOWN"},
        "comp_d": {"version": "0.4",
            "date": "01/11/2014"}}};

var nodes = data.nodes;
var edges = data.edges;

// Add nodes
nodes.forEach(function(node) {
    if (node.indexOf("host") == 0) {
        g.setNode(node, {
            labelType: "html",
            label: "<img src=\"http://cdn-img.easyicon.net/png/56/5670.png\"/><b>Comp: "+node+"</b>",
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