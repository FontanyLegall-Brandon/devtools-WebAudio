<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8" />
  <link href="/static/icons/search.png" rel="shortcut icon">
  <title>properties.js - mozsearch</title>
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
<div class="breadcrumbs"><a href="/mozilla-central/source/">mozilla-central</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools">devtools</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client">client</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor">webaudioeditor</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/views">views</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/views/properties.js">properties.js</a></div>
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
  <a href="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/views/properties.js" title="Permalink" class="icon" data-update-link="true" data-link="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/views/properties.js">Permalink <span class="accel">Y</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/log/tip/devtools/client/webaudioeditor/views/properties.js" title="Log" class="icon">Log <span class="accel">L</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/raw-file/tip/devtools/client/webaudioeditor/views/properties.js" title="Raw" class="icon">Raw <span class="accel">R</span></a>
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
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#1" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l2" class="line-number">2
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#2" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l3" class="line-number">3
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#3" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l4" class="line-number">4
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#4" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l5" class="line-number">5
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#5" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l6" class="line-number">6
<div class="blame-strip c2" data-blame="ca7fb511f8c96a2e79398dfa51a8bac53f22ef49#%#6" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l7" class="line-number">7
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#8" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l8" class="line-number">8
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#17" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l9" class="line-number">9
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#18" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l10" class="line-number">10
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#19" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l11" class="line-number">11
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#20" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l12" class="line-number">12
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#21" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l13" class="line-number">13
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#22" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l14" class="line-number">14
<div class="blame-strip c2" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#14" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l15" class="line-number">15
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#24" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l16" class="line-number">16
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#25" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l17" class="line-number">17
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#26" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l18" class="line-number">18
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l19" class="line-number">19
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#28" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l20" class="line-number">20
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#29" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l21" class="line-number">21
<div class="blame-strip c2" data-blame="64db2267cf9899840b44ce4116c2dd94aa0c3d8e#browser/devtools/webaudioeditor/views/properties.js#22" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l22" class="line-number">22
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#39" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l23" class="line-number">23
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#40" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l24" class="line-number">24
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#41" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l25" class="line-number">25
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#42" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l26" class="line-number">26
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#26" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l27" class="line-number">27
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#56" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l28" class="line-number">28
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/properties.js#29" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l29" class="line-number">29
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#59" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l30" class="line-number">30
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/properties.js#31" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l31" class="line-number">31
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/properties.js#32" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l32" class="line-number">32
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#61" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l33" class="line-number">33
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#65" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l34" class="line-number">34
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#66" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l35" class="line-number">35
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#67" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l36" class="line-number">36
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#68" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l37" class="line-number">37
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#69" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l38" class="line-number">38
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#38" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l39" class="line-number">39
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/properties.js#40" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l40" class="line-number">40
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/properties.js#41" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l41" class="line-number">41
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#109" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l42" class="line-number">42
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#110" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l43" class="line-number">43
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#111" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l44" class="line-number">44
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#112" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l45" class="line-number">45
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#113" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l46" class="line-number">46
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#46" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l47" class="line-number">47
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#115" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l48" class="line-number">48
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/properties.js#49" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l49" class="line-number">49
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#121" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l50" class="line-number">50
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#122" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l51" class="line-number">51
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#123" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l52" class="line-number">52
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/properties.js#53" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l53" class="line-number">53
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/properties.js#54" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l54" class="line-number">54
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#125" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l55" class="line-number">55
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#55" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l56" class="line-number">56
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/properties.js#57" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l57" class="line-number">57
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/properties.js#58" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l58" class="line-number">58
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/properties.js#59" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l59" class="line-number">59
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/properties.js#60" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l60" class="line-number">60
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#130" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l61" class="line-number">61
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#131" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l62" class="line-number">62
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#132" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l63" class="line-number">63
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#133" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l64" class="line-number">64
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#134" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l65" class="line-number">65
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#135" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l66" class="line-number">66
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#66" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l67" class="line-number">67
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#67" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l68" class="line-number">68
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#68" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l69" class="line-number">69
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#139" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l70" class="line-number">70
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#140" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l71" class="line-number">71
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#71" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l72" class="line-number">72
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#72" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l73" class="line-number">73
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#143" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l74" class="line-number">74
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#144" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l75" class="line-number">75
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#145" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l76" class="line-number">76
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#146" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l77" class="line-number">77
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#147" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l78" class="line-number">78
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#148" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l79" class="line-number">79
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#79" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l80" class="line-number">80
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#150" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l81" class="line-number">81
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#151" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l82" class="line-number">82
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#152" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l83" class="line-number">83
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#83" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l84" class="line-number">84
<div class="blame-strip c2" data-blame="099a5f83a64d24b0852b5226e114e0304ff064bc#browser/devtools/webaudioeditor/views/inspector.js#154" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l85" class="line-number">85
<div class="blame-strip c2" data-blame="099a5f83a64d24b0852b5226e114e0304ff064bc#browser/devtools/webaudioeditor/views/inspector.js#155" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l86" class="line-number">86
<div class="blame-strip c2" data-blame="099a5f83a64d24b0852b5226e114e0304ff064bc#browser/devtools/webaudioeditor/views/inspector.js#156" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l87" class="line-number">87
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#154" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l88" class="line-number">88
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#155" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l89" class="line-number">89
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#156" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l90" class="line-number">90
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#157" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l91" class="line-number">91
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#158" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l92" class="line-number">92
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#92" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l93" class="line-number">93
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#160" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l94" class="line-number">94
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/properties.js#95" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l95" class="line-number">95
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/properties.js#96" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l96" class="line-number">96
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/properties.js#97" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l97" class="line-number">97
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/properties.js#98" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l98" class="line-number">98
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#98" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l99" class="line-number">99
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#99" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l100" class="line-number">100
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#100" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l101" class="line-number">101
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#164" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l102" class="line-number">102
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#165" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l103" class="line-number">103
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#166" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l104" class="line-number">104
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#167" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l105" class="line-number">105
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#168" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l106" class="line-number">106
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#169" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l107" class="line-number">107
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#170" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l108" class="line-number">108
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#171" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l109" class="line-number">109
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#172" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l110" class="line-number">110
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#173" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l111" class="line-number">111
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#111" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l112" class="line-number">112
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#175" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l113" class="line-number">113
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#176" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l114" class="line-number">114
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#177" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l115" class="line-number">115
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#178" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l116" class="line-number">116
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#179" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l117" class="line-number">117
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#180" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l118" class="line-number">118
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#181" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l119" class="line-number">119
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#182" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l120" class="line-number">120
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/properties.js#121" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l121" class="line-number">121
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/properties.js#122" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l122" class="line-number">122
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#122" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l123" class="line-number">123
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/properties.js#124" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l124" class="line-number">124
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/properties.js#125" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l125" class="line-number">125
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/properties.js#126" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l126" class="line-number">126
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/properties.js#127" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l127" class="line-number">127
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#183" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l128" class="line-number">128
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#184" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l129" class="line-number">129
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#129" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l130" class="line-number">130
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#130" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l131" class="line-number">131
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#131" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l132" class="line-number">132
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#132" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l133" class="line-number">133
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#189" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l134" class="line-number">134
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#190" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l135" class="line-number">135
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#191" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l136" class="line-number">136
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#192" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l137" class="line-number">137
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#193" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l138" class="line-number">138
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#194" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l139" class="line-number">139
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#195" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l140" class="line-number">140
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#140" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l141" class="line-number">141
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#197" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l142" class="line-number">142
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#198" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l143" class="line-number">143
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#199" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l144" class="line-number">144
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#200" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l145" class="line-number">145
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#201" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l146" class="line-number">146
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#146" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l147" class="line-number">147
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#147" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l148" class="line-number">148
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#205" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l149" class="line-number">149
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#206" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l150" class="line-number">150
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#207" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l151" class="line-number">151
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#208" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l152" class="line-number">152
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#209" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l153" class="line-number">153
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#210" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l154" class="line-number">154
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#211" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l155" class="line-number">155
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#212" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l156" class="line-number">156
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#213" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l157" class="line-number">157
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#214" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l158" class="line-number">158
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#215" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l159" class="line-number">159
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#216" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l160" class="line-number">160
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#217" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l161" class="line-number">161
<div class="blame-strip c2" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#161" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l162" class="line-number">162
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#240" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
      </td>
      <td class="code">
