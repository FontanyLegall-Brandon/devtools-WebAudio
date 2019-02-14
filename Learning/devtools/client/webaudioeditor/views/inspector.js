<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8" />
  <link href="/static/icons/search.png" rel="shortcut icon">
  <title>inspector.js - mozsearch</title>
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
<div class="breadcrumbs"><a href="/mozilla-central/source/">mozilla-central</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools">devtools</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client">client</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor">webaudioeditor</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/views">views</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/views/inspector.js">inspector.js</a></div>
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
  <a href="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/views/inspector.js" title="Permalink" class="icon" data-update-link="true" data-link="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/views/inspector.js">Permalink <span class="accel">Y</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/log/tip/devtools/client/webaudioeditor/views/inspector.js" title="Log" class="icon">Log <span class="accel">L</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/raw-file/tip/devtools/client/webaudioeditor/views/inspector.js" title="Raw" class="icon">Raw <span class="accel">R</span></a>
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
<div class="blame-strip c2" data-blame="7c4184c262287445fa470435fc2208f858a59ed7#%#6" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l7" class="line-number">7
<div class="blame-strip c2" data-blame="7c4184c262287445fa470435fc2208f858a59ed7#%#7" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l8" class="line-number">8
<div class="blame-strip c1" data-blame="862950c9f9a2ffc1e7bb4fb9cc3956ae18897850#browser/devtools/webaudioeditor/views/inspector.js#6" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l9" class="line-number">9
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#16" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l10" class="line-number">10
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/inspector.js#10" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l11" class="line-number">11
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/inspector.js#11" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l12" class="line-number">12
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/inspector.js#12" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l13" class="line-number">13
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#25" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l14" class="line-number">14
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#26" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l15" class="line-number">15
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l16" class="line-number">16
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#28" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l17" class="line-number">17
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#29" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l18" class="line-number">18
<div class="blame-strip c1" data-blame="64db2267cf9899840b44ce4116c2dd94aa0c3d8e#browser/devtools/webaudioeditor/views/inspector.js#16" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l19" class="line-number">19
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#31" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l20" class="line-number">20
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#32" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l21" class="line-number">21
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#33" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l22" class="line-number">22
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#34" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l23" class="line-number">23
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#35" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l24" class="line-number">24
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#36" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l25" class="line-number">25
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#37" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l26" class="line-number">26
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#38" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l27" class="line-number">27
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#39" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l28" class="line-number">28
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#40" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l29" class="line-number">29
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#41" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l30" class="line-number">30
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#42" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l31" class="line-number">31
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#31" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l32" class="line-number">32
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#46" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l33" class="line-number">33
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#47" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l34" class="line-number">34
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/inspector.js#34" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l35" class="line-number">35
<div class="blame-strip c2" data-blame="862950c9f9a2ffc1e7bb4fb9cc3956ae18897850#browser/devtools/webaudioeditor/views/inspector.js#33" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l36" class="line-number">36
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#49" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l37" class="line-number">37
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#50" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l38" class="line-number">38
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#51" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l39" class="line-number">39
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#52" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l40" class="line-number">40
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#53" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l41" class="line-number">41
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#54" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l42" class="line-number">42
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#55" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l43" class="line-number">43
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#57" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l44" class="line-number">44
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#58" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l45" class="line-number">45
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/inspector.js#45" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l46" class="line-number">46
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#46" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l47" class="line-number">47
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#59" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l48" class="line-number">48
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/inspector.js#47" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l49" class="line-number">49
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#49" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l50" class="line-number">50
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#50" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l51" class="line-number">51
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#51" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l52" class="line-number">52
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#63" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l53" class="line-number">53
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#64" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l54" class="line-number">54
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#65" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l55" class="line-number">55
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#66" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l56" class="line-number">56
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#67" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l57" class="line-number">57
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#68" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l58" class="line-number">58
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#69" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l59" class="line-number">59
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#59" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l60" class="line-number">60
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#71" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l61" class="line-number">61
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/inspector.js#57" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l62" class="line-number">62
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#62" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l63" class="line-number">63
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#63" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l64" class="line-number">64
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#64" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l65" class="line-number">65
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#65" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l66" class="line-number">66
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#66" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l67" class="line-number">67
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#72" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l68" class="line-number">68
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#73" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l69" class="line-number">69
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#74" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l70" class="line-number">70
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#75" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l71" class="line-number">71
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#76" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l72" class="line-number">72
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/inspector.js#63" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l73" class="line-number">73
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#78" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l74" class="line-number">74
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#79" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l75" class="line-number">75
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#80" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l76" class="line-number">76
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#81" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l77" class="line-number">77
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#82" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l78" class="line-number">78
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#83" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l79" class="line-number">79
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#79" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l80" class="line-number">80
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#85" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l81" class="line-number">81
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#86" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l82" class="line-number">82
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#87" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l83" class="line-number">83
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#88" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l84" class="line-number">84
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#89" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l85" class="line-number">85
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#90" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l86" class="line-number">86
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#91" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l87" class="line-number">87
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#92" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l88" class="line-number">88
<div class="blame-strip c2" data-blame="d226fcc86a0395cfec6ccc924c10c975e28cd3cb#%#88" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l89" class="line-number">89
<div class="blame-strip c2" data-blame="d226fcc86a0395cfec6ccc924c10c975e28cd3cb#%#89" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l90" class="line-number">90
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#96" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l91" class="line-number">91
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#97" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l92" class="line-number">92
<div class="blame-strip c2" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#browser/devtools/webaudioeditor/views/inspector.js#91" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l93" class="line-number">93
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/inspector.js#85" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l94" class="line-number">94
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#101" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l95" class="line-number">95
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#96" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l96" class="line-number">96
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#103" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l97" class="line-number">97
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#104" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l98" class="line-number">98
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#105" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l99" class="line-number">99
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#106" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l100" class="line-number">100
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#101" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l101" class="line-number">101
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#108" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l102" class="line-number">102
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#109" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l103" class="line-number">103
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#110" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l104" class="line-number">104
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#111" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l105" class="line-number">105
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#112" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l106" class="line-number">106
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#113" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l107" class="line-number">107
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#108" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l108" class="line-number">108
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#116" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l109" class="line-number">109
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#117" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l110" class="line-number">110
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#118" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l111" class="line-number">111
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#119" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l112" class="line-number">112
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#120" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l113" class="line-number">113
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#121" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l114" class="line-number">114
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#122" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l115" class="line-number">115
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#116" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l116" class="line-number">116
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#116" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l117" class="line-number">117
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#118" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l118" class="line-number">118
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#118" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l119" class="line-number">119
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#119" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l120" class="line-number">120
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#120" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l121" class="line-number">121
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#122" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l122" class="line-number">122
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#123" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l123" class="line-number">123
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#124" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l124" class="line-number">124
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#125" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l125" class="line-number">125
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#126" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l126" class="line-number">126
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#127" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l127" class="line-number">127
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#128" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l128" class="line-number">128
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#129" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l129" class="line-number">129
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#130" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l130" class="line-number">130
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#131" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l131" class="line-number">131
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#132" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l132" class="line-number">132
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#133" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l133" class="line-number">133
<div class="blame-strip c2" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#browser/devtools/webaudioeditor/views/inspector.js#132" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l134" class="line-number">134
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#131" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l135" class="line-number">135
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#132" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l136" class="line-number">136
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#179" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l137" class="line-number">137
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#180" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l138" class="line-number">138
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#181" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l139" class="line-number">139
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#182" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l140" class="line-number">140
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#221" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l141" class="line-number">141
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#222" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l142" class="line-number">142
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#223" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l143" class="line-number">143
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#144" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l144" class="line-number">144
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#225" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l145" class="line-number">145
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#226" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l146" class="line-number">146
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#227" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l147" class="line-number">147
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#228" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l148" class="line-number">148
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#229" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l149" class="line-number">149
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#230" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l150" class="line-number">150
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#151" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l151" class="line-number">151
<div class="blame-strip c1" data-blame="862950c9f9a2ffc1e7bb4fb9cc3956ae18897850#browser/devtools/webaudioeditor/views/inspector.js#150" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l152" class="line-number">152
<div class="blame-strip c1" data-blame="862950c9f9a2ffc1e7bb4fb9cc3956ae18897850#browser/devtools/webaudioeditor/views/inspector.js#151" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l153" class="line-number">153
<div class="blame-strip c1" data-blame="862950c9f9a2ffc1e7bb4fb9cc3956ae18897850#browser/devtools/webaudioeditor/views/inspector.js#152" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l154" class="line-number">154
<div class="blame-strip c1" data-blame="862950c9f9a2ffc1e7bb4fb9cc3956ae18897850#browser/devtools/webaudioeditor/views/inspector.js#153" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l155" class="line-number">155
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/inspector.js#132" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l156" class="line-number">156
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/inspector.js#133" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l157" class="line-number">157
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/inspector.js#134" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l158" class="line-number">158
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#231" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l159" class="line-number">159
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#232" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l160" class="line-number">160
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#233" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l161" class="line-number">161
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#234" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l162" class="line-number">162
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#163" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l163" class="line-number">163
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#236" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l164" class="line-number">164
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#237" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l165" class="line-number">165
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#238" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l166" class="line-number">166
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#163" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l167" class="line-number">167
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#164" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l168" class="line-number">168
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#169" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l169" class="line-number">169
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#169" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l170" class="line-number">170
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#170" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l171" class="line-number">171
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#171" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l172" class="line-number">172
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#172" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l173" class="line-number">173
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#170" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l174" class="line-number">174
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#171" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l175" class="line-number">175
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#172" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l176" class="line-number">176
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#173" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l177" class="line-number">177
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#174" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l178" class="line-number">178
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#175" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l179" class="line-number">179
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#176" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l180" class="line-number">180
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#177" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l181" class="line-number">181
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#178" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l182" class="line-number">182
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#179" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l183" class="line-number">183
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#180" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l184" class="line-number">184
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#181" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l185" class="line-number">185
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#182" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l186" class="line-number">186
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/inspector.js#183" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l187" class="line-number">187
<div class="blame-strip c2" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#187" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l188" class="line-number">188
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/inspector.js#240" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
      </td>
      <td class="code">
