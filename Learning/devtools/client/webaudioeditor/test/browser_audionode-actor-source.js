<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8" />
  <link href="/static/icons/search.png" rel="shortcut icon">
  <title>browser_audionode-actor-source.js - mozsearch</title>
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
<div class="breadcrumbs"><a href="/mozilla-central/source/">mozilla-central</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools">devtools</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client">client</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor">webaudioeditor</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/test">test</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/test/browser_audionode-actor-source.js">browser_audionode-actor-source.js</a></div>
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
  <a href="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/test/browser_audionode-actor-source.js" title="Permalink" class="icon" data-update-link="true" data-link="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/test/browser_audionode-actor-source.js">Permalink <span class="accel">Y</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/log/tip/devtools/client/webaudioeditor/test/browser_audionode-actor-source.js" title="Log" class="icon">Log <span class="accel">L</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/raw-file/tip/devtools/client/webaudioeditor/test/browser_audionode-actor-source.js" title="Raw" class="icon">Raw <span class="accel">R</span></a>
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
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-is-source.js#1" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l2" class="line-number">2
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-is-source.js#2" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l3" class="line-number">3
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-is-source.js#3" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l4" class="line-number">4
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-is-source.js#4" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l5" class="line-number">5
<div class="blame-strip c2" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#browser/devtools/webaudioeditor/test/browser_audionode-actor-source.js#5" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l6" class="line-number">6
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-is-source.js#6" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l7" class="line-number">7
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-is-source.js#7" role="button" aria-label="blame" aria-expanded="false"></div>
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
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-is-source.js#11" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l12" class="line-number">12
<div class="blame-strip c1" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#12" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l13" class="line-number">13
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-is-source.js#13" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l14" class="line-number">14
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-is-source.js#14" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l15" class="line-number">15
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#15" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l16" class="line-number">16
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#16" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l17" class="line-number">17
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-is-source.js#17" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l18" class="line-number">18
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-is-source.js#18" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l19" class="line-number">19
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#19" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l20" class="line-number">20
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#20" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l21" class="line-number">21
<div class="blame-strip c1" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#browser/devtools/webaudioeditor/test/browser_audionode-actor-source.js#21" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l22" class="line-number">22
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#22" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l23" class="line-number">23
<div class="blame-strip c1" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#browser/devtools/webaudioeditor/test/browser_audionode-actor-source.js#23" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l24" class="line-number">24
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#24" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l25" class="line-number">25
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-is-source.js#24" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l26" class="line-number">26
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#browser/devtools/webaudioeditor/test/browser_audionode-actor-is-source.js#25" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l27" class="line-number">27
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#26" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l28" class="line-number">28
<div class="blame-strip c1" data-blame="3c0bacbcdc816623a9982b930c0638c78ab4a2c5#browser/devtools/webaudioeditor/test/browser_audionode-actor-is-source.js#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
      </td>
      <td class="code">