<pre><code id="line-1" aria-labelledby="1"><span class="syn_comment" >/* This Source Code Form is subject to the terms of the Mozilla Public</span>
</code><code id="line-2" aria-labelledby="2"><span class="syn_comment" > * License, v. 2.0. If a copy of the MPL was not distributed with this file,</span>
</code><code id="line-3" aria-labelledby="3"><span class="syn_comment" > * You can obtain one at <a href="http://mozilla.org/MPL/2.0/">http://mozilla.org/MPL/2.0/</a>. */</span>
</code><code id="line-4" aria-labelledby="4"><span class="syn_string" >"use strict"</span>;
</code><code id="line-5" aria-labelledby="5">
</code><code id="line-6" aria-labelledby="6"><span class="syn_reserved" >const</span> { <span class="syn_def" data-symbols="#VariablesView" data-i="0" >VariablesView</span> } = <span data-symbols="#require" data-i="1" >require</span>(<span class="syn_string" >"<a href="resource://devtools/client/shared/widgets/VariablesView.jsm">resource://devtools/client/shared/widgets/VariablesView.jsm</a>"</span>);
</code><code id="line-7" aria-labelledby="7">
</code><code id="line-8" aria-labelledby="8"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#GENERIC_VARIABLES_VIEW_SETTINGS" data-i="2" >GENERIC_VARIABLES_VIEW_SETTINGS</span> = {
</code><code id="line-9" aria-labelledby="9">  <span class="syn_def syn_def" data-symbols="#searchEnabled,GENERIC_VARIABLES_VIEW_SETTINGS#searchEnabled" data-i="3" >searchEnabled</span>: <span class="syn_reserved" >false</span>,
</code><code id="line-10" aria-labelledby="10">  <span class="syn_def syn_def" data-symbols="#editableValueTooltip,GENERIC_VARIABLES_VIEW_SETTINGS#editableValueTooltip" data-i="4" >editableValueTooltip</span>: <span class="syn_string" >""</span>,
</code><code id="line-11" aria-labelledby="11">  <span class="syn_def syn_def" data-symbols="#editableNameTooltip,GENERIC_VARIABLES_VIEW_SETTINGS#editableNameTooltip" data-i="5" >editableNameTooltip</span>: <span class="syn_string" >""</span>,
</code><code id="line-12" aria-labelledby="12">  <span class="syn_def syn_def" data-symbols="#preventDisableOnChange,GENERIC_VARIABLES_VIEW_SETTINGS#preventDisableOnChange" data-i="6" >preventDisableOnChange</span>: <span class="syn_reserved" >true</span>,
</code><code id="line-13" aria-labelledby="13">  <span class="syn_def syn_def" data-symbols="#preventDescriptorModifiers,GENERIC_VARIABLES_VIEW_SETTINGS#preventDescriptorModifiers" data-i="7" >preventDescriptorModifiers</span>: <span class="syn_reserved" >false</span>,
</code><code id="line-14" aria-labelledby="14">  <span class="syn_def syn_def" data-symbols="#eval,GENERIC_VARIABLES_VIEW_SETTINGS#eval" data-i="8" >eval</span>: () => {},
</code><code id="line-15" aria-labelledby="15">};
</code><code id="line-16" aria-labelledby="16">
</code><code id="line-17" aria-labelledby="17"><span class="syn_comment" >/**</span>
</code><code id="line-18" aria-labelledby="18"><span class="syn_comment" > * Functions handling the audio node inspector UI.</span>
</code><code id="line-19" aria-labelledby="19"><span class="syn_comment" > */</span>
</code><code id="line-20" aria-labelledby="20">
</code><code id="line-21" aria-labelledby="21"><span class="syn_reserved" >var</span> <span class="syn_def" data-symbols="#PropertiesView" data-i="9" >PropertiesView</span> = {
</code><code id="line-22" aria-labelledby="22">
</code><code id="line-23" aria-labelledby="23">  <span class="syn_comment" >/**</span>
</code><code id="line-24" aria-labelledby="24"><span class="syn_comment" >   * Initialization function called when the tool starts up.</span>
</code><code id="line-25" aria-labelledby="25"><span class="syn_comment" >   */</span>
</code><code id="line-26" aria-labelledby="26">  <span class="syn_def syn_def" data-symbols="#initialize,PropertiesView#initialize" data-i="10" >initialize</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-27" aria-labelledby="27">    <span class="syn_reserved" >this</span>.<span data-symbols="#_onEval,PropertiesView#_onEval" data-i="11" >_onEval</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_onEval,_onEval#_onEval" data-i="12" >_onEval</span>.<span data-symbols="#bind" data-i="13" >bind</span>(<span class="syn_reserved" >this</span>);
</code><code id="line-28" aria-labelledby="28">    <span class="syn_reserved" >this</span>.<span data-symbols="#_onNodeSet,PropertiesView#_onNodeSet" data-i="14" >_onNodeSet</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_onNodeSet,_onNodeSet#_onNodeSet" data-i="15" >_onNodeSet</span>.<span data-symbols="#bind" data-i="16" >bind</span>(<span class="syn_reserved" >this</span>);
</code><code id="line-29" aria-labelledby="29">
</code><code id="line-30" aria-labelledby="30">    <span data-symbols="#window" data-i="17" >window</span>.<span data-symbols="#on,window#on" data-i="18" >on</span>(<span data-symbols="#EVENTS" data-i="19" >EVENTS</span>.<span data-symbols="#UI_INSPECTOR_NODE_SET,EVENTS#UI_INSPECTOR_NODE_SET" data-i="20" >UI_INSPECTOR_NODE_SET</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onNodeSet,PropertiesView#_onNodeSet" data-i="21" >_onNodeSet</span>);
</code><code id="line-31" aria-labelledby="31">    <span class="syn_reserved" >this</span>.<span data-symbols="#_propsView,PropertiesView#_propsView" data-i="22" >_propsView</span> = <span class="syn_reserved" >new</span> <span data-symbols="#VariablesView" data-i="23" >VariablesView</span>($(<span class="syn_string" >"#properties-content"</span>), <span data-symbols="#GENERIC_VARIABLES_VIEW_SETTINGS" data-i="24" >GENERIC_VARIABLES_VIEW_SETTINGS</span>);
</code><code id="line-32" aria-labelledby="32">    <span class="syn_reserved" >this</span>.<span data-symbols="#_propsView,PropertiesView#_propsView" data-i="25" >_propsView</span>.<span data-symbols="#eval" data-i="26" >eval</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_onEval,PropertiesView#_onEval" data-i="27" >_onEval</span>;
</code><code id="line-33" aria-labelledby="33">  },
</code><code id="line-34" aria-labelledby="34">
</code><code id="line-35" aria-labelledby="35">  <span class="syn_comment" >/**</span>
</code><code id="line-36" aria-labelledby="36"><span class="syn_comment" >   * Destruction function called when the tool cleans up.</span>
</code><code id="line-37" aria-labelledby="37"><span class="syn_comment" >   */</span>
</code><code id="line-38" aria-labelledby="38">  <span class="syn_def syn_def" data-symbols="#destroy,PropertiesView#destroy" data-i="28" >destroy</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-39" aria-labelledby="39">    <span data-symbols="#window" data-i="29" >window</span>.<span data-symbols="#off,window#off" data-i="30" >off</span>(<span data-symbols="#EVENTS" data-i="31" >EVENTS</span>.<span data-symbols="#UI_INSPECTOR_NODE_SET,EVENTS#UI_INSPECTOR_NODE_SET" data-i="32" >UI_INSPECTOR_NODE_SET</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onNodeSet,PropertiesView#_onNodeSet" data-i="33" >_onNodeSet</span>);
</code><code id="line-40" aria-labelledby="40">    <span class="syn_reserved" >this</span>.<span data-symbols="#_propsView,PropertiesView#_propsView" data-i="34" >_propsView</span> = <span class="syn_reserved" >null</span>;
</code><code id="line-41" aria-labelledby="41">  },
</code><code id="line-42" aria-labelledby="42">
</code><code id="line-43" aria-labelledby="43">  <span class="syn_comment" >/**</span>
</code><code id="line-44" aria-labelledby="44"><span class="syn_comment" >   * Empties out the props view.</span>
</code><code id="line-45" aria-labelledby="45"><span class="syn_comment" >   */</span>
</code><code id="line-46" aria-labelledby="46">  <span class="syn_def syn_def" data-symbols="#resetUI,PropertiesView#resetUI" data-i="35" >resetUI</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-47" aria-labelledby="47">    <span class="syn_reserved" >this</span>.<span data-symbols="#_propsView,PropertiesView#_propsView" data-i="36" >_propsView</span>.<span data-symbols="#empty" data-i="37" >empty</span>();
</code><code id="line-48" aria-labelledby="48">    <span class="syn_reserved" >this</span>.<span data-symbols="#_currentNode,PropertiesView#_currentNode" data-i="38" >_currentNode</span> = <span class="syn_reserved" >null</span>;
</code><code id="line-49" aria-labelledby="49">  },
</code><code id="line-50" aria-labelledby="50">
</code><code id="line-51" aria-labelledby="51">  <span class="syn_comment" >/**</span>
</code><code id="line-52" aria-labelledby="52"><span class="syn_comment" >   * Internally sets the current audio node and rebuilds appropriate</span>
</code><code id="line-53" aria-labelledby="53"><span class="syn_comment" >   * views.</span>
</code><code id="line-54" aria-labelledby="54"><span class="syn_comment" >   */</span>
</code><code id="line-55" aria-labelledby="55">  <span class="syn_def syn_def" data-symbols="#_setAudioNode,PropertiesView#_setAudioNode" data-i="39" >_setAudioNode</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7382-0" >node</span>) {
</code><code id="line-56" aria-labelledby="56">    <span class="syn_reserved" >this</span>.<span data-symbols="#_currentNode,PropertiesView#_currentNode" data-i="40" >_currentNode</span> = <span data-symbols="7382-0" >node</span>;
</code><code id="line-57" aria-labelledby="57">    <span class="syn_reserved" >if</span> (<span class="syn_reserved" >this</span>.<span data-symbols="#_currentNode,PropertiesView#_currentNode" data-i="41" >_currentNode</span>) {
</code><code id="line-58" aria-labelledby="58">      <span class="syn_reserved" >this</span>.<span data-symbols="#_buildPropertiesView,PropertiesView#_buildPropertiesView" data-i="42" >_buildPropertiesView</span>();
</code><code id="line-59" aria-labelledby="59">    }
</code><code id="line-60" aria-labelledby="60">  },
</code><code id="line-61" aria-labelledby="61">
</code><code id="line-62" aria-labelledby="62">  <span class="syn_comment" >/**</span>
</code><code id="line-63" aria-labelledby="63"><span class="syn_comment" >   * Reconstructs the `Properties` tab in the inspector</span>
</code><code id="line-64" aria-labelledby="64"><span class="syn_comment" >   * with the `this._currentNode` as it's source.</span>
</code><code id="line-65" aria-labelledby="65"><span class="syn_comment" >   */</span>
</code><code id="line-66" aria-labelledby="66">  async <span class="syn_def syn_def" data-symbols="#_buildPropertiesView,PropertiesView#_buildPropertiesView" data-i="43" >_buildPropertiesView</span>() {
</code><code id="line-67" aria-labelledby="67">    <span class="syn_reserved" >const</span> <span data-symbols="7382-1" >propsView</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_propsView,PropertiesView#_propsView" data-i="44" >_propsView</span>;
</code><code id="line-68" aria-labelledby="68">    <span class="syn_reserved" >const</span> <span data-symbols="7382-2" >node</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_currentNode,PropertiesView#_currentNode" data-i="45" >_currentNode</span>;
</code><code id="line-69" aria-labelledby="69">    <span data-symbols="7382-1" >propsView</span>.<span data-symbols="#empty,propsView#empty" data-i="46" >empty</span>();
</code><code id="line-70" aria-labelledby="70">
</code><code id="line-71" aria-labelledby="71">    <span class="syn_reserved" >const</span> <span data-symbols="7382-3" >audioParamsScope</span> = <span data-symbols="7382-1" >propsView</span>.<span data-symbols="#addScope,propsView#addScope" data-i="47" >addScope</span>(<span class="syn_string" >"AudioParams"</span>);
</code><code id="line-72" aria-labelledby="72">    <span class="syn_reserved" >const</span> <span data-symbols="7382-4" >props</span> = await <span data-symbols="7382-2" >node</span>.<span data-symbols="#getParams,node#getParams" data-i="48" >getParams</span>();
</code><code id="line-73" aria-labelledby="73">
</code><code id="line-74" aria-labelledby="74">    <span class="syn_comment" >// Disable AudioParams VariableView expansion</span>
</code><code id="line-75" aria-labelledby="75">    <span class="syn_comment" >// when there are no props i.e. AudioDestinationNode</span>
</code><code id="line-76" aria-labelledby="76">    <span class="syn_reserved" >this</span>.<span data-symbols="#_togglePropertiesView,PropertiesView#_togglePropertiesView" data-i="49" >_togglePropertiesView</span>(!!<span data-symbols="7382-4" >props</span>.<span data-symbols="#length,props#length" data-i="50" >length</span>);
</code><code id="line-77" aria-labelledby="77">
</code><code id="line-78" aria-labelledby="78">    <span data-symbols="7382-4" >props</span>.<span data-symbols="#forEach,props#forEach" data-i="51" >forEach</span>(({ <span data-symbols="7382-5" >param</span>, <span data-symbols="7382-6" >value</span>, <span data-symbols="7382-7" >flags</span> }) => {
</code><code id="line-79" aria-labelledby="79">      <span class="syn_reserved" >const</span> <span data-symbols="7382-8" >descriptor</span> = {
</code><code id="line-80" aria-labelledby="80">        <span class="syn_def syn_def" data-symbols="#value,descriptor#value" data-i="52" >value</span>: <span data-symbols="7382-6" >value</span>,
</code><code id="line-81" aria-labelledby="81">        <span class="syn_def syn_def" data-symbols="#writable,descriptor#writable" data-i="53" >writable</span>: !<span data-symbols="7382-7" >flags</span> || !<span data-symbols="7382-7" >flags</span>.<span data-symbols="#readonly,flags#readonly" data-i="54" >readonly</span>,
</code><code id="line-82" aria-labelledby="82">      };
</code><code id="line-83" aria-labelledby="83">      <span class="syn_reserved" >const</span> <span data-symbols="7382-9" >item</span> = <span data-symbols="7382-3" >audioParamsScope</span>.<span data-symbols="#addItem,audioParamsScope#addItem" data-i="55" >addItem</span>(<span data-symbols="7382-5" >param</span>, <span data-symbols="7382-8" >descriptor</span>);
</code><code id="line-84" aria-labelledby="84">
</code><code id="line-85" aria-labelledby="85">      <span class="syn_comment" >// No items should currently display a dropdown</span>
</code><code id="line-86" aria-labelledby="86">      <span data-symbols="7382-9" >item</span>.<span data-symbols="#twisty,item#twisty" data-i="56" >twisty</span> = <span class="syn_reserved" >false</span>;
</code><code id="line-87" aria-labelledby="87">    });
</code><code id="line-88" aria-labelledby="88">
</code><code id="line-89" aria-labelledby="89">    <span data-symbols="7382-3" >audioParamsScope</span>.<span data-symbols="#expanded,audioParamsScope#expanded" data-i="57" >expanded</span> = <span class="syn_reserved" >true</span>;
</code><code id="line-90" aria-labelledby="90">
</code><code id="line-91" aria-labelledby="91">    <span data-symbols="#window" data-i="58" >window</span>.<span data-symbols="#emit,window#emit" data-i="59" >emit</span>(<span data-symbols="#EVENTS" data-i="60" >EVENTS</span>.<span data-symbols="#UI_PROPERTIES_TAB_RENDERED,EVENTS#UI_PROPERTIES_TAB_RENDERED" data-i="61" >UI_PROPERTIES_TAB_RENDERED</span>, <span data-symbols="7382-2" >node</span>.<span data-symbols="#id,node#id" data-i="62" >id</span>);
</code><code id="line-92" aria-labelledby="92">  },
</code><code id="line-93" aria-labelledby="93">
</code><code id="line-94" aria-labelledby="94">  <span class="syn_comment" >/**</span>
</code><code id="line-95" aria-labelledby="95"><span class="syn_comment" >   * Toggles the display of the "empty" properties view when</span>
</code><code id="line-96" aria-labelledby="96"><span class="syn_comment" >   * node has no properties to display.</span>
</code><code id="line-97" aria-labelledby="97"><span class="syn_comment" >   */</span>
</code><code id="line-98" aria-labelledby="98">  <span class="syn_def syn_def" data-symbols="#_togglePropertiesView,PropertiesView#_togglePropertiesView" data-i="63" >_togglePropertiesView</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7382-10" >show</span>) {
</code><code id="line-99" aria-labelledby="99">    <span class="syn_reserved" >const</span> <span data-symbols="7382-11" >propsView</span> = $(<span class="syn_string" >"#properties-content"</span>);
</code><code id="line-100" aria-labelledby="100">    <span class="syn_reserved" >const</span> <span data-symbols="7382-12" >emptyView</span> = $(<span class="syn_string" >"#properties-empty"</span>);
</code><code id="line-101" aria-labelledby="101">    (<span data-symbols="7382-10" >show</span> ? <span data-symbols="7382-11" >propsView</span> : <span data-symbols="7382-12" >emptyView</span>).<span data-symbols="#removeAttribute" data-i="64" >removeAttribute</span>(<span class="syn_string" >"hidden"</span>);
</code><code id="line-102" aria-labelledby="102">    (<span data-symbols="7382-10" >show</span> ? <span data-symbols="7382-12" >emptyView</span> : <span data-symbols="7382-11" >propsView</span>).<span data-symbols="#setAttribute" data-i="65" >setAttribute</span>(<span class="syn_string" >"hidden"</span>, <span class="syn_string" >"true"</span>);
</code><code id="line-103" aria-labelledby="103">  },
</code><code id="line-104" aria-labelledby="104">
</code><code id="line-105" aria-labelledby="105">  <span class="syn_comment" >/**</span>
</code><code id="line-106" aria-labelledby="106"><span class="syn_comment" >   * Returns the scope for AudioParams in the</span>
</code><code id="line-107" aria-labelledby="107"><span class="syn_comment" >   * VariablesView.</span>
</code><code id="line-108" aria-labelledby="108"><span class="syn_comment" >   *</span>
</code><code id="line-109" aria-labelledby="109"><span class="syn_comment" >   * @return Scope</span>
</code><code id="line-110" aria-labelledby="110"><span class="syn_comment" >   */</span>
</code><code id="line-111" aria-labelledby="111">  <span class="syn_def syn_def" data-symbols="#_getAudioPropertiesScope,PropertiesView#_getAudioPropertiesScope" data-i="66" >_getAudioPropertiesScope</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-112" aria-labelledby="112">    <span class="syn_reserved" >return</span> <span class="syn_reserved" >this</span>.<span data-symbols="#_propsView,PropertiesView#_propsView" data-i="67" >_propsView</span>.<span data-symbols="#getScopeAtIndex" data-i="68" >getScopeAtIndex</span>(0);
</code><code id="line-113" aria-labelledby="113">  },
</code><code id="line-114" aria-labelledby="114">
</code><code id="line-115" aria-labelledby="115">  <span class="syn_comment" >/**</span>
</code><code id="line-116" aria-labelledby="116"><span class="syn_comment" >   * Event handlers</span>
</code><code id="line-117" aria-labelledby="117"><span class="syn_comment" >   */</span>
</code><code id="line-118" aria-labelledby="118">
</code><code id="line-119" aria-labelledby="119">  <span class="syn_comment" >/**</span>
</code><code id="line-120" aria-labelledby="120"><span class="syn_comment" >   * Called when the inspector view determines a node is selected.</span>
</code><code id="line-121" aria-labelledby="121"><span class="syn_comment" >   */</span>
</code><code id="line-122" aria-labelledby="122">  <span class="syn_def syn_def" data-symbols="#_onNodeSet,PropertiesView#_onNodeSet" data-i="69" >_onNodeSet</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7382-13" >id</span>) {
</code><code id="line-123" aria-labelledby="123">    <span class="syn_reserved" >this</span>.<span data-symbols="#_setAudioNode,PropertiesView#_setAudioNode" data-i="70" >_setAudioNode</span>(<span data-symbols="#gAudioNodes" data-i="71" >gAudioNodes</span>.<span class="syn_reserved" >get</span>(<span data-symbols="7382-13" >id</span>));
</code><code id="line-124" aria-labelledby="124">  },
</code><code id="line-125" aria-labelledby="125">
</code><code id="line-126" aria-labelledby="126">  <span class="syn_comment" >/**</span>
</code><code id="line-127" aria-labelledby="127"><span class="syn_comment" >   * Executed when an audio prop is changed in the UI.</span>
</code><code id="line-128" aria-labelledby="128"><span class="syn_comment" >   */</span>
</code><code id="line-129" aria-labelledby="129">  async <span class="syn_def syn_def" data-symbols="#_onEval,PropertiesView#_onEval" data-i="72" >_onEval</span>(<span data-symbols="7382-14" >variable</span>, <span data-symbols="7382-15" >value</span>) {
</code><code id="line-130" aria-labelledby="130">    <span class="syn_reserved" >const</span> <span data-symbols="7382-16" >ownerScope</span> = <span data-symbols="7382-14" >variable</span>.<span data-symbols="#ownerView,variable#ownerView" data-i="73" >ownerView</span>;
</code><code id="line-131" aria-labelledby="131">    <span class="syn_reserved" >const</span> <span data-symbols="7382-17" >node</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_currentNode,PropertiesView#_currentNode" data-i="74" >_currentNode</span>;
</code><code id="line-132" aria-labelledby="132">    <span class="syn_reserved" >const</span> <span data-symbols="7382-18" >propName</span> = <span data-symbols="7382-14" >variable</span>.<span data-symbols="#name,variable#name" data-i="75" >name</span>;
</code><code id="line-133" aria-labelledby="133">    <span class="syn_reserved" >let</span> <span data-symbols="7382-19" >error</span>;
</code><code id="line-134" aria-labelledby="134">
</code><code id="line-135" aria-labelledby="135">    <span class="syn_reserved" >if</span> (!<span data-symbols="7382-14" >variable</span>.<span data-symbols="#_initialDescriptor,variable#_initialDescriptor" data-i="76" >_initialDescriptor</span>.<span data-symbols="#writable" data-i="77" >writable</span>) {
</code><code id="line-136" aria-labelledby="136">      <span data-symbols="7382-19" >error</span> = <span class="syn_reserved" >new</span> <span data-symbols="#Error" data-i="78" >Error</span>(<span class="syn_string" >"Variable "</span> + <span data-symbols="7382-18" >propName</span> + <span class="syn_string" >" is not writable."</span>);
</code><code id="line-137" aria-labelledby="137">    } <span class="syn_reserved" >else</span> {
</code><code id="line-138" aria-labelledby="138">      <span class="syn_comment" >// Cast value to proper type</span>
</code><code id="line-139" aria-labelledby="139">      <span class="syn_reserved" >try</span> {
</code><code id="line-140" aria-labelledby="140">        <span class="syn_reserved" >const</span> <span data-symbols="7382-20" >number</span> = <span data-symbols="#parseFloat" data-i="79" >parseFloat</span>(<span data-symbols="7382-15" >value</span>);
</code><code id="line-141" aria-labelledby="141">        <span class="syn_reserved" >if</span> (!<span data-symbols="#isNaN" data-i="80" >isNaN</span>(<span data-symbols="7382-20" >number</span>)) {
</code><code id="line-142" aria-labelledby="142">          <span data-symbols="7382-15" >value</span> = <span data-symbols="7382-20" >number</span>;
</code><code id="line-143" aria-labelledby="143">        } <span class="syn_reserved" >else</span> {
</code><code id="line-144" aria-labelledby="144">          <span data-symbols="7382-15" >value</span> = <span data-symbols="#JSON" data-i="81" >JSON</span>.<span data-symbols="#parse,JSON#parse" data-i="82" >parse</span>(<span data-symbols="7382-15" >value</span>);
</code><code id="line-145" aria-labelledby="145">        }
</code><code id="line-146" aria-labelledby="146">        <span data-symbols="7382-19" >error</span> = await <span data-symbols="7382-17" >node</span>.<span data-symbols="#actor,node#actor" data-i="83" >actor</span>.<span data-symbols="#setParam" data-i="84" >setParam</span>(<span data-symbols="7382-18" >propName</span>, <span data-symbols="7382-15" >value</span>);
</code><code id="line-147" aria-labelledby="147">      } <span class="syn_reserved" >catch</span> (<span data-symbols="7382-21" >e</span>) {
</code><code id="line-148" aria-labelledby="148">        <span data-symbols="7382-19" >error</span> = <span data-symbols="7382-21" >e</span>;
</code><code id="line-149" aria-labelledby="149">      }
</code><code id="line-150" aria-labelledby="150">    }
</code><code id="line-151" aria-labelledby="151">
</code><code id="line-152" aria-labelledby="152">    <span class="syn_comment" >// TODO figure out how to handle and display set prop errors</span>
</code><code id="line-153" aria-labelledby="153">    <span class="syn_comment" >// and enable `test/brorwser_wa_properties-view-edit.js`</span>
</code><code id="line-154" aria-labelledby="154">    <span class="syn_comment" >// <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=994258">Bug 994258</a></span>
</code><code id="line-155" aria-labelledby="155">    <span class="syn_reserved" >if</span> (!<span data-symbols="7382-19" >error</span>) {
</code><code id="line-156" aria-labelledby="156">      <span data-symbols="7382-16" >ownerScope</span>.<span class="syn_reserved" >get</span>(<span data-symbols="7382-18" >propName</span>).<span data-symbols="#setGrip" data-i="85" >setGrip</span>(<span data-symbols="7382-15" >value</span>);
</code><code id="line-157" aria-labelledby="157">      <span data-symbols="#window" data-i="86" >window</span>.<span data-symbols="#emit,window#emit" data-i="87" >emit</span>(<span data-symbols="#EVENTS" data-i="88" >EVENTS</span>.<span data-symbols="#UI_SET_PARAM,EVENTS#UI_SET_PARAM" data-i="89" >UI_SET_PARAM</span>, <span data-symbols="7382-17" >node</span>.<span data-symbols="#id,node#id" data-i="90" >id</span>, <span data-symbols="7382-18" >propName</span>, <span data-symbols="7382-15" >value</span>);
</code><code id="line-158" aria-labelledby="158">    } <span class="syn_reserved" >else</span> {
</code><code id="line-159" aria-labelledby="159">      <span data-symbols="#window" data-i="91" >window</span>.<span data-symbols="#emit,window#emit" data-i="92" >emit</span>(<span data-symbols="#EVENTS" data-i="93" >EVENTS</span>.<span data-symbols="#UI_SET_PARAM_ERROR,EVENTS#UI_SET_PARAM_ERROR" data-i="94" >UI_SET_PARAM_ERROR</span>, <span data-symbols="7382-17" >node</span>.<span data-symbols="#id,node#id" data-i="95" >id</span>, <span data-symbols="7382-18" >propName</span>, <span data-symbols="7382-15" >value</span>);
</code><code id="line-160" aria-labelledby="160">    }
</code><code id="line-161" aria-labelledby="161">  },
</code><code id="line-162" aria-labelledby="162">};
</code></pre>      </td>
    </tr>
  </tbody>
