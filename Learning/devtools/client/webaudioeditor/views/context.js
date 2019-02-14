<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8" />
  <link href="/static/icons/search.png" rel="shortcut icon">
  <title>context.js - mozsearch</title>
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
<div class="breadcrumbs"><a href="/mozilla-central/source/">mozilla-central</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools">devtools</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client">client</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor">webaudioeditor</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/views">views</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/views/context.js">context.js</a></div>
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
  <a href="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/views/context.js" title="Permalink" class="icon" data-update-link="true" data-link="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/views/context.js">Permalink <span class="accel">Y</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/log/tip/devtools/client/webaudioeditor/views/context.js" title="Log" class="icon">Log <span class="accel">L</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/raw-file/tip/devtools/client/webaudioeditor/views/context.js" title="Raw" class="icon">Raw <span class="accel">R</span></a>
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
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#1" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l2" class="line-number">2
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#2" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l3" class="line-number">3
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#3" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l4" class="line-number">4
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#4" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l5" class="line-number">5
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#5" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l6" class="line-number">6
<div class="blame-strip c2" data-blame="7c4184c262287445fa470435fc2208f858a59ed7#%#6" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l7" class="line-number">7
<div class="blame-strip c2" data-blame="7c4184c262287445fa470435fc2208f858a59ed7#%#7" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l8" class="line-number">8
<div class="blame-strip c1" data-blame="b7601c1b5301ba14a1d6393bb117674dfa234ceb#%#8" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l9" class="line-number">9
<div class="blame-strip c2" data-blame="0b2677dddc3ea52f84f150346ee8d55e991c61b4#%#9" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l10" class="line-number">10
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#7" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l11" class="line-number">11
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#8" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l12" class="line-number">12
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#9" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l13" class="line-number">13
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#10" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l14" class="line-number">14
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#11" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l15" class="line-number">15
<div class="blame-strip c2" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#15" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l16" class="line-number">16
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#13" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l17" class="line-number">17
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#14" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l18" class="line-number">18
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#15" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l19" class="line-number">19
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#16" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l20" class="line-number">20
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#17" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l21" class="line-number">21
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#18" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l22" class="line-number">22
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#19" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l23" class="line-number">23
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#20" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l24" class="line-number">24
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#21" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l25" class="line-number">25
<div class="blame-strip c2" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#25" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l26" class="line-number">26
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#23" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l27" class="line-number">27
<div class="blame-strip c2" data-blame="08997000eb0686614686846a7d6bf97b2ed76fa4#%#24" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l28" class="line-number">28
<div class="blame-strip c2" data-blame="08997000eb0686614686846a7d6bf97b2ed76fa4#%#25" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l29" class="line-number">29
<div class="blame-strip c2" data-blame="08997000eb0686614686846a7d6bf97b2ed76fa4#%#26" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l30" class="line-number">30
<div class="blame-strip c1" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#30" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l31" class="line-number">31
<div class="blame-strip c2" data-blame="08997000eb0686614686846a7d6bf97b2ed76fa4#%#28" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l32" class="line-number">32
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#24" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l33" class="line-number">33
<div class="blame-strip c2" data-blame="14fc08113fb36b481d1bdc85db506b33a3abab69#browser/devtools/webaudioeditor/views/context.js#25" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l34" class="line-number">34
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#26" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l35" class="line-number">35
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l36" class="line-number">36
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#28" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l37" class="line-number">37
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#29" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l38" class="line-number">38
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#30" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l39" class="line-number">39
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#31" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l40" class="line-number">40
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#32" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l41" class="line-number">41
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#33" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l42" class="line-number">42
<div class="blame-strip c2" data-blame="64db2267cf9899840b44ce4116c2dd94aa0c3d8e#browser/devtools/webaudioeditor/views/context.js#34" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l43" class="line-number">43
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#35" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l44" class="line-number">44
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#36" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l45" class="line-number">45
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#37" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l46" class="line-number">46
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#46" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l47" class="line-number">47
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#39" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l48" class="line-number">48
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#40" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l49" class="line-number">49
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#42" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l50" class="line-number">50
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#43" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l51" class="line-number">51
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#44" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l52" class="line-number">52
<div class="blame-strip c1" data-blame="14fc08113fb36b481d1bdc85db506b33a3abab69#browser/devtools/webaudioeditor/views/context.js#44" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l53" class="line-number">53
<div class="blame-strip c2" data-blame="85611a7b6dffaca81fbaf61a0e301f071690bf73#%#53" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l54" class="line-number">54
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#47" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l55" class="line-number">55
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#48" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l56" class="line-number">56
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#50" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l57" class="line-number">57
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#51" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l58" class="line-number">58
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#52" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l59" class="line-number">59
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#53" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l60" class="line-number">60
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#54" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l61" class="line-number">61
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#55" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l62" class="line-number">62
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#56" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l63" class="line-number">63
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#63" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l64" class="line-number">64
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#58" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l65" class="line-number">65
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#59" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l66" class="line-number">66
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#60" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l67" class="line-number">67
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#61" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l68" class="line-number">68
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#62" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l69" class="line-number">69
<div class="blame-strip c2" data-blame="85611a7b6dffaca81fbaf61a0e301f071690bf73#%#69" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l70" class="line-number">70
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#62" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l71" class="line-number">71
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#64" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l72" class="line-number">72
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#66" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l73" class="line-number">73
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#67" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l74" class="line-number">74
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#68" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l75" class="line-number">75
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#69" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l76" class="line-number">76
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#70" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l77" class="line-number">77
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#71" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l78" class="line-number">78
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#72" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l79" class="line-number">79
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#73" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l80" class="line-number">80
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#80" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l81" class="line-number">81
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#75" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l82" class="line-number">82
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#76" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l83" class="line-number">83
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#77" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l84" class="line-number">84
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#78" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l85" class="line-number">85
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#79" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l86" class="line-number">86
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#80" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l87" class="line-number">87
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#81" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l88" class="line-number">88
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#82" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l89" class="line-number">89
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#89" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l90" class="line-number">90
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#84" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l91" class="line-number">91
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#85" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l92" class="line-number">92
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#86" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l93" class="line-number">93
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#87" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l94" class="line-number">94
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#88" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l95" class="line-number">95
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#89" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l96" class="line-number">96
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#96" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l97" class="line-number">97
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#91" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l98" class="line-number">98
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#92" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l99" class="line-number">99
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#99" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l100" class="line-number">100
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#94" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l101" class="line-number">101
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#95" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l102" class="line-number">102
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#96" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l103" class="line-number">103
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#97" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l104" class="line-number">104
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#98" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l105" class="line-number">105
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#99" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l106" class="line-number">106
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#100" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l107" class="line-number">107
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#101" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l108" class="line-number">108
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#102" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l109" class="line-number">109
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#109" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l110" class="line-number">110
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#104" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l111" class="line-number">111
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#105" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l112" class="line-number">112
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#106" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l113" class="line-number">113
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#113" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l114" class="line-number">114
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#108" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l115" class="line-number">115
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#109" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l116" class="line-number">116
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#110" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l117" class="line-number">117
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#111" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l118" class="line-number">118
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#112" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l119" class="line-number">119
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#113" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l120" class="line-number">120
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#114" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l121" class="line-number">121
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#116" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l122" class="line-number">122
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#122" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l123" class="line-number">123
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#118" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l124" class="line-number">124
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#119" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l125" class="line-number">125
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#120" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l126" class="line-number">126
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#121" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l127" class="line-number">127
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#122" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l128" class="line-number">128
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#123" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l129" class="line-number">129
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#124" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l130" class="line-number">130
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#125" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l131" class="line-number">131
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#126" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l132" class="line-number">132
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#127" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l133" class="line-number">133
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#128" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l134" class="line-number">134
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#134" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l135" class="line-number">135
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#130" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l136" class="line-number">136
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#131" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l137" class="line-number">137
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#132" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l138" class="line-number">138
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#133" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l139" class="line-number">139
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#131" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l140" class="line-number">140
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#132" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l141" class="line-number">141
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#133" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l142" class="line-number">142
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#142" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l143" class="line-number">143
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#143" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l144" class="line-number">144
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#136" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l145" class="line-number">145
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#137" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l146" class="line-number">146
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#138" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l147" class="line-number">147
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#139" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l148" class="line-number">148
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#134" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l149" class="line-number">149
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#135" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l150" class="line-number">150
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#136" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l151" class="line-number">151
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#137" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l152" class="line-number">152
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#152" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l153" class="line-number">153
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#139" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l154" class="line-number">154
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#140" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l155" class="line-number">155
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#141" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l156" class="line-number">156
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#156" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l157" class="line-number">157
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#157" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l158" class="line-number">158
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#144" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l159" class="line-number">159
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#145" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l160" class="line-number">160
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#146" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l161" class="line-number">161
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#161" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l162" class="line-number">162
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#162" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l163" class="line-number">163
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#163" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l164" class="line-number">164
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#164" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l165" class="line-number">165
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#165" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l166" class="line-number">166
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#166" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l167" class="line-number">167
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#159" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l168" class="line-number">168
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#160" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l169" class="line-number">169
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#161" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l170" class="line-number">170
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#157" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l171" class="line-number">171
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#158" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l172" class="line-number">172
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#159" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l173" class="line-number">173
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#160" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l174" class="line-number">174
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#161" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l175" class="line-number">175
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#175" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l176" class="line-number">176
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#176" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l177" class="line-number">177
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#169" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l178" class="line-number">178
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#178" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l179" class="line-number">179
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#179" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l180" class="line-number">180
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#180" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l181" class="line-number">181
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#181" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l182" class="line-number">182
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#174" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l183" class="line-number">183
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#175" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l184" class="line-number">184
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#176" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l185" class="line-number">185
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#185" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l186" class="line-number">186
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#178" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l187" class="line-number">187
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#179" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l188" class="line-number">188
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#180" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l189" class="line-number">189
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#181" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l190" class="line-number">190
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#182" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l191" class="line-number">191
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#186" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l192" class="line-number">192
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#187" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l193" class="line-number">193
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#188" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l194" class="line-number">194
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#189" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l195" class="line-number">195
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#190" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l196" class="line-number">196
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#191" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l197" class="line-number">197
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#192" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l198" class="line-number">198
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#193" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l199" class="line-number">199
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#194" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l200" class="line-number">200
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#195" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l201" class="line-number">201
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#196" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l202" class="line-number">202
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#197" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l203" class="line-number">203
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#198" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l204" class="line-number">204
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#199" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l205" class="line-number">205
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#205" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l206" class="line-number">206
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#206" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l207" class="line-number">207
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#202" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l208" class="line-number">208
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#203" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l209" class="line-number">209
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#204" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l210" class="line-number">210
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#205" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l211" class="line-number">211
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#206" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l212" class="line-number">212
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#207" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l213" class="line-number">213
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#208" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l214" class="line-number">214
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#209" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l215" class="line-number">215
<div class="blame-strip c1" data-blame="ab37a52582de31d0b5ae5a9d22419cfe2fe43ec1#%#215" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l216" class="line-number">216
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#211" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l217" class="line-number">217
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#212" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l218" class="line-number">218
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#213" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l219" class="line-number">219
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#214" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l220" class="line-number">220
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#215" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l221" class="line-number">221
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#216" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l222" class="line-number">222
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#217" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l223" class="line-number">223
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#218" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l224" class="line-number">224
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#219" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l225" class="line-number">225
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#225" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l226" class="line-number">226
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#221" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l227" class="line-number">227
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#222" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l228" class="line-number">228
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#223" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l229" class="line-number">229
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#224" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l230" class="line-number">230
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#225" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l231" class="line-number">231
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#226" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l232" class="line-number">232
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#227" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l233" class="line-number">233
<div class="blame-strip c1" data-blame="0b2677dddc3ea52f84f150346ee8d55e991c61b4#%#233" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l234" class="line-number">234
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#229" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l235" class="line-number">235
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#230" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l236" class="line-number">236
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#231" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l237" class="line-number">237
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#232" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l238" class="line-number">238
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#233" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l239" class="line-number">239
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#239" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l240" class="line-number">240
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#235" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l241" class="line-number">241
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#236" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l242" class="line-number">242
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#237" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l243" class="line-number">243
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#238" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l244" class="line-number">244
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#239" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l245" class="line-number">245
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#245" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l246" class="line-number">246
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#241" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l247" class="line-number">247
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#242" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l248" class="line-number">248
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#243" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l249" class="line-number">249
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#244" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l250" class="line-number">250
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#245" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l251" class="line-number">251
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#246" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l252" class="line-number">252
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#247" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l253" class="line-number">253
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#248" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l254" class="line-number">254
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#249" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l255" class="line-number">255
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#250" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l256" class="line-number">256
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#251" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l257" class="line-number">257
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#252" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l258" class="line-number">258
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#253" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l259" class="line-number">259
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#254" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l260" class="line-number">260
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#255" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l261" class="line-number">261
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#256" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l262" class="line-number">262
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#257" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l263" class="line-number">263
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#258" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l264" class="line-number">264
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#259" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l265" class="line-number">265
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#260" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l266" class="line-number">266
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#266" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l267" class="line-number">267
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#262" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l268" class="line-number">268
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#263" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l269" class="line-number">269
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#264" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l270" class="line-number">270
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#265" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l271" class="line-number">271
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#266" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l272" class="line-number">272
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#267" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l273" class="line-number">273
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#268" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l274" class="line-number">274
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#274" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l275" class="line-number">275
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#267" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l276" class="line-number">276
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#268" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l277" class="line-number">277
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#269" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l278" class="line-number">278
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#270" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l279" class="line-number">279
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#271" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l280" class="line-number">280
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#270" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l281" class="line-number">281
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#271" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l282" class="line-number">282
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#272" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l283" class="line-number">283
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#273" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l284" class="line-number">284
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#274" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l285" class="line-number">285
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#279" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l286" class="line-number">286
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#280" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l287" class="line-number">287
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#281" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l288" class="line-number">288
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#288" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l289" class="line-number">289
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#289" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l290" class="line-number">290
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#290" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l291" class="line-number">291
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#285" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l292" class="line-number">292
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#286" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l293" class="line-number">293
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#287" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l294" class="line-number">294
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#288" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l295" class="line-number">295
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#289" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l296" class="line-number">296
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#290" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l297" class="line-number">297
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/views/context.js#289" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l298" class="line-number">298
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#292" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l299" class="line-number">299
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#293" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l300" class="line-number">300
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#294" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l301" class="line-number">301
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#295" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l302" class="line-number">302
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#302" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l303" class="line-number">303
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#303" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l304" class="line-number">304
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#298" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l305" class="line-number">305
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#299" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l306" class="line-number">306
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#306" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l307" class="line-number">307
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#301" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l308" class="line-number">308
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#308" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l309" class="line-number">309
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#302" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l310" class="line-number">310
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#310" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l311" class="line-number">311
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/context.js#296" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l312" class="line-number">312
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/context.js#297" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l313" class="line-number">313
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/views/context.js#298" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l314" class="line-number">314
<div class="blame-strip c2" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#314" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l315" class="line-number">315
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/views/context.js#305" role="button" aria-label="blame" aria-expanded="false"></div>
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
</code><code id="line-8" aria-labelledby="8"><span class="syn_reserved" >const</span> { <span class="syn_def" data-symbols="#debounce" data-i="0" >debounce</span> } = <span data-symbols="#require" data-i="1" >require</span>(<span class="syn_string" >"devtools/shared/debounce"</span>);
</code><code id="line-9" aria-labelledby="9"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#flags" data-i="2" >flags</span> = <span data-symbols="#require" data-i="3" >require</span>(<span class="syn_string" >"devtools/shared/flags"</span>);
</code><code id="line-10" aria-labelledby="10">
</code><code id="line-11" aria-labelledby="11"><span class="syn_comment" >// Globals for d3 stuff</span>
</code><code id="line-12" aria-labelledby="12"><span class="syn_comment" >// Default properties of the graph on rerender</span>
</code><code id="line-13" aria-labelledby="13"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#GRAPH_DEFAULTS" data-i="4" >GRAPH_DEFAULTS</span> = {
</code><code id="line-14" aria-labelledby="14">  <span class="syn_def syn_def" data-symbols="#translate,GRAPH_DEFAULTS#translate" data-i="5" >translate</span>: [20, 20],
</code><code id="line-15" aria-labelledby="15">  <span class="syn_def syn_def" data-symbols="#scale,GRAPH_DEFAULTS#scale" data-i="6" >scale</span>: 1,
</code><code id="line-16" aria-labelledby="16">};
</code><code id="line-17" aria-labelledby="17">
</code><code id="line-18" aria-labelledby="18"><span class="syn_comment" >// Sizes of SVG arrows in graph</span>
</code><code id="line-19" aria-labelledby="19"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#ARROW_HEIGHT" data-i="7" >ARROW_HEIGHT</span> = 5;
</code><code id="line-20" aria-labelledby="20"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#ARROW_WIDTH" data-i="8" >ARROW_WIDTH</span> = 8;
</code><code id="line-21" aria-labelledby="21">
</code><code id="line-22" aria-labelledby="22"><span class="syn_comment" >// Styles for markers as they cannot be done with CSS.</span>
</code><code id="line-23" aria-labelledby="23"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#MARKER_STYLING" data-i="9" >MARKER_STYLING</span> = {
</code><code id="line-24" aria-labelledby="24">  <span class="syn_def syn_def" data-symbols="#light,MARKER_STYLING#light" data-i="10" >light</span>: <span class="syn_string" >"#AAA"</span>,
</code><code id="line-25" aria-labelledby="25">  <span class="syn_def syn_def" data-symbols="#dark,MARKER_STYLING#dark" data-i="11" >dark</span>: <span class="syn_string" >"#CED3D9"</span>,
</code><code id="line-26" aria-labelledby="26">};
</code><code id="line-27" aria-labelledby="27"><span data-symbols="#Object" data-i="12" >Object</span>.<span data-symbols="#defineProperty,Object#defineProperty" data-i="13" >defineProperty</span>(<span class="syn_reserved" >this</span>, <span class="syn_string" >"MARKER_STYLING"</span>, {
</code><code id="line-28" aria-labelledby="28">  <span class="syn_def" data-symbols="#value" data-i="14" >value</span>: <span data-symbols="#MARKER_STYLING" data-i="15" >MARKER_STYLING</span>,
</code><code id="line-29" aria-labelledby="29">  <span class="syn_def" data-symbols="#enumerable" data-i="16" >enumerable</span>: <span class="syn_reserved" >true</span>,
</code><code id="line-30" aria-labelledby="30">  <span class="syn_def" data-symbols="#writable" data-i="17" >writable</span>: <span class="syn_reserved" >false</span>,
</code><code id="line-31" aria-labelledby="31">});
</code><code id="line-32" aria-labelledby="32">
</code><code id="line-33" aria-labelledby="33"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#GRAPH_DEBOUNCE_TIMER" data-i="18" >GRAPH_DEBOUNCE_TIMER</span> = 100;
</code><code id="line-34" aria-labelledby="34">
</code><code id="line-35" aria-labelledby="35"><span class="syn_comment" >// `gAudioNodes` events that should require the graph</span>
</code><code id="line-36" aria-labelledby="36"><span class="syn_comment" >// to redraw</span>
</code><code id="line-37" aria-labelledby="37"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#GRAPH_REDRAW_EVENTS" data-i="19" >GRAPH_REDRAW_EVENTS</span> = [<span class="syn_string" >"add"</span>, <span class="syn_string" >"connect"</span>, <span class="syn_string" >"disconnect"</span>, <span class="syn_string" >"remove"</span>];
</code><code id="line-38" aria-labelledby="38">
</code><code id="line-39" aria-labelledby="39"><span class="syn_comment" >/**</span>
</code><code id="line-40" aria-labelledby="40"><span class="syn_comment" > * Functions handling the graph UI.</span>
</code><code id="line-41" aria-labelledby="41"><span class="syn_comment" > */</span>
</code><code id="line-42" aria-labelledby="42"><span class="syn_reserved" >var</span> <span class="syn_def" data-symbols="#ContextView" data-i="20" >ContextView</span> = {
</code><code id="line-43" aria-labelledby="43">  <span class="syn_comment" >/**</span>
</code><code id="line-44" aria-labelledby="44"><span class="syn_comment" >   * Initialization function, called when the tool is started.</span>
</code><code id="line-45" aria-labelledby="45"><span class="syn_comment" >   */</span>
</code><code id="line-46" aria-labelledby="46">  <span class="syn_def syn_def" data-symbols="#initialize,ContextView#initialize" data-i="21" >initialize</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-47" aria-labelledby="47">    <span class="syn_reserved" >this</span>.<span data-symbols="#_onGraphClick,ContextView#_onGraphClick" data-i="22" >_onGraphClick</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_onGraphClick,_onGraphClick#_onGraphClick" data-i="23" >_onGraphClick</span>.<span data-symbols="#bind" data-i="24" >bind</span>(<span class="syn_reserved" >this</span>);
</code><code id="line-48" aria-labelledby="48">    <span class="syn_reserved" >this</span>.<span data-symbols="#_onThemeChange,ContextView#_onThemeChange" data-i="25" >_onThemeChange</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_onThemeChange,_onThemeChange#_onThemeChange" data-i="26" >_onThemeChange</span>.<span data-symbols="#bind" data-i="27" >bind</span>(<span class="syn_reserved" >this</span>);
</code><code id="line-49" aria-labelledby="49">    <span class="syn_reserved" >this</span>.<span data-symbols="#_onStartContext,ContextView#_onStartContext" data-i="28" >_onStartContext</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_onStartContext,_onStartContext#_onStartContext" data-i="29" >_onStartContext</span>.<span data-symbols="#bind" data-i="30" >bind</span>(<span class="syn_reserved" >this</span>);
</code><code id="line-50" aria-labelledby="50">    <span class="syn_reserved" >this</span>.<span data-symbols="#_onEvent,ContextView#_onEvent" data-i="31" >_onEvent</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_onEvent,_onEvent#_onEvent" data-i="32" >_onEvent</span>.<span data-symbols="#bind" data-i="33" >bind</span>(<span class="syn_reserved" >this</span>);
</code><code id="line-51" aria-labelledby="51">
</code><code id="line-52" aria-labelledby="52">    <span class="syn_reserved" >this</span>.<span data-symbols="#draw,ContextView#draw" data-i="34" >draw</span> = <span data-symbols="#debounce" data-i="35" >debounce</span>(<span class="syn_reserved" >this</span>.<span data-symbols="#draw,draw#draw" data-i="36" >draw</span>.<span data-symbols="#bind" data-i="37" >bind</span>(<span class="syn_reserved" >this</span>), <span data-symbols="#GRAPH_DEBOUNCE_TIMER" data-i="38" >GRAPH_DEBOUNCE_TIMER</span>);
</code><code id="line-53" aria-labelledby="53">    $(<span class="syn_string" >"#graph-target"</span>).<span data-symbols="#addEventListener" data-i="39" >addEventListener</span>(<span class="syn_string" >"click"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onGraphClick,ContextView#_onGraphClick" data-i="40" >_onGraphClick</span>);
</code><code id="line-54" aria-labelledby="54">
</code><code id="line-55" aria-labelledby="55">    <span data-symbols="#window" data-i="41" >window</span>.<span data-symbols="#on,window#on" data-i="42" >on</span>(<span data-symbols="#EVENTS" data-i="43" >EVENTS</span>.<span data-symbols="#THEME_CHANGE,EVENTS#THEME_CHANGE" data-i="44" >THEME_CHANGE</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onThemeChange,ContextView#_onThemeChange" data-i="45" >_onThemeChange</span>);
</code><code id="line-56" aria-labelledby="56">    <span data-symbols="#window" data-i="46" >window</span>.<span data-symbols="#on,window#on" data-i="47" >on</span>(<span data-symbols="#EVENTS" data-i="48" >EVENTS</span>.<span data-symbols="#START_CONTEXT,EVENTS#START_CONTEXT" data-i="49" >START_CONTEXT</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onStartContext,ContextView#_onStartContext" data-i="50" >_onStartContext</span>);
</code><code id="line-57" aria-labelledby="57">    <span data-symbols="#gAudioNodes" data-i="51" >gAudioNodes</span>.<span data-symbols="#on,gAudioNodes#on" data-i="52" >on</span>(<span class="syn_string" >"*"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onEvent,ContextView#_onEvent" data-i="53" >_onEvent</span>);
</code><code id="line-58" aria-labelledby="58">  },
</code><code id="line-59" aria-labelledby="59">
</code><code id="line-60" aria-labelledby="60">  <span class="syn_comment" >/**</span>
</code><code id="line-61" aria-labelledby="61"><span class="syn_comment" >   * Destruction function, called when the tool is closed.</span>
</code><code id="line-62" aria-labelledby="62"><span class="syn_comment" >   */</span>
</code><code id="line-63" aria-labelledby="63">  <span class="syn_def syn_def" data-symbols="#destroy,ContextView#destroy" data-i="54" >destroy</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-64" aria-labelledby="64">    <span class="syn_comment" >// If the graph was rendered at all, then the handler</span>
</code><code id="line-65" aria-labelledby="65">    <span class="syn_comment" >// for zooming in will be set. We must remove it to prevent leaks.</span>
</code><code id="line-66" aria-labelledby="66">    <span class="syn_reserved" >if</span> (<span class="syn_reserved" >this</span>.<span data-symbols="#_zoomBinding,ContextView#_zoomBinding" data-i="55" >_zoomBinding</span>) {
</code><code id="line-67" aria-labelledby="67">      <span class="syn_reserved" >this</span>.<span data-symbols="#_zoomBinding,ContextView#_zoomBinding" data-i="56" >_zoomBinding</span>.<span data-symbols="#on" data-i="57" >on</span>(<span class="syn_string" >"zoom"</span>, <span class="syn_reserved" >null</span>);
</code><code id="line-68" aria-labelledby="68">    }
</code><code id="line-69" aria-labelledby="69">    $(<span class="syn_string" >"#graph-target"</span>).<span data-symbols="#removeEventListener" data-i="58" >removeEventListener</span>(<span class="syn_string" >"click"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onGraphClick,ContextView#_onGraphClick" data-i="59" >_onGraphClick</span>);
</code><code id="line-70" aria-labelledby="70">
</code><code id="line-71" aria-labelledby="71">    <span data-symbols="#window" data-i="60" >window</span>.<span data-symbols="#off,window#off" data-i="61" >off</span>(<span data-symbols="#EVENTS" data-i="62" >EVENTS</span>.<span data-symbols="#THEME_CHANGE,EVENTS#THEME_CHANGE" data-i="63" >THEME_CHANGE</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onThemeChange,ContextView#_onThemeChange" data-i="64" >_onThemeChange</span>);
</code><code id="line-72" aria-labelledby="72">    <span data-symbols="#window" data-i="65" >window</span>.<span data-symbols="#off,window#off" data-i="66" >off</span>(<span data-symbols="#EVENTS" data-i="67" >EVENTS</span>.<span data-symbols="#START_CONTEXT,EVENTS#START_CONTEXT" data-i="68" >START_CONTEXT</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onStartContext,ContextView#_onStartContext" data-i="69" >_onStartContext</span>);
</code><code id="line-73" aria-labelledby="73">    <span data-symbols="#gAudioNodes" data-i="70" >gAudioNodes</span>.<span data-symbols="#off,gAudioNodes#off" data-i="71" >off</span>(<span class="syn_string" >"*"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onEvent,ContextView#_onEvent" data-i="72" >_onEvent</span>);
</code><code id="line-74" aria-labelledby="74">  },
</code><code id="line-75" aria-labelledby="75">
</code><code id="line-76" aria-labelledby="76">  <span class="syn_comment" >/**</span>
</code><code id="line-77" aria-labelledby="77"><span class="syn_comment" >   * Called when a page is reloaded and waiting for a "start-context" event</span>
</code><code id="line-78" aria-labelledby="78"><span class="syn_comment" >   * and clears out old content</span>
</code><code id="line-79" aria-labelledby="79"><span class="syn_comment" >   */</span>
</code><code id="line-80" aria-labelledby="80">  <span class="syn_def syn_def" data-symbols="#resetUI,ContextView#resetUI" data-i="73" >resetUI</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-81" aria-labelledby="81">    <span class="syn_reserved" >this</span>.<span data-symbols="#clearGraph,ContextView#clearGraph" data-i="74" >clearGraph</span>();
</code><code id="line-82" aria-labelledby="82">    <span class="syn_reserved" >this</span>.<span data-symbols="#resetGraphTransform,ContextView#resetGraphTransform" data-i="75" >resetGraphTransform</span>();
</code><code id="line-83" aria-labelledby="83">  },
</code><code id="line-84" aria-labelledby="84">
</code><code id="line-85" aria-labelledby="85">  <span class="syn_comment" >/**</span>
</code><code id="line-86" aria-labelledby="86"><span class="syn_comment" >   * Clears out the rendered graph, called when resetting the SVG elements to draw again,</span>
</code><code id="line-87" aria-labelledby="87"><span class="syn_comment" >   * or when resetting the entire UI tool</span>
</code><code id="line-88" aria-labelledby="88"><span class="syn_comment" >   */</span>
</code><code id="line-89" aria-labelledby="89">  <span class="syn_def syn_def" data-symbols="#clearGraph,ContextView#clearGraph" data-i="76" >clearGraph</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-90" aria-labelledby="90">    $(<span class="syn_string" >"#graph-target"</span>).<span data-symbols="#innerHTML" data-i="77" >innerHTML</span> = <span class="syn_string" >""</span>;
</code><code id="line-91" aria-labelledby="91">  },
</code><code id="line-92" aria-labelledby="92">
</code><code id="line-93" aria-labelledby="93">  <span class="syn_comment" >/**</span>
</code><code id="line-94" aria-labelledby="94"><span class="syn_comment" >   * Moves the graph back to its original scale and translation.</span>
</code><code id="line-95" aria-labelledby="95"><span class="syn_comment" >   */</span>
</code><code id="line-96" aria-labelledby="96">  <span class="syn_def syn_def" data-symbols="#resetGraphTransform,ContextView#resetGraphTransform" data-i="78" >resetGraphTransform</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-97" aria-labelledby="97">    <span class="syn_comment" >// Only reset if the graph was ever drawn.</span>
</code><code id="line-98" aria-labelledby="98">    <span class="syn_reserved" >if</span> (<span class="syn_reserved" >this</span>.<span data-symbols="#_zoomBinding,ContextView#_zoomBinding" data-i="79" >_zoomBinding</span>) {
</code><code id="line-99" aria-labelledby="99">      <span class="syn_reserved" >const</span> { <span data-symbols="7380-0" >translate</span>, <span data-symbols="7380-1" >scale</span> } = <span data-symbols="#GRAPH_DEFAULTS" data-i="80" >GRAPH_DEFAULTS</span>;
</code><code id="line-100" aria-labelledby="100">      <span class="syn_comment" >// Must set the `zoomBinding` so the next `zoom` event is in sync with</span>
</code><code id="line-101" aria-labelledby="101">      <span class="syn_comment" >// where the graph is visually (set by the `transform` attribute).</span>
</code><code id="line-102" aria-labelledby="102">      <span class="syn_reserved" >this</span>.<span data-symbols="#_zoomBinding,ContextView#_zoomBinding" data-i="81" >_zoomBinding</span>.<span data-symbols="#scale" data-i="82" >scale</span>(<span data-symbols="7380-1" >scale</span>);
</code><code id="line-103" aria-labelledby="103">      <span class="syn_reserved" >this</span>.<span data-symbols="#_zoomBinding,ContextView#_zoomBinding" data-i="83" >_zoomBinding</span>.<span data-symbols="#translate" data-i="84" >translate</span>(<span data-symbols="7380-0" >translate</span>);
</code><code id="line-104" aria-labelledby="104">      <span data-symbols="#d3" data-i="85" >d3</span>.<span data-symbols="#select,d3#select" data-i="86" >select</span>(<span class="syn_string" >"#graph-target"</span>)
</code><code id="line-105" aria-labelledby="105">        .<span data-symbols="#attr" data-i="87" >attr</span>(<span class="syn_string" >"transform"</span>, <span class="syn_string" >"translate("</span> + <span data-symbols="7380-0" >translate</span> + <span class="syn_string" >") scale("</span> + <span data-symbols="7380-1" >scale</span> + <span class="syn_string" >")"</span>);
</code><code id="line-106" aria-labelledby="106">    }
</code><code id="line-107" aria-labelledby="107">  },
</code><code id="line-108" aria-labelledby="108">
</code><code id="line-109" aria-labelledby="109">  <span class="syn_def syn_def" data-symbols="#getCurrentScale,ContextView#getCurrentScale" data-i="88" >getCurrentScale</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-110" aria-labelledby="110">    <span class="syn_reserved" >return</span> <span class="syn_reserved" >this</span>.<span data-symbols="#_zoomBinding,ContextView#_zoomBinding" data-i="89" >_zoomBinding</span> ? <span class="syn_reserved" >this</span>.<span data-symbols="#_zoomBinding,ContextView#_zoomBinding" data-i="90" >_zoomBinding</span>.<span data-symbols="#scale" data-i="91" >scale</span>() : <span class="syn_reserved" >null</span>;
</code><code id="line-111" aria-labelledby="111">  },
</code><code id="line-112" aria-labelledby="112">
</code><code id="line-113" aria-labelledby="113">  <span class="syn_def syn_def" data-symbols="#getCurrentTranslation,ContextView#getCurrentTranslation" data-i="92" >getCurrentTranslation</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-114" aria-labelledby="114">    <span class="syn_reserved" >return</span> <span class="syn_reserved" >this</span>.<span data-symbols="#_zoomBinding,ContextView#_zoomBinding" data-i="93" >_zoomBinding</span> ? <span class="syn_reserved" >this</span>.<span data-symbols="#_zoomBinding,ContextView#_zoomBinding" data-i="94" >_zoomBinding</span>.<span data-symbols="#translate" data-i="95" >translate</span>() : <span class="syn_reserved" >null</span>;
</code><code id="line-115" aria-labelledby="115">  },
</code><code id="line-116" aria-labelledby="116">
</code><code id="line-117" aria-labelledby="117">  <span class="syn_comment" >/**</span>
</code><code id="line-118" aria-labelledby="118"><span class="syn_comment" >   * Makes the corresponding graph node appear "focused", removing</span>
</code><code id="line-119" aria-labelledby="119"><span class="syn_comment" >   * focused styles from all other nodes. If no `actorID` specified,</span>
</code><code id="line-120" aria-labelledby="120"><span class="syn_comment" >   * make all nodes appear unselected.</span>
</code><code id="line-121" aria-labelledby="121"><span class="syn_comment" >   */</span>
</code><code id="line-122" aria-labelledby="122">  <span class="syn_def syn_def" data-symbols="#focusNode,ContextView#focusNode" data-i="96" >focusNode</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7380-2" >actorID</span>) {
</code><code id="line-123" aria-labelledby="123">    <span class="syn_comment" >// Remove class "selected" from all nodes</span>
</code><code id="line-124" aria-labelledby="124">    <span data-symbols="#Array" data-i="97" >Array</span>.<span data-symbols="#forEach,Array#forEach" data-i="98" >forEach</span>($$(<span class="syn_string" >".nodes > g"</span>), $node => $node.<span data-symbols="#classList,$node#classList" data-i="99" >classList</span>.<span data-symbols="#remove" data-i="100" >remove</span>(<span class="syn_string" >"selected"</span>));
</code><code id="line-125" aria-labelledby="125">    <span class="syn_comment" >// Add to "selected"</span>
</code><code id="line-126" aria-labelledby="126">    <span class="syn_reserved" >if</span> (<span data-symbols="7380-2" >actorID</span>) {
</code><code id="line-127" aria-labelledby="127">      <span class="syn_reserved" >this</span>.<span data-symbols="#_getNodeByID,ContextView#_getNodeByID" data-i="101" >_getNodeByID</span>(<span data-symbols="7380-2" >actorID</span>).<span data-symbols="#classList" data-i="102" >classList</span>.<span data-symbols="#add" data-i="103" >add</span>(<span class="syn_string" >"selected"</span>);
</code><code id="line-128" aria-labelledby="128">    }
</code><code id="line-129" aria-labelledby="129">  },
</code><code id="line-130" aria-labelledby="130">
</code><code id="line-131" aria-labelledby="131">  <span class="syn_comment" >/**</span>
</code><code id="line-132" aria-labelledby="132"><span class="syn_comment" >   * Takes an actorID and returns the corresponding DOM SVG element in the graph</span>
</code><code id="line-133" aria-labelledby="133"><span class="syn_comment" >   */</span>
</code><code id="line-134" aria-labelledby="134">  <span class="syn_def syn_def" data-symbols="#_getNodeByID,ContextView#_getNodeByID" data-i="104" >_getNodeByID</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7380-4" >actorID</span>) {
</code><code id="line-135" aria-labelledby="135">    <span class="syn_reserved" >return</span> $(<span class="syn_string" >".nodes > g[data-id='"</span> + <span data-symbols="7380-4" >actorID</span> + <span class="syn_string" >"']"</span>);
</code><code id="line-136" aria-labelledby="136">  },
</code><code id="line-137" aria-labelledby="137">
</code><code id="line-138" aria-labelledby="138">  <span class="syn_comment" >/**</span>
</code><code id="line-139" aria-labelledby="139"><span class="syn_comment" >   * Sets the appropriate class on an SVG node when its bypass</span>
</code><code id="line-140" aria-labelledby="140"><span class="syn_comment" >   * status is toggled.</span>
</code><code id="line-141" aria-labelledby="141"><span class="syn_comment" >   */</span>
</code><code id="line-142" aria-labelledby="142">  <span class="syn_def syn_def" data-symbols="#_bypassNode,ContextView#_bypassNode" data-i="105" >_bypassNode</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7380-5" >node</span>, <span data-symbols="7380-6" >enabled</span>) {
</code><code id="line-143" aria-labelledby="143">    <span class="syn_reserved" >const</span> <span data-symbols="7380-7" >el</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_getNodeByID,ContextView#_getNodeByID" data-i="106" >_getNodeByID</span>(<span data-symbols="7380-5" >node</span>.<span data-symbols="#id,node#id" data-i="107" >id</span>);
</code><code id="line-144" aria-labelledby="144">    <span data-symbols="7380-7" >el</span>.<span data-symbols="#classList,el#classList" data-i="108" >classList</span>[<span data-symbols="7380-6" >enabled</span> ? <span class="syn_string" >"add"</span> : <span class="syn_string" >"remove"</span>](<span class="syn_string" >"bypassed"</span>);
</code><code id="line-145" aria-labelledby="145">  },
</code><code id="line-146" aria-labelledby="146">
</code><code id="line-147" aria-labelledby="147">  <span class="syn_comment" >/**</span>
</code><code id="line-148" aria-labelledby="148"><span class="syn_comment" >   * This method renders the nodes currently available in `gAudioNodes` and is</span>
</code><code id="line-149" aria-labelledby="149"><span class="syn_comment" >   * throttled to be called at most every `GRAPH_DEBOUNCE_TIMER` milliseconds.</span>
</code><code id="line-150" aria-labelledby="150"><span class="syn_comment" >   * It's called whenever the audio context routing changes, after being debounced.</span>
</code><code id="line-151" aria-labelledby="151"><span class="syn_comment" >   */</span>
</code><code id="line-152" aria-labelledby="152">  <span class="syn_def syn_def" data-symbols="#draw,ContextView#draw" data-i="109" >draw</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-153" aria-labelledby="153">    <span class="syn_comment" >// Clear out previous SVG information</span>
</code><code id="line-154" aria-labelledby="154">    <span class="syn_reserved" >this</span>.<span data-symbols="#clearGraph,ContextView#clearGraph" data-i="110" >clearGraph</span>();
</code><code id="line-155" aria-labelledby="155">
</code><code id="line-156" aria-labelledby="156">    <span class="syn_reserved" >const</span> <span data-symbols="7380-8" >graph</span> = <span class="syn_reserved" >new</span> <span data-symbols="#dagreD3" data-i="111" >dagreD3</span>.<span data-symbols="#Digraph,dagreD3#Digraph" data-i="112" >Digraph</span>();
</code><code id="line-157" aria-labelledby="157">    <span class="syn_reserved" >const</span> <span data-symbols="7380-9" >renderer</span> = <span class="syn_reserved" >new</span> <span data-symbols="#dagreD3" data-i="113" >dagreD3</span>.<span data-symbols="#Renderer,dagreD3#Renderer" data-i="114" >Renderer</span>();
</code><code id="line-158" aria-labelledby="158">    <span data-symbols="#gAudioNodes" data-i="115" >gAudioNodes</span>.<span data-symbols="#populateGraph,gAudioNodes#populateGraph" data-i="116" >populateGraph</span>(<span data-symbols="7380-8" >graph</span>);
</code><code id="line-159" aria-labelledby="159">
</code><code id="line-160" aria-labelledby="160">    <span class="syn_comment" >// Post-render manipulation of the nodes</span>
</code><code id="line-161" aria-labelledby="161">    <span class="syn_reserved" >const</span> <span data-symbols="7380-10" >oldDrawNodes</span> = <span data-symbols="7380-9" >renderer</span>.<span data-symbols="#drawNodes,renderer#drawNodes" data-i="117" >drawNodes</span>();
</code><code id="line-162" aria-labelledby="162">    <span data-symbols="7380-9" >renderer</span>.<span data-symbols="#drawNodes,renderer#drawNodes" data-i="118" >drawNodes</span>(<span class="syn_reserved" >function</span>(<span data-symbols="7380-11" >graph</span>, <span data-symbols="7380-12" >root</span>) {
</code><code id="line-163" aria-labelledby="163">      <span class="syn_reserved" >const</span> <span data-symbols="7380-13" >svgNodes</span> = <span data-symbols="7380-10" >oldDrawNodes</span>(<span data-symbols="7380-11" >graph</span>, <span data-symbols="7380-12" >root</span>);
</code><code id="line-164" aria-labelledby="164">      <span data-symbols="7380-13" >svgNodes</span>.<span data-symbols="#each,svgNodes#each" data-i="119" >each</span>(<span class="syn_reserved" >function</span>(<span data-symbols="7380-14" >n</span>) {
</code><code id="line-165" aria-labelledby="165">        <span class="syn_reserved" >const</span> <span data-symbols="7380-15" >node</span> = <span data-symbols="7380-11" >graph</span>.<span data-symbols="#node,graph#node" data-i="120" >node</span>(<span data-symbols="7380-14" >n</span>);
</code><code id="line-166" aria-labelledby="166">        <span class="syn_reserved" >const</span> <span data-symbols="7380-16" >classString</span> = <span class="syn_string" >"audionode type-"</span> + <span data-symbols="7380-15" >node</span>.<span data-symbols="#type,node#type" data-i="121" >type</span> + (<span data-symbols="7380-15" >node</span>.<span data-symbols="#bypassed,node#bypassed" data-i="122" >bypassed</span> ? <span class="syn_string" >" bypassed"</span> : <span class="syn_string" >""</span>);
</code><code id="line-167" aria-labelledby="167">        <span class="syn_reserved" >this</span>.<span data-symbols="#setAttribute,ContextView#setAttribute" data-i="123" >setAttribute</span>(<span class="syn_string" >"class"</span>, <span data-symbols="7380-16" >classString</span>);
</code><code id="line-168" aria-labelledby="168">        <span class="syn_reserved" >this</span>.<span data-symbols="#setAttribute,ContextView#setAttribute" data-i="124" >setAttribute</span>(<span class="syn_string" >"data-id"</span>, <span data-symbols="7380-15" >node</span>.<span data-symbols="#id,node#id" data-i="125" >id</span>);
</code><code id="line-169" aria-labelledby="169">        <span class="syn_reserved" >this</span>.<span data-symbols="#setAttribute,ContextView#setAttribute" data-i="126" >setAttribute</span>(<span class="syn_string" >"data-type"</span>, <span data-symbols="7380-15" >node</span>.<span data-symbols="#type,node#type" data-i="127" >type</span>);
</code><code id="line-170" aria-labelledby="170">      });
</code><code id="line-171" aria-labelledby="171">      <span class="syn_reserved" >return</span> <span data-symbols="7380-13" >svgNodes</span>;
</code><code id="line-172" aria-labelledby="172">    });
</code><code id="line-173" aria-labelledby="173">
</code><code id="line-174" aria-labelledby="174">    <span class="syn_comment" >// Post-render manipulation of edges</span>
</code><code id="line-175" aria-labelledby="175">    <span class="syn_reserved" >const</span> <span data-symbols="7380-17" >oldDrawEdgePaths</span> = <span data-symbols="7380-9" >renderer</span>.<span data-symbols="#drawEdgePaths,renderer#drawEdgePaths" data-i="128" >drawEdgePaths</span>();
</code><code id="line-176" aria-labelledby="176">    <span class="syn_reserved" >const</span> <span data-symbols="7380-18" >defaultClasses</span> = <span class="syn_string" >"edgePath enter"</span>;
</code><code id="line-177" aria-labelledby="177">
</code><code id="line-178" aria-labelledby="178">    <span data-symbols="7380-9" >renderer</span>.<span data-symbols="#drawEdgePaths,renderer#drawEdgePaths" data-i="129" >drawEdgePaths</span>(<span class="syn_reserved" >function</span>(<span data-symbols="7380-19" >graph</span>, <span data-symbols="7380-20" >root</span>) {
</code><code id="line-179" aria-labelledby="179">      <span class="syn_reserved" >const</span> <span data-symbols="7380-21" >svgEdges</span> = <span data-symbols="7380-17" >oldDrawEdgePaths</span>(<span data-symbols="7380-19" >graph</span>, <span data-symbols="7380-20" >root</span>);
</code><code id="line-180" aria-labelledby="180">      <span data-symbols="7380-21" >svgEdges</span>.<span data-symbols="#each,svgEdges#each" data-i="130" >each</span>(<span class="syn_reserved" >function</span>(<span data-symbols="7380-22" >e</span>) {
</code><code id="line-181" aria-labelledby="181">        <span class="syn_reserved" >const</span> <span data-symbols="7380-23" >edge</span> = <span data-symbols="7380-19" >graph</span>.<span data-symbols="#edge,graph#edge" data-i="131" >edge</span>(<span data-symbols="7380-22" >e</span>);
</code><code id="line-182" aria-labelledby="182">
</code><code id="line-183" aria-labelledby="183">        <span class="syn_comment" >// We have to manually specify the default classes on the edges</span>
</code><code id="line-184" aria-labelledby="184">        <span class="syn_comment" >// as to not overwrite them</span>
</code><code id="line-185" aria-labelledby="185">        <span class="syn_reserved" >const</span> <span data-symbols="7380-24" >edgeClass</span> = <span data-symbols="7380-18" >defaultClasses</span> + (<span data-symbols="7380-23" >edge</span>.<span data-symbols="#param,edge#param" data-i="132" >param</span> ? (<span class="syn_string" >" param-connection "</span> + <span data-symbols="7380-23" >edge</span>.<span data-symbols="#param,edge#param" data-i="133" >param</span>) : <span class="syn_string" >""</span>);
</code><code id="line-186" aria-labelledby="186">
</code><code id="line-187" aria-labelledby="187">        <span class="syn_reserved" >this</span>.<span data-symbols="#setAttribute,ContextView#setAttribute" data-i="134" >setAttribute</span>(<span class="syn_string" >"data-source"</span>, <span data-symbols="7380-23" >edge</span>.<span data-symbols="#source,edge#source" data-i="135" >source</span>);
</code><code id="line-188" aria-labelledby="188">        <span class="syn_reserved" >this</span>.<span data-symbols="#setAttribute,ContextView#setAttribute" data-i="136" >setAttribute</span>(<span class="syn_string" >"data-target"</span>, <span data-symbols="7380-23" >edge</span>.<span data-symbols="#target,edge#target" data-i="137" >target</span>);
</code><code id="line-189" aria-labelledby="189">        <span class="syn_reserved" >this</span>.<span data-symbols="#setAttribute,ContextView#setAttribute" data-i="138" >setAttribute</span>(<span class="syn_string" >"data-param"</span>, <span data-symbols="7380-23" >edge</span>.<span data-symbols="#param,edge#param" data-i="139" >param</span> ? <span data-symbols="7380-23" >edge</span>.<span data-symbols="#param,edge#param" data-i="140" >param</span> : <span class="syn_reserved" >null</span>);
</code><code id="line-190" aria-labelledby="190">        <span class="syn_reserved" >this</span>.<span data-symbols="#setAttribute,ContextView#setAttribute" data-i="141" >setAttribute</span>(<span class="syn_string" >"class"</span>, <span data-symbols="7380-24" >edgeClass</span>);
</code><code id="line-191" aria-labelledby="191">      });
</code><code id="line-192" aria-labelledby="192">
</code><code id="line-193" aria-labelledby="193">      <span class="syn_reserved" >return</span> <span data-symbols="7380-21" >svgEdges</span>;
</code><code id="line-194" aria-labelledby="194">    });
</code><code id="line-195" aria-labelledby="195">
</code><code id="line-196" aria-labelledby="196">    <span class="syn_comment" >// Override Dagre-d3's post render function by passing in our own.</span>
</code><code id="line-197" aria-labelledby="197">    <span class="syn_comment" >// This way we can leave styles out of it.</span>
</code><code id="line-198" aria-labelledby="198">    <span data-symbols="7380-9" >renderer</span>.<span data-symbols="#postRender,renderer#postRender" data-i="142" >postRender</span>((<span data-symbols="7380-25" >graph</span>, <span data-symbols="7380-26" >root</span>) => {
</code><code id="line-199" aria-labelledby="199">      <span class="syn_comment" >// We have to manually set the marker styling since we cannot</span>
</code><code id="line-200" aria-labelledby="200">      <span class="syn_comment" >// do this currently with CSS, although it is in spec for SVG2</span>
</code><code id="line-201" aria-labelledby="201">      <span class="syn_comment" >// <a href="https://svgwg.org/svg2-draft/painting.html#VertexMarkerProperties">https://svgwg.org/svg2-draft/painting.html#VertexMarkerProperties</a></span>
</code><code id="line-202" aria-labelledby="202">      <span class="syn_comment" >// For now, manually set it on creation, and the `_onThemeChange`</span>
</code><code id="line-203" aria-labelledby="203">      <span class="syn_comment" >// function will fire when the devtools theme changes to update the</span>
</code><code id="line-204" aria-labelledby="204">      <span class="syn_comment" >// styling manually.</span>
</code><code id="line-205" aria-labelledby="205">      <span class="syn_reserved" >const</span> <span data-symbols="7380-27" >theme</span> = <span data-symbols="#Services" data-i="143" >Services</span>.<span data-symbols="#prefs,Services#prefs" data-i="144" >prefs</span>.<span data-symbols="#getCharPref" data-i="145" >getCharPref</span>(<span class="syn_string" >"devtools.theme"</span>);
</code><code id="line-206" aria-labelledby="206">      <span class="syn_reserved" >const</span> <span data-symbols="7380-28" >markerColor</span> = <span data-symbols="#MARKER_STYLING" data-i="146" >MARKER_STYLING</span>[<span data-symbols="7380-27" >theme</span>];
</code><code id="line-207" aria-labelledby="207">      <span class="syn_reserved" >if</span> (<span data-symbols="7380-25" >graph</span>.<span data-symbols="#isDirected,graph#isDirected" data-i="147" >isDirected</span>() &amp;&amp; <span data-symbols="7380-26" >root</span>.<span data-symbols="#select,root#select" data-i="148" >select</span>(<span class="syn_string" >"#arrowhead"</span>).<span data-symbols="#empty" data-i="149" >empty</span>()) {
</code><code id="line-208" aria-labelledby="208">        <span data-symbols="7380-26" >root</span>
</code><code id="line-209" aria-labelledby="209">          .<span data-symbols="#append,root#append" data-i="150" >append</span>(<span class="syn_string" >"svg:defs"</span>)
</code><code id="line-210" aria-labelledby="210">          .<span data-symbols="#append" data-i="151" >append</span>(<span class="syn_string" >"svg:marker"</span>)
</code><code id="line-211" aria-labelledby="211">          .<span data-symbols="#attr" data-i="152" >attr</span>(<span class="syn_string" >"id"</span>, <span class="syn_string" >"arrowhead"</span>)
</code><code id="line-212" aria-labelledby="212">          .<span data-symbols="#attr" data-i="153" >attr</span>(<span class="syn_string" >"viewBox"</span>, <span class="syn_string" >"0 0 10 10"</span>)
</code><code id="line-213" aria-labelledby="213">          .<span data-symbols="#attr" data-i="154" >attr</span>(<span class="syn_string" >"refX"</span>, <span data-symbols="#ARROW_WIDTH" data-i="155" >ARROW_WIDTH</span>)
</code><code id="line-214" aria-labelledby="214">          .<span data-symbols="#attr" data-i="156" >attr</span>(<span class="syn_string" >"refY"</span>, <span data-symbols="#ARROW_HEIGHT" data-i="157" >ARROW_HEIGHT</span>)
</code><code id="line-215" aria-labelledby="215">          .<span data-symbols="#attr" data-i="158" >attr</span>(<span class="syn_string" >"markerUnits"</span>, <span class="syn_string" >"strokeWidth"</span>)
</code><code id="line-216" aria-labelledby="216">          .<span data-symbols="#attr" data-i="159" >attr</span>(<span class="syn_string" >"markerWidth"</span>, <span data-symbols="#ARROW_WIDTH" data-i="160" >ARROW_WIDTH</span>)
</code><code id="line-217" aria-labelledby="217">          .<span data-symbols="#attr" data-i="161" >attr</span>(<span class="syn_string" >"markerHeight"</span>, <span data-symbols="#ARROW_HEIGHT" data-i="162" >ARROW_HEIGHT</span>)
</code><code id="line-218" aria-labelledby="218">          .<span data-symbols="#attr" data-i="163" >attr</span>(<span class="syn_string" >"orient"</span>, <span class="syn_string" >"auto"</span>)
</code><code id="line-219" aria-labelledby="219">          .<span data-symbols="#attr" data-i="164" >attr</span>(<span class="syn_string" >"style"</span>, <span class="syn_string" >"fill: "</span> + <span data-symbols="7380-28" >markerColor</span>)
</code><code id="line-220" aria-labelledby="220">          .<span data-symbols="#append" data-i="165" >append</span>(<span class="syn_string" >"svg:path"</span>)
</code><code id="line-221" aria-labelledby="221">          .<span data-symbols="#attr" data-i="166" >attr</span>(<span class="syn_string" >"d"</span>, <span class="syn_string" >"M 0 0 L 10 5 L 0 10 z"</span>);
</code><code id="line-222" aria-labelledby="222">      }
</code><code id="line-223" aria-labelledby="223">
</code><code id="line-224" aria-labelledby="224">      <span class="syn_comment" >// Reselect the previously selected audio node</span>
</code><code id="line-225" aria-labelledby="225">      <span class="syn_reserved" >const</span> <span data-symbols="7380-29" >currentNode</span> = <span data-symbols="#InspectorView" data-i="167" >InspectorView</span>.<span data-symbols="#getCurrentAudioNode,InspectorView#getCurrentAudioNode" data-i="168" >getCurrentAudioNode</span>();
</code><code id="line-226" aria-labelledby="226">      <span class="syn_reserved" >if</span> (<span data-symbols="7380-29" >currentNode</span>) {
</code><code id="line-227" aria-labelledby="227">        <span class="syn_reserved" >this</span>.<span data-symbols="#focusNode,ContextView#focusNode" data-i="169" >focusNode</span>(<span data-symbols="7380-29" >currentNode</span>.<span data-symbols="#id,currentNode#id" data-i="170" >id</span>);
</code><code id="line-228" aria-labelledby="228">      }
</code><code id="line-229" aria-labelledby="229">
</code><code id="line-230" aria-labelledby="230">      <span class="syn_comment" >// Fire an event upon completed rendering, with extra information</span>
</code><code id="line-231" aria-labelledby="231">      <span class="syn_comment" >// if in testing mode only.</span>
</code><code id="line-232" aria-labelledby="232">      <span class="syn_reserved" >let</span> <span data-symbols="7380-30" >info</span> = {};
</code><code id="line-233" aria-labelledby="233">      <span class="syn_reserved" >if</span> (<span data-symbols="#flags" data-i="171" >flags</span>.<span data-symbols="#testing,flags#testing" data-i="172" >testing</span>) {
</code><code id="line-234" aria-labelledby="234">        <span data-symbols="7380-30" >info</span> = <span data-symbols="#gAudioNodes" data-i="173" >gAudioNodes</span>.<span data-symbols="#getInfo,gAudioNodes#getInfo" data-i="174" >getInfo</span>();
</code><code id="line-235" aria-labelledby="235">      }
</code><code id="line-236" aria-labelledby="236">      <span data-symbols="#window" data-i="175" >window</span>.<span data-symbols="#emit,window#emit" data-i="176" >emit</span>(<span data-symbols="#EVENTS" data-i="177" >EVENTS</span>.<span data-symbols="#UI_GRAPH_RENDERED,EVENTS#UI_GRAPH_RENDERED" data-i="178" >UI_GRAPH_RENDERED</span>, <span data-symbols="7380-30" >info</span>.<span data-symbols="#nodes,info#nodes" data-i="179" >nodes</span>, <span data-symbols="7380-30" >info</span>.<span data-symbols="#edges,info#edges" data-i="180" >edges</span>, <span data-symbols="7380-30" >info</span>.<span data-symbols="#paramEdges,info#paramEdges" data-i="181" >paramEdges</span>);
</code><code id="line-237" aria-labelledby="237">    });
</code><code id="line-238" aria-labelledby="238">
</code><code id="line-239" aria-labelledby="239">    <span class="syn_reserved" >const</span> <span data-symbols="7380-31" >layout</span> = <span data-symbols="#dagreD3" data-i="182" >dagreD3</span>.<span data-symbols="#layout,dagreD3#layout" data-i="183" >layout</span>().<span data-symbols="#rankDir" data-i="184" >rankDir</span>(<span class="syn_string" >"LR"</span>);
</code><code id="line-240" aria-labelledby="240">    <span data-symbols="7380-9" >renderer</span>.<span data-symbols="#layout,renderer#layout" data-i="185" >layout</span>(<span data-symbols="7380-31" >layout</span>).<span data-symbols="#run" data-i="186" >run</span>(<span data-symbols="7380-8" >graph</span>, <span data-symbols="#d3" data-i="187" >d3</span>.<span data-symbols="#select,d3#select" data-i="188" >select</span>(<span class="syn_string" >"#graph-target"</span>));
</code><code id="line-241" aria-labelledby="241">
</code><code id="line-242" aria-labelledby="242">    <span class="syn_comment" >// Handle the sliding and zooming of the graph,</span>
</code><code id="line-243" aria-labelledby="243">    <span class="syn_comment" >// store as `this._zoomBinding` so we can unbind during destruction</span>
</code><code id="line-244" aria-labelledby="244">    <span class="syn_reserved" >if</span> (!<span class="syn_reserved" >this</span>.<span data-symbols="#_zoomBinding,ContextView#_zoomBinding" data-i="189" >_zoomBinding</span>) {
</code><code id="line-245" aria-labelledby="245">      <span class="syn_reserved" >this</span>.<span data-symbols="#_zoomBinding,ContextView#_zoomBinding" data-i="190" >_zoomBinding</span> = <span data-symbols="#d3" data-i="191" >d3</span>.<span data-symbols="#behavior,d3#behavior" data-i="192" >behavior</span>.<span data-symbols="#zoom" data-i="193" >zoom</span>().<span data-symbols="#on" data-i="194" >on</span>(<span class="syn_string" >"zoom"</span>, <span class="syn_reserved" >function</span>() {
</code><code id="line-246" aria-labelledby="246">        <span class="syn_reserved" >var</span> <span data-symbols="7380-32" >ev</span> = <span data-symbols="#d3" data-i="195" >d3</span>.<span data-symbols="#event,d3#event" data-i="196" >event</span>;
</code><code id="line-247" aria-labelledby="247">        <span data-symbols="#d3" data-i="197" >d3</span>.<span data-symbols="#select,d3#select" data-i="198" >select</span>(<span class="syn_string" >"#graph-target"</span>)
</code><code id="line-248" aria-labelledby="248">          .<span data-symbols="#attr" data-i="199" >attr</span>(<span class="syn_string" >"transform"</span>, <span class="syn_string" >"translate("</span> + <span data-symbols="7380-32" >ev</span>.<span data-symbols="#translate,ev#translate" data-i="200" >translate</span> + <span class="syn_string" >") scale("</span> + <span data-symbols="7380-32" >ev</span>.<span data-symbols="#scale,ev#scale" data-i="201" >scale</span> + <span class="syn_string" >")"</span>);
</code><code id="line-249" aria-labelledby="249">      });
</code><code id="line-250" aria-labelledby="250">      <span data-symbols="#d3" data-i="202" >d3</span>.<span data-symbols="#select,d3#select" data-i="203" >select</span>(<span class="syn_string" >"svg"</span>).<span data-symbols="#call" data-i="204" >call</span>(<span class="syn_reserved" >this</span>.<span data-symbols="#_zoomBinding,ContextView#_zoomBinding" data-i="205" >_zoomBinding</span>);
</code><code id="line-251" aria-labelledby="251">
</code><code id="line-252" aria-labelledby="252">      <span class="syn_comment" >// Set initial translation and scale -- this puts D3's awareness of</span>
</code><code id="line-253" aria-labelledby="253">      <span class="syn_comment" >// the graph in sync with what the user sees originally.</span>
</code><code id="line-254" aria-labelledby="254">      <span class="syn_reserved" >this</span>.<span data-symbols="#resetGraphTransform,ContextView#resetGraphTransform" data-i="206" >resetGraphTransform</span>();
</code><code id="line-255" aria-labelledby="255">    }
</code><code id="line-256" aria-labelledby="256">  },
</code><code id="line-257" aria-labelledby="257">
</code><code id="line-258" aria-labelledby="258">  <span class="syn_comment" >/**</span>
</code><code id="line-259" aria-labelledby="259"><span class="syn_comment" >   * Event handlers</span>
</code><code id="line-260" aria-labelledby="260"><span class="syn_comment" >   */</span>
</code><code id="line-261" aria-labelledby="261">
</code><code id="line-262" aria-labelledby="262">  <span class="syn_comment" >/**</span>
</code><code id="line-263" aria-labelledby="263"><span class="syn_comment" >   * Called once "start-context" is fired, indicating that there is an audio</span>
</code><code id="line-264" aria-labelledby="264"><span class="syn_comment" >   * context being created to view so render the graph.</span>
</code><code id="line-265" aria-labelledby="265"><span class="syn_comment" >   */</span>
</code><code id="line-266" aria-labelledby="266">  <span class="syn_def syn_def" data-symbols="#_onStartContext,ContextView#_onStartContext" data-i="207" >_onStartContext</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-267" aria-labelledby="267">    <span class="syn_reserved" >this</span>.<span data-symbols="#draw,ContextView#draw" data-i="208" >draw</span>();
</code><code id="line-268" aria-labelledby="268">  },
</code><code id="line-269" aria-labelledby="269">
</code><code id="line-270" aria-labelledby="270">  <span class="syn_comment" >/**</span>
</code><code id="line-271" aria-labelledby="271"><span class="syn_comment" >   * Called when `gAudioNodes` fires an event -- most events (listed</span>
</code><code id="line-272" aria-labelledby="272"><span class="syn_comment" >   * in GRAPH_REDRAW_EVENTS) qualify as a redraw event.</span>
</code><code id="line-273" aria-labelledby="273"><span class="syn_comment" >   */</span>
</code><code id="line-274" aria-labelledby="274">  <span class="syn_def syn_def" data-symbols="#_onEvent,ContextView#_onEvent" data-i="209" >_onEvent</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7380-33" >eventName</span>, ...<span data-symbols="7380-34" >args</span>) {
</code><code id="line-275" aria-labelledby="275">    <span class="syn_comment" >// If bypassing, just toggle the class on the SVG node</span>
</code><code id="line-276" aria-labelledby="276">    <span class="syn_comment" >// rather than rerendering everything</span>
</code><code id="line-277" aria-labelledby="277">    <span class="syn_reserved" >if</span> (<span data-symbols="7380-33" >eventName</span> === <span class="syn_string" >"bypass"</span>) {
</code><code id="line-278" aria-labelledby="278">      <span class="syn_reserved" >this</span>.<span data-symbols="#_bypassNode,ContextView#_bypassNode" data-i="210" >_bypassNode</span>.<span data-symbols="#apply" data-i="211" >apply</span>(<span class="syn_reserved" >this</span>, <span data-symbols="7380-34" >args</span>);
</code><code id="line-279" aria-labelledby="279">    }
</code><code id="line-280" aria-labelledby="280">    <span class="syn_reserved" >if</span> (~<span data-symbols="#GRAPH_REDRAW_EVENTS" data-i="212" >GRAPH_REDRAW_EVENTS</span>.<span data-symbols="#indexOf,GRAPH_REDRAW_EVENTS#indexOf" data-i="213" >indexOf</span>(<span data-symbols="7380-33" >eventName</span>)) {
</code><code id="line-281" aria-labelledby="281">      <span class="syn_reserved" >this</span>.<span data-symbols="#draw,ContextView#draw" data-i="214" >draw</span>();
</code><code id="line-282" aria-labelledby="282">    }
</code><code id="line-283" aria-labelledby="283">  },
</code><code id="line-284" aria-labelledby="284">
</code><code id="line-285" aria-labelledby="285">  <span class="syn_comment" >/**</span>
</code><code id="line-286" aria-labelledby="286"><span class="syn_comment" >   * Fired when the devtools theme changes.</span>
</code><code id="line-287" aria-labelledby="287"><span class="syn_comment" >   */</span>
</code><code id="line-288" aria-labelledby="288">  <span class="syn_def syn_def" data-symbols="#_onThemeChange,ContextView#_onThemeChange" data-i="215" >_onThemeChange</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7380-35" >theme</span>) {
</code><code id="line-289" aria-labelledby="289">    <span class="syn_reserved" >const</span> <span data-symbols="7380-36" >markerColor</span> = <span data-symbols="#MARKER_STYLING" data-i="216" >MARKER_STYLING</span>[<span data-symbols="7380-35" >theme</span>];
</code><code id="line-290" aria-labelledby="290">    <span class="syn_reserved" >const</span> <span data-symbols="7380-37" >marker</span> = $(<span class="syn_string" >"#arrowhead"</span>);
</code><code id="line-291" aria-labelledby="291">    <span class="syn_reserved" >if</span> (<span data-symbols="7380-37" >marker</span>) {
</code><code id="line-292" aria-labelledby="292">      <span data-symbols="7380-37" >marker</span>.<span data-symbols="#setAttribute,marker#setAttribute" data-i="217" >setAttribute</span>(<span class="syn_string" >"style"</span>, <span class="syn_string" >"fill: "</span> + <span data-symbols="7380-36" >markerColor</span>);
</code><code id="line-293" aria-labelledby="293">    }
</code><code id="line-294" aria-labelledby="294">  },
</code><code id="line-295" aria-labelledby="295">
</code><code id="line-296" aria-labelledby="296">  <span class="syn_comment" >/**</span>
</code><code id="line-297" aria-labelledby="297"><span class="syn_comment" >   * Fired when a click occurs in the graph.</span>
</code><code id="line-298" aria-labelledby="298"><span class="syn_comment" >   *</span>
</code><code id="line-299" aria-labelledby="299"><span class="syn_comment" >   * @param Event e</span>
</code><code id="line-300" aria-labelledby="300"><span class="syn_comment" >   *        Click event.</span>
</code><code id="line-301" aria-labelledby="301"><span class="syn_comment" >   */</span>
</code><code id="line-302" aria-labelledby="302">  <span class="syn_def syn_def" data-symbols="#_onGraphClick,ContextView#_onGraphClick" data-i="218" >_onGraphClick</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7380-38" >e</span>) {
</code><code id="line-303" aria-labelledby="303">    <span class="syn_reserved" >const</span> <span data-symbols="7380-39" >node</span> = <span data-symbols="#findGraphNodeParent" data-i="219" >findGraphNodeParent</span>(<span data-symbols="7380-38" >e</span>.<span data-symbols="#target,e#target" data-i="220" >target</span>);
</code><code id="line-304" aria-labelledby="304">    <span class="syn_comment" >// If node not found (clicking outside of an audio node in the graph),</span>
</code><code id="line-305" aria-labelledby="305">    <span class="syn_comment" >// then ignore this event</span>
</code><code id="line-306" aria-labelledby="306">    <span class="syn_reserved" >if</span> (!<span data-symbols="7380-39" >node</span>) {
</code><code id="line-307" aria-labelledby="307">      <span class="syn_reserved" >return</span>;
</code><code id="line-308" aria-labelledby="308">    }
</code><code id="line-309" aria-labelledby="309">
</code><code id="line-310" aria-labelledby="310">    <span class="syn_reserved" >const</span> <span data-symbols="7380-40" >id</span> = <span data-symbols="7380-39" >node</span>.<span data-symbols="#getAttribute,node#getAttribute" data-i="221" >getAttribute</span>(<span class="syn_string" >"data-id"</span>);
</code><code id="line-311" aria-labelledby="311">
</code><code id="line-312" aria-labelledby="312">    <span class="syn_reserved" >this</span>.<span data-symbols="#focusNode,ContextView#focusNode" data-i="222" >focusNode</span>(<span data-symbols="7380-40" >id</span>);
</code><code id="line-313" aria-labelledby="313">    <span data-symbols="#window" data-i="223" >window</span>.<span data-symbols="#emit,window#emit" data-i="224" >emit</span>(<span data-symbols="#EVENTS" data-i="225" >EVENTS</span>.<span data-symbols="#UI_SELECT_NODE,EVENTS#UI_SELECT_NODE" data-i="226" >UI_SELECT_NODE</span>, <span data-symbols="7380-40" >id</span>);
</code><code id="line-314" aria-labelledby="314">  },
</code><code id="line-315" aria-labelledby="315">};
</code></pre>      </td>
    </tr>
  </tbody>
