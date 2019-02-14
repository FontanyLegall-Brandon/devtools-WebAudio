<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8" />
  <link href="/static/icons/search.png" rel="shortcut icon">
  <title>browser_audionode-actor-get-set-param.js - mozsearch</title>
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
<div class="breadcrumbs"><a href="/mozilla-central/source/">mozilla-central</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools">devtools</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client">client</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor">webaudioeditor</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/test">test</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/test/browser_audionode-actor-get-set-param.js">browser_audionode-actor-get-set-param.js</a></div>
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
  <a href="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/test/browser_audionode-actor-get-set-param.js" title="Permalink" class="icon" data-update-link="true" data-link="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/test/browser_audionode-actor-get-set-param.js">Permalink <span class="accel">Y</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/log/tip/devtools/client/webaudioeditor/test/browser_audionode-actor-get-set-param.js" title="Log" class="icon">Log <span class="accel">L</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/raw-file/tip/devtools/client/webaudioeditor/test/browser_audionode-actor-get-set-param.js" title="Raw" class="icon">Raw <span class="accel">R</span></a>
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
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#1" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l2" class="line-number">2
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#2" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l3" class="line-number">3
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#3" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l4" class="line-number">4
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#4" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l5" class="line-number">5
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#5" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l6" class="line-number">6
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#6" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l7" class="line-number">7
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#7" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l8" class="line-number">8
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#8" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l9" class="line-number">9
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#9" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l10" class="line-number">10
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#10" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l11" class="line-number">11
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#11" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l12" class="line-number">12
<div class="blame-strip c1" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#12" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l13" class="line-number">13
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#13" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l14" class="line-number">14
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#14" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l15" class="line-number">15
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#15" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l16" class="line-number">16
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#16" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l17" class="line-number">17
<div class="blame-strip c1" data-blame="1a03395848146e50c63c65322044030a6cd94e68#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#17" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l18" class="line-number">18
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#18" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l19" class="line-number">19
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#19" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l20" class="line-number">20
<div class="blame-strip c2" data-blame="1a03395848146e50c63c65322044030a6cd94e68#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#20" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l21" class="line-number">21
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#21" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l22" class="line-number">22
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#22" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l23" class="line-number">23
<div class="blame-strip c1" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#23" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l24" class="line-number">24
<div class="blame-strip c1" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#24" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l25" class="line-number">25
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#24" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l26" class="line-number">26
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#26" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l27" class="line-number">27
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l28" class="line-number">28
<div class="blame-strip c2" data-blame="1a03395848146e50c63c65322044030a6cd94e68#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#28" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l29" class="line-number">29
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#28" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l30" class="line-number">30
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#29" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l31" class="line-number">31
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#31" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l32" class="line-number">32
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#32" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l33" class="line-number">33
<div class="blame-strip c1" data-blame="1a03395848146e50c63c65322044030a6cd94e68#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#33" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l34" class="line-number">34
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#33" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l35" class="line-number">35
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#34" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l36" class="line-number">36
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#39" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l37" class="line-number">37
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#37" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l38" class="line-number">38
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#41" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l39" class="line-number">39
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#42" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l40" class="line-number">40
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#43" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l41" class="line-number">41
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#44" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l42" class="line-number">42
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#42" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l43" class="line-number">43
<div class="blame-strip c2" data-blame="1a03395848146e50c63c65322044030a6cd94e68#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#43" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l44" class="line-number">44
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#47" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l45" class="line-number">45
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#48" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l46" class="line-number">46
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#46" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l47" class="line-number">47
<div class="blame-strip c1" data-blame="3c0bacbcdc816623a9982b930c0638c78ab4a2c5#browser/devtools/webaudioeditor/test/browser_audionode-actor-get-set-param.js#47" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
      </td>
      <td class="code">
