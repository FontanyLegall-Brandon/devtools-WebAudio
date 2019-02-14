<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8" />
  <link href="/static/icons/search.png" rel="shortcut icon">
  <title>models.js - mozsearch</title>
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
<div class="breadcrumbs"><a href="/mozilla-central/source/">mozilla-central</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools">devtools</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client">client</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor">webaudioeditor</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/models.js">models.js</a></div>
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
  <a href="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/models.js" title="Permalink" class="icon" data-update-link="true" data-link="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/models.js">Permalink <span class="accel">Y</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/log/tip/devtools/client/webaudioeditor/models.js" title="Log" class="icon">Log <span class="accel">L</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/raw-file/tip/devtools/client/webaudioeditor/models.js" title="Raw" class="icon">Raw <span class="accel">R</span></a>
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
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#1" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l2" class="line-number">2
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#2" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l3" class="line-number">3
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#3" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l4" class="line-number">4
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#4" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l5" class="line-number">5
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#5" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l6" class="line-number">6
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#10" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l7" class="line-number">7
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#11" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l8" class="line-number">8
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#12" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l9" class="line-number">9
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#13" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l10" class="line-number">10
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#14" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l11" class="line-number">11
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#15" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l12" class="line-number">12
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#16" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l13" class="line-number">13
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#17" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l14" class="line-number">14
<div class="blame-strip c2" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#14" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l15" class="line-number">15
<div class="blame-strip c2" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#15" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l16" class="line-number">16
<div class="blame-strip c2" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#16" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l17" class="line-number">17
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#20" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l18" class="line-number">18
<div class="blame-strip c2" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#18" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l19" class="line-number">19
<div class="blame-strip c2" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#19" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l20" class="line-number">20
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#23" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l21" class="line-number">21
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#25" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l22" class="line-number">22
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#26" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l23" class="line-number">23
<div class="blame-strip c2" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#browser/devtools/webaudioeditor/models.js#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l24" class="line-number">24
<div class="blame-strip c2" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#browser/devtools/webaudioeditor/models.js#28" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l25" class="line-number">25
<div class="blame-strip c2" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#browser/devtools/webaudioeditor/models.js#29" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l26" class="line-number">26
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l27" class="line-number">27
<div class="blame-strip c2" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l28" class="line-number">28
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#29" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l29" class="line-number">29
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#30" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l30" class="line-number">30
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#52" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l31" class="line-number">31
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#53" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l32" class="line-number">32
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#54" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l33" class="line-number">33
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#55" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l34" class="line-number">34
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#56" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l35" class="line-number">35
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#57" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l36" class="line-number">36
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#58" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l37" class="line-number">37
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#59" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l38" class="line-number">38
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#60" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l39" class="line-number">39
<div class="blame-strip c2" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#39" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l40" class="line-number">40
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#40" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l41" class="line-number">41
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#63" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l42" class="line-number">42
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#64" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l43" class="line-number">43
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#65" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l44" class="line-number">44
<div class="blame-strip c1" data-blame="a483c4620c1d9c1272f221b5def6688fa00b1a81#%#44" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l45" class="line-number">45
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#67" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l46" class="line-number">46
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#46" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l47" class="line-number">47
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#69" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l48" class="line-number">48
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#70" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l49" class="line-number">49
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#71" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l50" class="line-number">50
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#72" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l51" class="line-number">51
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#51" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l52" class="line-number">52
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#74" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l53" class="line-number">53
<div class="blame-strip c1" data-blame="a483c4620c1d9c1272f221b5def6688fa00b1a81#%#53" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l54" class="line-number">54
<div class="blame-strip c2" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#54" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l55" class="line-number">55
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#77" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l56" class="line-number">56
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#78" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l57" class="line-number">57
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/models.js#85" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l58" class="line-number">58
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/models.js#86" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l59" class="line-number">59
<div class="blame-strip c1" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#browser/devtools/webaudioeditor/models.js#63" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l60" class="line-number">60
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/models.js#88" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l61" class="line-number">61
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#61" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l62" class="line-number">62
<div class="blame-strip c2" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#browser/devtools/webaudioeditor/models.js#66" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l63" class="line-number">63
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#63" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l64" class="line-number">64
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/models.js#92" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l65" class="line-number">65
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/models.js#93" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l66" class="line-number">66
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/models.js#94" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l67" class="line-number">67
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/models.js#95" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l68" class="line-number">68
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/models.js#96" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l69" class="line-number">69
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/models.js#97" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l70" class="line-number">70
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/models.js#98" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l71" class="line-number">71
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#71" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l72" class="line-number">72
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/models.js#100" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l73" class="line-number">73
<div class="blame-strip c1" data-blame="a483c4620c1d9c1272f221b5def6688fa00b1a81#%#73" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l74" class="line-number">74
<div class="blame-strip c2" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#74" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l75" class="line-number">75
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/models.js#103" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l76" class="line-number">76
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/models.js#104" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l77" class="line-number">77
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#79" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l78" class="line-number">78
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#80" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l79" class="line-number">79
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#81" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l80" class="line-number">80
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#82" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l81" class="line-number">81
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#83" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l82" class="line-number">82
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#82" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l83" class="line-number">83
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#85" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l84" class="line-number">84
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#84" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l85" class="line-number">85
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#87" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l86" class="line-number">86
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#88" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l87" class="line-number">87
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/models.js#89" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l88" class="line-number">88
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/models.js#90" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l89" class="line-number">89
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/models.js#91" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l90" class="line-number">90
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/models.js#92" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l91" class="line-number">91
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/models.js#93" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l92" class="line-number">92
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/models.js#94" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l93" class="line-number">93
<div class="blame-strip c2" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#93" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l94" class="line-number">94
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/models.js#96" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l95" class="line-number">95
<div class="blame-strip c2" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#95" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l96" class="line-number">96
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/models.js#98" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l97" class="line-number">97
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/models.js#99" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l98" class="line-number">98
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#89" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l99" class="line-number">99
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#90" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l100" class="line-number">100
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#91" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l101" class="line-number">101
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#92" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l102" class="line-number">102
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#93" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l103" class="line-number">103
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#103" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l104" class="line-number">104
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#95" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l105" class="line-number">105
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#96" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l106" class="line-number">106
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#97" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l107" class="line-number">107
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/models.js#135" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l108" class="line-number">108
<div class="blame-strip c2" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#108" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l109" class="line-number">109
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#99" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l110" class="line-number">110
<div class="blame-strip c2" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#110" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l111" class="line-number">111
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#101" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l112" class="line-number">112
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#102" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l113" class="line-number">113
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#103" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l114" class="line-number">114
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#104" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l115" class="line-number">115
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#105" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l116" class="line-number">116
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#106" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l117" class="line-number">117
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#107" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l118" class="line-number">118
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#108" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l119" class="line-number">119
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#109" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l120" class="line-number">120
<div class="blame-strip c2" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#120" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l121" class="line-number">121
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#121" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l122" class="line-number">122
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#122" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l123" class="line-number">123
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#113" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l124" class="line-number">124
<div class="blame-strip c1" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#124" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l125" class="line-number">125
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#115" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l126" class="line-number">126
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#116" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l127" class="line-number">127
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#117" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l128" class="line-number">128
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#118" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l129" class="line-number">129
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#119" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l130" class="line-number">130
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#120" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l131" class="line-number">131
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#121" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l132" class="line-number">132
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#122" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l133" class="line-number">133
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#123" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l134" class="line-number">134
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#124" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l135" class="line-number">135
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#125" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l136" class="line-number">136
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#126" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l137" class="line-number">137
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#137" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l138" class="line-number">138
<div class="blame-strip c2" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#browser/devtools/webaudioeditor/models.js#142" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l139" class="line-number">139
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#139" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l140" class="line-number">140
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#140" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l141" class="line-number">141
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#141" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l142" class="line-number">142
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#142" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l143" class="line-number">143
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#129" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l144" class="line-number">144
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#131" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l145" class="line-number">145
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#132" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l146" class="line-number">146
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#133" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l147" class="line-number">147
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#134" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l148" class="line-number">148
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#135" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l149" class="line-number">149
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#136" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l150" class="line-number">150
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#137" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l151" class="line-number">151
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#138" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l152" class="line-number">152
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#139" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l153" class="line-number">153
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#154" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l154" class="line-number">154
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#155" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l155" class="line-number">155
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#156" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l156" class="line-number">156
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#142" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l157" class="line-number">157
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#158" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l158" class="line-number">158
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#146" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l159" class="line-number">159
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#147" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l160" class="line-number">160
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#161" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l161" class="line-number">161
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#149" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l162" class="line-number">162
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#150" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l163" class="line-number">163
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#151" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l164" class="line-number">164
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#152" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l165" class="line-number">165
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#153" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l166" class="line-number">166
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#154" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l167" class="line-number">167
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#155" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l168" class="line-number">168
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#169" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l169" class="line-number">169
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#157" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l170" class="line-number">170
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#171" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l171" class="line-number">171
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#159" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l172" class="line-number">172
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#160" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l173" class="line-number">173
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#161" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l174" class="line-number">174
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#162" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l175" class="line-number">175
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#163" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l176" class="line-number">176
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#164" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l177" class="line-number">177
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#168" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l178" class="line-number">178
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#169" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l179" class="line-number">179
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#170" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l180" class="line-number">180
<div class="blame-strip c1" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#browser/devtools/webaudioeditor/models.js#184" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l181" class="line-number">181
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#172" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l182" class="line-number">182
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#183" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l183" class="line-number">183
<div class="blame-strip c2" data-blame="d226fcc86a0395cfec6ccc924c10c975e28cd3cb#%#183" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l184" class="line-number">184
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#184" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l185" class="line-number">185
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#175" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l186" class="line-number">186
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#177" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l187" class="line-number">187
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#178" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l188" class="line-number">188
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#179" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l189" class="line-number">189
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#180" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l190" class="line-number">190
<div class="blame-strip c1" data-blame="a483c4620c1d9c1272f221b5def6688fa00b1a81#%#189" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l191" class="line-number">191
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#182" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l192" class="line-number">192
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#192" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l193" class="line-number">193
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#184" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l194" class="line-number">194
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#185" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l195" class="line-number">195
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#186" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l196" class="line-number">196
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#187" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l197" class="line-number">197
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#188" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l198" class="line-number">198
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#189" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l199" class="line-number">199
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#190" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l200" class="line-number">200
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#200" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l201" class="line-number">201
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#192" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l202" class="line-number">202
<div class="blame-strip c1" data-blame="a483c4620c1d9c1272f221b5def6688fa00b1a81#%#201" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l203" class="line-number">203
<div class="blame-strip c2" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#203" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l204" class="line-number">204
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#195" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l205" class="line-number">205
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#196" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l206" class="line-number">206
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#197" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l207" class="line-number">207
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#198" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l208" class="line-number">208
<div class="blame-strip c2" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#208" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l209" class="line-number">209
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#200" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l210" class="line-number">210
<div class="blame-strip c2" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#210" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l211" class="line-number">211
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#202" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l212" class="line-number">212
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#203" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l213" class="line-number">213
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#204" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l214" class="line-number">214
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#205" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l215" class="line-number">215
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#206" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l216" class="line-number">216
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#207" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l217" class="line-number">217
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#208" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l218" class="line-number">218
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#209" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l219" class="line-number">219
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#210" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l220" class="line-number">220
<div class="blame-strip c2" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#220" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l221" class="line-number">221
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#212" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l222" class="line-number">222
<div class="blame-strip c2" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#222" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l223" class="line-number">223
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#214" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l224" class="line-number">224
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#215" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l225" class="line-number">225
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#216" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l226" class="line-number">226
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#217" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l227" class="line-number">227
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#218" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l228" class="line-number">228
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#219" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l229" class="line-number">229
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#220" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l230" class="line-number">230
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#221" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l231" class="line-number">231
<div class="blame-strip c2" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#231" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l232" class="line-number">232
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#223" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l233" class="line-number">233
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#224" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l234" class="line-number">234
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#225" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l235" class="line-number">235
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#226" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l236" class="line-number">236
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#227" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l237" class="line-number">237
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#228" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l238" class="line-number">238
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#229" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l239" class="line-number">239
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#230" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l240" class="line-number">240
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#231" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l241" class="line-number">241
<div class="blame-strip c2" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#241" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l242" class="line-number">242
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#242" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l243" class="line-number">243
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#234" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l244" class="line-number">244
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#235" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l245" class="line-number">245
<div class="blame-strip c1" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#245" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l246" class="line-number">246
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#237" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l247" class="line-number">247
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#238" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l248" class="line-number">248
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#239" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l249" class="line-number">249
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#249" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l250" class="line-number">250
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#241" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l251" class="line-number">251
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#242" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l252" class="line-number">252
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#243" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l253" class="line-number">253
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#244" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l254" class="line-number">254
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#254" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l255" class="line-number">255
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#246" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l256" class="line-number">256
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#247" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l257" class="line-number">257
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#248" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l258" class="line-number">258
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#249" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l259" class="line-number">259
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#250" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l260" class="line-number">260
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#251" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l261" class="line-number">261
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#252" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l262" class="line-number">262
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#262" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l263" class="line-number">263
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#254" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l264" class="line-number">264
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#255" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l265" class="line-number">265
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#265" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l266" class="line-number">266
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#257" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l267" class="line-number">267
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#258" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l268" class="line-number">268
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#259" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l269" class="line-number">269
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#260" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l270" class="line-number">270
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#261" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l271" class="line-number">271
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#262" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l272" class="line-number">272
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#272" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l273" class="line-number">273
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#264" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l274" class="line-number">274
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#265" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l275" class="line-number">275
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#266" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l276" class="line-number">276
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#267" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l277" class="line-number">277
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#268" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l278" class="line-number">278
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#269" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l279" class="line-number">279
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#270" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l280" class="line-number">280
<div class="blame-strip c1" data-blame="a483c4620c1d9c1272f221b5def6688fa00b1a81#%#279" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l281" class="line-number">281
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/models.js#272" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l282" class="line-number">282
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#282" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l283" class="line-number">283
<div class="blame-strip c2" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#browser/devtools/webaudioeditor/models.js#286" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l284" class="line-number">284
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#284" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l285" class="line-number">285
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#285" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l286" class="line-number">286
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#286" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l287" class="line-number">287
<div class="blame-strip c1" data-blame="a8c9407c23a14f0fb4793ca6e1c5fdb2235618ff#%#287" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
      </td>
      <td class="code">
