<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8" />
  <link href="/static/icons/search.png" rel="shortcut icon">
  <title>utils.js - mozsearch</title>
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
<div class="breadcrumbs"><a href="/mozilla-central/source/">mozilla-central</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools">devtools</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client">client</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor">webaudioeditor</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/views">views</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/views/utils.js">utils.js</a></div>
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
  <a href="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/views/utils.js" title="Permalink" class="icon" data-update-link="true" data-link="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/views/utils.js">Permalink <span class="accel">Y</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/log/tip/devtools/client/webaudioeditor/views/utils.js" title="Log" class="icon">Log <span class="accel">L</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/raw-file/tip/devtools/client/webaudioeditor/views/utils.js" title="Raw" class="icon">Raw <span class="accel">R</span></a>
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
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#1" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l2" class="line-number">2
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#2" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l3" class="line-number">3
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#3" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l4" class="line-number">4
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#4" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l5" class="line-number">5
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#5" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l6" class="line-number">6
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#6" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l7" class="line-number">7
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#7" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l8" class="line-number">8
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#8" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l9" class="line-number">9
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#9" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l10" class="line-number">10
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#10" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l11" class="line-number">11
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#11" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l12" class="line-number">12
<div class="blame-strip c2" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#12" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l13" class="line-number">13
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#13" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l14" class="line-number">14
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#14" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l15" class="line-number">15
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#15" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l16" class="line-number">16
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#16" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l17" class="line-number">17
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#16" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l18" class="line-number">18
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#17" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l19" class="line-number">19
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#19" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l20" class="line-number">20
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#19" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l21" class="line-number">21
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#21" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l22" class="line-number">22
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#22" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l23" class="line-number">23
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#22" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l24" class="line-number">24
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#23" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l25" class="line-number">25
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#24" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l26" class="line-number">26
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#25" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l27" class="line-number">27
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#26" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l28" class="line-number">28
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l29" class="line-number">29
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#28" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l30" class="line-number">30
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#29" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l31" class="line-number">31
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#30" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l32" class="line-number">32
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#31" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l33" class="line-number">33
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#32" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l34" class="line-number">34
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#33" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l35" class="line-number">35
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#34" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l36" class="line-number">36
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#35" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l37" class="line-number">37
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#36" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l38" class="line-number">38
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#37" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l39" class="line-number">39
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#38" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l40" class="line-number">40
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#39" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l41" class="line-number">41
<div class="blame-strip c2" data-blame="64db2267cf9899840b44ce4116c2dd94aa0c3d8e#browser/devtools/webaudioeditor/views/utils.js#40" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l42" class="line-number">42
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#41" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l43" class="line-number">43
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#43" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l44" class="line-number">44
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#43" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l45" class="line-number">45
<div class="blame-strip c2" data-blame="85611a7b6dffaca81fbaf61a0e301f071690bf73#%#44" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l46" class="line-number">46
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#45" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l47" class="line-number">47
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#46" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l48" class="line-number">48
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#48" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l49" class="line-number">49
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#48" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l50" class="line-number">50
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#49" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l51" class="line-number">51
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#50" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l52" class="line-number">52
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#52" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l53" class="line-number">53
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#52" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l54" class="line-number">54
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#53" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l55" class="line-number">55
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#54" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l56" class="line-number">56
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#56" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l57" class="line-number">57
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#56" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l58" class="line-number">58
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#57" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l59" class="line-number">59
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#58" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l60" class="line-number">60
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#60" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l61" class="line-number">61
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#60" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l62" class="line-number">62
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#61" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l63" class="line-number">63
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#62" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l64" class="line-number">64
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#63" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l65" class="line-number">65
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#64" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l66" class="line-number">66
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#65" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l67" class="line-number">67
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#66" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l68" class="line-number">68
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#68" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l69" class="line-number">69
<div class="blame-strip c1" data-blame="86677d02a2f5938f2b1a4a97dca018ea33c79ee4#%#68" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l70" class="line-number">70
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#69" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l71" class="line-number">71
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#70" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l72" class="line-number">72
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#71" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l73" class="line-number">73
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#72" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l74" class="line-number">74
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#73" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l75" class="line-number">75
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#74" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l76" class="line-number">76
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#75" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l77" class="line-number">77
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#76" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l78" class="line-number">78
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#77" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l79" class="line-number">79
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#78" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l80" class="line-number">80
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#79" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l81" class="line-number">81
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#81" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l82" class="line-number">82
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#82" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l83" class="line-number">83
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#82" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l84" class="line-number">84
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#83" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l85" class="line-number">85
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#84" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l86" class="line-number">86
<div class="blame-strip c2" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#86" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l87" class="line-number">87
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#86" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l88" class="line-number">88
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#87" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l89" class="line-number">89
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#88" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l90" class="line-number">90
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#89" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l91" class="line-number">91
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#90" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l92" class="line-number">92
<div class="blame-strip c2" data-blame="86677d02a2f5938f2b1a4a97dca018ea33c79ee4#%#91" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l93" class="line-number">93
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#92" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l94" class="line-number">94
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#94" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l95" class="line-number">95
<div class="blame-strip c1" data-blame="86677d02a2f5938f2b1a4a97dca018ea33c79ee4#%#95" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l96" class="line-number">96
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#96" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l97" class="line-number">97
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#97" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l98" class="line-number">98
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#98" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l99" class="line-number">99
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#99" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l100" class="line-number">100
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#100" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l101" class="line-number">101
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/utils.js#101" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l102" class="line-number">102
<div class="blame-strip c1" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#102" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l103" class="line-number">103
<div class="blame-strip c2" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#103" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
      </td>
      <td class="code">
