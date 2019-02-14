<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8" />
  <link href="/static/icons/search.png" rel="shortcut icon">
  <title>controller.js - mozsearch</title>
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
<div class="breadcrumbs"><a href="/mozilla-central/source/">mozilla-central</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools">devtools</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client">client</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor">webaudioeditor</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/controller.js">controller.js</a></div>
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
  <a href="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/controller.js" title="Permalink" class="icon" data-update-link="true" data-link="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/controller.js">Permalink <span class="accel">Y</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/log/tip/devtools/client/webaudioeditor/controller.js" title="Log" class="icon">Log <span class="accel">L</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/raw-file/tip/devtools/client/webaudioeditor/controller.js" title="Raw" class="icon">Raw <span class="accel">R</span></a>
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
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#1" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l2" class="line-number">2
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#2" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l3" class="line-number">3
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#3" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l4" class="line-number">4
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#4" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l5" class="line-number">5
<div class="blame-strip c2" data-blame="f504948b281f5e623e091d9db1f55dde4a07ca17#%#5" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l6" class="line-number">6
<div class="blame-strip c2" data-blame="f504948b281f5e623e091d9db1f55dde4a07ca17#%#6" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l7" class="line-number">7
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#5" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l8" class="line-number">8
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#6" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l9" class="line-number">9
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#7" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l10" class="line-number">10
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#8" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l11" class="line-number">11
<div class="blame-strip c2" data-blame="64db2267cf9899840b44ce4116c2dd94aa0c3d8e#browser/devtools/webaudioeditor/controller.js#9" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l12" class="line-number">12
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#10" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l13" class="line-number">13
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#11" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l14" class="line-number">14
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#12" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l15" class="line-number">15
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#13" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l16" class="line-number">16
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#14" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l17" class="line-number">17
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#15" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l18" class="line-number">18
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#16" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l19" class="line-number">19
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#17" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l20" class="line-number">20
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/controller.js#18" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l21" class="line-number">21
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/controller.js#19" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l22" class="line-number">22
<div class="blame-strip c1" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#22" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l23" class="line-number">23
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#19" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l24" class="line-number">24
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#20" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l25" class="line-number">25
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#21" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l26" class="line-number">26
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#22" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l27" class="line-number">27
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#23" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l28" class="line-number">28
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#24" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l29" class="line-number">29
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#25" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l30" class="line-number">30
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#26" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l31" class="line-number">31
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l32" class="line-number">32
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#28" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l33" class="line-number">33
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#29" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l34" class="line-number">34
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/controller.js#32" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l35" class="line-number">35
<div class="blame-strip c2" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#35" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l36" class="line-number">36
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#30" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l37" class="line-number">37
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#31" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l38" class="line-number">38
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#32" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l39" class="line-number">39
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#33" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l40" class="line-number">40
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#34" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l41" class="line-number">41
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#35" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l42" class="line-number">42
<div class="blame-strip c2" data-blame="64db2267cf9899840b44ce4116c2dd94aa0c3d8e#browser/devtools/webaudioeditor/controller.js#40" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l43" class="line-number">43
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#37" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l44" class="line-number">44
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#38" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l45" class="line-number">45
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#39" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l46" class="line-number">46
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#46" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l47" class="line-number">47
<div class="blame-strip c1" data-blame="9f6614f23dc6ce9f2c5c94743a375a04a1ba3015#%#47" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l48" class="line-number">48
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#43" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l49" class="line-number">49
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#44" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l50" class="line-number">50
<div class="blame-strip c1" data-blame="9f6614f23dc6ce9f2c5c94743a375a04a1ba3015#%#50" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l51" class="line-number">51
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#47" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l52" class="line-number">52
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#48" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l53" class="line-number">53
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#49" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l54" class="line-number">54
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#50" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l55" class="line-number">55
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#51" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l56" class="line-number">56
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#52" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l57" class="line-number">57
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#53" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l58" class="line-number">58
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#54" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l59" class="line-number">59
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#55" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l60" class="line-number">60
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#56" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l61" class="line-number">61
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#57" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l62" class="line-number">62
<div class="blame-strip c1" data-blame="f504948b281f5e623e091d9db1f55dde4a07ca17#%#63" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l63" class="line-number">63
<div class="blame-strip c1" data-blame="f504948b281f5e623e091d9db1f55dde4a07ca17#%#64" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l64" class="line-number">64
<div class="blame-strip c1" data-blame="f504948b281f5e623e091d9db1f55dde4a07ca17#%#65" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l65" class="line-number">65
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#browser/devtools/webaudioeditor/controller.js#63" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l66" class="line-number">66
<div class="blame-strip c1" data-blame="a137b66eaefb24dce702b577d26028cf4c236530#browser/devtools/webaudioeditor/controller.js#64" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l67" class="line-number">67
<div class="blame-strip c1" data-blame="a137b66eaefb24dce702b577d26028cf4c236530#browser/devtools/webaudioeditor/controller.js#65" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l68" class="line-number">68
<div class="blame-strip c1" data-blame="a137b66eaefb24dce702b577d26028cf4c236530#browser/devtools/webaudioeditor/controller.js#66" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l69" class="line-number">69
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#69" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l70" class="line-number">70
<div class="blame-strip c1" data-blame="a137b66eaefb24dce702b577d26028cf4c236530#browser/devtools/webaudioeditor/controller.js#68" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l71" class="line-number">71
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#72" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l72" class="line-number">72
<div class="blame-strip c1" data-blame="a137b66eaefb24dce702b577d26028cf4c236530#browser/devtools/webaudioeditor/controller.js#70" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l73" class="line-number">73
<div class="blame-strip c1" data-blame="a137b66eaefb24dce702b577d26028cf4c236530#browser/devtools/webaudioeditor/controller.js#71" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l74" class="line-number">74
<div class="blame-strip c1" data-blame="a137b66eaefb24dce702b577d26028cf4c236530#browser/devtools/webaudioeditor/controller.js#72" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l75" class="line-number">75
<div class="blame-strip c2" data-blame="76baf9e8d67bf3c9c883264c490cdb19038445d5#%#72" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l76" class="line-number">76
<div class="blame-strip c2" data-blame="76baf9e8d67bf3c9c883264c490cdb19038445d5#%#73" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l77" class="line-number">77
<div class="blame-strip c2" data-blame="76baf9e8d67bf3c9c883264c490cdb19038445d5#%#74" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l78" class="line-number">78
<div class="blame-strip c2" data-blame="76baf9e8d67bf3c9c883264c490cdb19038445d5#%#75" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l79" class="line-number">79
<div class="blame-strip c2" data-blame="76baf9e8d67bf3c9c883264c490cdb19038445d5#%#76" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l80" class="line-number">80
<div class="blame-strip c2" data-blame="76baf9e8d67bf3c9c883264c490cdb19038445d5#%#77" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l81" class="line-number">81
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#82" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l82" class="line-number">82
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#60" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l83" class="line-number">83
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#61" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l84" class="line-number">84
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#62" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l85" class="line-number">85
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#63" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l86" class="line-number">86
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#86" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l87" class="line-number">87
<div class="blame-strip c2" data-blame="9f6614f23dc6ce9f2c5c94743a375a04a1ba3015#%#87" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l88" class="line-number">88
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#68" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l89" class="line-number">89
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#69" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l90" class="line-number">90
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#70" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l91" class="line-number">91
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#71" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l92" class="line-number">92
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#72" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l93" class="line-number">93
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#73" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l94" class="line-number">94
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#74" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l95" class="line-number">95
<div class="blame-strip c2" data-blame="f504948b281f5e623e091d9db1f55dde4a07ca17#%#97" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l96" class="line-number">96
<div class="blame-strip c2" data-blame="f504948b281f5e623e091d9db1f55dde4a07ca17#%#98" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l97" class="line-number">97
<div class="blame-strip c1" data-blame="14fc08113fb36b481d1bdc85db506b33a3abab69#browser/devtools/webaudioeditor/controller.js#90" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l98" class="line-number">98
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#77" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l99" class="line-number">99
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#78" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l100" class="line-number">100
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#79" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l101" class="line-number">101
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#80" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l102" class="line-number">102
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#81" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l103" class="line-number">103
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#103" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l104" class="line-number">104
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#83" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l105" class="line-number">105
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#84" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l106" class="line-number">106
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#85" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l107" class="line-number">107
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#browser/devtools/webaudioeditor/controller.js#90" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l108" class="line-number">108
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#86" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l109" class="line-number">109
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#87" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l110" class="line-number">110
<div class="blame-strip c1" data-blame="14fc08113fb36b481d1bdc85db506b33a3abab69#browser/devtools/webaudioeditor/controller.js#103" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l111" class="line-number">111
<div class="blame-strip c1" data-blame="14fc08113fb36b481d1bdc85db506b33a3abab69#browser/devtools/webaudioeditor/controller.js#104" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l112" class="line-number">112
<div class="blame-strip c1" data-blame="14fc08113fb36b481d1bdc85db506b33a3abab69#browser/devtools/webaudioeditor/controller.js#105" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l113" class="line-number">113
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#113" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l114" class="line-number">114
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#114" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l115" class="line-number">115
<div class="blame-strip c2" data-blame="f541b35939f04dc59e247c67b5aa1871fb40ddc2#browser/devtools/webaudioeditor/controller.js#101" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l116" class="line-number">116
<div class="blame-strip c1" data-blame="14fc08113fb36b481d1bdc85db506b33a3abab69#browser/devtools/webaudioeditor/controller.js#109" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l117" class="line-number">117
<div class="blame-strip c1" data-blame="14fc08113fb36b481d1bdc85db506b33a3abab69#browser/devtools/webaudioeditor/controller.js#110" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l118" class="line-number">118
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#118" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l119" class="line-number">119
<div class="blame-strip c1" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#110" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l120" class="line-number">120
<div class="blame-strip c2" data-blame="14fc08113fb36b481d1bdc85db506b33a3abab69#browser/devtools/webaudioeditor/controller.js#113" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l121" class="line-number">121
<div class="blame-strip c2" data-blame="14fc08113fb36b481d1bdc85db506b33a3abab69#browser/devtools/webaudioeditor/controller.js#114" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l122" class="line-number">122
<div class="blame-strip c2" data-blame="14fc08113fb36b481d1bdc85db506b33a3abab69#browser/devtools/webaudioeditor/controller.js#115" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l123" class="line-number">123
<div class="blame-strip c2" data-blame="14fc08113fb36b481d1bdc85db506b33a3abab69#browser/devtools/webaudioeditor/controller.js#116" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l124" class="line-number">124
<div class="blame-strip c2" data-blame="14fc08113fb36b481d1bdc85db506b33a3abab69#browser/devtools/webaudioeditor/controller.js#117" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l125" class="line-number">125
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#127" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l126" class="line-number">126
<div class="blame-strip c2" data-blame="14fc08113fb36b481d1bdc85db506b33a3abab69#browser/devtools/webaudioeditor/controller.js#119" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l127" class="line-number">127
<div class="blame-strip c1" data-blame="f541b35939f04dc59e247c67b5aa1871fb40ddc2#browser/devtools/webaudioeditor/controller.js#113" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l128" class="line-number">128
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#114" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l129" class="line-number">129
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#115" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l130" class="line-number">130
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#116" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l131" class="line-number">131
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#117" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l132" class="line-number">132
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#118" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l133" class="line-number">133
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#119" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l134" class="line-number">134
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#120" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l135" class="line-number">135
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#135" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l136" class="line-number">136
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#136" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l137" class="line-number">137
<div class="blame-strip c1" data-blame="f504948b281f5e623e091d9db1f55dde4a07ca17#%#139" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l138" class="line-number">138
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#123" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l139" class="line-number">139
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#124" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l140" class="line-number">140
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#125" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l141" class="line-number">141
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#126" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l142" class="line-number">142
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#127" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l143" class="line-number">143
<div class="blame-strip c1" data-blame="9f6614f23dc6ce9f2c5c94743a375a04a1ba3015#%#143" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l144" class="line-number">144
<div class="blame-strip c1" data-blame="9f6614f23dc6ce9f2c5c94743a375a04a1ba3015#%#144" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l145" class="line-number">145
<div class="blame-strip c1" data-blame="9f6614f23dc6ce9f2c5c94743a375a04a1ba3015#%#145" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l146" class="line-number">146
<div class="blame-strip c1" data-blame="9f6614f23dc6ce9f2c5c94743a375a04a1ba3015#%#146" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l147" class="line-number">147
<div class="blame-strip c1" data-blame="9f6614f23dc6ce9f2c5c94743a375a04a1ba3015#%#147" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l148" class="line-number">148
<div class="blame-strip c1" data-blame="9f6614f23dc6ce9f2c5c94743a375a04a1ba3015#%#148" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l149" class="line-number">149
<div class="blame-strip c1" data-blame="9f6614f23dc6ce9f2c5c94743a375a04a1ba3015#%#149" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l150" class="line-number">150
<div class="blame-strip c1" data-blame="9f6614f23dc6ce9f2c5c94743a375a04a1ba3015#%#150" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l151" class="line-number">151
<div class="blame-strip c1" data-blame="9f6614f23dc6ce9f2c5c94743a375a04a1ba3015#%#151" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l152" class="line-number">152
<div class="blame-strip c1" data-blame="9f6614f23dc6ce9f2c5c94743a375a04a1ba3015#%#152" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l153" class="line-number">153
<div class="blame-strip c1" data-blame="9f6614f23dc6ce9f2c5c94743a375a04a1ba3015#%#153" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l154" class="line-number">154
<div class="blame-strip c1" data-blame="9f6614f23dc6ce9f2c5c94743a375a04a1ba3015#%#154" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l155" class="line-number">155
<div class="blame-strip c1" data-blame="9f6614f23dc6ce9f2c5c94743a375a04a1ba3015#%#155" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l156" class="line-number">156
<div class="blame-strip c1" data-blame="9f6614f23dc6ce9f2c5c94743a375a04a1ba3015#%#156" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l157" class="line-number">157
<div class="blame-strip c1" data-blame="9f6614f23dc6ce9f2c5c94743a375a04a1ba3015#%#157" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l158" class="line-number">158
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#163" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l159" class="line-number">159
<div class="blame-strip c1" data-blame="9f6614f23dc6ce9f2c5c94743a375a04a1ba3015#%#159" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l160" class="line-number">160
<div class="blame-strip c1" data-blame="9f6614f23dc6ce9f2c5c94743a375a04a1ba3015#%#160" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l161" class="line-number">161
<div class="blame-strip c1" data-blame="9f6614f23dc6ce9f2c5c94743a375a04a1ba3015#%#161" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l162" class="line-number">162
<div class="blame-strip c1" data-blame="9f6614f23dc6ce9f2c5c94743a375a04a1ba3015#%#162" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l163" class="line-number">163
<div class="blame-strip c1" data-blame="9f6614f23dc6ce9f2c5c94743a375a04a1ba3015#%#163" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l164" class="line-number">164
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#176" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l165" class="line-number">165
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#165" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l166" class="line-number">166
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#166" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l167" class="line-number">167
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#167" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l168" class="line-number">168
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#168" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l169" class="line-number">169
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#169" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l170" class="line-number">170
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#170" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l171" class="line-number">171
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#171" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l172" class="line-number">172
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#172" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l173" class="line-number">173
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#173" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l174" class="line-number">174
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#174" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l175" class="line-number">175
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#175" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l176" class="line-number">176
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#176" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l177" class="line-number">177
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#177" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l178" class="line-number">178
<div class="blame-strip c2" data-blame="14fc08113fb36b481d1bdc85db506b33a3abab69#browser/devtools/webaudioeditor/controller.js#185" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l179" class="line-number">179
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#179" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l180" class="line-number">180
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#180" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l181" class="line-number">181
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#181" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l182" class="line-number">182
<div class="blame-strip c1" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#browser/devtools/webaudioeditor/controller.js#189" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l183" class="line-number">183
<div class="blame-strip c1" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#browser/devtools/webaudioeditor/controller.js#190" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l184" class="line-number">184
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#184" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l185" class="line-number">185
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#185" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l186" class="line-number">186
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#186" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l187" class="line-number">187
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#187" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l188" class="line-number">188
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#188" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l189" class="line-number">189
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#189" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l190" class="line-number">190
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#190" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l191" class="line-number">191
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#191" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l192" class="line-number">192
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#192" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l193" class="line-number">193
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#193" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l194" class="line-number">194
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#194" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l195" class="line-number">195
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#195" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l196" class="line-number">196
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#208" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l197" class="line-number">197
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#197" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l198" class="line-number">198
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#198" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l199" class="line-number">199
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#198" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l200" class="line-number">200
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#212" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l201" class="line-number">201
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#200" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l202" class="line-number">202
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#201" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l203" class="line-number">203
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#202" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l204" class="line-number">204
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#203" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l205" class="line-number">205
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#217" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l206" class="line-number">206
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#206" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l207" class="line-number">207
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#207" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l208" class="line-number">208
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#206" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l209" class="line-number">209
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#221" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l210" class="line-number">210
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#208" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l211" class="line-number">211
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#209" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l212" class="line-number">212
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#210" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l213" class="line-number">213
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#211" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l214" class="line-number">214
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#226" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l215" class="line-number">215
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#215" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l216" class="line-number">216
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#214" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l217" class="line-number">217
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#229" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l218" class="line-number">218
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#216" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l219" class="line-number">219
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#217" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l220" class="line-number">220
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#218" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l221" class="line-number">221
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#219" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l222" class="line-number">222
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#234" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l223" class="line-number">223
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#223" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l224" class="line-number">224
<div class="blame-strip c2" data-blame="f541b35939f04dc59e247c67b5aa1871fb40ddc2#browser/devtools/webaudioeditor/controller.js#224" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l225" class="line-number">225
<div class="blame-strip c1" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#225" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l226" class="line-number">226
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/controller.js#223" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
      </td>
      <td class="code">
