<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8" />
  <link href="/static/icons/search.png" rel="shortcut icon">
  <title>browser_wa_inspector-toggle.js - mozsearch</title>
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
<div class="breadcrumbs"><a href="/mozilla-central/source/">mozilla-central</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools">devtools</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client">client</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor">webaudioeditor</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/test">test</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/test/browser_wa_inspector-toggle.js">browser_wa_inspector-toggle.js</a></div>
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
  <a href="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/test/browser_wa_inspector-toggle.js" title="Permalink" class="icon" data-update-link="true" data-link="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/test/browser_wa_inspector-toggle.js">Permalink <span class="accel">Y</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/log/tip/devtools/client/webaudioeditor/test/browser_wa_inspector-toggle.js" title="Log" class="icon">Log <span class="accel">L</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/raw-file/tip/devtools/client/webaudioeditor/test/browser_wa_inspector-toggle.js" title="Raw" class="icon">Raw <span class="accel">R</span></a>
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
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#1" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l2" class="line-number">2
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#2" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l3" class="line-number">3
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#3" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l4" class="line-number">4
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#4" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l5" class="line-number">5
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#5" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l6" class="line-number">6
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#6" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l7" class="line-number">7
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#7" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l8" class="line-number">8
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#8" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l9" class="line-number">9
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#9" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l10" class="line-number">10
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#10" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l11" class="line-number">11
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#11" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l12" class="line-number">12
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#12" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l13" class="line-number">13
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#13" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l14" class="line-number">14
<div class="blame-strip c2" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#14" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l15" class="line-number">15
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#15" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l16" class="line-number">16
<div class="blame-strip c2" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#16" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l17" class="line-number">17
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#17" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l18" class="line-number">18
<div class="blame-strip c2" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#20" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l19" class="line-number">19
<div class="blame-strip c1" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#19" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l20" class="line-number">20
<div class="blame-strip c2" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#22" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l21" class="line-number">21
<div class="blame-strip c1" data-blame="76baf9e8d67bf3c9c883264c490cdb19038445d5#%#21" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l22" class="line-number">22
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#22" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l23" class="line-number">23
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#23" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l24" class="line-number">24
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#24" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l25" class="line-number">25
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#25" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l26" class="line-number">26
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#26" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l27" class="line-number">27
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l28" class="line-number">28
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#28" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l29" class="line-number">29
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#29" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l30" class="line-number">30
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#30" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l31" class="line-number">31
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#31" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l32" class="line-number">32
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#32" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l33" class="line-number">33
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#33" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l34" class="line-number">34
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#34" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l35" class="line-number">35
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#35" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l36" class="line-number">36
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#36" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l37" class="line-number">37
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#39" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l38" class="line-number">38
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#40" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l39" class="line-number">39
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#41" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l40" class="line-number">40
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#40" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l41" class="line-number">41
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#43" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l42" class="line-number">42
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#44" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l43" class="line-number">43
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#45" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l44" class="line-number">44
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#46" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l45" class="line-number">45
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#47" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l46" class="line-number">46
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#46" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l47" class="line-number">47
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#49" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l48" class="line-number">48
<div class="blame-strip c2" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#50" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l49" class="line-number">49
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#51" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l50" class="line-number">50
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#52" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l51" class="line-number">51
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#53" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l52" class="line-number">52
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#52" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l53" class="line-number">53
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#56" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l54" class="line-number">54
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#57" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l55" class="line-number">55
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#58" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l56" class="line-number">56
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#59" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l57" class="line-number">57
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#60" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l58" class="line-number">58
<div class="blame-strip c1" data-blame="80f663c70857bdbdb03bf59d01a1f8f30ce55314#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#63" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l59" class="line-number">59
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#59" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l60" class="line-number">60
<div class="blame-strip c1" data-blame="3c0bacbcdc816623a9982b930c0638c78ab4a2c5#browser/devtools/webaudioeditor/test/browser_wa_inspector-toggle.js#65" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
      </td>
      <td class="code">
