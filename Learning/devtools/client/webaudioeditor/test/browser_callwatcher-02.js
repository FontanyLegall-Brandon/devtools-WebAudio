<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8" />
  <link href="/static/icons/search.png" rel="shortcut icon">
  <title>browser_callwatcher-02.js - mozsearch</title>
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
<div class="breadcrumbs"><a href="/mozilla-central/source/">mozilla-central</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools">devtools</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client">client</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor">webaudioeditor</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/test">test</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/test/browser_callwatcher-02.js">browser_callwatcher-02.js</a></div>
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
  <a href="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/test/browser_callwatcher-02.js" title="Permalink" class="icon" data-update-link="true" data-link="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/test/browser_callwatcher-02.js">Permalink <span class="accel">Y</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/log/tip/devtools/client/webaudioeditor/test/browser_callwatcher-02.js" title="Log" class="icon">Log <span class="accel">L</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/raw-file/tip/devtools/client/webaudioeditor/test/browser_callwatcher-02.js" title="Raw" class="icon">Raw <span class="accel">R</span></a>
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
<div class="blame-strip c1" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#1" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l2" class="line-number">2
<div class="blame-strip c1" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#2" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l3" class="line-number">3
<div class="blame-strip c1" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#3" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l4" class="line-number">4
<div class="blame-strip c1" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#4" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l5" class="line-number">5
<div class="blame-strip c1" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#5" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l6" class="line-number">6
<div class="blame-strip c1" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#6" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l7" class="line-number">7
<div class="blame-strip c1" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#7" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l8" class="line-number">8
<div class="blame-strip c1" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#8" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l9" class="line-number">9
<div class="blame-strip c1" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#9" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l10" class="line-number">10
<div class="blame-strip c1" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#10" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l11" class="line-number">11
<div class="blame-strip c1" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#11" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l12" class="line-number">12
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#12" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l13" class="line-number">13
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#13" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l14" class="line-number">14
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#14" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l15" class="line-number">15
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#15" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l16" class="line-number">16
<div class="blame-strip c2" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#16" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l17" class="line-number">17
<div class="blame-strip c1" data-blame="c6cf60a39f022f08d57082932b1a4fb87ed65b57#%#17" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l18" class="line-number">18
<div class="blame-strip c2" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#18" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l19" class="line-number">19
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#19" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l20" class="line-number">20
<div class="blame-strip c2" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#19" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l21" class="line-number">21
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#21" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l22" class="line-number">22
<div class="blame-strip c2" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#22" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l23" class="line-number">23
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#23" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l24" class="line-number">24
<div class="blame-strip c2" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#24" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l25" class="line-number">25
<div class="blame-strip c1" data-blame="e962578670e8136937fdc4e5bc4ec348b122dca9#%#25" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l26" class="line-number">26
<div class="blame-strip c2" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#26" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l27" class="line-number">27
<div class="blame-strip c2" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l28" class="line-number">28
<div class="blame-strip c2" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#28" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l29" class="line-number">29
<div class="blame-strip c1" data-blame="1a03395848146e50c63c65322044030a6cd94e68#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#29" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l30" class="line-number">30
<div class="blame-strip c2" data-blame="4f1af0e003d54d19ace2eb38c410aef972e185f2#%#30" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l31" class="line-number">31
<div class="blame-strip c1" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#31" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l32" class="line-number">32
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#32" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l33" class="line-number">33
<div class="blame-strip c1" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#33" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l34" class="line-number">34
<div class="blame-strip c1" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#34" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l35" class="line-number">35
<div class="blame-strip c1" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#35" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l36" class="line-number">36
<div class="blame-strip c1" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#36" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l37" class="line-number">37
<div class="blame-strip c1" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#37" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l38" class="line-number">38
<div class="blame-strip c1" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#38" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l39" class="line-number">39
<div class="blame-strip c1" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#39" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l40" class="line-number">40
<div class="blame-strip c2" data-blame="1a03395848146e50c63c65322044030a6cd94e68#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#40" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l41" class="line-number">41
<div class="blame-strip c1" data-blame="4f1af0e003d54d19ace2eb38c410aef972e185f2#%#41" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l42" class="line-number">42
<div class="blame-strip c2" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#42" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l43" class="line-number">43
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#43" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l44" class="line-number">44
<div class="blame-strip c2" data-blame="e533052040eb108dbf7c4259af58c5caa3253d16#browser/devtools/webaudioeditor/test/browser_callwatcher-02.js#44" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
      </td>
      <td class="code">
