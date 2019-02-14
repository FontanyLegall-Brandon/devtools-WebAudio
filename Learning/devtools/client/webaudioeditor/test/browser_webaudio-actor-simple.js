<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8" />
  <link href="/static/icons/search.png" rel="shortcut icon">
  <title>browser_webaudio-actor-simple.js - mozsearch</title>
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
<div class="breadcrumbs"><a href="/mozilla-central/source/">mozilla-central</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools">devtools</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client">client</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor">webaudioeditor</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/test">test</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/test/browser_webaudio-actor-simple.js">browser_webaudio-actor-simple.js</a></div>
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
  <a href="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/test/browser_webaudio-actor-simple.js" title="Permalink" class="icon" data-update-link="true" data-link="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/test/browser_webaudio-actor-simple.js">Permalink <span class="accel">Y</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/log/tip/devtools/client/webaudioeditor/test/browser_webaudio-actor-simple.js" title="Log" class="icon">Log <span class="accel">L</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/raw-file/tip/devtools/client/webaudioeditor/test/browser_webaudio-actor-simple.js" title="Raw" class="icon">Raw <span class="accel">R</span></a>
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
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_webaudio-actor-simple.js#1" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l2" class="line-number">2
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_webaudio-actor-simple.js#2" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l3" class="line-number">3
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_webaudio-actor-simple.js#3" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l4" class="line-number">4
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_webaudio-actor-simple.js#4" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l5" class="line-number">5
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_webaudio-actor-simple.js#5" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l6" class="line-number">6
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_webaudio-actor-simple.js#6" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l7" class="line-number">7
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_webaudio-actor-simple.js#7" role="button" aria-label="blame" aria-expanded="false"></div>
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
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_webaudio-actor-simple.js#11" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l12" class="line-number">12
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_webaudio-actor-simple.js#12" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l13" class="line-number">13
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_webaudio-actor-simple.js#13" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l14" class="line-number">14
<div class="blame-strip c1" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#14" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l15" class="line-number">15
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_webaudio-actor-simple.js#15" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l16" class="line-number">16
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_webaudio-actor-simple.js#16" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l17" class="line-number">17
<div class="blame-strip c1" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#browser/devtools/webaudioeditor/test/browser_webaudio-actor-simple.js#17" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l18" class="line-number">18
<div class="blame-strip c1" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#browser/devtools/webaudioeditor/test/browser_webaudio-actor-simple.js#18" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l19" class="line-number">19
<div class="blame-strip c1" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#browser/devtools/webaudioeditor/test/browser_webaudio-actor-simple.js#19" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l20" class="line-number">20
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_webaudio-actor-simple.js#24" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l21" class="line-number">21
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_webaudio-actor-simple.js#25" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l22" class="line-number">22
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_webaudio-actor-simple.js#26" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l23" class="line-number">23
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_webaudio-actor-simple.js#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l24" class="line-number">24
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_webaudio-actor-simple.js#28" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l25" class="line-number">25
<div class="blame-strip c1" data-blame="59ccd2fecbeb2024b1e9a5ec77b25dcf057ca1f7#browser/devtools/webaudioeditor/test/browser_webaudio-actor-simple.js#29" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l26" class="line-number">26
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_webaudio-actor-simple.js#30" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l27" class="line-number">27
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_webaudio-actor-simple.js#31" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l28" class="line-number">28
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_webaudio-actor-simple.js#32" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l29" class="line-number">29
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#29" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l30" class="line-number">30
<div class="blame-strip c2" data-blame="3c0bacbcdc816623a9982b930c0638c78ab4a2c5#browser/devtools/webaudioeditor/test/browser_webaudio-actor-simple.js#34" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
      </td>
      <td class="code">