<pre><code id="line-1" aria-labelledby="1"><span class="syn_comment" >/* This Source Code Form is subject to the terms of the Mozilla Public</span>
</code><code id="line-2" aria-labelledby="2"><span class="syn_comment" > * License, v. 2.0. If a copy of the MPL was not distributed with this file,</span>
</code><code id="line-3" aria-labelledby="3"><span class="syn_comment" > * You can obtain one at <a href="http://mozilla.org/MPL/2.0/">http://mozilla.org/MPL/2.0/</a>. */</span>
</code><code id="line-4" aria-labelledby="4"><span class="syn_string" >"use strict"</span>;
</code><code id="line-5" aria-labelledby="5">
</code><code id="line-6" aria-labelledby="6"><span class="syn_comment" >/* import-globals-from ../includes.js */</span>
</code><code id="line-7" aria-labelledby="7">
</code><code id="line-8" aria-labelledby="8"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#MIN_INSPECTOR_WIDTH" data-i="0" >MIN_INSPECTOR_WIDTH</span> = 300;
</code><code id="line-9" aria-labelledby="9">
</code><code id="line-10" aria-labelledby="10"><span class="syn_comment" >// Strings for rendering</span>
</code><code id="line-11" aria-labelledby="11"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#EXPAND_INSPECTOR_STRING" data-i="1" >EXPAND_INSPECTOR_STRING</span> = <span data-symbols="#L10N" data-i="2" >L10N</span>.<span data-symbols="#getStr,L10N#getStr" data-i="3" >getStr</span>(<span class="syn_string" >"expandInspector"</span>);
</code><code id="line-12" aria-labelledby="12"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#COLLAPSE_INSPECTOR_STRING" data-i="4" >COLLAPSE_INSPECTOR_STRING</span> = <span data-symbols="#L10N" data-i="5" >L10N</span>.<span data-symbols="#getStr,L10N#getStr" data-i="6" >getStr</span>(<span class="syn_string" >"collapseInspector"</span>);
</code><code id="line-13" aria-labelledby="13">
</code><code id="line-14" aria-labelledby="14"><span class="syn_comment" >/**</span>
</code><code id="line-15" aria-labelledby="15"><span class="syn_comment" > * Functions handling the audio node inspector UI.</span>
</code><code id="line-16" aria-labelledby="16"><span class="syn_comment" > */</span>
</code><code id="line-17" aria-labelledby="17">
</code><code id="line-18" aria-labelledby="18"><span class="syn_reserved" >var</span> <span class="syn_def" data-symbols="#InspectorView" data-i="7" >InspectorView</span> = {
</code><code id="line-19" aria-labelledby="19">  <span class="syn_def syn_def" data-symbols="#_currentNode,InspectorView#_currentNode" data-i="8" >_currentNode</span>: <span class="syn_reserved" >null</span>,
</code><code id="line-20" aria-labelledby="20">
</code><code id="line-21" aria-labelledby="21">  <span class="syn_comment" >// Set up config for view toggling</span>
</code><code id="line-22" aria-labelledby="22">  <span class="syn_def syn_def" data-symbols="#_collapseString,InspectorView#_collapseString" data-i="9" >_collapseString</span>: <span data-symbols="#COLLAPSE_INSPECTOR_STRING" data-i="10" >COLLAPSE_INSPECTOR_STRING</span>,
</code><code id="line-23" aria-labelledby="23">  <span class="syn_def syn_def" data-symbols="#_expandString,InspectorView#_expandString" data-i="11" >_expandString</span>: <span data-symbols="#EXPAND_INSPECTOR_STRING" data-i="12" >EXPAND_INSPECTOR_STRING</span>,
</code><code id="line-24" aria-labelledby="24">  <span class="syn_def syn_def" data-symbols="#_toggleEvent,InspectorView#_toggleEvent" data-i="13" >_toggleEvent</span>: <span data-symbols="#EVENTS" data-i="14" >EVENTS</span>.<span data-symbols="#UI_INSPECTOR_TOGGLED,EVENTS#UI_INSPECTOR_TOGGLED" data-i="15" >UI_INSPECTOR_TOGGLED</span>,
</code><code id="line-25" aria-labelledby="25">  <span class="syn_def syn_def" data-symbols="#_animated,InspectorView#_animated" data-i="16" >_animated</span>: <span class="syn_reserved" >true</span>,
</code><code id="line-26" aria-labelledby="26">  <span class="syn_def syn_def" data-symbols="#_delayed,InspectorView#_delayed" data-i="17" >_delayed</span>: <span class="syn_reserved" >true</span>,
</code><code id="line-27" aria-labelledby="27">
</code><code id="line-28" aria-labelledby="28">  <span class="syn_comment" >/**</span>
</code><code id="line-29" aria-labelledby="29"><span class="syn_comment" >   * Initialization function called when the tool starts up.</span>
</code><code id="line-30" aria-labelledby="30"><span class="syn_comment" >   */</span>
</code><code id="line-31" aria-labelledby="31">  <span class="syn_def syn_def" data-symbols="#initialize,InspectorView#initialize" data-i="18" >initialize</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-32" aria-labelledby="32">    <span class="syn_comment" >// Set up view controller</span>
</code><code id="line-33" aria-labelledby="33">    <span class="syn_reserved" >this</span>.<span data-symbols="#el,InspectorView#el" data-i="19" >el</span> = $(<span class="syn_string" >"#web-audio-inspector"</span>);
</code><code id="line-34" aria-labelledby="34">    <span class="syn_reserved" >this</span>.<span data-symbols="#splitter,InspectorView#splitter" data-i="20" >splitter</span> = $(<span class="syn_string" >"#inspector-splitter"</span>);
</code><code id="line-35" aria-labelledby="35">    <span class="syn_reserved" >this</span>.<span data-symbols="#el,InspectorView#el" data-i="21" >el</span>.<span data-symbols="#setAttribute" data-i="22" >setAttribute</span>(<span class="syn_string" >"width"</span>, <span data-symbols="#Services" data-i="23" >Services</span>.<span data-symbols="#prefs,Services#prefs" data-i="24" >prefs</span>.<span data-symbols="#getIntPref" data-i="25" >getIntPref</span>(<span class="syn_string" >"devtools.webaudioeditor.inspectorWidth"</span>));
</code><code id="line-36" aria-labelledby="36">    <span class="syn_reserved" >this</span>.<span data-symbols="#button,InspectorView#button" data-i="26" >button</span> = $(<span class="syn_string" >"#inspector-pane-toggle"</span>);
</code><code id="line-37" aria-labelledby="37">    <span data-symbols="#mixin" data-i="27" >mixin</span>(<span class="syn_reserved" >this</span>, <span data-symbols="#ToggleMixin" data-i="28" >ToggleMixin</span>);
</code><code id="line-38" aria-labelledby="38">    <span class="syn_reserved" >this</span>.<span data-symbols="#bindToggle,InspectorView#bindToggle" data-i="29" >bindToggle</span>();
</code><code id="line-39" aria-labelledby="39">
</code><code id="line-40" aria-labelledby="40">    <span class="syn_comment" >// Hide inspector view on startup</span>
</code><code id="line-41" aria-labelledby="41">    <span class="syn_reserved" >this</span>.<span data-symbols="#hideImmediately,InspectorView#hideImmediately" data-i="30" >hideImmediately</span>();
</code><code id="line-42" aria-labelledby="42">
</code><code id="line-43" aria-labelledby="43">    <span class="syn_reserved" >this</span>.<span data-symbols="#_onNodeSelect,InspectorView#_onNodeSelect" data-i="31" >_onNodeSelect</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_onNodeSelect,_onNodeSelect#_onNodeSelect" data-i="32" >_onNodeSelect</span>.<span data-symbols="#bind" data-i="33" >bind</span>(<span class="syn_reserved" >this</span>);
</code><code id="line-44" aria-labelledby="44">    <span class="syn_reserved" >this</span>.<span data-symbols="#_onDestroyNode,InspectorView#_onDestroyNode" data-i="34" >_onDestroyNode</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_onDestroyNode,_onDestroyNode#_onDestroyNode" data-i="35" >_onDestroyNode</span>.<span data-symbols="#bind" data-i="36" >bind</span>(<span class="syn_reserved" >this</span>);
</code><code id="line-45" aria-labelledby="45">    <span class="syn_reserved" >this</span>.<span data-symbols="#_onResize,InspectorView#_onResize" data-i="37" >_onResize</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_onResize,_onResize#_onResize" data-i="38" >_onResize</span>.<span data-symbols="#bind" data-i="39" >bind</span>(<span class="syn_reserved" >this</span>);
</code><code id="line-46" aria-labelledby="46">    <span class="syn_reserved" >this</span>.<span data-symbols="#_onCommandClick,InspectorView#_onCommandClick" data-i="40" >_onCommandClick</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_onCommandClick,_onCommandClick#_onCommandClick" data-i="41" >_onCommandClick</span>.<span data-symbols="#bind" data-i="42" >bind</span>(<span class="syn_reserved" >this</span>);
</code><code id="line-47" aria-labelledby="47">
</code><code id="line-48" aria-labelledby="48">    <span class="syn_reserved" >this</span>.<span data-symbols="#splitter,InspectorView#splitter" data-i="43" >splitter</span>.<span data-symbols="#addEventListener" data-i="44" >addEventListener</span>(<span class="syn_string" >"mouseup"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onResize,InspectorView#_onResize" data-i="45" >_onResize</span>);
</code><code id="line-49" aria-labelledby="49">    <span class="syn_reserved" >for</span> (<span class="syn_reserved" >const</span> $el of $$(<span class="syn_string" >"#audio-node-toolbar toolbarbutton"</span>)) {
</code><code id="line-50" aria-labelledby="50">      $el.<span data-symbols="#addEventListener,$el#addEventListener" data-i="46" >addEventListener</span>(<span class="syn_string" >"command"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onCommandClick,InspectorView#_onCommandClick" data-i="47" >_onCommandClick</span>);
</code><code id="line-51" aria-labelledby="51">    }
</code><code id="line-52" aria-labelledby="52">    <span data-symbols="#window" data-i="48" >window</span>.<span data-symbols="#on,window#on" data-i="49" >on</span>(<span data-symbols="#EVENTS" data-i="50" >EVENTS</span>.<span data-symbols="#UI_SELECT_NODE,EVENTS#UI_SELECT_NODE" data-i="51" >UI_SELECT_NODE</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onNodeSelect,InspectorView#_onNodeSelect" data-i="52" >_onNodeSelect</span>);
</code><code id="line-53" aria-labelledby="53">    <span data-symbols="#gAudioNodes" data-i="53" >gAudioNodes</span>.<span data-symbols="#on,gAudioNodes#on" data-i="54" >on</span>(<span class="syn_string" >"remove"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onDestroyNode,InspectorView#_onDestroyNode" data-i="55" >_onDestroyNode</span>);
</code><code id="line-54" aria-labelledby="54">  },
</code><code id="line-55" aria-labelledby="55">
</code><code id="line-56" aria-labelledby="56">  <span class="syn_comment" >/**</span>
</code><code id="line-57" aria-labelledby="57"><span class="syn_comment" >   * Destruction function called when the tool cleans up.</span>
</code><code id="line-58" aria-labelledby="58"><span class="syn_comment" >   */</span>
</code><code id="line-59" aria-labelledby="59">  <span class="syn_def syn_def" data-symbols="#destroy,InspectorView#destroy" data-i="56" >destroy</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-60" aria-labelledby="60">    <span class="syn_reserved" >this</span>.<span data-symbols="#unbindToggle,InspectorView#unbindToggle" data-i="57" >unbindToggle</span>();
</code><code id="line-61" aria-labelledby="61">    <span class="syn_reserved" >this</span>.<span data-symbols="#splitter,InspectorView#splitter" data-i="58" >splitter</span>.<span data-symbols="#removeEventListener" data-i="59" >removeEventListener</span>(<span class="syn_string" >"mouseup"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onResize,InspectorView#_onResize" data-i="60" >_onResize</span>);
</code><code id="line-62" aria-labelledby="62">
</code><code id="line-63" aria-labelledby="63">    $(<span class="syn_string" >"#audio-node-toolbar toolbarbutton"</span>).<span data-symbols="#removeEventListener" data-i="61" >removeEventListener</span>(<span class="syn_string" >"command"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onCommandClick,InspectorView#_onCommandClick" data-i="62" >_onCommandClick</span>);
</code><code id="line-64" aria-labelledby="64">    <span class="syn_reserved" >for</span> (<span class="syn_reserved" >const</span> $el of $$(<span class="syn_string" >"#audio-node-toolbar toolbarbutton"</span>)) {
</code><code id="line-65" aria-labelledby="65">      $el.<span data-symbols="#removeEventListener,$el#removeEventListener" data-i="63" >removeEventListener</span>(<span class="syn_string" >"command"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onCommandClick,InspectorView#_onCommandClick" data-i="64" >_onCommandClick</span>);
</code><code id="line-66" aria-labelledby="66">    }
</code><code id="line-67" aria-labelledby="67">    <span data-symbols="#window" data-i="65" >window</span>.<span data-symbols="#off,window#off" data-i="66" >off</span>(<span data-symbols="#EVENTS" data-i="67" >EVENTS</span>.<span data-symbols="#UI_SELECT_NODE,EVENTS#UI_SELECT_NODE" data-i="68" >UI_SELECT_NODE</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onNodeSelect,InspectorView#_onNodeSelect" data-i="69" >_onNodeSelect</span>);
</code><code id="line-68" aria-labelledby="68">    <span data-symbols="#gAudioNodes" data-i="70" >gAudioNodes</span>.<span data-symbols="#off,gAudioNodes#off" data-i="71" >off</span>(<span class="syn_string" >"remove"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onDestroyNode,InspectorView#_onDestroyNode" data-i="72" >_onDestroyNode</span>);
</code><code id="line-69" aria-labelledby="69">
</code><code id="line-70" aria-labelledby="70">    <span class="syn_reserved" >this</span>.<span data-symbols="#el,InspectorView#el" data-i="73" >el</span> = <span class="syn_reserved" >null</span>;
</code><code id="line-71" aria-labelledby="71">    <span class="syn_reserved" >this</span>.<span data-symbols="#button,InspectorView#button" data-i="74" >button</span> = <span class="syn_reserved" >null</span>;
</code><code id="line-72" aria-labelledby="72">    <span class="syn_reserved" >this</span>.<span data-symbols="#splitter,InspectorView#splitter" data-i="75" >splitter</span> = <span class="syn_reserved" >null</span>;
</code><code id="line-73" aria-labelledby="73">  },
</code><code id="line-74" aria-labelledby="74">
</code><code id="line-75" aria-labelledby="75">  <span class="syn_comment" >/**</span>
</code><code id="line-76" aria-labelledby="76"><span class="syn_comment" >   * Takes a AudioNodeView `node` and sets it as the current</span>
</code><code id="line-77" aria-labelledby="77"><span class="syn_comment" >   * node and scaffolds the inspector view based off of the new node.</span>
</code><code id="line-78" aria-labelledby="78"><span class="syn_comment" >   */</span>
</code><code id="line-79" aria-labelledby="79">  async <span class="syn_def syn_def" data-symbols="#setCurrentAudioNode,InspectorView#setCurrentAudioNode" data-i="76" >setCurrentAudioNode</span>(<span data-symbols="7381-2" >node</span>) {
</code><code id="line-80" aria-labelledby="80">    <span class="syn_reserved" >this</span>.<span data-symbols="#_currentNode,InspectorView#_currentNode" data-i="77" >_currentNode</span> = <span data-symbols="7381-2" >node</span> || <span class="syn_reserved" >null</span>;
</code><code id="line-81" aria-labelledby="81">
</code><code id="line-82" aria-labelledby="82">    <span class="syn_comment" >// If no node selected, set the inspector back to "no AudioNode selected"</span>
</code><code id="line-83" aria-labelledby="83">    <span class="syn_comment" >// view.</span>
</code><code id="line-84" aria-labelledby="84">    <span class="syn_reserved" >if</span> (!<span data-symbols="7381-2" >node</span>) {
</code><code id="line-85" aria-labelledby="85">      $(<span class="syn_string" >"#web-audio-editor-details-pane-empty"</span>).<span data-symbols="#removeAttribute" data-i="78" >removeAttribute</span>(<span class="syn_string" >"hidden"</span>);
</code><code id="line-86" aria-labelledby="86">      $(<span class="syn_string" >"#web-audio-editor-tabs"</span>).<span data-symbols="#setAttribute" data-i="79" >setAttribute</span>(<span class="syn_string" >"hidden"</span>, <span class="syn_string" >"true"</span>);
</code><code id="line-87" aria-labelledby="87">      <span data-symbols="#window" data-i="80" >window</span>.<span data-symbols="#emit,window#emit" data-i="81" >emit</span>(<span data-symbols="#EVENTS" data-i="82" >EVENTS</span>.<span data-symbols="#UI_INSPECTOR_NODE_SET,EVENTS#UI_INSPECTOR_NODE_SET" data-i="83" >UI_INSPECTOR_NODE_SET</span>, <span class="syn_reserved" >null</span>);
</code><code id="line-88" aria-labelledby="88">    } <span class="syn_reserved" >else</span> {
</code><code id="line-89" aria-labelledby="89">      <span class="syn_comment" >// Otherwise load up the tabs view and hide the empty placeholder</span>
</code><code id="line-90" aria-labelledby="90">      $(<span class="syn_string" >"#web-audio-editor-details-pane-empty"</span>).<span data-symbols="#setAttribute" data-i="84" >setAttribute</span>(<span class="syn_string" >"hidden"</span>, <span class="syn_string" >"true"</span>);
</code><code id="line-91" aria-labelledby="91">      $(<span class="syn_string" >"#web-audio-editor-tabs"</span>).<span data-symbols="#removeAttribute" data-i="85" >removeAttribute</span>(<span class="syn_string" >"hidden"</span>);
</code><code id="line-92" aria-labelledby="92">      <span class="syn_reserved" >this</span>.<span data-symbols="#_buildToolbar,InspectorView#_buildToolbar" data-i="86" >_buildToolbar</span>();
</code><code id="line-93" aria-labelledby="93">      <span data-symbols="#window" data-i="87" >window</span>.<span data-symbols="#emit,window#emit" data-i="88" >emit</span>(<span data-symbols="#EVENTS" data-i="89" >EVENTS</span>.<span data-symbols="#UI_INSPECTOR_NODE_SET,EVENTS#UI_INSPECTOR_NODE_SET" data-i="90" >UI_INSPECTOR_NODE_SET</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_currentNode,InspectorView#_currentNode" data-i="91" >_currentNode</span>.<span data-symbols="#id" data-i="92" >id</span>);
</code><code id="line-94" aria-labelledby="94">    }
</code><code id="line-95" aria-labelledby="95">  },
</code><code id="line-96" aria-labelledby="96">
</code><code id="line-97" aria-labelledby="97">  <span class="syn_comment" >/**</span>
</code><code id="line-98" aria-labelledby="98"><span class="syn_comment" >   * Returns the current AudioNodeView.</span>
</code><code id="line-99" aria-labelledby="99"><span class="syn_comment" >   */</span>
</code><code id="line-100" aria-labelledby="100">  <span class="syn_def syn_def" data-symbols="#getCurrentAudioNode,InspectorView#getCurrentAudioNode" data-i="93" >getCurrentAudioNode</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-101" aria-labelledby="101">    <span class="syn_reserved" >return</span> <span class="syn_reserved" >this</span>.<span data-symbols="#_currentNode,InspectorView#_currentNode" data-i="94" >_currentNode</span>;
</code><code id="line-102" aria-labelledby="102">  },
</code><code id="line-103" aria-labelledby="103">
</code><code id="line-104" aria-labelledby="104">  <span class="syn_comment" >/**</span>
</code><code id="line-105" aria-labelledby="105"><span class="syn_comment" >   * Empties out the props view.</span>
</code><code id="line-106" aria-labelledby="106"><span class="syn_comment" >   */</span>
</code><code id="line-107" aria-labelledby="107">  <span class="syn_def syn_def" data-symbols="#resetUI,InspectorView#resetUI" data-i="95" >resetUI</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-108" aria-labelledby="108">    <span class="syn_comment" >// Set current node to empty to load empty view</span>
</code><code id="line-109" aria-labelledby="109">    <span class="syn_reserved" >this</span>.<span data-symbols="#setCurrentAudioNode,InspectorView#setCurrentAudioNode" data-i="96" >setCurrentAudioNode</span>();
</code><code id="line-110" aria-labelledby="110">
</code><code id="line-111" aria-labelledby="111">    <span class="syn_comment" >// Reset AudioNode inspector and hide</span>
</code><code id="line-112" aria-labelledby="112">    <span class="syn_reserved" >this</span>.<span data-symbols="#hideImmediately,InspectorView#hideImmediately" data-i="97" >hideImmediately</span>();
</code><code id="line-113" aria-labelledby="113">  },
</code><code id="line-114" aria-labelledby="114">
</code><code id="line-115" aria-labelledby="115">  <span class="syn_def syn_def" data-symbols="#_buildToolbar,InspectorView#_buildToolbar" data-i="98" >_buildToolbar</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-116" aria-labelledby="116">    <span class="syn_reserved" >const</span> <span data-symbols="7381-3" >node</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#getCurrentAudioNode,InspectorView#getCurrentAudioNode" data-i="99" >getCurrentAudioNode</span>();
</code><code id="line-117" aria-labelledby="117">
</code><code id="line-118" aria-labelledby="118">    <span class="syn_reserved" >const</span> <span data-symbols="7381-4" >bypassable</span> = <span data-symbols="7381-3" >node</span>.<span data-symbols="#bypassable,node#bypassable" data-i="100" >bypassable</span>;
</code><code id="line-119" aria-labelledby="119">    <span class="syn_reserved" >const</span> <span data-symbols="7381-5" >bypassed</span> = <span data-symbols="7381-3" >node</span>.<span data-symbols="#isBypassed,node#isBypassed" data-i="101" >isBypassed</span>();
</code><code id="line-120" aria-labelledby="120">    <span class="syn_reserved" >const</span> <span data-symbols="7381-6" >button</span> = $(<span class="syn_string" >"#audio-node-toolbar .bypass"</span>);
</code><code id="line-121" aria-labelledby="121">
</code><code id="line-122" aria-labelledby="122">    <span class="syn_reserved" >if</span> (!<span data-symbols="7381-4" >bypassable</span>) {
</code><code id="line-123" aria-labelledby="123">      <span data-symbols="7381-6" >button</span>.<span data-symbols="#setAttribute,button#setAttribute" data-i="102" >setAttribute</span>(<span class="syn_string" >"disabled"</span>, <span class="syn_reserved" >true</span>);
</code><code id="line-124" aria-labelledby="124">    } <span class="syn_reserved" >else</span> {
</code><code id="line-125" aria-labelledby="125">      <span data-symbols="7381-6" >button</span>.<span data-symbols="#removeAttribute,button#removeAttribute" data-i="103" >removeAttribute</span>(<span class="syn_string" >"disabled"</span>);
</code><code id="line-126" aria-labelledby="126">    }
</code><code id="line-127" aria-labelledby="127">
</code><code id="line-128" aria-labelledby="128">    <span class="syn_reserved" >if</span> (!<span data-symbols="7381-4" >bypassable</span> || <span data-symbols="7381-5" >bypassed</span>) {
</code><code id="line-129" aria-labelledby="129">      <span data-symbols="7381-6" >button</span>.<span data-symbols="#removeAttribute,button#removeAttribute" data-i="104" >removeAttribute</span>(<span class="syn_string" >"checked"</span>);
</code><code id="line-130" aria-labelledby="130">    } <span class="syn_reserved" >else</span> {
</code><code id="line-131" aria-labelledby="131">      <span data-symbols="7381-6" >button</span>.<span data-symbols="#setAttribute,button#setAttribute" data-i="105" >setAttribute</span>(<span class="syn_string" >"checked"</span>, <span class="syn_reserved" >true</span>);
</code><code id="line-132" aria-labelledby="132">    }
</code><code id="line-133" aria-labelledby="133">  },
</code><code id="line-134" aria-labelledby="134">
</code><code id="line-135" aria-labelledby="135">  <span class="syn_comment" >/**</span>
</code><code id="line-136" aria-labelledby="136"><span class="syn_comment" >   * Event handlers</span>
</code><code id="line-137" aria-labelledby="137"><span class="syn_comment" >   */</span>
</code><code id="line-138" aria-labelledby="138">
</code><code id="line-139" aria-labelledby="139">  <span class="syn_comment" >/**</span>
</code><code id="line-140" aria-labelledby="140"><span class="syn_comment" >   * Called on EVENTS.UI_SELECT_NODE, and takes an actorID `id`</span>
</code><code id="line-141" aria-labelledby="141"><span class="syn_comment" >   * and calls `setCurrentAudioNode` to scaffold the inspector view.</span>
</code><code id="line-142" aria-labelledby="142"><span class="syn_comment" >   */</span>
</code><code id="line-143" aria-labelledby="143">  <span class="syn_def syn_def" data-symbols="#_onNodeSelect,InspectorView#_onNodeSelect" data-i="106" >_onNodeSelect</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7381-7" >id</span>) {
</code><code id="line-144" aria-labelledby="144">    <span class="syn_reserved" >this</span>.<span data-symbols="#setCurrentAudioNode,InspectorView#setCurrentAudioNode" data-i="107" >setCurrentAudioNode</span>(<span data-symbols="#gAudioNodes" data-i="108" >gAudioNodes</span>.<span class="syn_reserved" >get</span>(<span data-symbols="7381-7" >id</span>));
</code><code id="line-145" aria-labelledby="145">
</code><code id="line-146" aria-labelledby="146">    <span class="syn_comment" >// Ensure inspector is visible when selecting a new node</span>
</code><code id="line-147" aria-labelledby="147">    <span class="syn_reserved" >this</span>.<span data-symbols="#show,InspectorView#show" data-i="109" >show</span>();
</code><code id="line-148" aria-labelledby="148">  },
</code><code id="line-149" aria-labelledby="149">
</code><code id="line-150" aria-labelledby="150">  <span class="syn_def syn_def" data-symbols="#_onResize,InspectorView#_onResize" data-i="110" >_onResize</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-151" aria-labelledby="151">    <span class="syn_reserved" >if</span> (<span class="syn_reserved" >this</span>.<span data-symbols="#el,InspectorView#el" data-i="111" >el</span>.<span data-symbols="#getAttribute" data-i="112" >getAttribute</span>(<span class="syn_string" >"width"</span>) &lt; <span data-symbols="#MIN_INSPECTOR_WIDTH" data-i="113" >MIN_INSPECTOR_WIDTH</span>) {
</code><code id="line-152" aria-labelledby="152">      <span class="syn_reserved" >this</span>.<span data-symbols="#el,InspectorView#el" data-i="114" >el</span>.<span data-symbols="#setAttribute" data-i="115" >setAttribute</span>(<span class="syn_string" >"width"</span>, <span data-symbols="#MIN_INSPECTOR_WIDTH" data-i="116" >MIN_INSPECTOR_WIDTH</span>);
</code><code id="line-153" aria-labelledby="153">    }
</code><code id="line-154" aria-labelledby="154">    <span data-symbols="#Services" data-i="117" >Services</span>.<span data-symbols="#prefs,Services#prefs" data-i="118" >prefs</span>.<span data-symbols="#setIntPref" data-i="119" >setIntPref</span>(<span class="syn_string" >"devtools.webaudioeditor.inspectorWidth"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#el,InspectorView#el" data-i="120" >el</span>.<span data-symbols="#getAttribute" data-i="121" >getAttribute</span>(<span class="syn_string" >"width"</span>));
</code><code id="line-155" aria-labelledby="155">    <span data-symbols="#window" data-i="122" >window</span>.<span data-symbols="#emit,window#emit" data-i="123" >emit</span>(<span data-symbols="#EVENTS" data-i="124" >EVENTS</span>.<span data-symbols="#UI_INSPECTOR_RESIZE,EVENTS#UI_INSPECTOR_RESIZE" data-i="125" >UI_INSPECTOR_RESIZE</span>);
</code><code id="line-156" aria-labelledby="156">  },
</code><code id="line-157" aria-labelledby="157">
</code><code id="line-158" aria-labelledby="158">  <span class="syn_comment" >/**</span>
</code><code id="line-159" aria-labelledby="159"><span class="syn_comment" >   * Called when `DESTROY_NODE` is fired to remove the node from props view if</span>
</code><code id="line-160" aria-labelledby="160"><span class="syn_comment" >   * it's currently selected.</span>
</code><code id="line-161" aria-labelledby="161"><span class="syn_comment" >   */</span>
</code><code id="line-162" aria-labelledby="162">  <span class="syn_def syn_def" data-symbols="#_onDestroyNode,InspectorView#_onDestroyNode" data-i="126" >_onDestroyNode</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7381-8" >node</span>) {
</code><code id="line-163" aria-labelledby="163">    <span class="syn_reserved" >if</span> (<span class="syn_reserved" >this</span>.<span data-symbols="#_currentNode,InspectorView#_currentNode" data-i="127" >_currentNode</span> &amp;&amp; <span class="syn_reserved" >this</span>.<span data-symbols="#_currentNode,InspectorView#_currentNode" data-i="128" >_currentNode</span>.<span data-symbols="#id" data-i="129" >id</span> === <span data-symbols="7381-8" >node</span>.<span data-symbols="#id,node#id" data-i="130" >id</span>) {
</code><code id="line-164" aria-labelledby="164">      <span class="syn_reserved" >this</span>.<span data-symbols="#setCurrentAudioNode,InspectorView#setCurrentAudioNode" data-i="131" >setCurrentAudioNode</span>(<span class="syn_reserved" >null</span>);
</code><code id="line-165" aria-labelledby="165">    }
</code><code id="line-166" aria-labelledby="166">  },
</code><code id="line-167" aria-labelledby="167">
</code><code id="line-168" aria-labelledby="168">  <span class="syn_def syn_def" data-symbols="#_onCommandClick,InspectorView#_onCommandClick" data-i="132" >_onCommandClick</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7381-9" >e</span>) {
</code><code id="line-169" aria-labelledby="169">    <span class="syn_reserved" >const</span> <span data-symbols="7381-10" >node</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#getCurrentAudioNode,InspectorView#getCurrentAudioNode" data-i="133" >getCurrentAudioNode</span>();
</code><code id="line-170" aria-labelledby="170">    <span class="syn_reserved" >const</span> <span data-symbols="7381-11" >button</span> = <span data-symbols="7381-9" >e</span>.<span data-symbols="#target,e#target" data-i="134" >target</span>;
</code><code id="line-171" aria-labelledby="171">    <span class="syn_reserved" >const</span> <span data-symbols="7381-12" >command</span> = <span data-symbols="7381-11" >button</span>.<span data-symbols="#getAttribute,button#getAttribute" data-i="135" >getAttribute</span>(<span class="syn_string" >"data-command"</span>);
</code><code id="line-172" aria-labelledby="172">    <span class="syn_reserved" >const</span> <span data-symbols="7381-13" >checked</span> = <span data-symbols="7381-11" >button</span>.<span data-symbols="#getAttribute,button#getAttribute" data-i="136" >getAttribute</span>(<span class="syn_string" >"checked"</span>);
</code><code id="line-173" aria-labelledby="173">
</code><code id="line-174" aria-labelledby="174">    <span class="syn_reserved" >if</span> (<span data-symbols="7381-11" >button</span>.<span data-symbols="#getAttribute,button#getAttribute" data-i="137" >getAttribute</span>(<span class="syn_string" >"disabled"</span>)) {
</code><code id="line-175" aria-labelledby="175">      <span class="syn_reserved" >return</span>;
</code><code id="line-176" aria-labelledby="176">    }
</code><code id="line-177" aria-labelledby="177">
</code><code id="line-178" aria-labelledby="178">    <span class="syn_reserved" >if</span> (<span data-symbols="7381-12" >command</span> === <span class="syn_string" >"bypass"</span>) {
</code><code id="line-179" aria-labelledby="179">      <span class="syn_reserved" >if</span> (<span data-symbols="7381-13" >checked</span>) {
</code><code id="line-180" aria-labelledby="180">        <span data-symbols="7381-11" >button</span>.<span data-symbols="#removeAttribute,button#removeAttribute" data-i="138" >removeAttribute</span>(<span class="syn_string" >"checked"</span>);
</code><code id="line-181" aria-labelledby="181">        <span data-symbols="7381-10" >node</span>.<span data-symbols="#bypass,node#bypass" data-i="139" >bypass</span>(<span class="syn_reserved" >true</span>);
</code><code id="line-182" aria-labelledby="182">      } <span class="syn_reserved" >else</span> {
</code><code id="line-183" aria-labelledby="183">        <span data-symbols="7381-11" >button</span>.<span data-symbols="#setAttribute,button#setAttribute" data-i="140" >setAttribute</span>(<span class="syn_string" >"checked"</span>, <span class="syn_reserved" >true</span>);
</code><code id="line-184" aria-labelledby="184">        <span data-symbols="7381-10" >node</span>.<span data-symbols="#bypass,node#bypass" data-i="141" >bypass</span>(<span class="syn_reserved" >false</span>);
</code><code id="line-185" aria-labelledby="185">      }
</code><code id="line-186" aria-labelledby="186">    }
</code><code id="line-187" aria-labelledby="187">  },
</code><code id="line-188" aria-labelledby="188">};
</code></pre>      </td>
    </tr>
  </tbody>
</table>
<script>var ANALYSIS_DATA = [[[],[{"pretty":"property MIN_INSPECTOR_WIDTH","sym":"#MIN_INSPECTOR_WIDTH"}]],[[],[{"pretty":"property EXPAND_INSPECTOR_STRING","sym":"#EXPAND_INSPECTOR_STRING"}]],[[],[{"pretty":"property L10N","sym":"#L10N"}]],[[],[{"pretty":"property getStr","sym":"#getStr"},{"pretty":"property L10N.getStr","sym":"L10N#getStr"}]],[[],[{"pretty":"property COLLAPSE_INSPECTOR_STRING","sym":"#COLLAPSE_INSPECTOR_STRING"}]],[[],[{"pretty":"property L10N","sym":"#L10N"}]],[[],[{"pretty":"property getStr","sym":"#getStr"},{"pretty":"property L10N.getStr","sym":"L10N#getStr"}]],[[],[{"pretty":"property InspectorView","sym":"#InspectorView"}]],[[],[{"pretty":"property _currentNode","sym":"#_currentNode"},{"pretty":"property InspectorView._currentNode","sym":"InspectorView#_currentNode"}]],[[],[{"pretty":"property _collapseString","sym":"#_collapseString"},{"pretty":"property InspectorView._collapseString","sym":"InspectorView#_collapseString"}]],[[{"pretty":"COLLAPSE_INSPECTOR_STRING","sym":"#COLLAPSE_INSPECTOR_STRING"}],[{"pretty":"property COLLAPSE_INSPECTOR_STRING","sym":"#COLLAPSE_INSPECTOR_STRING"}]],[[],[{"pretty":"property _expandString","sym":"#_expandString"},{"pretty":"property InspectorView._expandString","sym":"InspectorView#_expandString"}]],[[{"pretty":"EXPAND_INSPECTOR_STRING","sym":"#EXPAND_INSPECTOR_STRING"}],[{"pretty":"property EXPAND_INSPECTOR_STRING","sym":"#EXPAND_INSPECTOR_STRING"}]],[[],[{"pretty":"property _toggleEvent","sym":"#_toggleEvent"},{"pretty":"property InspectorView._toggleEvent","sym":"InspectorView#_toggleEvent"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[{"pretty":"EVENTS.UI_INSPECTOR_TOGGLED","sym":"EVENTS#UI_INSPECTOR_TOGGLED"}],[{"pretty":"property UI_INSPECTOR_TOGGLED","sym":"#UI_INSPECTOR_TOGGLED"},{"pretty":"property EVENTS.UI_INSPECTOR_TOGGLED","sym":"EVENTS#UI_INSPECTOR_TOGGLED"}]],[[],[{"pretty":"property _animated","sym":"#_animated"},{"pretty":"property InspectorView._animated","sym":"InspectorView#_animated"}]],[[],[{"pretty":"property _delayed","sym":"#_delayed"},{"pretty":"property InspectorView._delayed","sym":"InspectorView#_delayed"}]],[[],[{"pretty":"property initialize","sym":"#initialize"},{"pretty":"property InspectorView.initialize","sym":"InspectorView#initialize"}]],[[],[{"pretty":"property el","sym":"#el"},{"pretty":"property InspectorView.el","sym":"InspectorView#el"}]],[[{"pretty":"splitter","sym":"#splitter"}],[{"pretty":"property splitter","sym":"#splitter"},{"pretty":"property InspectorView.splitter","sym":"InspectorView#splitter"}]],[[],[{"pretty":"property el","sym":"#el"},{"pretty":"property InspectorView.el","sym":"InspectorView#el"}]],[[],[{"pretty":"property setAttribute","sym":"#setAttribute"}]],[[],[{"pretty":"property Services","sym":"#Services"}]],[[],[{"pretty":"property prefs","sym":"#prefs"},{"pretty":"property Services.prefs","sym":"Services#prefs"}]],[[],[{"pretty":"property getIntPref","sym":"#getIntPref"}]],[[],[{"pretty":"property button","sym":"#button"},{"pretty":"property InspectorView.button","sym":"InspectorView#button"}]],[[],[{"pretty":"property mixin","sym":"#mixin"}]],[[{"pretty":"ToggleMixin","sym":"#ToggleMixin"}],[{"pretty":"property ToggleMixin","sym":"#ToggleMixin"}]],[[{"pretty":"bindToggle","sym":"#bindToggle"}],[{"pretty":"property bindToggle","sym":"#bindToggle"},{"pretty":"property InspectorView.bindToggle","sym":"InspectorView#bindToggle"}]],[[{"pretty":"hideImmediately","sym":"#hideImmediately"}],[{"pretty":"property hideImmediately","sym":"#hideImmediately"},{"pretty":"property InspectorView.hideImmediately","sym":"InspectorView#hideImmediately"}]],[[{"pretty":"InspectorView._onNodeSelect","sym":"InspectorView#_onNodeSelect"}],[{"pretty":"property _onNodeSelect","sym":"#_onNodeSelect"},{"pretty":"property InspectorView._onNodeSelect","sym":"InspectorView#_onNodeSelect"}]],[[{"pretty":"_onNodeSelect","sym":"#_onNodeSelect"}],[{"pretty":"property _onNodeSelect","sym":"#_onNodeSelect"},{"pretty":"property _onNodeSelect._onNodeSelect","sym":"_onNodeSelect#_onNodeSelect"}]],[[],[{"pretty":"property bind","sym":"#bind"}]],[[{"pretty":"InspectorView._onDestroyNode","sym":"InspectorView#_onDestroyNode"}],[{"pretty":"property _onDestroyNode","sym":"#_onDestroyNode"},{"pretty":"property InspectorView._onDestroyNode","sym":"InspectorView#_onDestroyNode"}]],[[],[{"pretty":"property _onDestroyNode","sym":"#_onDestroyNode"},{"pretty":"property _onDestroyNode._onDestroyNode","sym":"_onDestroyNode#_onDestroyNode"}]],[[],[{"pretty":"property bind","sym":"#bind"}]],[[{"pretty":"InspectorView._onResize","sym":"InspectorView#_onResize"}],[{"pretty":"property _onResize","sym":"#_onResize"},{"pretty":"property InspectorView._onResize","sym":"InspectorView#_onResize"}]],[[],[{"pretty":"property _onResize","sym":"#_onResize"},{"pretty":"property _onResize._onResize","sym":"_onResize#_onResize"}]],[[],[{"pretty":"property bind","sym":"#bind"}]],[[{"pretty":"InspectorView._onCommandClick","sym":"InspectorView#_onCommandClick"}],[{"pretty":"property _onCommandClick","sym":"#_onCommandClick"},{"pretty":"property InspectorView._onCommandClick","sym":"InspectorView#_onCommandClick"}]],[[{"pretty":"_onCommandClick","sym":"#_onCommandClick"}],[{"pretty":"property _onCommandClick","sym":"#_onCommandClick"},{"pretty":"property _onCommandClick._onCommandClick","sym":"_onCommandClick#_onCommandClick"}]],[[],[{"pretty":"property bind","sym":"#bind"}]],[[{"pretty":"splitter","sym":"#splitter"}],[{"pretty":"property splitter","sym":"#splitter"},{"pretty":"property InspectorView.splitter","sym":"InspectorView#splitter"}]],[[],[{"pretty":"property addEventListener","sym":"#addEventListener"}]],[[{"pretty":"InspectorView._onResize","sym":"InspectorView#_onResize"}],[{"pretty":"property _onResize","sym":"#_onResize"},{"pretty":"property InspectorView._onResize","sym":"InspectorView#_onResize"}]],[[],[{"pretty":"property addEventListener","sym":"#addEventListener"},{"pretty":"property $el.addEventListener","sym":"$el#addEventListener"}]],[[{"pretty":"InspectorView._onCommandClick","sym":"InspectorView#_onCommandClick"}],[{"pretty":"property _onCommandClick","sym":"#_onCommandClick"},{"pretty":"property InspectorView._onCommandClick","sym":"InspectorView#_onCommandClick"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property on","sym":"#on"},{"pretty":"property window.on","sym":"window#on"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[{"pretty":"EVENTS.UI_SELECT_NODE","sym":"EVENTS#UI_SELECT_NODE"}],[{"pretty":"property UI_SELECT_NODE","sym":"#UI_SELECT_NODE"},{"pretty":"property EVENTS.UI_SELECT_NODE","sym":"EVENTS#UI_SELECT_NODE"}]],[[{"pretty":"InspectorView._onNodeSelect","sym":"InspectorView#_onNodeSelect"}],[{"pretty":"property _onNodeSelect","sym":"#_onNodeSelect"},{"pretty":"property InspectorView._onNodeSelect","sym":"InspectorView#_onNodeSelect"}]],[[{"pretty":"gAudioNodes","sym":"#gAudioNodes"}],[{"pretty":"property gAudioNodes","sym":"#gAudioNodes"}]],[[],[{"pretty":"property on","sym":"#on"},{"pretty":"property gAudioNodes.on","sym":"gAudioNodes#on"}]],[[{"pretty":"InspectorView._onDestroyNode","sym":"InspectorView#_onDestroyNode"}],[{"pretty":"property _onDestroyNode","sym":"#_onDestroyNode"},{"pretty":"property InspectorView._onDestroyNode","sym":"InspectorView#_onDestroyNode"}]],[[],[{"pretty":"property destroy","sym":"#destroy"},{"pretty":"property InspectorView.destroy","sym":"InspectorView#destroy"}]],[[{"pretty":"unbindToggle","sym":"#unbindToggle"}],[{"pretty":"property unbindToggle","sym":"#unbindToggle"},{"pretty":"property InspectorView.unbindToggle","sym":"InspectorView#unbindToggle"}]],[[{"pretty":"splitter","sym":"#splitter"}],[{"pretty":"property splitter","sym":"#splitter"},{"pretty":"property InspectorView.splitter","sym":"InspectorView#splitter"}]],[[],[{"pretty":"property removeEventListener","sym":"#removeEventListener"}]],[[{"pretty":"InspectorView._onResize","sym":"InspectorView#_onResize"}],[{"pretty":"property _onResize","sym":"#_onResize"},{"pretty":"property InspectorView._onResize","sym":"InspectorView#_onResize"}]],[[],[{"pretty":"property removeEventListener","sym":"#removeEventListener"}]],[[{"pretty":"InspectorView._onCommandClick","sym":"InspectorView#_onCommandClick"}],[{"pretty":"property _onCommandClick","sym":"#_onCommandClick"},{"pretty":"property InspectorView._onCommandClick","sym":"InspectorView#_onCommandClick"}]],[[],[{"pretty":"property removeEventListener","sym":"#removeEventListener"},{"pretty":"property $el.removeEventListener","sym":"$el#removeEventListener"}]],[[{"pretty":"InspectorView._onCommandClick","sym":"InspectorView#_onCommandClick"}],[{"pretty":"property _onCommandClick","sym":"#_onCommandClick"},{"pretty":"property InspectorView._onCommandClick","sym":"InspectorView#_onCommandClick"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property off","sym":"#off"},{"pretty":"property window.off","sym":"window#off"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[{"pretty":"EVENTS.UI_SELECT_NODE","sym":"EVENTS#UI_SELECT_NODE"}],[{"pretty":"property UI_SELECT_NODE","sym":"#UI_SELECT_NODE"},{"pretty":"property EVENTS.UI_SELECT_NODE","sym":"EVENTS#UI_SELECT_NODE"}]],[[{"pretty":"InspectorView._onNodeSelect","sym":"InspectorView#_onNodeSelect"}],[{"pretty":"property _onNodeSelect","sym":"#_onNodeSelect"},{"pretty":"property InspectorView._onNodeSelect","sym":"InspectorView#_onNodeSelect"}]],[[{"pretty":"gAudioNodes","sym":"#gAudioNodes"}],[{"pretty":"property gAudioNodes","sym":"#gAudioNodes"}]],[[],[{"pretty":"property off","sym":"#off"},{"pretty":"property gAudioNodes.off","sym":"gAudioNodes#off"}]],[[{"pretty":"InspectorView._onDestroyNode","sym":"InspectorView#_onDestroyNode"}],[{"pretty":"property _onDestroyNode","sym":"#_onDestroyNode"},{"pretty":"property InspectorView._onDestroyNode","sym":"InspectorView#_onDestroyNode"}]],[[],[{"pretty":"property el","sym":"#el"},{"pretty":"property InspectorView.el","sym":"InspectorView#el"}]],[[],[{"pretty":"property button","sym":"#button"},{"pretty":"property InspectorView.button","sym":"InspectorView#button"}]],[[{"pretty":"splitter","sym":"#splitter"}],[{"pretty":"property splitter","sym":"#splitter"},{"pretty":"property InspectorView.splitter","sym":"InspectorView#splitter"}]],[[],[{"pretty":"property setCurrentAudioNode","sym":"#setCurrentAudioNode"},{"pretty":"property InspectorView.setCurrentAudioNode","sym":"InspectorView#setCurrentAudioNode"}]],[[{"pretty":"InspectorView._currentNode","sym":"InspectorView#_currentNode"}],[{"pretty":"property _currentNode","sym":"#_currentNode"},{"pretty":"property InspectorView._currentNode","sym":"InspectorView#_currentNode"}]],[[],[{"pretty":"property removeAttribute","sym":"#removeAttribute"}]],[[],[{"pretty":"property setAttribute","sym":"#setAttribute"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property emit","sym":"#emit"},{"pretty":"property window.emit","sym":"window#emit"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[{"pretty":"EVENTS.UI_INSPECTOR_NODE_SET","sym":"EVENTS#UI_INSPECTOR_NODE_SET"}],[{"pretty":"property UI_INSPECTOR_NODE_SET","sym":"#UI_INSPECTOR_NODE_SET"},{"pretty":"property EVENTS.UI_INSPECTOR_NODE_SET","sym":"EVENTS#UI_INSPECTOR_NODE_SET"}]],[[],[{"pretty":"property setAttribute","sym":"#setAttribute"}]],[[],[{"pretty":"property removeAttribute","sym":"#removeAttribute"}]],[[{"pretty":"InspectorView._buildToolbar","sym":"InspectorView#_buildToolbar"}],[{"pretty":"property _buildToolbar","sym":"#_buildToolbar"},{"pretty":"property InspectorView._buildToolbar","sym":"InspectorView#_buildToolbar"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property emit","sym":"#emit"},{"pretty":"property window.emit","sym":"window#emit"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[{"pretty":"EVENTS.UI_INSPECTOR_NODE_SET","sym":"EVENTS#UI_INSPECTOR_NODE_SET"}],[{"pretty":"property UI_INSPECTOR_NODE_SET","sym":"#UI_INSPECTOR_NODE_SET"},{"pretty":"property EVENTS.UI_INSPECTOR_NODE_SET","sym":"EVENTS#UI_INSPECTOR_NODE_SET"}]],[[{"pretty":"InspectorView._currentNode","sym":"InspectorView#_currentNode"}],[{"pretty":"property _currentNode","sym":"#_currentNode"},{"pretty":"property InspectorView._currentNode","sym":"InspectorView#_currentNode"}]],[[],[{"pretty":"property id","sym":"#id"}]],[[],[{"pretty":"property getCurrentAudioNode","sym":"#getCurrentAudioNode"},{"pretty":"property InspectorView.getCurrentAudioNode","sym":"InspectorView#getCurrentAudioNode"}]],[[{"pretty":"InspectorView._currentNode","sym":"InspectorView#_currentNode"}],[{"pretty":"property _currentNode","sym":"#_currentNode"},{"pretty":"property InspectorView._currentNode","sym":"InspectorView#_currentNode"}]],[[],[{"pretty":"property resetUI","sym":"#resetUI"},{"pretty":"property InspectorView.resetUI","sym":"InspectorView#resetUI"}]],[[{"pretty":"InspectorView.setCurrentAudioNode","sym":"InspectorView#setCurrentAudioNode"}],[{"pretty":"property setCurrentAudioNode","sym":"#setCurrentAudioNode"},{"pretty":"property InspectorView.setCurrentAudioNode","sym":"InspectorView#setCurrentAudioNode"}]],[[{"pretty":"hideImmediately","sym":"#hideImmediately"}],[{"pretty":"property hideImmediately","sym":"#hideImmediately"},{"pretty":"property InspectorView.hideImmediately","sym":"InspectorView#hideImmediately"}]],[[],[{"pretty":"property _buildToolbar","sym":"#_buildToolbar"},{"pretty":"property InspectorView._buildToolbar","sym":"InspectorView#_buildToolbar"}]],[[{"pretty":"InspectorView.getCurrentAudioNode","sym":"InspectorView#getCurrentAudioNode"}],[{"pretty":"property getCurrentAudioNode","sym":"#getCurrentAudioNode"},{"pretty":"property InspectorView.getCurrentAudioNode","sym":"InspectorView#getCurrentAudioNode"}]],[[{"pretty":"bypassable","sym":"#bypassable"}],[{"pretty":"property bypassable","sym":"#bypassable"},{"pretty":"property node.bypassable","sym":"node#bypassable"}]],[[],[{"pretty":"property isBypassed","sym":"#isBypassed"},{"pretty":"property node.isBypassed","sym":"node#isBypassed"}]],[[],[{"pretty":"property setAttribute","sym":"#setAttribute"},{"pretty":"property button.setAttribute","sym":"button#setAttribute"}]],[[],[{"pretty":"property removeAttribute","sym":"#removeAttribute"},{"pretty":"property button.removeAttribute","sym":"button#removeAttribute"}]],[[],[{"pretty":"property removeAttribute","sym":"#removeAttribute"},{"pretty":"property button.removeAttribute","sym":"button#removeAttribute"}]],[[],[{"pretty":"property setAttribute","sym":"#setAttribute"},{"pretty":"property button.setAttribute","sym":"button#setAttribute"}]],[[],[{"pretty":"property _onNodeSelect","sym":"#_onNodeSelect"},{"pretty":"property InspectorView._onNodeSelect","sym":"InspectorView#_onNodeSelect"}]],[[{"pretty":"InspectorView.setCurrentAudioNode","sym":"InspectorView#setCurrentAudioNode"}],[{"pretty":"property setCurrentAudioNode","sym":"#setCurrentAudioNode"},{"pretty":"property InspectorView.setCurrentAudioNode","sym":"InspectorView#setCurrentAudioNode"}]],[[{"pretty":"gAudioNodes","sym":"#gAudioNodes"}],[{"pretty":"property gAudioNodes","sym":"#gAudioNodes"}]],[[],[{"pretty":"property show","sym":"#show"},{"pretty":"property InspectorView.show","sym":"InspectorView#show"}]],[[],[{"pretty":"property _onResize","sym":"#_onResize"},{"pretty":"property InspectorView._onResize","sym":"InspectorView#_onResize"}]],[[],[{"pretty":"property el","sym":"#el"},{"pretty":"property InspectorView.el","sym":"InspectorView#el"}]],[[],[{"pretty":"property getAttribute","sym":"#getAttribute"}]],[[{"pretty":"MIN_INSPECTOR_WIDTH","sym":"#MIN_INSPECTOR_WIDTH"}],[{"pretty":"property MIN_INSPECTOR_WIDTH","sym":"#MIN_INSPECTOR_WIDTH"}]],[[],[{"pretty":"property el","sym":"#el"},{"pretty":"property InspectorView.el","sym":"InspectorView#el"}]],[[],[{"pretty":"property setAttribute","sym":"#setAttribute"}]],[[{"pretty":"MIN_INSPECTOR_WIDTH","sym":"#MIN_INSPECTOR_WIDTH"}],[{"pretty":"property MIN_INSPECTOR_WIDTH","sym":"#MIN_INSPECTOR_WIDTH"}]],[[],[{"pretty":"property Services","sym":"#Services"}]],[[],[{"pretty":"property prefs","sym":"#prefs"},{"pretty":"property Services.prefs","sym":"Services#prefs"}]],[[],[{"pretty":"property setIntPref","sym":"#setIntPref"}]],[[],[{"pretty":"property el","sym":"#el"},{"pretty":"property InspectorView.el","sym":"InspectorView#el"}]],[[],[{"pretty":"property getAttribute","sym":"#getAttribute"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property emit","sym":"#emit"},{"pretty":"property window.emit","sym":"window#emit"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[{"pretty":"EVENTS.UI_INSPECTOR_RESIZE","sym":"EVENTS#UI_INSPECTOR_RESIZE"}],[{"pretty":"property UI_INSPECTOR_RESIZE","sym":"#UI_INSPECTOR_RESIZE"},{"pretty":"property EVENTS.UI_INSPECTOR_RESIZE","sym":"EVENTS#UI_INSPECTOR_RESIZE"}]],[[],[{"pretty":"property _onDestroyNode","sym":"#_onDestroyNode"},{"pretty":"property InspectorView._onDestroyNode","sym":"InspectorView#_onDestroyNode"}]],[[{"pretty":"InspectorView._currentNode","sym":"InspectorView#_currentNode"}],[{"pretty":"property _currentNode","sym":"#_currentNode"},{"pretty":"property InspectorView._currentNode","sym":"InspectorView#_currentNode"}]],[[{"pretty":"InspectorView._currentNode","sym":"InspectorView#_currentNode"}],[{"pretty":"property _currentNode","sym":"#_currentNode"},{"pretty":"property InspectorView._currentNode","sym":"InspectorView#_currentNode"}]],[[],[{"pretty":"property id","sym":"#id"}]],[[],[{"pretty":"property id","sym":"#id"},{"pretty":"property node.id","sym":"node#id"}]],[[{"pretty":"InspectorView.setCurrentAudioNode","sym":"InspectorView#setCurrentAudioNode"}],[{"pretty":"property setCurrentAudioNode","sym":"#setCurrentAudioNode"},{"pretty":"property InspectorView.setCurrentAudioNode","sym":"InspectorView#setCurrentAudioNode"}]],[[],[{"pretty":"property _onCommandClick","sym":"#_onCommandClick"},{"pretty":"property InspectorView._onCommandClick","sym":"InspectorView#_onCommandClick"}]],[[{"pretty":"InspectorView.getCurrentAudioNode","sym":"InspectorView#getCurrentAudioNode"}],[{"pretty":"property getCurrentAudioNode","sym":"#getCurrentAudioNode"},{"pretty":"property InspectorView.getCurrentAudioNode","sym":"InspectorView#getCurrentAudioNode"}]],[[{"pretty":"e.target","sym":"e#target"}],[{"pretty":"property target","sym":"#target"},{"pretty":"property e.target","sym":"e#target"}]],[[],[{"pretty":"property getAttribute","sym":"#getAttribute"},{"pretty":"property button.getAttribute","sym":"button#getAttribute"}]],[[],[{"pretty":"property getAttribute","sym":"#getAttribute"},{"pretty":"property button.getAttribute","sym":"button#getAttribute"}]],[[],[{"pretty":"property getAttribute","sym":"#getAttribute"},{"pretty":"property button.getAttribute","sym":"button#getAttribute"}]],[[],[{"pretty":"property removeAttribute","sym":"#removeAttribute"},{"pretty":"property button.removeAttribute","sym":"button#removeAttribute"}]],[[],[{"pretty":"property bypass","sym":"#bypass"},{"pretty":"property node.bypass","sym":"node#bypass"}]],[[],[{"pretty":"property setAttribute","sym":"#setAttribute"},{"pretty":"property button.setAttribute","sym":"button#setAttribute"}]],[[],[{"pretty":"property bypass","sym":"#bypass"},{"pretty":"property node.bypass","sym":"node#bypass"}]]];</script>
    </div>
  <div id="foot" class="footer">
    This page was generated by Searchfox <span class="pretty-date" data-datetime="Wed, 13 Feb 2019 15:28:43 +0000"></span>.
  </div>
  <span id="data" data-root="/" data-search="/mozilla-central/search" data-tree="mozilla-central" data-path="devtools/client/webaudioeditor/views/inspector.js"></span>
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
