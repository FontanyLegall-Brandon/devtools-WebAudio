<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8" />
  <link href="/static/icons/search.png" rel="shortcut icon">
  <title>automation.js - mozsearch</title>
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
<div class="breadcrumbs"><a href="/mozilla-central/source/">mozilla-central</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools">devtools</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client">client</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor">webaudioeditor</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/views">views</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/views/automation.js">automation.js</a></div>
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
  <a href="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/views/automation.js" title="Permalink" class="icon" data-update-link="true" data-link="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/views/automation.js">Permalink <span class="accel">Y</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/log/tip/devtools/client/webaudioeditor/views/automation.js" title="Log" class="icon">Log <span class="accel">L</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/raw-file/tip/devtools/client/webaudioeditor/views/automation.js" title="Raw" class="icon">Raw <span class="accel">R</span></a>
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
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#1" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l2" class="line-number">2
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#2" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l3" class="line-number">3
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#3" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l4" class="line-number">4
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#4" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l5" class="line-number">5
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#5" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l6" class="line-number">6
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#6" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l7" class="line-number">7
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#7" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l8" class="line-number">8
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#8" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l9" class="line-number">9
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#9" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l10" class="line-number">10
<div class="blame-strip c2" data-blame="64db2267cf9899840b44ce4116c2dd94aa0c3d8e#browser/devtools/webaudioeditor/views/automation.js#10" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l11" class="line-number">11
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#11" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l12" class="line-number">12
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#12" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l13" class="line-number">13
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#13" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l14" class="line-number">14
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#14" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l15" class="line-number">15
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#15" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l16" class="line-number">16
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#16" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l17" class="line-number">17
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#17" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l18" class="line-number">18
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#18" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l19" class="line-number">19
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#19" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l20" class="line-number">20
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#20" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l21" class="line-number">21
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#21" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l22" class="line-number">22
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#22" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l23" class="line-number">23
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#23" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l24" class="line-number">24
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#24" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l25" class="line-number">25
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#25" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l26" class="line-number">26
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#26" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l27" class="line-number">27
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l28" class="line-number">28
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#28" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l29" class="line-number">29
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#29" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l30" class="line-number">30
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#30" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l31" class="line-number">31
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#31" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l32" class="line-number">32
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#32" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l33" class="line-number">33
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#33" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l34" class="line-number">34
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#34" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l35" class="line-number">35
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#35" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l36" class="line-number">36
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#36" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l37" class="line-number">37
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#37" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l38" class="line-number">38
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#38" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l39" class="line-number">39
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#39" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l40" class="line-number">40
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#40" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l41" class="line-number">41
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#41" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l42" class="line-number">42
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#42" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l43" class="line-number">43
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#43" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l44" class="line-number">44
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#44" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l45" class="line-number">45
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#45" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l46" class="line-number">46
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#46" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l47" class="line-number">47
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#47" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l48" class="line-number">48
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#48" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l49" class="line-number">49
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#49" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l50" class="line-number">50
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#50" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l51" class="line-number">51
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#51" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l52" class="line-number">52
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#52" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l53" class="line-number">53
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#53" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l54" class="line-number">54
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#54" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l55" class="line-number">55
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#55" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l56" class="line-number">56
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#56" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l57" class="line-number">57
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#57" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l58" class="line-number">58
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#58" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l59" class="line-number">59
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#59" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l60" class="line-number">60
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#60" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l61" class="line-number">61
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#61" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l62" class="line-number">62
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#62" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l63" class="line-number">63
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#63" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l64" class="line-number">64
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#64" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l65" class="line-number">65
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#65" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l66" class="line-number">66
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#66" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l67" class="line-number">67
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#67" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l68" class="line-number">68
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#68" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l69" class="line-number">69
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#69" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l70" class="line-number">70
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#70" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l71" class="line-number">71
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#71" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l72" class="line-number">72
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#72" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l73" class="line-number">73
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#73" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l74" class="line-number">74
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#74" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l75" class="line-number">75
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#75" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l76" class="line-number">76
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#76" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l77" class="line-number">77
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#77" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l78" class="line-number">78
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#78" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l79" class="line-number">79
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#79" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l80" class="line-number">80
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#80" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l81" class="line-number">81
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#81" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l82" class="line-number">82
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#82" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l83" class="line-number">83
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#83" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l84" class="line-number">84
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#84" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l85" class="line-number">85
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#85" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l86" class="line-number">86
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#86" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l87" class="line-number">87
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#87" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l88" class="line-number">88
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#88" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l89" class="line-number">89
<div class="blame-strip c2" data-blame="389a969138c7bf3e9467a92ab8763198ebaf5dbe#%#89" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l90" class="line-number">90
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#90" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l91" class="line-number">91
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#91" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l92" class="line-number">92
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#92" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l93" class="line-number">93
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#93" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l94" class="line-number">94
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#94" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l95" class="line-number">95
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#95" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l96" class="line-number">96
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#96" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l97" class="line-number">97
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#97" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l98" class="line-number">98
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#98" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l99" class="line-number">99
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#99" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l100" class="line-number">100
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#100" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l101" class="line-number">101
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#101" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l102" class="line-number">102
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#102" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l103" class="line-number">103
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#103" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l104" class="line-number">104
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#104" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l105" class="line-number">105
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#105" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l106" class="line-number">106
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#106" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l107" class="line-number">107
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#107" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l108" class="line-number">108
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#108" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l109" class="line-number">109
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#109" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l110" class="line-number">110
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#110" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l111" class="line-number">111
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#111" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l112" class="line-number">112
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#112" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l113" class="line-number">113
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#113" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l114" class="line-number">114
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#114" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l115" class="line-number">115
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#115" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l116" class="line-number">116
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#116" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l117" class="line-number">117
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#117" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l118" class="line-number">118
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#118" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l119" class="line-number">119
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#119" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l120" class="line-number">120
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#120" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l121" class="line-number">121
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#121" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l122" class="line-number">122
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#122" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l123" class="line-number">123
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#123" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l124" class="line-number">124
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#124" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l125" class="line-number">125
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#125" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l126" class="line-number">126
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#126" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l127" class="line-number">127
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#127" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l128" class="line-number">128
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#128" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l129" class="line-number">129
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#129" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l130" class="line-number">130
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#130" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l131" class="line-number">131
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#131" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l132" class="line-number">132
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#132" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l133" class="line-number">133
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#133" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l134" class="line-number">134
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#134" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l135" class="line-number">135
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#135" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l136" class="line-number">136
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#136" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l137" class="line-number">137
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#137" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l138" class="line-number">138
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#138" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l139" class="line-number">139
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#139" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l140" class="line-number">140
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#140" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l141" class="line-number">141
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#141" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l142" class="line-number">142
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#142" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l143" class="line-number">143
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#143" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l144" class="line-number">144
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#144" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l145" class="line-number">145
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#145" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l146" class="line-number">146
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#146" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l147" class="line-number">147
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#147" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l148" class="line-number">148
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#148" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l149" class="line-number">149
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#149" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l150" class="line-number">150
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#150" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l151" class="line-number">151
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#151" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l152" class="line-number">152
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#152" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l153" class="line-number">153
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#153" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l154" class="line-number">154
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#154" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l155" class="line-number">155
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#155" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l156" class="line-number">156
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#156" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l157" class="line-number">157
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#157" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l158" class="line-number">158
<div class="blame-strip c1" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#158" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l159" class="line-number">159
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/automation.js#159" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
      </td>
      <td class="code">