<pre><code id="line-1" aria-labelledby="1"><span class="syn_comment" >/* Any copyright is dedicated to the Public Domain.</span>
</code><code id="line-2" aria-labelledby="2"><span class="syn_comment" >   <a href="http://creativecommons.org/publicdomain/zero/1.0/">http://creativecommons.org/publicdomain/zero/1.0/</a> */</span>
</code><code id="line-3" aria-labelledby="3">
</code><code id="line-4" aria-labelledby="4"><span class="syn_comment" >/**</span>
</code><code id="line-5" aria-labelledby="5"><span class="syn_comment" > * Test basic communication of Web Audio actor</span>
</code><code id="line-6" aria-labelledby="6"><span class="syn_comment" > */</span>
</code><code id="line-7" aria-labelledby="7">
</code><code id="line-8" aria-labelledby="8"><span data-symbols="#add_task" data-i="0" >add_task</span>(async <span class="syn_reserved" >function</span>() {
</code><code id="line-9" aria-labelledby="9">  <span class="syn_reserved" >const</span> { <span data-symbols="7377-0" >target</span>, <span data-symbols="7377-1" >front</span> } = await <span data-symbols="#initBackend" data-i="1" >initBackend</span>(<span data-symbols="#SIMPLE_CONTEXT_URL" data-i="2" >SIMPLE_CONTEXT_URL</span>);
</code><code id="line-10" aria-labelledby="10">  <span class="syn_reserved" >const</span> [<span data-symbols="7377-2" >_</span>, <span data-symbols="7377-3" >__</span>, [<span data-symbols="7377-4" >destNode</span>, <span data-symbols="7377-5" >oscNode</span>, <span data-symbols="7377-6" >gainNode</span>], [<span data-symbols="7377-7" >connect1</span>, <span data-symbols="7377-8" >connect2</span>]] = await <span data-symbols="#Promise" data-i="3" >Promise</span>.<span data-symbols="#all,Promise#all" data-i="4" >all</span>([
</code><code id="line-11" aria-labelledby="11">    <span data-symbols="7377-1" >front</span>.<span data-symbols="#setup,front#setup" data-i="5" >setup</span>({ <span class="syn_def" data-symbols="#reload" data-i="6" >reload</span>: <span class="syn_reserved" >true</span> }),
</code><code id="line-12" aria-labelledby="12">    <span data-symbols="#once" data-i="7" >once</span>(<span data-symbols="7377-1" >front</span>, <span class="syn_string" >"start-context"</span>),
</code><code id="line-13" aria-labelledby="13">    <span data-symbols="#get3" data-i="8" >get3</span>(<span data-symbols="7377-1" >front</span>, <span class="syn_string" >"create-node"</span>),
</code><code id="line-14" aria-labelledby="14">    <span data-symbols="#get2" data-i="9" >get2</span>(<span data-symbols="7377-1" >front</span>, <span class="syn_string" >"connect-node"</span>),
</code><code id="line-15" aria-labelledby="15">  ]);
</code><code id="line-16" aria-labelledby="16">
</code><code id="line-17" aria-labelledby="17">  <span data-symbols="#is" data-i="10" >is</span>(<span data-symbols="7377-4" >destNode</span>.<span data-symbols="#type,destNode#type" data-i="11" >type</span>, <span class="syn_string" >"AudioDestinationNode"</span>, <span class="syn_string" >"WebAudioActor:create-node returns AudioNodeActor for AudioDestination"</span>);
</code><code id="line-18" aria-labelledby="18">  <span data-symbols="#is" data-i="12" >is</span>(<span data-symbols="7377-5" >oscNode</span>.<span data-symbols="#type,oscNode#type" data-i="13" >type</span>, <span class="syn_string" >"OscillatorNode"</span>, <span class="syn_string" >"WebAudioActor:create-node returns AudioNodeActor"</span>);
</code><code id="line-19" aria-labelledby="19">  <span data-symbols="#is" data-i="14" >is</span>(<span data-symbols="7377-6" >gainNode</span>.<span data-symbols="#type,gainNode#type" data-i="15" >type</span>, <span class="syn_string" >"GainNode"</span>, <span class="syn_string" >"WebAudioActor:create-node returns AudioNodeActor"</span>);
</code><code id="line-20" aria-labelledby="20">
</code><code id="line-21" aria-labelledby="21">  <span class="syn_reserved" >let</span> { <span data-symbols="7377-9" >source</span>, <span data-symbols="7377-10" >dest</span> } = <span data-symbols="7377-7" >connect1</span>;
</code><code id="line-22" aria-labelledby="22">  <span data-symbols="#is" data-i="16" >is</span>(<span data-symbols="7377-9" >source</span>.<span data-symbols="#actorID,source#actorID" data-i="17" >actorID</span>, <span data-symbols="7377-5" >oscNode</span>.<span data-symbols="#actorID,oscNode#actorID" data-i="18" >actorID</span>, <span class="syn_string" >"WebAudioActor:connect-node returns correct actor with ID on source (osc->gain)"</span>);
</code><code id="line-23" aria-labelledby="23">  <span data-symbols="#is" data-i="19" >is</span>(<span data-symbols="7377-10" >dest</span>.<span data-symbols="#actorID,dest#actorID" data-i="20" >actorID</span>, <span data-symbols="7377-6" >gainNode</span>.<span data-symbols="#actorID,gainNode#actorID" data-i="21" >actorID</span>, <span class="syn_string" >"WebAudioActor:connect-node returns correct actor with ID on dest (osc->gain)"</span>);
</code><code id="line-24" aria-labelledby="24">
</code><code id="line-25" aria-labelledby="25">  ({ <span class="syn_def" data-symbols="#source,7377-9" data-i="22" >source</span>, <span class="syn_def" data-symbols="#dest,7377-10" data-i="23" >dest</span> } = <span data-symbols="7377-8" >connect2</span>);
</code><code id="line-26" aria-labelledby="26">  <span data-symbols="#is" data-i="24" >is</span>(<span data-symbols="7377-9" >source</span>.<span data-symbols="#actorID,source#actorID" data-i="25" >actorID</span>, <span data-symbols="7377-6" >gainNode</span>.<span data-symbols="#actorID,gainNode#actorID" data-i="26" >actorID</span>, <span class="syn_string" >"WebAudioActor:connect-node returns correct actor with ID on source (gain->dest)"</span>);
</code><code id="line-27" aria-labelledby="27">  <span data-symbols="#is" data-i="27" >is</span>(<span data-symbols="7377-10" >dest</span>.<span data-symbols="#actorID,dest#actorID" data-i="28" >actorID</span>, <span data-symbols="7377-4" >destNode</span>.<span data-symbols="#actorID,destNode#actorID" data-i="29" >actorID</span>, <span class="syn_string" >"WebAudioActor:connect-node returns correct actor with ID on dest (gain->dest)"</span>);
</code><code id="line-28" aria-labelledby="28">
</code><code id="line-29" aria-labelledby="29">  await <span data-symbols="#removeTab" data-i="30" >removeTab</span>(<span data-symbols="7377-0" >target</span>.<span data-symbols="#tab,target#tab" data-i="31" >tab</span>);
</code><code id="line-30" aria-labelledby="30">});
</code></pre>      </td>
    </tr>
  </tbody>