<pre><code id="line-1" aria-labelledby="1"><span class="syn_comment" >/* Any copyright is dedicated to the Public Domain.</span>
</code><code id="line-2" aria-labelledby="2"><span class="syn_comment" >   <a href="http://creativecommons.org/publicdomain/zero/1.0/">http://creativecommons.org/publicdomain/zero/1.0/</a> */</span>
</code><code id="line-3" aria-labelledby="3">
</code><code id="line-4" aria-labelledby="4"><span class="syn_comment" >/**</span>
</code><code id="line-5" aria-labelledby="5"><span class="syn_comment" > * <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1112378">Bug 1112378</a></span>
</code><code id="line-6" aria-labelledby="6"><span class="syn_comment" > * Tests to ensure that errors called on wrapped functions via call-watcher</span>
</code><code id="line-7" aria-labelledby="7"><span class="syn_comment" > * correctly looks like the error comes from the content, not from within the devtools.</span>
</code><code id="line-8" aria-labelledby="8"><span class="syn_comment" > */</span>
</code><code id="line-9" aria-labelledby="9">
</code><code id="line-10" aria-labelledby="10"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#BUG_1112378_URL" data-i="0" >BUG_1112378_URL</span> = <span data-symbols="#EXAMPLE_URL" data-i="1" >EXAMPLE_URL</span> + <span class="syn_string" >"doc_bug_1112378.html"</span>;
</code><code id="line-11" aria-labelledby="11">
</code><code id="line-12" aria-labelledby="12"><span data-symbols="#add_task" data-i="2" >add_task</span>(async <span class="syn_reserved" >function</span>() {
</code><code id="line-13" aria-labelledby="13">  <span class="syn_reserved" >const</span> { <span data-symbols="7343-0" >target</span>, <span data-symbols="7343-1" >panel</span> } = await <span data-symbols="#initWebAudioEditor" data-i="3" >initWebAudioEditor</span>(<span data-symbols="#BUG_1112378_URL" data-i="4" >BUG_1112378_URL</span>);
</code><code id="line-14" aria-labelledby="14">  <span class="syn_reserved" >const</span> { <span data-symbols="7343-2" >panelWin</span> } = <span data-symbols="7343-1" >panel</span>;
</code><code id="line-15" aria-labelledby="15">  <span class="syn_reserved" >const</span> { <span data-symbols="7343-3" >gFront</span>, $, $$, <span data-symbols="7343-6" >EVENTS</span>, <span data-symbols="7343-7" >gAudioNodes</span> } = <span data-symbols="7343-2" >panelWin</span>;
</code><code id="line-16" aria-labelledby="16">
</code><code id="line-17" aria-labelledby="17">  <span data-symbols="#loadFrameScriptUtils" data-i="5" >loadFrameScriptUtils</span>();
</code><code id="line-18" aria-labelledby="18">
</code><code id="line-19" aria-labelledby="19">  <span class="syn_reserved" >const</span> <span data-symbols="7343-8" >rendered</span> = <span data-symbols="#waitForGraphRendered" data-i="6" >waitForGraphRendered</span>(<span data-symbols="7343-2" >panelWin</span>, 2, 0);
</code><code id="line-20" aria-labelledby="20">  <span data-symbols="#reload" data-i="7" >reload</span>(<span data-symbols="7343-0" >target</span>);
</code><code id="line-21" aria-labelledby="21">  await <span data-symbols="7343-8" >rendered</span>;
</code><code id="line-22" aria-labelledby="22">
</code><code id="line-23" aria-labelledby="23">  <span class="syn_reserved" >let</span> <span data-symbols="7343-9" >error</span> = await <span data-symbols="#evalInDebuggee" data-i="8" >evalInDebuggee</span>(<span class="syn_string" >"throwError()"</span>);
</code><code id="line-24" aria-labelledby="24">  <span data-symbols="#is" data-i="9" >is</span>(<span data-symbols="7343-9" >error</span>.<span data-symbols="#lineNumber,error#lineNumber" data-i="10" >lineNumber</span>, 21, <span class="syn_string" >"error has correct lineNumber"</span>);
</code><code id="line-25" aria-labelledby="25">  <span data-symbols="#is" data-i="11" >is</span>(<span data-symbols="7343-9" >error</span>.<span data-symbols="#columnNumber,error#columnNumber" data-i="12" >columnNumber</span>, 18, <span class="syn_string" >"error has correct columnNumber"</span>);
</code><code id="line-26" aria-labelledby="26">  <span data-symbols="#is" data-i="13" >is</span>(<span data-symbols="7343-9" >error</span>.<span data-symbols="#name,error#name" data-i="14" >name</span>, <span class="syn_string" >"TypeError"</span>, <span class="syn_string" >"error has correct name"</span>);
</code><code id="line-27" aria-labelledby="27">  <span data-symbols="#is" data-i="15" >is</span>(<span data-symbols="7343-9" >error</span>.<span data-symbols="#message,error#message" data-i="16" >message</span>, <span class="syn_string" >"Argument 1 is not valid for any of the 2-argument overloads of AudioNode.connect."</span>, <span class="syn_string" >"error has correct message"</span>);
</code><code id="line-28" aria-labelledby="28">  <span data-symbols="#is" data-i="17" >is</span>(<span data-symbols="7343-9" >error</span>.<span data-symbols="#stringified,error#stringified" data-i="18" >stringified</span>, <span class="syn_string" >"TypeError: Argument 1 is not valid for any of the 2-argument overloads of AudioNode.connect."</span>, <span class="syn_string" >"error is stringified correctly"</span>);
</code><code id="line-29" aria-labelledby="29">  <span data-symbols="#is" data-i="19" >is</span>(<span data-symbols="7343-9" >error</span>.<span class="syn_reserved" >instanceof</span>, <span class="syn_reserved" >true</span>, <span class="syn_string" >"error is correctly an instanceof TypeError"</span>);
</code><code id="line-30" aria-labelledby="30">  <span data-symbols="#is" data-i="20" >is</span>(<span data-symbols="7343-9" >error</span>.<span data-symbols="#fileName,error#fileName" data-i="21" >fileName</span>, <span class="syn_string" >"<a href="http://example.com/browser/devtools/client/webaudioeditor/test/doc_bug_1112378.html">http://example.com/browser/devtools/client/webaudioeditor/test/doc_bug_1112378.html</a>"</span>, <span class="syn_string" >"error has correct fileName"</span>);
</code><code id="line-31" aria-labelledby="31">
</code><code id="line-32" aria-labelledby="32">  <span data-symbols="7343-9" >error</span> = await <span data-symbols="#evalInDebuggee" data-i="22" >evalInDebuggee</span>(<span class="syn_string" >"throwDOMException()"</span>);
</code><code id="line-33" aria-labelledby="33">  <span data-symbols="#is" data-i="23" >is</span>(<span data-symbols="7343-9" >error</span>.<span data-symbols="#lineNumber,error#lineNumber" data-i="24" >lineNumber</span>, 37, <span class="syn_string" >"exception has correct lineNumber"</span>);
</code><code id="line-34" aria-labelledby="34">  <span data-symbols="#is" data-i="25" >is</span>(<span data-symbols="7343-9" >error</span>.<span data-symbols="#columnNumber,error#columnNumber" data-i="26" >columnNumber</span>, 0, <span class="syn_string" >"exception has correct columnNumber"</span>);
</code><code id="line-35" aria-labelledby="35">  <span data-symbols="#is" data-i="27" >is</span>(<span data-symbols="7343-9" >error</span>.<span data-symbols="#code,error#code" data-i="28" >code</span>, 9, <span class="syn_string" >"exception has correct code"</span>);
</code><code id="line-36" aria-labelledby="36">  <span data-symbols="#is" data-i="29" >is</span>(<span data-symbols="7343-9" >error</span>.<span data-symbols="#result,error#result" data-i="30" >result</span>, 2152923145, <span class="syn_string" >"exception has correct result"</span>);
</code><code id="line-37" aria-labelledby="37">  <span data-symbols="#is" data-i="31" >is</span>(<span data-symbols="7343-9" >error</span>.<span data-symbols="#name,error#name" data-i="32" >name</span>, <span class="syn_string" >"NotSupportedError"</span>, <span class="syn_string" >"exception has correct name"</span>);
</code><code id="line-38" aria-labelledby="38">  <span data-symbols="#is" data-i="33" >is</span>(<span data-symbols="7343-9" >error</span>.<span data-symbols="#message,error#message" data-i="34" >message</span>, <span class="syn_string" >"Operation is not supported"</span>, <span class="syn_string" >"exception has correct message"</span>);
</code><code id="line-39" aria-labelledby="39">  <span data-symbols="#is" data-i="35" >is</span>(<span data-symbols="7343-9" >error</span>.<span data-symbols="#stringified,error#stringified" data-i="36" >stringified</span>, <span class="syn_string" >"NotSupportedError: Operation is not supported"</span>, <span class="syn_string" >"exception is stringified correctly"</span>);
</code><code id="line-40" aria-labelledby="40">  <span data-symbols="#is" data-i="37" >is</span>(<span data-symbols="7343-9" >error</span>.<span class="syn_reserved" >instanceof</span>, <span class="syn_reserved" >true</span>, <span class="syn_string" >"exception is correctly an instance of DOMException"</span>);
</code><code id="line-41" aria-labelledby="41">  <span data-symbols="#is" data-i="38" >is</span>(<span data-symbols="7343-9" >error</span>.<span data-symbols="#filename,error#filename" data-i="39" >filename</span>, <span class="syn_string" >"<a href="http://example.com/browser/devtools/client/webaudioeditor/test/doc_bug_1112378.html">http://example.com/browser/devtools/client/webaudioeditor/test/doc_bug_1112378.html</a>"</span>, <span class="syn_string" >"exception has correct filename"</span>);
</code><code id="line-42" aria-labelledby="42">
</code><code id="line-43" aria-labelledby="43">  await <span data-symbols="#teardown" data-i="40" >teardown</span>(<span data-symbols="7343-0" >target</span>);
</code><code id="line-44" aria-labelledby="44">});
</code></pre>      </td>
    </tr>
  </tbody>
</table>
<script>var ANALYSIS_DATA = [[[],[{"pretty":"property BUG_1112378_URL","sym":"#BUG_1112378_URL"}]],[[],[{"pretty":"property EXAMPLE_URL","sym":"#EXAMPLE_URL"}]],[[],[{"pretty":"property add_task","sym":"#add_task"}]],[[{"pretty":"initWebAudioEditor","sym":"#initWebAudioEditor"}],[{"pretty":"property initWebAudioEditor","sym":"#initWebAudioEditor"}]],[[{"pretty":"BUG_1112378_URL","sym":"#BUG_1112378_URL"}],[{"pretty":"property BUG_1112378_URL","sym":"#BUG_1112378_URL"}]],[[{"pretty":"loadFrameScriptUtils","sym":"#loadFrameScriptUtils"}],[{"pretty":"property loadFrameScriptUtils","sym":"#loadFrameScriptUtils"}]],[[{"pretty":"waitForGraphRendered","sym":"#waitForGraphRendered"}],[{"pretty":"property waitForGraphRendered","sym":"#waitForGraphRendered"}]],[[],[{"pretty":"property reload","sym":"#reload"}]],[[],[{"pretty":"property evalInDebuggee","sym":"#evalInDebuggee"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property lineNumber","sym":"#lineNumber"},{"pretty":"property error.lineNumber","sym":"error#lineNumber"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property columnNumber","sym":"#columnNumber"},{"pretty":"property error.columnNumber","sym":"error#columnNumber"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[{"pretty":"error.name","sym":"error#name"}],[{"pretty":"property name","sym":"#name"},{"pretty":"property error.name","sym":"error#name"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property message","sym":"#message"},{"pretty":"property error.message","sym":"error#message"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property stringified","sym":"#stringified"},{"pretty":"property error.stringified","sym":"error#stringified"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property fileName","sym":"#fileName"},{"pretty":"property error.fileName","sym":"error#fileName"}]],[[],[{"pretty":"property evalInDebuggee","sym":"#evalInDebuggee"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property lineNumber","sym":"#lineNumber"},{"pretty":"property error.lineNumber","sym":"error#lineNumber"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property columnNumber","sym":"#columnNumber"},{"pretty":"property error.columnNumber","sym":"error#columnNumber"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property code","sym":"#code"},{"pretty":"property error.code","sym":"error#code"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property result","sym":"#result"},{"pretty":"property error.result","sym":"error#result"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[{"pretty":"error.name","sym":"error#name"}],[{"pretty":"property name","sym":"#name"},{"pretty":"property error.name","sym":"error#name"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property message","sym":"#message"},{"pretty":"property error.message","sym":"error#message"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property stringified","sym":"#stringified"},{"pretty":"property error.stringified","sym":"error#stringified"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property filename","sym":"#filename"},{"pretty":"property error.filename","sym":"error#filename"}]],[[],[{"pretty":"property teardown","sym":"#teardown"}]]];</script>
    </div>
  <div id="foot" class="footer">
    This page was generated by Searchfox <span class="pretty-date" data-datetime="Wed, 13 Feb 2019 15:28:42 +0000"></span>.
  </div>
  <span id="data" data-root="/" data-search="/mozilla-central/search" data-tree="mozilla-central" data-path="devtools/client/webaudioeditor/test/browser_callwatcher-02.js"></span>
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
