<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8" />
  <link href="/static/icons/search.png" rel="shortcut icon">
  <title>includes.js - mozsearch</title>
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
<div class="breadcrumbs"><a href="/mozilla-central/source/">mozilla-central</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools">devtools</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client">client</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor">webaudioeditor</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/includes.js">includes.js</a></div>
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
  <a href="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/includes.js" title="Permalink" class="icon" data-update-link="true" data-link="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/includes.js">Permalink <span class="accel">Y</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/log/tip/devtools/client/webaudioeditor/includes.js" title="Log" class="icon">Log <span class="accel">L</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/raw-file/tip/devtools/client/webaudioeditor/includes.js" title="Raw" class="icon">Raw <span class="accel">R</span></a>
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
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#1" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l2" class="line-number">2
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#2" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l3" class="line-number">3
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#3" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l4" class="line-number">4
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#4" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l5" class="line-number">5
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#5" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l6" class="line-number">6
<div class="blame-strip c2" data-blame="e930b89c345761d91f9ea1ad3b7f42b6ed035cc1#%#6" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l7" class="line-number">7
<div class="blame-strip c1" data-blame="ca7fb511f8c96a2e79398dfa51a8bac53f22ef49#%#9" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l8" class="line-number">8
<div class="blame-strip c2" data-blame="a483c4620c1d9c1272f221b5def6688fa00b1a81#%#13" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l9" class="line-number">9
<div class="blame-strip c1" data-blame="efe328f1b2154bc66d8ec44d53c28f551843f69a#%#25" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l10" class="line-number">10
<div class="blame-strip c2" data-blame="d3b05e8c5adca5d46bfe006de588682aa940b505#%#24" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l11" class="line-number">11
<div class="blame-strip c1" data-blame="51759742d16b13c943218a3ba834a03938f410ab#%#25" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l12" class="line-number">12
<div class="blame-strip c2" data-blame="e5437139db730bc04f168394a8081185dd486d59#%#17" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l13" class="line-number">13
<div class="blame-strip c1" data-blame="9f0ddbd26185f278aa09b4dec0fd4b79f249c3f2#%#21" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l14" class="line-number">14
<div class="blame-strip c2" data-blame="1cfbac47ef6bf614b9f37ed678f9226d44de9712#%#23" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l15" class="line-number">15
<div class="blame-strip c1" data-blame="47204c57233f474f36ba48c7a73669d39ae2958e#%#19" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l16" class="line-number">16
<div class="blame-strip c1" data-blame="47204c57233f474f36ba48c7a73669d39ae2958e#%#20" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l17" class="line-number">17
<div class="blame-strip c1" data-blame="47204c57233f474f36ba48c7a73669d39ae2958e#%#21" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l18" class="line-number">18
<div class="blame-strip c1" data-blame="47204c57233f474f36ba48c7a73669d39ae2958e#%#22" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l19" class="line-number">19
<div class="blame-strip c2" data-blame="1fc208e8d88351738ce6f6bffffa429ea0928c20#%#20" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l20" class="line-number">20
<div class="blame-strip c1" data-blame="1cfbac47ef6bf614b9f37ed678f9226d44de9712#%#25" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l21" class="line-number">21
<div class="blame-strip c2" data-blame="af7ea472870e859635f08d20a561888c9f0b2fa4#browser/devtools/webaudioeditor/includes.js#26" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l22" class="line-number">22
<div class="blame-strip c1" data-blame="b9fc38483f367153127f2b600712b49e186624d8#browser/devtools/webaudioeditor/includes.js#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l23" class="line-number">23
<div class="blame-strip c2" data-blame="efe328f1b2154bc66d8ec44d53c28f551843f69a#%#28" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l24" class="line-number">24
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#24" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l25" class="line-number">25
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/includes.js#29" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l26" class="line-number">26
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/includes.js#30" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l27" class="line-number">27
<div class="blame-strip c1" data-blame="64db2267cf9899840b44ce4116c2dd94aa0c3d8e#browser/devtools/webaudioeditor/includes.js#32" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l28" class="line-number">28
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/includes.js#32" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l29" class="line-number">29
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#25" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l30" class="line-number">30
<div class="blame-strip c2" data-blame="c41aba94031e4e46842d558a837eda8212759d9c#browser/devtools/webaudioeditor/includes.js#35" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l31" class="line-number">31
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l32" class="line-number">32
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#28" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l33" class="line-number">33
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#29" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l34" class="line-number">34
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#30" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l35" class="line-number">35
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#31" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l36" class="line-number">36
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#32" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l37" class="line-number">37
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#33" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l38" class="line-number">38
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#34" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l39" class="line-number">39
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#35" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l40" class="line-number">40
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#36" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l41" class="line-number">41
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#37" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l42" class="line-number">42
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#38" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l43" class="line-number">43
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#39" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l44" class="line-number">44
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#40" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l45" class="line-number">45
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#41" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l46" class="line-number">46
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#42" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l47" class="line-number">47
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#43" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l48" class="line-number">48
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#44" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l49" class="line-number">49
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#45" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l50" class="line-number">50
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#46" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l51" class="line-number">51
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#47" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l52" class="line-number">52
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#48" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l53" class="line-number">53
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#49" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l54" class="line-number">54
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#50" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l55" class="line-number">55
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#51" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l56" class="line-number">56
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#52" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l57" class="line-number">57
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#53" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l58" class="line-number">58
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#54" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l59" class="line-number">59
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#55" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l60" class="line-number">60
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/includes.js#59" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l61" class="line-number">61
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/includes.js#60" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l62" class="line-number">62
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/includes.js#61" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l63" class="line-number">63
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#56" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l64" class="line-number">64
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#57" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l65" class="line-number">65
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#58" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l66" class="line-number">66
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#59" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l67" class="line-number">67
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/includes.js#66" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l68" class="line-number">68
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/includes.js#67" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l69" class="line-number">69
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/includes.js#68" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l70" class="line-number">70
<div class="blame-strip c1" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#70" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l71" class="line-number">71
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#61" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l72" class="line-number">72
<div class="blame-strip c1" data-blame="08997000eb0686614686846a7d6bf97b2ed76fa4#%#77" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l73" class="line-number">73
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#62" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l74" class="line-number">74
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#63" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l75" class="line-number">75
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#64" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l76" class="line-number">76
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#65" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l77" class="line-number">77
<div class="blame-strip c1" data-blame="64db2267cf9899840b44ce4116c2dd94aa0c3d8e#browser/devtools/webaudioeditor/includes.js#81" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l78" class="line-number">78
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#67" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l79" class="line-number">79
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#68" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l80" class="line-number">80
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#69" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l81" class="line-number">81
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#70" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l82" class="line-number">82
<div class="blame-strip c1" data-blame="479d43ad5339d5d65f4064ebb9b77727b83d1aec#%#83" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l83" class="line-number">83
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#72" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l84" class="line-number">84
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#73" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l85" class="line-number">85
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#74" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l86" class="line-number">86
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#75" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l87" class="line-number">87
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#87" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l88" class="line-number">88
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#88" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l89" class="line-number">89
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#89" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l90" class="line-number">90
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#90" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l91" class="line-number">91
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#91" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l92" class="line-number">92
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#92" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l93" class="line-number">93
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#78" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l94" class="line-number">94
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#79" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l95" class="line-number">95
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#80" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l96" class="line-number">96
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#81" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l97" class="line-number">97
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#82" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l98" class="line-number">98
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#83" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l99" class="line-number">99
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#84" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l100" class="line-number">100
<div class="blame-strip c1" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#100" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l101" class="line-number">101
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#101" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l102" class="line-number">102
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#102" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l103" class="line-number">103
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#88" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l104" class="line-number">104
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#89" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l105" class="line-number">105
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#90" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l106" class="line-number">106
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#91" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l107" class="line-number">107
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#92" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l108" class="line-number">108
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#93" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l109" class="line-number">109
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#94" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l110" class="line-number">110
<div class="blame-strip c2" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#110" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l111" class="line-number">111
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#96" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l112" class="line-number">112
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#97" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l113" class="line-number">113
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/includes.js#98" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
      </td>
      <td class="code">