</table>
<script>var ANALYSIS_DATA = [[[],[{"pretty":"property add_task","sym":"#add_task"}]],[[],[{"pretty":"property initBackend","sym":"#initBackend"}]],[[{"pretty":"SIMPLE_CONTEXT_URL","sym":"#SIMPLE_CONTEXT_URL"}],[{"pretty":"property SIMPLE_CONTEXT_URL","sym":"#SIMPLE_CONTEXT_URL"}]],[[],[{"pretty":"property Promise","sym":"#Promise"}]],[[],[{"pretty":"property all","sym":"#all"},{"pretty":"property Promise.all","sym":"Promise#all"}]],[[],[{"pretty":"property setup","sym":"#setup"},{"pretty":"property front.setup","sym":"front#setup"}]],[[],[{"pretty":"property reload","sym":"#reload"}]],[[],[{"pretty":"property once","sym":"#once"}]],[[{"pretty":"get3","sym":"#get3"}],[{"pretty":"property get3","sym":"#get3"}]],[[{"pretty":"get2","sym":"#get2"}],[{"pretty":"property get2","sym":"#get2"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property type","sym":"#type"},{"pretty":"property destNode.type","sym":"destNode#type"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property type","sym":"#type"},{"pretty":"property oscNode.type","sym":"oscNode#type"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property type","sym":"#type"},{"pretty":"property gainNode.type","sym":"gainNode#type"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property actorID","sym":"#actorID"},{"pretty":"property source.actorID","sym":"source#actorID"}]],[[],[{"pretty":"property actorID","sym":"#actorID"},{"pretty":"property oscNode.actorID","sym":"oscNode#actorID"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property actorID","sym":"#actorID"},{"pretty":"property dest.actorID","sym":"dest#actorID"}]],[[],[{"pretty":"property actorID","sym":"#actorID"},{"pretty":"property gainNode.actorID","sym":"gainNode#actorID"}]],[[],[{"pretty":"property source","sym":"#source"}]],[[],[{"pretty":"property dest","sym":"#dest"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property actorID","sym":"#actorID"},{"pretty":"property source.actorID","sym":"source#actorID"}]],[[],[{"pretty":"property actorID","sym":"#actorID"},{"pretty":"property gainNode.actorID","sym":"gainNode#actorID"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property actorID","sym":"#actorID"},{"pretty":"property dest.actorID","sym":"dest#actorID"}]],[[],[{"pretty":"property actorID","sym":"#actorID"},{"pretty":"property destNode.actorID","sym":"destNode#actorID"}]],[[],[{"pretty":"property removeTab","sym":"#removeTab"}]],[[],[{"pretty":"property tab","sym":"#tab"},{"pretty":"property target.tab","sym":"target#tab"}]]];</script>
    </div>
  <div id="foot" class="footer">
    This page was generated by Searchfox <span class="pretty-date" data-datetime="Wed, 13 Feb 2019 15:28:42 +0000"></span>.
  </div>
  <span id="data" data-root="/" data-search="/mozilla-central/search" data-tree="mozilla-central" data-path="devtools/client/webaudioeditor/test/browser_webaudio-actor-simple.js"></span>
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