<pre><code id="line-1" aria-labelledby="1"><span class="syn_comment" >/* Any copyright is dedicated to the Public Domain.</span>
</code><code id="line-2" aria-labelledby="2"><span class="syn_comment" >   <a href="http://creativecommons.org/publicdomain/zero/1.0/">http://creativecommons.org/publicdomain/zero/1.0/</a> */</span>
</code><code id="line-3" aria-labelledby="3">
</code><code id="line-4" aria-labelledby="4"><span class="syn_comment" >/**</span>
</code><code id="line-5" aria-labelledby="5"><span class="syn_comment" > * Tests that the inspector toggle button shows and hides</span>
</code><code id="line-6" aria-labelledby="6"><span class="syn_comment" > * the inspector panel as intended.</span>
</code><code id="line-7" aria-labelledby="7"><span class="syn_comment" > */</span>
</code><code id="line-8" aria-labelledby="8">
</code><code id="line-9" aria-labelledby="9"><span data-symbols="#add_task" data-i="0" >add_task</span>(async <span class="syn_reserved" >function</span>() {
</code><code id="line-10" aria-labelledby="10">  <span class="syn_reserved" >const</span> { <span data-symbols="7360-0" >target</span>, <span data-symbols="7360-1" >panel</span> } = await <span data-symbols="#initWebAudioEditor" data-i="1" >initWebAudioEditor</span>(<span data-symbols="#SIMPLE_CONTEXT_URL" data-i="2" >SIMPLE_CONTEXT_URL</span>);
</code><code id="line-11" aria-labelledby="11">  <span class="syn_reserved" >const</span> { <span data-symbols="7360-2" >panelWin</span> } = <span data-symbols="7360-1" >panel</span>;
</code><code id="line-12" aria-labelledby="12">  <span class="syn_reserved" >const</span> { <span data-symbols="7360-3" >gFront</span>, $, $$, <span data-symbols="7360-6" >EVENTS</span>, <span data-symbols="7360-7" >InspectorView</span> } = <span data-symbols="7360-2" >panelWin</span>;
</code><code id="line-13" aria-labelledby="13">  <span class="syn_reserved" >const</span> <span data-symbols="7360-8" >gVars</span> = <span data-symbols="7360-7" >InspectorView</span>.<span data-symbols="#_propsView,InspectorView#_propsView" data-i="3" >_propsView</span>;
</code><code id="line-14" aria-labelledby="14">
</code><code id="line-15" aria-labelledby="15">  <span class="syn_reserved" >const</span> <span data-symbols="7360-9" >started</span> = <span data-symbols="#once" data-i="4" >once</span>(<span data-symbols="7360-3" >gFront</span>, <span class="syn_string" >"start-context"</span>);
</code><code id="line-16" aria-labelledby="16">
</code><code id="line-17" aria-labelledby="17">  <span class="syn_reserved" >const</span> <span data-symbols="7360-10" >events</span> = <span data-symbols="#Promise" data-i="5" >Promise</span>.<span data-symbols="#all,Promise#all" data-i="6" >all</span>([
</code><code id="line-18" aria-labelledby="18">    <span data-symbols="#get3" data-i="7" >get3</span>(<span data-symbols="7360-3" >gFront</span>, <span class="syn_string" >"create-node"</span>),
</code><code id="line-19" aria-labelledby="19">    <span data-symbols="#waitForGraphRendered" data-i="8" >waitForGraphRendered</span>(<span data-symbols="7360-2" >panelWin</span>, 3, 2),
</code><code id="line-20" aria-labelledby="20">  ]);
</code><code id="line-21" aria-labelledby="21">  <span data-symbols="#reload" data-i="9" >reload</span>(<span data-symbols="7360-0" >target</span>);
</code><code id="line-22" aria-labelledby="22">  <span class="syn_reserved" >const</span> [<span data-symbols="7360-11" >actors</span>] = await <span data-symbols="7360-10" >events</span>;
</code><code id="line-23" aria-labelledby="23">  <span class="syn_reserved" >const</span> <span data-symbols="7360-12" >nodeIds</span> = <span data-symbols="7360-11" >actors</span>.<span data-symbols="#map,actors#map" data-i="10" >map</span>(<span data-symbols="7360-13" >actor</span> => <span data-symbols="7360-13" >actor</span>.<span data-symbols="#actorID,actor#actorID" data-i="11" >actorID</span>);
</code><code id="line-24" aria-labelledby="24">
</code><code id="line-25" aria-labelledby="25">  <span data-symbols="#ok" data-i="12" >ok</span>(!<span data-symbols="7360-7" >InspectorView</span>.<span data-symbols="#isVisible,InspectorView#isVisible" data-i="13" >isVisible</span>(), <span class="syn_string" >"InspectorView hidden on start."</span>);
</code><code id="line-26" aria-labelledby="26">
</code><code id="line-27" aria-labelledby="27">  <span class="syn_comment" >// Open inspector pane</span>
</code><code id="line-28" aria-labelledby="28">  $(<span class="syn_string" >"#inspector-pane-toggle"</span>).<span data-symbols="#click" data-i="14" >click</span>();
</code><code id="line-29" aria-labelledby="29">  await <span data-symbols="#once" data-i="15" >once</span>(<span data-symbols="7360-2" >panelWin</span>, <span data-symbols="7360-6" >EVENTS</span>.<span data-symbols="#UI_INSPECTOR_TOGGLED,EVENTS#UI_INSPECTOR_TOGGLED" data-i="16" >UI_INSPECTOR_TOGGLED</span>);
</code><code id="line-30" aria-labelledby="30">
</code><code id="line-31" aria-labelledby="31">  <span data-symbols="#ok" data-i="17" >ok</span>(<span data-symbols="7360-7" >InspectorView</span>.<span data-symbols="#isVisible,InspectorView#isVisible" data-i="18" >isVisible</span>(), <span class="syn_string" >"InspectorView shown after toggling."</span>);
</code><code id="line-32" aria-labelledby="32">
</code><code id="line-33" aria-labelledby="33">  <span data-symbols="#ok" data-i="19" >ok</span>(<span data-symbols="#isVisible" data-i="20" >isVisible</span>($(<span class="syn_string" >"#web-audio-editor-details-pane-empty"</span>)),
</code><code id="line-34" aria-labelledby="34">    <span class="syn_string" >"InspectorView empty message should still be visible."</span>);
</code><code id="line-35" aria-labelledby="35">  <span data-symbols="#ok" data-i="21" >ok</span>(!<span data-symbols="#isVisible" data-i="22" >isVisible</span>($(<span class="syn_string" >"#web-audio-editor-tabs"</span>)),
</code><code id="line-36" aria-labelledby="36">    <span class="syn_string" >"InspectorView tabs view should still be hidden."</span>);
</code><code id="line-37" aria-labelledby="37">
</code><code id="line-38" aria-labelledby="38">  <span class="syn_comment" >// Close inspector pane</span>
</code><code id="line-39" aria-labelledby="39">  $(<span class="syn_string" >"#inspector-pane-toggle"</span>).<span data-symbols="#click" data-i="23" >click</span>();
</code><code id="line-40" aria-labelledby="40">  await <span data-symbols="#once" data-i="24" >once</span>(<span data-symbols="7360-2" >panelWin</span>, <span data-symbols="7360-6" >EVENTS</span>.<span data-symbols="#UI_INSPECTOR_TOGGLED,EVENTS#UI_INSPECTOR_TOGGLED" data-i="25" >UI_INSPECTOR_TOGGLED</span>);
</code><code id="line-41" aria-labelledby="41">
</code><code id="line-42" aria-labelledby="42">  <span data-symbols="#ok" data-i="26" >ok</span>(!<span data-symbols="7360-7" >InspectorView</span>.<span data-symbols="#isVisible,InspectorView#isVisible" data-i="27" >isVisible</span>(), <span class="syn_string" >"InspectorView back to being hidden."</span>);
</code><code id="line-43" aria-labelledby="43">
</code><code id="line-44" aria-labelledby="44">  <span class="syn_comment" >// Open again to test node loading while open</span>
</code><code id="line-45" aria-labelledby="45">  $(<span class="syn_string" >"#inspector-pane-toggle"</span>).<span data-symbols="#click" data-i="28" >click</span>();
</code><code id="line-46" aria-labelledby="46">  await <span data-symbols="#once" data-i="29" >once</span>(<span data-symbols="7360-2" >panelWin</span>, <span data-symbols="7360-6" >EVENTS</span>.<span data-symbols="#UI_INSPECTOR_TOGGLED,EVENTS#UI_INSPECTOR_TOGGLED" data-i="30" >UI_INSPECTOR_TOGGLED</span>);
</code><code id="line-47" aria-labelledby="47">
</code><code id="line-48" aria-labelledby="48">  <span data-symbols="#ok" data-i="31" >ok</span>(<span data-symbols="7360-7" >InspectorView</span>.<span data-symbols="#isVisible,InspectorView#isVisible" data-i="32" >isVisible</span>(), <span class="syn_string" >"InspectorView being shown."</span>);
</code><code id="line-49" aria-labelledby="49">  <span data-symbols="#ok" data-i="33" >ok</span>(!<span data-symbols="#isVisible" data-i="34" >isVisible</span>($(<span class="syn_string" >"#web-audio-editor-tabs"</span>)),
</code><code id="line-50" aria-labelledby="50">    <span class="syn_string" >"InspectorView tabs are still hidden."</span>);
</code><code id="line-51" aria-labelledby="51">
</code><code id="line-52" aria-labelledby="52">  await <span data-symbols="#clickGraphNode" data-i="35" >clickGraphNode</span>(<span data-symbols="7360-2" >panelWin</span>, <span data-symbols="#findGraphNode" data-i="36" >findGraphNode</span>(<span data-symbols="7360-2" >panelWin</span>, <span data-symbols="7360-12" >nodeIds</span>[1]));
</code><code id="line-53" aria-labelledby="53">
</code><code id="line-54" aria-labelledby="54">  <span data-symbols="#ok" data-i="37" >ok</span>(!<span data-symbols="#isVisible" data-i="38" >isVisible</span>($(<span class="syn_string" >"#web-audio-editor-details-pane-empty"</span>)),
</code><code id="line-55" aria-labelledby="55">    <span class="syn_string" >"Empty message hides even when loading node while open."</span>);
</code><code id="line-56" aria-labelledby="56">  <span data-symbols="#ok" data-i="39" >ok</span>(<span data-symbols="#isVisible" data-i="40" >isVisible</span>($(<span class="syn_string" >"#web-audio-editor-tabs"</span>)),
</code><code id="line-57" aria-labelledby="57">    <span class="syn_string" >"Switches to tab view when loading node while open."</span>);
</code><code id="line-58" aria-labelledby="58">
</code><code id="line-59" aria-labelledby="59">  await <span data-symbols="#teardown" data-i="41" >teardown</span>(<span data-symbols="7360-0" >target</span>);
</code><code id="line-60" aria-labelledby="60">});
</code></pre>      </td>
    </tr>
  </tbody>