<pre><code id="line-1" aria-labelledby="1"><span class="syn_comment" >/* Any copyright is dedicated to the Public Domain.</span>
</code><code id="line-2" aria-labelledby="2"><span class="syn_comment" >   <a href="http://creativecommons.org/publicdomain/zero/1.0/">http://creativecommons.org/publicdomain/zero/1.0/</a> */</span>
</code><code id="line-3" aria-labelledby="3">
</code><code id="line-4" aria-labelledby="4"><span class="syn_comment" >/**</span>
</code><code id="line-5" aria-labelledby="5"><span class="syn_comment" > * Test AudioNode#source</span>
</code><code id="line-6" aria-labelledby="6"><span class="syn_comment" > */</span>
</code><code id="line-7" aria-labelledby="7">
</code><code id="line-8" aria-labelledby="8"><span data-symbols="#add_task" data-i="0" >add_task</span>(async <span class="syn_reserved" >function</span>() {
</code><code id="line-9" aria-labelledby="9">  <span class="syn_reserved" >const</span> { <span data-symbols="7340-0" >target</span>, <span data-symbols="7340-1" >front</span> } = await <span data-symbols="#initBackend" data-i="1" >initBackend</span>(<span data-symbols="#SIMPLE_NODES_URL" data-i="2" >SIMPLE_NODES_URL</span>);
</code><code id="line-10" aria-labelledby="10">  <span class="syn_reserved" >const</span> [<span data-symbols="7340-2" >_</span>, <span data-symbols="7340-3" >nodes</span>] = await <span data-symbols="#Promise" data-i="3" >Promise</span>.<span data-symbols="#all,Promise#all" data-i="4" >all</span>([
</code><code id="line-11" aria-labelledby="11">    <span data-symbols="7340-1" >front</span>.<span data-symbols="#setup,front#setup" data-i="5" >setup</span>({ <span class="syn_def" data-symbols="#reload" data-i="6" >reload</span>: <span class="syn_reserved" >true</span> }),
</code><code id="line-12" aria-labelledby="12">    <span data-symbols="#getN" data-i="7" >getN</span>(<span data-symbols="7340-1" >front</span>, <span class="syn_string" >"create-node"</span>, 14),
</code><code id="line-13" aria-labelledby="13">  ]);
</code><code id="line-14" aria-labelledby="14">
</code><code id="line-15" aria-labelledby="15">  <span class="syn_reserved" >const</span> <span data-symbols="7340-4" >actualTypes</span> = <span data-symbols="7340-3" >nodes</span>.<span data-symbols="#map,nodes#map" data-i="8" >map</span>(<span data-symbols="7340-5" >node</span> => <span data-symbols="7340-5" >node</span>.<span data-symbols="#type,node#type" data-i="9" >type</span>);
</code><code id="line-16" aria-labelledby="16">  <span class="syn_reserved" >const</span> <span data-symbols="7340-6" >isSourceResult</span> = <span data-symbols="7340-3" >nodes</span>.<span data-symbols="#map,nodes#map" data-i="10" >map</span>(<span data-symbols="7340-7" >node</span> => <span data-symbols="7340-7" >node</span>.<span data-symbols="#source,node#source" data-i="11" >source</span>);
</code><code id="line-17" aria-labelledby="17">
</code><code id="line-18" aria-labelledby="18">  <span data-symbols="7340-4" >actualTypes</span>.<span data-symbols="#forEach,actualTypes#forEach" data-i="12" >forEach</span>((<span data-symbols="7340-8" >type</span>, <span data-symbols="7340-9" >i</span>) => {
</code><code id="line-19" aria-labelledby="19">    <span class="syn_reserved" >const</span> <span data-symbols="7340-10" >shouldBeSource</span> = <span data-symbols="7340-8" >type</span> === <span class="syn_string" >"AudioBufferSourceNode"</span> || <span data-symbols="7340-8" >type</span> === <span class="syn_string" >"OscillatorNode"</span>;
</code><code id="line-20" aria-labelledby="20">    <span class="syn_reserved" >if</span> (<span data-symbols="7340-10" >shouldBeSource</span>) {
</code><code id="line-21" aria-labelledby="21">      <span data-symbols="#is" data-i="13" >is</span>(<span data-symbols="7340-6" >isSourceResult</span>[<span data-symbols="7340-9" >i</span>], <span class="syn_reserved" >true</span>, <span data-symbols="7340-8" >type</span> + <span class="syn_string" >"'s `source` is `true`"</span>);
</code><code id="line-22" aria-labelledby="22">    } <span class="syn_reserved" >else</span> {
</code><code id="line-23" aria-labelledby="23">      <span data-symbols="#is" data-i="14" >is</span>(<span data-symbols="7340-6" >isSourceResult</span>[<span data-symbols="7340-9" >i</span>], <span class="syn_reserved" >false</span>, <span data-symbols="7340-8" >type</span> + <span class="syn_string" >"'s `source` is `false`"</span>);
</code><code id="line-24" aria-labelledby="24">    }
</code><code id="line-25" aria-labelledby="25">  });
</code><code id="line-26" aria-labelledby="26">
</code><code id="line-27" aria-labelledby="27">  await <span data-symbols="#removeTab" data-i="15" >removeTab</span>(<span data-symbols="7340-0" >target</span>.<span data-symbols="#tab,target#tab" data-i="16" >tab</span>);
</code><code id="line-28" aria-labelledby="28">});
</code></pre>      </td>
    </tr>
  </tbody>
</table>
<script>var ANALYSIS_DATA = [[[],[{"pretty":"property add_task","sym":"#add_task"}]],[[],[{"pretty":"property initBackend","sym":"#initBackend"}]],[[{"pretty":"SIMPLE_NODES_URL","sym":"#SIMPLE_NODES_URL"}],[{"pretty":"property SIMPLE_NODES_URL","sym":"#SIMPLE_NODES_URL"}]],[[],[{"pretty":"property Promise","sym":"#Promise"}]],[[],[{"pretty":"property all","sym":"#all"},{"pretty":"property Promise.all","sym":"Promise#all"}]],[[],[{"pretty":"property setup","sym":"#setup"},{"pretty":"property front.setup","sym":"front#setup"}]],[[],[{"pretty":"property reload","sym":"#reload"}]],[[{"pretty":"getN","sym":"#getN"}],[{"pretty":"property getN","sym":"#getN"}]],[[],[{"pretty":"property map","sym":"#map"},{"pretty":"property nodes.map","sym":"nodes#map"}]],[[],[{"pretty":"property type","sym":"#type"},{"pretty":"property node.type","sym":"node#type"}]],[[],[{"pretty":"property map","sym":"#map"},{"pretty":"property nodes.map","sym":"nodes#map"}]],[[{"pretty":"node.source","sym":"node#source"}],[{"pretty":"property source","sym":"#source"},{"pretty":"property node.source","sym":"node#source"}]],[[],[{"pretty":"property forEach","sym":"#forEach"},{"pretty":"property actualTypes.forEach","sym":"actualTypes#forEach"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property is","sym":"#is"}]],[[],[{"pretty":"property removeTab","sym":"#removeTab"}]],[[],[{"pretty":"property tab","sym":"#tab"},{"pretty":"property target.tab","sym":"target#tab"}]]];</script>
    </div>
  <div id="foot" class="footer">
    This page was generated by Searchfox <span class="pretty-date" data-datetime="Wed, 13 Feb 2019 15:28:42 +0000"></span>.
  </div>
  <span id="data" data-root="/" data-search="/mozilla-central/search" data-tree="mozilla-central" data-path="devtools/client/webaudioeditor/test/browser_audionode-actor-source.js"></span>
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