<pre><code id="line-1" aria-labelledby="1"><span class="syn_comment" >/* This Source Code Form is subject to the terms of the Mozilla Public</span>
</code><code id="line-2" aria-labelledby="2"><span class="syn_comment" > * License, v. 2.0. If a copy of the MPL was not distributed with this file,</span>
</code><code id="line-3" aria-labelledby="3"><span class="syn_comment" > * You can obtain one at <a href="http://mozilla.org/MPL/2.0/">http://mozilla.org/MPL/2.0/</a>. */</span>
</code><code id="line-4" aria-labelledby="4"><span class="syn_string" >"use strict"</span>;
</code><code id="line-5" aria-labelledby="5">
</code><code id="line-6" aria-labelledby="6"><span class="syn_comment" >/**</span>
</code><code id="line-7" aria-labelledby="7"><span class="syn_comment" > * Functions handling the audio node inspector UI.</span>
</code><code id="line-8" aria-labelledby="8"><span class="syn_comment" > */</span>
</code><code id="line-9" aria-labelledby="9">
</code><code id="line-10" aria-labelledby="10"><span class="syn_reserved" >var</span> <span class="syn_def" data-symbols="#AutomationView" data-i="0" >AutomationView</span> = {
</code><code id="line-11" aria-labelledby="11">
</code><code id="line-12" aria-labelledby="12">  <span class="syn_comment" >/**</span>
</code><code id="line-13" aria-labelledby="13"><span class="syn_comment" >   * Initialization function called when the tool starts up.</span>
</code><code id="line-14" aria-labelledby="14"><span class="syn_comment" >   */</span>
</code><code id="line-15" aria-labelledby="15">  <span class="syn_def syn_def" data-symbols="#initialize,AutomationView#initialize" data-i="1" >initialize</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-16" aria-labelledby="16">    <span class="syn_reserved" >this</span>.<span data-symbols="#_buttons,AutomationView#_buttons" data-i="2" >_buttons</span> = $(<span class="syn_string" >"#automation-param-toolbar-buttons"</span>);
</code><code id="line-17" aria-labelledby="17">    <span class="syn_reserved" >this</span>.<span data-symbols="#graph,AutomationView#graph" data-i="3" >graph</span> = <span class="syn_reserved" >new</span> <span data-symbols="#LineGraphWidget" data-i="4" >LineGraphWidget</span>($(<span class="syn_string" >"#automation-graph"</span>), { <span class="syn_def syn_def" data-symbols="#avg,graph#avg" data-i="5" >avg</span>: <span class="syn_reserved" >false</span> });
</code><code id="line-18" aria-labelledby="18">    <span class="syn_reserved" >this</span>.<span data-symbols="#graph,AutomationView#graph" data-i="6" >graph</span>.<span data-symbols="#selectionEnabled" data-i="7" >selectionEnabled</span> = <span class="syn_reserved" >false</span>;
</code><code id="line-19" aria-labelledby="19">
</code><code id="line-20" aria-labelledby="20">    <span class="syn_reserved" >this</span>.<span data-symbols="#_onButtonClick,AutomationView#_onButtonClick" data-i="8" >_onButtonClick</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_onButtonClick,_onButtonClick#_onButtonClick" data-i="9" >_onButtonClick</span>.<span data-symbols="#bind" data-i="10" >bind</span>(<span class="syn_reserved" >this</span>);
</code><code id="line-21" aria-labelledby="21">    <span class="syn_reserved" >this</span>.<span data-symbols="#_onNodeSet,AutomationView#_onNodeSet" data-i="11" >_onNodeSet</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_onNodeSet,_onNodeSet#_onNodeSet" data-i="12" >_onNodeSet</span>.<span data-symbols="#bind" data-i="13" >bind</span>(<span class="syn_reserved" >this</span>);
</code><code id="line-22" aria-labelledby="22">    <span class="syn_reserved" >this</span>.<span data-symbols="#_onResize,AutomationView#_onResize" data-i="14" >_onResize</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_onResize,_onResize#_onResize" data-i="15" >_onResize</span>.<span data-symbols="#bind" data-i="16" >bind</span>(<span class="syn_reserved" >this</span>);
</code><code id="line-23" aria-labelledby="23">
</code><code id="line-24" aria-labelledby="24">    <span class="syn_reserved" >this</span>.<span data-symbols="#_buttons,AutomationView#_buttons" data-i="17" >_buttons</span>.<span data-symbols="#addEventListener" data-i="18" >addEventListener</span>(<span class="syn_string" >"click"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onButtonClick,AutomationView#_onButtonClick" data-i="19" >_onButtonClick</span>);
</code><code id="line-25" aria-labelledby="25">    <span data-symbols="#window" data-i="20" >window</span>.<span data-symbols="#on,window#on" data-i="21" >on</span>(<span data-symbols="#EVENTS" data-i="22" >EVENTS</span>.<span data-symbols="#UI_INSPECTOR_RESIZE,EVENTS#UI_INSPECTOR_RESIZE" data-i="23" >UI_INSPECTOR_RESIZE</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onResize,AutomationView#_onResize" data-i="24" >_onResize</span>);
</code><code id="line-26" aria-labelledby="26">    <span data-symbols="#window" data-i="25" >window</span>.<span data-symbols="#on,window#on" data-i="26" >on</span>(<span data-symbols="#EVENTS" data-i="27" >EVENTS</span>.<span data-symbols="#UI_INSPECTOR_NODE_SET,EVENTS#UI_INSPECTOR_NODE_SET" data-i="28" >UI_INSPECTOR_NODE_SET</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onNodeSet,AutomationView#_onNodeSet" data-i="29" >_onNodeSet</span>);
</code><code id="line-27" aria-labelledby="27">  },
</code><code id="line-28" aria-labelledby="28">
</code><code id="line-29" aria-labelledby="29">  <span class="syn_comment" >/**</span>
</code><code id="line-30" aria-labelledby="30"><span class="syn_comment" >   * Destruction function called when the tool cleans up.</span>
</code><code id="line-31" aria-labelledby="31"><span class="syn_comment" >   */</span>
</code><code id="line-32" aria-labelledby="32">  <span class="syn_def syn_def" data-symbols="#destroy,AutomationView#destroy" data-i="30" >destroy</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-33" aria-labelledby="33">    <span class="syn_reserved" >this</span>.<span data-symbols="#_buttons,AutomationView#_buttons" data-i="31" >_buttons</span>.<span data-symbols="#removeEventListener" data-i="32" >removeEventListener</span>(<span class="syn_string" >"click"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onButtonClick,AutomationView#_onButtonClick" data-i="33" >_onButtonClick</span>);
</code><code id="line-34" aria-labelledby="34">    <span data-symbols="#window" data-i="34" >window</span>.<span data-symbols="#off,window#off" data-i="35" >off</span>(<span data-symbols="#EVENTS" data-i="36" >EVENTS</span>.<span data-symbols="#UI_INSPECTOR_RESIZE,EVENTS#UI_INSPECTOR_RESIZE" data-i="37" >UI_INSPECTOR_RESIZE</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onResize,AutomationView#_onResize" data-i="38" >_onResize</span>);
</code><code id="line-35" aria-labelledby="35">    <span data-symbols="#window" data-i="39" >window</span>.<span data-symbols="#off,window#off" data-i="40" >off</span>(<span data-symbols="#EVENTS" data-i="41" >EVENTS</span>.<span data-symbols="#UI_INSPECTOR_NODE_SET,EVENTS#UI_INSPECTOR_NODE_SET" data-i="42" >UI_INSPECTOR_NODE_SET</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onNodeSet,AutomationView#_onNodeSet" data-i="43" >_onNodeSet</span>);
</code><code id="line-36" aria-labelledby="36">  },
</code><code id="line-37" aria-labelledby="37">
</code><code id="line-38" aria-labelledby="38">  <span class="syn_comment" >/**</span>
</code><code id="line-39" aria-labelledby="39"><span class="syn_comment" >   * Empties out the props view.</span>
</code><code id="line-40" aria-labelledby="40"><span class="syn_comment" >   */</span>
</code><code id="line-41" aria-labelledby="41">  <span class="syn_def syn_def" data-symbols="#resetUI,AutomationView#resetUI" data-i="44" >resetUI</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-42" aria-labelledby="42">    <span class="syn_reserved" >this</span>.<span data-symbols="#_currentNode,AutomationView#_currentNode" data-i="45" >_currentNode</span> = <span class="syn_reserved" >null</span>;
</code><code id="line-43" aria-labelledby="43">  },
</code><code id="line-44" aria-labelledby="44">
</code><code id="line-45" aria-labelledby="45">  <span class="syn_comment" >/**</span>
</code><code id="line-46" aria-labelledby="46"><span class="syn_comment" >   * On a new node selection, create the Automation panel for</span>
</code><code id="line-47" aria-labelledby="47"><span class="syn_comment" >   * that specific node.</span>
</code><code id="line-48" aria-labelledby="48"><span class="syn_comment" >   */</span>
</code><code id="line-49" aria-labelledby="49">  async <span class="syn_def syn_def" data-symbols="#build,AutomationView#build" data-i="46" >build</span>() {
</code><code id="line-50" aria-labelledby="50">    <span class="syn_reserved" >const</span> <span data-symbols="7379-0" >node</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_currentNode,AutomationView#_currentNode" data-i="47" >_currentNode</span>;
</code><code id="line-51" aria-labelledby="51">
</code><code id="line-52" aria-labelledby="52">    <span class="syn_reserved" >const</span> <span data-symbols="7379-1" >props</span> = await <span data-symbols="7379-0" >node</span>.<span data-symbols="#getParams,node#getParams" data-i="48" >getParams</span>();
</code><code id="line-53" aria-labelledby="53">    <span class="syn_reserved" >const</span> <span data-symbols="7379-2" >params</span> = <span data-symbols="7379-1" >props</span>.<span data-symbols="#filter,props#filter" data-i="49" >filter</span>(({ <span data-symbols="7379-3" >flags</span> }) => <span data-symbols="7379-3" >flags</span> &amp;&amp; <span data-symbols="7379-3" >flags</span>.<span data-symbols="#param,flags#param" data-i="50" >param</span>);
</code><code id="line-54" aria-labelledby="54">
</code><code id="line-55" aria-labelledby="55">    <span class="syn_reserved" >this</span>.<span data-symbols="#_createParamButtons,AutomationView#_createParamButtons" data-i="51" >_createParamButtons</span>(<span data-symbols="7379-2" >params</span>);
</code><code id="line-56" aria-labelledby="56">
</code><code id="line-57" aria-labelledby="57">    <span class="syn_reserved" >this</span>.<span data-symbols="#_selectedParamName,AutomationView#_selectedParamName" data-i="52" >_selectedParamName</span> = <span data-symbols="7379-2" >params</span>[0] ? <span data-symbols="7379-2" >params</span>[0].<span data-symbols="#param" data-i="53" >param</span> : <span class="syn_reserved" >null</span>;
</code><code id="line-58" aria-labelledby="58">    <span class="syn_reserved" >this</span>.<span data-symbols="#render,AutomationView#render" data-i="54" >render</span>();
</code><code id="line-59" aria-labelledby="59">  },
</code><code id="line-60" aria-labelledby="60">
</code><code id="line-61" aria-labelledby="61">  <span class="syn_comment" >/**</span>
</code><code id="line-62" aria-labelledby="62"><span class="syn_comment" >   * Renders the graph for specified `paramName`. Called when</span>
</code><code id="line-63" aria-labelledby="63"><span class="syn_comment" >   * the parameter view is changed, or when new param data events</span>
</code><code id="line-64" aria-labelledby="64"><span class="syn_comment" >   * are fired for the currently specified param.</span>
</code><code id="line-65" aria-labelledby="65"><span class="syn_comment" >   */</span>
</code><code id="line-66" aria-labelledby="66">  async <span class="syn_def syn_def" data-symbols="#render,AutomationView#render" data-i="55" >render</span>() {
</code><code id="line-67" aria-labelledby="67">    <span class="syn_reserved" >const</span> <span data-symbols="7379-4" >node</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_currentNode,AutomationView#_currentNode" data-i="56" >_currentNode</span>;
</code><code id="line-68" aria-labelledby="68">    <span class="syn_reserved" >const</span> <span data-symbols="7379-5" >paramName</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_selectedParamName,AutomationView#_selectedParamName" data-i="57" >_selectedParamName</span>;
</code><code id="line-69" aria-labelledby="69">    <span class="syn_comment" >// Escape if either node or parameter name does not exist.</span>
</code><code id="line-70" aria-labelledby="70">    <span class="syn_reserved" >if</span> (!<span data-symbols="7379-4" >node</span> || !<span data-symbols="7379-5" >paramName</span>) {
</code><code id="line-71" aria-labelledby="71">      <span class="syn_reserved" >this</span>.<span data-symbols="#_setState,AutomationView#_setState" data-i="58" >_setState</span>(<span class="syn_string" >"no-params"</span>);
</code><code id="line-72" aria-labelledby="72">      <span data-symbols="#window" data-i="59" >window</span>.<span data-symbols="#emit,window#emit" data-i="60" >emit</span>(<span data-symbols="#EVENTS" data-i="61" >EVENTS</span>.<span data-symbols="#UI_AUTOMATION_TAB_RENDERED,EVENTS#UI_AUTOMATION_TAB_RENDERED" data-i="62" >UI_AUTOMATION_TAB_RENDERED</span>, <span class="syn_reserved" >null</span>);
</code><code id="line-73" aria-labelledby="73">      <span class="syn_reserved" >return</span>;
</code><code id="line-74" aria-labelledby="74">    }
</code><code id="line-75" aria-labelledby="75">
</code><code id="line-76" aria-labelledby="76">    <span class="syn_reserved" >const</span> { <span data-symbols="7379-6" >values</span>, <span data-symbols="7379-7" >events</span> } = await <span data-symbols="7379-4" >node</span>.<span data-symbols="#getAutomationData,node#getAutomationData" data-i="63" >getAutomationData</span>(<span data-symbols="7379-5" >paramName</span>);
</code><code id="line-77" aria-labelledby="77">    <span class="syn_reserved" >this</span>.<span data-symbols="#_setState,AutomationView#_setState" data-i="64" >_setState</span>(<span data-symbols="7379-7" >events</span>.<span data-symbols="#length,events#length" data-i="65" >length</span> ? <span class="syn_string" >"show"</span> : <span class="syn_string" >"no-events"</span>);
</code><code id="line-78" aria-labelledby="78">    await <span class="syn_reserved" >this</span>.<span data-symbols="#graph,AutomationView#graph" data-i="66" >graph</span>.<span data-symbols="#setDataWhenReady" data-i="67" >setDataWhenReady</span>(<span data-symbols="7379-6" >values</span>);
</code><code id="line-79" aria-labelledby="79">    <span data-symbols="#window" data-i="68" >window</span>.<span data-symbols="#emit,window#emit" data-i="69" >emit</span>(<span data-symbols="#EVENTS" data-i="70" >EVENTS</span>.<span data-symbols="#UI_AUTOMATION_TAB_RENDERED,EVENTS#UI_AUTOMATION_TAB_RENDERED" data-i="71" >UI_AUTOMATION_TAB_RENDERED</span>, <span data-symbols="7379-4" >node</span>.<span data-symbols="#id,node#id" data-i="72" >id</span>);
</code><code id="line-80" aria-labelledby="80">  },
</code><code id="line-81" aria-labelledby="81">
</code><code id="line-82" aria-labelledby="82">  <span class="syn_comment" >/**</span>
</code><code id="line-83" aria-labelledby="83"><span class="syn_comment" >   * Create the buttons for each AudioParam, that when clicked,</span>
</code><code id="line-84" aria-labelledby="84"><span class="syn_comment" >   * render the graph for that AudioParam.</span>
</code><code id="line-85" aria-labelledby="85"><span class="syn_comment" >   */</span>
</code><code id="line-86" aria-labelledby="86">  <span class="syn_def syn_def" data-symbols="#_createParamButtons,AutomationView#_createParamButtons" data-i="73" >_createParamButtons</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7379-8" >params</span>) {
</code><code id="line-87" aria-labelledby="87">    <span class="syn_reserved" >this</span>.<span data-symbols="#_buttons,AutomationView#_buttons" data-i="74" >_buttons</span>.<span data-symbols="#innerHTML" data-i="75" >innerHTML</span> = <span class="syn_string" >""</span>;
</code><code id="line-88" aria-labelledby="88">    <span data-symbols="7379-8" >params</span>.<span data-symbols="#forEach,params#forEach" data-i="76" >forEach</span>((<span data-symbols="7379-9" >param</span>, <span data-symbols="7379-10" >i</span>) => {
</code><code id="line-89" aria-labelledby="89">      <span class="syn_reserved" >const</span> <span data-symbols="7379-11" >button</span> = <span data-symbols="#document" data-i="77" >document</span>.<span data-symbols="#createXULElement,document#createXULElement" data-i="78" >createXULElement</span>(<span class="syn_string" >"toolbarbutton"</span>);
</code><code id="line-90" aria-labelledby="90">      <span data-symbols="7379-11" >button</span>.<span data-symbols="#setAttribute,button#setAttribute" data-i="79" >setAttribute</span>(<span class="syn_string" >"class"</span>, <span class="syn_string" >"devtools-toolbarbutton automation-param-button"</span>);
</code><code id="line-91" aria-labelledby="91">      <span data-symbols="7379-11" >button</span>.<span data-symbols="#setAttribute,button#setAttribute" data-i="80" >setAttribute</span>(<span class="syn_string" >"data-param"</span>, <span data-symbols="7379-9" >param</span>.<span data-symbols="#param,param#param" data-i="81" >param</span>);
</code><code id="line-92" aria-labelledby="92">      <span class="syn_comment" >// Set label to the parameter name, should not be L10N'd</span>
</code><code id="line-93" aria-labelledby="93">      <span data-symbols="7379-11" >button</span>.<span data-symbols="#setAttribute,button#setAttribute" data-i="82" >setAttribute</span>(<span class="syn_string" >"label"</span>, <span data-symbols="7379-9" >param</span>.<span data-symbols="#param,param#param" data-i="83" >param</span>);
</code><code id="line-94" aria-labelledby="94">
</code><code id="line-95" aria-labelledby="95">      <span class="syn_comment" >// If first button, set to 'selected' for styling</span>
</code><code id="line-96" aria-labelledby="96">      <span class="syn_reserved" >if</span> (<span data-symbols="7379-10" >i</span> === 0) {
</code><code id="line-97" aria-labelledby="97">        <span data-symbols="7379-11" >button</span>.<span data-symbols="#setAttribute,button#setAttribute" data-i="84" >setAttribute</span>(<span class="syn_string" >"selected"</span>, <span class="syn_reserved" >true</span>);
</code><code id="line-98" aria-labelledby="98">      }
</code><code id="line-99" aria-labelledby="99">
</code><code id="line-100" aria-labelledby="100">      <span class="syn_reserved" >this</span>.<span data-symbols="#_buttons,AutomationView#_buttons" data-i="85" >_buttons</span>.<span data-symbols="#appendChild" data-i="86" >appendChild</span>(<span data-symbols="7379-11" >button</span>);
</code><code id="line-101" aria-labelledby="101">    });
</code><code id="line-102" aria-labelledby="102">  },
</code><code id="line-103" aria-labelledby="103">
</code><code id="line-104" aria-labelledby="104">  <span class="syn_comment" >/**</span>
</code><code id="line-105" aria-labelledby="105"><span class="syn_comment" >   * Internally sets the current audio node and rebuilds appropriate</span>
</code><code id="line-106" aria-labelledby="106"><span class="syn_comment" >   * views.</span>
</code><code id="line-107" aria-labelledby="107"><span class="syn_comment" >   */</span>
</code><code id="line-108" aria-labelledby="108">  <span class="syn_def syn_def" data-symbols="#_setAudioNode,AutomationView#_setAudioNode" data-i="87" >_setAudioNode</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7379-12" >node</span>) {
</code><code id="line-109" aria-labelledby="109">    <span class="syn_reserved" >this</span>.<span data-symbols="#_currentNode,AutomationView#_currentNode" data-i="88" >_currentNode</span> = <span data-symbols="7379-12" >node</span>;
</code><code id="line-110" aria-labelledby="110">    <span class="syn_reserved" >if</span> (<span class="syn_reserved" >this</span>.<span data-symbols="#_currentNode,AutomationView#_currentNode" data-i="89" >_currentNode</span>) {
</code><code id="line-111" aria-labelledby="111">      <span class="syn_reserved" >this</span>.<span data-symbols="#build,AutomationView#build" data-i="90" >build</span>();
</code><code id="line-112" aria-labelledby="112">    }
</code><code id="line-113" aria-labelledby="113">  },
</code><code id="line-114" aria-labelledby="114">
</code><code id="line-115" aria-labelledby="115">  <span class="syn_comment" >/**</span>
</code><code id="line-116" aria-labelledby="116"><span class="syn_comment" >   * Toggles the subviews to display messages whether or not</span>
</code><code id="line-117" aria-labelledby="117"><span class="syn_comment" >   * the audio node has no AudioParams, no automation events, or</span>
</code><code id="line-118" aria-labelledby="118"><span class="syn_comment" >   * shows the graph.</span>
</code><code id="line-119" aria-labelledby="119"><span class="syn_comment" >   */</span>
</code><code id="line-120" aria-labelledby="120">  <span class="syn_def syn_def" data-symbols="#_setState,AutomationView#_setState" data-i="91" >_setState</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7379-13" >state</span>) {
</code><code id="line-121" aria-labelledby="121">    <span class="syn_reserved" >const</span> <span data-symbols="7379-14" >contentView</span> = $(<span class="syn_string" >"#automation-content"</span>);
</code><code id="line-122" aria-labelledby="122">    <span class="syn_reserved" >const</span> <span data-symbols="7379-15" >emptyView</span> = $(<span class="syn_string" >"#automation-empty"</span>);
</code><code id="line-123" aria-labelledby="123">
</code><code id="line-124" aria-labelledby="124">    <span class="syn_reserved" >const</span> <span data-symbols="7379-16" >graphView</span> = $(<span class="syn_string" >"#automation-graph-container"</span>);
</code><code id="line-125" aria-labelledby="125">    <span class="syn_reserved" >const</span> <span data-symbols="7379-17" >noEventsView</span> = $(<span class="syn_string" >"#automation-no-events"</span>);
</code><code id="line-126" aria-labelledby="126">
</code><code id="line-127" aria-labelledby="127">    <span data-symbols="7379-14" >contentView</span>.<span data-symbols="#hidden,contentView#hidden" data-i="92" >hidden</span> = <span data-symbols="7379-13" >state</span> === <span class="syn_string" >"no-params"</span>;
</code><code id="line-128" aria-labelledby="128">    <span data-symbols="7379-15" >emptyView</span>.<span data-symbols="#hidden,emptyView#hidden" data-i="93" >hidden</span> = <span data-symbols="7379-13" >state</span> !== <span class="syn_string" >"no-params"</span>;
</code><code id="line-129" aria-labelledby="129">
</code><code id="line-130" aria-labelledby="130">    <span data-symbols="7379-16" >graphView</span>.<span data-symbols="#hidden,graphView#hidden" data-i="94" >hidden</span> = <span data-symbols="7379-13" >state</span> !== <span class="syn_string" >"show"</span>;
</code><code id="line-131" aria-labelledby="131">    <span data-symbols="7379-17" >noEventsView</span>.<span data-symbols="#hidden,noEventsView#hidden" data-i="95" >hidden</span> = <span data-symbols="7379-13" >state</span> !== <span class="syn_string" >"no-events"</span>;
</code><code id="line-132" aria-labelledby="132">  },
</code><code id="line-133" aria-labelledby="133">
</code><code id="line-134" aria-labelledby="134">  <span class="syn_comment" >/**</span>
</code><code id="line-135" aria-labelledby="135"><span class="syn_comment" >   * Event handlers</span>
</code><code id="line-136" aria-labelledby="136"><span class="syn_comment" >   */</span>
</code><code id="line-137" aria-labelledby="137">
</code><code id="line-138" aria-labelledby="138">  <span class="syn_def syn_def" data-symbols="#_onButtonClick,AutomationView#_onButtonClick" data-i="96" >_onButtonClick</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7379-18" >e</span>) {
</code><code id="line-139" aria-labelledby="139">    <span data-symbols="#Array" data-i="97" >Array</span>.<span data-symbols="#forEach,Array#forEach" data-i="98" >forEach</span>($$(<span class="syn_string" >".automation-param-button"</span>), $btn => $btn.<span data-symbols="#removeAttribute,$btn#removeAttribute" data-i="99" >removeAttribute</span>(<span class="syn_string" >"selected"</span>));
</code><code id="line-140" aria-labelledby="140">    <span class="syn_reserved" >const</span> <span data-symbols="7379-20" >paramName</span> = <span data-symbols="7379-18" >e</span>.<span data-symbols="#target,e#target" data-i="100" >target</span>.<span data-symbols="#getAttribute" data-i="101" >getAttribute</span>(<span class="syn_string" >"data-param"</span>);
</code><code id="line-141" aria-labelledby="141">    <span data-symbols="7379-18" >e</span>.<span data-symbols="#target,e#target" data-i="102" >target</span>.<span data-symbols="#setAttribute" data-i="103" >setAttribute</span>(<span class="syn_string" >"selected"</span>, <span class="syn_reserved" >true</span>);
</code><code id="line-142" aria-labelledby="142">    <span class="syn_reserved" >this</span>.<span data-symbols="#_selectedParamName,AutomationView#_selectedParamName" data-i="104" >_selectedParamName</span> = <span data-symbols="7379-20" >paramName</span>;
</code><code id="line-143" aria-labelledby="143">    <span class="syn_reserved" >this</span>.<span data-symbols="#render,AutomationView#render" data-i="105" >render</span>();
</code><code id="line-144" aria-labelledby="144">  },
</code><code id="line-145" aria-labelledby="145">
</code><code id="line-146" aria-labelledby="146">  <span class="syn_comment" >/**</span>
</code><code id="line-147" aria-labelledby="147"><span class="syn_comment" >   * Called when the inspector is resized.</span>
</code><code id="line-148" aria-labelledby="148"><span class="syn_comment" >   */</span>
</code><code id="line-149" aria-labelledby="149">  <span class="syn_def syn_def" data-symbols="#_onResize,AutomationView#_onResize" data-i="106" >_onResize</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-150" aria-labelledby="150">    <span class="syn_reserved" >this</span>.<span data-symbols="#graph,AutomationView#graph" data-i="107" >graph</span>.<span data-symbols="#refresh" data-i="108" >refresh</span>();
</code><code id="line-151" aria-labelledby="151">  },
</code><code id="line-152" aria-labelledby="152">
</code><code id="line-153" aria-labelledby="153">  <span class="syn_comment" >/**</span>
</code><code id="line-154" aria-labelledby="154"><span class="syn_comment" >   * Called when the inspector view determines a node is selected.</span>
</code><code id="line-155" aria-labelledby="155"><span class="syn_comment" >   */</span>
</code><code id="line-156" aria-labelledby="156">  <span class="syn_def syn_def" data-symbols="#_onNodeSet,AutomationView#_onNodeSet" data-i="109" >_onNodeSet</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7379-21" >id</span>) {
</code><code id="line-157" aria-labelledby="157">    <span class="syn_reserved" >this</span>.<span data-symbols="#_setAudioNode,AutomationView#_setAudioNode" data-i="110" >_setAudioNode</span>(<span data-symbols="7379-21" >id</span> != <span class="syn_reserved" >null</span> ? <span data-symbols="#gAudioNodes" data-i="111" >gAudioNodes</span>.<span class="syn_reserved" >get</span>(<span data-symbols="7379-21" >id</span>) : <span class="syn_reserved" >null</span>);
</code><code id="line-158" aria-labelledby="158">  },
</code><code id="line-159" aria-labelledby="159">};
</code></pre>      </td>
    </tr>
  </tbody>