<pre><code id="line-1" aria-labelledby="1"><span class="syn_comment" >/* This Source Code Form is subject to the terms of the Mozilla Public</span>
</code><code id="line-2" aria-labelledby="2"><span class="syn_comment" > * License, v. 2.0. If a copy of the MPL was not distributed with this file,</span>
</code><code id="line-3" aria-labelledby="3"><span class="syn_comment" > * You can obtain one at <a href="http://mozilla.org/MPL/2.0/">http://mozilla.org/MPL/2.0/</a>. */</span>
</code><code id="line-4" aria-labelledby="4"><span class="syn_string" >"use strict"</span>;
</code><code id="line-5" aria-labelledby="5">
</code><code id="line-6" aria-labelledby="6"><span class="syn_reserved" >const</span> { <span class="syn_def" data-symbols="#loader" data-i="0" >loader</span>, <span class="syn_def" data-symbols="#require" data-i="1" >require</span> } = <span data-symbols="#ChromeUtils" data-i="2" >ChromeUtils</span>.<span class="syn_reserved" >import</span>(<span class="syn_string" >"<a href="resource://devtools/shared/Loader.jsm">resource://devtools/shared/Loader.jsm</a>"</span>);
</code><code id="line-7" aria-labelledby="7"><span class="syn_reserved" >const</span> { <span class="syn_def" data-symbols="#XPCOMUtils" data-i="3" >XPCOMUtils</span> } = <span data-symbols="#require" data-i="4" >require</span>(<span class="syn_string" >"<a href="resource://gre/modules/XPCOMUtils.jsm">resource://gre/modules/XPCOMUtils.jsm</a>"</span>);
</code><code id="line-8" aria-labelledby="8"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#EventEmitter" data-i="5" >EventEmitter</span> = <span data-symbols="#require" data-i="6" >require</span>(<span class="syn_string" >"devtools/shared/event-emitter"</span>);
</code><code id="line-9" aria-labelledby="9"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#DevToolsUtils" data-i="7" >DevToolsUtils</span> = <span data-symbols="#require" data-i="8" >require</span>(<span class="syn_string" >"devtools/shared/DevToolsUtils"</span>);
</code><code id="line-10" aria-labelledby="10"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#Services" data-i="9" >Services</span> = <span data-symbols="#require" data-i="10" >require</span>(<span class="syn_string" >"Services"</span>);
</code><code id="line-11" aria-labelledby="11"><span class="syn_reserved" >const</span> { <span class="syn_def" data-symbols="#gDevTools" data-i="11" >gDevTools</span> } = <span data-symbols="#require" data-i="12" >require</span>(<span class="syn_string" >"devtools/client/framework/devtools"</span>);
</code><code id="line-12" aria-labelledby="12"><span class="syn_reserved" >const</span> { <span class="syn_def" data-symbols="#LocalizationHelper" data-i="13" >LocalizationHelper</span> } = <span data-symbols="#require" data-i="14" >require</span>(<span class="syn_string" >"devtools/shared/l10n"</span>);
</code><code id="line-13" aria-labelledby="13"><span class="syn_reserved" >const</span> { <span class="syn_def" data-symbols="#ViewHelpers" data-i="15" >ViewHelpers</span> } = <span data-symbols="#require" data-i="16" >require</span>(<span class="syn_string" >"devtools/client/shared/widgets/view-helpers"</span>);
</code><code id="line-14" aria-labelledby="14">
</code><code id="line-15" aria-labelledby="15"><span class="syn_comment" >// Use privileged promise in panel documents to prevent having them to freeze</span>
</code><code id="line-16" aria-labelledby="16"><span class="syn_comment" >// during toolbox destruction. See <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1402779">bug 1402779</a>.</span>
</code><code id="line-17" aria-labelledby="17"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#Promise" data-i="17" >Promise</span> = <span data-symbols="#require" data-i="18" >require</span>(<span class="syn_string" >"Promise"</span>);
</code><code id="line-18" aria-labelledby="18">
</code><code id="line-19" aria-labelledby="19"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#STRINGS_URI" data-i="19" >STRINGS_URI</span> = <span class="syn_string" >"devtools/client/locales/webaudioeditor.properties"</span>;
</code><code id="line-20" aria-labelledby="20"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#L10N" data-i="20" >L10N</span> = <span class="syn_reserved" >new</span> <span data-symbols="#LocalizationHelper" data-i="21" >LocalizationHelper</span>(<span data-symbols="#STRINGS_URI" data-i="22" >STRINGS_URI</span>);
</code><code id="line-21" aria-labelledby="21">
</code><code id="line-22" aria-labelledby="22"><span data-symbols="#loader" data-i="23" >loader</span>.<span data-symbols="#lazyRequireGetter,loader#lazyRequireGetter" data-i="24" >lazyRequireGetter</span>(<span class="syn_reserved" >this</span>, <span class="syn_string" >"LineGraphWidget"</span>,
</code><code id="line-23" aria-labelledby="23">  <span class="syn_string" >"devtools/client/shared/widgets/LineGraphWidget"</span>);
</code><code id="line-24" aria-labelledby="24">
</code><code id="line-25" aria-labelledby="25"><span class="syn_comment" >// `AUDIO_NODE_DEFINITION` defined in the controller's initialization,</span>
</code><code id="line-26" aria-labelledby="26"><span class="syn_comment" >// which describes all the properties of an AudioNode</span>
</code><code id="line-27" aria-labelledby="27"><span class="syn_reserved" >var</span> <span class="syn_def" data-symbols="#AUDIO_NODE_DEFINITION" data-i="25" >AUDIO_NODE_DEFINITION</span>;
</code><code id="line-28" aria-labelledby="28">
</code><code id="line-29" aria-labelledby="29"><span class="syn_comment" >// Override DOM promises with Promise.jsm helpers</span>
</code><code id="line-30" aria-labelledby="30"><span class="syn_reserved" >const</span> { <span class="syn_def" data-symbols="#defer" data-i="26" >defer</span>, <span class="syn_def" data-symbols="#all" data-i="27" >all</span> } = <span data-symbols="#require" data-i="28" >require</span>(<span class="syn_string" >"promise"</span>);
</code><code id="line-31" aria-labelledby="31">
</code><code id="line-32" aria-labelledby="32"><span class="syn_comment" >/* Events fired on `window` to indicate state or actions*/</span>
</code><code id="line-33" aria-labelledby="33"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#EVENTS" data-i="29" >EVENTS</span> = {
</code><code id="line-34" aria-labelledby="34">  <span class="syn_comment" >// Fired when the first AudioNode has been created, signifying</span>
</code><code id="line-35" aria-labelledby="35">  <span class="syn_comment" >// that the AudioContext is being used and should be tracked via the editor.</span>
</code><code id="line-36" aria-labelledby="36">  <span class="syn_def syn_def" data-symbols="#START_CONTEXT,EVENTS#START_CONTEXT" data-i="30" >START_CONTEXT</span>: <span class="syn_string" >"WebAudioEditor:StartContext"</span>,
</code><code id="line-37" aria-labelledby="37">
</code><code id="line-38" aria-labelledby="38">  <span class="syn_comment" >// When the devtools theme changes.</span>
</code><code id="line-39" aria-labelledby="39">  <span class="syn_def syn_def" data-symbols="#THEME_CHANGE,EVENTS#THEME_CHANGE" data-i="31" >THEME_CHANGE</span>: <span class="syn_string" >"WebAudioEditor:ThemeChange"</span>,
</code><code id="line-40" aria-labelledby="40">
</code><code id="line-41" aria-labelledby="41">  <span class="syn_comment" >// When the UI is reset from tab navigation.</span>
</code><code id="line-42" aria-labelledby="42">  <span class="syn_def syn_def" data-symbols="#UI_RESET,EVENTS#UI_RESET" data-i="32" >UI_RESET</span>: <span class="syn_string" >"WebAudioEditor:UIReset"</span>,
</code><code id="line-43" aria-labelledby="43">
</code><code id="line-44" aria-labelledby="44">  <span class="syn_comment" >// When a param has been changed via the UI and successfully</span>
</code><code id="line-45" aria-labelledby="45">  <span class="syn_comment" >// pushed via the actor to the raw audio node.</span>
</code><code id="line-46" aria-labelledby="46">  <span class="syn_def syn_def" data-symbols="#UI_SET_PARAM,EVENTS#UI_SET_PARAM" data-i="33" >UI_SET_PARAM</span>: <span class="syn_string" >"WebAudioEditor:UISetParam"</span>,
</code><code id="line-47" aria-labelledby="47">
</code><code id="line-48" aria-labelledby="48">  <span class="syn_comment" >// When a node is to be set in the InspectorView.</span>
</code><code id="line-49" aria-labelledby="49">  <span class="syn_def syn_def" data-symbols="#UI_SELECT_NODE,EVENTS#UI_SELECT_NODE" data-i="34" >UI_SELECT_NODE</span>: <span class="syn_string" >"WebAudioEditor:UISelectNode"</span>,
</code><code id="line-50" aria-labelledby="50">
</code><code id="line-51" aria-labelledby="51">  <span class="syn_comment" >// When the inspector is finished setting a new node.</span>
</code><code id="line-52" aria-labelledby="52">  <span class="syn_def syn_def" data-symbols="#UI_INSPECTOR_NODE_SET,EVENTS#UI_INSPECTOR_NODE_SET" data-i="35" >UI_INSPECTOR_NODE_SET</span>: <span class="syn_string" >"WebAudioEditor:UIInspectorNodeSet"</span>,
</code><code id="line-53" aria-labelledby="53">
</code><code id="line-54" aria-labelledby="54">  <span class="syn_comment" >// When the inspector is finished rendering in or out of view.</span>
</code><code id="line-55" aria-labelledby="55">  <span class="syn_def syn_def" data-symbols="#UI_INSPECTOR_TOGGLED,EVENTS#UI_INSPECTOR_TOGGLED" data-i="36" >UI_INSPECTOR_TOGGLED</span>: <span class="syn_string" >"WebAudioEditor:UIInspectorToggled"</span>,
</code><code id="line-56" aria-labelledby="56">
</code><code id="line-57" aria-labelledby="57">  <span class="syn_comment" >// When an audio node is finished loading in the Properties tab.</span>
</code><code id="line-58" aria-labelledby="58">  <span class="syn_def syn_def" data-symbols="#UI_PROPERTIES_TAB_RENDERED,EVENTS#UI_PROPERTIES_TAB_RENDERED" data-i="37" >UI_PROPERTIES_TAB_RENDERED</span>: <span class="syn_string" >"WebAudioEditor:UIPropertiesTabRendered"</span>,
</code><code id="line-59" aria-labelledby="59">
</code><code id="line-60" aria-labelledby="60">  <span class="syn_comment" >// When an audio node is finished loading in the Automation tab.</span>
</code><code id="line-61" aria-labelledby="61">  <span class="syn_def syn_def" data-symbols="#UI_AUTOMATION_TAB_RENDERED,EVENTS#UI_AUTOMATION_TAB_RENDERED" data-i="38" >UI_AUTOMATION_TAB_RENDERED</span>: <span class="syn_string" >"WebAudioEditor:UIAutomationTabRendered"</span>,
</code><code id="line-62" aria-labelledby="62">
</code><code id="line-63" aria-labelledby="63">  <span class="syn_comment" >// When the Audio Context graph finishes rendering.</span>
</code><code id="line-64" aria-labelledby="64">  <span class="syn_comment" >// Is called with two arguments, first representing number of nodes</span>
</code><code id="line-65" aria-labelledby="65">  <span class="syn_comment" >// rendered, second being the number of edge connections rendering (not counting</span>
</code><code id="line-66" aria-labelledby="66">  <span class="syn_comment" >// param edges), followed by the count of the param edges rendered.</span>
</code><code id="line-67" aria-labelledby="67">  <span class="syn_def syn_def" data-symbols="#UI_GRAPH_RENDERED,EVENTS#UI_GRAPH_RENDERED" data-i="39" >UI_GRAPH_RENDERED</span>: <span class="syn_string" >"WebAudioEditor:UIGraphRendered"</span>,
</code><code id="line-68" aria-labelledby="68">
</code><code id="line-69" aria-labelledby="69">  <span class="syn_comment" >// Called when the inspector splitter is moved and resized.</span>
</code><code id="line-70" aria-labelledby="70">  <span class="syn_def syn_def" data-symbols="#UI_INSPECTOR_RESIZE,EVENTS#UI_INSPECTOR_RESIZE" data-i="40" >UI_INSPECTOR_RESIZE</span>: <span class="syn_string" >"WebAudioEditor:UIInspectorResize"</span>,
</code><code id="line-71" aria-labelledby="71">};
</code><code id="line-72" aria-labelledby="72"><span data-symbols="#XPCOMUtils" data-i="41" >XPCOMUtils</span>.<span data-symbols="#defineConstant,XPCOMUtils#defineConstant" data-i="42" >defineConstant</span>(<span class="syn_reserved" >this</span>, <span class="syn_string" >"EVENTS"</span>, <span data-symbols="#EVENTS" data-i="43" >EVENTS</span>);
</code><code id="line-73" aria-labelledby="73">
</code><code id="line-74" aria-labelledby="74"><span class="syn_comment" >/**</span>
</code><code id="line-75" aria-labelledby="75"><span class="syn_comment" > * The current target and the Web Audio Editor front, set by this tool's host.</span>
</code><code id="line-76" aria-labelledby="76"><span class="syn_comment" > */</span>
</code><code id="line-77" aria-labelledby="77"><span class="syn_reserved" >var</span> <span class="syn_def" data-symbols="#gToolbox" data-i="44" >gToolbox</span>, <span class="syn_def" data-symbols="#gTarget" data-i="45" >gTarget</span>, <span class="syn_def" data-symbols="#gFront" data-i="46" >gFront</span>;
</code><code id="line-78" aria-labelledby="78">
</code><code id="line-79" aria-labelledby="79"><span class="syn_comment" >/**</span>
</code><code id="line-80" aria-labelledby="80"><span class="syn_comment" > * Convenient way of emitting events from the panel window.</span>
</code><code id="line-81" aria-labelledby="81"><span class="syn_comment" > */</span>
</code><code id="line-82" aria-labelledby="82"><span data-symbols="#EventEmitter" data-i="47" >EventEmitter</span>.<span data-symbols="#decorate,EventEmitter#decorate" data-i="48" >decorate</span>(<span class="syn_reserved" >this</span>);
</code><code id="line-83" aria-labelledby="83">
</code><code id="line-84" aria-labelledby="84"><span class="syn_comment" >/**</span>
</code><code id="line-85" aria-labelledby="85"><span class="syn_comment" > * DOM query helper.</span>
</code><code id="line-86" aria-labelledby="86"><span class="syn_comment" > */</span>
</code><code id="line-87" aria-labelledby="87"><span class="syn_reserved" >function</span> $(<span data-symbols="7323-0" >selector</span>, <span data-symbols="7323-1" >target</span> = <span data-symbols="#document" data-i="49" >document</span>) {
</code><code id="line-88" aria-labelledby="88">  <span class="syn_reserved" >return</span> <span data-symbols="7323-1" >target</span>.<span data-symbols="#querySelector,target#querySelector" data-i="50" >querySelector</span>(<span data-symbols="7323-0" >selector</span>);
</code><code id="line-89" aria-labelledby="89">}
</code><code id="line-90" aria-labelledby="90"><span class="syn_reserved" >function</span> $$(<span data-symbols="7323-2" >selector</span>, <span data-symbols="7323-3" >target</span> = <span data-symbols="#document" data-i="51" >document</span>) {
</code><code id="line-91" aria-labelledby="91">  <span class="syn_reserved" >return</span> <span data-symbols="7323-3" >target</span>.<span data-symbols="#querySelectorAll,target#querySelectorAll" data-i="52" >querySelectorAll</span>(<span data-symbols="7323-2" >selector</span>);
</code><code id="line-92" aria-labelledby="92">}
</code><code id="line-93" aria-labelledby="93">
</code><code id="line-94" aria-labelledby="94"><span class="syn_comment" >/**</span>
</code><code id="line-95" aria-labelledby="95"><span class="syn_comment" > * Takes an iterable collection, and a hash. Return the first</span>
</code><code id="line-96" aria-labelledby="96"><span class="syn_comment" > * object in the collection that matches the values in the hash.</span>
</code><code id="line-97" aria-labelledby="97"><span class="syn_comment" > * From Backbone.Collection#findWhere</span>
</code><code id="line-98" aria-labelledby="98"><span class="syn_comment" > * <a href="http://backbonejs.org/#Collection-findWhere">http://backbonejs.org/#Collection-findWhere</a></span>
</code><code id="line-99" aria-labelledby="99"><span class="syn_comment" > */</span>
</code><code id="line-100" aria-labelledby="100"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#findWhere" data-i="53" >findWhere</span>(<span data-symbols="7323-4" >collection</span>, <span data-symbols="7323-5" >attrs</span>) {
</code><code id="line-101" aria-labelledby="101">  <span class="syn_reserved" >const</span> <span data-symbols="7323-6" >keys</span> = <span data-symbols="#Object" data-i="54" >Object</span>.<span data-symbols="#keys,Object#keys" data-i="55" >keys</span>(<span data-symbols="7323-5" >attrs</span>);
</code><code id="line-102" aria-labelledby="102">  <span class="syn_reserved" >for</span> (<span class="syn_reserved" >const</span> <span data-symbols="7323-7" >model</span> of <span data-symbols="7323-4" >collection</span>) {
</code><code id="line-103" aria-labelledby="103">    <span class="syn_reserved" >if</span> (<span data-symbols="7323-6" >keys</span>.<span data-symbols="#every,keys#every" data-i="56" >every</span>(<span data-symbols="7323-8" >key</span> => <span data-symbols="7323-7" >model</span>[<span data-symbols="7323-8" >key</span>] === <span data-symbols="7323-5" >attrs</span>[<span data-symbols="7323-8" >key</span>])) {
</code><code id="line-104" aria-labelledby="104">      <span class="syn_reserved" >return</span> <span data-symbols="7323-7" >model</span>;
</code><code id="line-105" aria-labelledby="105">    }
</code><code id="line-106" aria-labelledby="106">  }
</code><code id="line-107" aria-labelledby="107">  <span class="syn_reserved" >return</span> <span class="syn_reserved" >void</span> 0;
</code><code id="line-108" aria-labelledby="108">}
</code><code id="line-109" aria-labelledby="109">
</code><code id="line-110" aria-labelledby="110"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#mixin" data-i="57" >mixin</span>(<span data-symbols="7323-9" >source</span>, ...<span data-symbols="7323-10" >args</span>) {
</code><code id="line-111" aria-labelledby="111">  <span data-symbols="7323-10" >args</span>.<span data-symbols="#forEach,args#forEach" data-i="58" >forEach</span>(<span data-symbols="7323-11" >obj</span> => <span data-symbols="#Object" data-i="59" >Object</span>.<span data-symbols="#keys,Object#keys" data-i="60" >keys</span>(<span data-symbols="7323-11" >obj</span>).<span data-symbols="#forEach" data-i="61" >forEach</span>(<span data-symbols="7323-12" >prop</span> => <span data-symbols="7323-9" >source</span>[<span data-symbols="7323-12" >prop</span>] = <span data-symbols="7323-11" >obj</span>[<span data-symbols="7323-12" >prop</span>]));
</code><code id="line-112" aria-labelledby="112">  <span class="syn_reserved" >return</span> <span data-symbols="7323-9" >source</span>;
</code><code id="line-113" aria-labelledby="113">}
</code></pre>      </td>
    </tr>
  </tbody>