<pre><code id="line-1" aria-labelledby="1"><span class="syn_comment" >/* Any copyright is dedicated to the Public Domain.</span>
</code><code id="line-2" aria-labelledby="2"><span class="syn_comment" >   <a href="http://creativecommons.org/publicdomain/zero/1.0/">http://creativecommons.org/publicdomain/zero/1.0/</a> */</span>
</code><code id="line-3" aria-labelledby="3">
</code><code id="line-4" aria-labelledby="4"><span class="syn_comment" >/**</span>
</code><code id="line-5" aria-labelledby="5"><span class="syn_comment" > * Test AudioNode#getParam() / AudioNode#setParam()</span>
</code><code id="line-6" aria-labelledby="6"><span class="syn_comment" > */</span>
</code><code id="line-7" aria-labelledby="7">
</code><code id="line-8" aria-labelledby="8"><span data-symbols="#add_task" data-i="0" >add_task</span>(async <span class="syn_reserved" >function</span>() {
</code><code id="line-9" aria-labelledby="9">  <span class="syn_reserved" >const</span> { <span data-symbols="7339-0" >target</span>, <span data-symbols="7339-1" >front</span> } = await <span data-symbols="#initBackend" data-i="1" >initBackend</span>(<span data-symbols="#SIMPLE_CONTEXT_URL" data-i="2" >SIMPLE_CONTEXT_URL</span>);
</code><code id="line-10" aria-labelledby="10">  <span class="syn_reserved" >const</span> [<span data-symbols="7339-2" >_</span>, [<span data-symbols="7339-3" >destNode</span>, <span data-symbols="7339-4" >oscNode</span>, <span data-symbols="7339-5" >gainNode</span>]] = await <span data-symbols="#Promise" data-i="3" >Promise</span>.<span data-symbols="#all,Promise#all" data-i="4" >all</span>([
</code><code id="line-11" aria-labelledby="11">    <span data-symbols="7339-1" >front</span>.<span data-symbols="#setup,front#setup" data-i="5" >setup</span>({ <span class="syn_def" data-symbols="#reload" data-i="6" >reload</span>: <span class="syn_reserved" >true</span> }),
</code><code id="line-12" aria-labelledby="12">    <span data-symbols="#get3" data-i="7" >get3</span>(<span data-symbols="7339-1" >front</span>, <span class="syn_string" >"create-node"</span>),
</code><code id="line-13" aria-labelledby="13">  ]);
</code><code id="line-14" aria-labelledby="14">
</code><code id="line-15" aria-labelledby="15">  <span class="syn_reserved" >let</span> <span data-symbols="7339-6" >freq</span> = await <span data-symbols="7339-4" >oscNode</span>.<span data-symbols="#getParam,oscNode#getParam" data-i="8" >getParam</span>(<span class="syn_string" >"frequency"</span>);
</code><code id="line-16" aria-labelledby="16">  <span data-symbols="#info" data-i="9" >info</span>(<span class="syn_reserved" >typeof</span> <span data-symbols="7339-6" >freq</span>);
</code><code id="line-17" aria-labelledby="17">  <span data-symbols="#is" data-i="10" >is</span>(<span data-symbols="7339-6" >freq</span>, 440, <span class="syn_string" >"AudioNode:getParam correctly fetches AudioParam"</span>);
</code><code id="line-18" aria-labelledby="18">
</code><code id="line-19" aria-labelledby="19">  <span class="syn_reserved" >let</span> <span data-symbols="7339-7" >type</span> = await <span data-symbols="7339-4" >oscNode</span>.<span data-symbols="#getParam,oscNode#getParam" data-i="11" >getParam</span>(<span class="syn_string" >"type"</span>);
</code><code id="line-20" aria-labelledby="20">  <span data-symbols="#is" data-i="12" >is</span>(<span data-symbols="7339-7" >type</span>, <span class="syn_string" >"sine"</span>, <span class="syn_string" >"AudioNode:getParam correctly fetches non-AudioParam"</span>);
</code><code id="line-21" aria-labelledby="21">
</code><code id="line-22" aria-labelledby="22">  <span data-symbols="7339-7" >type</span> = await <span data-symbols="7339-4" >oscNode</span>.<span data-symbols="#getParam,oscNode#getParam" data-i="13" >getParam</span>(<span class="syn_string" >"not-a-valid-param"</span>);
</code><code id="line-23" aria-labelledby="23">  <span data-symbols="#ok" data-i="14" >ok</span>(<span data-symbols="7339-7" >type</span>.<span data-symbols="#type,type#type" data-i="15" >type</span> === <span class="syn_string" >"undefined"</span>,
</code><code id="line-24" aria-labelledby="24">    <span class="syn_string" >"AudioNode:getParam correctly returns a grip value for `undefined` for an invalid param."</span>);
</code><code id="line-25" aria-labelledby="25">
</code><code id="line-26" aria-labelledby="26">  <span class="syn_reserved" >let</span> <span data-symbols="7339-8" >resSuccess</span> = await <span data-symbols="7339-4" >oscNode</span>.<span data-symbols="#setParam,oscNode#setParam" data-i="16" >setParam</span>(<span class="syn_string" >"frequency"</span>, 220);
</code><code id="line-27" aria-labelledby="27">  <span data-symbols="7339-6" >freq</span> = await <span data-symbols="7339-4" >oscNode</span>.<span data-symbols="#getParam,oscNode#getParam" data-i="17" >getParam</span>(<span class="syn_string" >"frequency"</span>);
</code><code id="line-28" aria-labelledby="28">  <span data-symbols="#is" data-i="18" >is</span>(<span data-symbols="7339-6" >freq</span>, 220, <span class="syn_string" >"AudioNode:setParam correctly sets a `number` AudioParam"</span>);
</code><code id="line-29" aria-labelledby="29">  <span data-symbols="#is" data-i="19" >is</span>(<span data-symbols="7339-8" >resSuccess</span>, <span data-symbols="#undefined" data-i="20" >undefined</span>, <span class="syn_string" >"AudioNode:setParam returns undefined for correctly set AudioParam"</span>);
</code><code id="line-30" aria-labelledby="30">
</code><code id="line-31" aria-labelledby="31">  <span data-symbols="7339-8" >resSuccess</span> = await <span data-symbols="7339-4" >oscNode</span>.<span data-symbols="#setParam,oscNode#setParam" data-i="21" >setParam</span>(<span class="syn_string" >"type"</span>, <span class="syn_string" >"square"</span>);
</code><code id="line-32" aria-labelledby="32">  <span data-symbols="7339-7" >type</span> = await <span data-symbols="7339-4" >oscNode</span>.<span data-symbols="#getParam,oscNode#getParam" data-i="22" >getParam</span>(<span class="syn_string" >"type"</span>);
</code><code id="line-33" aria-labelledby="33">  <span data-symbols="#is" data-i="23" >is</span>(<span data-symbols="7339-7" >type</span>, <span class="syn_string" >"square"</span>, <span class="syn_string" >"AudioNode:setParam correctly sets a `string` non-AudioParam"</span>);
</code><code id="line-34" aria-labelledby="34">  <span data-symbols="#is" data-i="24" >is</span>(<span data-symbols="7339-8" >resSuccess</span>, <span data-symbols="#undefined" data-i="25" >undefined</span>, <span class="syn_string" >"AudioNode:setParam returns undefined for correctly set AudioParam"</span>);
</code><code id="line-35" aria-labelledby="35">
</code><code id="line-36" aria-labelledby="36">  <span class="syn_reserved" >try</span> {
</code><code id="line-37" aria-labelledby="37">    await <span data-symbols="7339-4" >oscNode</span>.<span data-symbols="#setParam,oscNode#setParam" data-i="26" >setParam</span>(<span class="syn_string" >"frequency"</span>, <span class="syn_string" >"hello"</span>);
</code><code id="line-38" aria-labelledby="38">    <span data-symbols="#ok" data-i="27" >ok</span>(<span class="syn_reserved" >false</span>, <span class="syn_string" >"setParam with invalid types should throw"</span>);
</code><code id="line-39" aria-labelledby="39">  } <span class="syn_reserved" >catch</span> (<span data-symbols="7339-9" >e</span>) {
</code><code id="line-40" aria-labelledby="40">    <span data-symbols="#ok" data-i="28" >ok</span>(<span class="syn_regex" >/is not a finite floating-point/</span>.<span data-symbols="#test" data-i="29" >test</span>(<span data-symbols="7339-9" >e</span>.<span data-symbols="#message,e#message" data-i="30" >message</span>), <span class="syn_string" >"AudioNode:setParam returns error with correct message when attempting an invalid assignment"</span>);
</code><code id="line-41" aria-labelledby="41">    <span data-symbols="#is" data-i="31" >is</span>(<span data-symbols="7339-9" >e</span>.<span data-symbols="#type,e#type" data-i="32" >type</span>, <span class="syn_string" >"TypeError"</span>, <span class="syn_string" >"AudioNode:setParam returns error with correct type when attempting an invalid assignment"</span>);
</code><code id="line-42" aria-labelledby="42">    <span data-symbols="7339-6" >freq</span> = await <span data-symbols="7339-4" >oscNode</span>.<span data-symbols="#getParam,oscNode#getParam" data-i="33" >getParam</span>(<span class="syn_string" >"frequency"</span>);
</code><code id="line-43" aria-labelledby="43">    <span data-symbols="#is" data-i="34" >is</span>(<span data-symbols="7339-6" >freq</span>, 220, <span class="syn_string" >"AudioNode:setParam does not modify value when an error occurs"</span>);
</code><code id="line-44" aria-labelledby="44">  }
</code><code id="line-45" aria-labelledby="45">
</code><code id="line-46" aria-labelledby="46">  await <span data-symbols="#removeTab" data-i="35" >removeTab</span>(<span data-symbols="7339-0" >target</span>.<span data-symbols="#tab,target#tab" data-i="36" >tab</span>);
</code><code id="line-47" aria-labelledby="47">});
</code></pre>      </td>
    </tr>
  </tbody>
