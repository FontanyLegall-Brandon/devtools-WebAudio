function genWebaudio(name){
    var audio;
    var audioscript;

    switch (name) {
        case 'balance':
            audio = "<audio src=\"https://mainline.i3s.unice.fr/mooc/drums.mp3\" id=\"pannerPlayer\" controls loop crossorigin=\"anonymous\"></audio>\n" +
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
            audio = "";
            audioscript = "";
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