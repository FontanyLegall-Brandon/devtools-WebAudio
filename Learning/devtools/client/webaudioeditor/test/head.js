<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8" />
  <link href="/static/icons/search.png" rel="shortcut icon">
  <title>head.js - mozsearch</title>
  <link href="/static/css/mozsearch.css" rel="stylesheet" type="text/css" media="screen"/>
  <link href="/static/css/icons.css" rel="stylesheet" type="text/css" media="screen"/>
  <link href="/static/css/selector-common.css" rel="stylesheet" type="text/css" media="screen"/>
  <link href="/static/css/filter.css" rel="stylesheet" type="text/css" media="screen"/>
  <link href="/static/css/xcode.css" rel="stylesheet" type="text/css" media="screen"/>
</head>

<body class="old-rev">
  <form method="get" action="/mozilla-central/search" id="basic_search" class="search-box">
    <fieldset>
      <div id="search-box" class="h-flex-container" role="group">
        <div id="query-section">
          <label for="query" class="query_label visually-hidden">Find</label>
          <input type="text" name="q" value="" maxlength="2048" id="query" accesskey="s" title="Search" placeholder="Search mozilla-central" autocomplete="off" />
          <div class="zero-size-container">
            <div class="bubble" id="query-bubble">
            </div>
          </div>
          <section id="spinner"></section>
        </div>
        <div id="option-section" class="v-flex-container">
          <label for="case">
            <input type="checkbox" name="case" id="case" class="option-checkbox" value="true" accesskey="c"/><span class="access-key">C</span>ase-sensitive
          </label>
          <label for="regexp">
            <input type="checkbox" name="regexp" id="regexp" class="option-checkbox" value="true" accesskey="r"/><span class="access-key">R</span>egexp search
          </label>
        </div>
        <div id="path-section">
          <label for="query" class="query_label visually-hidden">Path</label>
          <input type="text" name="path" value="" maxlength="2048" id="path" accesskey="p" title="Path" placeholder="Path filter (supports globbing and ^, $)" autocomplete="off" />
          <div class="zero-size-container">
            <div class="bubble" id="path-bubble">
            </div>
          </div>
        </div>
      </div>
    </fieldset>
    <input type="submit" value="Search" class="visually-hidden" />
    <div id="revision">
      <span id="rev-id">Showing <a href="/mozilla-central/commit/01b4b3830ea3cae2e9e431019afa6391b471c6da">01b4b383</a>:</span>
      <span id="rev-desc">Backed out changeset bc69bea83b66 (bug <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1527522">1527522</a>) for wrench bustages. CLOSED TREE</span>
    </div>
  </form>
  <div id="content" class="content" data-no-results="No results for current query.">
<div class="breadcrumbs"><a href="/mozilla-central/source/">mozilla-central</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools">devtools</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client">client</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor">webaudioeditor</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/test">test</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/test/head.js">head.js</a></div>
<div class="panel">
  <button id="panel-toggle">
    <span class="navpanel-icon expanded" aria-hidden="false"></span>
    Navigation
  </button>
  <section id="panel-content" aria-expanded="true" aria-hidden="false">
  <label class="panel-accel"><input type="checkbox" id="panel-accel-enable" checked="checked">Enable keyboard shortcuts</label>
  <h4>Source code</h4>
  <ul>
  <li>
  <a href="https://bugzilla.mozilla.org/enter_bug.cgi?product=DevTools&component=Web Audio Editor" title="File a bug in DevTools :: Web Audio Editor" class="icon">File a bug in DevTools :: Web Audio Editor</a>
  </li>
  </ul>
  <h4>Revision control</h4>
  <ul>
  <li>
  <a href="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/test/head.js" title="Permalink" class="icon" data-update-link="true" data-link="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/test/head.js">Permalink <span class="accel">Y</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/log/tip/devtools/client/webaudioeditor/test/head.js" title="Log" class="icon">Log <span class="accel">L</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/raw-file/tip/devtools/client/webaudioeditor/test/head.js" title="Raw" class="icon">Raw <span class="accel">R</span></a>
  </li>
  <li>
  <a href="javascript:alert('Hover over the gray bar on the left to see blame information.')" title="Blame" class="icon">Blame</a>
  </li>
  </ul>
  </section>
</div>
<table id="file" class="file">
  <thead class="visually-hidden">
    <th scope="col">Line</th>
    <th scope="col">Code</th>
  </thead>
  <tbody>
    <tr>
      <td id="line-numbers">
<span id="l1" class="line-number">1
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#1" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l2" class="line-number">2
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#2" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l3" class="line-number">3
<div class="blame-strip c2" data-blame="c6cf60a39f022f08d57082932b1a4fb87ed65b57#%#3" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l4" class="line-number">4
<div class="blame-strip c2" data-blame="c6cf60a39f022f08d57082932b1a4fb87ed65b57#%#4" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l5" class="line-number">5
<div class="blame-strip c2" data-blame="c6cf60a39f022f08d57082932b1a4fb87ed65b57#%#5" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l6" class="line-number">6
<div class="blame-strip c2" data-blame="c6cf60a39f022f08d57082932b1a4fb87ed65b57#%#6" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l7" class="line-number">7
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#3" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l8" class="line-number">8
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#4" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l9" class="line-number">9
<div class="blame-strip c2" data-blame="c6cf60a39f022f08d57082932b1a4fb87ed65b57#%#9" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l10" class="line-number">10
<div class="blame-strip c2" data-blame="c6cf60a39f022f08d57082932b1a4fb87ed65b57#%#10" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l11" class="line-number">11
<div class="blame-strip c2" data-blame="c6cf60a39f022f08d57082932b1a4fb87ed65b57#%#11" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l12" class="line-number">12
<div class="blame-strip c2" data-blame="c6cf60a39f022f08d57082932b1a4fb87ed65b57#%#12" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l13" class="line-number">13
<div class="blame-strip c2" data-blame="c6cf60a39f022f08d57082932b1a4fb87ed65b57#%#13" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l14" class="line-number">14
<div class="blame-strip c1" data-blame="64db2267cf9899840b44ce4116c2dd94aa0c3d8e#browser/devtools/webaudioeditor/test/head.js#18" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l15" class="line-number">15
<div class="blame-strip c1" data-blame="64db2267cf9899840b44ce4116c2dd94aa0c3d8e#browser/devtools/webaudioeditor/test/head.js#19" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l16" class="line-number">16
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#20" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l17" class="line-number">17
<div class="blame-strip c1" data-blame="644e1b42f851e83598451542be0a5af39578583d#%#17" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l18" class="line-number">18
<div class="blame-strip c2" data-blame="64db2267cf9899840b44ce4116c2dd94aa0c3d8e#browser/devtools/webaudioeditor/test/head.js#24" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l19" class="line-number">19
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#24" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l20" class="line-number">20
<div class="blame-strip c2" data-blame="4f1af0e003d54d19ace2eb38c410aef972e185f2#%#28" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l21" class="line-number">21
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#26" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l22" class="line-number">22
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l23" class="line-number">23
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#28" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l24" class="line-number">24
<div class="blame-strip c2" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/head.js#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l25" class="line-number">25
<div class="blame-strip c1" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l26" class="line-number">26
<div class="blame-strip c2" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/head.js#29" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l27" class="line-number">27
<div class="blame-strip c1" data-blame="6e6b4e58dfe1d76134444235ca284a2063885ec9#browser/devtools/webaudioeditor/test/head.js#31" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l28" class="line-number">28
<div class="blame-strip c2" data-blame="475faee8d3438197f17a1ec34236cd9186b0a844#browser/devtools/webaudioeditor/test/head.js#32" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l29" class="line-number">29
<div class="blame-strip c1" data-blame="2f530b44a0c94a5bbc98cc34c08d7ba5a621d718#browser/devtools/webaudioeditor/test/head.js#33" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l30" class="line-number">30
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/head.js#33" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l31" class="line-number">31
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#29" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l32" class="line-number">32
<div class="blame-strip c2" data-blame="d3b05e8c5adca5d46bfe006de588682aa940b505#%#35" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l33" class="line-number">33
<div class="blame-strip c2" data-blame="d3b05e8c5adca5d46bfe006de588682aa940b505#%#36" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l34" class="line-number">34
<div class="blame-strip c2" data-blame="d3b05e8c5adca5d46bfe006de588682aa940b505#%#37" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l35" class="line-number">35
<div class="blame-strip c2" data-blame="d3b05e8c5adca5d46bfe006de588682aa940b505#%#38" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l36" class="line-number">36
<div class="blame-strip c2" data-blame="d3b05e8c5adca5d46bfe006de588682aa940b505#%#39" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l37" class="line-number">37
<div class="blame-strip c1" data-blame="64db2267cf9899840b44ce4116c2dd94aa0c3d8e#browser/devtools/webaudioeditor/test/head.js#43" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l38" class="line-number">38
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#34" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l39" class="line-number">39
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#35" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l40" class="line-number">40
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#37" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l41" class="line-number">41
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#38" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l42" class="line-number">42
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#39" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l43" class="line-number">43
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#40" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l44" class="line-number">44
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#41" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l45" class="line-number">45
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#105" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l46" class="line-number">46
<div class="blame-strip c2" data-blame="ef1c99b06e5ae1149780ba5a04c1f37b72a2dead#%#46" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l47" class="line-number">47
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#107" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l48" class="line-number">48
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#108" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l49" class="line-number">49
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#109" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l50" class="line-number">50
<div class="blame-strip c2" data-blame="2ff4c3a1bc39151016102aa16599ab52c3e873f7#browser/devtools/webaudioeditor/test/head.js#117" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l51" class="line-number">51
<div class="blame-strip c1" data-blame="ef1c99b06e5ae1149780ba5a04c1f37b72a2dead#%#51" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l52" class="line-number">52
<div class="blame-strip c2" data-blame="2ff4c3a1bc39151016102aa16599ab52c3e873f7#browser/devtools/webaudioeditor/test/head.js#119" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l53" class="line-number">53
<div class="blame-strip c2" data-blame="2ff4c3a1bc39151016102aa16599ab52c3e873f7#browser/devtools/webaudioeditor/test/head.js#120" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l54" class="line-number">54
<div class="blame-strip c2" data-blame="2ff4c3a1bc39151016102aa16599ab52c3e873f7#browser/devtools/webaudioeditor/test/head.js#121" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l55" class="line-number">55
<div class="blame-strip c1" data-blame="3c0bacbcdc816623a9982b930c0638c78ab4a2c5#browser/devtools/webaudioeditor/test/head.js#119" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l56" class="line-number">56
<div class="blame-strip c1" data-blame="3c0bacbcdc816623a9982b930c0638c78ab4a2c5#browser/devtools/webaudioeditor/test/head.js#120" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l57" class="line-number">57
<div class="blame-strip c1" data-blame="3c0bacbcdc816623a9982b930c0638c78ab4a2c5#browser/devtools/webaudioeditor/test/head.js#121" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l58" class="line-number">58
<div class="blame-strip c1" data-blame="3c0bacbcdc816623a9982b930c0638c78ab4a2c5#browser/devtools/webaudioeditor/test/head.js#122" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l59" class="line-number">59
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#111" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l60" class="line-number">60
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#112" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l61" class="line-number">61
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#113" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l62" class="line-number">62
<div class="blame-strip c1" data-blame="7324ecc861296e29c0f8485b3d275721fd600386#%#164" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l63" class="line-number">63
<div class="blame-strip c2" data-blame="af2e5d5dd1c831bb53395baf7859f5406a549b38#%#165" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l64" class="line-number">64
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#118" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l65" class="line-number">65
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#65" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l66" class="line-number">66
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#66" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l67" class="line-number">67
<div class="blame-strip c2" data-blame="082e20e6935b405de5e0f7974f24c69076720a44#%#67" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l68" class="line-number">68
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#123" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l69" class="line-number">69
<div class="blame-strip c2" data-blame="fc8714580a05d84127b74ce575073658963177cb#%#69" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l70" class="line-number">70
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#125" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l71" class="line-number">71
<div class="blame-strip c2" data-blame="21e70729495f6509b7fcc9debca900d20c8644ec#%#71" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l72" class="line-number">72
<div class="blame-strip c1" data-blame="00dbbebd815b43b3dacb77d24a34daab67b50e51#browser/devtools/webaudioeditor/test/head.js#145" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l73" class="line-number">73
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#73" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l74" class="line-number">74
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#129" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l75" class="line-number">75
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#130" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l76" class="line-number">76
<div class="blame-strip c2" data-blame="3c0bacbcdc816623a9982b930c0638c78ab4a2c5#browser/devtools/webaudioeditor/test/head.js#142" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l77" class="line-number">77
<div class="blame-strip c2" data-blame="3c0bacbcdc816623a9982b930c0638c78ab4a2c5#browser/devtools/webaudioeditor/test/head.js#143" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l78" class="line-number">78
<div class="blame-strip c2" data-blame="3c0bacbcdc816623a9982b930c0638c78ab4a2c5#browser/devtools/webaudioeditor/test/head.js#144" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l79" class="line-number">79
<div class="blame-strip c2" data-blame="3c0bacbcdc816623a9982b930c0638c78ab4a2c5#browser/devtools/webaudioeditor/test/head.js#145" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l80" class="line-number">80
<div class="blame-strip c2" data-blame="3c0bacbcdc816623a9982b930c0638c78ab4a2c5#browser/devtools/webaudioeditor/test/head.js#146" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l81" class="line-number">81
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#134" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l82" class="line-number">82
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#135" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l83" class="line-number">83
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#136" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l84" class="line-number">84
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#84" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l85" class="line-number">85
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#85" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l86" class="line-number">86
<div class="blame-strip c2" data-blame="082e20e6935b405de5e0f7974f24c69076720a44#%#86" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l87" class="line-number">87
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#141" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l88" class="line-number">88
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#144" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l89" class="line-number">89
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#91" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l90" class="line-number">90
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#92" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l91" class="line-number">91
<div class="blame-strip c1" data-blame="00dbbebd815b43b3dacb77d24a34daab67b50e51#browser/devtools/webaudioeditor/test/head.js#161" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l92" class="line-number">92
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#94" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l93" class="line-number">93
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#149" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l94" class="line-number">94
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#150" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l95" class="line-number">95
<div class="blame-strip c2" data-blame="3c0bacbcdc816623a9982b930c0638c78ab4a2c5#browser/devtools/webaudioeditor/test/head.js#163" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l96" class="line-number">96
<div class="blame-strip c2" data-blame="3c0bacbcdc816623a9982b930c0638c78ab4a2c5#browser/devtools/webaudioeditor/test/head.js#164" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l97" class="line-number">97
<div class="blame-strip c2" data-blame="3c0bacbcdc816623a9982b930c0638c78ab4a2c5#browser/devtools/webaudioeditor/test/head.js#165" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l98" class="line-number">98
<div class="blame-strip c2" data-blame="3c0bacbcdc816623a9982b930c0638c78ab4a2c5#browser/devtools/webaudioeditor/test/head.js#166" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l99" class="line-number">99
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#152" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l100" class="line-number">100
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#153" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l101" class="line-number">101
<div class="blame-strip c2" data-blame="3c0bacbcdc816623a9982b930c0638c78ab4a2c5#browser/devtools/webaudioeditor/test/head.js#169" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l102" class="line-number">102
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#159" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l103" class="line-number">103
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#160" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l104" class="line-number">104
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#161" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l105" class="line-number">105
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#163" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l106" class="line-number">106
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#164" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l107" class="line-number">107
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#165" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l108" class="line-number">108
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#131" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l109" class="line-number">109
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#132" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l110" class="line-number">110
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#133" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l111" class="line-number">111
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#134" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l112" class="line-number">112
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#135" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l113" class="line-number">113
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#136" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l114" class="line-number">114
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#137" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l115" class="line-number">115
<div class="blame-strip c1" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#208" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l116" class="line-number">116
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#118" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l117" class="line-number">117
<div class="blame-strip c1" data-blame="76baf9e8d67bf3c9c883264c490cdb19038445d5#%#211" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l118" class="line-number">118
<div class="blame-strip c2" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#206" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l119" class="line-number">119
<div class="blame-strip c1" data-blame="d226fcc86a0395cfec6ccc924c10c975e28cd3cb#%#121" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l120" class="line-number">120
<div class="blame-strip c2" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#208" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l121" class="line-number">121
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#123" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l122" class="line-number">122
<div class="blame-strip c2" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#210" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l123" class="line-number">123
<div class="blame-strip c2" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#211" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l124" class="line-number">124
<div class="blame-strip c2" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#212" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l125" class="line-number">125
<div class="blame-strip c2" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#213" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l126" class="line-number">126
<div class="blame-strip c2" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#214" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l127" class="line-number">127
<div class="blame-strip c2" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#215" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l128" class="line-number">128
<div class="blame-strip c2" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#216" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l129" class="line-number">129
<div class="blame-strip c2" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#217" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l130" class="line-number">130
<div class="blame-strip c2" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#218" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l131" class="line-number">131
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#150" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l132" class="line-number">132
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#152" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l133" class="line-number">133
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/head.js#153" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l134" class="line-number">134
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#136" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l135" class="line-number">135
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#137" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l136" class="line-number">136
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#138" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l137" class="line-number">137
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#139" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l138" class="line-number">138
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#140" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l139" class="line-number">139
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#141" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l140" class="line-number">140
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#142" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l141" class="line-number">141
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#143" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l142" class="line-number">142
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#144" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l143" class="line-number">143
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#145" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l144" class="line-number">144
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#146" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l145" class="line-number">145
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#147" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l146" class="line-number">146
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#148" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l147" class="line-number">147
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#149" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l148" class="line-number">148
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#150" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l149" class="line-number">149
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#151" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l150" class="line-number">150
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#152" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l151" class="line-number">151
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#153" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l152" class="line-number">152
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#154" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l153" class="line-number">153
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#155" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l154" class="line-number">154
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#156" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l155" class="line-number">155
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#196" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l156" class="line-number">156
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#197" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l157" class="line-number">157
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#198" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l158" class="line-number">158
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#199" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l159" class="line-number">159
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#200" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l160" class="line-number">160
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#201" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l161" class="line-number">161
<div class="blame-strip c2" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#237" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l162" class="line-number">162
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#164" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l163" class="line-number">163
<div class="blame-strip c2" data-blame="76baf9e8d67bf3c9c883264c490cdb19038445d5#%#242" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l164" class="line-number">164
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#238" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l165" class="line-number">165
<div class="blame-strip c2" data-blame="d226fcc86a0395cfec6ccc924c10c975e28cd3cb#%#167" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l166" class="line-number">166
<div class="blame-strip c1" data-blame="479d43ad5339d5d65f4064ebb9b77727b83d1aec#%#154" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l167" class="line-number">167
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#169" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l168" class="line-number">168
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#242" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l169" class="line-number">169
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#243" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l170" class="line-number">170
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#244" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l171" class="line-number">171
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#245" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l172" class="line-number">172
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#246" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l173" class="line-number">173
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#247" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l174" class="line-number">174
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#248" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l175" class="line-number">175
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#210" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l176" class="line-number">176
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#212" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l177" class="line-number">177
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#213" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l178" class="line-number">178
<div class="blame-strip c1" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#250" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l179" class="line-number">179
<div class="blame-strip c2" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/head.js#215" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l180" class="line-number">180
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#182" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l181" class="line-number">181
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#183" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l182" class="line-number">182
<div class="blame-strip c2" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/head.js#220" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l183" class="line-number">183
<div class="blame-strip c2" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/head.js#221" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l184" class="line-number">184
<div class="blame-strip c2" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/head.js#222" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l185" class="line-number">185
<div class="blame-strip c2" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/head.js#223" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l186" class="line-number">186
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/test/head.js#234" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l187" class="line-number">187
<div class="blame-strip c2" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/head.js#225" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l188" class="line-number">188
<div class="blame-strip c2" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/head.js#226" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l189" class="line-number">189
<div class="blame-strip c2" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/head.js#227" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l190" class="line-number">190
<div class="blame-strip c2" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/head.js#228" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l191" class="line-number">191
<div class="blame-strip c2" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/head.js#229" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l192" class="line-number">192
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#217" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l193" class="line-number">193
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#195" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l194" class="line-number">194
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#219" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l195" class="line-number">195
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#220" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l196" class="line-number">196
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#223" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l197" class="line-number">197
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#224" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l198" class="line-number">198
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#225" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l199" class="line-number">199
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#226" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l200" class="line-number">200
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#227" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l201" class="line-number">201
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#228" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l202" class="line-number">202
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#229" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l203" class="line-number">203
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#205" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l204" class="line-number">204
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#232" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l205" class="line-number">205
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#233" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l206" class="line-number">206
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#234" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l207" class="line-number">207
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#209" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l208" class="line-number">208
<div class="blame-strip c2" data-blame="1a03395848146e50c63c65322044030a6cd94e68#browser/devtools/webaudioeditor/test/head.js#281" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l209" class="line-number">209
<div class="blame-strip c1" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#238" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l210" class="line-number">210
<div class="blame-strip c1" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#239" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l211" class="line-number">211
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#223" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l212" class="line-number">212
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#224" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l213" class="line-number">213
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#225" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l214" class="line-number">214
<div class="blame-strip c1" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#288" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l215" class="line-number">215
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#217" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l216" class="line-number">216
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#218" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l217" class="line-number">217
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#230" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l218" class="line-number">218
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#231" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l219" class="line-number">219
<div class="blame-strip c2" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#295" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l220" class="line-number">220
<div class="blame-strip c1" data-blame="479d43ad5339d5d65f4064ebb9b77727b83d1aec#%#210" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l221" class="line-number">221
<div class="blame-strip c1" data-blame="479d43ad5339d5d65f4064ebb9b77727b83d1aec#%#211" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l222" class="line-number">222
<div class="blame-strip c1" data-blame="479d43ad5339d5d65f4064ebb9b77727b83d1aec#%#212" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l223" class="line-number">223
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#225" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l224" class="line-number">224
<div class="blame-strip c1" data-blame="479d43ad5339d5d65f4064ebb9b77727b83d1aec#%#214" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l225" class="line-number">225
<div class="blame-strip c1" data-blame="479d43ad5339d5d65f4064ebb9b77727b83d1aec#%#215" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l226" class="line-number">226
<div class="blame-strip c1" data-blame="479d43ad5339d5d65f4064ebb9b77727b83d1aec#%#216" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l227" class="line-number">227
<div class="blame-strip c1" data-blame="479d43ad5339d5d65f4064ebb9b77727b83d1aec#%#217" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l228" class="line-number">228
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#230" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l229" class="line-number">229
<div class="blame-strip c1" data-blame="479d43ad5339d5d65f4064ebb9b77727b83d1aec#%#219" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l230" class="line-number">230
<div class="blame-strip c1" data-blame="479d43ad5339d5d65f4064ebb9b77727b83d1aec#%#220" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l231" class="line-number">231
<div class="blame-strip c2" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/head.js#235" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l232" class="line-number">232
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#299" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l233" class="line-number">233
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#300" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l234" class="line-number">234
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#301" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l235" class="line-number">235
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#302" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l236" class="line-number">236
<div class="blame-strip c2" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/head.js#240" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l237" class="line-number">237
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#304" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l238" class="line-number">238
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#305" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l239" class="line-number">239
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#306" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l240" class="line-number">240
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#307" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l241" class="line-number">241
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#243" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l242" class="line-number">242
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#309" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l243" class="line-number">243
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#310" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l244" class="line-number">244
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#311" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l245" class="line-number">245
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#312" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l246" class="line-number">246
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#245" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l247" class="line-number">247
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#257" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l248" class="line-number">248
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#258" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l249" class="line-number">249
<div class="blame-strip c1" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#324" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l250" class="line-number">250
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#272" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l251" class="line-number">251
<div class="blame-strip c1" data-blame="475faee8d3438197f17a1ec34236cd9186b0a844#browser/devtools/webaudioeditor/test/head.js#300" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l252" class="line-number">252
<div class="blame-strip c1" data-blame="475faee8d3438197f17a1ec34236cd9186b0a844#browser/devtools/webaudioeditor/test/head.js#301" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l253" class="line-number">253
<div class="blame-strip c1" data-blame="475faee8d3438197f17a1ec34236cd9186b0a844#browser/devtools/webaudioeditor/test/head.js#302" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l254" class="line-number">254
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#273" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l255" class="line-number">255
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#274" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l256" class="line-number">256
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#275" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l257" class="line-number">257
<div class="blame-strip c1" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#332" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l258" class="line-number">258
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#260" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l259" class="line-number">259
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#278" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l260" class="line-number">260
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#279" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l261" class="line-number">261
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#280" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l262" class="line-number">262
<div class="blame-strip c2" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#337" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l263" class="line-number">263
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#282" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l264" class="line-number">264
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#283" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l265" class="line-number">265
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#284" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l266" class="line-number">266
<div class="blame-strip c2" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#341" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l267" class="line-number">267
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#286" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l268" class="line-number">268
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#287" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l269" class="line-number">269
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#288" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l270" class="line-number">270
<div class="blame-strip c2" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#345" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l271" class="line-number">271
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#273" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l272" class="line-number">272
<div class="blame-strip c2" data-blame="3eac596d72ffb325fe085c684338138b19db809f#%#366" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l273" class="line-number">273
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/test/head.js#324" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l274" class="line-number">274
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/test/head.js#325" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l275" class="line-number">275
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/test/head.js#326" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l276" class="line-number">276
<div class="blame-strip c2" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#351" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l277" class="line-number">277
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/head.js#282" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l278" class="line-number">278
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/head.js#283" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l279" class="line-number">279
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/head.js#284" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l280" class="line-number">280
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/head.js#285" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l281" class="line-number">281
<div class="blame-strip c2" data-blame="fea77157d9ecd2ce64fa6392db821a9c9d7becf4#browser/devtools/webaudioeditor/test/head.js#312" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l282" class="line-number">282
<div class="blame-strip c1" data-blame="b6acc170c138e777a9e3655ae51133013792d5a3#browser/devtools/webaudioeditor/test/head.js#356" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l283" class="line-number">283
<div class="blame-strip c1" data-blame="b6acc170c138e777a9e3655ae51133013792d5a3#browser/devtools/webaudioeditor/test/head.js#357" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l284" class="line-number">284
<div class="blame-strip c2" data-blame="fea77157d9ecd2ce64fa6392db821a9c9d7becf4#browser/devtools/webaudioeditor/test/head.js#315" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l285" class="line-number">285
<div class="blame-strip c1" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#370" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l286" class="line-number">286
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#288" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l287" class="line-number">287
<div class="blame-strip c1" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#373" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l288" class="line-number">288
<div class="blame-strip c1" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#374" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l289" class="line-number">289
<div class="blame-strip c2" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#289" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l290" class="line-number">290
<div class="blame-strip c1" data-blame="fea77157d9ecd2ce64fa6392db821a9c9d7becf4#browser/devtools/webaudioeditor/test/head.js#320" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l291" class="line-number">291
<div class="blame-strip c1" data-blame="fea77157d9ecd2ce64fa6392db821a9c9d7becf4#browser/devtools/webaudioeditor/test/head.js#321" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l292" class="line-number">292
<div class="blame-strip c1" data-blame="fea77157d9ecd2ce64fa6392db821a9c9d7becf4#browser/devtools/webaudioeditor/test/head.js#322" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l293" class="line-number">293
<div class="blame-strip c1" data-blame="fea77157d9ecd2ce64fa6392db821a9c9d7becf4#browser/devtools/webaudioeditor/test/head.js#323" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l294" class="line-number">294
<div class="blame-strip c1" data-blame="fea77157d9ecd2ce64fa6392db821a9c9d7becf4#browser/devtools/webaudioeditor/test/head.js#324" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l295" class="line-number">295
<div class="blame-strip c1" data-blame="fea77157d9ecd2ce64fa6392db821a9c9d7becf4#browser/devtools/webaudioeditor/test/head.js#325" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l296" class="line-number">296
<div class="blame-strip c1" data-blame="fea77157d9ecd2ce64fa6392db821a9c9d7becf4#browser/devtools/webaudioeditor/test/head.js#326" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l297" class="line-number">297
<div class="blame-strip c1" data-blame="fea77157d9ecd2ce64fa6392db821a9c9d7becf4#browser/devtools/webaudioeditor/test/head.js#327" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l298" class="line-number">298
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#300" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l299" class="line-number">299
<div class="blame-strip c1" data-blame="fea77157d9ecd2ce64fa6392db821a9c9d7becf4#browser/devtools/webaudioeditor/test/head.js#329" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l300" class="line-number">300
<div class="blame-strip c1" data-blame="fea77157d9ecd2ce64fa6392db821a9c9d7becf4#browser/devtools/webaudioeditor/test/head.js#330" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l301" class="line-number">301
<div class="blame-strip c1" data-blame="fea77157d9ecd2ce64fa6392db821a9c9d7becf4#browser/devtools/webaudioeditor/test/head.js#331" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l302" class="line-number">302
<div class="blame-strip c1" data-blame="fea77157d9ecd2ce64fa6392db821a9c9d7becf4#browser/devtools/webaudioeditor/test/head.js#332" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l303" class="line-number">303
<div class="blame-strip c1" data-blame="fea77157d9ecd2ce64fa6392db821a9c9d7becf4#browser/devtools/webaudioeditor/test/head.js#333" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l304" class="line-number">304
<div class="blame-strip c1" data-blame="fea77157d9ecd2ce64fa6392db821a9c9d7becf4#browser/devtools/webaudioeditor/test/head.js#334" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l305" class="line-number">305
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#312" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l306" class="line-number">306
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#313" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l307" class="line-number">307
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#314" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l308" class="line-number">308
<div class="blame-strip c1" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#394" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l309" class="line-number">309
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#316" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l310" class="line-number">310
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#317" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l311" class="line-number">311
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#318" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l312" class="line-number">312
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#319" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l313" class="line-number">313
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#320" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l314" class="line-number">314
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#321" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l315" class="line-number">315
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#322" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l316" class="line-number">316
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#323" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l317" class="line-number">317
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#324" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l318" class="line-number">318
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#325" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l319" class="line-number">319
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#326" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l320" class="line-number">320
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#327" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l321" class="line-number">321
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#328" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l322" class="line-number">322
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#329" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l323" class="line-number">323
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#330" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l324" class="line-number">324
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/head.js#331" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l325" class="line-number">325
<div class="blame-strip c1" data-blame="8f2fb6c989c43456efef81385ea87327bfd5b7d7#browser/devtools/webaudioeditor/test/head.js#355" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l326" class="line-number">326
<div class="blame-strip c1" data-blame="8f2fb6c989c43456efef81385ea87327bfd5b7d7#browser/devtools/webaudioeditor/test/head.js#356" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l327" class="line-number">327
<div class="blame-strip c2" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#413" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l328" class="line-number">328
<div class="blame-strip c1" data-blame="8f2fb6c989c43456efef81385ea87327bfd5b7d7#browser/devtools/webaudioeditor/test/head.js#358" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l329" class="line-number">329
<div class="blame-strip c1" data-blame="8f2fb6c989c43456efef81385ea87327bfd5b7d7#browser/devtools/webaudioeditor/test/head.js#359" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l330" class="line-number">330
<div class="blame-strip c2" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#330" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l331" class="line-number">331
<div class="blame-strip c1" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#417" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l332" class="line-number">332
<div class="blame-strip c2" data-blame="8f2fb6c989c43456efef81385ea87327bfd5b7d7#browser/devtools/webaudioeditor/test/head.js#362" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l333" class="line-number">333
<div class="blame-strip c2" data-blame="8f2fb6c989c43456efef81385ea87327bfd5b7d7#browser/devtools/webaudioeditor/test/head.js#363" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l334" class="line-number">334
<div class="blame-strip c2" data-blame="8f2fb6c989c43456efef81385ea87327bfd5b7d7#browser/devtools/webaudioeditor/test/head.js#364" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l335" class="line-number">335
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/head.js#377" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l336" class="line-number">336
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/head.js#378" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l337" class="line-number">337
<div class="blame-strip c2" data-blame="d774944355d48bdea2c052bd167fcc33a2476640#%#423" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l338" class="line-number">338
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#340" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l339" class="line-number">339
<div class="blame-strip c2" data-blame="d774944355d48bdea2c052bd167fcc33a2476640#%#425" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l340" class="line-number">340
<div class="blame-strip c2" data-blame="d774944355d48bdea2c052bd167fcc33a2476640#%#426" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l341" class="line-number">341
<div class="blame-strip c2" data-blame="d774944355d48bdea2c052bd167fcc33a2476640#%#427" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l342" class="line-number">342
<div class="blame-strip c2" data-blame="d774944355d48bdea2c052bd167fcc33a2476640#%#428" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l343" class="line-number">343
<div class="blame-strip c1" data-blame="aa9c6fd13b2a0e2eda5d42d9cde78f0ca0b56c39#%#425" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l344" class="line-number">344
<div class="blame-strip c1" data-blame="aa9c6fd13b2a0e2eda5d42d9cde78f0ca0b56c39#%#426" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l345" class="line-number">345
<div class="blame-strip c1" data-blame="aa9c6fd13b2a0e2eda5d42d9cde78f0ca0b56c39#%#427" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l346" class="line-number">346
<div class="blame-strip c1" data-blame="aa9c6fd13b2a0e2eda5d42d9cde78f0ca0b56c39#%#428" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l347" class="line-number">347
<div class="blame-strip c1" data-blame="aa9c6fd13b2a0e2eda5d42d9cde78f0ca0b56c39#%#429" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l348" class="line-number">348
<div class="blame-strip c2" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/head.js#383" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l349" class="line-number">349
<div class="blame-strip c2" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/head.js#384" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l350" class="line-number">350
<div class="blame-strip c2" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#browser/devtools/webaudioeditor/test/head.js#385" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l351" class="line-number">351
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/head.js#398" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l352" class="line-number">352
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/head.js#399" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l353" class="line-number">353
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/head.js#400" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l354" class="line-number">354
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/head.js#401" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l355" class="line-number">355
<div class="blame-strip c2" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#434" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l356" class="line-number">356
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/head.js#403" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l357" class="line-number">357
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#359" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l358" class="line-number">358
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/head.js#405" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l359" class="line-number">359
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#361" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l360" class="line-number">360
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/head.js#407" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l361" class="line-number">361
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/head.js#408" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l362" class="line-number">362
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/head.js#409" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l363" class="line-number">363
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/head.js#410" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l364" class="line-number">364
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/head.js#411" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l365" class="line-number">365
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/head.js#412" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l366" class="line-number">366
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/head.js#413" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l367" class="line-number">367
<div class="blame-strip c2" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#446" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l368" class="line-number">368
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/head.js#415" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l369" class="line-number">369
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/test/head.js#416" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l370" class="line-number">370
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/head.js#417" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l371" class="line-number">371
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/head.js#418" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l372" class="line-number">372
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/test/head.js#419" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l373" class="line-number">373
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/head.js#420" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l374" class="line-number">374
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/head.js#421" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l375" class="line-number">375
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/head.js#422" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l376" class="line-number">376
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/head.js#423" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l377" class="line-number">377
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/head.js#424" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l378" class="line-number">378
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/head.js#425" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l379" class="line-number">379
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/head.js#426" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l380" class="line-number">380
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#browser/devtools/webaudioeditor/test/head.js#427" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l381" class="line-number">381
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/test/head.js#428" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l382" class="line-number">382
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/test/head.js#429" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l383" class="line-number">383
<div class="blame-strip c1" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#462" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l384" class="line-number">384
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/test/head.js#431" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l385" class="line-number">385
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/test/head.js#432" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l386" class="line-number">386
<div class="blame-strip c1" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#386" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l387" class="line-number">387
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/test/head.js#434" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l388" class="line-number">388
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/test/head.js#435" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l389" class="line-number">389
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/test/head.js#436" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l390" class="line-number">390
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/test/head.js#437" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l391" class="line-number">391
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#496" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l392" class="line-number">392
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#497" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l393" class="line-number">393
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#291" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l394" class="line-number">394
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#499" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l395" class="line-number">395
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#397" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l396" class="line-number">396
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/test/head.js#292" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l397" class="line-number">397
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#399" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l398" class="line-number">398
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#400" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l399" class="line-number">399
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#401" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l400" class="line-number">400
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#503" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l401" class="line-number">401
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#403" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l402" class="line-number">402
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#505" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l403" class="line-number">403
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#405" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l404" class="line-number">404
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#507" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l405" class="line-number">405
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#407" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l406" class="line-number">406
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#509" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l407" class="line-number">407
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#510" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l408" class="line-number">408
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#511" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l409" class="line-number">409
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#512" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l410" class="line-number">410
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#513" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l411" class="line-number">411
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#514" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l412" class="line-number">412
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#515" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l413" class="line-number">413
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#516" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l414" class="line-number">414
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#517" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l415" class="line-number">415
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#518" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l416" class="line-number">416
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#519" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l417" class="line-number">417
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#520" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l418" class="line-number">418
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#521" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l419" class="line-number">419
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#522" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l420" class="line-number">420
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#523" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l421" class="line-number">421
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#524" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l422" class="line-number">422
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#525" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l423" class="line-number">423
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#526" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l424" class="line-number">424
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#527" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l425" class="line-number">425
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#528" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l426" class="line-number">426
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#529" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l427" class="line-number">427
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#530" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l428" class="line-number">428
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#531" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l429" class="line-number">429
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#532" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l430" class="line-number">430
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#533" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l431" class="line-number">431
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#534" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l432" class="line-number">432
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#535" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l433" class="line-number">433
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#536" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l434" class="line-number">434
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#537" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l435" class="line-number">435
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#538" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l436" class="line-number">436
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#539" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l437" class="line-number">437
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#540" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l438" class="line-number">438
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/head.js#541" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l439" class="line-number">439
<div class="blame-strip c2" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#439" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l440" class="line-number">440
<div class="blame-strip c1" data-blame="1a03395848146e50c63c65322044030a6cd94e68#browser/devtools/webaudioeditor/test/head.js#543" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
      </td>
      <td class="code">
<pre><code id="line-1" aria-labelledby="1"><span class="syn_comment" >/* Any copyright is dedicated to the Public Domain.</span>
</code><code id="line-2" aria-labelledby="2"><span class="syn_comment" >   <a href="http://creativecommons.org/publicdomain/zero/1.0/">http://creativecommons.org/publicdomain/zero/1.0/</a> */</span>
</code><code id="line-3" aria-labelledby="3">
</code><code id="line-4" aria-labelledby="4"><span class="syn_comment" >/* eslint no-unused-vars: [2, {"vars": "local"}] */</span>
</code><code id="line-5" aria-labelledby="5"><span class="syn_comment" >/* import-globals-from ../../shared/test/shared-head.js */</span>
</code><code id="line-6" aria-labelledby="6">
</code><code id="line-7" aria-labelledby="7"><span class="syn_string" >"use strict"</span>;
</code><code id="line-8" aria-labelledby="8">
</code><code id="line-9" aria-labelledby="9"><span class="syn_comment" >// Load the shared-head file first.</span>
</code><code id="line-10" aria-labelledby="10"><span data-symbols="#Services" data-i="0" >Services</span>.<span data-symbols="#scriptloader,Services#scriptloader" data-i="1" >scriptloader</span>.<span data-symbols="#loadSubScript" data-i="2" >loadSubScript</span>(
</code><code id="line-11" aria-labelledby="11">  <span class="syn_string" >"<a href="chrome://mochitests/content/browser/devtools/client/shared/test/shared-head.js">chrome://mochitests/content/browser/devtools/client/shared/test/shared-head.js</a>"</span>,
</code><code id="line-12" aria-labelledby="12">  <span class="syn_reserved" >this</span>);
</code><code id="line-13" aria-labelledby="13">
</code><code id="line-14" aria-labelledby="14"><span class="syn_reserved" >var</span> { <span class="syn_def" data-symbols="#DebuggerServer" data-i="3" >DebuggerServer</span> } = <span data-symbols="#require" data-i="4" >require</span>(<span class="syn_string" >"devtools/server/main"</span>);
</code><code id="line-15" aria-labelledby="15"><span class="syn_reserved" >var</span> { <span class="syn_def" data-symbols="#generateUUID" data-i="5" >generateUUID</span> } = <span data-symbols="#Cc" data-i="6" >Cc</span>[<span class="syn_string" >"@mozilla.org/uuid-generator;1"</span>].<span data-symbols="#getService" data-i="7" >getService</span>(<span data-symbols="#Ci" data-i="8" >Ci</span>.<span data-symbols="#nsIUUIDGenerator,Ci#nsIUUIDGenerator" data-i="9" >nsIUUIDGenerator</span>);
</code><code id="line-16" aria-labelledby="16">
</code><code id="line-17" aria-labelledby="17"><span class="syn_reserved" >var</span> { <span class="syn_def" data-symbols="#WebAudioFront" data-i="10" >WebAudioFront</span> } = <span data-symbols="#require" data-i="11" >require</span>(<span class="syn_string" >"devtools/shared/fronts/webaudio"</span>);
</code><code id="line-18" aria-labelledby="18"><span class="syn_reserved" >var</span> <span class="syn_def" data-symbols="#audioNodes" data-i="12" >audioNodes</span> = <span data-symbols="#require" data-i="13" >require</span>(<span class="syn_string" >"devtools/server/actors/utils/audionodes.json"</span>);
</code><code id="line-19" aria-labelledby="19">
</code><code id="line-20" aria-labelledby="20"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#EXAMPLE_URL" data-i="14" >EXAMPLE_URL</span> = <span class="syn_string" >"<a href="http://example.com/browser/devtools/client/webaudioeditor/test/">http://example.com/browser/devtools/client/webaudioeditor/test/</a>"</span>;
</code><code id="line-21" aria-labelledby="21"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#SIMPLE_CONTEXT_URL" data-i="15" >SIMPLE_CONTEXT_URL</span> = <span data-symbols="#EXAMPLE_URL" data-i="16" >EXAMPLE_URL</span> + <span class="syn_string" >"doc_simple-context.html"</span>;
</code><code id="line-22" aria-labelledby="22"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#COMPLEX_CONTEXT_URL" data-i="17" >COMPLEX_CONTEXT_URL</span> = <span data-symbols="#EXAMPLE_URL" data-i="18" >EXAMPLE_URL</span> + <span class="syn_string" >"doc_complex-context.html"</span>;
</code><code id="line-23" aria-labelledby="23"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#SIMPLE_NODES_URL" data-i="19" >SIMPLE_NODES_URL</span> = <span data-symbols="#EXAMPLE_URL" data-i="20" >EXAMPLE_URL</span> + <span class="syn_string" >"doc_simple-node-creation.html"</span>;
</code><code id="line-24" aria-labelledby="24"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#MEDIA_NODES_URL" data-i="21" >MEDIA_NODES_URL</span> = <span data-symbols="#EXAMPLE_URL" data-i="22" >EXAMPLE_URL</span> + <span class="syn_string" >"doc_media-node-creation.html"</span>;
</code><code id="line-25" aria-labelledby="25"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#BUFFER_AND_ARRAY_URL" data-i="23" >BUFFER_AND_ARRAY_URL</span> = <span data-symbols="#EXAMPLE_URL" data-i="24" >EXAMPLE_URL</span> + <span class="syn_string" >"doc_buffer-and-array.html"</span>;
</code><code id="line-26" aria-labelledby="26"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#DESTROY_NODES_URL" data-i="25" >DESTROY_NODES_URL</span> = <span data-symbols="#EXAMPLE_URL" data-i="26" >EXAMPLE_URL</span> + <span class="syn_string" >"doc_destroy-nodes.html"</span>;
</code><code id="line-27" aria-labelledby="27"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#CONNECT_PARAM_URL" data-i="27" >CONNECT_PARAM_URL</span> = <span data-symbols="#EXAMPLE_URL" data-i="28" >EXAMPLE_URL</span> + <span class="syn_string" >"doc_connect-param.html"</span>;
</code><code id="line-28" aria-labelledby="28"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#CONNECT_MULTI_PARAM_URL" data-i="29" >CONNECT_MULTI_PARAM_URL</span> = <span data-symbols="#EXAMPLE_URL" data-i="30" >EXAMPLE_URL</span> + <span class="syn_string" >"doc_connect-multi-param.html"</span>;
</code><code id="line-29" aria-labelledby="29"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#IFRAME_CONTEXT_URL" data-i="31" >IFRAME_CONTEXT_URL</span> = <span data-symbols="#EXAMPLE_URL" data-i="32" >EXAMPLE_URL</span> + <span class="syn_string" >"doc_iframe-context.html"</span>;
</code><code id="line-30" aria-labelledby="30"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#AUTOMATION_URL" data-i="33" >AUTOMATION_URL</span> = <span data-symbols="#EXAMPLE_URL" data-i="34" >EXAMPLE_URL</span> + <span class="syn_string" >"doc_automation.html"</span>;
</code><code id="line-31" aria-labelledby="31">
</code><code id="line-32" aria-labelledby="32"><span class="syn_comment" >// Enable logging for all the tests. Both the debugger server and frontend will</span>
</code><code id="line-33" aria-labelledby="33"><span class="syn_comment" >// be affected by this pref.</span>
</code><code id="line-34" aria-labelledby="34"><span class="syn_reserved" >var</span> <span class="syn_def" data-symbols="#gEnableLogging" data-i="35" >gEnableLogging</span> = <span data-symbols="#Services" data-i="36" >Services</span>.<span data-symbols="#prefs,Services#prefs" data-i="37" >prefs</span>.<span data-symbols="#getBoolPref" data-i="38" >getBoolPref</span>(<span class="syn_string" >"devtools.debugger.log"</span>);
</code><code id="line-35" aria-labelledby="35"><span data-symbols="#Services" data-i="39" >Services</span>.<span data-symbols="#prefs,Services#prefs" data-i="40" >prefs</span>.<span data-symbols="#setBoolPref" data-i="41" >setBoolPref</span>(<span class="syn_string" >"devtools.debugger.log"</span>, <span class="syn_reserved" >false</span>);
</code><code id="line-36" aria-labelledby="36">
</code><code id="line-37" aria-labelledby="37"><span class="syn_reserved" >var</span> <span class="syn_def" data-symbols="#gToolEnabled" data-i="42" >gToolEnabled</span> = <span data-symbols="#Services" data-i="43" >Services</span>.<span data-symbols="#prefs,Services#prefs" data-i="44" >prefs</span>.<span data-symbols="#getBoolPref" data-i="45" >getBoolPref</span>(<span class="syn_string" >"devtools.webaudioeditor.enabled"</span>);
</code><code id="line-38" aria-labelledby="38">
</code><code id="line-39" aria-labelledby="39"><span data-symbols="#registerCleanupFunction" data-i="46" >registerCleanupFunction</span>(() => {
</code><code id="line-40" aria-labelledby="40">  <span data-symbols="#Services" data-i="47" >Services</span>.<span data-symbols="#prefs,Services#prefs" data-i="48" >prefs</span>.<span data-symbols="#setBoolPref" data-i="49" >setBoolPref</span>(<span class="syn_string" >"devtools.debugger.log"</span>, <span data-symbols="#gEnableLogging" data-i="50" >gEnableLogging</span>);
</code><code id="line-41" aria-labelledby="41">  <span data-symbols="#Services" data-i="51" >Services</span>.<span data-symbols="#prefs,Services#prefs" data-i="52" >prefs</span>.<span data-symbols="#setBoolPref" data-i="53" >setBoolPref</span>(<span class="syn_string" >"devtools.webaudioeditor.enabled"</span>, <span data-symbols="#gToolEnabled" data-i="54" >gToolEnabled</span>);
</code><code id="line-42" aria-labelledby="42">  <span data-symbols="#Cu" data-i="55" >Cu</span>.<span data-symbols="#forceGC,Cu#forceGC" data-i="56" >forceGC</span>();
</code><code id="line-43" aria-labelledby="43">});
</code><code id="line-44" aria-labelledby="44">
</code><code id="line-45" aria-labelledby="45"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#reload" data-i="57" >reload</span>(<span data-symbols="7378-0" >aTarget</span>, <span data-symbols="7378-1" >aWaitForTargetEvent</span> = <span class="syn_string" >"navigate"</span>) {
</code><code id="line-46" aria-labelledby="46">  <span data-symbols="7378-0" >aTarget</span>.<span data-symbols="#reload,aTarget#reload" data-i="58" >reload</span>();
</code><code id="line-47" aria-labelledby="47">  <span class="syn_reserved" >return</span> <span data-symbols="#once" data-i="59" >once</span>(<span data-symbols="7378-0" >aTarget</span>, <span data-symbols="7378-1" >aWaitForTargetEvent</span>);
</code><code id="line-48" aria-labelledby="48">}
</code><code id="line-49" aria-labelledby="49">
</code><code id="line-50" aria-labelledby="50"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#navigate" data-i="60" >navigate</span>(<span data-symbols="7378-2" >aTarget</span>, <span data-symbols="7378-3" >aUrl</span>, <span data-symbols="7378-4" >aWaitForTargetEvent</span> = <span class="syn_string" >"navigate"</span>) {
</code><code id="line-51" aria-labelledby="51">  <span data-symbols="#executeSoon" data-i="61" >executeSoon</span>(() => <span data-symbols="7378-2" >aTarget</span>.<span data-symbols="#navigateTo,aTarget#navigateTo" data-i="62" >navigateTo</span>({ <span class="syn_def" data-symbols="#url" data-i="63" >url</span>: <span data-symbols="7378-3" >aUrl</span> }));
</code><code id="line-52" aria-labelledby="52">  <span class="syn_reserved" >return</span> <span data-symbols="#once" data-i="64" >once</span>(<span data-symbols="7378-2" >aTarget</span>, <span data-symbols="7378-4" >aWaitForTargetEvent</span>);
</code><code id="line-53" aria-labelledby="53">}
</code><code id="line-54" aria-labelledby="54">
</code><code id="line-55" aria-labelledby="55"><span class="syn_comment" >/**</span>
</code><code id="line-56" aria-labelledby="56"><span class="syn_comment" > * Adds a new tab, and instantiate a WebAudiFront object.</span>
</code><code id="line-57" aria-labelledby="57"><span class="syn_comment" > * This requires calling removeTab before the test ends.</span>
</code><code id="line-58" aria-labelledby="58"><span class="syn_comment" > */</span>
</code><code id="line-59" aria-labelledby="59"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#initBackend" data-i="65" >initBackend</span>(<span data-symbols="7378-5" >aUrl</span>) {
</code><code id="line-60" aria-labelledby="60">  <span data-symbols="#info" data-i="66" >info</span>(<span class="syn_string" >"Initializing a web audio editor front."</span>);
</code><code id="line-61" aria-labelledby="61">
</code><code id="line-62" aria-labelledby="62">  <span data-symbols="#DebuggerServer" data-i="67" >DebuggerServer</span>.<span data-symbols="#init,DebuggerServer#init" data-i="68" >init</span>();
</code><code id="line-63" aria-labelledby="63">  <span data-symbols="#DebuggerServer" data-i="69" >DebuggerServer</span>.<span data-symbols="#registerAllActors,DebuggerServer#registerAllActors" data-i="70" >registerAllActors</span>();
</code><code id="line-64" aria-labelledby="64">
</code><code id="line-65" aria-labelledby="65">  <span class="syn_reserved" >return</span> (async <span class="syn_reserved" >function</span>() {
</code><code id="line-66" aria-labelledby="66">    <span class="syn_reserved" >const</span> <span data-symbols="7378-6" >tab</span> = await <span data-symbols="#addTab" data-i="71" >addTab</span>(<span data-symbols="7378-5" >aUrl</span>);
</code><code id="line-67" aria-labelledby="67">    <span class="syn_reserved" >const</span> <span data-symbols="7378-7" >target</span> = await <span data-symbols="#TargetFactory" data-i="72" >TargetFactory</span>.<span data-symbols="#forTab,TargetFactory#forTab" data-i="73" >forTab</span>(<span data-symbols="7378-6" >tab</span>);
</code><code id="line-68" aria-labelledby="68">
</code><code id="line-69" aria-labelledby="69">    await <span data-symbols="7378-7" >target</span>.<span data-symbols="#attach,target#attach" data-i="74" >attach</span>();
</code><code id="line-70" aria-labelledby="70">
</code><code id="line-71" aria-labelledby="71">    <span class="syn_reserved" >const</span> <span data-symbols="7378-8" >front</span> = await <span data-symbols="7378-7" >target</span>.<span data-symbols="#getFront,target#getFront" data-i="75" >getFront</span>(<span class="syn_string" >"webaudio"</span>);
</code><code id="line-72" aria-labelledby="72">    <span class="syn_reserved" >return</span> { <span class="syn_def" data-symbols="#target,7378-7" data-i="76" >target</span>, <span class="syn_def" data-symbols="#front,7378-8" data-i="77" >front</span> };
</code><code id="line-73" aria-labelledby="73">  })();
</code><code id="line-74" aria-labelledby="74">}
</code><code id="line-75" aria-labelledby="75">
</code><code id="line-76" aria-labelledby="76"><span class="syn_comment" >/**</span>
</code><code id="line-77" aria-labelledby="77"><span class="syn_comment" > * Adds a new tab, and open the toolbox for that tab, selecting the audio editor</span>
</code><code id="line-78" aria-labelledby="78"><span class="syn_comment" > * panel.</span>
</code><code id="line-79" aria-labelledby="79"><span class="syn_comment" > * This requires calling teardown before the test ends.</span>
</code><code id="line-80" aria-labelledby="80"><span class="syn_comment" > */</span>
</code><code id="line-81" aria-labelledby="81"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#initWebAudioEditor" data-i="78" >initWebAudioEditor</span>(<span data-symbols="7378-9" >aUrl</span>) {
</code><code id="line-82" aria-labelledby="82">  <span data-symbols="#info" data-i="79" >info</span>(<span class="syn_string" >"Initializing a web audio editor pane."</span>);
</code><code id="line-83" aria-labelledby="83">
</code><code id="line-84" aria-labelledby="84">  <span class="syn_reserved" >return</span> (async <span class="syn_reserved" >function</span>() {
</code><code id="line-85" aria-labelledby="85">    <span class="syn_reserved" >const</span> <span data-symbols="7378-10" >tab</span> = await <span data-symbols="#addTab" data-i="80" >addTab</span>(<span data-symbols="7378-9" >aUrl</span>);
</code><code id="line-86" aria-labelledby="86">    <span class="syn_reserved" >const</span> <span data-symbols="7378-11" >target</span> = await <span data-symbols="#TargetFactory" data-i="81" >TargetFactory</span>.<span data-symbols="#forTab,TargetFactory#forTab" data-i="82" >forTab</span>(<span data-symbols="7378-10" >tab</span>);
</code><code id="line-87" aria-labelledby="87">
</code><code id="line-88" aria-labelledby="88">    <span data-symbols="#Services" data-i="83" >Services</span>.<span data-symbols="#prefs,Services#prefs" data-i="84" >prefs</span>.<span data-symbols="#setBoolPref" data-i="85" >setBoolPref</span>(<span class="syn_string" >"devtools.webaudioeditor.enabled"</span>, <span class="syn_reserved" >true</span>);
</code><code id="line-89" aria-labelledby="89">    <span class="syn_reserved" >const</span> <span data-symbols="7378-12" >toolbox</span> = await <span data-symbols="#gDevTools" data-i="86" >gDevTools</span>.<span data-symbols="#showToolbox,gDevTools#showToolbox" data-i="87" >showToolbox</span>(<span data-symbols="7378-11" >target</span>, <span class="syn_string" >"webaudioeditor"</span>);
</code><code id="line-90" aria-labelledby="90">    <span class="syn_reserved" >const</span> <span data-symbols="7378-13" >panel</span> = <span data-symbols="7378-12" >toolbox</span>.<span data-symbols="#getCurrentPanel,toolbox#getCurrentPanel" data-i="88" >getCurrentPanel</span>();
</code><code id="line-91" aria-labelledby="91">    <span class="syn_reserved" >return</span> { <span class="syn_def" data-symbols="#target,7378-11" data-i="89" >target</span>, <span class="syn_def" data-symbols="#panel,7378-13" data-i="90" >panel</span>, <span class="syn_def" data-symbols="#toolbox,7378-12" data-i="91" >toolbox</span> };
</code><code id="line-92" aria-labelledby="92">  })();
</code><code id="line-93" aria-labelledby="93">}
</code><code id="line-94" aria-labelledby="94">
</code><code id="line-95" aria-labelledby="95"><span class="syn_comment" >/**</span>
</code><code id="line-96" aria-labelledby="96"><span class="syn_comment" > * Close the toolbox, destroying all panels, and remove the added test tabs.</span>
</code><code id="line-97" aria-labelledby="97"><span class="syn_comment" > */</span>
</code><code id="line-98" aria-labelledby="98"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#teardown" data-i="92" >teardown</span>(<span data-symbols="7378-14" >aTarget</span>) {
</code><code id="line-99" aria-labelledby="99">  <span data-symbols="#info" data-i="93" >info</span>(<span class="syn_string" >"Destroying the web audio editor."</span>);
</code><code id="line-100" aria-labelledby="100">
</code><code id="line-101" aria-labelledby="101">  <span class="syn_reserved" >return</span> <span data-symbols="#gDevTools" data-i="94" >gDevTools</span>.<span data-symbols="#closeToolbox,gDevTools#closeToolbox" data-i="95" >closeToolbox</span>(<span data-symbols="7378-14" >aTarget</span>).<span data-symbols="#then" data-i="96" >then</span>(() => {
</code><code id="line-102" aria-labelledby="102">    <span class="syn_reserved" >while</span> (<span data-symbols="#gBrowser" data-i="97" >gBrowser</span>.<span data-symbols="#tabs,gBrowser#tabs" data-i="98" >tabs</span>.<span data-symbols="#length" data-i="99" >length</span> > 1) {
</code><code id="line-103" aria-labelledby="103">      <span data-symbols="#gBrowser" data-i="100" >gBrowser</span>.<span data-symbols="#removeCurrentTab,gBrowser#removeCurrentTab" data-i="101" >removeCurrentTab</span>();
</code><code id="line-104" aria-labelledby="104">    }
</code><code id="line-105" aria-labelledby="105">  });
</code><code id="line-106" aria-labelledby="106">}
</code><code id="line-107" aria-labelledby="107">
</code><code id="line-108" aria-labelledby="108"><span class="syn_comment" >// Due to web audio will fire most events synchronously back-to-back,</span>
</code><code id="line-109" aria-labelledby="109"><span class="syn_comment" >// and we can't yield them in a chain without missing actors, this allows</span>
</code><code id="line-110" aria-labelledby="110"><span class="syn_comment" >// us to listen for `n` events and return a promise resolving to them.</span>
</code><code id="line-111" aria-labelledby="111"><span class="syn_comment" >//</span>
</code><code id="line-112" aria-labelledby="112"><span class="syn_comment" >// Takes a `front` object that is an event emitter, the number of</span>
</code><code id="line-113" aria-labelledby="113"><span class="syn_comment" >// programs that should be listened to and waited on, and an optional</span>
</code><code id="line-114" aria-labelledby="114"><span class="syn_comment" >// `onAdd` function that calls with the entire actors array on program link</span>
</code><code id="line-115" aria-labelledby="115"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#getN" data-i="102" >getN</span>(<span data-symbols="7378-15" >front</span>, <span data-symbols="7378-16" >eventName</span>, <span data-symbols="7378-17" >count</span>, <span data-symbols="7378-18" >spread</span>) {
</code><code id="line-116" aria-labelledby="116">  <span class="syn_reserved" >const</span> <span data-symbols="7378-19" >actors</span> = [];
</code><code id="line-117" aria-labelledby="117">  <span data-symbols="#info" data-i="103" >info</span>(<span class="syn_string" >`Waiting for ${</span><span data-symbols="7378-17" >count</span><span class="syn_string" >} ${</span><span data-symbols="7378-16" >eventName</span><span class="syn_string" >} events`</span>);
</code><code id="line-118" aria-labelledby="118">
</code><code id="line-119" aria-labelledby="119">  <span class="syn_reserved" >return</span> <span class="syn_reserved" >new</span> <span data-symbols="#Promise" data-i="104" >Promise</span>((<span data-symbols="7378-20" >resolve</span>) => {
</code><code id="line-120" aria-labelledby="120">    <span data-symbols="7378-15" >front</span>.<span data-symbols="#on,front#on" data-i="105" >on</span>(<span data-symbols="7378-16" >eventName</span>, <span class="syn_reserved" >function</span> onEvent(...<span data-symbols="7378-21" >args</span>) {
</code><code id="line-121" aria-labelledby="121">      <span class="syn_reserved" >const</span> <span data-symbols="7378-22" >actor</span> = <span data-symbols="7378-21" >args</span>[0];
</code><code id="line-122" aria-labelledby="122">      <span class="syn_reserved" >if</span> (<span data-symbols="7378-19" >actors</span>.<span data-symbols="#length,actors#length" data-i="106" >length</span> !== <span data-symbols="7378-17" >count</span>) {
</code><code id="line-123" aria-labelledby="123">        <span data-symbols="7378-19" >actors</span>.<span data-symbols="#push,actors#push" data-i="107" >push</span>(<span data-symbols="7378-18" >spread</span> ? <span data-symbols="7378-21" >args</span> : <span data-symbols="7378-22" >actor</span>);
</code><code id="line-124" aria-labelledby="124">      }
</code><code id="line-125" aria-labelledby="125">      <span data-symbols="#info" data-i="108" >info</span>(<span class="syn_string" >`Got ${</span><span data-symbols="7378-19" >actors</span>.<span data-symbols="#length,actors#length" data-i="109" >length</span><span class="syn_string" >} / ${</span><span data-symbols="7378-17" >count</span><span class="syn_string" >} ${</span><span data-symbols="7378-16" >eventName</span><span class="syn_string" >} events`</span>);
</code><code id="line-126" aria-labelledby="126">      <span class="syn_reserved" >if</span> (<span data-symbols="7378-19" >actors</span>.<span data-symbols="#length,actors#length" data-i="110" >length</span> === <span data-symbols="7378-17" >count</span>) {
</code><code id="line-127" aria-labelledby="127">        <span data-symbols="7378-15" >front</span>.<span data-symbols="#off,front#off" data-i="111" >off</span>(<span data-symbols="7378-16" >eventName</span>, <span data-symbols="#onEvent" data-i="112" >onEvent</span>);
</code><code id="line-128" aria-labelledby="128">        <span data-symbols="7378-20" >resolve</span>(<span data-symbols="7378-19" >actors</span>);
</code><code id="line-129" aria-labelledby="129">      }
</code><code id="line-130" aria-labelledby="130">    });
</code><code id="line-131" aria-labelledby="131">  });
</code><code id="line-132" aria-labelledby="132">}
</code><code id="line-133" aria-labelledby="133">
</code><code id="line-134" aria-labelledby="134"><span class="syn_reserved" >function</span> <span class="syn_reserved" >get</span>(<span data-symbols="7378-23" >front</span>, <span data-symbols="7378-24" >eventName</span>) {
</code><code id="line-135" aria-labelledby="135">  <span class="syn_reserved" >return</span> <span data-symbols="#getN" data-i="113" >getN</span>(<span data-symbols="7378-23" >front</span>, <span data-symbols="7378-24" >eventName</span>, 1);
</code><code id="line-136" aria-labelledby="136">}
</code><code id="line-137" aria-labelledby="137"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#get2" data-i="114" >get2</span>(<span data-symbols="7378-25" >front</span>, <span data-symbols="7378-26" >eventName</span>) {
</code><code id="line-138" aria-labelledby="138">  <span class="syn_reserved" >return</span> <span data-symbols="#getN" data-i="115" >getN</span>(<span data-symbols="7378-25" >front</span>, <span data-symbols="7378-26" >eventName</span>, 2);
</code><code id="line-139" aria-labelledby="139">}
</code><code id="line-140" aria-labelledby="140"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#get3" data-i="116" >get3</span>(<span data-symbols="7378-27" >front</span>, <span data-symbols="7378-28" >eventName</span>) {
</code><code id="line-141" aria-labelledby="141">  <span class="syn_reserved" >return</span> <span data-symbols="#getN" data-i="117" >getN</span>(<span data-symbols="7378-27" >front</span>, <span data-symbols="7378-28" >eventName</span>, 3);
</code><code id="line-142" aria-labelledby="142">}
</code><code id="line-143" aria-labelledby="143"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#getSpread" data-i="118" >getSpread</span>(<span data-symbols="7378-29" >front</span>, <span data-symbols="7378-30" >eventName</span>) {
</code><code id="line-144" aria-labelledby="144">  <span class="syn_reserved" >return</span> <span data-symbols="#getN" data-i="119" >getN</span>(<span data-symbols="7378-29" >front</span>, <span data-symbols="7378-30" >eventName</span>, 1, <span class="syn_reserved" >true</span>);
</code><code id="line-145" aria-labelledby="145">}
</code><code id="line-146" aria-labelledby="146"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#get2Spread" data-i="120" >get2Spread</span>(<span data-symbols="7378-31" >front</span>, <span data-symbols="7378-32" >eventName</span>) {
</code><code id="line-147" aria-labelledby="147">  <span class="syn_reserved" >return</span> <span data-symbols="#getN" data-i="121" >getN</span>(<span data-symbols="7378-31" >front</span>, <span data-symbols="7378-32" >eventName</span>, 2, <span class="syn_reserved" >true</span>);
</code><code id="line-148" aria-labelledby="148">}
</code><code id="line-149" aria-labelledby="149"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#get3Spread" data-i="122" >get3Spread</span>(<span data-symbols="7378-33" >front</span>, <span data-symbols="7378-34" >eventName</span>) {
</code><code id="line-150" aria-labelledby="150">  <span class="syn_reserved" >return</span> <span data-symbols="#getN" data-i="123" >getN</span>(<span data-symbols="7378-33" >front</span>, <span data-symbols="7378-34" >eventName</span>, 3, <span class="syn_reserved" >true</span>);
</code><code id="line-151" aria-labelledby="151">}
</code><code id="line-152" aria-labelledby="152"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#getNSpread" data-i="124" >getNSpread</span>(<span data-symbols="7378-35" >front</span>, <span data-symbols="7378-36" >eventName</span>, <span data-symbols="7378-37" >count</span>) {
</code><code id="line-153" aria-labelledby="153">  <span class="syn_reserved" >return</span> <span data-symbols="#getN" data-i="125" >getN</span>(<span data-symbols="7378-35" >front</span>, <span data-symbols="7378-36" >eventName</span>, <span data-symbols="7378-37" >count</span>, <span class="syn_reserved" >true</span>);
</code><code id="line-154" aria-labelledby="154">}
</code><code id="line-155" aria-labelledby="155">
</code><code id="line-156" aria-labelledby="156"><span class="syn_comment" >/**</span>
</code><code id="line-157" aria-labelledby="157"><span class="syn_comment" > * Waits for the UI_GRAPH_RENDERED event to fire, but only</span>
</code><code id="line-158" aria-labelledby="158"><span class="syn_comment" > * resolves when the graph was rendered with the correct count of</span>
</code><code id="line-159" aria-labelledby="159"><span class="syn_comment" > * nodes and edges.</span>
</code><code id="line-160" aria-labelledby="160"><span class="syn_comment" > */</span>
</code><code id="line-161" aria-labelledby="161"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#waitForGraphRendered" data-i="126" >waitForGraphRendered</span>(<span data-symbols="7378-38" >front</span>, <span data-symbols="7378-39" >nodeCount</span>, <span data-symbols="7378-40" >edgeCount</span>, <span data-symbols="7378-41" >paramEdgeCount</span>) {
</code><code id="line-162" aria-labelledby="162">  <span class="syn_reserved" >const</span> <span data-symbols="7378-42" >eventName</span> = <span data-symbols="7378-38" >front</span>.<span data-symbols="#EVENTS,front#EVENTS" data-i="127" >EVENTS</span>.<span data-symbols="#UI_GRAPH_RENDERED" data-i="128" >UI_GRAPH_RENDERED</span>;
</code><code id="line-163" aria-labelledby="163">  <span data-symbols="#info" data-i="129" >info</span>(<span class="syn_string" >`Wait for graph rendered with ${</span><span data-symbols="7378-39" >nodeCount</span><span class="syn_string" >} nodes, ${</span><span data-symbols="7378-40" >edgeCount</span><span class="syn_string" >} edges`</span>);
</code><code id="line-164" aria-labelledby="164">
</code><code id="line-165" aria-labelledby="165">  <span class="syn_reserved" >return</span> <span class="syn_reserved" >new</span> <span data-symbols="#Promise" data-i="130" >Promise</span>((<span data-symbols="7378-43" >resolve</span>) => {
</code><code id="line-166" aria-labelledby="166">    <span data-symbols="7378-38" >front</span>.<span data-symbols="#on,front#on" data-i="131" >on</span>(<span data-symbols="7378-42" >eventName</span>, <span class="syn_reserved" >function</span> onGraphRendered(<span data-symbols="7378-44" >nodes</span>, <span data-symbols="7378-45" >edges</span>, <span data-symbols="7378-46" >pEdges</span>) {
</code><code id="line-167" aria-labelledby="167">      <span class="syn_reserved" >const</span> <span data-symbols="7378-47" >paramEdgesDone</span> = <span data-symbols="7378-41" >paramEdgeCount</span> != <span class="syn_reserved" >null</span> ? <span data-symbols="7378-41" >paramEdgeCount</span> === <span data-symbols="7378-46" >pEdges</span> : <span class="syn_reserved" >true</span>;
</code><code id="line-168" aria-labelledby="168">      <span data-symbols="#info" data-i="132" >info</span>(<span class="syn_string" >`Got graph rendered with ${</span><span data-symbols="7378-44" >nodes</span><span class="syn_string" >} / ${</span><span data-symbols="7378-39" >nodeCount</span><span class="syn_string" >} nodes, `</span> +
</code><code id="line-169" aria-labelledby="169">           <span class="syn_string" >`${</span><span data-symbols="7378-45" >edges</span><span class="syn_string" >} / ${</span><span data-symbols="7378-40" >edgeCount</span><span class="syn_string" >} edges`</span>);
</code><code id="line-170" aria-labelledby="170">      <span class="syn_reserved" >if</span> (<span data-symbols="7378-44" >nodes</span> === <span data-symbols="7378-39" >nodeCount</span> &amp;&amp; <span data-symbols="7378-45" >edges</span> === <span data-symbols="7378-40" >edgeCount</span> &amp;&amp; <span data-symbols="7378-47" >paramEdgesDone</span>) {
</code><code id="line-171" aria-labelledby="171">        <span data-symbols="7378-38" >front</span>.<span data-symbols="#off,front#off" data-i="133" >off</span>(<span data-symbols="7378-42" >eventName</span>, <span data-symbols="#onGraphRendered" data-i="134" >onGraphRendered</span>);
</code><code id="line-172" aria-labelledby="172">        <span data-symbols="7378-43" >resolve</span>();
</code><code id="line-173" aria-labelledby="173">      }
</code><code id="line-174" aria-labelledby="174">    });
</code><code id="line-175" aria-labelledby="175">  });
</code><code id="line-176" aria-labelledby="176">}
</code><code id="line-177" aria-labelledby="177">
</code><code id="line-178" aria-labelledby="178"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#checkVariableView" data-i="135" >checkVariableView</span>(<span data-symbols="7378-48" >view</span>, <span data-symbols="7378-49" >index</span>, <span data-symbols="7378-50" >hash</span>, <span data-symbols="7378-51" >description</span> = <span class="syn_string" >""</span>) {
</code><code id="line-179" aria-labelledby="179">  <span data-symbols="#info" data-i="136" >info</span>(<span class="syn_string" >"Checking Variable View"</span>);
</code><code id="line-180" aria-labelledby="180">  <span class="syn_reserved" >const</span> <span data-symbols="7378-52" >scope</span> = <span data-symbols="7378-48" >view</span>.<span data-symbols="#getScopeAtIndex,view#getScopeAtIndex" data-i="137" >getScopeAtIndex</span>(<span data-symbols="7378-49" >index</span>);
</code><code id="line-181" aria-labelledby="181">  <span class="syn_reserved" >const</span> <span data-symbols="7378-53" >variables</span> = <span data-symbols="#Object" data-i="138" >Object</span>.<span data-symbols="#keys,Object#keys" data-i="139" >keys</span>(<span data-symbols="7378-50" >hash</span>);
</code><code id="line-182" aria-labelledby="182">
</code><code id="line-183" aria-labelledby="183">  <span class="syn_comment" >// If node shouldn't display any properties, ensure that the 'empty' message is</span>
</code><code id="line-184" aria-labelledby="184">  <span class="syn_comment" >// visible</span>
</code><code id="line-185" aria-labelledby="185">  <span class="syn_reserved" >if</span> (!<span data-symbols="7378-53" >variables</span>.<span data-symbols="#length,variables#length" data-i="140" >length</span>) {
</code><code id="line-186" aria-labelledby="186">    <span data-symbols="#ok" data-i="141" >ok</span>(<span data-symbols="#isVisible" data-i="142" >isVisible</span>(<span data-symbols="7378-52" >scope</span>.<span data-symbols="#window,scope#window" data-i="143" >window</span>.$(<span class="syn_string" >"#properties-empty"</span>)),
</code><code id="line-187" aria-labelledby="187">      <span data-symbols="7378-51" >description</span> + <span class="syn_string" >" should show the empty properties tab."</span>);
</code><code id="line-188" aria-labelledby="188">    <span class="syn_reserved" >return</span>;
</code><code id="line-189" aria-labelledby="189">  }
</code><code id="line-190" aria-labelledby="190">
</code><code id="line-191" aria-labelledby="191">  <span class="syn_comment" >// Otherwise, iterate over expected properties</span>
</code><code id="line-192" aria-labelledby="192">  <span data-symbols="7378-53" >variables</span>.<span data-symbols="#forEach,variables#forEach" data-i="144" >forEach</span>(<span data-symbols="7378-54" >variable</span> => {
</code><code id="line-193" aria-labelledby="193">    <span class="syn_reserved" >const</span> <span data-symbols="7378-55" >aVar</span> = <span data-symbols="7378-52" >scope</span>.<span class="syn_reserved" >get</span>(<span data-symbols="7378-54" >variable</span>);
</code><code id="line-194" aria-labelledby="194">    <span data-symbols="#is" data-i="145" >is</span>(<span data-symbols="7378-55" >aVar</span>.<span data-symbols="#target,aVar#target" data-i="146" >target</span>.<span data-symbols="#querySelector" data-i="147" >querySelector</span>(<span class="syn_string" >".name"</span>).<span data-symbols="#getAttribute" data-i="148" >getAttribute</span>(<span class="syn_string" >"value"</span>), <span data-symbols="7378-54" >variable</span>,
</code><code id="line-195" aria-labelledby="195">      <span class="syn_string" >"Correct property name for "</span> + <span data-symbols="7378-54" >variable</span>);
</code><code id="line-196" aria-labelledby="196">    <span class="syn_reserved" >let</span> <span data-symbols="7378-56" >value</span> = <span data-symbols="7378-55" >aVar</span>.<span data-symbols="#target,aVar#target" data-i="149" >target</span>.<span data-symbols="#querySelector" data-i="150" >querySelector</span>(<span class="syn_string" >".value"</span>).<span data-symbols="#getAttribute" data-i="151" >getAttribute</span>(<span class="syn_string" >"value"</span>);
</code><code id="line-197" aria-labelledby="197">
</code><code id="line-198" aria-labelledby="198">    <span class="syn_comment" >// Cast value with JSON.parse if possible;</span>
</code><code id="line-199" aria-labelledby="199">    <span class="syn_comment" >// will fail when displaying Object types like "ArrayBuffer"</span>
</code><code id="line-200" aria-labelledby="200">    <span class="syn_comment" >// and "Float32Array", but will match the original value.</span>
</code><code id="line-201" aria-labelledby="201">    <span class="syn_reserved" >try</span> {
</code><code id="line-202" aria-labelledby="202">      <span data-symbols="7378-56" >value</span> = <span data-symbols="#JSON" data-i="152" >JSON</span>.<span data-symbols="#parse,JSON#parse" data-i="153" >parse</span>(<span data-symbols="7378-56" >value</span>);
</code><code id="line-203" aria-labelledby="203">    } <span class="syn_reserved" >catch</span> (<span data-symbols="7378-57" >e</span>) {}
</code><code id="line-204" aria-labelledby="204">    <span class="syn_reserved" >if</span> (<span class="syn_reserved" >typeof</span> <span data-symbols="7378-50" >hash</span>[<span data-symbols="7378-54" >variable</span>] === <span class="syn_string" >"function"</span>) {
</code><code id="line-205" aria-labelledby="205">      <span data-symbols="#ok" data-i="154" >ok</span>(<span data-symbols="7378-50" >hash</span>[<span data-symbols="7378-54" >variable</span>](<span data-symbols="7378-56" >value</span>),
</code><code id="line-206" aria-labelledby="206">        <span class="syn_string" >"Passing property value of "</span> + <span data-symbols="7378-56" >value</span> + <span class="syn_string" >" for "</span> + <span data-symbols="7378-54" >variable</span> + <span class="syn_string" >" "</span> + <span data-symbols="7378-51" >description</span>);
</code><code id="line-207" aria-labelledby="207">    } <span class="syn_reserved" >else</span> {
</code><code id="line-208" aria-labelledby="208">      <span data-symbols="#is" data-i="155" >is</span>(<span data-symbols="7378-56" >value</span>, <span data-symbols="7378-50" >hash</span>[<span data-symbols="7378-54" >variable</span>],
</code><code id="line-209" aria-labelledby="209">        <span class="syn_string" >"Correct property value of "</span> + <span data-symbols="7378-50" >hash</span>[<span data-symbols="7378-54" >variable</span>] + <span class="syn_string" >" for "</span> + <span data-symbols="7378-54" >variable</span> + <span class="syn_string" >" "</span> + <span data-symbols="7378-51" >description</span>);
</code><code id="line-210" aria-labelledby="210">    }
</code><code id="line-211" aria-labelledby="211">  });
</code><code id="line-212" aria-labelledby="212">}
</code><code id="line-213" aria-labelledby="213">
</code><code id="line-214" aria-labelledby="214"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#modifyVariableView" data-i="156" >modifyVariableView</span>(<span data-symbols="7378-58" >win</span>, <span data-symbols="7378-59" >view</span>, <span data-symbols="7378-60" >index</span>, <span data-symbols="7378-61" >prop</span>, <span data-symbols="7378-62" >value</span>) {
</code><code id="line-215" aria-labelledby="215">  <span class="syn_reserved" >const</span> <span data-symbols="7378-63" >scope</span> = <span data-symbols="7378-59" >view</span>.<span data-symbols="#getScopeAtIndex,view#getScopeAtIndex" data-i="157" >getScopeAtIndex</span>(<span data-symbols="7378-60" >index</span>);
</code><code id="line-216" aria-labelledby="216">  <span class="syn_reserved" >const</span> <span data-symbols="7378-64" >aVar</span> = <span data-symbols="7378-63" >scope</span>.<span class="syn_reserved" >get</span>(<span data-symbols="7378-61" >prop</span>);
</code><code id="line-217" aria-labelledby="217">  <span data-symbols="7378-63" >scope</span>.<span data-symbols="#expand,scope#expand" data-i="158" >expand</span>();
</code><code id="line-218" aria-labelledby="218">
</code><code id="line-219" aria-labelledby="219">  <span class="syn_reserved" >return</span> <span class="syn_reserved" >new</span> <span data-symbols="#Promise" data-i="159" >Promise</span>((<span data-symbols="7378-65" >resolve</span>, <span data-symbols="7378-66" >reject</span>) => {
</code><code id="line-220" aria-labelledby="220">    <span class="syn_reserved" >const</span> <span data-symbols="7378-67" >onParamSetSuccess</span> = () => {
</code><code id="line-221" aria-labelledby="221">      <span data-symbols="7378-58" >win</span>.<span data-symbols="#off,win#off" data-i="160" >off</span>(<span data-symbols="7378-58" >win</span>.<span data-symbols="#EVENTS,win#EVENTS" data-i="161" >EVENTS</span>.<span data-symbols="#UI_SET_PARAM_ERROR" data-i="162" >UI_SET_PARAM_ERROR</span>, <span data-symbols="#onParamSetError" data-i="163" >onParamSetError</span>);
</code><code id="line-222" aria-labelledby="222">      <span data-symbols="7378-65" >resolve</span>();
</code><code id="line-223" aria-labelledby="223">    };
</code><code id="line-224" aria-labelledby="224">
</code><code id="line-225" aria-labelledby="225">    <span class="syn_reserved" >const</span> <span data-symbols="7378-68" >onParamSetError</span> = () => {
</code><code id="line-226" aria-labelledby="226">      <span data-symbols="7378-58" >win</span>.<span data-symbols="#off,win#off" data-i="164" >off</span>(<span data-symbols="7378-58" >win</span>.<span data-symbols="#EVENTS,win#EVENTS" data-i="165" >EVENTS</span>.<span data-symbols="#UI_SET_PARAM" data-i="166" >UI_SET_PARAM</span>, <span data-symbols="7378-67" >onParamSetSuccess</span>);
</code><code id="line-227" aria-labelledby="227">      <span data-symbols="7378-66" >reject</span>();
</code><code id="line-228" aria-labelledby="228">    };
</code><code id="line-229" aria-labelledby="229">    <span data-symbols="7378-58" >win</span>.<span data-symbols="#once,win#once" data-i="167" >once</span>(<span data-symbols="7378-58" >win</span>.<span data-symbols="#EVENTS,win#EVENTS" data-i="168" >EVENTS</span>.<span data-symbols="#UI_SET_PARAM" data-i="169" >UI_SET_PARAM</span>, <span data-symbols="7378-67" >onParamSetSuccess</span>);
</code><code id="line-230" aria-labelledby="230">    <span data-symbols="7378-58" >win</span>.<span data-symbols="#once,win#once" data-i="170" >once</span>(<span data-symbols="7378-58" >win</span>.<span data-symbols="#EVENTS,win#EVENTS" data-i="171" >EVENTS</span>.<span data-symbols="#UI_SET_PARAM_ERROR" data-i="172" >UI_SET_PARAM_ERROR</span>, <span data-symbols="7378-68" >onParamSetError</span>);
</code><code id="line-231" aria-labelledby="231">
</code><code id="line-232" aria-labelledby="232">    <span class="syn_comment" >// Focus and select the variable to begin editing</span>
</code><code id="line-233" aria-labelledby="233">    <span data-symbols="7378-58" >win</span>.<span data-symbols="#focus,win#focus" data-i="173" >focus</span>();
</code><code id="line-234" aria-labelledby="234">    <span data-symbols="7378-64" >aVar</span>.<span data-symbols="#focus,aVar#focus" data-i="174" >focus</span>();
</code><code id="line-235" aria-labelledby="235">    <span data-symbols="#EventUtils" data-i="175" >EventUtils</span>.<span data-symbols="#sendKey,EventUtils#sendKey" data-i="176" >sendKey</span>(<span class="syn_string" >"RETURN"</span>, <span data-symbols="7378-58" >win</span>);
</code><code id="line-236" aria-labelledby="236">
</code><code id="line-237" aria-labelledby="237">    <span class="syn_comment" >// Must wait for the scope DOM to be available to receive</span>
</code><code id="line-238" aria-labelledby="238">    <span class="syn_comment" >// events</span>
</code><code id="line-239" aria-labelledby="239">    <span data-symbols="#executeSoon" data-i="177" >executeSoon</span>(() => {
</code><code id="line-240" aria-labelledby="240">      <span data-symbols="#info" data-i="178" >info</span>(<span class="syn_string" >"Setting "</span> + <span data-symbols="7378-62" >value</span> + <span class="syn_string" >" for "</span> + <span data-symbols="7378-61" >prop</span> + <span class="syn_string" >"...."</span>);
</code><code id="line-241" aria-labelledby="241">      <span class="syn_reserved" >for</span> (<span class="syn_reserved" >const</span> <span data-symbols="7378-69" >c</span> of (<span data-symbols="7378-62" >value</span> + <span class="syn_string" >""</span>)) {
</code><code id="line-242" aria-labelledby="242">        <span data-symbols="#EventUtils" data-i="179" >EventUtils</span>.<span data-symbols="#synthesizeKey,EventUtils#synthesizeKey" data-i="180" >synthesizeKey</span>(<span data-symbols="7378-69" >c</span>, {}, <span data-symbols="7378-58" >win</span>);
</code><code id="line-243" aria-labelledby="243">      }
</code><code id="line-244" aria-labelledby="244">      <span data-symbols="#EventUtils" data-i="181" >EventUtils</span>.<span data-symbols="#sendKey,EventUtils#sendKey" data-i="182" >sendKey</span>(<span class="syn_string" >"RETURN"</span>, <span data-symbols="7378-58" >win</span>);
</code><code id="line-245" aria-labelledby="245">    });
</code><code id="line-246" aria-labelledby="246">  });
</code><code id="line-247" aria-labelledby="247">}
</code><code id="line-248" aria-labelledby="248">
</code><code id="line-249" aria-labelledby="249"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#findGraphEdge" data-i="183" >findGraphEdge</span>(<span data-symbols="7378-70" >win</span>, <span data-symbols="7378-71" >source</span>, <span data-symbols="7378-72" >target</span>, <span data-symbols="7378-73" >param</span>) {
</code><code id="line-250" aria-labelledby="250">  <span class="syn_reserved" >let</span> <span data-symbols="7378-74" >selector</span> = <span class="syn_string" >".edgePaths .edgePath[data-source='"</span> + <span data-symbols="7378-71" >source</span> + <span class="syn_string" >"'][data-target='"</span> + <span data-symbols="7378-72" >target</span> + <span class="syn_string" >"']"</span>;
</code><code id="line-251" aria-labelledby="251">  <span class="syn_reserved" >if</span> (<span data-symbols="7378-73" >param</span>) {
</code><code id="line-252" aria-labelledby="252">    <span data-symbols="7378-74" >selector</span> += <span class="syn_string" >"[data-param='"</span> + <span data-symbols="7378-73" >param</span> + <span class="syn_string" >"']"</span>;
</code><code id="line-253" aria-labelledby="253">  }
</code><code id="line-254" aria-labelledby="254">  <span class="syn_reserved" >return</span> <span data-symbols="7378-70" >win</span>.<span data-symbols="#document,win#document" data-i="184" >document</span>.<span data-symbols="#querySelector" data-i="185" >querySelector</span>(<span data-symbols="7378-74" >selector</span>);
</code><code id="line-255" aria-labelledby="255">}
</code><code id="line-256" aria-labelledby="256">
</code><code id="line-257" aria-labelledby="257"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#findGraphNode" data-i="186" >findGraphNode</span>(<span data-symbols="7378-75" >win</span>, <span data-symbols="7378-76" >node</span>) {
</code><code id="line-258" aria-labelledby="258">  <span class="syn_reserved" >const</span> <span data-symbols="7378-77" >selector</span> = <span class="syn_string" >".nodes > g[data-id='"</span> + <span data-symbols="7378-76" >node</span> + <span class="syn_string" >"']"</span>;
</code><code id="line-259" aria-labelledby="259">  <span class="syn_reserved" >return</span> <span data-symbols="7378-75" >win</span>.<span data-symbols="#document,win#document" data-i="187" >document</span>.<span data-symbols="#querySelector" data-i="188" >querySelector</span>(<span data-symbols="7378-77" >selector</span>);
</code><code id="line-260" aria-labelledby="260">}
</code><code id="line-261" aria-labelledby="261">
</code><code id="line-262" aria-labelledby="262"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#click" data-i="189" >click</span>(<span data-symbols="7378-78" >win</span>, <span data-symbols="7378-79" >element</span>) {
</code><code id="line-263" aria-labelledby="263">  <span data-symbols="#EventUtils" data-i="190" >EventUtils</span>.<span data-symbols="#sendMouseEvent,EventUtils#sendMouseEvent" data-i="191" >sendMouseEvent</span>({ <span class="syn_def" data-symbols="#type" data-i="192" >type</span>: <span class="syn_string" >"click"</span> }, <span data-symbols="7378-79" >element</span>, <span data-symbols="7378-78" >win</span>);
</code><code id="line-264" aria-labelledby="264">}
</code><code id="line-265" aria-labelledby="265">
</code><code id="line-266" aria-labelledby="266"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#mouseOver" data-i="193" >mouseOver</span>(<span data-symbols="7378-80" >win</span>, <span data-symbols="7378-81" >element</span>) {
</code><code id="line-267" aria-labelledby="267">  <span data-symbols="#EventUtils" data-i="194" >EventUtils</span>.<span data-symbols="#sendMouseEvent,EventUtils#sendMouseEvent" data-i="195" >sendMouseEvent</span>({ <span class="syn_def" data-symbols="#type" data-i="196" >type</span>: <span class="syn_string" >"mouseover"</span> }, <span data-symbols="7378-81" >element</span>, <span data-symbols="7378-80" >win</span>);
</code><code id="line-268" aria-labelledby="268">}
</code><code id="line-269" aria-labelledby="269">
</code><code id="line-270" aria-labelledby="270"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#command" data-i="197" >command</span>(<span data-symbols="7378-82" >button</span>) {
</code><code id="line-271" aria-labelledby="271">  <span class="syn_reserved" >const</span> <span data-symbols="7378-83" >ev</span> = <span data-symbols="7378-82" >button</span>.<span data-symbols="#ownerDocument,button#ownerDocument" data-i="198" >ownerDocument</span>.<span data-symbols="#createEvent" data-i="199" >createEvent</span>(<span class="syn_string" >"XULCommandEvent"</span>);
</code><code id="line-272" aria-labelledby="272">  <span data-symbols="7378-83" >ev</span>.<span data-symbols="#initCommandEvent,ev#initCommandEvent" data-i="200" >initCommandEvent</span>(<span class="syn_string" >"command"</span>, <span class="syn_reserved" >true</span>, <span class="syn_reserved" >true</span>, <span data-symbols="7378-82" >button</span>.<span data-symbols="#ownerDocument,button#ownerDocument" data-i="201" >ownerDocument</span>.<span data-symbols="#defaultView" data-i="202" >defaultView</span>, 0, <span class="syn_reserved" >false</span>, <span class="syn_reserved" >false</span>, <span class="syn_reserved" >false</span>, <span class="syn_reserved" >false</span>, <span class="syn_reserved" >null</span>, 0);
</code><code id="line-273" aria-labelledby="273">  <span data-symbols="7378-82" >button</span>.<span data-symbols="#dispatchEvent,button#dispatchEvent" data-i="203" >dispatchEvent</span>(<span data-symbols="7378-83" >ev</span>);
</code><code id="line-274" aria-labelledby="274">}
</code><code id="line-275" aria-labelledby="275">
</code><code id="line-276" aria-labelledby="276"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#isVisible" data-i="204" >isVisible</span>(<span data-symbols="7378-84" >element</span>) {
</code><code id="line-277" aria-labelledby="277">  <span class="syn_reserved" >return</span> !<span data-symbols="7378-84" >element</span>.<span data-symbols="#getAttribute,element#getAttribute" data-i="205" >getAttribute</span>(<span class="syn_string" >"hidden"</span>);
</code><code id="line-278" aria-labelledby="278">}
</code><code id="line-279" aria-labelledby="279">
</code><code id="line-280" aria-labelledby="280"><span class="syn_comment" >/**</span>
</code><code id="line-281" aria-labelledby="281"><span class="syn_comment" > * Clicks a graph node based on actorID or passing in an element.</span>
</code><code id="line-282" aria-labelledby="282"><span class="syn_comment" > * Returns a promise that resolves once UI_INSPECTOR_NODE_SET is fired and</span>
</code><code id="line-283" aria-labelledby="283"><span class="syn_comment" > * the tabs have rendered, completing all RDP requests for the node.</span>
</code><code id="line-284" aria-labelledby="284"><span class="syn_comment" > */</span>
</code><code id="line-285" aria-labelledby="285"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#clickGraphNode" data-i="206" >clickGraphNode</span>(<span data-symbols="7378-85" >panelWin</span>, <span data-symbols="7378-86" >el</span>, <span data-symbols="7378-87" >waitForToggle</span> = <span class="syn_reserved" >false</span>) {
</code><code id="line-286" aria-labelledby="286">  <span class="syn_reserved" >const</span> <span data-symbols="7378-88" >promises</span> = [
</code><code id="line-287" aria-labelledby="287">    <span data-symbols="#once" data-i="207" >once</span>(<span data-symbols="7378-85" >panelWin</span>, <span data-symbols="7378-85" >panelWin</span>.<span data-symbols="#EVENTS,panelWin#EVENTS" data-i="208" >EVENTS</span>.<span data-symbols="#UI_INSPECTOR_NODE_SET" data-i="209" >UI_INSPECTOR_NODE_SET</span>),
</code><code id="line-288" aria-labelledby="288">    <span data-symbols="#once" data-i="210" >once</span>(<span data-symbols="7378-85" >panelWin</span>, <span data-symbols="7378-85" >panelWin</span>.<span data-symbols="#EVENTS,panelWin#EVENTS" data-i="211" >EVENTS</span>.<span data-symbols="#UI_PROPERTIES_TAB_RENDERED" data-i="212" >UI_PROPERTIES_TAB_RENDERED</span>),
</code><code id="line-289" aria-labelledby="289">    <span data-symbols="#once" data-i="213" >once</span>(<span data-symbols="7378-85" >panelWin</span>, <span data-symbols="7378-85" >panelWin</span>.<span data-symbols="#EVENTS,panelWin#EVENTS" data-i="214" >EVENTS</span>.<span data-symbols="#UI_AUTOMATION_TAB_RENDERED" data-i="215" >UI_AUTOMATION_TAB_RENDERED</span>),
</code><code id="line-290" aria-labelledby="290">  ];
</code><code id="line-291" aria-labelledby="291">
</code><code id="line-292" aria-labelledby="292">  <span class="syn_reserved" >if</span> (<span data-symbols="7378-87" >waitForToggle</span>) {
</code><code id="line-293" aria-labelledby="293">    <span data-symbols="7378-88" >promises</span>.<span data-symbols="#push,promises#push" data-i="216" >push</span>(<span data-symbols="#once" data-i="217" >once</span>(<span data-symbols="7378-85" >panelWin</span>, <span data-symbols="7378-85" >panelWin</span>.<span data-symbols="#EVENTS,panelWin#EVENTS" data-i="218" >EVENTS</span>.<span data-symbols="#UI_INSPECTOR_TOGGLED" data-i="219" >UI_INSPECTOR_TOGGLED</span>));
</code><code id="line-294" aria-labelledby="294">  }
</code><code id="line-295" aria-labelledby="295">
</code><code id="line-296" aria-labelledby="296">  <span class="syn_comment" >// Use `el` as the element if it is one, otherwise</span>
</code><code id="line-297" aria-labelledby="297">  <span class="syn_comment" >// assume it's an ID and find the related graph node</span>
</code><code id="line-298" aria-labelledby="298">  <span class="syn_reserved" >const</span> <span data-symbols="7378-89" >element</span> = <span data-symbols="7378-86" >el</span>.<span data-symbols="#tagName,el#tagName" data-i="220" >tagName</span> ? <span data-symbols="7378-86" >el</span> : <span data-symbols="#findGraphNode" data-i="221" >findGraphNode</span>(<span data-symbols="7378-85" >panelWin</span>, <span data-symbols="7378-86" >el</span>);
</code><code id="line-299" aria-labelledby="299">  <span data-symbols="#click" data-i="222" >click</span>(<span data-symbols="7378-85" >panelWin</span>, <span data-symbols="7378-89" >element</span>);
</code><code id="line-300" aria-labelledby="300">
</code><code id="line-301" aria-labelledby="301">  <span class="syn_reserved" >return</span> <span data-symbols="#Promise" data-i="223" >Promise</span>.<span data-symbols="#all,Promise#all" data-i="224" >all</span>(<span data-symbols="7378-88" >promises</span>);
</code><code id="line-302" aria-labelledby="302">}
</code><code id="line-303" aria-labelledby="303">
</code><code id="line-304" aria-labelledby="304"><span class="syn_comment" >/**</span>
</code><code id="line-305" aria-labelledby="305"><span class="syn_comment" > * Returns the primitive value of a grip's value, or the</span>
</code><code id="line-306" aria-labelledby="306"><span class="syn_comment" > * original form that the string grip.type comes from.</span>
</code><code id="line-307" aria-labelledby="307"><span class="syn_comment" > */</span>
</code><code id="line-308" aria-labelledby="308"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#getGripValue" data-i="225" >getGripValue</span>(<span data-symbols="7378-90" >value</span>) {
</code><code id="line-309" aria-labelledby="309">  <span class="syn_reserved" >if</span> (~[<span class="syn_string" >"boolean"</span>, <span class="syn_string" >"string"</span>, <span class="syn_string" >"number"</span>].<span data-symbols="#indexOf" data-i="226" >indexOf</span>(<span class="syn_reserved" >typeof</span> <span data-symbols="7378-90" >value</span>)) {
</code><code id="line-310" aria-labelledby="310">    <span class="syn_reserved" >return</span> <span data-symbols="7378-90" >value</span>;
</code><code id="line-311" aria-labelledby="311">  }
</code><code id="line-312" aria-labelledby="312">
</code><code id="line-313" aria-labelledby="313">  <span class="syn_reserved" >switch</span> (<span data-symbols="7378-90" >value</span>.<span data-symbols="#type,value#type" data-i="227" >type</span>) {
</code><code id="line-314" aria-labelledby="314">    <span class="syn_reserved" >case</span> <span class="syn_string" >"undefined"</span>: <span class="syn_reserved" >return</span> <span data-symbols="#undefined" data-i="228" >undefined</span>;
</code><code id="line-315" aria-labelledby="315">    <span class="syn_reserved" >case</span> <span class="syn_string" >"Infinity"</span>: <span class="syn_reserved" >return</span> <span data-symbols="#Infinity" data-i="229" >Infinity</span>;
</code><code id="line-316" aria-labelledby="316">    <span class="syn_reserved" >case</span> <span class="syn_string" >"-Infinity"</span>: <span class="syn_reserved" >return</span> -<span data-symbols="#Infinity" data-i="230" >Infinity</span>;
</code><code id="line-317" aria-labelledby="317">    <span class="syn_reserved" >case</span> <span class="syn_string" >"NaN"</span>: <span class="syn_reserved" >return</span> <span data-symbols="#NaN" data-i="231" >NaN</span>;
</code><code id="line-318" aria-labelledby="318">    <span class="syn_reserved" >case</span> <span class="syn_string" >"-0"</span>: <span class="syn_reserved" >return</span> -0;
</code><code id="line-319" aria-labelledby="319">    <span class="syn_reserved" >case</span> <span class="syn_string" >"null"</span>: <span class="syn_reserved" >return</span> <span class="syn_reserved" >null</span>;
</code><code id="line-320" aria-labelledby="320">    <span class="syn_reserved" >default</span>: <span class="syn_reserved" >return</span> <span data-symbols="7378-90" >value</span>;
</code><code id="line-321" aria-labelledby="321">  }
</code><code id="line-322" aria-labelledby="322">}
</code><code id="line-323" aria-labelledby="323">
</code><code id="line-324" aria-labelledby="324"><span class="syn_comment" >/**</span>
</code><code id="line-325" aria-labelledby="325"><span class="syn_comment" > * Counts how many nodes and edges are currently in the graph.</span>
</code><code id="line-326" aria-labelledby="326"><span class="syn_comment" > */</span>
</code><code id="line-327" aria-labelledby="327"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#countGraphObjects" data-i="232" >countGraphObjects</span>(<span data-symbols="7378-91" >win</span>) {
</code><code id="line-328" aria-labelledby="328">  <span class="syn_reserved" >return</span> {
</code><code id="line-329" aria-labelledby="329">    <span class="syn_def" data-symbols="#nodes" data-i="233" >nodes</span>: <span data-symbols="7378-91" >win</span>.<span data-symbols="#document,win#document" data-i="234" >document</span>.<span data-symbols="#querySelectorAll" data-i="235" >querySelectorAll</span>(<span class="syn_string" >".nodes > .audionode"</span>).<span data-symbols="#length" data-i="236" >length</span>,
</code><code id="line-330" aria-labelledby="330">    <span class="syn_def" data-symbols="#edges" data-i="237" >edges</span>: <span data-symbols="7378-91" >win</span>.<span data-symbols="#document,win#document" data-i="238" >document</span>.<span data-symbols="#querySelectorAll" data-i="239" >querySelectorAll</span>(<span class="syn_string" >".edgePaths > .edgePath"</span>).<span data-symbols="#length" data-i="240" >length</span>,
</code><code id="line-331" aria-labelledby="331">  };
</code><code id="line-332" aria-labelledby="332">}
</code><code id="line-333" aria-labelledby="333">
</code><code id="line-334" aria-labelledby="334"><span class="syn_comment" >/**</span>
</code><code id="line-335" aria-labelledby="335"><span class="syn_comment" >* Forces cycle collection and GC, used in AudioNode destruction tests.</span>
</code><code id="line-336" aria-labelledby="336"><span class="syn_comment" >*/</span>
</code><code id="line-337" aria-labelledby="337"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#forceNodeCollection" data-i="241" >forceNodeCollection</span>() {
</code><code id="line-338" aria-labelledby="338">  <span data-symbols="#ContentTask" data-i="242" >ContentTask</span>.<span data-symbols="#spawn,ContentTask#spawn" data-i="243" >spawn</span>(<span data-symbols="#gBrowser" data-i="244" >gBrowser</span>.<span data-symbols="#selectedBrowser,gBrowser#selectedBrowser" data-i="245" >selectedBrowser</span>, {}, async <span class="syn_reserved" >function</span>() {
</code><code id="line-339" aria-labelledby="339">    <span class="syn_comment" >// Kill the reference keeping stuff alive.</span>
</code><code id="line-340" aria-labelledby="340">    <span data-symbols="#content" data-i="246" >content</span>.<span data-symbols="#wrappedJSObject,content#wrappedJSObject" data-i="247" >wrappedJSObject</span>.<span data-symbols="#keepAlive" data-i="248" >keepAlive</span> = <span class="syn_reserved" >null</span>;
</code><code id="line-341" aria-labelledby="341">
</code><code id="line-342" aria-labelledby="342">    <span class="syn_comment" >// Collect the now-deceased nodes.</span>
</code><code id="line-343" aria-labelledby="343">    <span data-symbols="#Cu" data-i="249" >Cu</span>.<span data-symbols="#forceGC,Cu#forceGC" data-i="250" >forceGC</span>();
</code><code id="line-344" aria-labelledby="344">    <span data-symbols="#Cu" data-i="251" >Cu</span>.<span data-symbols="#forceCC,Cu#forceCC" data-i="252" >forceCC</span>();
</code><code id="line-345" aria-labelledby="345">    <span data-symbols="#Cu" data-i="253" >Cu</span>.<span data-symbols="#forceGC,Cu#forceGC" data-i="254" >forceGC</span>();
</code><code id="line-346" aria-labelledby="346">    <span data-symbols="#Cu" data-i="255" >Cu</span>.<span data-symbols="#forceCC,Cu#forceCC" data-i="256" >forceCC</span>();
</code><code id="line-347" aria-labelledby="347">  });
</code><code id="line-348" aria-labelledby="348">}
</code><code id="line-349" aria-labelledby="349">
</code><code id="line-350" aria-labelledby="350"><span class="syn_comment" >/**</span>
</code><code id="line-351" aria-labelledby="351"><span class="syn_comment" > * Takes a `values` array of automation value entries,</span>
</code><code id="line-352" aria-labelledby="352"><span class="syn_comment" > * looking for the value at `time` seconds, checking</span>
</code><code id="line-353" aria-labelledby="353"><span class="syn_comment" > * to see if the value is close to `expected`.</span>
</code><code id="line-354" aria-labelledby="354"><span class="syn_comment" > */</span>
</code><code id="line-355" aria-labelledby="355"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#checkAutomationValue" data-i="257" >checkAutomationValue</span>(<span data-symbols="7378-92" >values</span>, <span data-symbols="7378-93" >time</span>, <span data-symbols="7378-94" >expected</span>) {
</code><code id="line-356" aria-labelledby="356">  <span class="syn_comment" >// Remain flexible on values as we can approximate points</span>
</code><code id="line-357" aria-labelledby="357">  <span class="syn_reserved" >const</span> <span data-symbols="7378-95" >EPSILON</span> = 0.01;
</code><code id="line-358" aria-labelledby="358">
</code><code id="line-359" aria-labelledby="359">  <span class="syn_reserved" >const</span> <span data-symbols="7378-96" >value</span> = <span data-symbols="#getValueAt" data-i="258" >getValueAt</span>(<span data-symbols="7378-92" >values</span>, <span data-symbols="7378-93" >time</span>);
</code><code id="line-360" aria-labelledby="360">  <span data-symbols="#ok" data-i="259" >ok</span>(<span data-symbols="#Math" data-i="260" >Math</span>.<span data-symbols="#abs,Math#abs" data-i="261" >abs</span>(<span data-symbols="7378-96" >value</span> - <span data-symbols="7378-94" >expected</span>) &lt; <span data-symbols="7378-95" >EPSILON</span>, <span class="syn_string" >"Timeline value at "</span> + <span data-symbols="7378-93" >time</span> + <span class="syn_string" >" with value "</span> + <span data-symbols="7378-96" >value</span> + <span class="syn_string" >" should have value very close to "</span> + <span data-symbols="7378-94" >expected</span>);
</code><code id="line-361" aria-labelledby="361">
</code><code id="line-362" aria-labelledby="362">  <span class="syn_comment" >/**</span>
</code><code id="line-363" aria-labelledby="363"><span class="syn_comment" >   * Entries are ordered in `values` according to time, so if we can't find an exact point</span>
</code><code id="line-364" aria-labelledby="364"><span class="syn_comment" >   * on a time of interest, return the point in between the threshold. This should</span>
</code><code id="line-365" aria-labelledby="365"><span class="syn_comment" >   * get us a very close value.</span>
</code><code id="line-366" aria-labelledby="366"><span class="syn_comment" >   */</span>
</code><code id="line-367" aria-labelledby="367">  <span class="syn_reserved" >function</span> <span data-symbols="7378-97" >getValueAt</span>(<span data-symbols="7378-98" >values</span>, <span data-symbols="7378-99" >time</span>) {
</code><code id="line-368" aria-labelledby="368">    <span class="syn_reserved" >for</span> (<span class="syn_reserved" >let</span> <span data-symbols="7378-100" >i</span> = 0; <span data-symbols="7378-100" >i</span> &lt; <span data-symbols="7378-98" >values</span>.<span data-symbols="#length,values#length" data-i="262" >length</span>; <span data-symbols="7378-100" >i</span>++) {
</code><code id="line-369" aria-labelledby="369">      <span class="syn_reserved" >if</span> (<span data-symbols="7378-98" >values</span>[<span data-symbols="7378-100" >i</span>].<span data-symbols="#delta" data-i="263" >delta</span> === <span data-symbols="7378-99" >time</span>) {
</code><code id="line-370" aria-labelledby="370">        <span class="syn_reserved" >return</span> <span data-symbols="7378-98" >values</span>[<span data-symbols="7378-100" >i</span>].<span data-symbols="#value" data-i="264" >value</span>;
</code><code id="line-371" aria-labelledby="371">      }
</code><code id="line-372" aria-labelledby="372">      <span class="syn_reserved" >if</span> (<span data-symbols="7378-98" >values</span>[<span data-symbols="7378-100" >i</span>].<span data-symbols="#delta" data-i="265" >delta</span> > <span data-symbols="7378-99" >time</span>) {
</code><code id="line-373" aria-labelledby="373">        <span class="syn_reserved" >return</span> (<span data-symbols="7378-98" >values</span>[<span data-symbols="7378-100" >i</span> - 1].<span data-symbols="#value" data-i="266" >value</span> + <span data-symbols="7378-98" >values</span>[<span data-symbols="7378-100" >i</span>].<span data-symbols="#value" data-i="267" >value</span>) / 2;
</code><code id="line-374" aria-labelledby="374">      }
</code><code id="line-375" aria-labelledby="375">    }
</code><code id="line-376" aria-labelledby="376">    <span class="syn_reserved" >return</span> <span data-symbols="7378-98" >values</span>[<span data-symbols="7378-98" >values</span>.<span data-symbols="#length,values#length" data-i="268" >length</span> - 1].<span data-symbols="#value" data-i="269" >value</span>;
</code><code id="line-377" aria-labelledby="377">  }
</code><code id="line-378" aria-labelledby="378">}
</code><code id="line-379" aria-labelledby="379">
</code><code id="line-380" aria-labelledby="380"><span class="syn_comment" >/**</span>
</code><code id="line-381" aria-labelledby="381"><span class="syn_comment" > * Wait for all inspector tabs to complete rendering.</span>
</code><code id="line-382" aria-labelledby="382"><span class="syn_comment" > */</span>
</code><code id="line-383" aria-labelledby="383"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#waitForInspectorRender" data-i="270" >waitForInspectorRender</span>(<span data-symbols="7378-101" >panelWin</span>, <span data-symbols="7378-102" >EVENTS</span>) {
</code><code id="line-384" aria-labelledby="384">  <span class="syn_reserved" >return</span> <span data-symbols="#Promise" data-i="271" >Promise</span>.<span data-symbols="#all,Promise#all" data-i="272" >all</span>([
</code><code id="line-385" aria-labelledby="385">    <span data-symbols="#once" data-i="273" >once</span>(<span data-symbols="7378-101" >panelWin</span>, <span data-symbols="7378-102" >EVENTS</span>.<span data-symbols="#UI_PROPERTIES_TAB_RENDERED,EVENTS#UI_PROPERTIES_TAB_RENDERED" data-i="274" >UI_PROPERTIES_TAB_RENDERED</span>),
</code><code id="line-386" aria-labelledby="386">    <span data-symbols="#once" data-i="275" >once</span>(<span data-symbols="7378-101" >panelWin</span>, <span data-symbols="7378-102" >EVENTS</span>.<span data-symbols="#UI_AUTOMATION_TAB_RENDERED,EVENTS#UI_AUTOMATION_TAB_RENDERED" data-i="276" >UI_AUTOMATION_TAB_RENDERED</span>),
</code><code id="line-387" aria-labelledby="387">  ]);
</code><code id="line-388" aria-labelledby="388">}
</code><code id="line-389" aria-labelledby="389">
</code><code id="line-390" aria-labelledby="390"><span class="syn_comment" >/**</span>
</code><code id="line-391" aria-labelledby="391"><span class="syn_comment" > * Takes an AudioNode type and returns it's properties (from audionode.json)</span>
</code><code id="line-392" aria-labelledby="392"><span class="syn_comment" > * as keys and their default values as keys</span>
</code><code id="line-393" aria-labelledby="393"><span class="syn_comment" > */</span>
</code><code id="line-394" aria-labelledby="394"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#nodeDefaultValues" data-i="277" >nodeDefaultValues</span>(<span data-symbols="7378-103" >nodeName</span>) {
</code><code id="line-395" aria-labelledby="395">  <span class="syn_reserved" >const</span> <span data-symbols="7378-104" >fn</span> = <span data-symbols="#NODE_CONSTRUCTORS" data-i="278" >NODE_CONSTRUCTORS</span>[<span data-symbols="7378-103" >nodeName</span>];
</code><code id="line-396" aria-labelledby="396">
</code><code id="line-397" aria-labelledby="397">  <span class="syn_reserved" >if</span> (<span class="syn_reserved" >typeof</span> <span data-symbols="7378-104" >fn</span> === <span class="syn_string" >"undefined"</span>) {
</code><code id="line-398" aria-labelledby="398">    <span class="syn_reserved" >return</span> {};
</code><code id="line-399" aria-labelledby="399">  }
</code><code id="line-400" aria-labelledby="400">
</code><code id="line-401" aria-labelledby="401">  <span class="syn_reserved" >const</span> <span data-symbols="7378-105" >init</span> = <span data-symbols="7378-103" >nodeName</span> === <span class="syn_string" >"AudioDestinationNode"</span> ? <span class="syn_string" >"destination"</span> : <span class="syn_string" >`create${</span><span data-symbols="7378-104" >fn</span><span class="syn_string" >}()`</span>;
</code><code id="line-402" aria-labelledby="402">
</code><code id="line-403" aria-labelledby="403">  <span class="syn_reserved" >const</span> <span data-symbols="7378-106" >definition</span> = <span data-symbols="#JSON" data-i="279" >JSON</span>.<span data-symbols="#stringify,JSON#stringify" data-i="280" >stringify</span>(<span data-symbols="#audioNodes" data-i="281" >audioNodes</span>[<span data-symbols="7378-103" >nodeName</span>].<span data-symbols="#properties" data-i="282" >properties</span>);
</code><code id="line-404" aria-labelledby="404">
</code><code id="line-405" aria-labelledby="405">  <span class="syn_reserved" >const</span> <span data-symbols="7378-107" >evalNode</span> = <span data-symbols="#evalInDebuggee" data-i="283" >evalInDebuggee</span>(<span class="syn_string" >`</span>
</code><code id="line-406" aria-labelledby="406"><span class="syn_string" >    let ins = (new AudioContext()).${</span><span data-symbols="7378-105" >init</span><span class="syn_string" >};</span>
</code><code id="line-407" aria-labelledby="407"><span class="syn_string" >    let props = ${</span><span data-symbols="7378-106" >definition</span><span class="syn_string" >};</span>
</code><code id="line-408" aria-labelledby="408"><span class="syn_string" >    let answer = {};</span>
</code><code id="line-409" aria-labelledby="409">
</code><code id="line-410" aria-labelledby="410"><span class="syn_string" >    for(let k in props) {</span>
</code><code id="line-411" aria-labelledby="411"><span class="syn_string" >      if (props[k].param) {</span>
</code><code id="line-412" aria-labelledby="412"><span class="syn_string" >        answer[k] = ins[k].defaultValue;</span>
</code><code id="line-413" aria-labelledby="413"><span class="syn_string" >      } else if (typeof ins[k] === "object" &amp;&amp; ins[k] !== null) {</span>
</code><code id="line-414" aria-labelledby="414"><span class="syn_string" >        answer[k] = ins[k].toString().slice(8, -1);</span>
</code><code id="line-415" aria-labelledby="415"><span class="syn_string" >      } else {</span>
</code><code id="line-416" aria-labelledby="416"><span class="syn_string" >        answer[k] = ins[k];</span>
</code><code id="line-417" aria-labelledby="417"><span class="syn_string" >      }</span>
</code><code id="line-418" aria-labelledby="418"><span class="syn_string" >    }</span>
</code><code id="line-419" aria-labelledby="419"><span class="syn_string" >    answer;`</span>);
</code><code id="line-420" aria-labelledby="420">
</code><code id="line-421" aria-labelledby="421">  <span class="syn_reserved" >return</span> <span data-symbols="7378-107" >evalNode</span>;
</code><code id="line-422" aria-labelledby="422">}
</code><code id="line-423" aria-labelledby="423">
</code><code id="line-424" aria-labelledby="424"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#NODE_CONSTRUCTORS" data-i="284" >NODE_CONSTRUCTORS</span> = {
</code><code id="line-425" aria-labelledby="425">  <span class="syn_string" >"MediaStreamAudioDestinationNode"</span>: <span class="syn_string" >"MediaStreamDestination"</span>,
</code><code id="line-426" aria-labelledby="426">  <span class="syn_string" >"AudioBufferSourceNode"</span>: <span class="syn_string" >"BufferSource"</span>,
</code><code id="line-427" aria-labelledby="427">  <span class="syn_string" >"ScriptProcessorNode"</span>: <span class="syn_string" >"ScriptProcessor"</span>,
</code><code id="line-428" aria-labelledby="428">  <span class="syn_string" >"AnalyserNode"</span>: <span class="syn_string" >"Analyser"</span>,
</code><code id="line-429" aria-labelledby="429">  <span class="syn_string" >"GainNode"</span>: <span class="syn_string" >"Gain"</span>,
</code><code id="line-430" aria-labelledby="430">  <span class="syn_string" >"DelayNode"</span>: <span class="syn_string" >"Delay"</span>,
</code><code id="line-431" aria-labelledby="431">  <span class="syn_string" >"BiquadFilterNode"</span>: <span class="syn_string" >"BiquadFilter"</span>,
</code><code id="line-432" aria-labelledby="432">  <span class="syn_string" >"WaveShaperNode"</span>: <span class="syn_string" >"WaveShaper"</span>,
</code><code id="line-433" aria-labelledby="433">  <span class="syn_string" >"PannerNode"</span>: <span class="syn_string" >"Panner"</span>,
</code><code id="line-434" aria-labelledby="434">  <span class="syn_string" >"ConvolverNode"</span>: <span class="syn_string" >"Convolver"</span>,
</code><code id="line-435" aria-labelledby="435">  <span class="syn_string" >"ChannelSplitterNode"</span>: <span class="syn_string" >"ChannelSplitter"</span>,
</code><code id="line-436" aria-labelledby="436">  <span class="syn_string" >"ChannelMergerNode"</span>: <span class="syn_string" >"ChannelMerger"</span>,
</code><code id="line-437" aria-labelledby="437">  <span class="syn_string" >"DynamicsCompressorNode"</span>: <span class="syn_string" >"DynamicsCompressor"</span>,
</code><code id="line-438" aria-labelledby="438">  <span class="syn_string" >"OscillatorNode"</span>: <span class="syn_string" >"Oscillator"</span>,
</code><code id="line-439" aria-labelledby="439">  <span class="syn_string" >"StereoPannerNode"</span>: <span class="syn_string" >"StereoPanner"</span>,
</code><code id="line-440" aria-labelledby="440">};
</code></pre>      </td>
    </tr>
  </tbody>