</table>
<script>var ANALYSIS_DATA = [[[],[{"pretty":"property loader","sym":"#loader"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property ChromeUtils","sym":"#ChromeUtils"}]],[[],[{"pretty":"property XPCOMUtils","sym":"#XPCOMUtils"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property EventEmitter","sym":"#EventEmitter"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property DevToolsUtils","sym":"#DevToolsUtils"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property Services","sym":"#Services"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property gDevTools","sym":"#gDevTools"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property LocalizationHelper","sym":"#LocalizationHelper"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property ViewHelpers","sym":"#ViewHelpers"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property Promise","sym":"#Promise"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property STRINGS_URI","sym":"#STRINGS_URI"}]],[[],[{"pretty":"property L10N","sym":"#L10N"}]],[[],[{"pretty":"property LocalizationHelper","sym":"#LocalizationHelper"}]],[[],[{"pretty":"property STRINGS_URI","sym":"#STRINGS_URI"}]],[[],[{"pretty":"property loader","sym":"#loader"}]],[[{"pretty":"loader.lazyRequireGetter","sym":"loader#lazyRequireGetter"}],[{"pretty":"property lazyRequireGetter","sym":"#lazyRequireGetter"},{"pretty":"property loader.lazyRequireGetter","sym":"loader#lazyRequireGetter"}]],[[],[{"pretty":"property AUDIO_NODE_DEFINITION","sym":"#AUDIO_NODE_DEFINITION"}]],[[],[{"pretty":"property defer","sym":"#defer"}]],[[],[{"pretty":"property all","sym":"#all"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[],[{"pretty":"property START_CONTEXT","sym":"#START_CONTEXT"},{"pretty":"property EVENTS.START_CONTEXT","sym":"EVENTS#START_CONTEXT"}]],[[],[{"pretty":"property THEME_CHANGE","sym":"#THEME_CHANGE"},{"pretty":"property EVENTS.THEME_CHANGE","sym":"EVENTS#THEME_CHANGE"}]],[[],[{"pretty":"property UI_RESET","sym":"#UI_RESET"},{"pretty":"property EVENTS.UI_RESET","sym":"EVENTS#UI_RESET"}]],[[],[{"pretty":"property UI_SET_PARAM","sym":"#UI_SET_PARAM"},{"pretty":"property EVENTS.UI_SET_PARAM","sym":"EVENTS#UI_SET_PARAM"}]],[[],[{"pretty":"property UI_SELECT_NODE","sym":"#UI_SELECT_NODE"},{"pretty":"property EVENTS.UI_SELECT_NODE","sym":"EVENTS#UI_SELECT_NODE"}]],[[],[{"pretty":"property UI_INSPECTOR_NODE_SET","sym":"#UI_INSPECTOR_NODE_SET"},{"pretty":"property EVENTS.UI_INSPECTOR_NODE_SET","sym":"EVENTS#UI_INSPECTOR_NODE_SET"}]],[[],[{"pretty":"property UI_INSPECTOR_TOGGLED","sym":"#UI_INSPECTOR_TOGGLED"},{"pretty":"property EVENTS.UI_INSPECTOR_TOGGLED","sym":"EVENTS#UI_INSPECTOR_TOGGLED"}]],[[],[{"pretty":"property UI_PROPERTIES_TAB_RENDERED","sym":"#UI_PROPERTIES_TAB_RENDERED"},{"pretty":"property EVENTS.UI_PROPERTIES_TAB_RENDERED","sym":"EVENTS#UI_PROPERTIES_TAB_RENDERED"}]],[[],[{"pretty":"property UI_AUTOMATION_TAB_RENDERED","sym":"#UI_AUTOMATION_TAB_RENDERED"},{"pretty":"property EVENTS.UI_AUTOMATION_TAB_RENDERED","sym":"EVENTS#UI_AUTOMATION_TAB_RENDERED"}]],[[],[{"pretty":"property UI_GRAPH_RENDERED","sym":"#UI_GRAPH_RENDERED"},{"pretty":"property EVENTS.UI_GRAPH_RENDERED","sym":"EVENTS#UI_GRAPH_RENDERED"}]],[[],[{"pretty":"property UI_INSPECTOR_RESIZE","sym":"#UI_INSPECTOR_RESIZE"},{"pretty":"property EVENTS.UI_INSPECTOR_RESIZE","sym":"EVENTS#UI_INSPECTOR_RESIZE"}]],[[],[{"pretty":"property XPCOMUtils","sym":"#XPCOMUtils"}]],[[{"pretty":"XPCOMUtils.defineConstant","sym":"XPCOMUtils#defineConstant"}],[{"pretty":"property defineConstant","sym":"#defineConstant"},{"pretty":"property XPCOMUtils.defineConstant","sym":"XPCOMUtils#defineConstant"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[],[{"pretty":"property gToolbox","sym":"#gToolbox"}]],[[],[{"pretty":"property gTarget","sym":"#gTarget"}]],[[],[{"pretty":"property gFront","sym":"#gFront"}]],[[],[{"pretty":"property EventEmitter","sym":"#EventEmitter"}]],[[{"pretty":"decorate","sym":"#decorate"}],[{"pretty":"property decorate","sym":"#decorate"},{"pretty":"property EventEmitter.decorate","sym":"EventEmitter#decorate"}]],[[],[{"pretty":"property document","sym":"#document"}]],[[],[{"pretty":"property querySelector","sym":"#querySelector"},{"pretty":"property target.querySelector","sym":"target#querySelector"}]],[[],[{"pretty":"property document","sym":"#document"}]],[[],[{"pretty":"property querySelectorAll","sym":"#querySelectorAll"},{"pretty":"property target.querySelectorAll","sym":"target#querySelectorAll"}]],[[],[{"pretty":"property findWhere","sym":"#findWhere"}]],[[],[{"pretty":"property Object","sym":"#Object"}]],[[],[{"pretty":"property keys","sym":"#keys"},{"pretty":"property Object.keys","sym":"Object#keys"}]],[[],[{"pretty":"property every","sym":"#every"},{"pretty":"property keys.every","sym":"keys#every"}]],[[],[{"pretty":"property mixin","sym":"#mixin"}]],[[],[{"pretty":"property forEach","sym":"#forEach"},{"pretty":"property args.forEach","sym":"args#forEach"}]],[[],[{"pretty":"property Object","sym":"#Object"}]],[[],[{"pretty":"property keys","sym":"#keys"},{"pretty":"property Object.keys","sym":"Object#keys"}]],[[],[{"pretty":"property forEach","sym":"#forEach"}]]];</script>
    </div>
  <div id="foot" class="footer">
    This page was generated by Searchfox <span class="pretty-date" data-datetime="Wed, 13 Feb 2019 15:28:42 +0000"></span>.
  </div>
  <span id="data" data-root="/" data-search="/mozilla-central/search" data-tree="mozilla-central" data-path="devtools/client/webaudioeditor/includes.js"></span>
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