</table>
<script>var ANALYSIS_DATA = [[[],[{"pretty":"property add_task","sym":"#add_task"}]],[[],[{"pretty":"property initBackend","sym":"#initBackend"}]],[[{"pretty":"SIMPLE_CONTEXT_URL","sym":"#SIMPLE_CONTEXT_URL"}],[{"pretty":"property SIMPLE_CONTEXT_URL","sym":"#SIMPLE_CONTEXT_URL"}]],[[],[{"pretty":"property Promise","sym":"#Promise"}]],[[],[{"pretty":"property all","sym":"#all"},{"pretty":"property Promise.all","sym":"Promise#all"}]],[[],[{"pretty":"property setup","sym":"#setup"},{"pretty":"property front.setup","sym":"front#setup"}]],[[],[{"pretty":"property reload","sym":"#reload"}]],[[{"pretty":"get3","sym":"#get3"}],[{"pretty":"property get3","sym":"#get3"}]],[[],[{"pretty":"property getParam","sym":"#getParam"},{"pretty":"property oscNode.getParam","sym":"oscNode#getParam"}]],[[],[{"pretty":"property info","sym":"#info"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property getParam","sym":"#getParam"},{"pretty":"property oscNode.getParam","sym":"oscNode#getParam"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property getParam","sym":"#getParam"},{"pretty":"property oscNode.getParam","sym":"oscNode#getParam"}]],[[],[{"pretty":"property ok","sym":"#ok"}]],[[{"pretty":"type.type","sym":"type#type"}],[{"pretty":"property type","sym":"#type"},{"pretty":"property type.type","sym":"type#type"}]],[[],[{"pretty":"property setParam","sym":"#setParam"},{"pretty":"property oscNode.setParam","sym":"oscNode#setParam"}]],[[],[{"pretty":"property getParam","sym":"#getParam"},{"pretty":"property oscNode.getParam","sym":"oscNode#getParam"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property undefined","sym":"#undefined"}]],[[],[{"pretty":"property setParam","sym":"#setParam"},{"pretty":"property oscNode.setParam","sym":"oscNode#setParam"}]],[[],[{"pretty":"property getParam","sym":"#getParam"},{"pretty":"property oscNode.getParam","sym":"oscNode#getParam"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property undefined","sym":"#undefined"}]],[[],[{"pretty":"property setParam","sym":"#setParam"},{"pretty":"property oscNode.setParam","sym":"oscNode#setParam"}]],[[],[{"pretty":"property ok","sym":"#ok"}]],[[],[{"pretty":"property ok","sym":"#ok"}]],[[],[{"pretty":"property test","sym":"#test"}]],[[],[{"pretty":"property message","sym":"#message"},{"pretty":"property e.message","sym":"e#message"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property type","sym":"#type"},{"pretty":"property e.type","sym":"e#type"}]],[[],[{"pretty":"property getParam","sym":"#getParam"},{"pretty":"property oscNode.getParam","sym":"oscNode#getParam"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property removeTab","sym":"#removeTab"}]],[[],[{"pretty":"property tab","sym":"#tab"},{"pretty":"property target.tab","sym":"target#tab"}]]];</script>
    </div>
  <div id="foot" class="footer">
    This page was generated by Searchfox <span class="pretty-date" data-datetime="Wed, 13 Feb 2019 15:28:42 +0000"></span>.
  </div>
  <span id="data" data-root="/" data-search="/mozilla-central/search" data-tree="mozilla-central" data-path="devtools/client/webaudioeditor/test/browser_audionode-actor-get-set-param.js"></span>
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
