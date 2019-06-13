function genWebaudio(name){
    var audio;
    var audioscript;

    switch (name) {
        case 'balance':
            audio = "<audio src=\"https://brandon.fontany-legall.xyz/public/audio/drums.mp3\" id=\"pannerPlayer\" controls loop crossorigin=\"anonymous\"></audio>\n" +
                "<br>\n" +
                "<label for=\"pannerSlider\">Balance</label>\n" +
                "<input type=\"range\" min=\"-1\" max=\"1\" step=\"0.1\" value=\"0\" id=\"pannerSlider\" />";
            audioscript = "var ctx = window.AudioContext || window.webkitAudioContext;\n" +
                "var audioContext;\n" +
                "var player, pannerSlider, pannerNode;\n" +
                "\n" +
                "var audio = document.getElementsByTagName(\"audio\")[0];\n" +
                "audio.addEventListener(\"load\", webaudio(), false);\n" +
                "\n" +
                "function webaudio() {\n" +
                "  \n" +
                "   // get the AudioContext\n" +
                "   audioContext = new ctx();\n" +
                "\n" +
                "    // the audio element\n" +
                "   playerPanner = document.querySelector('#pannerPlayer');\n" +
                "    playerPanner.onplay = (e) => {audioContext.resume();}\n" +
                "\n" +
                "   pannerSlider = document.querySelector('#pannerSlider');\n" +
                "\n" +
                "  buildAudioGraphPanner();\n" +
                "  \n" +
                "  // input listener on the gain slider\n" +
                "  pannerSlider.oninput = function(evt){\n" +
                "    pannerNode.pan.value = evt.target.value;\n" +
                "  }; \n" +
                "};\n" +
                "\n" +
                "function buildAudioGraphPanner() {\n" +
                "    // create source and gain node\n" +
                "    var source = audioContext.createMediaElementSource(playerPanner);\n" +
                "    // Ceci doit marcher pour créer un noeud de type StereoPanner\n" +
                "    //pannerNode = audioContext.createStereoPanner();\n" +
                "  \n" +
                "    // ceci doit marcher aussi : c'est l'autre manière de créer un noeud\n" +
                "    pannerNode =  new StereoPannerNode(audioContext);\n" +
                "  \n" +
                "    // connect nodes together\n" +
                "    source.connect(pannerNode);\n" +
                "    pannerNode.connect(audioContext.destination);\n" +
                "\n" +
                "}";
            break;
        case 'equalizer':
            audio = "<div class=\"eq\">\n" +
                "  <audio id=\"player\" controls crossorigin=\"anonymous\" loop>\n" +
                "  <source src=\"https://brandon.fontany-legall.xyz/public/audio/guitarRiff1.mp3\">\n" +
                "  \n" +
                "  Your browser does not support the audio tag.\n" +
                "</audio>\n" +
                "  <div class=\"controls\">\n" +
                "    <label>60Hz</label>\n" +
                "    <input type=\"range\" value=\"0\" step=\"1\" min=\"-30\" max=\"30\" oninput=\"changeGain(this.value, 0);\"></input>\n" +
                "  <output id=\"gain0\">0 dB</output>\n" +
                "  </div>\n" +
                "  <div class=\"controls\">\n" +
                "    <label>170Hz</label>\n" +
                "    <input type=\"range\" value=\"0\" step=\"1\" min=\"-30\" max=\"30\" oninput=\"changeGain(this.value, 1);\"></input>\n" +
                "<output id=\"gain1\">0 dB</output>\n" +
                "  </div>\n" +
                "  <div class=\"controls\">\n" +
                "    <label>350Hz</label>\n" +
                "    <input type=\"range\" value=\"0\" step=\"1\" min=\"-30\" max=\"30\" oninput=\"changeGain(this.value, 2);\"></input>\n" +
                "<output id=\"gain2\">0 dB</output>\n" +
                "  </div>\n" +
                "  <div class=\"controls\">\n" +
                "    <label>1000Hz</label>\n" +
                "    <input type=\"range\" value=\"0\" step=\"1\" min=\"-30\" max=\"30\" oninput=\"changeGain(this.value, 3);\"></input>\n" +
                "<output id=\"gain3\">0 dB</output>\n" +
                "  </div>\n" +
                "  <div class=\"controls\">\n" +
                "    <label>3500Hz</label>\n" +
                "    <input type=\"range\" value=\"0\" step=\"1\" min=\"-30\" max=\"30\" oninput=\"changeGain(this.value, 4);\"></input>\n" +
                "<output id=\"gain4\">0 dB</output>\n" +
                "  </div>\n" +
                "  <div class=\"controls\">\n" +
                "    <label>10000Hz</label>\n" +
                "    <input type=\"range\" value=\"0\" step=\"1\" min=\"-30\" max=\"30\" oninput=\"changeGain(this.value, 5);\"></input>\n" +
                "<output id=\"gain5\">0 dB</output>\n" +
                "  </div>\n" +
                "</div>";
            audioscript = "var ctx = window.AudioContext || window.webkitAudioContext;\n" +
                "var context = new ctx();\n" +
                "\n" +
                "var mediaElement = document.getElementById('player');\n" +
                "    mediaElement.onplay = (e) => {context.resume();}\n" +
                "\n" +
                "var sourceNode = context.createMediaElementSource(mediaElement);\n" +
                "\n" +
                "// create the equalizer. It's a set of biquad Filters\n" +
                "\n" +
                "var filters = [];\n" +
                "\n" +
                "    // Set filters\n" +
                "    [60, 170, 350, 1000, 3500, 10000].forEach(function(freq, i) {\n" +
                "      var eq = context.createBiquadFilter();\n" +
                "      eq.frequency.value = freq;\n" +
                "      eq.type = \"peaking\";\n" +
                "      eq.gain.value = 0;\n" +
                "      filters.push(eq);\n" +
                "    });\n" +
                "\n" +
                " // Connect filters in serie\n" +
                "   sourceNode.connect(filters[0]);\n" +
                "   for(var i = 0; i < filters.length - 1; i++) {\n" +
                "      filters[i].connect(filters[i+1]);\n" +
                "    }\n" +
                "\n" +
                "// connect the last filter to the speakers\n" +
                "filters[filters.length - 1].connect(context.destination);\n" +
                "\n" +
                "function changeGain(sliderVal,nbFilter) {\n" +
                "  var value = parseFloat(sliderVal);\n" +
                "  filters[nbFilter].gain.value = value;\n" +
                "  \n" +
                "  // update output labels\n" +
                "  var output = document.querySelector(\"#gain\"+nbFilter);\n" +
                "  output.value = value + \" dB\";\n" +
                "}";
            break;
        default:
            audio = "";
            audioscript = "";
            break;
    }

    return [audio,audioscript];
}

function insertWebaudio(code){
    var audio = code[0];
    var audioscript = code[1];

    document.getElementById("webaudioIn").value = audio;
    document.getElementById("webaudioInScript").value = audioscript;

    return true;
}

function generateWebaudio(){
    var selected = document.getElementById("selectedToGen").value;
    return insertWebaudio(genWebaudio(selected));
}