</table>
<script>var ANALYSIS_DATA = [[[],[{"pretty":"property debounce","sym":"#debounce"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property flags","sym":"#flags"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property GRAPH_DEFAULTS","sym":"#GRAPH_DEFAULTS"}]],[[],[{"pretty":"property translate","sym":"#translate"},{"pretty":"property GRAPH_DEFAULTS.translate","sym":"GRAPH_DEFAULTS#translate"}]],[[],[{"pretty":"property scale","sym":"#scale"},{"pretty":"property GRAPH_DEFAULTS.scale","sym":"GRAPH_DEFAULTS#scale"}]],[[],[{"pretty":"property ARROW_HEIGHT","sym":"#ARROW_HEIGHT"}]],[[],[{"pretty":"property ARROW_WIDTH","sym":"#ARROW_WIDTH"}]],[[],[{"pretty":"property MARKER_STYLING","sym":"#MARKER_STYLING"}]],[[],[{"pretty":"property light","sym":"#light"},{"pretty":"property MARKER_STYLING.light","sym":"MARKER_STYLING#light"}]],[[],[{"pretty":"property dark","sym":"#dark"},{"pretty":"property MARKER_STYLING.dark","sym":"MARKER_STYLING#dark"}]],[[],[{"pretty":"property Object","sym":"#Object"}]],[[],[{"pretty":"property defineProperty","sym":"#defineProperty"},{"pretty":"property Object.defineProperty","sym":"Object#defineProperty"}]],[[],[{"pretty":"property value","sym":"#value"}]],[[{"pretty":"MARKER_STYLING","sym":"#MARKER_STYLING"}],[{"pretty":"property MARKER_STYLING","sym":"#MARKER_STYLING"}]],[[],[{"pretty":"property enumerable","sym":"#enumerable"}]],[[],[{"pretty":"property writable","sym":"#writable"}]],[[],[{"pretty":"property GRAPH_DEBOUNCE_TIMER","sym":"#GRAPH_DEBOUNCE_TIMER"}]],[[],[{"pretty":"property GRAPH_REDRAW_EVENTS","sym":"#GRAPH_REDRAW_EVENTS"}]],[[],[{"pretty":"property ContextView","sym":"#ContextView"}]],[[],[{"pretty":"property initialize","sym":"#initialize"},{"pretty":"property ContextView.initialize","sym":"ContextView#initialize"}]],[[{"pretty":"ContextView._onGraphClick","sym":"ContextView#_onGraphClick"}],[{"pretty":"property _onGraphClick","sym":"#_onGraphClick"},{"pretty":"property ContextView._onGraphClick","sym":"ContextView#_onGraphClick"}]],[[{"pretty":"_onGraphClick","sym":"#_onGraphClick"}],[{"pretty":"property _onGraphClick","sym":"#_onGraphClick"},{"pretty":"property _onGraphClick._onGraphClick","sym":"_onGraphClick#_onGraphClick"}]],[[],[{"pretty":"property bind","sym":"#bind"}]],[[{"pretty":"ContextView._onThemeChange","sym":"ContextView#_onThemeChange"}],[{"pretty":"property _onThemeChange","sym":"#_onThemeChange"},{"pretty":"property ContextView._onThemeChange","sym":"ContextView#_onThemeChange"}]],[[],[{"pretty":"property _onThemeChange","sym":"#_onThemeChange"},{"pretty":"property _onThemeChange._onThemeChange","sym":"_onThemeChange#_onThemeChange"}]],[[],[{"pretty":"property bind","sym":"#bind"}]],[[{"pretty":"ContextView._onStartContext","sym":"ContextView#_onStartContext"}],[{"pretty":"property _onStartContext","sym":"#_onStartContext"},{"pretty":"property ContextView._onStartContext","sym":"ContextView#_onStartContext"}]],[[],[{"pretty":"property _onStartContext","sym":"#_onStartContext"},{"pretty":"property _onStartContext._onStartContext","sym":"_onStartContext#_onStartContext"}]],[[],[{"pretty":"property bind","sym":"#bind"}]],[[{"pretty":"ContextView._onEvent","sym":"ContextView#_onEvent"}],[{"pretty":"property _onEvent","sym":"#_onEvent"},{"pretty":"property ContextView._onEvent","sym":"ContextView#_onEvent"}]],[[{"pretty":"_onEvent","sym":"#_onEvent"}],[{"pretty":"property _onEvent","sym":"#_onEvent"},{"pretty":"property _onEvent._onEvent","sym":"_onEvent#_onEvent"}]],[[],[{"pretty":"property bind","sym":"#bind"}]],[[{"pretty":"ContextView.draw","sym":"ContextView#draw"}],[{"pretty":"property draw","sym":"#draw"},{"pretty":"property ContextView.draw","sym":"ContextView#draw"}]],[[],[{"pretty":"property debounce","sym":"#debounce"}]],[[],[{"pretty":"property draw","sym":"#draw"},{"pretty":"property draw.draw","sym":"draw#draw"}]],[[],[{"pretty":"property bind","sym":"#bind"}]],[[{"pretty":"GRAPH_DEBOUNCE_TIMER","sym":"#GRAPH_DEBOUNCE_TIMER"}],[{"pretty":"property GRAPH_DEBOUNCE_TIMER","sym":"#GRAPH_DEBOUNCE_TIMER"}]],[[],[{"pretty":"property addEventListener","sym":"#addEventListener"}]],[[{"pretty":"ContextView._onGraphClick","sym":"ContextView#_onGraphClick"}],[{"pretty":"property _onGraphClick","sym":"#_onGraphClick"},{"pretty":"property ContextView._onGraphClick","sym":"ContextView#_onGraphClick"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property on","sym":"#on"},{"pretty":"property window.on","sym":"window#on"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[{"pretty":"EVENTS.THEME_CHANGE","sym":"EVENTS#THEME_CHANGE"}],[{"pretty":"property THEME_CHANGE","sym":"#THEME_CHANGE"},{"pretty":"property EVENTS.THEME_CHANGE","sym":"EVENTS#THEME_CHANGE"}]],[[{"pretty":"ContextView._onThemeChange","sym":"ContextView#_onThemeChange"}],[{"pretty":"property _onThemeChange","sym":"#_onThemeChange"},{"pretty":"property ContextView._onThemeChange","sym":"ContextView#_onThemeChange"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property on","sym":"#on"},{"pretty":"property window.on","sym":"window#on"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[{"pretty":"EVENTS.START_CONTEXT","sym":"EVENTS#START_CONTEXT"}],[{"pretty":"property START_CONTEXT","sym":"#START_CONTEXT"},{"pretty":"property EVENTS.START_CONTEXT","sym":"EVENTS#START_CONTEXT"}]],[[{"pretty":"ContextView._onStartContext","sym":"ContextView#_onStartContext"}],[{"pretty":"property _onStartContext","sym":"#_onStartContext"},{"pretty":"property ContextView._onStartContext","sym":"ContextView#_onStartContext"}]],[[{"pretty":"gAudioNodes","sym":"#gAudioNodes"}],[{"pretty":"property gAudioNodes","sym":"#gAudioNodes"}]],[[],[{"pretty":"property on","sym":"#on"},{"pretty":"property gAudioNodes.on","sym":"gAudioNodes#on"}]],[[{"pretty":"ContextView._onEvent","sym":"ContextView#_onEvent"}],[{"pretty":"property _onEvent","sym":"#_onEvent"},{"pretty":"property ContextView._onEvent","sym":"ContextView#_onEvent"}]],[[],[{"pretty":"property destroy","sym":"#destroy"},{"pretty":"property ContextView.destroy","sym":"ContextView#destroy"}]],[[],[{"pretty":"property _zoomBinding","sym":"#_zoomBinding"},{"pretty":"property ContextView._zoomBinding","sym":"ContextView#_zoomBinding"}]],[[],[{"pretty":"property _zoomBinding","sym":"#_zoomBinding"},{"pretty":"property ContextView._zoomBinding","sym":"ContextView#_zoomBinding"}]],[[],[{"pretty":"property on","sym":"#on"}]],[[],[{"pretty":"property removeEventListener","sym":"#removeEventListener"}]],[[{"pretty":"ContextView._onGraphClick","sym":"ContextView#_onGraphClick"}],[{"pretty":"property _onGraphClick","sym":"#_onGraphClick"},{"pretty":"property ContextView._onGraphClick","sym":"ContextView#_onGraphClick"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property off","sym":"#off"},{"pretty":"property window.off","sym":"window#off"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[{"pretty":"EVENTS.THEME_CHANGE","sym":"EVENTS#THEME_CHANGE"}],[{"pretty":"property THEME_CHANGE","sym":"#THEME_CHANGE"},{"pretty":"property EVENTS.THEME_CHANGE","sym":"EVENTS#THEME_CHANGE"}]],[[{"pretty":"ContextView._onThemeChange","sym":"ContextView#_onThemeChange"}],[{"pretty":"property _onThemeChange","sym":"#_onThemeChange"},{"pretty":"property ContextView._onThemeChange","sym":"ContextView#_onThemeChange"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property off","sym":"#off"},{"pretty":"property window.off","sym":"window#off"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[{"pretty":"EVENTS.START_CONTEXT","sym":"EVENTS#START_CONTEXT"}],[{"pretty":"property START_CONTEXT","sym":"#START_CONTEXT"},{"pretty":"property EVENTS.START_CONTEXT","sym":"EVENTS#START_CONTEXT"}]],[[{"pretty":"ContextView._onStartContext","sym":"ContextView#_onStartContext"}],[{"pretty":"property _onStartContext","sym":"#_onStartContext"},{"pretty":"property ContextView._onStartContext","sym":"ContextView#_onStartContext"}]],[[{"pretty":"gAudioNodes","sym":"#gAudioNodes"}],[{"pretty":"property gAudioNodes","sym":"#gAudioNodes"}]],[[],[{"pretty":"property off","sym":"#off"},{"pretty":"property gAudioNodes.off","sym":"gAudioNodes#off"}]],[[{"pretty":"ContextView._onEvent","sym":"ContextView#_onEvent"}],[{"pretty":"property _onEvent","sym":"#_onEvent"},{"pretty":"property ContextView._onEvent","sym":"ContextView#_onEvent"}]],[[],[{"pretty":"property resetUI","sym":"#resetUI"},{"pretty":"property ContextView.resetUI","sym":"ContextView#resetUI"}]],[[{"pretty":"ContextView.clearGraph","sym":"ContextView#clearGraph"}],[{"pretty":"property clearGraph","sym":"#clearGraph"},{"pretty":"property ContextView.clearGraph","sym":"ContextView#clearGraph"}]],[[{"pretty":"ContextView.resetGraphTransform","sym":"ContextView#resetGraphTransform"}],[{"pretty":"property resetGraphTransform","sym":"#resetGraphTransform"},{"pretty":"property ContextView.resetGraphTransform","sym":"ContextView#resetGraphTransform"}]],[[],[{"pretty":"property clearGraph","sym":"#clearGraph"},{"pretty":"property ContextView.clearGraph","sym":"ContextView#clearGraph"}]],[[],[{"pretty":"property innerHTML","sym":"#innerHTML"}]],[[],[{"pretty":"property resetGraphTransform","sym":"#resetGraphTransform"},{"pretty":"property ContextView.resetGraphTransform","sym":"ContextView#resetGraphTransform"}]],[[],[{"pretty":"property _zoomBinding","sym":"#_zoomBinding"},{"pretty":"property ContextView._zoomBinding","sym":"ContextView#_zoomBinding"}]],[[],[{"pretty":"property GRAPH_DEFAULTS","sym":"#GRAPH_DEFAULTS"}]],[[],[{"pretty":"property _zoomBinding","sym":"#_zoomBinding"},{"pretty":"property ContextView._zoomBinding","sym":"ContextView#_zoomBinding"}]],[[],[{"pretty":"property scale","sym":"#scale"}]],[[],[{"pretty":"property _zoomBinding","sym":"#_zoomBinding"},{"pretty":"property ContextView._zoomBinding","sym":"ContextView#_zoomBinding"}]],[[],[{"pretty":"property translate","sym":"#translate"}]],[[],[{"pretty":"property d3","sym":"#d3"}]],[[],[{"pretty":"property select","sym":"#select"},{"pretty":"property d3.select","sym":"d3#select"}]],[[],[{"pretty":"property attr","sym":"#attr"}]],[[],[{"pretty":"property getCurrentScale","sym":"#getCurrentScale"},{"pretty":"property ContextView.getCurrentScale","sym":"ContextView#getCurrentScale"}]],[[],[{"pretty":"property _zoomBinding","sym":"#_zoomBinding"},{"pretty":"property ContextView._zoomBinding","sym":"ContextView#_zoomBinding"}]],[[],[{"pretty":"property _zoomBinding","sym":"#_zoomBinding"},{"pretty":"property ContextView._zoomBinding","sym":"ContextView#_zoomBinding"}]],[[],[{"pretty":"property scale","sym":"#scale"}]],[[],[{"pretty":"property getCurrentTranslation","sym":"#getCurrentTranslation"},{"pretty":"property ContextView.getCurrentTranslation","sym":"ContextView#getCurrentTranslation"}]],[[],[{"pretty":"property _zoomBinding","sym":"#_zoomBinding"},{"pretty":"property ContextView._zoomBinding","sym":"ContextView#_zoomBinding"}]],[[],[{"pretty":"property _zoomBinding","sym":"#_zoomBinding"},{"pretty":"property ContextView._zoomBinding","sym":"ContextView#_zoomBinding"}]],[[],[{"pretty":"property translate","sym":"#translate"}]],[[],[{"pretty":"property focusNode","sym":"#focusNode"},{"pretty":"property ContextView.focusNode","sym":"ContextView#focusNode"}]],[[],[{"pretty":"property Array","sym":"#Array"}]],[[],[{"pretty":"property forEach","sym":"#forEach"},{"pretty":"property Array.forEach","sym":"Array#forEach"}]],[[],[{"pretty":"property classList","sym":"#classList"},{"pretty":"property $node.classList","sym":"$node#classList"}]],[[],[{"pretty":"property remove","sym":"#remove"}]],[[{"pretty":"ContextView._getNodeByID","sym":"ContextView#_getNodeByID"}],[{"pretty":"property _getNodeByID","sym":"#_getNodeByID"},{"pretty":"property ContextView._getNodeByID","sym":"ContextView#_getNodeByID"}]],[[],[{"pretty":"property classList","sym":"#classList"}]],[[],[{"pretty":"property add","sym":"#add"}]],[[],[{"pretty":"property _getNodeByID","sym":"#_getNodeByID"},{"pretty":"property ContextView._getNodeByID","sym":"ContextView#_getNodeByID"}]],[[],[{"pretty":"property _bypassNode","sym":"#_bypassNode"},{"pretty":"property ContextView._bypassNode","sym":"ContextView#_bypassNode"}]],[[{"pretty":"ContextView._getNodeByID","sym":"ContextView#_getNodeByID"}],[{"pretty":"property _getNodeByID","sym":"#_getNodeByID"},{"pretty":"property ContextView._getNodeByID","sym":"ContextView#_getNodeByID"}]],[[],[{"pretty":"property id","sym":"#id"},{"pretty":"property node.id","sym":"node#id"}]],[[],[{"pretty":"property classList","sym":"#classList"},{"pretty":"property el.classList","sym":"el#classList"}]],[[],[{"pretty":"property draw","sym":"#draw"},{"pretty":"property ContextView.draw","sym":"ContextView#draw"}]],[[{"pretty":"ContextView.clearGraph","sym":"ContextView#clearGraph"}],[{"pretty":"property clearGraph","sym":"#clearGraph"},{"pretty":"property ContextView.clearGraph","sym":"ContextView#clearGraph"}]],[[{"pretty":"dagreD3","sym":"#dagreD3"}],[{"pretty":"property dagreD3","sym":"#dagreD3"}]],[[{"pretty":"Digraph","sym":"#Digraph"}],[{"pretty":"property Digraph","sym":"#Digraph"},{"pretty":"property dagreD3.Digraph","sym":"dagreD3#Digraph"}]],[[{"pretty":"dagreD3","sym":"#dagreD3"}],[{"pretty":"property dagreD3","sym":"#dagreD3"}]],[[{"pretty":"Renderer","sym":"#Renderer"}],[{"pretty":"property Renderer","sym":"#Renderer"},{"pretty":"property dagreD3.Renderer","sym":"dagreD3#Renderer"}]],[[{"pretty":"gAudioNodes","sym":"#gAudioNodes"}],[{"pretty":"property gAudioNodes","sym":"#gAudioNodes"}]],[[{"pretty":"populateGraph","sym":"#populateGraph"}],[{"pretty":"property populateGraph","sym":"#populateGraph"},{"pretty":"property gAudioNodes.populateGraph","sym":"gAudioNodes#populateGraph"}]],[[],[{"pretty":"property drawNodes","sym":"#drawNodes"},{"pretty":"property renderer.drawNodes","sym":"renderer#drawNodes"}]],[[],[{"pretty":"property drawNodes","sym":"#drawNodes"},{"pretty":"property renderer.drawNodes","sym":"renderer#drawNodes"}]],[[],[{"pretty":"property each","sym":"#each"},{"pretty":"property svgNodes.each","sym":"svgNodes#each"}]],[[],[{"pretty":"property node","sym":"#node"},{"pretty":"property graph.node","sym":"graph#node"}]],[[],[{"pretty":"property type","sym":"#type"},{"pretty":"property node.type","sym":"node#type"}]],[[],[{"pretty":"property bypassed","sym":"#bypassed"},{"pretty":"property node.bypassed","sym":"node#bypassed"}]],[[],[{"pretty":"property setAttribute","sym":"#setAttribute"},{"pretty":"property ContextView.setAttribute","sym":"ContextView#setAttribute"}]],[[],[{"pretty":"property setAttribute","sym":"#setAttribute"},{"pretty":"property ContextView.setAttribute","sym":"ContextView#setAttribute"}]],[[],[{"pretty":"property id","sym":"#id"},{"pretty":"property node.id","sym":"node#id"}]],[[],[{"pretty":"property setAttribute","sym":"#setAttribute"},{"pretty":"property ContextView.setAttribute","sym":"ContextView#setAttribute"}]],[[],[{"pretty":"property type","sym":"#type"},{"pretty":"property node.type","sym":"node#type"}]],[[],[{"pretty":"property drawEdgePaths","sym":"#drawEdgePaths"},{"pretty":"property renderer.drawEdgePaths","sym":"renderer#drawEdgePaths"}]],[[],[{"pretty":"property drawEdgePaths","sym":"#drawEdgePaths"},{"pretty":"property renderer.drawEdgePaths","sym":"renderer#drawEdgePaths"}]],[[],[{"pretty":"property each","sym":"#each"},{"pretty":"property svgEdges.each","sym":"svgEdges#each"}]],[[],[{"pretty":"property edge","sym":"#edge"},{"pretty":"property graph.edge","sym":"graph#edge"}]],[[],[{"pretty":"property param","sym":"#param"},{"pretty":"property edge.param","sym":"edge#param"}]],[[],[{"pretty":"property param","sym":"#param"},{"pretty":"property edge.param","sym":"edge#param"}]],[[],[{"pretty":"property setAttribute","sym":"#setAttribute"},{"pretty":"property ContextView.setAttribute","sym":"ContextView#setAttribute"}]],[[],[{"pretty":"property source","sym":"#source"},{"pretty":"property edge.source","sym":"edge#source"}]],[[],[{"pretty":"property setAttribute","sym":"#setAttribute"},{"pretty":"property ContextView.setAttribute","sym":"ContextView#setAttribute"}]],[[],[{"pretty":"property target","sym":"#target"},{"pretty":"property edge.target","sym":"edge#target"}]],[[],[{"pretty":"property setAttribute","sym":"#setAttribute"},{"pretty":"property ContextView.setAttribute","sym":"ContextView#setAttribute"}]],[[],[{"pretty":"property param","sym":"#param"},{"pretty":"property edge.param","sym":"edge#param"}]],[[],[{"pretty":"property param","sym":"#param"},{"pretty":"property edge.param","sym":"edge#param"}]],[[],[{"pretty":"property setAttribute","sym":"#setAttribute"},{"pretty":"property ContextView.setAttribute","sym":"ContextView#setAttribute"}]],[[],[{"pretty":"property postRender","sym":"#postRender"},{"pretty":"property renderer.postRender","sym":"renderer#postRender"}]],[[],[{"pretty":"property Services","sym":"#Services"}]],[[],[{"pretty":"property prefs","sym":"#prefs"},{"pretty":"property Services.prefs","sym":"Services#prefs"}]],[[],[{"pretty":"property getCharPref","sym":"#getCharPref"}]],[[{"pretty":"MARKER_STYLING","sym":"#MARKER_STYLING"}],[{"pretty":"property MARKER_STYLING","sym":"#MARKER_STYLING"}]],[[],[{"pretty":"property isDirected","sym":"#isDirected"},{"pretty":"property graph.isDirected","sym":"graph#isDirected"}]],[[],[{"pretty":"property select","sym":"#select"},{"pretty":"property root.select","sym":"root#select"}]],[[],[{"pretty":"property empty","sym":"#empty"}]],[[],[{"pretty":"property append","sym":"#append"},{"pretty":"property root.append","sym":"root#append"}]],[[],[{"pretty":"property append","sym":"#append"}]],[[],[{"pretty":"property attr","sym":"#attr"}]],[[],[{"pretty":"property attr","sym":"#attr"}]],[[],[{"pretty":"property attr","sym":"#attr"}]],[[],[{"pretty":"property ARROW_WIDTH","sym":"#ARROW_WIDTH"}]],[[],[{"pretty":"property attr","sym":"#attr"}]],[[{"pretty":"ARROW_HEIGHT","sym":"#ARROW_HEIGHT"}],[{"pretty":"property ARROW_HEIGHT","sym":"#ARROW_HEIGHT"}]],[[],[{"pretty":"property attr","sym":"#attr"}]],[[],[{"pretty":"property attr","sym":"#attr"}]],[[],[{"pretty":"property ARROW_WIDTH","sym":"#ARROW_WIDTH"}]],[[],[{"pretty":"property attr","sym":"#attr"}]],[[{"pretty":"ARROW_HEIGHT","sym":"#ARROW_HEIGHT"}],[{"pretty":"property ARROW_HEIGHT","sym":"#ARROW_HEIGHT"}]],[[],[{"pretty":"property attr","sym":"#attr"}]],[[],[{"pretty":"property attr","sym":"#attr"}]],[[],[{"pretty":"property append","sym":"#append"}]],[[],[{"pretty":"property attr","sym":"#attr"}]],[[{"pretty":"InspectorView","sym":"#InspectorView"}],[{"pretty":"property InspectorView","sym":"#InspectorView"}]],[[{"pretty":"InspectorView.getCurrentAudioNode","sym":"InspectorView#getCurrentAudioNode"}],[{"pretty":"property getCurrentAudioNode","sym":"#getCurrentAudioNode"},{"pretty":"property InspectorView.getCurrentAudioNode","sym":"InspectorView#getCurrentAudioNode"}]],[[{"pretty":"ContextView.focusNode","sym":"ContextView#focusNode"}],[{"pretty":"property focusNode","sym":"#focusNode"},{"pretty":"property ContextView.focusNode","sym":"ContextView#focusNode"}]],[[],[{"pretty":"property id","sym":"#id"},{"pretty":"property currentNode.id","sym":"currentNode#id"}]],[[],[{"pretty":"property flags","sym":"#flags"}]],[[],[{"pretty":"property testing","sym":"#testing"},{"pretty":"property flags.testing","sym":"flags#testing"}]],[[{"pretty":"gAudioNodes","sym":"#gAudioNodes"}],[{"pretty":"property gAudioNodes","sym":"#gAudioNodes"}]],[[],[{"pretty":"property getInfo","sym":"#getInfo"},{"pretty":"property gAudioNodes.getInfo","sym":"gAudioNodes#getInfo"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property emit","sym":"#emit"},{"pretty":"property window.emit","sym":"window#emit"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[{"pretty":"EVENTS.UI_GRAPH_RENDERED","sym":"EVENTS#UI_GRAPH_RENDERED"}],[{"pretty":"property UI_GRAPH_RENDERED","sym":"#UI_GRAPH_RENDERED"},{"pretty":"property EVENTS.UI_GRAPH_RENDERED","sym":"EVENTS#UI_GRAPH_RENDERED"}]],[[{"pretty":"info.nodes","sym":"info#nodes"}],[{"pretty":"property nodes","sym":"#nodes"},{"pretty":"property info.nodes","sym":"info#nodes"}]],[[{"pretty":"info.edges","sym":"info#edges"}],[{"pretty":"property edges","sym":"#edges"},{"pretty":"property info.edges","sym":"info#edges"}]],[[{"pretty":"info.paramEdges","sym":"info#paramEdges"}],[{"pretty":"property paramEdges","sym":"#paramEdges"},{"pretty":"property info.paramEdges","sym":"info#paramEdges"}]],[[{"pretty":"dagreD3","sym":"#dagreD3"}],[{"pretty":"property dagreD3","sym":"#dagreD3"}]],[[],[{"pretty":"property layout","sym":"#layout"},{"pretty":"property dagreD3.layout","sym":"dagreD3#layout"}]],[[],[{"pretty":"property rankDir","sym":"#rankDir"}]],[[],[{"pretty":"property layout","sym":"#layout"},{"pretty":"property renderer.layout","sym":"renderer#layout"}]],[[],[{"pretty":"property run","sym":"#run"}]],[[],[{"pretty":"property d3","sym":"#d3"}]],[[],[{"pretty":"property select","sym":"#select"},{"pretty":"property d3.select","sym":"d3#select"}]],[[],[{"pretty":"property _zoomBinding","sym":"#_zoomBinding"},{"pretty":"property ContextView._zoomBinding","sym":"ContextView#_zoomBinding"}]],[[],[{"pretty":"property _zoomBinding","sym":"#_zoomBinding"},{"pretty":"property ContextView._zoomBinding","sym":"ContextView#_zoomBinding"}]],[[],[{"pretty":"property d3","sym":"#d3"}]],[[],[{"pretty":"property behavior","sym":"#behavior"},{"pretty":"property d3.behavior","sym":"d3#behavior"}]],[[],[{"pretty":"property zoom","sym":"#zoom"}]],[[],[{"pretty":"property on","sym":"#on"}]],[[],[{"pretty":"property d3","sym":"#d3"}]],[[],[{"pretty":"property event","sym":"#event"},{"pretty":"property d3.event","sym":"d3#event"}]],[[],[{"pretty":"property d3","sym":"#d3"}]],[[],[{"pretty":"property select","sym":"#select"},{"pretty":"property d3.select","sym":"d3#select"}]],[[],[{"pretty":"property attr","sym":"#attr"}]],[[],[{"pretty":"property translate","sym":"#translate"},{"pretty":"property ev.translate","sym":"ev#translate"}]],[[],[{"pretty":"property scale","sym":"#scale"},{"pretty":"property ev.scale","sym":"ev#scale"}]],[[],[{"pretty":"property d3","sym":"#d3"}]],[[],[{"pretty":"property select","sym":"#select"},{"pretty":"property d3.select","sym":"d3#select"}]],[[],[{"pretty":"property call","sym":"#call"}]],[[],[{"pretty":"property _zoomBinding","sym":"#_zoomBinding"},{"pretty":"property ContextView._zoomBinding","sym":"ContextView#_zoomBinding"}]],[[{"pretty":"ContextView.resetGraphTransform","sym":"ContextView#resetGraphTransform"}],[{"pretty":"property resetGraphTransform","sym":"#resetGraphTransform"},{"pretty":"property ContextView.resetGraphTransform","sym":"ContextView#resetGraphTransform"}]],[[],[{"pretty":"property _onStartContext","sym":"#_onStartContext"},{"pretty":"property ContextView._onStartContext","sym":"ContextView#_onStartContext"}]],[[{"pretty":"ContextView.draw","sym":"ContextView#draw"}],[{"pretty":"property draw","sym":"#draw"},{"pretty":"property ContextView.draw","sym":"ContextView#draw"}]],[[],[{"pretty":"property _onEvent","sym":"#_onEvent"},{"pretty":"property ContextView._onEvent","sym":"ContextView#_onEvent"}]],[[{"pretty":"ContextView._bypassNode","sym":"ContextView#_bypassNode"}],[{"pretty":"property _bypassNode","sym":"#_bypassNode"},{"pretty":"property ContextView._bypassNode","sym":"ContextView#_bypassNode"}]],[[],[{"pretty":"property apply","sym":"#apply"}]],[[{"pretty":"GRAPH_REDRAW_EVENTS","sym":"#GRAPH_REDRAW_EVENTS"}],[{"pretty":"property GRAPH_REDRAW_EVENTS","sym":"#GRAPH_REDRAW_EVENTS"}]],[[],[{"pretty":"property indexOf","sym":"#indexOf"},{"pretty":"property GRAPH_REDRAW_EVENTS.indexOf","sym":"GRAPH_REDRAW_EVENTS#indexOf"}]],[[{"pretty":"ContextView.draw","sym":"ContextView#draw"}],[{"pretty":"property draw","sym":"#draw"},{"pretty":"property ContextView.draw","sym":"ContextView#draw"}]],[[],[{"pretty":"property _onThemeChange","sym":"#_onThemeChange"},{"pretty":"property ContextView._onThemeChange","sym":"ContextView#_onThemeChange"}]],[[{"pretty":"MARKER_STYLING","sym":"#MARKER_STYLING"}],[{"pretty":"property MARKER_STYLING","sym":"#MARKER_STYLING"}]],[[],[{"pretty":"property setAttribute","sym":"#setAttribute"},{"pretty":"property marker.setAttribute","sym":"marker#setAttribute"}]],[[],[{"pretty":"property _onGraphClick","sym":"#_onGraphClick"},{"pretty":"property ContextView._onGraphClick","sym":"ContextView#_onGraphClick"}]],[[{"pretty":"findGraphNodeParent","sym":"#findGraphNodeParent"}],[{"pretty":"property findGraphNodeParent","sym":"#findGraphNodeParent"}]],[[{"pretty":"e.target","sym":"e#target"}],[{"pretty":"property target","sym":"#target"},{"pretty":"property e.target","sym":"e#target"}]],[[],[{"pretty":"property getAttribute","sym":"#getAttribute"},{"pretty":"property node.getAttribute","sym":"node#getAttribute"}]],[[{"pretty":"ContextView.focusNode","sym":"ContextView#focusNode"}],[{"pretty":"property focusNode","sym":"#focusNode"},{"pretty":"property ContextView.focusNode","sym":"ContextView#focusNode"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property emit","sym":"#emit"},{"pretty":"property window.emit","sym":"window#emit"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[{"pretty":"EVENTS.UI_SELECT_NODE","sym":"EVENTS#UI_SELECT_NODE"}],[{"pretty":"property UI_SELECT_NODE","sym":"#UI_SELECT_NODE"},{"pretty":"property EVENTS.UI_SELECT_NODE","sym":"EVENTS#UI_SELECT_NODE"}]]];</script>
    </div>
  <div id="foot" class="footer">
    This page was generated by Searchfox <span class="pretty-date" data-datetime="Wed, 13 Feb 2019 15:28:43 +0000"></span>.
  </div>
  <span id="data" data-root="/" data-search="/mozilla-central/search" data-tree="mozilla-central" data-path="devtools/client/webaudioeditor/views/context.js"></span>
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