</table>
<script>var ANALYSIS_DATA = [[[],[{"pretty":"property add_task","sym":"#add_task"}]],[[{"pretty":"initWebAudioEditor","sym":"#initWebAudioEditor"}],[{"pretty":"property initWebAudioEditor","sym":"#initWebAudioEditor"}]],[[{"pretty":"SIMPLE_CONTEXT_URL","sym":"#SIMPLE_CONTEXT_URL"}],[{"pretty":"property SIMPLE_CONTEXT_URL","sym":"#SIMPLE_CONTEXT_URL"}]],[[],[{"pretty":"property _propsView","sym":"#_propsView"},{"pretty":"property InspectorView._propsView","sym":"InspectorView#_propsView"}]],[[],[{"pretty":"property once","sym":"#once"}]],[[],[{"pretty":"property Promise","sym":"#Promise"}]],[[],[{"pretty":"property all","sym":"#all"},{"pretty":"property Promise.all","sym":"Promise#all"}]],[[{"pretty":"get3","sym":"#get3"}],[{"pretty":"property get3","sym":"#get3"}]],[[{"pretty":"waitForGraphRendered","sym":"#waitForGraphRendered"}],[{"pretty":"property waitForGraphRendered","sym":"#waitForGraphRendered"}]],[[],[{"pretty":"property reload","sym":"#reload"}]],[[],[{"pretty":"property map","sym":"#map"},{"pretty":"property actors.map","sym":"actors#map"}]],[[],[{"pretty":"property actorID","sym":"#actorID"},{"pretty":"property actor.actorID","sym":"actor#actorID"}]],[[],[{"pretty":"property ok","sym":"#ok"}]],[[],[{"pretty":"property isVisible","sym":"#isVisible"},{"pretty":"property InspectorView.isVisible","sym":"InspectorView#isVisible"}]],[[],[{"pretty":"property click","sym":"#click"}]],[[],[{"pretty":"property once","sym":"#once"}]],[[{"pretty":"EVENTS.UI_INSPECTOR_TOGGLED","sym":"EVENTS#UI_INSPECTOR_TOGGLED"}],[{"pretty":"property UI_INSPECTOR_TOGGLED","sym":"#UI_INSPECTOR_TOGGLED"},{"pretty":"property EVENTS.UI_INSPECTOR_TOGGLED","sym":"EVENTS#UI_INSPECTOR_TOGGLED"}]],[[],[{"pretty":"property ok","sym":"#ok"}]],[[],[{"pretty":"property isVisible","sym":"#isVisible"},{"pretty":"property InspectorView.isVisible","sym":"InspectorView#isVisible"}]],[[],[{"pretty":"property ok","sym":"#ok"}]],[[],[{"pretty":"property isVisible","sym":"#isVisible"}]],[[],[{"pretty":"property ok","sym":"#ok"}]],[[],[{"pretty":"property isVisible","sym":"#isVisible"}]],[[],[{"pretty":"property click","sym":"#click"}]],[[],[{"pretty":"property once","sym":"#once"}]],[[{"pretty":"EVENTS.UI_INSPECTOR_TOGGLED","sym":"EVENTS#UI_INSPECTOR_TOGGLED"}],[{"pretty":"property UI_INSPECTOR_TOGGLED","sym":"#UI_INSPECTOR_TOGGLED"},{"pretty":"property EVENTS.UI_INSPECTOR_TOGGLED","sym":"EVENTS#UI_INSPECTOR_TOGGLED"}]],[[],[{"pretty":"property ok","sym":"#ok"}]],[[],[{"pretty":"property isVisible","sym":"#isVisible"},{"pretty":"property InspectorView.isVisible","sym":"InspectorView#isVisible"}]],[[],[{"pretty":"property click","sym":"#click"}]],[[],[{"pretty":"property once","sym":"#once"}]],[[{"pretty":"EVENTS.UI_INSPECTOR_TOGGLED","sym":"EVENTS#UI_INSPECTOR_TOGGLED"}],[{"pretty":"property UI_INSPECTOR_TOGGLED","sym":"#UI_INSPECTOR_TOGGLED"},{"pretty":"property EVENTS.UI_INSPECTOR_TOGGLED","sym":"EVENTS#UI_INSPECTOR_TOGGLED"}]],[[],[{"pretty":"property ok","sym":"#ok"}]],[[],[{"pretty":"property isVisible","sym":"#isVisible"},{"pretty":"property InspectorView.isVisible","sym":"InspectorView#isVisible"}]],[[],[{"pretty":"property ok","sym":"#ok"}]],[[],[{"pretty":"property isVisible","sym":"#isVisible"}]],[[{"pretty":"clickGraphNode","sym":"#clickGraphNode"}],[{"pretty":"property clickGraphNode","sym":"#clickGraphNode"}]],[[{"pretty":"findGraphNode","sym":"#findGraphNode"}],[{"pretty":"property findGraphNode","sym":"#findGraphNode"}]],[[],[{"pretty":"property ok","sym":"#ok"}]],[[],[{"pretty":"property isVisible","sym":"#isVisible"}]],[[],[{"pretty":"property ok","sym":"#ok"}]],[[],[{"pretty":"property isVisible","sym":"#isVisible"}]],[[],[{"pretty":"property teardown","sym":"#teardown"}]]];</script>
    </div>
  <div id="foot" class="footer">
    This page was generated by Searchfox <span class="pretty-date" data-datetime="Wed, 13 Feb 2019 15:28:42 +0000"></span>.
  </div>
  <span id="data" data-root="/" data-search="/mozilla-central/search" data-tree="mozilla-central" data-path="devtools/client/webaudioeditor/test/browser_wa_inspector-toggle.js"></span>
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