<pre><code id="line-1" aria-labelledby="1"><span class="syn_comment" >/* This Source Code Form is subject to the terms of the Mozilla Public</span>
</code><code id="line-2" aria-labelledby="2"><span class="syn_comment" > * License, v. 2.0. If a copy of the MPL was not distributed with this file,</span>
</code><code id="line-3" aria-labelledby="3"><span class="syn_comment" > * You can obtain one at <a href="http://mozilla.org/MPL/2.0/">http://mozilla.org/MPL/2.0/</a>. */</span>
</code><code id="line-4" aria-labelledby="4">
</code><code id="line-5" aria-labelledby="5"><span class="syn_reserved" >const</span> {<span class="syn_def" data-symbols="#PrefObserver" data-i="0" >PrefObserver</span>} = <span data-symbols="#require" data-i="1" >require</span>(<span class="syn_string" >"devtools/client/shared/prefs"</span>);
</code><code id="line-6" aria-labelledby="6">
</code><code id="line-7" aria-labelledby="7"><span class="syn_comment" >/**</span>
</code><code id="line-8" aria-labelledby="8"><span class="syn_comment" > * A collection of `AudioNodeModel`s used throughout the editor</span>
</code><code id="line-9" aria-labelledby="9"><span class="syn_comment" > * to keep track of audio nodes within the audio context.</span>
</code><code id="line-10" aria-labelledby="10"><span class="syn_comment" > */</span>
</code><code id="line-11" aria-labelledby="11"><span class="syn_reserved" >var</span> <span class="syn_def" data-symbols="#gAudioNodes" data-i="2" >gAudioNodes</span> = <span class="syn_reserved" >new</span> <span data-symbols="#AudioNodesCollection" data-i="3" >AudioNodesCollection</span>();
</code><code id="line-12" aria-labelledby="12">
</code><code id="line-13" aria-labelledby="13"><span class="syn_comment" >/**</span>
</code><code id="line-14" aria-labelledby="14"><span class="syn_comment" > * Initializes the web audio editor views</span>
</code><code id="line-15" aria-labelledby="15"><span class="syn_comment" > */</span>
</code><code id="line-16" aria-labelledby="16"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#startupWebAudioEditor" data-i="4" >startupWebAudioEditor</span>() {
</code><code id="line-17" aria-labelledby="17">  <span class="syn_reserved" >return</span> <span data-symbols="#all" data-i="5" >all</span>([
</code><code id="line-18" aria-labelledby="18">    <span data-symbols="#WebAudioEditorController" data-i="6" >WebAudioEditorController</span>.<span data-symbols="#initialize,WebAudioEditorController#initialize" data-i="7" >initialize</span>(),
</code><code id="line-19" aria-labelledby="19">    <span data-symbols="#ContextView" data-i="8" >ContextView</span>.<span data-symbols="#initialize,ContextView#initialize" data-i="9" >initialize</span>(),
</code><code id="line-20" aria-labelledby="20">    <span data-symbols="#InspectorView" data-i="10" >InspectorView</span>.<span data-symbols="#initialize,InspectorView#initialize" data-i="11" >initialize</span>(),
</code><code id="line-21" aria-labelledby="21">    <span data-symbols="#PropertiesView" data-i="12" >PropertiesView</span>.<span data-symbols="#initialize,PropertiesView#initialize" data-i="13" >initialize</span>(),
</code><code id="line-22" aria-labelledby="22">    <span data-symbols="#AutomationView" data-i="14" >AutomationView</span>.<span data-symbols="#initialize,AutomationView#initialize" data-i="15" >initialize</span>(),
</code><code id="line-23" aria-labelledby="23">  ]);
</code><code id="line-24" aria-labelledby="24">}
</code><code id="line-25" aria-labelledby="25">
</code><code id="line-26" aria-labelledby="26"><span class="syn_comment" >/**</span>
</code><code id="line-27" aria-labelledby="27"><span class="syn_comment" > * Destroys the web audio editor controller and views.</span>
</code><code id="line-28" aria-labelledby="28"><span class="syn_comment" > */</span>
</code><code id="line-29" aria-labelledby="29"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#shutdownWebAudioEditor" data-i="16" >shutdownWebAudioEditor</span>() {
</code><code id="line-30" aria-labelledby="30">  <span class="syn_reserved" >return</span> <span data-symbols="#all" data-i="17" >all</span>([
</code><code id="line-31" aria-labelledby="31">    <span data-symbols="#WebAudioEditorController" data-i="18" >WebAudioEditorController</span>.<span data-symbols="#destroy,WebAudioEditorController#destroy" data-i="19" >destroy</span>(),
</code><code id="line-32" aria-labelledby="32">    <span data-symbols="#ContextView" data-i="20" >ContextView</span>.<span data-symbols="#destroy,ContextView#destroy" data-i="21" >destroy</span>(),
</code><code id="line-33" aria-labelledby="33">    <span data-symbols="#InspectorView" data-i="22" >InspectorView</span>.<span data-symbols="#destroy,InspectorView#destroy" data-i="23" >destroy</span>(),
</code><code id="line-34" aria-labelledby="34">    <span data-symbols="#PropertiesView" data-i="24" >PropertiesView</span>.<span data-symbols="#destroy,PropertiesView#destroy" data-i="25" >destroy</span>(),
</code><code id="line-35" aria-labelledby="35">    <span data-symbols="#AutomationView" data-i="26" >AutomationView</span>.<span data-symbols="#destroy,AutomationView#destroy" data-i="27" >destroy</span>(),
</code><code id="line-36" aria-labelledby="36">  ]);
</code><code id="line-37" aria-labelledby="37">}
</code><code id="line-38" aria-labelledby="38">
</code><code id="line-39" aria-labelledby="39"><span class="syn_comment" >/**</span>
</code><code id="line-40" aria-labelledby="40"><span class="syn_comment" > * Functions handling target-related lifetime events.</span>
</code><code id="line-41" aria-labelledby="41"><span class="syn_comment" > */</span>
</code><code id="line-42" aria-labelledby="42"><span class="syn_reserved" >var</span> <span class="syn_def" data-symbols="#WebAudioEditorController" data-i="28" >WebAudioEditorController</span> = {
</code><code id="line-43" aria-labelledby="43">  <span class="syn_comment" >/**</span>
</code><code id="line-44" aria-labelledby="44"><span class="syn_comment" >   * Listen for events emitted by the current tab target.</span>
</code><code id="line-45" aria-labelledby="45"><span class="syn_comment" >   */</span>
</code><code id="line-46" aria-labelledby="46">  async <span class="syn_def syn_def" data-symbols="#initialize,WebAudioEditorController#initialize" data-i="29" >initialize</span>() {
</code><code id="line-47" aria-labelledby="47">    <span class="syn_reserved" >this</span>.<span data-symbols="#_onTabWillNavigate,WebAudioEditorController#_onTabWillNavigate" data-i="30" >_onTabWillNavigate</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_onTabWillNavigate,_onTabWillNavigate#_onTabWillNavigate" data-i="31" >_onTabWillNavigate</span>.<span data-symbols="#bind" data-i="32" >bind</span>(<span class="syn_reserved" >this</span>);
</code><code id="line-48" aria-labelledby="48">    <span class="syn_reserved" >this</span>.<span data-symbols="#_onThemeChange,WebAudioEditorController#_onThemeChange" data-i="33" >_onThemeChange</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_onThemeChange,_onThemeChange#_onThemeChange" data-i="34" >_onThemeChange</span>.<span data-symbols="#bind" data-i="35" >bind</span>(<span class="syn_reserved" >this</span>);
</code><code id="line-49" aria-labelledby="49">
</code><code id="line-50" aria-labelledby="50">    <span data-symbols="#gTarget" data-i="36" >gTarget</span>.<span data-symbols="#on,gTarget#on" data-i="37" >on</span>(<span class="syn_string" >"will-navigate"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onTabWillNavigate,WebAudioEditorController#_onTabWillNavigate" data-i="38" >_onTabWillNavigate</span>);
</code><code id="line-51" aria-labelledby="51">    <span data-symbols="#gFront" data-i="39" >gFront</span>.<span data-symbols="#on,gFront#on" data-i="40" >on</span>(<span class="syn_string" >"start-context"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onStartContext,WebAudioEditorController#_onStartContext" data-i="41" >_onStartContext</span>);
</code><code id="line-52" aria-labelledby="52">    <span data-symbols="#gFront" data-i="42" >gFront</span>.<span data-symbols="#on,gFront#on" data-i="43" >on</span>(<span class="syn_string" >"create-node"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onCreateNode,WebAudioEditorController#_onCreateNode" data-i="44" >_onCreateNode</span>);
</code><code id="line-53" aria-labelledby="53">    <span data-symbols="#gFront" data-i="45" >gFront</span>.<span data-symbols="#on,gFront#on" data-i="46" >on</span>(<span class="syn_string" >"connect-node"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onConnectNode,WebAudioEditorController#_onConnectNode" data-i="47" >_onConnectNode</span>);
</code><code id="line-54" aria-labelledby="54">    <span data-symbols="#gFront" data-i="48" >gFront</span>.<span data-symbols="#on,gFront#on" data-i="49" >on</span>(<span class="syn_string" >"connect-param"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onConnectParam,WebAudioEditorController#_onConnectParam" data-i="50" >_onConnectParam</span>);
</code><code id="line-55" aria-labelledby="55">    <span data-symbols="#gFront" data-i="51" >gFront</span>.<span data-symbols="#on,gFront#on" data-i="52" >on</span>(<span class="syn_string" >"disconnect-node"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onDisconnectNode,WebAudioEditorController#_onDisconnectNode" data-i="53" >_onDisconnectNode</span>);
</code><code id="line-56" aria-labelledby="56">    <span data-symbols="#gFront" data-i="54" >gFront</span>.<span data-symbols="#on,gFront#on" data-i="55" >on</span>(<span class="syn_string" >"change-param"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onChangeParam,WebAudioEditorController#_onChangeParam" data-i="56" >_onChangeParam</span>);
</code><code id="line-57" aria-labelledby="57">    <span data-symbols="#gFront" data-i="57" >gFront</span>.<span data-symbols="#on,gFront#on" data-i="58" >on</span>(<span class="syn_string" >"destroy-node"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onDestroyNode,WebAudioEditorController#_onDestroyNode" data-i="59" >_onDestroyNode</span>);
</code><code id="line-58" aria-labelledby="58">
</code><code id="line-59" aria-labelledby="59">    <span class="syn_comment" >// Hook into theme change so we can change</span>
</code><code id="line-60" aria-labelledby="60">    <span class="syn_comment" >// the graph's marker styling, since we can't do this</span>
</code><code id="line-61" aria-labelledby="61">    <span class="syn_comment" >// with CSS</span>
</code><code id="line-62" aria-labelledby="62">
</code><code id="line-63" aria-labelledby="63">    <span class="syn_reserved" >this</span>.<span data-symbols="#_prefObserver,WebAudioEditorController#_prefObserver" data-i="60" >_prefObserver</span> = <span class="syn_reserved" >new</span> <span data-symbols="#PrefObserver" data-i="61" >PrefObserver</span>(<span class="syn_string" >""</span>);
</code><code id="line-64" aria-labelledby="64">    <span class="syn_reserved" >this</span>.<span data-symbols="#_prefObserver,WebAudioEditorController#_prefObserver" data-i="62" >_prefObserver</span>.<span data-symbols="#on" data-i="63" >on</span>(<span class="syn_string" >"devtools.theme"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onThemeChange,WebAudioEditorController#_onThemeChange" data-i="64" >_onThemeChange</span>);
</code><code id="line-65" aria-labelledby="65">
</code><code id="line-66" aria-labelledby="66">    <span class="syn_comment" >// Store the AudioNode definitions from the WebAudioFront, if the method exists.</span>
</code><code id="line-67" aria-labelledby="67">    <span class="syn_comment" >// If not, get the JSON directly. Using the actor method is preferable so the client</span>
</code><code id="line-68" aria-labelledby="68">    <span class="syn_comment" >// knows exactly what methods are supported on the server.</span>
</code><code id="line-69" aria-labelledby="69">    <span class="syn_reserved" >const</span> <span data-symbols="7322-0" >actorHasDefinition</span> = await <span data-symbols="#gTarget" data-i="65" >gTarget</span>.<span data-symbols="#actorHasMethod,gTarget#actorHasMethod" data-i="66" >actorHasMethod</span>(<span class="syn_string" >"webaudio"</span>, <span class="syn_string" >"getDefinition"</span>);
</code><code id="line-70" aria-labelledby="70">    <span class="syn_reserved" >if</span> (<span data-symbols="7322-0" >actorHasDefinition</span>) {
</code><code id="line-71" aria-labelledby="71">      <span data-symbols="#AUDIO_NODE_DEFINITION" data-i="67" >AUDIO_NODE_DEFINITION</span> = await <span data-symbols="#gFront" data-i="68" >gFront</span>.<span data-symbols="#getDefinition,gFront#getDefinition" data-i="69" >getDefinition</span>();
</code><code id="line-72" aria-labelledby="72">    } <span class="syn_reserved" >else</span> {
</code><code id="line-73" aria-labelledby="73">      <span data-symbols="#AUDIO_NODE_DEFINITION" data-i="70" >AUDIO_NODE_DEFINITION</span> = <span data-symbols="#require" data-i="71" >require</span>(<span class="syn_string" >"devtools/server/actors/utils/audionodes.json"</span>);
</code><code id="line-74" aria-labelledby="74">    }
</code><code id="line-75" aria-labelledby="75">
</code><code id="line-76" aria-labelledby="76">    <span class="syn_comment" >// Make sure the backend is prepared to handle audio contexts.</span>
</code><code id="line-77" aria-labelledby="77">    <span class="syn_comment" >// Since actors are created lazily on the first request to them, we need to send an</span>
</code><code id="line-78" aria-labelledby="78">    <span class="syn_comment" >// early request to ensure the CallWatcherActor is running and watching for new window</span>
</code><code id="line-79" aria-labelledby="79">    <span class="syn_comment" >// globals.</span>
</code><code id="line-80" aria-labelledby="80">    <span data-symbols="#gFront" data-i="72" >gFront</span>.<span data-symbols="#setup,gFront#setup" data-i="73" >setup</span>({ <span class="syn_def syn_def" data-symbols="#reload,WebAudioEditorController#reload" data-i="74" >reload</span>: <span class="syn_reserved" >false</span> });
</code><code id="line-81" aria-labelledby="81">  },
</code><code id="line-82" aria-labelledby="82">
</code><code id="line-83" aria-labelledby="83">  <span class="syn_comment" >/**</span>
</code><code id="line-84" aria-labelledby="84"><span class="syn_comment" >   * Remove events emitted by the current tab target.</span>
</code><code id="line-85" aria-labelledby="85"><span class="syn_comment" >   */</span>
</code><code id="line-86" aria-labelledby="86">  <span class="syn_def syn_def" data-symbols="#destroy,WebAudioEditorController#destroy" data-i="75" >destroy</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-87" aria-labelledby="87">    <span data-symbols="#gTarget" data-i="76" >gTarget</span>.<span data-symbols="#off,gTarget#off" data-i="77" >off</span>(<span class="syn_string" >"will-navigate"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onTabWillNavigate,WebAudioEditorController#_onTabWillNavigate" data-i="78" >_onTabWillNavigate</span>);
</code><code id="line-88" aria-labelledby="88">    <span data-symbols="#gFront" data-i="79" >gFront</span>.<span data-symbols="#off,gFront#off" data-i="80" >off</span>(<span class="syn_string" >"start-context"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onStartContext,WebAudioEditorController#_onStartContext" data-i="81" >_onStartContext</span>);
</code><code id="line-89" aria-labelledby="89">    <span data-symbols="#gFront" data-i="82" >gFront</span>.<span data-symbols="#off,gFront#off" data-i="83" >off</span>(<span class="syn_string" >"create-node"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onCreateNode,WebAudioEditorController#_onCreateNode" data-i="84" >_onCreateNode</span>);
</code><code id="line-90" aria-labelledby="90">    <span data-symbols="#gFront" data-i="85" >gFront</span>.<span data-symbols="#off,gFront#off" data-i="86" >off</span>(<span class="syn_string" >"connect-node"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onConnectNode,WebAudioEditorController#_onConnectNode" data-i="87" >_onConnectNode</span>);
</code><code id="line-91" aria-labelledby="91">    <span data-symbols="#gFront" data-i="88" >gFront</span>.<span data-symbols="#off,gFront#off" data-i="89" >off</span>(<span class="syn_string" >"connect-param"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onConnectParam,WebAudioEditorController#_onConnectParam" data-i="90" >_onConnectParam</span>);
</code><code id="line-92" aria-labelledby="92">    <span data-symbols="#gFront" data-i="91" >gFront</span>.<span data-symbols="#off,gFront#off" data-i="92" >off</span>(<span class="syn_string" >"disconnect-node"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onDisconnectNode,WebAudioEditorController#_onDisconnectNode" data-i="93" >_onDisconnectNode</span>);
</code><code id="line-93" aria-labelledby="93">    <span data-symbols="#gFront" data-i="94" >gFront</span>.<span data-symbols="#off,gFront#off" data-i="95" >off</span>(<span class="syn_string" >"change-param"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onChangeParam,WebAudioEditorController#_onChangeParam" data-i="96" >_onChangeParam</span>);
</code><code id="line-94" aria-labelledby="94">    <span data-symbols="#gFront" data-i="97" >gFront</span>.<span data-symbols="#off,gFront#off" data-i="98" >off</span>(<span class="syn_string" >"destroy-node"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onDestroyNode,WebAudioEditorController#_onDestroyNode" data-i="99" >_onDestroyNode</span>);
</code><code id="line-95" aria-labelledby="95">    <span class="syn_reserved" >this</span>.<span data-symbols="#_prefObserver,WebAudioEditorController#_prefObserver" data-i="100" >_prefObserver</span>.<span data-symbols="#off" data-i="101" >off</span>(<span class="syn_string" >"devtools.theme"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onThemeChange,WebAudioEditorController#_onThemeChange" data-i="102" >_onThemeChange</span>);
</code><code id="line-96" aria-labelledby="96">    <span class="syn_reserved" >this</span>.<span data-symbols="#_prefObserver,WebAudioEditorController#_prefObserver" data-i="103" >_prefObserver</span>.<span data-symbols="#destroy" data-i="104" >destroy</span>();
</code><code id="line-97" aria-labelledby="97">  },
</code><code id="line-98" aria-labelledby="98">
</code><code id="line-99" aria-labelledby="99">  <span class="syn_comment" >/**</span>
</code><code id="line-100" aria-labelledby="100"><span class="syn_comment" >   * Called when page is reloaded to show the reload notice and waiting</span>
</code><code id="line-101" aria-labelledby="101"><span class="syn_comment" >   * for an audio context notice.</span>
</code><code id="line-102" aria-labelledby="102"><span class="syn_comment" >   */</span>
</code><code id="line-103" aria-labelledby="103">  <span class="syn_def syn_def" data-symbols="#reset,WebAudioEditorController#reset" data-i="105" >reset</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-104" aria-labelledby="104">    $(<span class="syn_string" >"#content"</span>).<span data-symbols="#hidden" data-i="106" >hidden</span> = <span class="syn_reserved" >true</span>;
</code><code id="line-105" aria-labelledby="105">    <span data-symbols="#ContextView" data-i="107" >ContextView</span>.<span data-symbols="#resetUI,ContextView#resetUI" data-i="108" >resetUI</span>();
</code><code id="line-106" aria-labelledby="106">    <span data-symbols="#InspectorView" data-i="109" >InspectorView</span>.<span data-symbols="#resetUI,InspectorView#resetUI" data-i="110" >resetUI</span>();
</code><code id="line-107" aria-labelledby="107">    <span data-symbols="#PropertiesView" data-i="111" >PropertiesView</span>.<span data-symbols="#resetUI,PropertiesView#resetUI" data-i="112" >resetUI</span>();
</code><code id="line-108" aria-labelledby="108">  },
</code><code id="line-109" aria-labelledby="109">
</code><code id="line-110" aria-labelledby="110">  <span class="syn_comment" >// Since node events (create, disconnect, connect) are all async,</span>
</code><code id="line-111" aria-labelledby="111">  <span class="syn_comment" >// we have to make sure to wait that the node has finished creating</span>
</code><code id="line-112" aria-labelledby="112">  <span class="syn_comment" >// before performing an operation on it.</span>
</code><code id="line-113" aria-labelledby="113">  <span class="syn_def syn_def" data-symbols="#getNode,WebAudioEditorController#getNode" data-i="113" >getNode</span>: async <span class="syn_reserved" >function</span>(<span data-symbols="7322-1" >nodeActor</span>) {
</code><code id="line-114" aria-labelledby="114">    <span class="syn_reserved" >const</span> <span data-symbols="7322-2" >id</span> = <span data-symbols="7322-1" >nodeActor</span>.<span data-symbols="#actorID,nodeActor#actorID" data-i="114" >actorID</span>;
</code><code id="line-115" aria-labelledby="115">    <span class="syn_reserved" >let</span> <span data-symbols="7322-3" >node</span> = <span data-symbols="#gAudioNodes" data-i="115" >gAudioNodes</span>.<span class="syn_reserved" >get</span>(<span data-symbols="7322-2" >id</span>);
</code><code id="line-116" aria-labelledby="116">
</code><code id="line-117" aria-labelledby="117">    <span class="syn_reserved" >if</span> (!<span data-symbols="7322-3" >node</span>) {
</code><code id="line-118" aria-labelledby="118">      <span class="syn_reserved" >const</span> { <span data-symbols="7322-4" >resolve</span>, <span data-symbols="7322-5" >promise</span> } = <span data-symbols="#defer" data-i="116" >defer</span>();
</code><code id="line-119" aria-labelledby="119">      <span data-symbols="#gAudioNodes" data-i="117" >gAudioNodes</span>.<span data-symbols="#on,gAudioNodes#on" data-i="118" >on</span>(<span class="syn_string" >"add"</span>, <span class="syn_reserved" >function</span> createNodeListener(<span data-symbols="7322-6" >createdNode</span>) {
</code><code id="line-120" aria-labelledby="120">        <span class="syn_reserved" >if</span> (<span data-symbols="7322-6" >createdNode</span>.<span data-symbols="#id,createdNode#id" data-i="119" >id</span> === <span data-symbols="7322-2" >id</span>) {
</code><code id="line-121" aria-labelledby="121">          <span data-symbols="#gAudioNodes" data-i="120" >gAudioNodes</span>.<span data-symbols="#off,gAudioNodes#off" data-i="121" >off</span>(<span class="syn_string" >"add"</span>, <span data-symbols="#createNodeListener" data-i="122" >createNodeListener</span>);
</code><code id="line-122" aria-labelledby="122">          <span data-symbols="7322-4" >resolve</span>(<span data-symbols="7322-6" >createdNode</span>);
</code><code id="line-123" aria-labelledby="123">        }
</code><code id="line-124" aria-labelledby="124">      });
</code><code id="line-125" aria-labelledby="125">      <span data-symbols="7322-3" >node</span> = await <span data-symbols="7322-5" >promise</span>;
</code><code id="line-126" aria-labelledby="126">    }
</code><code id="line-127" aria-labelledby="127">    <span class="syn_reserved" >return</span> <span data-symbols="7322-3" >node</span>;
</code><code id="line-128" aria-labelledby="128">  },
</code><code id="line-129" aria-labelledby="129">
</code><code id="line-130" aria-labelledby="130">  <span class="syn_comment" >/**</span>
</code><code id="line-131" aria-labelledby="131"><span class="syn_comment" >   * Fired when the devtools theme changes (light, dark, etc.)</span>
</code><code id="line-132" aria-labelledby="132"><span class="syn_comment" >   * so that the graph can update marker styling, as that</span>
</code><code id="line-133" aria-labelledby="133"><span class="syn_comment" >   * cannot currently be done with CSS.</span>
</code><code id="line-134" aria-labelledby="134"><span class="syn_comment" >   */</span>
</code><code id="line-135" aria-labelledby="135">  <span class="syn_def syn_def" data-symbols="#_onThemeChange,WebAudioEditorController#_onThemeChange" data-i="123" >_onThemeChange</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-136" aria-labelledby="136">    <span class="syn_reserved" >const</span> <span data-symbols="7322-7" >newValue</span> = <span data-symbols="#Services" data-i="124" >Services</span>.<span data-symbols="#prefs,Services#prefs" data-i="125" >prefs</span>.<span data-symbols="#getCharPref" data-i="126" >getCharPref</span>(<span class="syn_string" >"devtools.theme"</span>);
</code><code id="line-137" aria-labelledby="137">    <span data-symbols="#window" data-i="127" >window</span>.<span data-symbols="#emit,window#emit" data-i="128" >emit</span>(<span data-symbols="#EVENTS" data-i="129" >EVENTS</span>.<span data-symbols="#THEME_CHANGE,EVENTS#THEME_CHANGE" data-i="130" >THEME_CHANGE</span>, <span data-symbols="7322-7" >newValue</span>);
</code><code id="line-138" aria-labelledby="138">  },
</code><code id="line-139" aria-labelledby="139">
</code><code id="line-140" aria-labelledby="140">  <span class="syn_comment" >/**</span>
</code><code id="line-141" aria-labelledby="141"><span class="syn_comment" >   * Called for each location change in the debugged tab.</span>
</code><code id="line-142" aria-labelledby="142"><span class="syn_comment" >   */</span>
</code><code id="line-143" aria-labelledby="143">  <span class="syn_def syn_def" data-symbols="#_onTabWillNavigate,WebAudioEditorController#_onTabWillNavigate" data-i="131" >_onTabWillNavigate</span>: <span class="syn_reserved" >function</span>({<span data-symbols="7322-8" >isFrameSwitching</span>}) {
</code><code id="line-144" aria-labelledby="144">    <span class="syn_comment" >// Clear out current UI.</span>
</code><code id="line-145" aria-labelledby="145">    <span class="syn_reserved" >this</span>.<span data-symbols="#reset,WebAudioEditorController#reset" data-i="132" >reset</span>();
</code><code id="line-146" aria-labelledby="146">
</code><code id="line-147" aria-labelledby="147">    <span class="syn_comment" >// When switching to an iframe, ensure displaying the reload button.</span>
</code><code id="line-148" aria-labelledby="148">    <span class="syn_comment" >// As the document has already been loaded without being hooked.</span>
</code><code id="line-149" aria-labelledby="149">    <span class="syn_reserved" >if</span> (<span data-symbols="7322-8" >isFrameSwitching</span>) {
</code><code id="line-150" aria-labelledby="150">      $(<span class="syn_string" >"#reload-notice"</span>).<span data-symbols="#hidden" data-i="133" >hidden</span> = <span class="syn_reserved" >false</span>;
</code><code id="line-151" aria-labelledby="151">      $(<span class="syn_string" >"#waiting-notice"</span>).<span data-symbols="#hidden" data-i="134" >hidden</span> = <span class="syn_reserved" >true</span>;
</code><code id="line-152" aria-labelledby="152">    } <span class="syn_reserved" >else</span> {
</code><code id="line-153" aria-labelledby="153">      <span class="syn_comment" >// Otherwise, we are loading a new top level document,</span>
</code><code id="line-154" aria-labelledby="154">      <span class="syn_comment" >// so we don't need to reload anymore and should receive</span>
</code><code id="line-155" aria-labelledby="155">      <span class="syn_comment" >// new node events.</span>
</code><code id="line-156" aria-labelledby="156">      $(<span class="syn_string" >"#reload-notice"</span>).<span data-symbols="#hidden" data-i="135" >hidden</span> = <span class="syn_reserved" >true</span>;
</code><code id="line-157" aria-labelledby="157">      $(<span class="syn_string" >"#waiting-notice"</span>).<span data-symbols="#hidden" data-i="136" >hidden</span> = <span class="syn_reserved" >false</span>;
</code><code id="line-158" aria-labelledby="158">    }
</code><code id="line-159" aria-labelledby="159">
</code><code id="line-160" aria-labelledby="160">    <span class="syn_comment" >// Clear out stored audio nodes</span>
</code><code id="line-161" aria-labelledby="161">    <span data-symbols="#gAudioNodes" data-i="137" >gAudioNodes</span>.<span data-symbols="#reset,gAudioNodes#reset" data-i="138" >reset</span>();
</code><code id="line-162" aria-labelledby="162">
</code><code id="line-163" aria-labelledby="163">    <span data-symbols="#window" data-i="139" >window</span>.<span data-symbols="#emit,window#emit" data-i="140" >emit</span>(<span data-symbols="#EVENTS" data-i="141" >EVENTS</span>.<span data-symbols="#UI_RESET,EVENTS#UI_RESET" data-i="142" >UI_RESET</span>);
</code><code id="line-164" aria-labelledby="164">  },
</code><code id="line-165" aria-labelledby="165">
</code><code id="line-166" aria-labelledby="166">  <span class="syn_comment" >/**</span>
</code><code id="line-167" aria-labelledby="167"><span class="syn_comment" >   * Called after the first audio node is created in an audio context,</span>
</code><code id="line-168" aria-labelledby="168"><span class="syn_comment" >   * signaling that the audio context is being used.</span>
</code><code id="line-169" aria-labelledby="169"><span class="syn_comment" >   */</span>
</code><code id="line-170" aria-labelledby="170">  <span class="syn_def syn_def" data-symbols="#_onStartContext,WebAudioEditorController#_onStartContext" data-i="143" >_onStartContext</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-171" aria-labelledby="171">    $(<span class="syn_string" >"#reload-notice"</span>).<span data-symbols="#hidden" data-i="144" >hidden</span> = <span class="syn_reserved" >true</span>;
</code><code id="line-172" aria-labelledby="172">    $(<span class="syn_string" >"#waiting-notice"</span>).<span data-symbols="#hidden" data-i="145" >hidden</span> = <span class="syn_reserved" >true</span>;
</code><code id="line-173" aria-labelledby="173">    $(<span class="syn_string" >"#content"</span>).<span data-symbols="#hidden" data-i="146" >hidden</span> = <span class="syn_reserved" >false</span>;
</code><code id="line-174" aria-labelledby="174">    <span data-symbols="#window" data-i="147" >window</span>.<span data-symbols="#emit,window#emit" data-i="148" >emit</span>(<span data-symbols="#EVENTS" data-i="149" >EVENTS</span>.<span data-symbols="#START_CONTEXT,EVENTS#START_CONTEXT" data-i="150" >START_CONTEXT</span>);
</code><code id="line-175" aria-labelledby="175">  },
</code><code id="line-176" aria-labelledby="176">
</code><code id="line-177" aria-labelledby="177">  <span class="syn_comment" >/**</span>
</code><code id="line-178" aria-labelledby="178"><span class="syn_comment" >   * Called when a new node is created. Creates an `AudioNodeView` instance</span>
</code><code id="line-179" aria-labelledby="179"><span class="syn_comment" >   * for tracking throughout the editor.</span>
</code><code id="line-180" aria-labelledby="180"><span class="syn_comment" >   */</span>
</code><code id="line-181" aria-labelledby="181">  <span class="syn_def syn_def" data-symbols="#_onCreateNode,WebAudioEditorController#_onCreateNode" data-i="151" >_onCreateNode</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7322-9" >nodeActor</span>) {
</code><code id="line-182" aria-labelledby="182">    <span data-symbols="#gAudioNodes" data-i="152" >gAudioNodes</span>.<span data-symbols="#add,gAudioNodes#add" data-i="153" >add</span>(<span data-symbols="7322-9" >nodeActor</span>);
</code><code id="line-183" aria-labelledby="183">  },
</code><code id="line-184" aria-labelledby="184">
</code><code id="line-185" aria-labelledby="185">  <span class="syn_comment" >/**</span>
</code><code id="line-186" aria-labelledby="186"><span class="syn_comment" >   * Called on `destroy-node` when an AudioNode is GC'd. Removes</span>
</code><code id="line-187" aria-labelledby="187"><span class="syn_comment" >   * from the AudioNode array and fires an event indicating the removal.</span>
</code><code id="line-188" aria-labelledby="188"><span class="syn_comment" >   */</span>
</code><code id="line-189" aria-labelledby="189">  <span class="syn_def syn_def" data-symbols="#_onDestroyNode,WebAudioEditorController#_onDestroyNode" data-i="154" >_onDestroyNode</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7322-10" >nodeActor</span>) {
</code><code id="line-190" aria-labelledby="190">    <span data-symbols="#gAudioNodes" data-i="155" >gAudioNodes</span>.<span data-symbols="#remove,gAudioNodes#remove" data-i="156" >remove</span>(<span data-symbols="#gAudioNodes" data-i="157" >gAudioNodes</span>.<span class="syn_reserved" >get</span>(<span data-symbols="7322-10" >nodeActor</span>.<span data-symbols="#actorID,nodeActor#actorID" data-i="158" >actorID</span>));
</code><code id="line-191" aria-labelledby="191">  },
</code><code id="line-192" aria-labelledby="192">
</code><code id="line-193" aria-labelledby="193">  <span class="syn_comment" >/**</span>
</code><code id="line-194" aria-labelledby="194"><span class="syn_comment" >   * Called when a node is connected to another node.</span>
</code><code id="line-195" aria-labelledby="195"><span class="syn_comment" >   */</span>
</code><code id="line-196" aria-labelledby="196">  async <span class="syn_def syn_def" data-symbols="#_onConnectNode,WebAudioEditorController#_onConnectNode" data-i="159" >_onConnectNode</span>({ source: <span data-symbols="7322-11" >sourceActor</span>, dest: <span data-symbols="7322-12" >destActor</span> }) {
</code><code id="line-197" aria-labelledby="197">    <span class="syn_reserved" >const</span> <span data-symbols="7322-13" >source</span> = await <span data-symbols="#WebAudioEditorController" data-i="160" >WebAudioEditorController</span>.<span data-symbols="#getNode,WebAudioEditorController#getNode" data-i="161" >getNode</span>(<span data-symbols="7322-11" >sourceActor</span>);
</code><code id="line-198" aria-labelledby="198">    <span class="syn_reserved" >const</span> <span data-symbols="7322-14" >dest</span> = await <span data-symbols="#WebAudioEditorController" data-i="162" >WebAudioEditorController</span>.<span data-symbols="#getNode,WebAudioEditorController#getNode" data-i="163" >getNode</span>(<span data-symbols="7322-12" >destActor</span>);
</code><code id="line-199" aria-labelledby="199">    <span data-symbols="7322-13" >source</span>.<span data-symbols="#connect,source#connect" data-i="164" >connect</span>(<span data-symbols="7322-14" >dest</span>);
</code><code id="line-200" aria-labelledby="200">  },
</code><code id="line-201" aria-labelledby="201">
</code><code id="line-202" aria-labelledby="202">  <span class="syn_comment" >/**</span>
</code><code id="line-203" aria-labelledby="203"><span class="syn_comment" >   * Called when a node is conneceted to another node's AudioParam.</span>
</code><code id="line-204" aria-labelledby="204"><span class="syn_comment" >   */</span>
</code><code id="line-205" aria-labelledby="205">  async <span class="syn_def syn_def" data-symbols="#_onConnectParam,WebAudioEditorController#_onConnectParam" data-i="165" >_onConnectParam</span>({ source: <span data-symbols="7322-15" >sourceActor</span>, dest: <span data-symbols="7322-16" >destActor</span>, <span data-symbols="7322-17" >param</span> }) {
</code><code id="line-206" aria-labelledby="206">    <span class="syn_reserved" >const</span> <span data-symbols="7322-18" >source</span> = await <span data-symbols="#WebAudioEditorController" data-i="166" >WebAudioEditorController</span>.<span data-symbols="#getNode,WebAudioEditorController#getNode" data-i="167" >getNode</span>(<span data-symbols="7322-15" >sourceActor</span>);
</code><code id="line-207" aria-labelledby="207">    <span class="syn_reserved" >const</span> <span data-symbols="7322-19" >dest</span> = await <span data-symbols="#WebAudioEditorController" data-i="168" >WebAudioEditorController</span>.<span data-symbols="#getNode,WebAudioEditorController#getNode" data-i="169" >getNode</span>(<span data-symbols="7322-16" >destActor</span>);
</code><code id="line-208" aria-labelledby="208">    <span data-symbols="7322-18" >source</span>.<span data-symbols="#connect,source#connect" data-i="170" >connect</span>(<span data-symbols="7322-19" >dest</span>, <span data-symbols="7322-17" >param</span>);
</code><code id="line-209" aria-labelledby="209">  },
</code><code id="line-210" aria-labelledby="210">
</code><code id="line-211" aria-labelledby="211">  <span class="syn_comment" >/**</span>
</code><code id="line-212" aria-labelledby="212"><span class="syn_comment" >   * Called when a node is disconnected.</span>
</code><code id="line-213" aria-labelledby="213"><span class="syn_comment" >   */</span>
</code><code id="line-214" aria-labelledby="214">  async <span class="syn_def syn_def" data-symbols="#_onDisconnectNode,WebAudioEditorController#_onDisconnectNode" data-i="171" >_onDisconnectNode</span>(<span data-symbols="7322-20" >nodeActor</span>) {
</code><code id="line-215" aria-labelledby="215">    <span class="syn_reserved" >const</span> <span data-symbols="7322-21" >node</span> = await <span data-symbols="#WebAudioEditorController" data-i="172" >WebAudioEditorController</span>.<span data-symbols="#getNode,WebAudioEditorController#getNode" data-i="173" >getNode</span>(<span data-symbols="7322-20" >nodeActor</span>);
</code><code id="line-216" aria-labelledby="216">    <span data-symbols="7322-21" >node</span>.<span data-symbols="#disconnect,node#disconnect" data-i="174" >disconnect</span>();
</code><code id="line-217" aria-labelledby="217">  },
</code><code id="line-218" aria-labelledby="218">
</code><code id="line-219" aria-labelledby="219">  <span class="syn_comment" >/**</span>
</code><code id="line-220" aria-labelledby="220"><span class="syn_comment" >   * Called when a node param is changed.</span>
</code><code id="line-221" aria-labelledby="221"><span class="syn_comment" >   */</span>
</code><code id="line-222" aria-labelledby="222">  async <span class="syn_def syn_def" data-symbols="#_onChangeParam,WebAudioEditorController#_onChangeParam" data-i="175" >_onChangeParam</span>({ <span data-symbols="7322-22" >actor</span>, <span data-symbols="7322-23" >param</span>, <span data-symbols="7322-24" >value</span> }) {
</code><code id="line-223" aria-labelledby="223">    <span class="syn_reserved" >const</span> <span data-symbols="7322-25" >node</span> = await <span data-symbols="#WebAudioEditorController" data-i="176" >WebAudioEditorController</span>.<span data-symbols="#getNode,WebAudioEditorController#getNode" data-i="177" >getNode</span>(<span data-symbols="7322-22" >actor</span>);
</code><code id="line-224" aria-labelledby="224">    <span data-symbols="#window" data-i="178" >window</span>.<span data-symbols="#emit,window#emit" data-i="179" >emit</span>(<span data-symbols="#EVENTS" data-i="180" >EVENTS</span>.<span data-symbols="#CHANGE_PARAM,EVENTS#CHANGE_PARAM" data-i="181" >CHANGE_PARAM</span>, <span data-symbols="7322-25" >node</span>, <span data-symbols="7322-23" >param</span>, <span data-symbols="7322-24" >value</span>);
</code><code id="line-225" aria-labelledby="225">  },
</code><code id="line-226" aria-labelledby="226">};
</code></pre>      </td>
    </tr>
  </tbody>
</table>
<script>var ANALYSIS_DATA = [[[],[{"pretty":"property PrefObserver","sym":"#PrefObserver"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property gAudioNodes","sym":"#gAudioNodes"}]],[[{"pretty":"AudioNodesCollection","sym":"#AudioNodesCollection"}],[{"pretty":"property AudioNodesCollection","sym":"#AudioNodesCollection"}]],[[],[{"pretty":"property startupWebAudioEditor","sym":"#startupWebAudioEditor"}]],[[],[{"pretty":"property all","sym":"#all"}]],[[{"pretty":"WebAudioEditorController","sym":"#WebAudioEditorController"}],[{"pretty":"property WebAudioEditorController","sym":"#WebAudioEditorController"}]],[[{"pretty":"WebAudioEditorController.initialize","sym":"WebAudioEditorController#initialize"}],[{"pretty":"property initialize","sym":"#initialize"},{"pretty":"property WebAudioEditorController.initialize","sym":"WebAudioEditorController#initialize"}]],[[{"pretty":"ContextView","sym":"#ContextView"}],[{"pretty":"property ContextView","sym":"#ContextView"}]],[[{"pretty":"ContextView.initialize","sym":"ContextView#initialize"}],[{"pretty":"property initialize","sym":"#initialize"},{"pretty":"property ContextView.initialize","sym":"ContextView#initialize"}]],[[{"pretty":"InspectorView","sym":"#InspectorView"}],[{"pretty":"property InspectorView","sym":"#InspectorView"}]],[[{"pretty":"InspectorView.initialize","sym":"InspectorView#initialize"}],[{"pretty":"property initialize","sym":"#initialize"},{"pretty":"property InspectorView.initialize","sym":"InspectorView#initialize"}]],[[],[{"pretty":"property PropertiesView","sym":"#PropertiesView"}]],[[{"pretty":"PropertiesView.initialize","sym":"PropertiesView#initialize"}],[{"pretty":"property initialize","sym":"#initialize"},{"pretty":"property PropertiesView.initialize","sym":"PropertiesView#initialize"}]],[[{"pretty":"AutomationView","sym":"#AutomationView"}],[{"pretty":"property AutomationView","sym":"#AutomationView"}]],[[{"pretty":"AutomationView.initialize","sym":"AutomationView#initialize"}],[{"pretty":"property initialize","sym":"#initialize"},{"pretty":"property AutomationView.initialize","sym":"AutomationView#initialize"}]],[[],[{"pretty":"property shutdownWebAudioEditor","sym":"#shutdownWebAudioEditor"}]],[[],[{"pretty":"property all","sym":"#all"}]],[[{"pretty":"WebAudioEditorController","sym":"#WebAudioEditorController"}],[{"pretty":"property WebAudioEditorController","sym":"#WebAudioEditorController"}]],[[{"pretty":"WebAudioEditorController.destroy","sym":"WebAudioEditorController#destroy"}],[{"pretty":"property destroy","sym":"#destroy"},{"pretty":"property WebAudioEditorController.destroy","sym":"WebAudioEditorController#destroy"}]],[[{"pretty":"ContextView","sym":"#ContextView"}],[{"pretty":"property ContextView","sym":"#ContextView"}]],[[{"pretty":"ContextView.destroy","sym":"ContextView#destroy"}],[{"pretty":"property destroy","sym":"#destroy"},{"pretty":"property ContextView.destroy","sym":"ContextView#destroy"}]],[[{"pretty":"InspectorView","sym":"#InspectorView"}],[{"pretty":"property InspectorView","sym":"#InspectorView"}]],[[{"pretty":"InspectorView.destroy","sym":"InspectorView#destroy"}],[{"pretty":"property destroy","sym":"#destroy"},{"pretty":"property InspectorView.destroy","sym":"InspectorView#destroy"}]],[[],[{"pretty":"property PropertiesView","sym":"#PropertiesView"}]],[[{"pretty":"PropertiesView.destroy","sym":"PropertiesView#destroy"}],[{"pretty":"property destroy","sym":"#destroy"},{"pretty":"property PropertiesView.destroy","sym":"PropertiesView#destroy"}]],[[{"pretty":"AutomationView","sym":"#AutomationView"}],[{"pretty":"property AutomationView","sym":"#AutomationView"}]],[[{"pretty":"AutomationView.destroy","sym":"AutomationView#destroy"}],[{"pretty":"property destroy","sym":"#destroy"},{"pretty":"property AutomationView.destroy","sym":"AutomationView#destroy"}]],[[],[{"pretty":"property WebAudioEditorController","sym":"#WebAudioEditorController"}]],[[],[{"pretty":"property initialize","sym":"#initialize"},{"pretty":"property WebAudioEditorController.initialize","sym":"WebAudioEditorController#initialize"}]],[[{"pretty":"WebAudioEditorController._onTabWillNavigate","sym":"WebAudioEditorController#_onTabWillNavigate"}],[{"pretty":"property _onTabWillNavigate","sym":"#_onTabWillNavigate"},{"pretty":"property WebAudioEditorController._onTabWillNavigate","sym":"WebAudioEditorController#_onTabWillNavigate"}]],[[],[{"pretty":"property _onTabWillNavigate","sym":"#_onTabWillNavigate"},{"pretty":"property _onTabWillNavigate._onTabWillNavigate","sym":"_onTabWillNavigate#_onTabWillNavigate"}]],[[],[{"pretty":"property bind","sym":"#bind"}]],[[{"pretty":"WebAudioEditorController._onThemeChange","sym":"WebAudioEditorController#_onThemeChange"}],[{"pretty":"property _onThemeChange","sym":"#_onThemeChange"},{"pretty":"property WebAudioEditorController._onThemeChange","sym":"WebAudioEditorController#_onThemeChange"}]],[[],[{"pretty":"property _onThemeChange","sym":"#_onThemeChange"},{"pretty":"property _onThemeChange._onThemeChange","sym":"_onThemeChange#_onThemeChange"}]],[[],[{"pretty":"property bind","sym":"#bind"}]],[[],[{"pretty":"property gTarget","sym":"#gTarget"}]],[[],[{"pretty":"property on","sym":"#on"},{"pretty":"property gTarget.on","sym":"gTarget#on"}]],[[{"pretty":"WebAudioEditorController._onTabWillNavigate","sym":"WebAudioEditorController#_onTabWillNavigate"}],[{"pretty":"property _onTabWillNavigate","sym":"#_onTabWillNavigate"},{"pretty":"property WebAudioEditorController._onTabWillNavigate","sym":"WebAudioEditorController#_onTabWillNavigate"}]],[[],[{"pretty":"property gFront","sym":"#gFront"}]],[[],[{"pretty":"property on","sym":"#on"},{"pretty":"property gFront.on","sym":"gFront#on"}]],[[{"pretty":"WebAudioEditorController._onStartContext","sym":"WebAudioEditorController#_onStartContext"}],[{"pretty":"property _onStartContext","sym":"#_onStartContext"},{"pretty":"property WebAudioEditorController._onStartContext","sym":"WebAudioEditorController#_onStartContext"}]],[[],[{"pretty":"property gFront","sym":"#gFront"}]],[[],[{"pretty":"property on","sym":"#on"},{"pretty":"property gFront.on","sym":"gFront#on"}]],[[{"pretty":"WebAudioEditorController._onCreateNode","sym":"WebAudioEditorController#_onCreateNode"}],[{"pretty":"property _onCreateNode","sym":"#_onCreateNode"},{"pretty":"property WebAudioEditorController._onCreateNode","sym":"WebAudioEditorController#_onCreateNode"}]],[[],[{"pretty":"property gFront","sym":"#gFront"}]],[[],[{"pretty":"property on","sym":"#on"},{"pretty":"property gFront.on","sym":"gFront#on"}]],[[{"pretty":"WebAudioEditorController._onConnectNode","sym":"WebAudioEditorController#_onConnectNode"}],[{"pretty":"property _onConnectNode","sym":"#_onConnectNode"},{"pretty":"property WebAudioEditorController._onConnectNode","sym":"WebAudioEditorController#_onConnectNode"}]],[[],[{"pretty":"property gFront","sym":"#gFront"}]],[[],[{"pretty":"property on","sym":"#on"},{"pretty":"property gFront.on","sym":"gFront#on"}]],[[{"pretty":"WebAudioEditorController._onConnectParam","sym":"WebAudioEditorController#_onConnectParam"}],[{"pretty":"property _onConnectParam","sym":"#_onConnectParam"},{"pretty":"property WebAudioEditorController._onConnectParam","sym":"WebAudioEditorController#_onConnectParam"}]],[[],[{"pretty":"property gFront","sym":"#gFront"}]],[[],[{"pretty":"property on","sym":"#on"},{"pretty":"property gFront.on","sym":"gFront#on"}]],[[{"pretty":"WebAudioEditorController._onDisconnectNode","sym":"WebAudioEditorController#_onDisconnectNode"}],[{"pretty":"property _onDisconnectNode","sym":"#_onDisconnectNode"},{"pretty":"property WebAudioEditorController._onDisconnectNode","sym":"WebAudioEditorController#_onDisconnectNode"}]],[[],[{"pretty":"property gFront","sym":"#gFront"}]],[[],[{"pretty":"property on","sym":"#on"},{"pretty":"property gFront.on","sym":"gFront#on"}]],[[{"pretty":"WebAudioEditorController._onChangeParam","sym":"WebAudioEditorController#_onChangeParam"}],[{"pretty":"property _onChangeParam","sym":"#_onChangeParam"},{"pretty":"property WebAudioEditorController._onChangeParam","sym":"WebAudioEditorController#_onChangeParam"}]],[[],[{"pretty":"property gFront","sym":"#gFront"}]],[[],[{"pretty":"property on","sym":"#on"},{"pretty":"property gFront.on","sym":"gFront#on"}]],[[{"pretty":"WebAudioEditorController._onDestroyNode","sym":"WebAudioEditorController#_onDestroyNode"}],[{"pretty":"property _onDestroyNode","sym":"#_onDestroyNode"},{"pretty":"property WebAudioEditorController._onDestroyNode","sym":"WebAudioEditorController#_onDestroyNode"}]],[[{"pretty":"_prefObserver","sym":"#_prefObserver"}],[{"pretty":"property _prefObserver","sym":"#_prefObserver"},{"pretty":"property WebAudioEditorController._prefObserver","sym":"WebAudioEditorController#_prefObserver"}]],[[],[{"pretty":"property PrefObserver","sym":"#PrefObserver"}]],[[{"pretty":"_prefObserver","sym":"#_prefObserver"}],[{"pretty":"property _prefObserver","sym":"#_prefObserver"},{"pretty":"property WebAudioEditorController._prefObserver","sym":"WebAudioEditorController#_prefObserver"}]],[[],[{"pretty":"property on","sym":"#on"}]],[[{"pretty":"WebAudioEditorController._onThemeChange","sym":"WebAudioEditorController#_onThemeChange"}],[{"pretty":"property _onThemeChange","sym":"#_onThemeChange"},{"pretty":"property WebAudioEditorController._onThemeChange","sym":"WebAudioEditorController#_onThemeChange"}]],[[],[{"pretty":"property gTarget","sym":"#gTarget"}]],[[{"pretty":"actorHasMethod","sym":"#actorHasMethod"}],[{"pretty":"property actorHasMethod","sym":"#actorHasMethod"},{"pretty":"property gTarget.actorHasMethod","sym":"gTarget#actorHasMethod"}]],[[],[{"pretty":"property AUDIO_NODE_DEFINITION","sym":"#AUDIO_NODE_DEFINITION"}]],[[],[{"pretty":"property gFront","sym":"#gFront"}]],[[],[{"pretty":"property getDefinition","sym":"#getDefinition"},{"pretty":"property gFront.getDefinition","sym":"gFront#getDefinition"}]],[[],[{"pretty":"property AUDIO_NODE_DEFINITION","sym":"#AUDIO_NODE_DEFINITION"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property gFront","sym":"#gFront"}]],[[],[{"pretty":"property setup","sym":"#setup"},{"pretty":"property gFront.setup","sym":"gFront#setup"}]],[[],[{"pretty":"property reload","sym":"#reload"},{"pretty":"property WebAudioEditorController.reload","sym":"WebAudioEditorController#reload"}]],[[],[{"pretty":"property destroy","sym":"#destroy"},{"pretty":"property WebAudioEditorController.destroy","sym":"WebAudioEditorController#destroy"}]],[[],[{"pretty":"property gTarget","sym":"#gTarget"}]],[[],[{"pretty":"property off","sym":"#off"},{"pretty":"property gTarget.off","sym":"gTarget#off"}]],[[{"pretty":"WebAudioEditorController._onTabWillNavigate","sym":"WebAudioEditorController#_onTabWillNavigate"}],[{"pretty":"property _onTabWillNavigate","sym":"#_onTabWillNavigate"},{"pretty":"property WebAudioEditorController._onTabWillNavigate","sym":"WebAudioEditorController#_onTabWillNavigate"}]],[[],[{"pretty":"property gFront","sym":"#gFront"}]],[[],[{"pretty":"property off","sym":"#off"},{"pretty":"property gFront.off","sym":"gFront#off"}]],[[{"pretty":"WebAudioEditorController._onStartContext","sym":"WebAudioEditorController#_onStartContext"}],[{"pretty":"property _onStartContext","sym":"#_onStartContext"},{"pretty":"property WebAudioEditorController._onStartContext","sym":"WebAudioEditorController#_onStartContext"}]],[[],[{"pretty":"property gFront","sym":"#gFront"}]],[[],[{"pretty":"property off","sym":"#off"},{"pretty":"property gFront.off","sym":"gFront#off"}]],[[{"pretty":"WebAudioEditorController._onCreateNode","sym":"WebAudioEditorController#_onCreateNode"}],[{"pretty":"property _onCreateNode","sym":"#_onCreateNode"},{"pretty":"property WebAudioEditorController._onCreateNode","sym":"WebAudioEditorController#_onCreateNode"}]],[[],[{"pretty":"property gFront","sym":"#gFront"}]],[[],[{"pretty":"property off","sym":"#off"},{"pretty":"property gFront.off","sym":"gFront#off"}]],[[{"pretty":"WebAudioEditorController._onConnectNode","sym":"WebAudioEditorController#_onConnectNode"}],[{"pretty":"property _onConnectNode","sym":"#_onConnectNode"},{"pretty":"property WebAudioEditorController._onConnectNode","sym":"WebAudioEditorController#_onConnectNode"}]],[[],[{"pretty":"property gFront","sym":"#gFront"}]],[[],[{"pretty":"property off","sym":"#off"},{"pretty":"property gFront.off","sym":"gFront#off"}]],[[{"pretty":"WebAudioEditorController._onConnectParam","sym":"WebAudioEditorController#_onConnectParam"}],[{"pretty":"property _onConnectParam","sym":"#_onConnectParam"},{"pretty":"property WebAudioEditorController._onConnectParam","sym":"WebAudioEditorController#_onConnectParam"}]],[[],[{"pretty":"property gFront","sym":"#gFront"}]],[[],[{"pretty":"property off","sym":"#off"},{"pretty":"property gFront.off","sym":"gFront#off"}]],[[{"pretty":"WebAudioEditorController._onDisconnectNode","sym":"WebAudioEditorController#_onDisconnectNode"}],[{"pretty":"property _onDisconnectNode","sym":"#_onDisconnectNode"},{"pretty":"property WebAudioEditorController._onDisconnectNode","sym":"WebAudioEditorController#_onDisconnectNode"}]],[[],[{"pretty":"property gFront","sym":"#gFront"}]],[[],[{"pretty":"property off","sym":"#off"},{"pretty":"property gFront.off","sym":"gFront#off"}]],[[{"pretty":"WebAudioEditorController._onChangeParam","sym":"WebAudioEditorController#_onChangeParam"}],[{"pretty":"property _onChangeParam","sym":"#_onChangeParam"},{"pretty":"property WebAudioEditorController._onChangeParam","sym":"WebAudioEditorController#_onChangeParam"}]],[[],[{"pretty":"property gFront","sym":"#gFront"}]],[[],[{"pretty":"property off","sym":"#off"},{"pretty":"property gFront.off","sym":"gFront#off"}]],[[{"pretty":"WebAudioEditorController._onDestroyNode","sym":"WebAudioEditorController#_onDestroyNode"}],[{"pretty":"property _onDestroyNode","sym":"#_onDestroyNode"},{"pretty":"property WebAudioEditorController._onDestroyNode","sym":"WebAudioEditorController#_onDestroyNode"}]],[[{"pretty":"_prefObserver","sym":"#_prefObserver"}],[{"pretty":"property _prefObserver","sym":"#_prefObserver"},{"pretty":"property WebAudioEditorController._prefObserver","sym":"WebAudioEditorController#_prefObserver"}]],[[],[{"pretty":"property off","sym":"#off"}]],[[{"pretty":"WebAudioEditorController._onThemeChange","sym":"WebAudioEditorController#_onThemeChange"}],[{"pretty":"property _onThemeChange","sym":"#_onThemeChange"},{"pretty":"property WebAudioEditorController._onThemeChange","sym":"WebAudioEditorController#_onThemeChange"}]],[[{"pretty":"_prefObserver","sym":"#_prefObserver"}],[{"pretty":"property _prefObserver","sym":"#_prefObserver"},{"pretty":"property WebAudioEditorController._prefObserver","sym":"WebAudioEditorController#_prefObserver"}]],[[],[{"pretty":"property destroy","sym":"#destroy"}]],[[],[{"pretty":"property reset","sym":"#reset"},{"pretty":"property WebAudioEditorController.reset","sym":"WebAudioEditorController#reset"}]],[[],[{"pretty":"property hidden","sym":"#hidden"}]],[[{"pretty":"ContextView","sym":"#ContextView"}],[{"pretty":"property ContextView","sym":"#ContextView"}]],[[{"pretty":"ContextView.resetUI","sym":"ContextView#resetUI"}],[{"pretty":"property resetUI","sym":"#resetUI"},{"pretty":"property ContextView.resetUI","sym":"ContextView#resetUI"}]],[[{"pretty":"InspectorView","sym":"#InspectorView"}],[{"pretty":"property InspectorView","sym":"#InspectorView"}]],[[{"pretty":"InspectorView.resetUI","sym":"InspectorView#resetUI"}],[{"pretty":"property resetUI","sym":"#resetUI"},{"pretty":"property InspectorView.resetUI","sym":"InspectorView#resetUI"}]],[[],[{"pretty":"property PropertiesView","sym":"#PropertiesView"}]],[[{"pretty":"PropertiesView.resetUI","sym":"PropertiesView#resetUI"}],[{"pretty":"property resetUI","sym":"#resetUI"},{"pretty":"property PropertiesView.resetUI","sym":"PropertiesView#resetUI"}]],[[],[{"pretty":"property getNode","sym":"#getNode"},{"pretty":"property WebAudioEditorController.getNode","sym":"WebAudioEditorController#getNode"}]],[[],[{"pretty":"property actorID","sym":"#actorID"},{"pretty":"property nodeActor.actorID","sym":"nodeActor#actorID"}]],[[{"pretty":"gAudioNodes","sym":"#gAudioNodes"}],[{"pretty":"property gAudioNodes","sym":"#gAudioNodes"}]],[[],[{"pretty":"property defer","sym":"#defer"}]],[[{"pretty":"gAudioNodes","sym":"#gAudioNodes"}],[{"pretty":"property gAudioNodes","sym":"#gAudioNodes"}]],[[],[{"pretty":"property on","sym":"#on"},{"pretty":"property gAudioNodes.on","sym":"gAudioNodes#on"}]],[[],[{"pretty":"property id","sym":"#id"},{"pretty":"property createdNode.id","sym":"createdNode#id"}]],[[{"pretty":"gAudioNodes","sym":"#gAudioNodes"}],[{"pretty":"property gAudioNodes","sym":"#gAudioNodes"}]],[[],[{"pretty":"property off","sym":"#off"},{"pretty":"property gAudioNodes.off","sym":"gAudioNodes#off"}]],[[],[{"pretty":"property createNodeListener","sym":"#createNodeListener"}]],[[],[{"pretty":"property _onThemeChange","sym":"#_onThemeChange"},{"pretty":"property WebAudioEditorController._onThemeChange","sym":"WebAudioEditorController#_onThemeChange"}]],[[],[{"pretty":"property Services","sym":"#Services"}]],[[],[{"pretty":"property prefs","sym":"#prefs"},{"pretty":"property Services.prefs","sym":"Services#prefs"}]],[[],[{"pretty":"property getCharPref","sym":"#getCharPref"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property emit","sym":"#emit"},{"pretty":"property window.emit","sym":"window#emit"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[{"pretty":"EVENTS.THEME_CHANGE","sym":"EVENTS#THEME_CHANGE"}],[{"pretty":"property THEME_CHANGE","sym":"#THEME_CHANGE"},{"pretty":"property EVENTS.THEME_CHANGE","sym":"EVENTS#THEME_CHANGE"}]],[[],[{"pretty":"property _onTabWillNavigate","sym":"#_onTabWillNavigate"},{"pretty":"property WebAudioEditorController._onTabWillNavigate","sym":"WebAudioEditorController#_onTabWillNavigate"}]],[[{"pretty":"WebAudioEditorController.reset","sym":"WebAudioEditorController#reset"}],[{"pretty":"property reset","sym":"#reset"},{"pretty":"property WebAudioEditorController.reset","sym":"WebAudioEditorController#reset"}]],[[],[{"pretty":"property hidden","sym":"#hidden"}]],[[],[{"pretty":"property hidden","sym":"#hidden"}]],[[],[{"pretty":"property hidden","sym":"#hidden"}]],[[],[{"pretty":"property hidden","sym":"#hidden"}]],[[{"pretty":"gAudioNodes","sym":"#gAudioNodes"}],[{"pretty":"property gAudioNodes","sym":"#gAudioNodes"}]],[[],[{"pretty":"property reset","sym":"#reset"},{"pretty":"property gAudioNodes.reset","sym":"gAudioNodes#reset"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property emit","sym":"#emit"},{"pretty":"property window.emit","sym":"window#emit"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[],[{"pretty":"property UI_RESET","sym":"#UI_RESET"},{"pretty":"property EVENTS.UI_RESET","sym":"EVENTS#UI_RESET"}]],[[],[{"pretty":"property _onStartContext","sym":"#_onStartContext"},{"pretty":"property WebAudioEditorController._onStartContext","sym":"WebAudioEditorController#_onStartContext"}]],[[],[{"pretty":"property hidden","sym":"#hidden"}]],[[],[{"pretty":"property hidden","sym":"#hidden"}]],[[],[{"pretty":"property hidden","sym":"#hidden"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property emit","sym":"#emit"},{"pretty":"property window.emit","sym":"window#emit"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[{"pretty":"EVENTS.START_CONTEXT","sym":"EVENTS#START_CONTEXT"}],[{"pretty":"property START_CONTEXT","sym":"#START_CONTEXT"},{"pretty":"property EVENTS.START_CONTEXT","sym":"EVENTS#START_CONTEXT"}]],[[],[{"pretty":"property _onCreateNode","sym":"#_onCreateNode"},{"pretty":"property WebAudioEditorController._onCreateNode","sym":"WebAudioEditorController#_onCreateNode"}]],[[{"pretty":"gAudioNodes","sym":"#gAudioNodes"}],[{"pretty":"property gAudioNodes","sym":"#gAudioNodes"}]],[[],[{"pretty":"property add","sym":"#add"},{"pretty":"property gAudioNodes.add","sym":"gAudioNodes#add"}]],[[],[{"pretty":"property _onDestroyNode","sym":"#_onDestroyNode"},{"pretty":"property WebAudioEditorController._onDestroyNode","sym":"WebAudioEditorController#_onDestroyNode"}]],[[{"pretty":"gAudioNodes","sym":"#gAudioNodes"}],[{"pretty":"property gAudioNodes","sym":"#gAudioNodes"}]],[[],[{"pretty":"property remove","sym":"#remove"},{"pretty":"property gAudioNodes.remove","sym":"gAudioNodes#remove"}]],[[{"pretty":"gAudioNodes","sym":"#gAudioNodes"}],[{"pretty":"property gAudioNodes","sym":"#gAudioNodes"}]],[[],[{"pretty":"property actorID","sym":"#actorID"},{"pretty":"property nodeActor.actorID","sym":"nodeActor#actorID"}]],[[],[{"pretty":"property _onConnectNode","sym":"#_onConnectNode"},{"pretty":"property WebAudioEditorController._onConnectNode","sym":"WebAudioEditorController#_onConnectNode"}]],[[{"pretty":"WebAudioEditorController","sym":"#WebAudioEditorController"}],[{"pretty":"property WebAudioEditorController","sym":"#WebAudioEditorController"}]],[[{"pretty":"WebAudioEditorController.getNode","sym":"WebAudioEditorController#getNode"}],[{"pretty":"property getNode","sym":"#getNode"},{"pretty":"property WebAudioEditorController.getNode","sym":"WebAudioEditorController#getNode"}]],[[{"pretty":"WebAudioEditorController","sym":"#WebAudioEditorController"}],[{"pretty":"property WebAudioEditorController","sym":"#WebAudioEditorController"}]],[[{"pretty":"WebAudioEditorController.getNode","sym":"WebAudioEditorController#getNode"}],[{"pretty":"property getNode","sym":"#getNode"},{"pretty":"property WebAudioEditorController.getNode","sym":"WebAudioEditorController#getNode"}]],[[],[{"pretty":"property connect","sym":"#connect"},{"pretty":"property source.connect","sym":"source#connect"}]],[[],[{"pretty":"property _onConnectParam","sym":"#_onConnectParam"},{"pretty":"property WebAudioEditorController._onConnectParam","sym":"WebAudioEditorController#_onConnectParam"}]],[[{"pretty":"WebAudioEditorController","sym":"#WebAudioEditorController"}],[{"pretty":"property WebAudioEditorController","sym":"#WebAudioEditorController"}]],[[{"pretty":"WebAudioEditorController.getNode","sym":"WebAudioEditorController#getNode"}],[{"pretty":"property getNode","sym":"#getNode"},{"pretty":"property WebAudioEditorController.getNode","sym":"WebAudioEditorController#getNode"}]],[[{"pretty":"WebAudioEditorController","sym":"#WebAudioEditorController"}],[{"pretty":"property WebAudioEditorController","sym":"#WebAudioEditorController"}]],[[{"pretty":"WebAudioEditorController.getNode","sym":"WebAudioEditorController#getNode"}],[{"pretty":"property getNode","sym":"#getNode"},{"pretty":"property WebAudioEditorController.getNode","sym":"WebAudioEditorController#getNode"}]],[[],[{"pretty":"property connect","sym":"#connect"},{"pretty":"property source.connect","sym":"source#connect"}]],[[],[{"pretty":"property _onDisconnectNode","sym":"#_onDisconnectNode"},{"pretty":"property WebAudioEditorController._onDisconnectNode","sym":"WebAudioEditorController#_onDisconnectNode"}]],[[{"pretty":"WebAudioEditorController","sym":"#WebAudioEditorController"}],[{"pretty":"property WebAudioEditorController","sym":"#WebAudioEditorController"}]],[[{"pretty":"WebAudioEditorController.getNode","sym":"WebAudioEditorController#getNode"}],[{"pretty":"property getNode","sym":"#getNode"},{"pretty":"property WebAudioEditorController.getNode","sym":"WebAudioEditorController#getNode"}]],[[],[{"pretty":"property disconnect","sym":"#disconnect"},{"pretty":"property node.disconnect","sym":"node#disconnect"}]],[[],[{"pretty":"property _onChangeParam","sym":"#_onChangeParam"},{"pretty":"property WebAudioEditorController._onChangeParam","sym":"WebAudioEditorController#_onChangeParam"}]],[[{"pretty":"WebAudioEditorController","sym":"#WebAudioEditorController"}],[{"pretty":"property WebAudioEditorController","sym":"#WebAudioEditorController"}]],[[{"pretty":"WebAudioEditorController.getNode","sym":"WebAudioEditorController#getNode"}],[{"pretty":"property getNode","sym":"#getNode"},{"pretty":"property WebAudioEditorController.getNode","sym":"WebAudioEditorController#getNode"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property emit","sym":"#emit"},{"pretty":"property window.emit","sym":"window#emit"}]],[[],[{"pretty":"property EVENTS","sym":"#EVENTS"}]],[[],[{"pretty":"property CHANGE_PARAM","sym":"#CHANGE_PARAM"},{"pretty":"property EVENTS.CHANGE_PARAM","sym":"EVENTS#CHANGE_PARAM"}]]];</script>
    </div>
  <div id="foot" class="footer">
    This page was generated by Searchfox <span class="pretty-date" data-datetime="Wed, 13 Feb 2019 15:28:42 +0000"></span>.
  </div>
  <span id="data" data-root="/" data-search="/mozilla-central/search" data-tree="mozilla-central" data-path="devtools/client/webaudioeditor/controller.js"></span>
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