</table>
<script>var ANALYSIS_DATA = [[[],[{"pretty":"property VariablesView","sym":"#VariablesView"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property GENERIC_VARIABLES_VIEW_SETTINGS","sym":"#GENERIC_VARIABLES_VIEW_SETTINGS"}]],[[],[{"pretty":"property searchEnabled","sym":"#searchEnabled"},{"pretty":"property GENERIC_VARIABLES_VIEW_SETTINGS.searchEnabled","sym":"GENERIC_VARIABLES_VIEW_SETTINGS#searchEnabled"}]],[[],[{"pretty":"property editableValueTooltip","sym":"#editableValueTooltip"},{"pretty":"property GENERIC_VARIABLES_VIEW_SETTINGS.editableValueTooltip","sym":"GENERIC_VARIABLES_VIEW_SETTINGS#editableValueTooltip"}]],[[],[{"pretty":"property editableNameTooltip","sym":"#editableNameTooltip"},{"pretty":"property GENERIC_VARIABLES_VIEW_SETTINGS.editableNameTooltip","sym":"GENERIC_VARIABLES_VIEW_SETTINGS#editableNameTooltip"}]],[[],[{"pretty":"property preventDisableOnChange","sym":"#preventDisableOnChange"},{"pretty":"property GENERIC_VARIABLES_VIEW_SETTINGS.preventDisableOnChange","sym":"GENERIC_VARIABLES_VIEW_SETTINGS#preventDisableOnChange"}]],[[],[{"pretty":"property preventDescriptorModifiers","sym":"#preventDescriptorModifiers"},{"pretty":"property GENERIC_VARIABLES_VIEW_SETTINGS.preventDescriptorModifiers","sym":"GENERIC_VARIABLES_VIEW_SETTINGS#preventDescriptorModifiers"}]],[[],[{"pretty":"property eval","sym":"#eval"},{"pretty":"property GENERIC_VARIABLES_VIEW_SETTINGS.eval","sym":"GENERIC_VARIABLES_VIEW_SETTINGS#eval"}]],[[],[{"pretty":"property PropertiesView","sym":"#PropertiesView"}]],[[],[{"pretty":"property initialize","sym":"#initialize"},{"pretty":"property PropertiesView.initialize","sym":"PropertiesView#initialize"}]],[[{"pretty":"PropertiesView._onEval","sym":"PropertiesView#_onEval"}],[{"pretty":"property _onEval","sym":"#_onEval"},{"pretty":"property PropertiesView._onEval","sym":"PropertiesView#_onEval"}]],[[{"pretty":"_onEval","sym":"#_onEval"}],[{"pretty":"property _onEval","sym":"#_onEval"},{"pretty":"property _onEval._onEval","sym":"_onEval#_onEval"}]],[[],[{"pretty":"property bind","sym":"#bind"}]],[[{"pretty":"PropertiesView._onNodeSet","sym":"PropertiesView#_onNodeSet"}],[{"pretty":"property _onNodeSet","sym":"#_onNodeSet"},{"pretty":"property PropertiesView._onNodeSet","sym":"PropertiesView#_onNodeSet"}]],[[],[{"pretty":"property _onNodeSet","sym":"#_onNodeSet"},{"pretty":"property _onNodeSet._onNodeSet","sym":"_onNodeSet#_onNodeSet"}]],[[],[{"pretty":"property bind","sym":"#bind"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property on","sym":"#on"},{"pretty":"property window.on","sym":"window#on"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[{"pretty":"EVENTS.UI_INSPECTOR_NODE_SET","sym":"EVENTS#UI_INSPECTOR_NODE_SET"}],[{"pretty":"property UI_INSPECTOR_NODE_SET","sym":"#UI_INSPECTOR_NODE_SET"},{"pretty":"property EVENTS.UI_INSPECTOR_NODE_SET","sym":"EVENTS#UI_INSPECTOR_NODE_SET"}]],[[{"pretty":"PropertiesView._onNodeSet","sym":"PropertiesView#_onNodeSet"}],[{"pretty":"property _onNodeSet","sym":"#_onNodeSet"},{"pretty":"property PropertiesView._onNodeSet","sym":"PropertiesView#_onNodeSet"}]],[[],[{"pretty":"property _propsView","sym":"#_propsView"},{"pretty":"property PropertiesView._propsView","sym":"PropertiesView#_propsView"}]],[[],[{"pretty":"property VariablesView","sym":"#VariablesView"}]],[[],[{"pretty":"property GENERIC_VARIABLES_VIEW_SETTINGS","sym":"#GENERIC_VARIABLES_VIEW_SETTINGS"}]],[[],[{"pretty":"property _propsView","sym":"#_propsView"},{"pretty":"property PropertiesView._propsView","sym":"PropertiesView#_propsView"}]],[[],[{"pretty":"property eval","sym":"#eval"}]],[[{"pretty":"PropertiesView._onEval","sym":"PropertiesView#_onEval"}],[{"pretty":"property _onEval","sym":"#_onEval"},{"pretty":"property PropertiesView._onEval","sym":"PropertiesView#_onEval"}]],[[],[{"pretty":"property destroy","sym":"#destroy"},{"pretty":"property PropertiesView.destroy","sym":"PropertiesView#destroy"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property off","sym":"#off"},{"pretty":"property window.off","sym":"window#off"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[{"pretty":"EVENTS.UI_INSPECTOR_NODE_SET","sym":"EVENTS#UI_INSPECTOR_NODE_SET"}],[{"pretty":"property UI_INSPECTOR_NODE_SET","sym":"#UI_INSPECTOR_NODE_SET"},{"pretty":"property EVENTS.UI_INSPECTOR_NODE_SET","sym":"EVENTS#UI_INSPECTOR_NODE_SET"}]],[[{"pretty":"PropertiesView._onNodeSet","sym":"PropertiesView#_onNodeSet"}],[{"pretty":"property _onNodeSet","sym":"#_onNodeSet"},{"pretty":"property PropertiesView._onNodeSet","sym":"PropertiesView#_onNodeSet"}]],[[],[{"pretty":"property _propsView","sym":"#_propsView"},{"pretty":"property PropertiesView._propsView","sym":"PropertiesView#_propsView"}]],[[],[{"pretty":"property resetUI","sym":"#resetUI"},{"pretty":"property PropertiesView.resetUI","sym":"PropertiesView#resetUI"}]],[[],[{"pretty":"property _propsView","sym":"#_propsView"},{"pretty":"property PropertiesView._propsView","sym":"PropertiesView#_propsView"}]],[[],[{"pretty":"property empty","sym":"#empty"}]],[[],[{"pretty":"property _currentNode","sym":"#_currentNode"},{"pretty":"property PropertiesView._currentNode","sym":"PropertiesView#_currentNode"}]],[[],[{"pretty":"property _setAudioNode","sym":"#_setAudioNode"},{"pretty":"property PropertiesView._setAudioNode","sym":"PropertiesView#_setAudioNode"}]],[[],[{"pretty":"property _currentNode","sym":"#_currentNode"},{"pretty":"property PropertiesView._currentNode","sym":"PropertiesView#_currentNode"}]],[[],[{"pretty":"property _currentNode","sym":"#_currentNode"},{"pretty":"property PropertiesView._currentNode","sym":"PropertiesView#_currentNode"}]],[[{"pretty":"PropertiesView._buildPropertiesView","sym":"PropertiesView#_buildPropertiesView"}],[{"pretty":"property _buildPropertiesView","sym":"#_buildPropertiesView"},{"pretty":"property PropertiesView._buildPropertiesView","sym":"PropertiesView#_buildPropertiesView"}]],[[],[{"pretty":"property _buildPropertiesView","sym":"#_buildPropertiesView"},{"pretty":"property PropertiesView._buildPropertiesView","sym":"PropertiesView#_buildPropertiesView"}]],[[],[{"pretty":"property _propsView","sym":"#_propsView"},{"pretty":"property PropertiesView._propsView","sym":"PropertiesView#_propsView"}]],[[],[{"pretty":"property _currentNode","sym":"#_currentNode"},{"pretty":"property PropertiesView._currentNode","sym":"PropertiesView#_currentNode"}]],[[],[{"pretty":"property empty","sym":"#empty"},{"pretty":"property propsView.empty","sym":"propsView#empty"}]],[[{"pretty":"addScope","sym":"#addScope"}],[{"pretty":"property addScope","sym":"#addScope"},{"pretty":"property propsView.addScope","sym":"propsView#addScope"}]],[[],[{"pretty":"property getParams","sym":"#getParams"},{"pretty":"property node.getParams","sym":"node#getParams"}]],[[{"pretty":"PropertiesView._togglePropertiesView","sym":"PropertiesView#_togglePropertiesView"}],[{"pretty":"property _togglePropertiesView","sym":"#_togglePropertiesView"},{"pretty":"property PropertiesView._togglePropertiesView","sym":"PropertiesView#_togglePropertiesView"}]],[[],[{"pretty":"property length","sym":"#length"},{"pretty":"property props.length","sym":"props#length"}]],[[],[{"pretty":"property forEach","sym":"#forEach"},{"pretty":"property props.forEach","sym":"props#forEach"}]],[[],[{"pretty":"property value","sym":"#value"},{"pretty":"property descriptor.value","sym":"descriptor#value"}]],[[],[{"pretty":"property writable","sym":"#writable"},{"pretty":"property descriptor.writable","sym":"descriptor#writable"}]],[[],[{"pretty":"property readonly","sym":"#readonly"},{"pretty":"property flags.readonly","sym":"flags#readonly"}]],[[],[{"pretty":"property addItem","sym":"#addItem"},{"pretty":"property audioParamsScope.addItem","sym":"audioParamsScope#addItem"}]],[[],[{"pretty":"property twisty","sym":"#twisty"},{"pretty":"property item.twisty","sym":"item#twisty"}]],[[],[{"pretty":"property expanded","sym":"#expanded"},{"pretty":"property audioParamsScope.expanded","sym":"audioParamsScope#expanded"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property emit","sym":"#emit"},{"pretty":"property window.emit","sym":"window#emit"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[{"pretty":"EVENTS.UI_PROPERTIES_TAB_RENDERED","sym":"EVENTS#UI_PROPERTIES_TAB_RENDERED"}],[{"pretty":"property UI_PROPERTIES_TAB_RENDERED","sym":"#UI_PROPERTIES_TAB_RENDERED"},{"pretty":"property EVENTS.UI_PROPERTIES_TAB_RENDERED","sym":"EVENTS#UI_PROPERTIES_TAB_RENDERED"}]],[[],[{"pretty":"property id","sym":"#id"},{"pretty":"property node.id","sym":"node#id"}]],[[],[{"pretty":"property _togglePropertiesView","sym":"#_togglePropertiesView"},{"pretty":"property PropertiesView._togglePropertiesView","sym":"PropertiesView#_togglePropertiesView"}]],[[],[{"pretty":"property removeAttribute","sym":"#removeAttribute"}]],[[],[{"pretty":"property setAttribute","sym":"#setAttribute"}]],[[],[{"pretty":"property _getAudioPropertiesScope","sym":"#_getAudioPropertiesScope"},{"pretty":"property PropertiesView._getAudioPropertiesScope","sym":"PropertiesView#_getAudioPropertiesScope"}]],[[],[{"pretty":"property _propsView","sym":"#_propsView"},{"pretty":"property PropertiesView._propsView","sym":"PropertiesView#_propsView"}]],[[{"pretty":"getScopeAtIndex","sym":"#getScopeAtIndex"}],[{"pretty":"property getScopeAtIndex","sym":"#getScopeAtIndex"}]],[[],[{"pretty":"property _onNodeSet","sym":"#_onNodeSet"},{"pretty":"property PropertiesView._onNodeSet","sym":"PropertiesView#_onNodeSet"}]],[[{"pretty":"PropertiesView._setAudioNode","sym":"PropertiesView#_setAudioNode"}],[{"pretty":"property _setAudioNode","sym":"#_setAudioNode"},{"pretty":"property PropertiesView._setAudioNode","sym":"PropertiesView#_setAudioNode"}]],[[{"pretty":"gAudioNodes","sym":"#gAudioNodes"}],[{"pretty":"property gAudioNodes","sym":"#gAudioNodes"}]],[[],[{"pretty":"property _onEval","sym":"#_onEval"},{"pretty":"property PropertiesView._onEval","sym":"PropertiesView#_onEval"}]],[[],[{"pretty":"property ownerView","sym":"#ownerView"},{"pretty":"property variable.ownerView","sym":"variable#ownerView"}]],[[],[{"pretty":"property _currentNode","sym":"#_currentNode"},{"pretty":"property PropertiesView._currentNode","sym":"PropertiesView#_currentNode"}]],[[],[{"pretty":"property name","sym":"#name"},{"pretty":"property variable.name","sym":"variable#name"}]],[[{"pretty":"_initialDescriptor","sym":"#_initialDescriptor"}],[{"pretty":"property _initialDescriptor","sym":"#_initialDescriptor"},{"pretty":"property variable._initialDescriptor","sym":"variable#_initialDescriptor"}]],[[],[{"pretty":"property writable","sym":"#writable"}]],[[],[{"pretty":"property Error","sym":"#Error"}]],[[],[{"pretty":"property parseFloat","sym":"#parseFloat"}]],[[],[{"pretty":"property isNaN","sym":"#isNaN"}]],[[],[{"pretty":"property JSON","sym":"#JSON"}]],[[],[{"pretty":"property parse","sym":"#parse"},{"pretty":"property JSON.parse","sym":"JSON#parse"}]],[[],[{"pretty":"property actor","sym":"#actor"},{"pretty":"property node.actor","sym":"node#actor"}]],[[],[{"pretty":"property setParam","sym":"#setParam"}]],[[{"pretty":"setGrip","sym":"#setGrip"}],[{"pretty":"property setGrip","sym":"#setGrip"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property emit","sym":"#emit"},{"pretty":"property window.emit","sym":"window#emit"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[{"pretty":"EVENTS.UI_SET_PARAM","sym":"EVENTS#UI_SET_PARAM"}],[{"pretty":"property UI_SET_PARAM","sym":"#UI_SET_PARAM"},{"pretty":"property EVENTS.UI_SET_PARAM","sym":"EVENTS#UI_SET_PARAM"}]],[[],[{"pretty":"property id","sym":"#id"},{"pretty":"property node.id","sym":"node#id"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property emit","sym":"#emit"},{"pretty":"property window.emit","sym":"window#emit"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[],[{"pretty":"property UI_SET_PARAM_ERROR","sym":"#UI_SET_PARAM_ERROR"},{"pretty":"property EVENTS.UI_SET_PARAM_ERROR","sym":"EVENTS#UI_SET_PARAM_ERROR"}]],[[],[{"pretty":"property id","sym":"#id"},{"pretty":"property node.id","sym":"node#id"}]]];</script>
    </div>
  <div id="foot" class="footer">
    This page was generated by Searchfox <span class="pretty-date" data-datetime="Wed, 13 Feb 2019 15:28:43 +0000"></span>.
  </div>
  <span id="data" data-root="/" data-search="/mozilla-central/search" data-tree="mozilla-central" data-path="devtools/client/webaudioeditor/views/properties.js"></span>
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