<pre><code id="line-1" aria-labelledby="1"><span class="syn_comment" >/* This Source Code Form is subject to the terms of the Mozilla Public</span>
</code><code id="line-2" aria-labelledby="2"><span class="syn_comment" > * License, v. 2.0. If a copy of the MPL was not distributed with this file,</span>
</code><code id="line-3" aria-labelledby="3"><span class="syn_comment" > * You can obtain one at <a href="http://mozilla.org/MPL/2.0/">http://mozilla.org/MPL/2.0/</a>. */</span>
</code><code id="line-4" aria-labelledby="4"><span class="syn_string" >"use strict"</span>;
</code><code id="line-5" aria-labelledby="5">
</code><code id="line-6" aria-labelledby="6"><span class="syn_comment" >/**</span>
</code><code id="line-7" aria-labelledby="7"><span class="syn_comment" > * Representational wrapper around AudioNodeActors. Adding and destroying</span>
</code><code id="line-8" aria-labelledby="8"><span class="syn_comment" > * AudioNodes should be performed through the AudioNodes collection.</span>
</code><code id="line-9" aria-labelledby="9"><span class="syn_comment" > *</span>
</code><code id="line-10" aria-labelledby="10"><span class="syn_comment" > * Events:</span>
</code><code id="line-11" aria-labelledby="11"><span class="syn_comment" > * - `connect`: node, destinationNode, parameter</span>
</code><code id="line-12" aria-labelledby="12"><span class="syn_comment" > * - `disconnect`: node</span>
</code><code id="line-13" aria-labelledby="13"><span class="syn_comment" > */</span>
</code><code id="line-14" aria-labelledby="14"><span class="syn_reserved" >class</span> <span class="syn_def" data-symbols="#AudioNodeModel" data-i="0" >AudioNodeModel</span> <span class="syn_reserved" >extends</span> <span data-symbols="#EventEmitter" data-i="1" >EventEmitter</span> {
</code><code id="line-15" aria-labelledby="15">  <span class="syn_def" data-symbols="#constructor" data-i="2" >constructor</span>(<span data-symbols="7325-0" >actor</span>) {
</code><code id="line-16" aria-labelledby="16">    <span class="syn_reserved" >super</span>();
</code><code id="line-17" aria-labelledby="17">
</code><code id="line-18" aria-labelledby="18">    <span class="syn_comment" >// Will be added via AudioNodes `add`</span>
</code><code id="line-19" aria-labelledby="19">    <span class="syn_reserved" >this</span>.<span data-symbols="#collection" data-i="3" >collection</span> = <span class="syn_reserved" >null</span>;
</code><code id="line-20" aria-labelledby="20">
</code><code id="line-21" aria-labelledby="21">    <span class="syn_reserved" >this</span>.<span data-symbols="#actor" data-i="4" >actor</span> = <span data-symbols="7325-0" >actor</span>;
</code><code id="line-22" aria-labelledby="22">    <span class="syn_reserved" >this</span>.<span data-symbols="#id" data-i="5" >id</span> = <span data-symbols="7325-0" >actor</span>.<span data-symbols="#actorID,actor#actorID" data-i="6" >actorID</span>;
</code><code id="line-23" aria-labelledby="23">    <span class="syn_reserved" >this</span>.<span data-symbols="#type" data-i="7" >type</span> = <span data-symbols="7325-0" >actor</span>.<span data-symbols="#type,actor#type" data-i="8" >type</span>;
</code><code id="line-24" aria-labelledby="24">    <span class="syn_reserved" >this</span>.<span data-symbols="#bypassable" data-i="9" >bypassable</span> = <span data-symbols="7325-0" >actor</span>.<span data-symbols="#bypassable,actor#bypassable" data-i="10" >bypassable</span>;
</code><code id="line-25" aria-labelledby="25">    <span class="syn_reserved" >this</span>.<span data-symbols="#_bypassed" data-i="11" >_bypassed</span> = <span class="syn_reserved" >false</span>;
</code><code id="line-26" aria-labelledby="26">    <span class="syn_reserved" >this</span>.<span data-symbols="#connections" data-i="12" >connections</span> = [];
</code><code id="line-27" aria-labelledby="27">  }
</code><code id="line-28" aria-labelledby="28">
</code><code id="line-29" aria-labelledby="29">  <span class="syn_comment" >/**</span>
</code><code id="line-30" aria-labelledby="30"><span class="syn_comment" >   * Stores connection data inside this instance of this audio node connecting</span>
</code><code id="line-31" aria-labelledby="31"><span class="syn_comment" >   * to another node (destination). If connecting to another node's AudioParam,</span>
</code><code id="line-32" aria-labelledby="32"><span class="syn_comment" >   * the second argument (param) must be populated with a string.</span>
</code><code id="line-33" aria-labelledby="33"><span class="syn_comment" >   *</span>
</code><code id="line-34" aria-labelledby="34"><span class="syn_comment" >   * Connecting nodes is idempotent. Upon new connection, emits "connect" event.</span>
</code><code id="line-35" aria-labelledby="35"><span class="syn_comment" >   *</span>
</code><code id="line-36" aria-labelledby="36"><span class="syn_comment" >   * @param AudioNodeModel destination</span>
</code><code id="line-37" aria-labelledby="37"><span class="syn_comment" >   * @param String param</span>
</code><code id="line-38" aria-labelledby="38"><span class="syn_comment" >   */</span>
</code><code id="line-39" aria-labelledby="39">  <span class="syn_def" data-symbols="#connect" data-i="13" >connect</span>(<span data-symbols="7325-1" >destination</span>, <span data-symbols="7325-2" >param</span>) {
</code><code id="line-40" aria-labelledby="40">    <span class="syn_reserved" >const</span> <span data-symbols="7325-3" >edge</span> = <span data-symbols="#findWhere" data-i="14" >findWhere</span>(<span class="syn_reserved" >this</span>.<span data-symbols="#connections" data-i="15" >connections</span>, { <span class="syn_def" data-symbols="#destination" data-i="16" >destination</span>: <span data-symbols="7325-1" >destination</span>.<span data-symbols="#id,destination#id" data-i="17" >id</span>, <span class="syn_def" data-symbols="#param" data-i="18" >param</span>: <span data-symbols="7325-2" >param</span> });
</code><code id="line-41" aria-labelledby="41">
</code><code id="line-42" aria-labelledby="42">    <span class="syn_reserved" >if</span> (!<span data-symbols="7325-3" >edge</span>) {
</code><code id="line-43" aria-labelledby="43">      <span class="syn_reserved" >this</span>.<span data-symbols="#connections" data-i="19" >connections</span>.<span data-symbols="#push" data-i="20" >push</span>({ <span class="syn_def" data-symbols="#source" data-i="21" >source</span>: <span class="syn_reserved" >this</span>.<span data-symbols="#id" data-i="22" >id</span>, <span class="syn_def" data-symbols="#destination" data-i="23" >destination</span>: <span data-symbols="7325-1" >destination</span>.<span data-symbols="#id,destination#id" data-i="24" >id</span>, <span class="syn_def" data-symbols="#param" data-i="25" >param</span>: <span data-symbols="7325-2" >param</span> });
</code><code id="line-44" aria-labelledby="44">      <span data-symbols="#EventEmitter" data-i="26" >EventEmitter</span>.<span data-symbols="#emit,EventEmitter#emit" data-i="27" >emit</span>(<span class="syn_reserved" >this</span>, <span class="syn_string" >"connect"</span>, <span class="syn_reserved" >this</span>, <span data-symbols="7325-1" >destination</span>, <span data-symbols="7325-2" >param</span>);
</code><code id="line-45" aria-labelledby="45">    }
</code><code id="line-46" aria-labelledby="46">  }
</code><code id="line-47" aria-labelledby="47">
</code><code id="line-48" aria-labelledby="48">  <span class="syn_comment" >/**</span>
</code><code id="line-49" aria-labelledby="49"><span class="syn_comment" >   * Clears out all internal connection data. Emits "disconnect" event.</span>
</code><code id="line-50" aria-labelledby="50"><span class="syn_comment" >   */</span>
</code><code id="line-51" aria-labelledby="51">  <span class="syn_def" data-symbols="#disconnect" data-i="28" >disconnect</span>() {
</code><code id="line-52" aria-labelledby="52">    <span class="syn_reserved" >this</span>.<span data-symbols="#connections" data-i="29" >connections</span>.<span data-symbols="#length" data-i="30" >length</span> = 0;
</code><code id="line-53" aria-labelledby="53">    <span data-symbols="#EventEmitter" data-i="31" >EventEmitter</span>.<span data-symbols="#emit,EventEmitter#emit" data-i="32" >emit</span>(<span class="syn_reserved" >this</span>, <span class="syn_string" >"disconnect"</span>, <span class="syn_reserved" >this</span>);
</code><code id="line-54" aria-labelledby="54">  }
</code><code id="line-55" aria-labelledby="55">
</code><code id="line-56" aria-labelledby="56">  <span class="syn_comment" >/**</span>
</code><code id="line-57" aria-labelledby="57"><span class="syn_comment" >   * Gets the bypass status of the audio node.</span>
</code><code id="line-58" aria-labelledby="58"><span class="syn_comment" >   *</span>
</code><code id="line-59" aria-labelledby="59"><span class="syn_comment" >   * @return Boolean</span>
</code><code id="line-60" aria-labelledby="60"><span class="syn_comment" >   */</span>
</code><code id="line-61" aria-labelledby="61">  <span class="syn_def" data-symbols="#isBypassed" data-i="33" >isBypassed</span>() {
</code><code id="line-62" aria-labelledby="62">    <span class="syn_reserved" >return</span> <span class="syn_reserved" >this</span>.<span data-symbols="#_bypassed" data-i="34" >_bypassed</span>;
</code><code id="line-63" aria-labelledby="63">  }
</code><code id="line-64" aria-labelledby="64">
</code><code id="line-65" aria-labelledby="65">  <span class="syn_comment" >/**</span>
</code><code id="line-66" aria-labelledby="66"><span class="syn_comment" >   * Sets the bypass value of an AudioNode.</span>
</code><code id="line-67" aria-labelledby="67"><span class="syn_comment" >   *</span>
</code><code id="line-68" aria-labelledby="68"><span class="syn_comment" >   * @param Boolean enable</span>
</code><code id="line-69" aria-labelledby="69"><span class="syn_comment" >   * @return Promise</span>
</code><code id="line-70" aria-labelledby="70"><span class="syn_comment" >   */</span>
</code><code id="line-71" aria-labelledby="71">  <span class="syn_def" data-symbols="#bypass" data-i="35" >bypass</span>(<span data-symbols="7325-4" >enable</span>) {
</code><code id="line-72" aria-labelledby="72">    <span class="syn_reserved" >this</span>.<span data-symbols="#_bypassed" data-i="36" >_bypassed</span> = <span data-symbols="7325-4" >enable</span>;
</code><code id="line-73" aria-labelledby="73">    <span class="syn_reserved" >return</span> <span class="syn_reserved" >this</span>.<span data-symbols="#actor" data-i="37" >actor</span>.<span data-symbols="#bypass" data-i="38" >bypass</span>(<span data-symbols="7325-4" >enable</span>).<span data-symbols="#then" data-i="39" >then</span>(() => <span data-symbols="#EventEmitter" data-i="40" >EventEmitter</span>.<span data-symbols="#emit,EventEmitter#emit" data-i="41" >emit</span>(<span class="syn_reserved" >this</span>, <span class="syn_string" >"bypass"</span>, <span class="syn_reserved" >this</span>, <span data-symbols="7325-4" >enable</span>));
</code><code id="line-74" aria-labelledby="74">  }
</code><code id="line-75" aria-labelledby="75">
</code><code id="line-76" aria-labelledby="76">  <span class="syn_comment" >/**</span>
</code><code id="line-77" aria-labelledby="77"><span class="syn_comment" >   * Returns a promise that resolves to an array of objects containing</span>
</code><code id="line-78" aria-labelledby="78"><span class="syn_comment" >   * both a `param` name property and a `value` property.</span>
</code><code id="line-79" aria-labelledby="79"><span class="syn_comment" >   *</span>
</code><code id="line-80" aria-labelledby="80"><span class="syn_comment" >   * @return Promise->Object</span>
</code><code id="line-81" aria-labelledby="81"><span class="syn_comment" >   */</span>
</code><code id="line-82" aria-labelledby="82">  <span class="syn_def" data-symbols="#getParams" data-i="42" >getParams</span>() {
</code><code id="line-83" aria-labelledby="83">    <span class="syn_reserved" >return</span> <span class="syn_reserved" >this</span>.<span data-symbols="#actor" data-i="43" >actor</span>.<span data-symbols="#getParams" data-i="44" >getParams</span>();
</code><code id="line-84" aria-labelledby="84">  }
</code><code id="line-85" aria-labelledby="85">
</code><code id="line-86" aria-labelledby="86">  <span class="syn_comment" >/**</span>
</code><code id="line-87" aria-labelledby="87"><span class="syn_comment" >   * Returns a promise that resolves to an object containing an</span>
</code><code id="line-88" aria-labelledby="88"><span class="syn_comment" >   * array of event information and an array of automation data.</span>
</code><code id="line-89" aria-labelledby="89"><span class="syn_comment" >   *</span>
</code><code id="line-90" aria-labelledby="90"><span class="syn_comment" >   * @param String paramName</span>
</code><code id="line-91" aria-labelledby="91"><span class="syn_comment" >   * @return Promise->Array</span>
</code><code id="line-92" aria-labelledby="92"><span class="syn_comment" >   */</span>
</code><code id="line-93" aria-labelledby="93">  <span class="syn_def" data-symbols="#getAutomationData" data-i="45" >getAutomationData</span>(<span data-symbols="7325-5" >paramName</span>) {
</code><code id="line-94" aria-labelledby="94">    <span class="syn_reserved" >return</span> <span class="syn_reserved" >this</span>.<span data-symbols="#actor" data-i="46" >actor</span>.<span data-symbols="#getAutomationData" data-i="47" >getAutomationData</span>(<span data-symbols="7325-5" >paramName</span>);
</code><code id="line-95" aria-labelledby="95">  }
</code><code id="line-96" aria-labelledby="96">
</code><code id="line-97" aria-labelledby="97">  <span class="syn_comment" >/**</span>
</code><code id="line-98" aria-labelledby="98"><span class="syn_comment" >   * Takes a `dagreD3.Digraph` object and adds this node to</span>
</code><code id="line-99" aria-labelledby="99"><span class="syn_comment" >   * the graph to be rendered.</span>
</code><code id="line-100" aria-labelledby="100"><span class="syn_comment" >   *</span>
</code><code id="line-101" aria-labelledby="101"><span class="syn_comment" >   * @param dagreD3.Digraph</span>
</code><code id="line-102" aria-labelledby="102"><span class="syn_comment" >   */</span>
</code><code id="line-103" aria-labelledby="103">  <span class="syn_def" data-symbols="#addToGraph" data-i="48" >addToGraph</span>(<span data-symbols="7325-6" >graph</span>) {
</code><code id="line-104" aria-labelledby="104">    <span data-symbols="7325-6" >graph</span>.<span data-symbols="#addNode,graph#addNode" data-i="49" >addNode</span>(<span class="syn_reserved" >this</span>.<span data-symbols="#id" data-i="50" >id</span>, {
</code><code id="line-105" aria-labelledby="105">      <span class="syn_def" data-symbols="#type" data-i="51" >type</span>: <span class="syn_reserved" >this</span>.<span data-symbols="#type" data-i="52" >type</span>,
</code><code id="line-106" aria-labelledby="106">      <span class="syn_def" data-symbols="#label" data-i="53" >label</span>: <span class="syn_reserved" >this</span>.<span data-symbols="#type" data-i="54" >type</span>.<span data-symbols="#replace" data-i="55" >replace</span>(<span class="syn_regex" >/Node$/</span>, <span class="syn_string" >""</span>),
</code><code id="line-107" aria-labelledby="107">      <span class="syn_def" data-symbols="#id" data-i="56" >id</span>: <span class="syn_reserved" >this</span>.<span data-symbols="#id" data-i="57" >id</span>,
</code><code id="line-108" aria-labelledby="108">      <span class="syn_def" data-symbols="#bypassed" data-i="58" >bypassed</span>: <span class="syn_reserved" >this</span>.<span data-symbols="#_bypassed" data-i="59" >_bypassed</span>,
</code><code id="line-109" aria-labelledby="109">    });
</code><code id="line-110" aria-labelledby="110">  }
</code><code id="line-111" aria-labelledby="111">
</code><code id="line-112" aria-labelledby="112">  <span class="syn_comment" >/**</span>
</code><code id="line-113" aria-labelledby="113"><span class="syn_comment" >   * Takes a `dagreD3.Digraph` object and adds edges to</span>
</code><code id="line-114" aria-labelledby="114"><span class="syn_comment" >   * the graph to be rendered. Separate from `addToGraph`,</span>
</code><code id="line-115" aria-labelledby="115"><span class="syn_comment" >   * as while we depend on D3/Dagre's constraints, we cannot</span>
</code><code id="line-116" aria-labelledby="116"><span class="syn_comment" >   * add edges for nodes that have not yet been added to the graph.</span>
</code><code id="line-117" aria-labelledby="117"><span class="syn_comment" >   *</span>
</code><code id="line-118" aria-labelledby="118"><span class="syn_comment" >   * @param dagreD3.Digraph</span>
</code><code id="line-119" aria-labelledby="119"><span class="syn_comment" >   */</span>
</code><code id="line-120" aria-labelledby="120">  <span class="syn_def" data-symbols="#addEdgesToGraph" data-i="60" >addEdgesToGraph</span>(<span data-symbols="7325-7" >graph</span>) {
</code><code id="line-121" aria-labelledby="121">    <span class="syn_reserved" >for</span> (<span class="syn_reserved" >const</span> <span data-symbols="7325-8" >edge</span> of <span class="syn_reserved" >this</span>.<span data-symbols="#connections" data-i="61" >connections</span>) {
</code><code id="line-122" aria-labelledby="122">      <span class="syn_reserved" >const</span> <span data-symbols="7325-9" >options</span> = {
</code><code id="line-123" aria-labelledby="123">        <span class="syn_def syn_def" data-symbols="#source,options#source" data-i="62" >source</span>: <span class="syn_reserved" >this</span>.<span data-symbols="#id,options#id" data-i="63" >id</span>,
</code><code id="line-124" aria-labelledby="124">        <span class="syn_def syn_def" data-symbols="#target,options#target" data-i="64" >target</span>: <span data-symbols="7325-8" >edge</span>.<span data-symbols="#destination,edge#destination" data-i="65" >destination</span>,
</code><code id="line-125" aria-labelledby="125">      };
</code><code id="line-126" aria-labelledby="126">
</code><code id="line-127" aria-labelledby="127">      <span class="syn_comment" >// Only add `label` if `param` specified, as this is an AudioParam</span>
</code><code id="line-128" aria-labelledby="128">      <span class="syn_comment" >// connection then. `label` adds the magic to render with dagre-d3,</span>
</code><code id="line-129" aria-labelledby="129">      <span class="syn_comment" >// and `param` is just more explicitly the param, ignoring</span>
</code><code id="line-130" aria-labelledby="130">      <span class="syn_comment" >// implementation details.</span>
</code><code id="line-131" aria-labelledby="131">      <span class="syn_reserved" >if</span> (<span data-symbols="7325-8" >edge</span>.<span data-symbols="#param,edge#param" data-i="66" >param</span>) {
</code><code id="line-132" aria-labelledby="132">        <span data-symbols="7325-9" >options</span>.<span data-symbols="#label,options#label" data-i="67" >label</span> = <span data-symbols="7325-9" >options</span>.<span data-symbols="#param,options#param" data-i="68" >param</span> = <span data-symbols="7325-8" >edge</span>.<span data-symbols="#param,edge#param" data-i="69" >param</span>;
</code><code id="line-133" aria-labelledby="133">      }
</code><code id="line-134" aria-labelledby="134">
</code><code id="line-135" aria-labelledby="135">      <span data-symbols="7325-7" >graph</span>.<span data-symbols="#addEdge,graph#addEdge" data-i="70" >addEdge</span>(<span class="syn_reserved" >null</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#id" data-i="71" >id</span>, <span data-symbols="7325-8" >edge</span>.<span data-symbols="#destination,edge#destination" data-i="72" >destination</span>, <span data-symbols="7325-9" >options</span>);
</code><code id="line-136" aria-labelledby="136">    }
</code><code id="line-137" aria-labelledby="137">  }
</code><code id="line-138" aria-labelledby="138">
</code><code id="line-139" aria-labelledby="139">  <span class="syn_def" data-symbols="#toString" data-i="73" >toString</span>() {
</code><code id="line-140" aria-labelledby="140">    <span class="syn_reserved" >return</span> <span class="syn_string" >"[object AudioNodeModel]"</span>;
</code><code id="line-141" aria-labelledby="141">  }
</code><code id="line-142" aria-labelledby="142">}
</code><code id="line-143" aria-labelledby="143">
</code><code id="line-144" aria-labelledby="144"><span class="syn_comment" >/**</span>
</code><code id="line-145" aria-labelledby="145"><span class="syn_comment" > * Constructor for a Collection of `AudioNodeModel` models.</span>
</code><code id="line-146" aria-labelledby="146"><span class="syn_comment" > *</span>
</code><code id="line-147" aria-labelledby="147"><span class="syn_comment" > * Events:</span>
</code><code id="line-148" aria-labelledby="148"><span class="syn_comment" > * - `add`: node</span>
</code><code id="line-149" aria-labelledby="149"><span class="syn_comment" > * - `remove`: node</span>
</code><code id="line-150" aria-labelledby="150"><span class="syn_comment" > * - `connect`: node, destinationNode, parameter</span>
</code><code id="line-151" aria-labelledby="151"><span class="syn_comment" > * - `disconnect`: node</span>
</code><code id="line-152" aria-labelledby="152"><span class="syn_comment" > */</span>
</code><code id="line-153" aria-labelledby="153"><span class="syn_reserved" >class</span> <span class="syn_def" data-symbols="#AudioNodesCollection" data-i="74" >AudioNodesCollection</span> <span class="syn_reserved" >extends</span> <span data-symbols="#EventEmitter" data-i="75" >EventEmitter</span> {
</code><code id="line-154" aria-labelledby="154">  <span class="syn_def" data-symbols="#constructor" data-i="76" >constructor</span>() {
</code><code id="line-155" aria-labelledby="155">    <span class="syn_reserved" >super</span>();
</code><code id="line-156" aria-labelledby="156">
</code><code id="line-157" aria-labelledby="157">    <span class="syn_reserved" >this</span>.<span data-symbols="#model" data-i="77" >model</span> = <span data-symbols="#AudioNodeModel" data-i="78" >AudioNodeModel</span>;
</code><code id="line-158" aria-labelledby="158">    <span class="syn_reserved" >this</span>.<span data-symbols="#models" data-i="79" >models</span> = <span class="syn_reserved" >new</span> <span data-symbols="#Set" data-i="80" >Set</span>();
</code><code id="line-159" aria-labelledby="159">    <span class="syn_reserved" >this</span>.<span data-symbols="#_onModelEvent" data-i="81" >_onModelEvent</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_onModelEvent,_onModelEvent#_onModelEvent" data-i="82" >_onModelEvent</span>.<span data-symbols="#bind" data-i="83" >bind</span>(<span class="syn_reserved" >this</span>);
</code><code id="line-160" aria-labelledby="160">  }
</code><code id="line-161" aria-labelledby="161">
</code><code id="line-162" aria-labelledby="162">  <span class="syn_comment" >/**</span>
</code><code id="line-163" aria-labelledby="163"><span class="syn_comment" >   * Iterates over all models within the collection, calling `fn` with the</span>
</code><code id="line-164" aria-labelledby="164"><span class="syn_comment" >   * model as the first argument.</span>
</code><code id="line-165" aria-labelledby="165"><span class="syn_comment" >   *</span>
</code><code id="line-166" aria-labelledby="166"><span class="syn_comment" >   * @param Function fn</span>
</code><code id="line-167" aria-labelledby="167"><span class="syn_comment" >   */</span>
</code><code id="line-168" aria-labelledby="168">  <span class="syn_def" data-symbols="#forEach" data-i="84" >forEach</span>(<span data-symbols="7325-10" >fn</span>) {
</code><code id="line-169" aria-labelledby="169">    <span class="syn_reserved" >this</span>.<span data-symbols="#models" data-i="85" >models</span>.<span data-symbols="#forEach" data-i="86" >forEach</span>(<span data-symbols="7325-10" >fn</span>);
</code><code id="line-170" aria-labelledby="170">  }
</code><code id="line-171" aria-labelledby="171">
</code><code id="line-172" aria-labelledby="172">  <span class="syn_comment" >/**</span>
</code><code id="line-173" aria-labelledby="173"><span class="syn_comment" >   * Creates a new AudioNodeModel, passing through arguments into the AudioNodeModel</span>
</code><code id="line-174" aria-labelledby="174"><span class="syn_comment" >   * constructor, and adds the model to the internal collection store of this</span>
</code><code id="line-175" aria-labelledby="175"><span class="syn_comment" >   * instance.</span>
</code><code id="line-176" aria-labelledby="176"><span class="syn_comment" >   *</span>
</code><code id="line-177" aria-labelledby="177"><span class="syn_comment" >   * Emits "add" event on instance when completed.</span>
</code><code id="line-178" aria-labelledby="178"><span class="syn_comment" >   *</span>
</code><code id="line-179" aria-labelledby="179"><span class="syn_comment" >   * @param Object obj</span>
</code><code id="line-180" aria-labelledby="180"><span class="syn_comment" >   * @return AudioNodeModel</span>
</code><code id="line-181" aria-labelledby="181"><span class="syn_comment" >   */</span>
</code><code id="line-182" aria-labelledby="182">  <span class="syn_def" data-symbols="#add" data-i="87" >add</span>(<span data-symbols="7325-11" >obj</span>) {
</code><code id="line-183" aria-labelledby="183">    <span class="syn_comment" >// eslint-disable-next-line new-cap</span>
</code><code id="line-184" aria-labelledby="184">    <span class="syn_reserved" >const</span> <span data-symbols="7325-12" >node</span> = <span class="syn_reserved" >new</span> <span class="syn_reserved" >this</span>.<span data-symbols="#model" data-i="88" >model</span>(<span data-symbols="7325-11" >obj</span>);
</code><code id="line-185" aria-labelledby="185">    <span data-symbols="7325-12" >node</span>.<span data-symbols="#collection,node#collection" data-i="89" >collection</span> = <span class="syn_reserved" >this</span>;
</code><code id="line-186" aria-labelledby="186">
</code><code id="line-187" aria-labelledby="187">    <span class="syn_reserved" >this</span>.<span data-symbols="#models" data-i="90" >models</span>.<span data-symbols="#add" data-i="91" >add</span>(<span data-symbols="7325-12" >node</span>);
</code><code id="line-188" aria-labelledby="188">
</code><code id="line-189" aria-labelledby="189">    <span data-symbols="7325-12" >node</span>.<span data-symbols="#on,node#on" data-i="92" >on</span>(<span class="syn_string" >"*"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onModelEvent" data-i="93" >_onModelEvent</span>);
</code><code id="line-190" aria-labelledby="190">    <span data-symbols="#EventEmitter" data-i="94" >EventEmitter</span>.<span data-symbols="#emit,EventEmitter#emit" data-i="95" >emit</span>(<span class="syn_reserved" >this</span>, <span class="syn_string" >"add"</span>, <span data-symbols="7325-12" >node</span>);
</code><code id="line-191" aria-labelledby="191">    <span class="syn_reserved" >return</span> <span data-symbols="7325-12" >node</span>;
</code><code id="line-192" aria-labelledby="192">  }
</code><code id="line-193" aria-labelledby="193">
</code><code id="line-194" aria-labelledby="194">  <span class="syn_comment" >/**</span>
</code><code id="line-195" aria-labelledby="195"><span class="syn_comment" >   * Removes an AudioNodeModel from the internal collection. Calls `delete` method</span>
</code><code id="line-196" aria-labelledby="196"><span class="syn_comment" >   * on the model, and emits "remove" on this instance.</span>
</code><code id="line-197" aria-labelledby="197"><span class="syn_comment" >   *</span>
</code><code id="line-198" aria-labelledby="198"><span class="syn_comment" >   * @param AudioNodeModel node</span>
</code><code id="line-199" aria-labelledby="199"><span class="syn_comment" >   */</span>
</code><code id="line-200" aria-labelledby="200">  <span class="syn_def" data-symbols="#remove" data-i="96" >remove</span>(<span data-symbols="7325-13" >node</span>) {
</code><code id="line-201" aria-labelledby="201">    <span class="syn_reserved" >this</span>.<span data-symbols="#models" data-i="97" >models</span>.<span class="syn_reserved" >delete</span>(<span data-symbols="7325-13" >node</span>);
</code><code id="line-202" aria-labelledby="202">    <span data-symbols="#EventEmitter" data-i="98" >EventEmitter</span>.<span data-symbols="#emit,EventEmitter#emit" data-i="99" >emit</span>(<span class="syn_reserved" >this</span>, <span class="syn_string" >"remove"</span>, <span data-symbols="7325-13" >node</span>);
</code><code id="line-203" aria-labelledby="203">  }
</code><code id="line-204" aria-labelledby="204">
</code><code id="line-205" aria-labelledby="205">  <span class="syn_comment" >/**</span>
</code><code id="line-206" aria-labelledby="206"><span class="syn_comment" >   * Empties out the internal collection of all AudioNodeModels.</span>
</code><code id="line-207" aria-labelledby="207"><span class="syn_comment" >   */</span>
</code><code id="line-208" aria-labelledby="208">  <span class="syn_def" data-symbols="#reset" data-i="100" >reset</span>() {
</code><code id="line-209" aria-labelledby="209">    <span class="syn_reserved" >this</span>.<span data-symbols="#models" data-i="101" >models</span>.<span data-symbols="#clear" data-i="102" >clear</span>();
</code><code id="line-210" aria-labelledby="210">  }
</code><code id="line-211" aria-labelledby="211">
</code><code id="line-212" aria-labelledby="212">  <span class="syn_comment" >/**</span>
</code><code id="line-213" aria-labelledby="213"><span class="syn_comment" >   * Takes an `id` from an AudioNodeModel and returns the corresponding</span>
</code><code id="line-214" aria-labelledby="214"><span class="syn_comment" >   * AudioNodeModel within the collection that matches that id. Returns `null`</span>
</code><code id="line-215" aria-labelledby="215"><span class="syn_comment" >   * if not found.</span>
</code><code id="line-216" aria-labelledby="216"><span class="syn_comment" >   *</span>
</code><code id="line-217" aria-labelledby="217"><span class="syn_comment" >   * @param Number id</span>
</code><code id="line-218" aria-labelledby="218"><span class="syn_comment" >   * @return AudioNodeModel|null</span>
</code><code id="line-219" aria-labelledby="219"><span class="syn_comment" >   */</span>
</code><code id="line-220" aria-labelledby="220">  <span class="syn_reserved" >get</span>(<span data-symbols="7325-14" >id</span>) {
</code><code id="line-221" aria-labelledby="221">    <span class="syn_reserved" >return</span> <span data-symbols="#findWhere" data-i="103" >findWhere</span>(<span class="syn_reserved" >this</span>.<span data-symbols="#models" data-i="104" >models</span>, { <span class="syn_def" data-symbols="#id" data-i="105" >id</span>: <span data-symbols="7325-14" >id</span> });
</code><code id="line-222" aria-labelledby="222">  }
</code><code id="line-223" aria-labelledby="223">
</code><code id="line-224" aria-labelledby="224">  <span class="syn_comment" >/**</span>
</code><code id="line-225" aria-labelledby="225"><span class="syn_comment" >   * Returns the count for how many models are a part of this collection.</span>
</code><code id="line-226" aria-labelledby="226"><span class="syn_comment" >   *</span>
</code><code id="line-227" aria-labelledby="227"><span class="syn_comment" >   * @return Number</span>
</code><code id="line-228" aria-labelledby="228"><span class="syn_comment" >   */</span>
</code><code id="line-229" aria-labelledby="229">  <span class="syn_reserved" >get</span> <span class="syn_def" data-symbols="#length" data-i="106" >length</span>() {
</code><code id="line-230" aria-labelledby="230">    <span class="syn_reserved" >return</span> <span class="syn_reserved" >this</span>.<span data-symbols="#models" data-i="107" >models</span>.<span data-symbols="#size" data-i="108" >size</span>;
</code><code id="line-231" aria-labelledby="231">  }
</code><code id="line-232" aria-labelledby="232">
</code><code id="line-233" aria-labelledby="233">  <span class="syn_comment" >/**</span>
</code><code id="line-234" aria-labelledby="234"><span class="syn_comment" >   * Returns detailed information about the collection. used during tests</span>
</code><code id="line-235" aria-labelledby="235"><span class="syn_comment" >   * to query state. Returns an object with information on node count,</span>
</code><code id="line-236" aria-labelledby="236"><span class="syn_comment" >   * how many edges are within the data graph, as well as how many of those edges</span>
</code><code id="line-237" aria-labelledby="237"><span class="syn_comment" >   * are for AudioParams.</span>
</code><code id="line-238" aria-labelledby="238"><span class="syn_comment" >   *</span>
</code><code id="line-239" aria-labelledby="239"><span class="syn_comment" >   * @return Object</span>
</code><code id="line-240" aria-labelledby="240"><span class="syn_comment" >   */</span>
</code><code id="line-241" aria-labelledby="241">  <span class="syn_def" data-symbols="#getInfo" data-i="109" >getInfo</span>() {
</code><code id="line-242" aria-labelledby="242">    <span class="syn_reserved" >const</span> <span data-symbols="7325-15" >info</span> = {
</code><code id="line-243" aria-labelledby="243">      <span class="syn_def syn_def" data-symbols="#nodes,info#nodes" data-i="110" >nodes</span>: <span class="syn_reserved" >this</span>.<span data-symbols="#length,info#length" data-i="111" >length</span>,
</code><code id="line-244" aria-labelledby="244">      <span class="syn_def syn_def" data-symbols="#edges,info#edges" data-i="112" >edges</span>: 0,
</code><code id="line-245" aria-labelledby="245">      <span class="syn_def syn_def" data-symbols="#paramEdges,info#paramEdges" data-i="113" >paramEdges</span>: 0,
</code><code id="line-246" aria-labelledby="246">    };
</code><code id="line-247" aria-labelledby="247">
</code><code id="line-248" aria-labelledby="248">    <span class="syn_reserved" >this</span>.<span data-symbols="#models" data-i="114" >models</span>.<span data-symbols="#forEach" data-i="115" >forEach</span>(<span data-symbols="7325-16" >node</span> => {
</code><code id="line-249" aria-labelledby="249">      <span class="syn_reserved" >const</span> <span data-symbols="7325-17" >paramEdgeCount</span> = <span data-symbols="7325-16" >node</span>.<span data-symbols="#connections,node#connections" data-i="116" >connections</span>.<span data-symbols="#filter" data-i="117" >filter</span>(<span data-symbols="7325-18" >edge</span> => <span data-symbols="7325-18" >edge</span>.<span data-symbols="#param,edge#param" data-i="118" >param</span>).<span data-symbols="#length" data-i="119" >length</span>;
</code><code id="line-250" aria-labelledby="250">      <span data-symbols="7325-15" >info</span>.<span data-symbols="#edges,info#edges" data-i="120" >edges</span> += <span data-symbols="7325-16" >node</span>.<span data-symbols="#connections,node#connections" data-i="121" >connections</span>.<span data-symbols="#length" data-i="122" >length</span> - <span data-symbols="7325-17" >paramEdgeCount</span>;
</code><code id="line-251" aria-labelledby="251">      <span data-symbols="7325-15" >info</span>.<span data-symbols="#paramEdges,info#paramEdges" data-i="123" >paramEdges</span> += <span data-symbols="7325-17" >paramEdgeCount</span>;
</code><code id="line-252" aria-labelledby="252">    });
</code><code id="line-253" aria-labelledby="253">    <span class="syn_reserved" >return</span> <span data-symbols="7325-15" >info</span>;
</code><code id="line-254" aria-labelledby="254">  }
</code><code id="line-255" aria-labelledby="255">
</code><code id="line-256" aria-labelledby="256">  <span class="syn_comment" >/**</span>
</code><code id="line-257" aria-labelledby="257"><span class="syn_comment" >   * Adds all nodes within the collection to the passed in graph,</span>
</code><code id="line-258" aria-labelledby="258"><span class="syn_comment" >   * as well as their corresponding edges.</span>
</code><code id="line-259" aria-labelledby="259"><span class="syn_comment" >   *</span>
</code><code id="line-260" aria-labelledby="260"><span class="syn_comment" >   * @param dagreD3.Digraph</span>
</code><code id="line-261" aria-labelledby="261"><span class="syn_comment" >   */</span>
</code><code id="line-262" aria-labelledby="262">  <span class="syn_def" data-symbols="#populateGraph" data-i="124" >populateGraph</span>(<span data-symbols="7325-19" >graph</span>) {
</code><code id="line-263" aria-labelledby="263">    <span class="syn_reserved" >this</span>.<span data-symbols="#models" data-i="125" >models</span>.<span data-symbols="#forEach" data-i="126" >forEach</span>(<span data-symbols="7325-20" >node</span> => <span data-symbols="7325-20" >node</span>.<span data-symbols="#addToGraph,node#addToGraph" data-i="127" >addToGraph</span>(<span data-symbols="7325-19" >graph</span>));
</code><code id="line-264" aria-labelledby="264">    <span class="syn_reserved" >this</span>.<span data-symbols="#models" data-i="128" >models</span>.<span data-symbols="#forEach" data-i="129" >forEach</span>(<span data-symbols="7325-21" >node</span> => <span data-symbols="7325-21" >node</span>.<span data-symbols="#addEdgesToGraph,node#addEdgesToGraph" data-i="130" >addEdgesToGraph</span>(<span data-symbols="7325-19" >graph</span>));
</code><code id="line-265" aria-labelledby="265">  }
</code><code id="line-266" aria-labelledby="266">
</code><code id="line-267" aria-labelledby="267">  <span class="syn_comment" >/**</span>
</code><code id="line-268" aria-labelledby="268"><span class="syn_comment" >   * Called when a stored model emits any event. Used to manage</span>
</code><code id="line-269" aria-labelledby="269"><span class="syn_comment" >   * event propagation, or listening to model events to react, like</span>
</code><code id="line-270" aria-labelledby="270"><span class="syn_comment" >   * removing a model from the collection when it's destroyed.</span>
</code><code id="line-271" aria-labelledby="271"><span class="syn_comment" >   */</span>
</code><code id="line-272" aria-labelledby="272">  <span class="syn_def" data-symbols="#_onModelEvent" data-i="131" >_onModelEvent</span>(<span data-symbols="7325-22" >eventName</span>, <span data-symbols="7325-23" >node</span>, ...<span data-symbols="7325-24" >args</span>) {
</code><code id="line-273" aria-labelledby="273">    <span class="syn_reserved" >if</span> (<span data-symbols="7325-22" >eventName</span> === <span class="syn_string" >"remove"</span>) {
</code><code id="line-274" aria-labelledby="274">      <span class="syn_comment" >// If a `remove` event from the model, remove it</span>
</code><code id="line-275" aria-labelledby="275">      <span class="syn_comment" >// from the collection, and let the method handle the emitting on</span>
</code><code id="line-276" aria-labelledby="276">      <span class="syn_comment" >// the collection</span>
</code><code id="line-277" aria-labelledby="277">      <span class="syn_reserved" >this</span>.<span data-symbols="#remove" data-i="132" >remove</span>(<span data-symbols="7325-23" >node</span>);
</code><code id="line-278" aria-labelledby="278">    } <span class="syn_reserved" >else</span> {
</code><code id="line-279" aria-labelledby="279">      <span class="syn_comment" >// Pipe the event to the collection</span>
</code><code id="line-280" aria-labelledby="280">      <span data-symbols="#EventEmitter" data-i="133" >EventEmitter</span>.<span data-symbols="#emit,EventEmitter#emit" data-i="134" >emit</span>(<span class="syn_reserved" >this</span>, <span data-symbols="7325-22" >eventName</span>, <span data-symbols="7325-23" >node</span>, ...<span data-symbols="7325-24" >args</span>);
</code><code id="line-281" aria-labelledby="281">    }
</code><code id="line-282" aria-labelledby="282">  }
</code><code id="line-283" aria-labelledby="283">
</code><code id="line-284" aria-labelledby="284">  <span class="syn_def" data-symbols="#toString" data-i="135" >toString</span>() {
</code><code id="line-285" aria-labelledby="285">    <span class="syn_reserved" >return</span> <span class="syn_string" >"[object AudioNodeCollection]"</span>;
</code><code id="line-286" aria-labelledby="286">  }
</code><code id="line-287" aria-labelledby="287">}
</code></pre>      </td>
    </tr>
  </tbody>
</table>
<script>var ANALYSIS_DATA = [[[],[{"pretty":"property AudioNodeModel","sym":"#AudioNodeModel"}]],[[],[{"pretty":"property EventEmitter","sym":"#EventEmitter"}]],[[],[{"pretty":"property constructor","sym":"#constructor"}]],[[],[{"pretty":"property collection","sym":"#collection"}]],[[],[{"pretty":"property actor","sym":"#actor"}]],[[],[{"pretty":"property id","sym":"#id"}]],[[],[{"pretty":"property actorID","sym":"#actorID"},{"pretty":"property actor.actorID","sym":"actor#actorID"}]],[[],[{"pretty":"property type","sym":"#type"}]],[[],[{"pretty":"property type","sym":"#type"},{"pretty":"property actor.type","sym":"actor#type"}]],[[{"pretty":"bypassable","sym":"#bypassable"}],[{"pretty":"property bypassable","sym":"#bypassable"}]],[[{"pretty":"bypassable","sym":"#bypassable"}],[{"pretty":"property bypassable","sym":"#bypassable"},{"pretty":"property actor.bypassable","sym":"actor#bypassable"}]],[[],[{"pretty":"property _bypassed","sym":"#_bypassed"}]],[[],[{"pretty":"property connections","sym":"#connections"}]],[[],[{"pretty":"property connect","sym":"#connect"}]],[[],[{"pretty":"property findWhere","sym":"#findWhere"}]],[[],[{"pretty":"property connections","sym":"#connections"}]],[[],[{"pretty":"property destination","sym":"#destination"}]],[[],[{"pretty":"property id","sym":"#id"},{"pretty":"property destination.id","sym":"destination#id"}]],[[],[{"pretty":"property param","sym":"#param"}]],[[],[{"pretty":"property connections","sym":"#connections"}]],[[],[{"pretty":"property push","sym":"#push"}]],[[],[{"pretty":"property source","sym":"#source"}]],[[],[{"pretty":"property id","sym":"#id"}]],[[],[{"pretty":"property destination","sym":"#destination"}]],[[],[{"pretty":"property id","sym":"#id"},{"pretty":"property destination.id","sym":"destination#id"}]],[[],[{"pretty":"property param","sym":"#param"}]],[[],[{"pretty":"property EventEmitter","sym":"#EventEmitter"}]],[[],[{"pretty":"property emit","sym":"#emit"},{"pretty":"property EventEmitter.emit","sym":"EventEmitter#emit"}]],[[],[{"pretty":"property disconnect","sym":"#disconnect"}]],[[],[{"pretty":"property connections","sym":"#connections"}]],[[],[{"pretty":"property length","sym":"#length"}]],[[],[{"pretty":"property EventEmitter","sym":"#EventEmitter"}]],[[],[{"pretty":"property emit","sym":"#emit"},{"pretty":"property EventEmitter.emit","sym":"EventEmitter#emit"}]],[[],[{"pretty":"property isBypassed","sym":"#isBypassed"}]],[[],[{"pretty":"property _bypassed","sym":"#_bypassed"}]],[[],[{"pretty":"property bypass","sym":"#bypass"}]],[[],[{"pretty":"property _bypassed","sym":"#_bypassed"}]],[[],[{"pretty":"property actor","sym":"#actor"}]],[[],[{"pretty":"property bypass","sym":"#bypass"}]],[[],[{"pretty":"property then","sym":"#then"}]],[[],[{"pretty":"property EventEmitter","sym":"#EventEmitter"}]],[[],[{"pretty":"property emit","sym":"#emit"},{"pretty":"property EventEmitter.emit","sym":"EventEmitter#emit"}]],[[],[{"pretty":"property getParams","sym":"#getParams"}]],[[],[{"pretty":"property actor","sym":"#actor"}]],[[],[{"pretty":"property getParams","sym":"#getParams"}]],[[],[{"pretty":"property getAutomationData","sym":"#getAutomationData"}]],[[],[{"pretty":"property actor","sym":"#actor"}]],[[],[{"pretty":"property getAutomationData","sym":"#getAutomationData"}]],[[],[{"pretty":"property addToGraph","sym":"#addToGraph"}]],[[{"pretty":"addNode","sym":"#addNode"}],[{"pretty":"property addNode","sym":"#addNode"},{"pretty":"property graph.addNode","sym":"graph#addNode"}]],[[],[{"pretty":"property id","sym":"#id"}]],[[],[{"pretty":"property type","sym":"#type"}]],[[],[{"pretty":"property type","sym":"#type"}]],[[],[{"pretty":"property label","sym":"#label"}]],[[],[{"pretty":"property type","sym":"#type"}]],[[],[{"pretty":"property replace","sym":"#replace"}]],[[],[{"pretty":"property id","sym":"#id"}]],[[],[{"pretty":"property id","sym":"#id"}]],[[],[{"pretty":"property bypassed","sym":"#bypassed"}]],[[],[{"pretty":"property _bypassed","sym":"#_bypassed"}]],[[],[{"pretty":"property addEdgesToGraph","sym":"#addEdgesToGraph"}]],[[],[{"pretty":"property connections","sym":"#connections"}]],[[],[{"pretty":"property source","sym":"#source"},{"pretty":"property options.source","sym":"options#source"}]],[[],[{"pretty":"property id","sym":"#id"},{"pretty":"property options.id","sym":"options#id"}]],[[],[{"pretty":"property target","sym":"#target"},{"pretty":"property options.target","sym":"options#target"}]],[[],[{"pretty":"property destination","sym":"#destination"},{"pretty":"property edge.destination","sym":"edge#destination"}]],[[],[{"pretty":"property param","sym":"#param"},{"pretty":"property edge.param","sym":"edge#param"}]],[[{"pretty":"options.label","sym":"options#label"}],[{"pretty":"property label","sym":"#label"},{"pretty":"property options.label","sym":"options#label"}]],[[],[{"pretty":"property param","sym":"#param"},{"pretty":"property options.param","sym":"options#param"}]],[[],[{"pretty":"property param","sym":"#param"},{"pretty":"property edge.param","sym":"edge#param"}]],[[],[{"pretty":"property addEdge","sym":"#addEdge"},{"pretty":"property graph.addEdge","sym":"graph#addEdge"}]],[[],[{"pretty":"property id","sym":"#id"}]],[[],[{"pretty":"property destination","sym":"#destination"},{"pretty":"property edge.destination","sym":"edge#destination"}]],[[],[{"pretty":"property toString","sym":"#toString"}]],[[],[{"pretty":"property AudioNodesCollection","sym":"#AudioNodesCollection"}]],[[],[{"pretty":"property EventEmitter","sym":"#EventEmitter"}]],[[],[{"pretty":"property constructor","sym":"#constructor"}]],[[],[{"pretty":"property model","sym":"#model"}]],[[{"pretty":"AudioNodeModel","sym":"#AudioNodeModel"}],[{"pretty":"property AudioNodeModel","sym":"#AudioNodeModel"}]],[[],[{"pretty":"property models","sym":"#models"}]],[[],[{"pretty":"property Set","sym":"#Set"}]],[[],[{"pretty":"property _onModelEvent","sym":"#_onModelEvent"}]],[[],[{"pretty":"property _onModelEvent","sym":"#_onModelEvent"},{"pretty":"property _onModelEvent._onModelEvent","sym":"_onModelEvent#_onModelEvent"}]],[[],[{"pretty":"property bind","sym":"#bind"}]],[[],[{"pretty":"property forEach","sym":"#forEach"}]],[[],[{"pretty":"property models","sym":"#models"}]],[[],[{"pretty":"property forEach","sym":"#forEach"}]],[[],[{"pretty":"property add","sym":"#add"}]],[[],[{"pretty":"property model","sym":"#model"}]],[[],[{"pretty":"property collection","sym":"#collection"},{"pretty":"property node.collection","sym":"node#collection"}]],[[],[{"pretty":"property models","sym":"#models"}]],[[],[{"pretty":"property add","sym":"#add"}]],[[],[{"pretty":"property on","sym":"#on"},{"pretty":"property node.on","sym":"node#on"}]],[[],[{"pretty":"property _onModelEvent","sym":"#_onModelEvent"}]],[[],[{"pretty":"property EventEmitter","sym":"#EventEmitter"}]],[[],[{"pretty":"property emit","sym":"#emit"},{"pretty":"property EventEmitter.emit","sym":"EventEmitter#emit"}]],[[],[{"pretty":"property remove","sym":"#remove"}]],[[],[{"pretty":"property models","sym":"#models"}]],[[],[{"pretty":"property EventEmitter","sym":"#EventEmitter"}]],[[],[{"pretty":"property emit","sym":"#emit"},{"pretty":"property EventEmitter.emit","sym":"EventEmitter#emit"}]],[[],[{"pretty":"property reset","sym":"#reset"}]],[[],[{"pretty":"property models","sym":"#models"}]],[[],[{"pretty":"property clear","sym":"#clear"}]],[[],[{"pretty":"property findWhere","sym":"#findWhere"}]],[[],[{"pretty":"property models","sym":"#models"}]],[[],[{"pretty":"property id","sym":"#id"}]],[[],[{"pretty":"property length","sym":"#length"}]],[[],[{"pretty":"property models","sym":"#models"}]],[[],[{"pretty":"property size","sym":"#size"}]],[[],[{"pretty":"property getInfo","sym":"#getInfo"}]],[[],[{"pretty":"property nodes","sym":"#nodes"},{"pretty":"property info.nodes","sym":"info#nodes"}]],[[{"pretty":"info.length","sym":"info#length"}],[{"pretty":"property length","sym":"#length"},{"pretty":"property info.length","sym":"info#length"}]],[[],[{"pretty":"property edges","sym":"#edges"},{"pretty":"property info.edges","sym":"info#edges"}]],[[],[{"pretty":"property paramEdges","sym":"#paramEdges"},{"pretty":"property info.paramEdges","sym":"info#paramEdges"}]],[[],[{"pretty":"property models","sym":"#models"}]],[[],[{"pretty":"property forEach","sym":"#forEach"}]],[[],[{"pretty":"property connections","sym":"#connections"},{"pretty":"property node.connections","sym":"node#connections"}]],[[],[{"pretty":"property filter","sym":"#filter"}]],[[],[{"pretty":"property param","sym":"#param"},{"pretty":"property edge.param","sym":"edge#param"}]],[[],[{"pretty":"property length","sym":"#length"}]],[[{"pretty":"info.edges","sym":"info#edges"}],[{"pretty":"property edges","sym":"#edges"},{"pretty":"property info.edges","sym":"info#edges"}]],[[],[{"pretty":"property connections","sym":"#connections"},{"pretty":"property node.connections","sym":"node#connections"}]],[[],[{"pretty":"property length","sym":"#length"}]],[[{"pretty":"info.paramEdges","sym":"info#paramEdges"}],[{"pretty":"property paramEdges","sym":"#paramEdges"},{"pretty":"property info.paramEdges","sym":"info#paramEdges"}]],[[],[{"pretty":"property populateGraph","sym":"#populateGraph"}]],[[],[{"pretty":"property models","sym":"#models"}]],[[],[{"pretty":"property forEach","sym":"#forEach"}]],[[{"pretty":"addToGraph","sym":"#addToGraph"}],[{"pretty":"property addToGraph","sym":"#addToGraph"},{"pretty":"property node.addToGraph","sym":"node#addToGraph"}]],[[],[{"pretty":"property models","sym":"#models"}]],[[],[{"pretty":"property forEach","sym":"#forEach"}]],[[{"pretty":"addEdgesToGraph","sym":"#addEdgesToGraph"}],[{"pretty":"property addEdgesToGraph","sym":"#addEdgesToGraph"},{"pretty":"property node.addEdgesToGraph","sym":"node#addEdgesToGraph"}]],[[],[{"pretty":"property _onModelEvent","sym":"#_onModelEvent"}]],[[],[{"pretty":"property remove","sym":"#remove"}]],[[],[{"pretty":"property EventEmitter","sym":"#EventEmitter"}]],[[],[{"pretty":"property emit","sym":"#emit"},{"pretty":"property EventEmitter.emit","sym":"EventEmitter#emit"}]],[[],[{"pretty":"property toString","sym":"#toString"}]]];</script>
    </div>
  <div id="foot" class="footer">
    This page was generated by Searchfox <span class="pretty-date" data-datetime="Wed, 13 Feb 2019 15:28:42 +0000"></span>.
  </div>
  <span id="data" data-root="/" data-search="/mozilla-central/search" data-tree="mozilla-central" data-path="devtools/client/webaudioeditor/models.js"></span>
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