</table>
<script>var ANALYSIS_DATA = [[[],[{"pretty":"property Services","sym":"#Services"}]],[[],[{"pretty":"property scriptloader","sym":"#scriptloader"},{"pretty":"property Services.scriptloader","sym":"Services#scriptloader"}]],[[],[{"pretty":"property loadSubScript","sym":"#loadSubScript"}]],[[],[{"pretty":"property DebuggerServer","sym":"#DebuggerServer"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property generateUUID","sym":"#generateUUID"}]],[[],[{"pretty":"property Cc","sym":"#Cc"}]],[[],[{"pretty":"property getService","sym":"#getService"}]],[[],[{"pretty":"property Ci","sym":"#Ci"}]],[[{"pretty":"nsIUUIDGenerator","sym":"#nsIUUIDGenerator"}],[{"pretty":"property nsIUUIDGenerator","sym":"#nsIUUIDGenerator"},{"pretty":"property Ci.nsIUUIDGenerator","sym":"Ci#nsIUUIDGenerator"}]],[[],[{"pretty":"property WebAudioFront","sym":"#WebAudioFront"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property audioNodes","sym":"#audioNodes"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property EXAMPLE_URL","sym":"#EXAMPLE_URL"}]],[[],[{"pretty":"property SIMPLE_CONTEXT_URL","sym":"#SIMPLE_CONTEXT_URL"}]],[[],[{"pretty":"property EXAMPLE_URL","sym":"#EXAMPLE_URL"}]],[[],[{"pretty":"property COMPLEX_CONTEXT_URL","sym":"#COMPLEX_CONTEXT_URL"}]],[[],[{"pretty":"property EXAMPLE_URL","sym":"#EXAMPLE_URL"}]],[[],[{"pretty":"property SIMPLE_NODES_URL","sym":"#SIMPLE_NODES_URL"}]],[[],[{"pretty":"property EXAMPLE_URL","sym":"#EXAMPLE_URL"}]],[[],[{"pretty":"property MEDIA_NODES_URL","sym":"#MEDIA_NODES_URL"}]],[[],[{"pretty":"property EXAMPLE_URL","sym":"#EXAMPLE_URL"}]],[[],[{"pretty":"property BUFFER_AND_ARRAY_URL","sym":"#BUFFER_AND_ARRAY_URL"}]],[[],[{"pretty":"property EXAMPLE_URL","sym":"#EXAMPLE_URL"}]],[[],[{"pretty":"property DESTROY_NODES_URL","sym":"#DESTROY_NODES_URL"}]],[[],[{"pretty":"property EXAMPLE_URL","sym":"#EXAMPLE_URL"}]],[[],[{"pretty":"property CONNECT_PARAM_URL","sym":"#CONNECT_PARAM_URL"}]],[[],[{"pretty":"property EXAMPLE_URL","sym":"#EXAMPLE_URL"}]],[[],[{"pretty":"property CONNECT_MULTI_PARAM_URL","sym":"#CONNECT_MULTI_PARAM_URL"}]],[[],[{"pretty":"property EXAMPLE_URL","sym":"#EXAMPLE_URL"}]],[[],[{"pretty":"property IFRAME_CONTEXT_URL","sym":"#IFRAME_CONTEXT_URL"}]],[[],[{"pretty":"property EXAMPLE_URL","sym":"#EXAMPLE_URL"}]],[[],[{"pretty":"property AUTOMATION_URL","sym":"#AUTOMATION_URL"}]],[[],[{"pretty":"property EXAMPLE_URL","sym":"#EXAMPLE_URL"}]],[[],[{"pretty":"property gEnableLogging","sym":"#gEnableLogging"}]],[[],[{"pretty":"property Services","sym":"#Services"}]],[[],[{"pretty":"property prefs","sym":"#prefs"},{"pretty":"property Services.prefs","sym":"Services#prefs"}]],[[],[{"pretty":"property getBoolPref","sym":"#getBoolPref"}]],[[],[{"pretty":"property Services","sym":"#Services"}]],[[],[{"pretty":"property prefs","sym":"#prefs"},{"pretty":"property Services.prefs","sym":"Services#prefs"}]],[[],[{"pretty":"property setBoolPref","sym":"#setBoolPref"}]],[[],[{"pretty":"property gToolEnabled","sym":"#gToolEnabled"}]],[[],[{"pretty":"property Services","sym":"#Services"}]],[[],[{"pretty":"property prefs","sym":"#prefs"},{"pretty":"property Services.prefs","sym":"Services#prefs"}]],[[],[{"pretty":"property getBoolPref","sym":"#getBoolPref"}]],[[],[{"pretty":"property registerCleanupFunction","sym":"#registerCleanupFunction"}]],[[],[{"pretty":"property Services","sym":"#Services"}]],[[],[{"pretty":"property prefs","sym":"#prefs"},{"pretty":"property Services.prefs","sym":"Services#prefs"}]],[[],[{"pretty":"property setBoolPref","sym":"#setBoolPref"}]],[[],[{"pretty":"property gEnableLogging","sym":"#gEnableLogging"}]],[[],[{"pretty":"property Services","sym":"#Services"}]],[[],[{"pretty":"property prefs","sym":"#prefs"},{"pretty":"property Services.prefs","sym":"Services#prefs"}]],[[],[{"pretty":"property setBoolPref","sym":"#setBoolPref"}]],[[],[{"pretty":"property gToolEnabled","sym":"#gToolEnabled"}]],[[],[{"pretty":"property Cu","sym":"#Cu"}]],[[],[{"pretty":"property forceGC","sym":"#forceGC"},{"pretty":"property Cu.forceGC","sym":"Cu#forceGC"}]],[[],[{"pretty":"property reload","sym":"#reload"}]],[[],[{"pretty":"property reload","sym":"#reload"},{"pretty":"property aTarget.reload","sym":"aTarget#reload"}]],[[],[{"pretty":"property once","sym":"#once"}]],[[],[{"pretty":"property navigate","sym":"#navigate"}]],[[],[{"pretty":"property executeSoon","sym":"#executeSoon"}]],[[],[{"pretty":"property navigateTo","sym":"#navigateTo"},{"pretty":"property aTarget.navigateTo","sym":"aTarget#navigateTo"}]],[[],[{"pretty":"property url","sym":"#url"}]],[[],[{"pretty":"property once","sym":"#once"}]],[[],[{"pretty":"property initBackend","sym":"#initBackend"}]],[[],[{"pretty":"property info","sym":"#info"}]],[[],[{"pretty":"property DebuggerServer","sym":"#DebuggerServer"}]],[[{"pretty":"DebuggerServer.init","sym":"DebuggerServer#init"}],[{"pretty":"property init","sym":"#init"},{"pretty":"property DebuggerServer.init","sym":"DebuggerServer#init"}]],[[],[{"pretty":"property DebuggerServer","sym":"#DebuggerServer"}]],[[{"pretty":"DebuggerServer.registerAllActors","sym":"DebuggerServer#registerAllActors"}],[{"pretty":"property registerAllActors","sym":"#registerAllActors"},{"pretty":"property DebuggerServer.registerAllActors","sym":"DebuggerServer#registerAllActors"}]],[[],[{"pretty":"property addTab","sym":"#addTab"}]],[[],[{"pretty":"property TargetFactory","sym":"#TargetFactory"}]],[[{"pretty":"forTab","sym":"#forTab"}],[{"pretty":"property forTab","sym":"#forTab"},{"pretty":"property TargetFactory.forTab","sym":"TargetFactory#forTab"}]],[[],[{"pretty":"property attach","sym":"#attach"},{"pretty":"property target.attach","sym":"target#attach"}]],[[],[{"pretty":"property getFront","sym":"#getFront"},{"pretty":"property target.getFront","sym":"target#getFront"}]],[[],[{"pretty":"property target","sym":"#target"}]],[[],[{"pretty":"property front","sym":"#front"}]],[[],[{"pretty":"property initWebAudioEditor","sym":"#initWebAudioEditor"}]],[[],[{"pretty":"property info","sym":"#info"}]],[[],[{"pretty":"property addTab","sym":"#addTab"}]],[[],[{"pretty":"property TargetFactory","sym":"#TargetFactory"}]],[[{"pretty":"forTab","sym":"#forTab"}],[{"pretty":"property forTab","sym":"#forTab"},{"pretty":"property TargetFactory.forTab","sym":"TargetFactory#forTab"}]],[[],[{"pretty":"property Services","sym":"#Services"}]],[[],[{"pretty":"property prefs","sym":"#prefs"},{"pretty":"property Services.prefs","sym":"Services#prefs"}]],[[],[{"pretty":"property setBoolPref","sym":"#setBoolPref"}]],[[],[{"pretty":"property gDevTools","sym":"#gDevTools"}]],[[{"pretty":"showToolbox","sym":"#showToolbox"}],[{"pretty":"property showToolbox","sym":"#showToolbox"},{"pretty":"property gDevTools.showToolbox","sym":"gDevTools#showToolbox"}]],[[{"pretty":"getCurrentPanel","sym":"#getCurrentPanel"}],[{"pretty":"property getCurrentPanel","sym":"#getCurrentPanel"},{"pretty":"property toolbox.getCurrentPanel","sym":"toolbox#getCurrentPanel"}]],[[],[{"pretty":"property target","sym":"#target"}]],[[],[{"pretty":"property panel","sym":"#panel"}]],[[],[{"pretty":"property toolbox","sym":"#toolbox"}]],[[],[{"pretty":"property teardown","sym":"#teardown"}]],[[],[{"pretty":"property info","sym":"#info"}]],[[],[{"pretty":"property gDevTools","sym":"#gDevTools"}]],[[],[{"pretty":"property closeToolbox","sym":"#closeToolbox"},{"pretty":"property gDevTools.closeToolbox","sym":"gDevTools#closeToolbox"}]],[[],[{"pretty":"property then","sym":"#then"}]],[[],[{"pretty":"property gBrowser","sym":"#gBrowser"}]],[[],[{"pretty":"property tabs","sym":"#tabs"},{"pretty":"property gBrowser.tabs","sym":"gBrowser#tabs"}]],[[],[{"pretty":"property length","sym":"#length"}]],[[],[{"pretty":"property gBrowser","sym":"#gBrowser"}]],[[{"pretty":"removeCurrentTab","sym":"#removeCurrentTab"}],[{"pretty":"property removeCurrentTab","sym":"#removeCurrentTab"},{"pretty":"property gBrowser.removeCurrentTab","sym":"gBrowser#removeCurrentTab"}]],[[],[{"pretty":"property getN","sym":"#getN"}]],[[],[{"pretty":"property info","sym":"#info"}]],[[],[{"pretty":"property Promise","sym":"#Promise"}]],[[],[{"pretty":"property on","sym":"#on"},{"pretty":"property front.on","sym":"front#on"}]],[[],[{"pretty":"property length","sym":"#length"},{"pretty":"property actors.length","sym":"actors#length"}]],[[],[{"pretty":"property push","sym":"#push"},{"pretty":"property actors.push","sym":"actors#push"}]],[[],[{"pretty":"property info","sym":"#info"}]],[[],[{"pretty":"property length","sym":"#length"},{"pretty":"property actors.length","sym":"actors#length"}]],[[],[{"pretty":"property length","sym":"#length"},{"pretty":"property actors.length","sym":"actors#length"}]],[[],[{"pretty":"property off","sym":"#off"},{"pretty":"property front.off","sym":"front#off"}]],[[],[{"pretty":"property onEvent","sym":"#onEvent"}]],[[{"pretty":"getN","sym":"#getN"}],[{"pretty":"property getN","sym":"#getN"}]],[[],[{"pretty":"property get2","sym":"#get2"}]],[[{"pretty":"getN","sym":"#getN"}],[{"pretty":"property getN","sym":"#getN"}]],[[],[{"pretty":"property get3","sym":"#get3"}]],[[{"pretty":"getN","sym":"#getN"}],[{"pretty":"property getN","sym":"#getN"}]],[[],[{"pretty":"property getSpread","sym":"#getSpread"}]],[[{"pretty":"getN","sym":"#getN"}],[{"pretty":"property getN","sym":"#getN"}]],[[],[{"pretty":"property get2Spread","sym":"#get2Spread"}]],[[{"pretty":"getN","sym":"#getN"}],[{"pretty":"property getN","sym":"#getN"}]],[[],[{"pretty":"property get3Spread","sym":"#get3Spread"}]],[[{"pretty":"getN","sym":"#getN"}],[{"pretty":"property getN","sym":"#getN"}]],[[],[{"pretty":"property getNSpread","sym":"#getNSpread"}]],[[{"pretty":"getN","sym":"#getN"}],[{"pretty":"property getN","sym":"#getN"}]],[[],[{"pretty":"property waitForGraphRendered","sym":"#waitForGraphRendered"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"},{"pretty":"property front.EVENTS","sym":"front#EVENTS"}]],[[{"pretty":"UI_GRAPH_RENDERED","sym":"#UI_GRAPH_RENDERED"}],[{"pretty":"property UI_GRAPH_RENDERED","sym":"#UI_GRAPH_RENDERED"}]],[[],[{"pretty":"property info","sym":"#info"}]],[[],[{"pretty":"property Promise","sym":"#Promise"}]],[[],[{"pretty":"property on","sym":"#on"},{"pretty":"property front.on","sym":"front#on"}]],[[],[{"pretty":"property info","sym":"#info"}]],[[],[{"pretty":"property off","sym":"#off"},{"pretty":"property front.off","sym":"front#off"}]],[[],[{"pretty":"property onGraphRendered","sym":"#onGraphRendered"}]],[[],[{"pretty":"property checkVariableView","sym":"#checkVariableView"}]],[[],[{"pretty":"property info","sym":"#info"}]],[[{"pretty":"getScopeAtIndex","sym":"#getScopeAtIndex"}],[{"pretty":"property getScopeAtIndex","sym":"#getScopeAtIndex"},{"pretty":"property view.getScopeAtIndex","sym":"view#getScopeAtIndex"}]],[[],[{"pretty":"property Object","sym":"#Object"}]],[[],[{"pretty":"property keys","sym":"#keys"},{"pretty":"property Object.keys","sym":"Object#keys"}]],[[],[{"pretty":"property length","sym":"#length"},{"pretty":"property variables.length","sym":"variables#length"}]],[[],[{"pretty":"property ok","sym":"#ok"}]],[[],[{"pretty":"property isVisible","sym":"#isVisible"}]],[[],[{"pretty":"property window","sym":"#window"},{"pretty":"property scope.window","sym":"scope#window"}]],[[],[{"pretty":"property forEach","sym":"#forEach"},{"pretty":"property variables.forEach","sym":"variables#forEach"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property target","sym":"#target"},{"pretty":"property aVar.target","sym":"aVar#target"}]],[[],[{"pretty":"property querySelector","sym":"#querySelector"}]],[[],[{"pretty":"property getAttribute","sym":"#getAttribute"}]],[[],[{"pretty":"property target","sym":"#target"},{"pretty":"property aVar.target","sym":"aVar#target"}]],[[],[{"pretty":"property querySelector","sym":"#querySelector"}]],[[],[{"pretty":"property getAttribute","sym":"#getAttribute"}]],[[],[{"pretty":"property JSON","sym":"#JSON"}]],[[],[{"pretty":"property parse","sym":"#parse"},{"pretty":"property JSON.parse","sym":"JSON#parse"}]],[[],[{"pretty":"property ok","sym":"#ok"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property modifyVariableView","sym":"#modifyVariableView"}]],[[{"pretty":"getScopeAtIndex","sym":"#getScopeAtIndex"}],[{"pretty":"property getScopeAtIndex","sym":"#getScopeAtIndex"},{"pretty":"property view.getScopeAtIndex","sym":"view#getScopeAtIndex"}]],[[],[{"pretty":"property expand","sym":"#expand"},{"pretty":"property scope.expand","sym":"scope#expand"}]],[[],[{"pretty":"property Promise","sym":"#Promise"}]],[[],[{"pretty":"property off","sym":"#off"},{"pretty":"property win.off","sym":"win#off"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"},{"pretty":"property win.EVENTS","sym":"win#EVENTS"}]],[[],[{"pretty":"property UI_SET_PARAM_ERROR","sym":"#UI_SET_PARAM_ERROR"}]],[[],[{"pretty":"property onParamSetError","sym":"#onParamSetError"}]],[[],[{"pretty":"property off","sym":"#off"},{"pretty":"property win.off","sym":"win#off"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"},{"pretty":"property win.EVENTS","sym":"win#EVENTS"}]],[[{"pretty":"UI_SET_PARAM","sym":"#UI_SET_PARAM"}],[{"pretty":"property UI_SET_PARAM","sym":"#UI_SET_PARAM"}]],[[],[{"pretty":"property once","sym":"#once"},{"pretty":"property win.once","sym":"win#once"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"},{"pretty":"property win.EVENTS","sym":"win#EVENTS"}]],[[{"pretty":"UI_SET_PARAM","sym":"#UI_SET_PARAM"}],[{"pretty":"property UI_SET_PARAM","sym":"#UI_SET_PARAM"}]],[[],[{"pretty":"property once","sym":"#once"},{"pretty":"property win.once","sym":"win#once"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"},{"pretty":"property win.EVENTS","sym":"win#EVENTS"}]],[[],[{"pretty":"property UI_SET_PARAM_ERROR","sym":"#UI_SET_PARAM_ERROR"}]],[[],[{"pretty":"property focus","sym":"#focus"},{"pretty":"property win.focus","sym":"win#focus"}]],[[],[{"pretty":"property focus","sym":"#focus"},{"pretty":"property aVar.focus","sym":"aVar#focus"}]],[[],[{"pretty":"property EventUtils","sym":"#EventUtils"}]],[[],[{"pretty":"property sendKey","sym":"#sendKey"},{"pretty":"property EventUtils.sendKey","sym":"EventUtils#sendKey"}]],[[],[{"pretty":"property executeSoon","sym":"#executeSoon"}]],[[],[{"pretty":"property info","sym":"#info"}]],[[],[{"pretty":"property EventUtils","sym":"#EventUtils"}]],[[],[{"pretty":"property synthesizeKey","sym":"#synthesizeKey"},{"pretty":"property EventUtils.synthesizeKey","sym":"EventUtils#synthesizeKey"}]],[[],[{"pretty":"property EventUtils","sym":"#EventUtils"}]],[[],[{"pretty":"property sendKey","sym":"#sendKey"},{"pretty":"property EventUtils.sendKey","sym":"EventUtils#sendKey"}]],[[],[{"pretty":"property findGraphEdge","sym":"#findGraphEdge"}]],[[],[{"pretty":"property document","sym":"#document"},{"pretty":"property win.document","sym":"win#document"}]],[[],[{"pretty":"property querySelector","sym":"#querySelector"}]],[[],[{"pretty":"property findGraphNode","sym":"#findGraphNode"}]],[[],[{"pretty":"property document","sym":"#document"},{"pretty":"property win.document","sym":"win#document"}]],[[],[{"pretty":"property querySelector","sym":"#querySelector"}]],[[],[{"pretty":"property click","sym":"#click"}]],[[],[{"pretty":"property EventUtils","sym":"#EventUtils"}]],[[],[{"pretty":"property sendMouseEvent","sym":"#sendMouseEvent"},{"pretty":"property EventUtils.sendMouseEvent","sym":"EventUtils#sendMouseEvent"}]],[[],[{"pretty":"property type","sym":"#type"}]],[[],[{"pretty":"property mouseOver","sym":"#mouseOver"}]],[[],[{"pretty":"property EventUtils","sym":"#EventUtils"}]],[[],[{"pretty":"property sendMouseEvent","sym":"#sendMouseEvent"},{"pretty":"property EventUtils.sendMouseEvent","sym":"EventUtils#sendMouseEvent"}]],[[],[{"pretty":"property type","sym":"#type"}]],[[],[{"pretty":"property command","sym":"#command"}]],[[],[{"pretty":"property ownerDocument","sym":"#ownerDocument"},{"pretty":"property button.ownerDocument","sym":"button#ownerDocument"}]],[[],[{"pretty":"property createEvent","sym":"#createEvent"}]],[[],[{"pretty":"property initCommandEvent","sym":"#initCommandEvent"},{"pretty":"property ev.initCommandEvent","sym":"ev#initCommandEvent"}]],[[],[{"pretty":"property ownerDocument","sym":"#ownerDocument"},{"pretty":"property button.ownerDocument","sym":"button#ownerDocument"}]],[[],[{"pretty":"property defaultView","sym":"#defaultView"}]],[[],[{"pretty":"property dispatchEvent","sym":"#dispatchEvent"},{"pretty":"property button.dispatchEvent","sym":"button#dispatchEvent"}]],[[],[{"pretty":"property isVisible","sym":"#isVisible"}]],[[{"pretty":"element.getAttribute","sym":"element#getAttribute"}],[{"pretty":"property getAttribute","sym":"#getAttribute"},{"pretty":"property element.getAttribute","sym":"element#getAttribute"}]],[[],[{"pretty":"property clickGraphNode","sym":"#clickGraphNode"}]],[[],[{"pretty":"property once","sym":"#once"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"},{"pretty":"property panelWin.EVENTS","sym":"panelWin#EVENTS"}]],[[{"pretty":"UI_INSPECTOR_NODE_SET","sym":"#UI_INSPECTOR_NODE_SET"}],[{"pretty":"property UI_INSPECTOR_NODE_SET","sym":"#UI_INSPECTOR_NODE_SET"}]],[[],[{"pretty":"property once","sym":"#once"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"},{"pretty":"property panelWin.EVENTS","sym":"panelWin#EVENTS"}]],[[{"pretty":"UI_PROPERTIES_TAB_RENDERED","sym":"#UI_PROPERTIES_TAB_RENDERED"}],[{"pretty":"property UI_PROPERTIES_TAB_RENDERED","sym":"#UI_PROPERTIES_TAB_RENDERED"}]],[[],[{"pretty":"property once","sym":"#once"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"},{"pretty":"property panelWin.EVENTS","sym":"panelWin#EVENTS"}]],[[{"pretty":"UI_AUTOMATION_TAB_RENDERED","sym":"#UI_AUTOMATION_TAB_RENDERED"}],[{"pretty":"property UI_AUTOMATION_TAB_RENDERED","sym":"#UI_AUTOMATION_TAB_RENDERED"}]],[[],[{"pretty":"property push","sym":"#push"},{"pretty":"property promises.push","sym":"promises#push"}]],[[],[{"pretty":"property once","sym":"#once"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"},{"pretty":"property panelWin.EVENTS","sym":"panelWin#EVENTS"}]],[[{"pretty":"UI_INSPECTOR_TOGGLED","sym":"#UI_INSPECTOR_TOGGLED"}],[{"pretty":"property UI_INSPECTOR_TOGGLED","sym":"#UI_INSPECTOR_TOGGLED"}]],[[],[{"pretty":"property tagName","sym":"#tagName"},{"pretty":"property el.tagName","sym":"el#tagName"}]],[[{"pretty":"findGraphNode","sym":"#findGraphNode"}],[{"pretty":"property findGraphNode","sym":"#findGraphNode"}]],[[],[{"pretty":"property click","sym":"#click"}]],[[],[{"pretty":"property Promise","sym":"#Promise"}]],[[],[{"pretty":"property all","sym":"#all"},{"pretty":"property Promise.all","sym":"Promise#all"}]],[[],[{"pretty":"property getGripValue","sym":"#getGripValue"}]],[[],[{"pretty":"property indexOf","sym":"#indexOf"}]],[[],[{"pretty":"property type","sym":"#type"},{"pretty":"property value.type","sym":"value#type"}]],[[],[{"pretty":"property undefined","sym":"#undefined"}]],[[],[{"pretty":"property Infinity","sym":"#Infinity"}]],[[],[{"pretty":"property Infinity","sym":"#Infinity"}]],[[],[{"pretty":"property NaN","sym":"#NaN"}]],[[],[{"pretty":"property countGraphObjects","sym":"#countGraphObjects"}]],[[],[{"pretty":"property nodes","sym":"#nodes"}]],[[],[{"pretty":"property document","sym":"#document"},{"pretty":"property win.document","sym":"win#document"}]],[[],[{"pretty":"property querySelectorAll","sym":"#querySelectorAll"}]],[[],[{"pretty":"property length","sym":"#length"}]],[[],[{"pretty":"property edges","sym":"#edges"}]],[[],[{"pretty":"property document","sym":"#document"},{"pretty":"property win.document","sym":"win#document"}]],[[],[{"pretty":"property querySelectorAll","sym":"#querySelectorAll"}]],[[],[{"pretty":"property length","sym":"#length"}]],[[],[{"pretty":"property forceNodeCollection","sym":"#forceNodeCollection"}]],[[],[{"pretty":"property ContentTask","sym":"#ContentTask"}]],[[{"pretty":"ContentTask.spawn","sym":"ContentTask#spawn"}],[{"pretty":"property spawn","sym":"#spawn"},{"pretty":"property ContentTask.spawn","sym":"ContentTask#spawn"}]],[[],[{"pretty":"property gBrowser","sym":"#gBrowser"}]],[[{"pretty":"gBrowser.selectedBrowser","sym":"gBrowser#selectedBrowser"}],[{"pretty":"property selectedBrowser","sym":"#selectedBrowser"},{"pretty":"property gBrowser.selectedBrowser","sym":"gBrowser#selectedBrowser"}]],[[],[{"pretty":"property content","sym":"#content"}]],[[],[{"pretty":"property wrappedJSObject","sym":"#wrappedJSObject"},{"pretty":"property content.wrappedJSObject","sym":"content#wrappedJSObject"}]],[[{"pretty":"keepAlive","sym":"#keepAlive"}],[{"pretty":"property keepAlive","sym":"#keepAlive"}]],[[],[{"pretty":"property Cu","sym":"#Cu"}]],[[],[{"pretty":"property forceGC","sym":"#forceGC"},{"pretty":"property Cu.forceGC","sym":"Cu#forceGC"}]],[[],[{"pretty":"property Cu","sym":"#Cu"}]],[[],[{"pretty":"property forceCC","sym":"#forceCC"},{"pretty":"property Cu.forceCC","sym":"Cu#forceCC"}]],[[],[{"pretty":"property Cu","sym":"#Cu"}]],[[],[{"pretty":"property forceGC","sym":"#forceGC"},{"pretty":"property Cu.forceGC","sym":"Cu#forceGC"}]],[[],[{"pretty":"property Cu","sym":"#Cu"}]],[[],[{"pretty":"property forceCC","sym":"#forceCC"},{"pretty":"property Cu.forceCC","sym":"Cu#forceCC"}]],[[],[{"pretty":"property checkAutomationValue","sym":"#checkAutomationValue"}]],[[],[{"pretty":"property getValueAt","sym":"#getValueAt"}]],[[],[{"pretty":"property ok","sym":"#ok"}]],[[],[{"pretty":"property Math","sym":"#Math"}]],[[],[{"pretty":"property abs","sym":"#abs"},{"pretty":"property Math.abs","sym":"Math#abs"}]],[[{"pretty":"values.length","sym":"values#length"}],[{"pretty":"property length","sym":"#length"},{"pretty":"property values.length","sym":"values#length"}]],[[],[{"pretty":"property delta","sym":"#delta"}]],[[],[{"pretty":"property value","sym":"#value"}]],[[],[{"pretty":"property delta","sym":"#delta"}]],[[],[{"pretty":"property value","sym":"#value"}]],[[],[{"pretty":"property value","sym":"#value"}]],[[{"pretty":"values.length","sym":"values#length"}],[{"pretty":"property length","sym":"#length"},{"pretty":"property values.length","sym":"values#length"}]],[[],[{"pretty":"property value","sym":"#value"}]],[[],[{"pretty":"property waitForInspectorRender","sym":"#waitForInspectorRender"}]],[[],[{"pretty":"property Promise","sym":"#Promise"}]],[[],[{"pretty":"property all","sym":"#all"},{"pretty":"property Promise.all","sym":"Promise#all"}]],[[],[{"pretty":"property once","sym":"#once"}]],[[{"pretty":"EVENTS.UI_PROPERTIES_TAB_RENDERED","sym":"EVENTS#UI_PROPERTIES_TAB_RENDERED"}],[{"pretty":"property UI_PROPERTIES_TAB_RENDERED","sym":"#UI_PROPERTIES_TAB_RENDERED"},{"pretty":"property EVENTS.UI_PROPERTIES_TAB_RENDERED","sym":"EVENTS#UI_PROPERTIES_TAB_RENDERED"}]],[[],[{"pretty":"property once","sym":"#once"}]],[[{"pretty":"EVENTS.UI_AUTOMATION_TAB_RENDERED","sym":"EVENTS#UI_AUTOMATION_TAB_RENDERED"}],[{"pretty":"property UI_AUTOMATION_TAB_RENDERED","sym":"#UI_AUTOMATION_TAB_RENDERED"},{"pretty":"property EVENTS.UI_AUTOMATION_TAB_RENDERED","sym":"EVENTS#UI_AUTOMATION_TAB_RENDERED"}]],[[],[{"pretty":"property nodeDefaultValues","sym":"#nodeDefaultValues"}]],[[{"pretty":"NODE_CONSTRUCTORS","sym":"#NODE_CONSTRUCTORS"}],[{"pretty":"property NODE_CONSTRUCTORS","sym":"#NODE_CONSTRUCTORS"}]],[[],[{"pretty":"property JSON","sym":"#JSON"}]],[[],[{"pretty":"property stringify","sym":"#stringify"},{"pretty":"property JSON.stringify","sym":"JSON#stringify"}]],[[{"pretty":"audioNodes","sym":"#audioNodes"}],[{"pretty":"property audioNodes","sym":"#audioNodes"}]],[[],[{"pretty":"property properties","sym":"#properties"}]],[[],[{"pretty":"property evalInDebuggee","sym":"#evalInDebuggee"}]],[[],[{"pretty":"property NODE_CONSTRUCTORS","sym":"#NODE_CONSTRUCTORS"}]]];</script>
    </div>
  <div id="foot" class="footer">
    This page was generated by Searchfox <span class="pretty-date" data-datetime="Wed, 13 Feb 2019 15:28:42 +0000"></span>.
  </div>
  <span id="data" data-root="/" data-search="/mozilla-central/search" data-tree="mozilla-central" data-path="devtools/client/webaudioeditor/test/head.js"></span>
  <script src="/static/js/libs/jquery-2.1.3.min.js"></script>
  <script src="/static/js/libs/nunjucks.min.js"></script>
  <script src="/static/js/utils.js"></script>
  <script src="/static/js/dxr.js"></script>
  <script src="/static/js/context-menu.js"></script>
  <script src="/static/js/filter.js"></script>
  <script src="/static/js/panel.js"></script>
  <script src="/static/js/code-highlighter.js"></script>
  <script src="/static/js/blame.js"></script>
  </body>
</html>