</table>
<script>var ANALYSIS_DATA = [[[],[{"pretty":"property AutomationView","sym":"#AutomationView"}]],[[],[{"pretty":"property initialize","sym":"#initialize"},{"pretty":"property AutomationView.initialize","sym":"AutomationView#initialize"}]],[[],[{"pretty":"property _buttons","sym":"#_buttons"},{"pretty":"property AutomationView._buttons","sym":"AutomationView#_buttons"}]],[[],[{"pretty":"property graph","sym":"#graph"},{"pretty":"property AutomationView.graph","sym":"AutomationView#graph"}]],[[],[{"pretty":"property LineGraphWidget","sym":"#LineGraphWidget"}]],[[],[{"pretty":"property avg","sym":"#avg"},{"pretty":"property graph.avg","sym":"graph#avg"}]],[[],[{"pretty":"property graph","sym":"#graph"},{"pretty":"property AutomationView.graph","sym":"AutomationView#graph"}]],[[],[{"pretty":"property selectionEnabled","sym":"#selectionEnabled"}]],[[{"pretty":"AutomationView._onButtonClick","sym":"AutomationView#_onButtonClick"}],[{"pretty":"property _onButtonClick","sym":"#_onButtonClick"},{"pretty":"property AutomationView._onButtonClick","sym":"AutomationView#_onButtonClick"}]],[[],[{"pretty":"property _onButtonClick","sym":"#_onButtonClick"},{"pretty":"property _onButtonClick._onButtonClick","sym":"_onButtonClick#_onButtonClick"}]],[[],[{"pretty":"property bind","sym":"#bind"}]],[[{"pretty":"AutomationView._onNodeSet","sym":"AutomationView#_onNodeSet"}],[{"pretty":"property _onNodeSet","sym":"#_onNodeSet"},{"pretty":"property AutomationView._onNodeSet","sym":"AutomationView#_onNodeSet"}]],[[],[{"pretty":"property _onNodeSet","sym":"#_onNodeSet"},{"pretty":"property _onNodeSet._onNodeSet","sym":"_onNodeSet#_onNodeSet"}]],[[],[{"pretty":"property bind","sym":"#bind"}]],[[{"pretty":"AutomationView._onResize","sym":"AutomationView#_onResize"}],[{"pretty":"property _onResize","sym":"#_onResize"},{"pretty":"property AutomationView._onResize","sym":"AutomationView#_onResize"}]],[[],[{"pretty":"property _onResize","sym":"#_onResize"},{"pretty":"property _onResize._onResize","sym":"_onResize#_onResize"}]],[[],[{"pretty":"property bind","sym":"#bind"}]],[[],[{"pretty":"property _buttons","sym":"#_buttons"},{"pretty":"property AutomationView._buttons","sym":"AutomationView#_buttons"}]],[[],[{"pretty":"property addEventListener","sym":"#addEventListener"}]],[[{"pretty":"AutomationView._onButtonClick","sym":"AutomationView#_onButtonClick"}],[{"pretty":"property _onButtonClick","sym":"#_onButtonClick"},{"pretty":"property AutomationView._onButtonClick","sym":"AutomationView#_onButtonClick"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property on","sym":"#on"},{"pretty":"property window.on","sym":"window#on"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[{"pretty":"EVENTS.UI_INSPECTOR_RESIZE","sym":"EVENTS#UI_INSPECTOR_RESIZE"}],[{"pretty":"property UI_INSPECTOR_RESIZE","sym":"#UI_INSPECTOR_RESIZE"},{"pretty":"property EVENTS.UI_INSPECTOR_RESIZE","sym":"EVENTS#UI_INSPECTOR_RESIZE"}]],[[{"pretty":"AutomationView._onResize","sym":"AutomationView#_onResize"}],[{"pretty":"property _onResize","sym":"#_onResize"},{"pretty":"property AutomationView._onResize","sym":"AutomationView#_onResize"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property on","sym":"#on"},{"pretty":"property window.on","sym":"window#on"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[{"pretty":"EVENTS.UI_INSPECTOR_NODE_SET","sym":"EVENTS#UI_INSPECTOR_NODE_SET"}],[{"pretty":"property UI_INSPECTOR_NODE_SET","sym":"#UI_INSPECTOR_NODE_SET"},{"pretty":"property EVENTS.UI_INSPECTOR_NODE_SET","sym":"EVENTS#UI_INSPECTOR_NODE_SET"}]],[[{"pretty":"AutomationView._onNodeSet","sym":"AutomationView#_onNodeSet"}],[{"pretty":"property _onNodeSet","sym":"#_onNodeSet"},{"pretty":"property AutomationView._onNodeSet","sym":"AutomationView#_onNodeSet"}]],[[],[{"pretty":"property destroy","sym":"#destroy"},{"pretty":"property AutomationView.destroy","sym":"AutomationView#destroy"}]],[[],[{"pretty":"property _buttons","sym":"#_buttons"},{"pretty":"property AutomationView._buttons","sym":"AutomationView#_buttons"}]],[[],[{"pretty":"property removeEventListener","sym":"#removeEventListener"}]],[[{"pretty":"AutomationView._onButtonClick","sym":"AutomationView#_onButtonClick"}],[{"pretty":"property _onButtonClick","sym":"#_onButtonClick"},{"pretty":"property AutomationView._onButtonClick","sym":"AutomationView#_onButtonClick"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property off","sym":"#off"},{"pretty":"property window.off","sym":"window#off"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[{"pretty":"EVENTS.UI_INSPECTOR_RESIZE","sym":"EVENTS#UI_INSPECTOR_RESIZE"}],[{"pretty":"property UI_INSPECTOR_RESIZE","sym":"#UI_INSPECTOR_RESIZE"},{"pretty":"property EVENTS.UI_INSPECTOR_RESIZE","sym":"EVENTS#UI_INSPECTOR_RESIZE"}]],[[{"pretty":"AutomationView._onResize","sym":"AutomationView#_onResize"}],[{"pretty":"property _onResize","sym":"#_onResize"},{"pretty":"property AutomationView._onResize","sym":"AutomationView#_onResize"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property off","sym":"#off"},{"pretty":"property window.off","sym":"window#off"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[{"pretty":"EVENTS.UI_INSPECTOR_NODE_SET","sym":"EVENTS#UI_INSPECTOR_NODE_SET"}],[{"pretty":"property UI_INSPECTOR_NODE_SET","sym":"#UI_INSPECTOR_NODE_SET"},{"pretty":"property EVENTS.UI_INSPECTOR_NODE_SET","sym":"EVENTS#UI_INSPECTOR_NODE_SET"}]],[[{"pretty":"AutomationView._onNodeSet","sym":"AutomationView#_onNodeSet"}],[{"pretty":"property _onNodeSet","sym":"#_onNodeSet"},{"pretty":"property AutomationView._onNodeSet","sym":"AutomationView#_onNodeSet"}]],[[],[{"pretty":"property resetUI","sym":"#resetUI"},{"pretty":"property AutomationView.resetUI","sym":"AutomationView#resetUI"}]],[[],[{"pretty":"property _currentNode","sym":"#_currentNode"},{"pretty":"property AutomationView._currentNode","sym":"AutomationView#_currentNode"}]],[[],[{"pretty":"property build","sym":"#build"},{"pretty":"property AutomationView.build","sym":"AutomationView#build"}]],[[],[{"pretty":"property _currentNode","sym":"#_currentNode"},{"pretty":"property AutomationView._currentNode","sym":"AutomationView#_currentNode"}]],[[],[{"pretty":"property getParams","sym":"#getParams"},{"pretty":"property node.getParams","sym":"node#getParams"}]],[[],[{"pretty":"property filter","sym":"#filter"},{"pretty":"property props.filter","sym":"props#filter"}]],[[],[{"pretty":"property param","sym":"#param"},{"pretty":"property flags.param","sym":"flags#param"}]],[[{"pretty":"AutomationView._createParamButtons","sym":"AutomationView#_createParamButtons"}],[{"pretty":"property _createParamButtons","sym":"#_createParamButtons"},{"pretty":"property AutomationView._createParamButtons","sym":"AutomationView#_createParamButtons"}]],[[],[{"pretty":"property _selectedParamName","sym":"#_selectedParamName"},{"pretty":"property AutomationView._selectedParamName","sym":"AutomationView#_selectedParamName"}]],[[],[{"pretty":"property param","sym":"#param"}]],[[{"pretty":"AutomationView.render","sym":"AutomationView#render"}],[{"pretty":"property render","sym":"#render"},{"pretty":"property AutomationView.render","sym":"AutomationView#render"}]],[[],[{"pretty":"property render","sym":"#render"},{"pretty":"property AutomationView.render","sym":"AutomationView#render"}]],[[],[{"pretty":"property _currentNode","sym":"#_currentNode"},{"pretty":"property AutomationView._currentNode","sym":"AutomationView#_currentNode"}]],[[],[{"pretty":"property _selectedParamName","sym":"#_selectedParamName"},{"pretty":"property AutomationView._selectedParamName","sym":"AutomationView#_selectedParamName"}]],[[{"pretty":"AutomationView._setState","sym":"AutomationView#_setState"}],[{"pretty":"property _setState","sym":"#_setState"},{"pretty":"property AutomationView._setState","sym":"AutomationView#_setState"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property emit","sym":"#emit"},{"pretty":"property window.emit","sym":"window#emit"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[{"pretty":"EVENTS.UI_AUTOMATION_TAB_RENDERED","sym":"EVENTS#UI_AUTOMATION_TAB_RENDERED"}],[{"pretty":"property UI_AUTOMATION_TAB_RENDERED","sym":"#UI_AUTOMATION_TAB_RENDERED"},{"pretty":"property EVENTS.UI_AUTOMATION_TAB_RENDERED","sym":"EVENTS#UI_AUTOMATION_TAB_RENDERED"}]],[[],[{"pretty":"property getAutomationData","sym":"#getAutomationData"},{"pretty":"property node.getAutomationData","sym":"node#getAutomationData"}]],[[{"pretty":"AutomationView._setState","sym":"AutomationView#_setState"}],[{"pretty":"property _setState","sym":"#_setState"},{"pretty":"property AutomationView._setState","sym":"AutomationView#_setState"}]],[[],[{"pretty":"property length","sym":"#length"},{"pretty":"property events.length","sym":"events#length"}]],[[],[{"pretty":"property graph","sym":"#graph"},{"pretty":"property AutomationView.graph","sym":"AutomationView#graph"}]],[[],[{"pretty":"property setDataWhenReady","sym":"#setDataWhenReady"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property emit","sym":"#emit"},{"pretty":"property window.emit","sym":"window#emit"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[{"pretty":"EVENTS.UI_AUTOMATION_TAB_RENDERED","sym":"EVENTS#UI_AUTOMATION_TAB_RENDERED"}],[{"pretty":"property UI_AUTOMATION_TAB_RENDERED","sym":"#UI_AUTOMATION_TAB_RENDERED"},{"pretty":"property EVENTS.UI_AUTOMATION_TAB_RENDERED","sym":"EVENTS#UI_AUTOMATION_TAB_RENDERED"}]],[[],[{"pretty":"property id","sym":"#id"},{"pretty":"property node.id","sym":"node#id"}]],[[],[{"pretty":"property _createParamButtons","sym":"#_createParamButtons"},{"pretty":"property AutomationView._createParamButtons","sym":"AutomationView#_createParamButtons"}]],[[],[{"pretty":"property _buttons","sym":"#_buttons"},{"pretty":"property AutomationView._buttons","sym":"AutomationView#_buttons"}]],[[],[{"pretty":"property innerHTML","sym":"#innerHTML"}]],[[],[{"pretty":"property forEach","sym":"#forEach"},{"pretty":"property params.forEach","sym":"params#forEach"}]],[[],[{"pretty":"property document","sym":"#document"}]],[[],[{"pretty":"property createXULElement","sym":"#createXULElement"},{"pretty":"property document.createXULElement","sym":"document#createXULElement"}]],[[],[{"pretty":"property setAttribute","sym":"#setAttribute"},{"pretty":"property button.setAttribute","sym":"button#setAttribute"}]],[[],[{"pretty":"property setAttribute","sym":"#setAttribute"},{"pretty":"property button.setAttribute","sym":"button#setAttribute"}]],[[],[{"pretty":"property param","sym":"#param"},{"pretty":"property param.param","sym":"param#param"}]],[[],[{"pretty":"property setAttribute","sym":"#setAttribute"},{"pretty":"property button.setAttribute","sym":"button#setAttribute"}]],[[],[{"pretty":"property param","sym":"#param"},{"pretty":"property param.param","sym":"param#param"}]],[[],[{"pretty":"property setAttribute","sym":"#setAttribute"},{"pretty":"property button.setAttribute","sym":"button#setAttribute"}]],[[],[{"pretty":"property _buttons","sym":"#_buttons"},{"pretty":"property AutomationView._buttons","sym":"AutomationView#_buttons"}]],[[],[{"pretty":"property appendChild","sym":"#appendChild"}]],[[],[{"pretty":"property _setAudioNode","sym":"#_setAudioNode"},{"pretty":"property AutomationView._setAudioNode","sym":"AutomationView#_setAudioNode"}]],[[],[{"pretty":"property _currentNode","sym":"#_currentNode"},{"pretty":"property AutomationView._currentNode","sym":"AutomationView#_currentNode"}]],[[],[{"pretty":"property _currentNode","sym":"#_currentNode"},{"pretty":"property AutomationView._currentNode","sym":"AutomationView#_currentNode"}]],[[{"pretty":"AutomationView.build","sym":"AutomationView#build"}],[{"pretty":"property build","sym":"#build"},{"pretty":"property AutomationView.build","sym":"AutomationView#build"}]],[[],[{"pretty":"property _setState","sym":"#_setState"},{"pretty":"property AutomationView._setState","sym":"AutomationView#_setState"}]],[[],[{"pretty":"property hidden","sym":"#hidden"},{"pretty":"property contentView.hidden","sym":"contentView#hidden"}]],[[],[{"pretty":"property hidden","sym":"#hidden"},{"pretty":"property emptyView.hidden","sym":"emptyView#hidden"}]],[[],[{"pretty":"property hidden","sym":"#hidden"},{"pretty":"property graphView.hidden","sym":"graphView#hidden"}]],[[],[{"pretty":"property hidden","sym":"#hidden"},{"pretty":"property noEventsView.hidden","sym":"noEventsView#hidden"}]],[[],[{"pretty":"property _onButtonClick","sym":"#_onButtonClick"},{"pretty":"property AutomationView._onButtonClick","sym":"AutomationView#_onButtonClick"}]],[[],[{"pretty":"property Array","sym":"#Array"}]],[[],[{"pretty":"property forEach","sym":"#forEach"},{"pretty":"property Array.forEach","sym":"Array#forEach"}]],[[],[{"pretty":"property removeAttribute","sym":"#removeAttribute"},{"pretty":"property $btn.removeAttribute","sym":"$btn#removeAttribute"}]],[[{"pretty":"e.target","sym":"e#target"}],[{"pretty":"property target","sym":"#target"},{"pretty":"property e.target","sym":"e#target"}]],[[],[{"pretty":"property getAttribute","sym":"#getAttribute"}]],[[{"pretty":"e.target","sym":"e#target"}],[{"pretty":"property target","sym":"#target"},{"pretty":"property e.target","sym":"e#target"}]],[[],[{"pretty":"property setAttribute","sym":"#setAttribute"}]],[[],[{"pretty":"property _selectedParamName","sym":"#_selectedParamName"},{"pretty":"property AutomationView._selectedParamName","sym":"AutomationView#_selectedParamName"}]],[[{"pretty":"AutomationView.render","sym":"AutomationView#render"}],[{"pretty":"property render","sym":"#render"},{"pretty":"property AutomationView.render","sym":"AutomationView#render"}]],[[],[{"pretty":"property _onResize","sym":"#_onResize"},{"pretty":"property AutomationView._onResize","sym":"AutomationView#_onResize"}]],[[],[{"pretty":"property graph","sym":"#graph"},{"pretty":"property AutomationView.graph","sym":"AutomationView#graph"}]],[[],[{"pretty":"property refresh","sym":"#refresh"}]],[[],[{"pretty":"property _onNodeSet","sym":"#_onNodeSet"},{"pretty":"property AutomationView._onNodeSet","sym":"AutomationView#_onNodeSet"}]],[[{"pretty":"AutomationView._setAudioNode","sym":"AutomationView#_setAudioNode"}],[{"pretty":"property _setAudioNode","sym":"#_setAudioNode"},{"pretty":"property AutomationView._setAudioNode","sym":"AutomationView#_setAudioNode"}]],[[{"pretty":"gAudioNodes","sym":"#gAudioNodes"}],[{"pretty":"property gAudioNodes","sym":"#gAudioNodes"}]]];</script>
    </div>
  <div id="foot" class="footer">
    This page was generated by Searchfox <span class="pretty-date" data-datetime="Wed, 13 Feb 2019 15:28:42 +0000"></span>.
  </div>
  <span id="data" data-root="/" data-search="/mozilla-central/search" data-tree="mozilla-central" data-path="devtools/client/webaudioeditor/views/automation.js"></span>
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