<pre><code id="line-1" aria-labelledby="1"><span class="syn_comment" >/* This Source Code Form is subject to the terms of the Mozilla Public</span>
</code><code id="line-2" aria-labelledby="2"><span class="syn_comment" > * License, v. 2.0. If a copy of the MPL was not distributed with this file,</span>
</code><code id="line-3" aria-labelledby="3"><span class="syn_comment" > * You can obtain one at <a href="http://mozilla.org/MPL/2.0/">http://mozilla.org/MPL/2.0/</a>. */</span>
</code><code id="line-4" aria-labelledby="4"><span class="syn_string" >"use strict"</span>;
</code><code id="line-5" aria-labelledby="5">
</code><code id="line-6" aria-labelledby="6"><span class="syn_comment" >/**</span>
</code><code id="line-7" aria-labelledby="7"><span class="syn_comment" > * Takes an element in an SVG graph and iterates over</span>
</code><code id="line-8" aria-labelledby="8"><span class="syn_comment" > * ancestors until it finds the graph node container. If not found,</span>
</code><code id="line-9" aria-labelledby="9"><span class="syn_comment" > * returns null.</span>
</code><code id="line-10" aria-labelledby="10"><span class="syn_comment" > */</span>
</code><code id="line-11" aria-labelledby="11">
</code><code id="line-12" aria-labelledby="12"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#findGraphNodeParent" data-i="0" >findGraphNodeParent</span>(<span data-symbols="7383-0" >el</span>) {
</code><code id="line-13" aria-labelledby="13">  <span class="syn_comment" >// Some targets may not contain `classList` property</span>
</code><code id="line-14" aria-labelledby="14">  <span class="syn_reserved" >if</span> (!<span data-symbols="7383-0" >el</span>.<span data-symbols="#classList,el#classList" data-i="1" >classList</span>) {
</code><code id="line-15" aria-labelledby="15">    <span class="syn_reserved" >return</span> <span class="syn_reserved" >null</span>;
</code><code id="line-16" aria-labelledby="16">  }
</code><code id="line-17" aria-labelledby="17">
</code><code id="line-18" aria-labelledby="18">  <span class="syn_reserved" >while</span> (!<span data-symbols="7383-0" >el</span>.<span data-symbols="#classList,el#classList" data-i="2" >classList</span>.<span data-symbols="#contains" data-i="3" >contains</span>(<span class="syn_string" >"nodes"</span>)) {
</code><code id="line-19" aria-labelledby="19">    <span class="syn_reserved" >if</span> (<span data-symbols="7383-0" >el</span>.<span data-symbols="#classList,el#classList" data-i="4" >classList</span>.<span data-symbols="#contains" data-i="5" >contains</span>(<span class="syn_string" >"audionode"</span>)) {
</code><code id="line-20" aria-labelledby="20">      <span class="syn_reserved" >return</span> <span data-symbols="7383-0" >el</span>;
</code><code id="line-21" aria-labelledby="21">    }
</code><code id="line-22" aria-labelledby="22">    <span data-symbols="7383-0" >el</span> = <span data-symbols="7383-0" >el</span>.<span data-symbols="#parentNode,el#parentNode" data-i="6" >parentNode</span>;
</code><code id="line-23" aria-labelledby="23">  }
</code><code id="line-24" aria-labelledby="24">  <span class="syn_reserved" >return</span> <span class="syn_reserved" >null</span>;
</code><code id="line-25" aria-labelledby="25">}
</code><code id="line-26" aria-labelledby="26">
</code><code id="line-27" aria-labelledby="27"><span class="syn_comment" >/**</span>
</code><code id="line-28" aria-labelledby="28"><span class="syn_comment" > * Object for use with `mix` into a view.</span>
</code><code id="line-29" aria-labelledby="29"><span class="syn_comment" > * Must have the following properties defined on the view:</span>
</code><code id="line-30" aria-labelledby="30"><span class="syn_comment" > * - `el`</span>
</code><code id="line-31" aria-labelledby="31"><span class="syn_comment" > * - `button`</span>
</code><code id="line-32" aria-labelledby="32"><span class="syn_comment" > * - `_collapseString`</span>
</code><code id="line-33" aria-labelledby="33"><span class="syn_comment" > * - `_expandString`</span>
</code><code id="line-34" aria-labelledby="34"><span class="syn_comment" > * - `_toggleEvent`</span>
</code><code id="line-35" aria-labelledby="35"><span class="syn_comment" > *</span>
</code><code id="line-36" aria-labelledby="36"><span class="syn_comment" > * Optional properties on the view can be defined to specify default</span>
</code><code id="line-37" aria-labelledby="37"><span class="syn_comment" > * visibility options.</span>
</code><code id="line-38" aria-labelledby="38"><span class="syn_comment" > * - `_animated`</span>
</code><code id="line-39" aria-labelledby="39"><span class="syn_comment" > * - `_delayed`</span>
</code><code id="line-40" aria-labelledby="40"><span class="syn_comment" > */</span>
</code><code id="line-41" aria-labelledby="41"><span class="syn_reserved" >var</span> <span class="syn_def" data-symbols="#ToggleMixin" data-i="7" >ToggleMixin</span> = {
</code><code id="line-42" aria-labelledby="42">
</code><code id="line-43" aria-labelledby="43">  <span class="syn_def syn_def" data-symbols="#bindToggle,ToggleMixin#bindToggle" data-i="8" >bindToggle</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-44" aria-labelledby="44">    <span class="syn_reserved" >this</span>.<span data-symbols="#_onToggle,ToggleMixin#_onToggle" data-i="9" >_onToggle</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_onToggle,_onToggle#_onToggle" data-i="10" >_onToggle</span>.<span data-symbols="#bind" data-i="11" >bind</span>(<span class="syn_reserved" >this</span>);
</code><code id="line-45" aria-labelledby="45">    <span class="syn_reserved" >this</span>.<span data-symbols="#button,ToggleMixin#button" data-i="12" >button</span>.<span data-symbols="#addEventListener" data-i="13" >addEventListener</span>(<span class="syn_string" >"mousedown"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onToggle,ToggleMixin#_onToggle" data-i="14" >_onToggle</span>);
</code><code id="line-46" aria-labelledby="46">  },
</code><code id="line-47" aria-labelledby="47">
</code><code id="line-48" aria-labelledby="48">  <span class="syn_def syn_def" data-symbols="#unbindToggle,ToggleMixin#unbindToggle" data-i="15" >unbindToggle</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-49" aria-labelledby="49">    <span class="syn_reserved" >this</span>.<span data-symbols="#button,ToggleMixin#button" data-i="16" >button</span>.<span data-symbols="#removeEventListener" data-i="17" >removeEventListener</span>(<span class="syn_string" >"mousedown"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onToggle,ToggleMixin#_onToggle" data-i="18" >_onToggle</span>);
</code><code id="line-50" aria-labelledby="50">  },
</code><code id="line-51" aria-labelledby="51">
</code><code id="line-52" aria-labelledby="52">  <span class="syn_def syn_def" data-symbols="#show,ToggleMixin#show" data-i="19" >show</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-53" aria-labelledby="53">    <span class="syn_reserved" >this</span>.<span data-symbols="#_viewController,ToggleMixin#_viewController" data-i="20" >_viewController</span>({ <span class="syn_def syn_def" data-symbols="#visible,ToggleMixin#visible" data-i="21" >visible</span>: <span class="syn_reserved" >true</span> });
</code><code id="line-54" aria-labelledby="54">  },
</code><code id="line-55" aria-labelledby="55">
</code><code id="line-56" aria-labelledby="56">  <span class="syn_def syn_def" data-symbols="#hide,ToggleMixin#hide" data-i="22" >hide</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-57" aria-labelledby="57">    <span class="syn_reserved" >this</span>.<span data-symbols="#_viewController,ToggleMixin#_viewController" data-i="23" >_viewController</span>({ <span class="syn_def syn_def" data-symbols="#visible,ToggleMixin#visible" data-i="24" >visible</span>: <span class="syn_reserved" >false</span> });
</code><code id="line-58" aria-labelledby="58">  },
</code><code id="line-59" aria-labelledby="59">
</code><code id="line-60" aria-labelledby="60">  <span class="syn_def syn_def" data-symbols="#hideImmediately,ToggleMixin#hideImmediately" data-i="25" >hideImmediately</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-61" aria-labelledby="61">    <span class="syn_reserved" >this</span>.<span data-symbols="#_viewController,ToggleMixin#_viewController" data-i="26" >_viewController</span>({ <span class="syn_def syn_def" data-symbols="#visible,ToggleMixin#visible" data-i="27" >visible</span>: <span class="syn_reserved" >false</span>, <span class="syn_def syn_def" data-symbols="#delayed,ToggleMixin#delayed" data-i="28" >delayed</span>: <span class="syn_reserved" >false</span>, <span class="syn_def syn_def" data-symbols="#animated,ToggleMixin#animated" data-i="29" >animated</span>: <span class="syn_reserved" >false</span> });
</code><code id="line-62" aria-labelledby="62">  },
</code><code id="line-63" aria-labelledby="63">
</code><code id="line-64" aria-labelledby="64">  <span class="syn_comment" >/**</span>
</code><code id="line-65" aria-labelledby="65"><span class="syn_comment" >   * Returns a boolean indicating whether or not the view.</span>
</code><code id="line-66" aria-labelledby="66"><span class="syn_comment" >   * is currently being shown.</span>
</code><code id="line-67" aria-labelledby="67"><span class="syn_comment" >   */</span>
</code><code id="line-68" aria-labelledby="68">  <span class="syn_def syn_def" data-symbols="#isVisible,ToggleMixin#isVisible" data-i="30" >isVisible</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-69" aria-labelledby="69">    <span class="syn_reserved" >return</span> !<span class="syn_reserved" >this</span>.<span data-symbols="#el,ToggleMixin#el" data-i="31" >el</span>.<span data-symbols="#classList" data-i="32" >classList</span>.<span data-symbols="#contains" data-i="33" >contains</span>(<span class="syn_string" >"pane-collapsed"</span>);
</code><code id="line-70" aria-labelledby="70">  },
</code><code id="line-71" aria-labelledby="71">
</code><code id="line-72" aria-labelledby="72">  <span class="syn_comment" >/**</span>
</code><code id="line-73" aria-labelledby="73"><span class="syn_comment" >   * Toggles the visibility of the view.</span>
</code><code id="line-74" aria-labelledby="74"><span class="syn_comment" >   *</span>
</code><code id="line-75" aria-labelledby="75"><span class="syn_comment" >   * @param object visible</span>
</code><code id="line-76" aria-labelledby="76"><span class="syn_comment" >   *        - visible: boolean indicating whether the panel should be shown or not</span>
</code><code id="line-77" aria-labelledby="77"><span class="syn_comment" >   *        - animated: boolean indiciating whether the pane should be animated</span>
</code><code id="line-78" aria-labelledby="78"><span class="syn_comment" >   *        - delayed: boolean indicating whether the pane's opening should wait</span>
</code><code id="line-79" aria-labelledby="79"><span class="syn_comment" >   *                   a few cycles or not</span>
</code><code id="line-80" aria-labelledby="80"><span class="syn_comment" >   */</span>
</code><code id="line-81" aria-labelledby="81">  <span class="syn_def syn_def" data-symbols="#_viewController,ToggleMixin#_viewController" data-i="34" >_viewController</span>: <span class="syn_reserved" >function</span>({ <span data-symbols="7383-1" >visible</span>, <span data-symbols="7383-2" >animated</span>, <span data-symbols="7383-3" >delayed</span> }) {
</code><code id="line-82" aria-labelledby="82">    <span class="syn_reserved" >const</span> <span data-symbols="7383-4" >flags</span> = {
</code><code id="line-83" aria-labelledby="83">      <span class="syn_def syn_def" data-symbols="#visible,flags#visible" data-i="35" >visible</span>: <span data-symbols="7383-1" >visible</span>,
</code><code id="line-84" aria-labelledby="84">      <span class="syn_def syn_def" data-symbols="#animated,flags#animated" data-i="36" >animated</span>: <span data-symbols="7383-2" >animated</span> != <span class="syn_reserved" >null</span> ? <span data-symbols="7383-2" >animated</span> : !!<span class="syn_reserved" >this</span>.<span data-symbols="#_animated,flags#_animated" data-i="37" >_animated</span>,
</code><code id="line-85" aria-labelledby="85">      <span class="syn_def syn_def" data-symbols="#delayed,flags#delayed" data-i="38" >delayed</span>: <span data-symbols="7383-3" >delayed</span> != <span class="syn_reserved" >null</span> ? <span data-symbols="7383-3" >delayed</span> : !!<span class="syn_reserved" >this</span>.<span data-symbols="#_delayed,flags#_delayed" data-i="39" >_delayed</span>,
</code><code id="line-86" aria-labelledby="86">      <span class="syn_def syn_def" data-symbols="#callback,flags#callback" data-i="40" >callback</span>: () => <span data-symbols="#window" data-i="41" >window</span>.<span data-symbols="#emit,window#emit" data-i="42" >emit</span>(<span class="syn_reserved" >this</span>.<span data-symbols="#_toggleEvent,flags#_toggleEvent" data-i="43" >_toggleEvent</span>, <span data-symbols="7383-1" >visible</span>),
</code><code id="line-87" aria-labelledby="87">    };
</code><code id="line-88" aria-labelledby="88">
</code><code id="line-89" aria-labelledby="89">    <span data-symbols="#ViewHelpers" data-i="44" >ViewHelpers</span>.<span data-symbols="#togglePane,ViewHelpers#togglePane" data-i="45" >togglePane</span>(<span data-symbols="7383-4" >flags</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#el,ToggleMixin#el" data-i="46" >el</span>);
</code><code id="line-90" aria-labelledby="90">
</code><code id="line-91" aria-labelledby="91">    <span class="syn_reserved" >if</span> (<span data-symbols="7383-4" >flags</span>.<span data-symbols="#visible,flags#visible" data-i="47" >visible</span>) {
</code><code id="line-92" aria-labelledby="92">      <span class="syn_reserved" >this</span>.<span data-symbols="#button,ToggleMixin#button" data-i="48" >button</span>.<span data-symbols="#classList" data-i="49" >classList</span>.<span data-symbols="#remove" data-i="50" >remove</span>(<span class="syn_string" >"pane-collapsed"</span>);
</code><code id="line-93" aria-labelledby="93">      <span class="syn_reserved" >this</span>.<span data-symbols="#button,ToggleMixin#button" data-i="51" >button</span>.<span data-symbols="#setAttribute" data-i="52" >setAttribute</span>(<span class="syn_string" >"tooltiptext"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_collapseString,ToggleMixin#_collapseString" data-i="53" >_collapseString</span>);
</code><code id="line-94" aria-labelledby="94">    } <span class="syn_reserved" >else</span> {
</code><code id="line-95" aria-labelledby="95">      <span class="syn_reserved" >this</span>.<span data-symbols="#button,ToggleMixin#button" data-i="54" >button</span>.<span data-symbols="#classList" data-i="55" >classList</span>.<span data-symbols="#add" data-i="56" >add</span>(<span class="syn_string" >"pane-collapsed"</span>);
</code><code id="line-96" aria-labelledby="96">      <span class="syn_reserved" >this</span>.<span data-symbols="#button,ToggleMixin#button" data-i="57" >button</span>.<span data-symbols="#setAttribute" data-i="58" >setAttribute</span>(<span class="syn_string" >"tooltiptext"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_expandString,ToggleMixin#_expandString" data-i="59" >_expandString</span>);
</code><code id="line-97" aria-labelledby="97">    }
</code><code id="line-98" aria-labelledby="98">  },
</code><code id="line-99" aria-labelledby="99">
</code><code id="line-100" aria-labelledby="100">  <span class="syn_def syn_def" data-symbols="#_onToggle,ToggleMixin#_onToggle" data-i="60" >_onToggle</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-101" aria-labelledby="101">    <span class="syn_reserved" >this</span>.<span data-symbols="#_viewController,ToggleMixin#_viewController" data-i="61" >_viewController</span>({ <span class="syn_def syn_def" data-symbols="#visible,ToggleMixin#visible" data-i="62" >visible</span>: !<span class="syn_reserved" >this</span>.<span data-symbols="#isVisible,ToggleMixin#isVisible" data-i="63" >isVisible</span>() });
</code><code id="line-102" aria-labelledby="102">  },
</code><code id="line-103" aria-labelledby="103">};
</code></pre>      </td>
    </tr>
  </tbody>
</table>
<script>var ANALYSIS_DATA = [[[],[{"pretty":"property findGraphNodeParent","sym":"#findGraphNodeParent"}]],[[],[{"pretty":"property classList","sym":"#classList"},{"pretty":"property el.classList","sym":"el#classList"}]],[[],[{"pretty":"property classList","sym":"#classList"},{"pretty":"property el.classList","sym":"el#classList"}]],[[],[{"pretty":"property contains","sym":"#contains"}]],[[],[{"pretty":"property classList","sym":"#classList"},{"pretty":"property el.classList","sym":"el#classList"}]],[[],[{"pretty":"property contains","sym":"#contains"}]],[[],[{"pretty":"property parentNode","sym":"#parentNode"},{"pretty":"property el.parentNode","sym":"el#parentNode"}]],[[],[{"pretty":"property ToggleMixin","sym":"#ToggleMixin"}]],[[],[{"pretty":"property bindToggle","sym":"#bindToggle"},{"pretty":"property ToggleMixin.bindToggle","sym":"ToggleMixin#bindToggle"}]],[[{"pretty":"ToggleMixin._onToggle","sym":"ToggleMixin#_onToggle"}],[{"pretty":"property _onToggle","sym":"#_onToggle"},{"pretty":"property ToggleMixin._onToggle","sym":"ToggleMixin#_onToggle"}]],[[],[{"pretty":"property _onToggle","sym":"#_onToggle"},{"pretty":"property _onToggle._onToggle","sym":"_onToggle#_onToggle"}]],[[],[{"pretty":"property bind","sym":"#bind"}]],[[],[{"pretty":"property button","sym":"#button"},{"pretty":"property ToggleMixin.button","sym":"ToggleMixin#button"}]],[[],[{"pretty":"property addEventListener","sym":"#addEventListener"}]],[[{"pretty":"ToggleMixin._onToggle","sym":"ToggleMixin#_onToggle"}],[{"pretty":"property _onToggle","sym":"#_onToggle"},{"pretty":"property ToggleMixin._onToggle","sym":"ToggleMixin#_onToggle"}]],[[],[{"pretty":"property unbindToggle","sym":"#unbindToggle"},{"pretty":"property ToggleMixin.unbindToggle","sym":"ToggleMixin#unbindToggle"}]],[[],[{"pretty":"property button","sym":"#button"},{"pretty":"property ToggleMixin.button","sym":"ToggleMixin#button"}]],[[],[{"pretty":"property removeEventListener","sym":"#removeEventListener"}]],[[{"pretty":"ToggleMixin._onToggle","sym":"ToggleMixin#_onToggle"}],[{"pretty":"property _onToggle","sym":"#_onToggle"},{"pretty":"property ToggleMixin._onToggle","sym":"ToggleMixin#_onToggle"}]],[[],[{"pretty":"property show","sym":"#show"},{"pretty":"property ToggleMixin.show","sym":"ToggleMixin#show"}]],[[{"pretty":"ToggleMixin._viewController","sym":"ToggleMixin#_viewController"}],[{"pretty":"property _viewController","sym":"#_viewController"},{"pretty":"property ToggleMixin._viewController","sym":"ToggleMixin#_viewController"}]],[[],[{"pretty":"property visible","sym":"#visible"},{"pretty":"property ToggleMixin.visible","sym":"ToggleMixin#visible"}]],[[],[{"pretty":"property hide","sym":"#hide"},{"pretty":"property ToggleMixin.hide","sym":"ToggleMixin#hide"}]],[[{"pretty":"ToggleMixin._viewController","sym":"ToggleMixin#_viewController"}],[{"pretty":"property _viewController","sym":"#_viewController"},{"pretty":"property ToggleMixin._viewController","sym":"ToggleMixin#_viewController"}]],[[],[{"pretty":"property visible","sym":"#visible"},{"pretty":"property ToggleMixin.visible","sym":"ToggleMixin#visible"}]],[[],[{"pretty":"property hideImmediately","sym":"#hideImmediately"},{"pretty":"property ToggleMixin.hideImmediately","sym":"ToggleMixin#hideImmediately"}]],[[{"pretty":"ToggleMixin._viewController","sym":"ToggleMixin#_viewController"}],[{"pretty":"property _viewController","sym":"#_viewController"},{"pretty":"property ToggleMixin._viewController","sym":"ToggleMixin#_viewController"}]],[[],[{"pretty":"property visible","sym":"#visible"},{"pretty":"property ToggleMixin.visible","sym":"ToggleMixin#visible"}]],[[],[{"pretty":"property delayed","sym":"#delayed"},{"pretty":"property ToggleMixin.delayed","sym":"ToggleMixin#delayed"}]],[[],[{"pretty":"property animated","sym":"#animated"},{"pretty":"property ToggleMixin.animated","sym":"ToggleMixin#animated"}]],[[],[{"pretty":"property isVisible","sym":"#isVisible"},{"pretty":"property ToggleMixin.isVisible","sym":"ToggleMixin#isVisible"}]],[[],[{"pretty":"property el","sym":"#el"},{"pretty":"property ToggleMixin.el","sym":"ToggleMixin#el"}]],[[],[{"pretty":"property classList","sym":"#classList"}]],[[],[{"pretty":"property contains","sym":"#contains"}]],[[],[{"pretty":"property _viewController","sym":"#_viewController"},{"pretty":"property ToggleMixin._viewController","sym":"ToggleMixin#_viewController"}]],[[],[{"pretty":"property visible","sym":"#visible"},{"pretty":"property flags.visible","sym":"flags#visible"}]],[[],[{"pretty":"property animated","sym":"#animated"},{"pretty":"property flags.animated","sym":"flags#animated"}]],[[{"pretty":"_animated","sym":"#_animated"}],[{"pretty":"property _animated","sym":"#_animated"},{"pretty":"property flags._animated","sym":"flags#_animated"}]],[[],[{"pretty":"property delayed","sym":"#delayed"},{"pretty":"property flags.delayed","sym":"flags#delayed"}]],[[{"pretty":"_delayed","sym":"#_delayed"}],[{"pretty":"property _delayed","sym":"#_delayed"},{"pretty":"property flags._delayed","sym":"flags#_delayed"}]],[[],[{"pretty":"property callback","sym":"#callback"},{"pretty":"property flags.callback","sym":"flags#callback"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property emit","sym":"#emit"},{"pretty":"property window.emit","sym":"window#emit"}]],[[{"pretty":"_toggleEvent","sym":"#_toggleEvent"}],[{"pretty":"property _toggleEvent","sym":"#_toggleEvent"},{"pretty":"property flags._toggleEvent","sym":"flags#_toggleEvent"}]],[[],[{"pretty":"property ViewHelpers","sym":"#ViewHelpers"}]],[[{"pretty":"togglePane","sym":"#togglePane"}],[{"pretty":"property togglePane","sym":"#togglePane"},{"pretty":"property ViewHelpers.togglePane","sym":"ViewHelpers#togglePane"}]],[[],[{"pretty":"property el","sym":"#el"},{"pretty":"property ToggleMixin.el","sym":"ToggleMixin#el"}]],[[{"pretty":"flags.visible","sym":"flags#visible"}],[{"pretty":"property visible","sym":"#visible"},{"pretty":"property flags.visible","sym":"flags#visible"}]],[[],[{"pretty":"property button","sym":"#button"},{"pretty":"property ToggleMixin.button","sym":"ToggleMixin#button"}]],[[],[{"pretty":"property classList","sym":"#classList"}]],[[],[{"pretty":"property remove","sym":"#remove"}]],[[],[{"pretty":"property button","sym":"#button"},{"pretty":"property ToggleMixin.button","sym":"ToggleMixin#button"}]],[[],[{"pretty":"property setAttribute","sym":"#setAttribute"}]],[[{"pretty":"_collapseString","sym":"#_collapseString"}],[{"pretty":"property _collapseString","sym":"#_collapseString"},{"pretty":"property ToggleMixin._collapseString","sym":"ToggleMixin#_collapseString"}]],[[],[{"pretty":"property button","sym":"#button"},{"pretty":"property ToggleMixin.button","sym":"ToggleMixin#button"}]],[[],[{"pretty":"property classList","sym":"#classList"}]],[[],[{"pretty":"property add","sym":"#add"}]],[[],[{"pretty":"property button","sym":"#button"},{"pretty":"property ToggleMixin.button","sym":"ToggleMixin#button"}]],[[],[{"pretty":"property setAttribute","sym":"#setAttribute"}]],[[{"pretty":"_expandString","sym":"#_expandString"}],[{"pretty":"property _expandString","sym":"#_expandString"},{"pretty":"property ToggleMixin._expandString","sym":"ToggleMixin#_expandString"}]],[[],[{"pretty":"property _onToggle","sym":"#_onToggle"},{"pretty":"property ToggleMixin._onToggle","sym":"ToggleMixin#_onToggle"}]],[[{"pretty":"ToggleMixin._viewController","sym":"ToggleMixin#_viewController"}],[{"pretty":"property _viewController","sym":"#_viewController"},{"pretty":"property ToggleMixin._viewController","sym":"ToggleMixin#_viewController"}]],[[],[{"pretty":"property visible","sym":"#visible"},{"pretty":"property ToggleMixin.visible","sym":"ToggleMixin#visible"}]],[[{"pretty":"ToggleMixin.isVisible","sym":"ToggleMixin#isVisible"}],[{"pretty":"property isVisible","sym":"#isVisible"},{"pretty":"property ToggleMixin.isVisible","sym":"ToggleMixin#isVisible"}]]];</script>
    </div>
  <div id="foot" class="footer">
    This page was generated by Searchfox <span class="pretty-date" data-datetime="Wed, 13 Feb 2019 15:28:43 +0000"></span>.
  </div>
  <span id="data" data-root="/" data-search="/mozilla-central/search" data-tree="mozilla-central" data-path="devtools/client/webaudioeditor/views/utils.js"></span>
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
