<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8" />
  <link href="/static/icons/search.png" rel="shortcut icon">
  <title>webaudio.js - mozsearch</title>
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
<div class="breadcrumbs"><a href="/mozilla-central/source/">mozilla-central</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools">devtools</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/server">server</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/server/actors">actors</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/server/actors/webaudio.js">webaudio.js</a></div>
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
  <a href="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/server/actors/webaudio.js" title="Permalink" class="icon" data-update-link="true" data-link="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/server/actors/webaudio.js">Permalink <span class="accel">Y</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/log/tip/devtools/server/actors/webaudio.js" title="Log" class="icon">Log <span class="accel">L</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/raw-file/tip/devtools/server/actors/webaudio.js" title="Raw" class="icon">Raw <span class="accel">R</span></a>
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
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#1" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l2" class="line-number">2
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#2" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l3" class="line-number">3
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#3" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l4" class="line-number">4
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#4" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l5" class="line-number">5
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#5" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l6" class="line-number">6
<div class="blame-strip c2" data-blame="3e02aa5978268d680af3e6ea21f8f54ff58058f5#%#6" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l7" class="line-number">7
<div class="blame-strip c1" data-blame="ca47a9a2a79c2dd7b4268d54ddf6963013f6fcf9#toolkit/devtools/server/actors/webaudio.js#7" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l8" class="line-number">8
<div class="blame-strip c2" data-blame="21e6e270a49019cd376204aa17f1bacf1c17f0d9#%#8" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l9" class="line-number">9
<div class="blame-strip c1" data-blame="ca47a9a2a79c2dd7b4268d54ddf6963013f6fcf9#toolkit/devtools/server/actors/webaudio.js#9" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l10" class="line-number">10
<div class="blame-strip c2" data-blame="2f312892d5a257f98ae2285bb85957470ef80680#%#13" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l11" class="line-number">11
<div class="blame-strip c1" data-blame="825e041cf6d328136b944ba7fbe2c9e63af48db8#%#11" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l12" class="line-number">12
<div class="blame-strip c2" data-blame="c2c2ef50c55e03b256872a0a6f36aaf23dd1b283#%#12" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l13" class="line-number">13
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#16" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l14" class="line-number">14
<div class="blame-strip c2" data-blame="644e1b42f851e83598451542be0a5af39578583d#%#20" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l15" class="line-number">15
<div class="blame-strip c2" data-blame="644e1b42f851e83598451542be0a5af39578583d#%#21" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l16" class="line-number">16
<div class="blame-strip c1" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#16" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l17" class="line-number">17
<div class="blame-strip c2" data-blame="644e1b42f851e83598451542be0a5af39578583d#%#26" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l18" class="line-number">18
<div class="blame-strip c2" data-blame="644e1b42f851e83598451542be0a5af39578583d#%#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l19" class="line-number">19
<div class="blame-strip c1" data-blame="f5dd02cc37d2fb3923869a175564cfa719755729#%#21" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l20" class="line-number">20
<div class="blame-strip c2" data-blame="21e6e270a49019cd376204aa17f1bacf1c17f0d9#%#20" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l21" class="line-number">21
<div class="blame-strip c1" data-blame="f5dd02cc37d2fb3923869a175564cfa719755729#%#24" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l22" class="line-number">22
<div class="blame-strip c2" data-blame="a137b66eaefb24dce702b577d26028cf4c236530#toolkit/devtools/server/actors/webaudio.js#19" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l23" class="line-number">23
<div class="blame-strip c1" data-blame="a64318362951b77fb347d1c1a5469af01066b327#toolkit/devtools/server/actors/webaudio.js#20" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l24" class="line-number">24
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#21" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l25" class="line-number">25
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#22" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l26" class="line-number">26
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#23" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l27" class="line-number">27
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#25" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l28" class="line-number">28
<div class="blame-strip c2" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#28" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l29" class="line-number">29
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l30" class="line-number">30
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#28" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l31" class="line-number">31
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#toolkit/devtools/server/actors/webaudio.js#109" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l32" class="line-number">32
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#43" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l33" class="line-number">33
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#44" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l34" class="line-number">34
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#45" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l35" class="line-number">35
<div class="blame-strip c2" data-blame="f389d7ede34cd37acd11ba5c306665367de40b47#%#41" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l36" class="line-number">36
<div class="blame-strip c1" data-blame="d028804adeb7db6f15611173c2667f7ca9425bd9#%#36" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l37" class="line-number">37
<div class="blame-strip c2" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#toolkit/devtools/server/actors/webaudio.js#58" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l38" class="line-number">38
<div class="blame-strip c1" data-blame="3e02aa5978268d680af3e6ea21f8f54ff58058f5#%#42" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l39" class="line-number">39
<div class="blame-strip c1" data-blame="3e02aa5978268d680af3e6ea21f8f54ff58058f5#%#43" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l40" class="line-number">40
<div class="blame-strip c2" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#toolkit/devtools/server/actors/webaudio.js#60" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l41" class="line-number">41
<div class="blame-strip c2" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#toolkit/devtools/server/actors/webaudio.js#61" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l42" class="line-number">42
<div class="blame-strip c2" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#toolkit/devtools/server/actors/webaudio.js#62" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l43" class="line-number">43
<div class="blame-strip c2" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#toolkit/devtools/server/actors/webaudio.js#63" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l44" class="line-number">44
<div class="blame-strip c2" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#toolkit/devtools/server/actors/webaudio.js#64" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l45" class="line-number">45
<div class="blame-strip c2" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#toolkit/devtools/server/actors/webaudio.js#65" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l46" class="line-number">46
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#49" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l47" class="line-number">47
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#50" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l48" class="line-number">48
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#51" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l49" class="line-number">49
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#52" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l50" class="line-number">50
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#53" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l51" class="line-number">51
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#54" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l52" class="line-number">52
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#55" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l53" class="line-number">53
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#56" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l54" class="line-number">54
<div class="blame-strip c2" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#58" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l55" class="line-number">55
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#58" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l56" class="line-number">56
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#127" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l57" class="line-number">57
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#128" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l58" class="line-number">58
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#129" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l59" class="line-number">59
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#130" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l60" class="line-number">60
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#131" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l61" class="line-number">61
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#132" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l62" class="line-number">62
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#133" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l63" class="line-number">63
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#142" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l64" class="line-number">64
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#143" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l65" class="line-number">65
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#144" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l66" class="line-number">66
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#60" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l67" class="line-number">67
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#135" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l68" class="line-number">68
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#62" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l69" class="line-number">69
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#63" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l70" class="line-number">70
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#64" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l71" class="line-number">71
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#150" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l72" class="line-number">72
<div class="blame-strip c2" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#toolkit/devtools/server/actors/webaudio.js#92" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l73" class="line-number">73
<div class="blame-strip c2" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#toolkit/devtools/server/actors/webaudio.js#93" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l74" class="line-number">74
<div class="blame-strip c2" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#toolkit/devtools/server/actors/webaudio.js#94" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l75" class="line-number">75
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#151" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l76" class="line-number">76
<div class="blame-strip c2" data-blame="a137b66eaefb24dce702b577d26028cf4c236530#toolkit/devtools/server/actors/webaudio.js#80" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l77" class="line-number">77
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#153" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l78" class="line-number">78
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#154" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l79" class="line-number">79
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#155" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l80" class="line-number">80
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#156" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l81" class="line-number">81
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#65" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l82" class="line-number">82
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#66" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l83" class="line-number">83
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#67" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l84" class="line-number">84
<div class="blame-strip c1" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#toolkit/devtools/server/actors/webaudio.js#104" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l85" class="line-number">85
<div class="blame-strip c1" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#toolkit/devtools/server/actors/webaudio.js#105" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l86" class="line-number">86
<div class="blame-strip c1" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#toolkit/devtools/server/actors/webaudio.js#106" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l87" class="line-number">87
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#70" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l88" class="line-number">88
<div class="blame-strip c1" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#92" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l89" class="line-number">89
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#72" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l90" class="line-number">90
<div class="blame-strip c1" data-blame="644e1b42f851e83598451542be0a5af39578583d#%#99" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l91" class="line-number">91
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#86" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l92" class="line-number">92
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#87" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l93" class="line-number">93
<div class="blame-strip c1" data-blame="917f9bfa8b256fd3342b1ad993705d2c309cfb4b#toolkit/devtools/server/actors/webaudio.js#160" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l94" class="line-number">94
<div class="blame-strip c1" data-blame="917f9bfa8b256fd3342b1ad993705d2c309cfb4b#toolkit/devtools/server/actors/webaudio.js#161" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l95" class="line-number">95
<div class="blame-strip c1" data-blame="917f9bfa8b256fd3342b1ad993705d2c309cfb4b#toolkit/devtools/server/actors/webaudio.js#162" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l96" class="line-number">96
<div class="blame-strip c1" data-blame="917f9bfa8b256fd3342b1ad993705d2c309cfb4b#toolkit/devtools/server/actors/webaudio.js#163" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l97" class="line-number">97
<div class="blame-strip c1" data-blame="917f9bfa8b256fd3342b1ad993705d2c309cfb4b#toolkit/devtools/server/actors/webaudio.js#164" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l98" class="line-number">98
<div class="blame-strip c2" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#102" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l99" class="line-number">99
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#103" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l100" class="line-number">100
<div class="blame-strip c2" data-blame="917f9bfa8b256fd3342b1ad993705d2c309cfb4b#toolkit/devtools/server/actors/webaudio.js#167" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l101" class="line-number">101
<div class="blame-strip c2" data-blame="917f9bfa8b256fd3342b1ad993705d2c309cfb4b#toolkit/devtools/server/actors/webaudio.js#168" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l102" class="line-number">102
<div class="blame-strip c2" data-blame="917f9bfa8b256fd3342b1ad993705d2c309cfb4b#toolkit/devtools/server/actors/webaudio.js#169" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l103" class="line-number">103
<div class="blame-strip c2" data-blame="917f9bfa8b256fd3342b1ad993705d2c309cfb4b#toolkit/devtools/server/actors/webaudio.js#170" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l104" class="line-number">104
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#toolkit/devtools/server/actors/webaudio.js#231" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l105" class="line-number">105
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#toolkit/devtools/server/actors/webaudio.js#232" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l106" class="line-number">106
<div class="blame-strip c1" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#toolkit/devtools/server/actors/webaudio.js#233" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l107" class="line-number">107
<div class="blame-strip c2" data-blame="644e1b42f851e83598451542be0a5af39578583d#%#116" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l108" class="line-number">108
<div class="blame-strip c1" data-blame="917f9bfa8b256fd3342b1ad993705d2c309cfb4b#toolkit/devtools/server/actors/webaudio.js#175" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l109" class="line-number">109
<div class="blame-strip c1" data-blame="917f9bfa8b256fd3342b1ad993705d2c309cfb4b#toolkit/devtools/server/actors/webaudio.js#176" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l110" class="line-number">110
<div class="blame-strip c1" data-blame="917f9bfa8b256fd3342b1ad993705d2c309cfb4b#toolkit/devtools/server/actors/webaudio.js#177" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l111" class="line-number">111
<div class="blame-strip c2" data-blame="3e02aa5978268d680af3e6ea21f8f54ff58058f5#%#115" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l112" class="line-number">112
<div class="blame-strip c2" data-blame="3e02aa5978268d680af3e6ea21f8f54ff58058f5#%#116" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l113" class="line-number">113
<div class="blame-strip c2" data-blame="3e02aa5978268d680af3e6ea21f8f54ff58058f5#%#117" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l114" class="line-number">114
<div class="blame-strip c1" data-blame="917f9bfa8b256fd3342b1ad993705d2c309cfb4b#toolkit/devtools/server/actors/webaudio.js#180" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l115" class="line-number">115
<div class="blame-strip c1" data-blame="917f9bfa8b256fd3342b1ad993705d2c309cfb4b#toolkit/devtools/server/actors/webaudio.js#181" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l116" class="line-number">116
<div class="blame-strip c1" data-blame="917f9bfa8b256fd3342b1ad993705d2c309cfb4b#toolkit/devtools/server/actors/webaudio.js#182" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l117" class="line-number">117
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#toolkit/devtools/server/actors/webaudio.js#246" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l118" class="line-number">118
<div class="blame-strip c1" data-blame="917f9bfa8b256fd3342b1ad993705d2c309cfb4b#toolkit/devtools/server/actors/webaudio.js#183" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l119" class="line-number">119
<div class="blame-strip c2" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#123" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l120" class="line-number">120
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#124" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l121" class="line-number">121
<div class="blame-strip c2" data-blame="917f9bfa8b256fd3342b1ad993705d2c309cfb4b#toolkit/devtools/server/actors/webaudio.js#186" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l122" class="line-number">122
<div class="blame-strip c2" data-blame="917f9bfa8b256fd3342b1ad993705d2c309cfb4b#toolkit/devtools/server/actors/webaudio.js#187" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l123" class="line-number">123
<div class="blame-strip c1" data-blame="3e02aa5978268d680af3e6ea21f8f54ff58058f5#%#127" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l124" class="line-number">124
<div class="blame-strip c2" data-blame="917f9bfa8b256fd3342b1ad993705d2c309cfb4b#toolkit/devtools/server/actors/webaudio.js#189" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l125" class="line-number">125
<div class="blame-strip c2" data-blame="917f9bfa8b256fd3342b1ad993705d2c309cfb4b#toolkit/devtools/server/actors/webaudio.js#190" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l126" class="line-number">126
<div class="blame-strip c1" data-blame="866d2a1dfc1dc74572407562da916379cc6ef092#toolkit/devtools/server/actors/webaudio.js#148" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l127" class="line-number">127
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#toolkit/devtools/server/actors/webaudio.js#257" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l128" class="line-number">128
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#toolkit/devtools/server/actors/webaudio.js#258" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l129" class="line-number">129
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#toolkit/devtools/server/actors/webaudio.js#259" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l130" class="line-number">130
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#toolkit/devtools/server/actors/webaudio.js#260" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l131" class="line-number">131
<div class="blame-strip c1" data-blame="644e1b42f851e83598451542be0a5af39578583d#%#140" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l132" class="line-number">132
<div class="blame-strip c2" data-blame="917f9bfa8b256fd3342b1ad993705d2c309cfb4b#toolkit/devtools/server/actors/webaudio.js#196" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l133" class="line-number">133
<div class="blame-strip c2" data-blame="917f9bfa8b256fd3342b1ad993705d2c309cfb4b#toolkit/devtools/server/actors/webaudio.js#197" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l134" class="line-number">134
<div class="blame-strip c1" data-blame="60bce06019931102306e62c9a27b247afafa06bb#toolkit/devtools/server/actors/webaudio.js#158" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l135" class="line-number">135
<div class="blame-strip c1" data-blame="60bce06019931102306e62c9a27b247afafa06bb#toolkit/devtools/server/actors/webaudio.js#159" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l136" class="line-number">136
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#91" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l137" class="line-number">137
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#92" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l138" class="line-number">138
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#93" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l139" class="line-number">139
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#94" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l140" class="line-number">140
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#95" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l141" class="line-number">141
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#96" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l142" class="line-number">142
<div class="blame-strip c1" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#146" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l143" class="line-number">143
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#147" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l144" class="line-number">144
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#172" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l145" class="line-number">145
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#173" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l146" class="line-number">146
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#174" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l147" class="line-number">147
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#175" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l148" class="line-number">148
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#176" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l149" class="line-number">149
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#102" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l150" class="line-number">150
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#234" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l151" class="line-number">151
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#179" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l152" class="line-number">152
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#236" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l153" class="line-number">153
<div class="blame-strip c2" data-blame="3e02aa5978268d680af3e6ea21f8f54ff58058f5#%#157" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l154" class="line-number">154
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#181" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l155" class="line-number">155
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#240" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l156" class="line-number">156
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#107" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l157" class="line-number">157
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#108" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l158" class="line-number">158
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#109" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l159" class="line-number">159
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#110" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l160" class="line-number">160
<div class="blame-strip c2" data-blame="644e1b42f851e83598451542be0a5af39578583d#%#170" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l161" class="line-number">161
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#118" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l162" class="line-number">162
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#119" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l163" class="line-number">163
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#120" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l164" class="line-number">164
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#121" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l165" class="line-number">165
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#122" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l166" class="line-number">166
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#123" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l167" class="line-number">167
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#124" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l168" class="line-number">168
<div class="blame-strip c2" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#172" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l169" class="line-number">169
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#173" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l170" class="line-number">170
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#202" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l171" class="line-number">171
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#203" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l172" class="line-number">172
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#204" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l173" class="line-number">173
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#205" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l174" class="line-number">174
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#206" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l175" class="line-number">175
<div class="blame-strip c1" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#toolkit/devtools/server/actors/webaudio.js#192" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l176" class="line-number">176
<div class="blame-strip c1" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#toolkit/devtools/server/actors/webaudio.js#193" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l177" class="line-number">177
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#181" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l178" class="line-number">178
<div class="blame-strip c1" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#toolkit/devtools/server/actors/webaudio.js#195" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l179" class="line-number">179
<div class="blame-strip c1" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#toolkit/devtools/server/actors/webaudio.js#196" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l180" class="line-number">180
<div class="blame-strip c1" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#toolkit/devtools/server/actors/webaudio.js#197" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l181" class="line-number">181
<div class="blame-strip c1" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#toolkit/devtools/server/actors/webaudio.js#198" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l182" class="line-number">182
<div class="blame-strip c1" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#toolkit/devtools/server/actors/webaudio.js#199" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l183" class="line-number">183
<div class="blame-strip c1" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#toolkit/devtools/server/actors/webaudio.js#200" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l184" class="line-number">184
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#188" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l185" class="line-number">185
<div class="blame-strip c1" data-blame="33de07f14a0919884087308a898f3b66b8dabd00#toolkit/devtools/server/actors/webaudio.js#213" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l186" class="line-number">186
<div class="blame-strip c2" data-blame="ca47a9a2a79c2dd7b4268d54ddf6963013f6fcf9#toolkit/devtools/server/actors/webaudio.js#231" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l187" class="line-number">187
<div class="blame-strip c1" data-blame="644e1b42f851e83598451542be0a5af39578583d#%#197" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l188" class="line-number">188
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#toolkit/devtools/server/actors/webaudio.js#207" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l189" class="line-number">189
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#toolkit/devtools/server/actors/webaudio.js#208" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l190" class="line-number">190
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#toolkit/devtools/server/actors/webaudio.js#209" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l191" class="line-number">191
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#toolkit/devtools/server/actors/webaudio.js#210" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l192" class="line-number">192
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#toolkit/devtools/server/actors/webaudio.js#211" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l193" class="line-number">193
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#toolkit/devtools/server/actors/webaudio.js#212" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l194" class="line-number">194
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#toolkit/devtools/server/actors/webaudio.js#213" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l195" class="line-number">195
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#toolkit/devtools/server/actors/webaudio.js#214" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l196" class="line-number">196
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#toolkit/devtools/server/actors/webaudio.js#215" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l197" class="line-number">197
<div class="blame-strip c1" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#201" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l198" class="line-number">198
<div class="blame-strip c2" data-blame="a137b66eaefb24dce702b577d26028cf4c236530#toolkit/devtools/server/actors/webaudio.js#236" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l199" class="line-number">199
<div class="blame-strip c1" data-blame="644e1b42f851e83598451542be0a5af39578583d#%#209" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l200" class="line-number">200
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#toolkit/devtools/server/actors/webaudio.js#222" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l201" class="line-number">201
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#toolkit/devtools/server/actors/webaudio.js#223" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l202" class="line-number">202
<div class="blame-strip c1" data-blame="ca47a9a2a79c2dd7b4268d54ddf6963013f6fcf9#toolkit/devtools/server/actors/webaudio.js#255" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l203" class="line-number">203
<div class="blame-strip c1" data-blame="ca47a9a2a79c2dd7b4268d54ddf6963013f6fcf9#toolkit/devtools/server/actors/webaudio.js#256" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l204" class="line-number">204
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#toolkit/devtools/server/actors/webaudio.js#226" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l205" class="line-number">205
<div class="blame-strip c1" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#209" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l206" class="line-number">206
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#210" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l207" class="line-number">207
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#toolkit/devtools/server/actors/webaudio.js#229" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l208" class="line-number">208
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#toolkit/devtools/server/actors/webaudio.js#230" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l209" class="line-number">209
<div class="blame-strip c2" data-blame="644e1b42f851e83598451542be0a5af39578583d#%#219" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l210" class="line-number">210
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#294" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l211" class="line-number">211
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#295" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l212" class="line-number">212
<div class="blame-strip c2" data-blame="b33d528c76b261418b79d5013b9c0fbed35f7300#toolkit/devtools/server/actors/webaudio.js#296" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l213" class="line-number">213
<div class="blame-strip c2" data-blame="b33d528c76b261418b79d5013b9c0fbed35f7300#toolkit/devtools/server/actors/webaudio.js#297" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l214" class="line-number">214
<div class="blame-strip c1" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#218" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l215" class="line-number">215
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#219" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l216" class="line-number">216
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#220" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l217" class="line-number">217
<div class="blame-strip c1" data-blame="b33d528c76b261418b79d5013b9c0fbed35f7300#toolkit/devtools/server/actors/webaudio.js#301" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l218" class="line-number">218
<div class="blame-strip c1" data-blame="b33d528c76b261418b79d5013b9c0fbed35f7300#toolkit/devtools/server/actors/webaudio.js#302" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l219" class="line-number">219
<div class="blame-strip c1" data-blame="b33d528c76b261418b79d5013b9c0fbed35f7300#toolkit/devtools/server/actors/webaudio.js#303" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l220" class="line-number">220
<div class="blame-strip c1" data-blame="b33d528c76b261418b79d5013b9c0fbed35f7300#toolkit/devtools/server/actors/webaudio.js#304" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l221" class="line-number">221
<div class="blame-strip c1" data-blame="b33d528c76b261418b79d5013b9c0fbed35f7300#toolkit/devtools/server/actors/webaudio.js#305" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l222" class="line-number">222
<div class="blame-strip c1" data-blame="b33d528c76b261418b79d5013b9c0fbed35f7300#toolkit/devtools/server/actors/webaudio.js#306" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l223" class="line-number">223
<div class="blame-strip c1" data-blame="b33d528c76b261418b79d5013b9c0fbed35f7300#toolkit/devtools/server/actors/webaudio.js#307" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l224" class="line-number">224
<div class="blame-strip c1" data-blame="b33d528c76b261418b79d5013b9c0fbed35f7300#toolkit/devtools/server/actors/webaudio.js#308" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l225" class="line-number">225
<div class="blame-strip c1" data-blame="b33d528c76b261418b79d5013b9c0fbed35f7300#toolkit/devtools/server/actors/webaudio.js#309" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l226" class="line-number">226
<div class="blame-strip c1" data-blame="b33d528c76b261418b79d5013b9c0fbed35f7300#toolkit/devtools/server/actors/webaudio.js#310" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l227" class="line-number">227
<div class="blame-strip c1" data-blame="b33d528c76b261418b79d5013b9c0fbed35f7300#toolkit/devtools/server/actors/webaudio.js#311" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l228" class="line-number">228
<div class="blame-strip c1" data-blame="b33d528c76b261418b79d5013b9c0fbed35f7300#toolkit/devtools/server/actors/webaudio.js#312" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l229" class="line-number">229
<div class="blame-strip c1" data-blame="b33d528c76b261418b79d5013b9c0fbed35f7300#toolkit/devtools/server/actors/webaudio.js#313" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l230" class="line-number">230
<div class="blame-strip c1" data-blame="b33d528c76b261418b79d5013b9c0fbed35f7300#toolkit/devtools/server/actors/webaudio.js#314" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l231" class="line-number">231
<div class="blame-strip c1" data-blame="b33d528c76b261418b79d5013b9c0fbed35f7300#toolkit/devtools/server/actors/webaudio.js#315" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l232" class="line-number">232
<div class="blame-strip c2" data-blame="3e02aa5978268d680af3e6ea21f8f54ff58058f5#%#236" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l233" class="line-number">233
<div class="blame-strip c1" data-blame="644e1b42f851e83598451542be0a5af39578583d#%#242" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l234" class="line-number">234
<div class="blame-strip c2" data-blame="b33d528c76b261418b79d5013b9c0fbed35f7300#toolkit/devtools/server/actors/webaudio.js#324" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l235" class="line-number">235
<div class="blame-strip c2" data-blame="b33d528c76b261418b79d5013b9c0fbed35f7300#toolkit/devtools/server/actors/webaudio.js#325" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l236" class="line-number">236
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#296" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l237" class="line-number">237
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#297" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l238" class="line-number">238
<div class="blame-strip c2" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#242" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l239" class="line-number">239
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#243" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l240" class="line-number">240
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#244" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l241" class="line-number">241
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#301" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l242" class="line-number">242
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#302" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l243" class="line-number">243
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#303" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l244" class="line-number">244
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#304" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l245" class="line-number">245
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#305" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l246" class="line-number">246
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#306" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l247" class="line-number">247
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#307" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l248" class="line-number">248
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#308" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l249" class="line-number">249
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#309" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l250" class="line-number">250
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#310" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l251" class="line-number">251
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#311" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l252" class="line-number">252
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#312" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l253" class="line-number">253
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#313" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l254" class="line-number">254
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#314" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l255" class="line-number">255
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#315" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l256" class="line-number">256
<div class="blame-strip c1" data-blame="3e02aa5978268d680af3e6ea21f8f54ff58058f5#%#260" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l257" class="line-number">257
<div class="blame-strip c2" data-blame="644e1b42f851e83598451542be0a5af39578583d#%#265" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l258" class="line-number">258
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#324" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l259" class="line-number">259
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#325" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l260" class="line-number">260
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#326" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l261" class="line-number">261
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#327" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l262" class="line-number">262
<div class="blame-strip c2" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#266" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l263" class="line-number">263
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#267" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l264" class="line-number">264
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#330" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l265" class="line-number">265
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#331" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l266" class="line-number">266
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#332" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l267" class="line-number">267
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#333" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l268" class="line-number">268
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#334" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l269" class="line-number">269
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#335" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l270" class="line-number">270
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#336" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l271" class="line-number">271
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#337" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l272" class="line-number">272
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#338" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l273" class="line-number">273
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#339" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l274" class="line-number">274
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#340" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l275" class="line-number">275
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#341" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l276" class="line-number">276
<div class="blame-strip c1" data-blame="3e02aa5978268d680af3e6ea21f8f54ff58058f5#%#280" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l277" class="line-number">277
<div class="blame-strip c2" data-blame="644e1b42f851e83598451542be0a5af39578583d#%#284" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l278" class="line-number">278
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#398" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l279" class="line-number">279
<div class="blame-strip c2" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#283" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l280" class="line-number">280
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#284" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l281" class="line-number">281
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#405" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l282" class="line-number">282
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#406" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l283" class="line-number">283
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#407" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l284" class="line-number">284
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#408" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l285" class="line-number">285
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#289" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l286" class="line-number">286
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#toolkit/devtools/server/actors/webaudio.js#442" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l287" class="line-number">287
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#toolkit/devtools/server/actors/webaudio.js#443" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l288" class="line-number">288
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#409" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l289" class="line-number">289
<div class="blame-strip c2" data-blame="3e02aa5978268d680af3e6ea21f8f54ff58058f5#%#293" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l290" class="line-number">290
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#411" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l291" class="line-number">291
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#412" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l292" class="line-number">292
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#296" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l293" class="line-number">293
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#297" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l294" class="line-number">294
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#415" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l295" class="line-number">295
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#416" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l296" class="line-number">296
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#300" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l297" class="line-number">297
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#301" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l298" class="line-number">298
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#419" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l299" class="line-number">299
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#420" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l300" class="line-number">300
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#304" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l301" class="line-number">301
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#305" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l302" class="line-number">302
<div class="blame-strip c1" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#toolkit/devtools/server/actors/webaudio.js#458" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l303" class="line-number">303
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#424" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l304" class="line-number">304
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#425" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l305" class="line-number">305
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#426" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l306" class="line-number">306
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#427" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l307" class="line-number">307
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#428" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l308" class="line-number">308
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#429" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l309" class="line-number">309
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#430" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l310" class="line-number">310
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#431" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l311" class="line-number">311
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#315" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l312" class="line-number">312
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#316" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l313" class="line-number">313
<div class="blame-strip c2" data-blame="f2e1ff86cd22d17481c07d21681904a9fee8f68b#toolkit/devtools/server/actors/webaudio.js#469" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l314" class="line-number">314
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#435" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l315" class="line-number">315
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#436" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l316" class="line-number">316
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#437" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l317" class="line-number">317
<div class="blame-strip c2" data-blame="3e02aa5978268d680af3e6ea21f8f54ff58058f5#%#321" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l318" class="line-number">318
<div class="blame-strip c1" data-blame="644e1b42f851e83598451542be0a5af39578583d#%#326" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l319" class="line-number">319
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#443" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l320" class="line-number">320
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#444" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l321" class="line-number">321
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#445" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l322" class="line-number">322
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#446" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l323" class="line-number">323
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#447" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l324" class="line-number">324
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#448" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l325" class="line-number">325
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#449" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l326" class="line-number">326
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#450" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l327" class="line-number">327
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#451" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l328" class="line-number">328
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#452" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l329" class="line-number">329
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#453" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l330" class="line-number">330
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#454" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l331" class="line-number">331
<div class="blame-strip c1" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#335" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l332" class="line-number">332
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#336" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l333" class="line-number">333
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#337" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l334" class="line-number">334
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#458" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l335" class="line-number">335
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#459" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l336" class="line-number">336
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#460" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l337" class="line-number">337
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#461" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l338" class="line-number">338
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#462" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l339" class="line-number">339
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#463" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l340" class="line-number">340
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#464" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l341" class="line-number">341
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#465" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l342" class="line-number">342
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#466" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l343" class="line-number">343
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#467" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l344" class="line-number">344
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#468" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l345" class="line-number">345
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#469" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l346" class="line-number">346
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#470" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l347" class="line-number">347
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#471" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l348" class="line-number">348
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#472" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l349" class="line-number">349
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#473" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l350" class="line-number">350
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#474" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l351" class="line-number">351
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#475" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l352" class="line-number">352
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#356" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l353" class="line-number">353
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#357" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l354" class="line-number">354
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#358" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l355" class="line-number">355
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#477" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l356" class="line-number">356
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#478" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l357" class="line-number">357
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#479" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l358" class="line-number">358
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#480" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l359" class="line-number">359
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#481" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l360" class="line-number">360
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#488" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l361" class="line-number">361
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#489" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l362" class="line-number">362
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#366" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l363" class="line-number">363
<div class="blame-strip c1" data-blame="78acdb77ee7c9b4403bc955a40517f5b0a642ba9#toolkit/devtools/server/actors/webaudio.js#536" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l364" class="line-number">364
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#492" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l365" class="line-number">365
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#493" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l366" class="line-number">366
<div class="blame-strip c1" data-blame="78acdb77ee7c9b4403bc955a40517f5b0a642ba9#toolkit/devtools/server/actors/webaudio.js#539" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l367" class="line-number">367
<div class="blame-strip c1" data-blame="78acdb77ee7c9b4403bc955a40517f5b0a642ba9#toolkit/devtools/server/actors/webaudio.js#540" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l368" class="line-number">368
<div class="blame-strip c1" data-blame="78acdb77ee7c9b4403bc955a40517f5b0a642ba9#toolkit/devtools/server/actors/webaudio.js#541" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l369" class="line-number">369
<div class="blame-strip c1" data-blame="78acdb77ee7c9b4403bc955a40517f5b0a642ba9#toolkit/devtools/server/actors/webaudio.js#542" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l370" class="line-number">370
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#495" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l371" class="line-number">371
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#496" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l372" class="line-number">372
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#497" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l373" class="line-number">373
<div class="blame-strip c1" data-blame="3e02aa5978268d680af3e6ea21f8f54ff58058f5#%#377" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l374" class="line-number">374
<div class="blame-strip c2" data-blame="644e1b42f851e83598451542be0a5af39578583d#%#381" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l375" class="line-number">375
<div class="blame-strip c1" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#346" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l376" class="line-number">376
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#507" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l377" class="line-number">377
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#508" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l378" class="line-number">378
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#509" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l379" class="line-number">379
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#510" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l380" class="line-number">380
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#511" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l381" class="line-number">381
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#512" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l382" class="line-number">382
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#513" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l383" class="line-number">383
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#514" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l384" class="line-number">384
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#515" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l385" class="line-number">385
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#516" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l386" class="line-number">386
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#517" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l387" class="line-number">387
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#518" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l388" class="line-number">388
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#519" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l389" class="line-number">389
<div class="blame-strip c1" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#393" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l390" class="line-number">390
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#394" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l391" class="line-number">391
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#522" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l392" class="line-number">392
<div class="blame-strip c2" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#396" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l393" class="line-number">393
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#139" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l394" class="line-number">394
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#140" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l395" class="line-number">395
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#141" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l396" class="line-number">396
<div class="blame-strip c2" data-blame="de7438cf523c7aad21b30d2a510a1508ba22ec36#%#403" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l397" class="line-number">397
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#154" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l398" class="line-number">398
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#155" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l399" class="line-number">399
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#156" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l400" class="line-number">400
<div class="blame-strip c2" data-blame="3e02aa5978268d680af3e6ea21f8f54ff58058f5#%#404" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l401" class="line-number">401
<div class="blame-strip c1" data-blame="eaa4969e77603ca41e1a000c8ad493a0443d9d16#%#405" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l402" class="line-number">402
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#160" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l403" class="line-number">403
<div class="blame-strip c1" data-blame="eaa4969e77603ca41e1a000c8ad493a0443d9d16#%#407" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l404" class="line-number">404
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#280" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l405" class="line-number">405
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#162" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l406" class="line-number">406
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#282" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l407" class="line-number">407
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#283" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l408" class="line-number">408
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#284" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l409" class="line-number">409
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#285" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l410" class="line-number">410
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#286" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l411" class="line-number">411
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#293" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l412" class="line-number">412
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#295" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l413" class="line-number">413
<div class="blame-strip c2" data-blame="2ff4c3a1bc39151016102aa16599ab52c3e873f7#toolkit/devtools/server/actors/webaudio.js#287" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l414" class="line-number">414
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#163" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l415" class="line-number">415
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#164" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l416" class="line-number">416
<div class="blame-strip c2" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#420" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l417" class="line-number">417
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#166" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l418" class="line-number">418
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#167" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l419" class="line-number">419
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#168" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l420" class="line-number">420
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#169" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l421" class="line-number">421
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#170" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l422" class="line-number">422
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#toolkit/devtools/server/actors/webaudio.js#618" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l423" class="line-number">423
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#toolkit/devtools/server/actors/webaudio.js#619" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l424" class="line-number">424
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#toolkit/devtools/server/actors/webaudio.js#620" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l425" class="line-number">425
<div class="blame-strip c1" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#429" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l426" class="line-number">426
<div class="blame-strip c2" data-blame="a137b66eaefb24dce702b577d26028cf4c236530#toolkit/devtools/server/actors/webaudio.js#509" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l427" class="line-number">427
<div class="blame-strip c1" data-blame="644e1b42f851e83598451542be0a5af39578583d#%#435" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l428" class="line-number">428
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#toolkit/devtools/server/actors/webaudio.js#626" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l429" class="line-number">429
<div class="blame-strip c2" data-blame="815307f1a1f94b5bb5656dd46373f15a36c13ba7#toolkit/devtools/server/actors/webaudio.js#627" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l430" class="line-number">430
<div class="blame-strip c1" data-blame="eaa4969e77603ca41e1a000c8ad493a0443d9d16#%#434" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l431" class="line-number">431
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#172" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l432" class="line-number">432
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#173" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l433" class="line-number">433
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#174" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l434" class="line-number">434
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#175" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l435" class="line-number">435
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#176" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l436" class="line-number">436
<div class="blame-strip c1" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#440" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l437" class="line-number">437
<div class="blame-strip c2" data-blame="8f2fb6c989c43456efef81385ea87327bfd5b7d7#toolkit/devtools/server/actors/webaudio.js#281" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l438" class="line-number">438
<div class="blame-strip c2" data-blame="8f2fb6c989c43456efef81385ea87327bfd5b7d7#toolkit/devtools/server/actors/webaudio.js#282" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l439" class="line-number">439
<div class="blame-strip c2" data-blame="8f2fb6c989c43456efef81385ea87327bfd5b7d7#toolkit/devtools/server/actors/webaudio.js#283" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l440" class="line-number">440
<div class="blame-strip c2" data-blame="8f2fb6c989c43456efef81385ea87327bfd5b7d7#toolkit/devtools/server/actors/webaudio.js#284" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l441" class="line-number">441
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#306" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l442" class="line-number">442
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#307" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l443" class="line-number">443
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#308" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l444" class="line-number">444
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#309" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l445" class="line-number">445
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#178" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l446" class="line-number">446
<div class="blame-strip c1" data-blame="9b60f9ebc64e35f0a99f864fd73f703a14d7aac8#%#454" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l447" class="line-number">447
<div class="blame-strip c2" data-blame="eaa4969e77603ca41e1a000c8ad493a0443d9d16#%#451" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l448" class="line-number">448
<div class="blame-strip c1" data-blame="9b60f9ebc64e35f0a99f864fd73f703a14d7aac8#%#456" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l449" class="line-number">449
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#179" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l450" class="line-number">450
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#180" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l451" class="line-number">451
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#182" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l452" class="line-number">452
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#314" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l453" class="line-number">453
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#185" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l454" class="line-number">454
<div class="blame-strip c1" data-blame="825e041cf6d328136b944ba7fbe2c9e63af48db8#%#458" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l455" class="line-number">455
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#187" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l456" class="line-number">456
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#188" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l457" class="line-number">457
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#189" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l458" class="line-number">458
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#190" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l459" class="line-number">459
<div class="blame-strip c1" data-blame="4c906c25910db1344e44817e7017daaab799ca7b#toolkit/devtools/server/actors/webaudio.js#321" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l460" class="line-number">460
<div class="blame-strip c2" data-blame="9d18e0b35a8b68a1f54f2fc65315bb485263d0f0#toolkit/devtools/server/actors/webaudio.js#332" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l461" class="line-number">461
<div class="blame-strip c1" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#465" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l462" class="line-number">462
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#192" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l463" class="line-number">463
<div class="blame-strip c1" data-blame="2ff4c3a1bc39151016102aa16599ab52c3e873f7#toolkit/devtools/server/actors/webaudio.js#326" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l464" class="line-number">464
<div class="blame-strip c1" data-blame="2ff4c3a1bc39151016102aa16599ab52c3e873f7#toolkit/devtools/server/actors/webaudio.js#327" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l465" class="line-number">465
<div class="blame-strip c2" data-blame="eaa4969e77603ca41e1a000c8ad493a0443d9d16#%#469" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l466" class="line-number">466
<div class="blame-strip c1" data-blame="2f530b44a0c94a5bbc98cc34c08d7ba5a621d718#toolkit/devtools/server/actors/webaudio.js#335" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l467" class="line-number">467
<div class="blame-strip c1" data-blame="2f530b44a0c94a5bbc98cc34c08d7ba5a621d718#toolkit/devtools/server/actors/webaudio.js#336" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l468" class="line-number">468
<div class="blame-strip c2" data-blame="eaa4969e77603ca41e1a000c8ad493a0443d9d16#%#472" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l469" class="line-number">469
<div class="blame-strip c1" data-blame="644e1b42f851e83598451542be0a5af39578583d#%#474" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l470" class="line-number">470
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#201" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l471" class="line-number">471
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#202" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l472" class="line-number">472
<div class="blame-strip c1" data-blame="de7438cf523c7aad21b30d2a510a1508ba22ec36#%#480" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l473" class="line-number">473
<div class="blame-strip c1" data-blame="de7438cf523c7aad21b30d2a510a1508ba22ec36#%#481" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l474" class="line-number">474
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#205" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l475" class="line-number">475
<div class="blame-strip c1" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#479" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l476" class="line-number">476
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#480" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l477" class="line-number">477
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#208" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l478" class="line-number">478
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#209" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l479" class="line-number">479
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#210" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l480" class="line-number">480
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#211" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l481" class="line-number">481
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#212" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l482" class="line-number">482
<div class="blame-strip c2" data-blame="3e02aa5978268d680af3e6ea21f8f54ff58058f5#%#487" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l483" class="line-number">483
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#215" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l484" class="line-number">484
<div class="blame-strip c2" data-blame="3e02aa5978268d680af3e6ea21f8f54ff58058f5#%#489" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l485" class="line-number">485
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#626" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l486" class="line-number">486
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#627" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l487" class="line-number">487
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#217" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l488" class="line-number">488
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#218" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l489" class="line-number">489
<div class="blame-strip c1" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#493" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l490" class="line-number">490
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#494" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l491" class="line-number">491
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#495" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l492" class="line-number">492
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#496" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l493" class="line-number">493
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#497" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l494" class="line-number">494
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#224" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l495" class="line-number">495
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#225" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l496" class="line-number">496
<div class="blame-strip c2" data-blame="3e02aa5978268d680af3e6ea21f8f54ff58058f5#%#501" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l497" class="line-number">497
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#227" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l498" class="line-number">498
<div class="blame-strip c2" data-blame="3e02aa5978268d680af3e6ea21f8f54ff58058f5#%#503" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l499" class="line-number">499
<div class="blame-strip c2" data-blame="3e02aa5978268d680af3e6ea21f8f54ff58058f5#%#504" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l500" class="line-number">500
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#231" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l501" class="line-number">501
<div class="blame-strip c2" data-blame="3e02aa5978268d680af3e6ea21f8f54ff58058f5#%#506" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l502" class="line-number">502
<div class="blame-strip c2" data-blame="3e02aa5978268d680af3e6ea21f8f54ff58058f5#%#507" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l503" class="line-number">503
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#235" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l504" class="line-number">504
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#236" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l505" class="line-number">505
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#237" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l506" class="line-number">506
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#238" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l507" class="line-number">507
<div class="blame-strip c2" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#511" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l508" class="line-number">508
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#512" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l509" class="line-number">509
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#241" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l510" class="line-number">510
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#242" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l511" class="line-number">511
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#243" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l512" class="line-number">512
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#244" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l513" class="line-number">513
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#245" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l514" class="line-number">514
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#246" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l515" class="line-number">515
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#247" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l516" class="line-number">516
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#248" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l517" class="line-number">517
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#375" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l518" class="line-number">518
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#250" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l519" class="line-number">519
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#251" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l520" class="line-number">520
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#252" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l521" class="line-number">521
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#253" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l522" class="line-number">522
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#254" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l523" class="line-number">523
<div class="blame-strip c1" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#527" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l524" class="line-number">524
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#667" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l525" class="line-number">525
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#529" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l526" class="line-number">526
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#669" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l527" class="line-number">527
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#670" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l528" class="line-number">528
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#671" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l529" class="line-number">529
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#672" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l530" class="line-number">530
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#673" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l531" class="line-number">531
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#674" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l532" class="line-number">532
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#536" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l533" class="line-number">533
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#676" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l534" class="line-number">534
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#677" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l535" class="line-number">535
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#678" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l536" class="line-number">536
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#679" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l537" class="line-number">537
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#680" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l538" class="line-number">538
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#681" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l539" class="line-number">539
<div class="blame-strip c1" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#543" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l540" class="line-number">540
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#683" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l541" class="line-number">541
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#684" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l542" class="line-number">542
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#685" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l543" class="line-number">543
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#255" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l544" class="line-number">544
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#256" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l545" class="line-number">545
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#257" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l546" class="line-number">546
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#258" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l547" class="line-number">547
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#259" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l548" class="line-number">548
<div class="blame-strip c2" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#552" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l549" class="line-number">549
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#261" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l550" class="line-number">550
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#262" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l551" class="line-number">551
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#263" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l552" class="line-number">552
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#264" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l553" class="line-number">553
<div class="blame-strip c2" data-blame="f5dd02cc37d2fb3923869a175564cfa719755729#%#560" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l554" class="line-number">554
<div class="blame-strip c2" data-blame="f5dd02cc37d2fb3923869a175564cfa719755729#%#561" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l555" class="line-number">555
<div class="blame-strip c1" data-blame="21e6e270a49019cd376204aa17f1bacf1c17f0d9#%#559" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l556" class="line-number">556
<div class="blame-strip c2" data-blame="f5dd02cc37d2fb3923869a175564cfa719755729#%#563" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l557" class="line-number">557
<div class="blame-strip c2" data-blame="f5dd02cc37d2fb3923869a175564cfa719755729#%#564" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l558" class="line-number">558
<div class="blame-strip c2" data-blame="f5dd02cc37d2fb3923869a175564cfa719755729#%#565" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l559" class="line-number">559
<div class="blame-strip c2" data-blame="f5dd02cc37d2fb3923869a175564cfa719755729#%#566" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l560" class="line-number">560
<div class="blame-strip c1" data-blame="87716443adb6bac3d4600f5874ffab0ff171c041#toolkit/devtools/server/actors/webaudio.js#443" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l561" class="line-number">561
<div class="blame-strip c2" data-blame="eaa4969e77603ca41e1a000c8ad493a0443d9d16#%#565" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l562" class="line-number">562
<div class="blame-strip c2" data-blame="eaa4969e77603ca41e1a000c8ad493a0443d9d16#%#566" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l563" class="line-number">563
<div class="blame-strip c2" data-blame="eaa4969e77603ca41e1a000c8ad493a0443d9d16#%#567" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l564" class="line-number">564
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#392" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l565" class="line-number">565
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#265" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l566" class="line-number">566
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#267" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l567" class="line-number">567
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#268" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l568" class="line-number">568
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#304" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l569" class="line-number">569
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#305" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l570" class="line-number">570
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#306" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l571" class="line-number">571
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#307" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l572" class="line-number">572
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#308" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l573" class="line-number">573
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#309" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l574" class="line-number">574
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#310" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l575" class="line-number">575
<div class="blame-strip c1" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#579" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l576" class="line-number">576
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#439" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l577" class="line-number">577
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#440" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l578" class="line-number">578
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#441" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l579" class="line-number">579
<div class="blame-strip c1" data-blame="6e6b4e58dfe1d76134444235ca284a2063885ec9#toolkit/devtools/server/actors/webaudio.js#465" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l580" class="line-number">580
<div class="blame-strip c1" data-blame="6e6b4e58dfe1d76134444235ca284a2063885ec9#toolkit/devtools/server/actors/webaudio.js#466" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l581" class="line-number">581
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#585" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l582" class="line-number">582
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#313" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l583" class="line-number">583
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#444" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l584" class="line-number">584
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#315" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l585" class="line-number">585
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#316" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l586" class="line-number">586
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#317" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l587" class="line-number">587
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#318" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l588" class="line-number">588
<div class="blame-strip c2" data-blame="6e6b4e58dfe1d76134444235ca284a2063885ec9#toolkit/devtools/server/actors/webaudio.js#474" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l589" class="line-number">589
<div class="blame-strip c2" data-blame="6e6b4e58dfe1d76134444235ca284a2063885ec9#toolkit/devtools/server/actors/webaudio.js#475" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l590" class="line-number">590
<div class="blame-strip c1" data-blame="ca47a9a2a79c2dd7b4268d54ddf6963013f6fcf9#toolkit/devtools/server/actors/webaudio.js#476" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l591" class="line-number">591
<div class="blame-strip c2" data-blame="6e6b4e58dfe1d76134444235ca284a2063885ec9#toolkit/devtools/server/actors/webaudio.js#477" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l592" class="line-number">592
<div class="blame-strip c1" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#596" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l593" class="line-number">593
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#597" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l594" class="line-number">594
<div class="blame-strip c1" data-blame="a137b66eaefb24dce702b577d26028cf4c236530#toolkit/devtools/server/actors/webaudio.js#724" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l595" class="line-number">595
<div class="blame-strip c2" data-blame="6e6b4e58dfe1d76134444235ca284a2063885ec9#toolkit/devtools/server/actors/webaudio.js#481" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l596" class="line-number">596
<div class="blame-strip c2" data-blame="6e6b4e58dfe1d76134444235ca284a2063885ec9#toolkit/devtools/server/actors/webaudio.js#482" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l597" class="line-number">597
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#601" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l598" class="line-number">598
<div class="blame-strip c2" data-blame="6e6b4e58dfe1d76134444235ca284a2063885ec9#toolkit/devtools/server/actors/webaudio.js#484" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l599" class="line-number">599
<div class="blame-strip c2" data-blame="6e6b4e58dfe1d76134444235ca284a2063885ec9#toolkit/devtools/server/actors/webaudio.js#485" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l600" class="line-number">600
<div class="blame-strip c2" data-blame="6e6b4e58dfe1d76134444235ca284a2063885ec9#toolkit/devtools/server/actors/webaudio.js#486" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l601" class="line-number">601
<div class="blame-strip c2" data-blame="6e6b4e58dfe1d76134444235ca284a2063885ec9#toolkit/devtools/server/actors/webaudio.js#487" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l602" class="line-number">602
<div class="blame-strip c2" data-blame="6e6b4e58dfe1d76134444235ca284a2063885ec9#toolkit/devtools/server/actors/webaudio.js#488" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l603" class="line-number">603
<div class="blame-strip c2" data-blame="6e6b4e58dfe1d76134444235ca284a2063885ec9#toolkit/devtools/server/actors/webaudio.js#489" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l604" class="line-number">604
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#319" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l605" class="line-number">605
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#320" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l606" class="line-number">606
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#321" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l607" class="line-number">607
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#322" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l608" class="line-number">608
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#323" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l609" class="line-number">609
<div class="blame-strip c2" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#613" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l610" class="line-number">610
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#455" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l611" class="line-number">611
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#456" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l612" class="line-number">612
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#457" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l613" class="line-number">613
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#458" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l614" class="line-number">614
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#618" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l615" class="line-number">615
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#619" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l616" class="line-number">616
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#329" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l617" class="line-number">617
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#330" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l618" class="line-number">618
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#331" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l619" class="line-number">619
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#332" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l620" class="line-number">620
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#333" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l621" class="line-number">621
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#334" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l622" class="line-number">622
<div class="blame-strip c2" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#626" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l623" class="line-number">623
<div class="blame-strip c1" data-blame="21e6e270a49019cd376204aa17f1bacf1c17f0d9#%#627" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l624" class="line-number">624
<div class="blame-strip c2" data-blame="ffc364ee028ce196fc30b922a9b5f68fdf25bc68#%#629" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l625" class="line-number">625
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#337" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l626" class="line-number">626
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#338" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l627" class="line-number">627
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#339" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l628" class="line-number">628
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#340" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l629" class="line-number">629
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#341" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l630" class="line-number">630
<div class="blame-strip c2" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#634" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l631" class="line-number">631
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#635" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l632" class="line-number">632
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#636" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l633" class="line-number">633
<div class="blame-strip c2" data-blame="20d2692c00d31574eb4b46e03367fce111e0660c#toolkit/devtools/server/actors/webaudio.js#610" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l634" class="line-number">634
<div class="blame-strip c1" data-blame="ffc364ee028ce196fc30b922a9b5f68fdf25bc68#%#639" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l635" class="line-number">635
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#346" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l636" class="line-number">636
<div class="blame-strip c1" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#640" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l637" class="line-number">637
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#348" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l638" class="line-number">638
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#349" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l639" class="line-number">639
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#350" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l640" class="line-number">640
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#351" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l641" class="line-number">641
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#352" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l642" class="line-number">642
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#354" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l643" class="line-number">643
<div class="blame-strip c1" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#647" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l644" class="line-number">644
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#648" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l645" class="line-number">645
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#649" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l646" class="line-number">646
<div class="blame-strip c1" data-blame="ffc364ee028ce196fc30b922a9b5f68fdf25bc68#%#651" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l647" class="line-number">647
<div class="blame-strip c2" data-blame="6e6b4e58dfe1d76134444235ca284a2063885ec9#toolkit/devtools/server/actors/webaudio.js#532" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l648" class="line-number">648
<div class="blame-strip c2" data-blame="6e6b4e58dfe1d76134444235ca284a2063885ec9#toolkit/devtools/server/actors/webaudio.js#533" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l649" class="line-number">649
<div class="blame-strip c1" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#653" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l650" class="line-number">650
<div class="blame-strip c2" data-blame="6e6b4e58dfe1d76134444235ca284a2063885ec9#toolkit/devtools/server/actors/webaudio.js#535" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l651" class="line-number">651
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#357" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l652" class="line-number">652
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#358" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l653" class="line-number">653
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#359" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l654" class="line-number">654
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#360" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l655" class="line-number">655
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#361" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l656" class="line-number">656
<div class="blame-strip c2" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#660" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l657" class="line-number">657
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#661" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l658" class="line-number">658
<div class="blame-strip c2" data-blame="ffc364ee028ce196fc30b922a9b5f68fdf25bc68#%#663" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l659" class="line-number">659
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#365" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l660" class="line-number">660
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#366" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l661" class="line-number">661
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#367" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l662" class="line-number">662
<div class="blame-strip c2" data-blame="ca47a9a2a79c2dd7b4268d54ddf6963013f6fcf9#toolkit/devtools/server/actors/webaudio.js#547" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l663" class="line-number">663
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#369" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l664" class="line-number">664
<div class="blame-strip c2" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#668" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l665" class="line-number">665
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#669" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l666" class="line-number">666
<div class="blame-strip c2" data-blame="ffc364ee028ce196fc30b922a9b5f68fdf25bc68#%#671" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l667" class="line-number">667
<div class="blame-strip c1" data-blame="ca47a9a2a79c2dd7b4268d54ddf6963013f6fcf9#toolkit/devtools/server/actors/webaudio.js#552" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l668" class="line-number">668
<div class="blame-strip c1" data-blame="ca47a9a2a79c2dd7b4268d54ddf6963013f6fcf9#toolkit/devtools/server/actors/webaudio.js#553" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l669" class="line-number">669
<div class="blame-strip c2" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#673" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l670" class="line-number">670
<div class="blame-strip c1" data-blame="ca47a9a2a79c2dd7b4268d54ddf6963013f6fcf9#toolkit/devtools/server/actors/webaudio.js#555" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l671" class="line-number">671
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#377" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l672" class="line-number">672
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#378" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l673" class="line-number">673
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#379" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l674" class="line-number">674
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#380" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l675" class="line-number">675
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#381" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l676" class="line-number">676
<div class="blame-strip c1" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#680" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l677" class="line-number">677
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#681" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l678" class="line-number">678
<div class="blame-strip c1" data-blame="ffc364ee028ce196fc30b922a9b5f68fdf25bc68#%#683" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l679" class="line-number">679
<div class="blame-strip c2" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#538" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l680" class="line-number">680
<div class="blame-strip c2" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#539" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l681" class="line-number">681
<div class="blame-strip c1" data-blame="f5dd02cc37d2fb3923869a175564cfa719755729#%#688" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l682" class="line-number">682
<div class="blame-strip c1" data-blame="f5dd02cc37d2fb3923869a175564cfa719755729#%#689" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l683" class="line-number">683
<div class="blame-strip c2" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#542" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l684" class="line-number">684
<div class="blame-strip c1" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#688" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l685" class="line-number">685
<div class="blame-strip c2" data-blame="f5dd02cc37d2fb3923869a175564cfa719755729#%#692" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l686" class="line-number">686
<div class="blame-strip c2" data-blame="f5dd02cc37d2fb3923869a175564cfa719755729#%#693" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l687" class="line-number">687
<div class="blame-strip c2" data-blame="f5dd02cc37d2fb3923869a175564cfa719755729#%#694" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l688" class="line-number">688
<div class="blame-strip c2" data-blame="f5dd02cc37d2fb3923869a175564cfa719755729#%#695" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l689" class="line-number">689
<div class="blame-strip c2" data-blame="f5dd02cc37d2fb3923869a175564cfa719755729#%#696" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l690" class="line-number">690
<div class="blame-strip c2" data-blame="f5dd02cc37d2fb3923869a175564cfa719755729#%#697" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l691" class="line-number">691
<div class="blame-strip c2" data-blame="f5dd02cc37d2fb3923869a175564cfa719755729#%#698" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l692" class="line-number">692
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#546" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l693" class="line-number">693
<div class="blame-strip c2" data-blame="f5dd02cc37d2fb3923869a175564cfa719755729#%#700" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l694" class="line-number">694
<div class="blame-strip c2" data-blame="f5dd02cc37d2fb3923869a175564cfa719755729#%#701" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l695" class="line-number">695
<div class="blame-strip c2" data-blame="f5dd02cc37d2fb3923869a175564cfa719755729#%#702" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l696" class="line-number">696
<div class="blame-strip c2" data-blame="f5dd02cc37d2fb3923869a175564cfa719755729#%#703" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l697" class="line-number">697
<div class="blame-strip c2" data-blame="f5dd02cc37d2fb3923869a175564cfa719755729#%#704" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l698" class="line-number">698
<div class="blame-strip c1" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#702" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l699" class="line-number">699
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#703" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l700" class="line-number">700
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#548" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l701" class="line-number">701
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#549" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l702" class="line-number">702
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#550" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l703" class="line-number">703
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#551" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l704" class="line-number">704
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#552" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l705" class="line-number">705
<div class="blame-strip c2" data-blame="f5dd02cc37d2fb3923869a175564cfa719755729#%#712" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l706" class="line-number">706
<div class="blame-strip c1" data-blame="ffc364ee028ce196fc30b922a9b5f68fdf25bc68#%#711" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l707" class="line-number">707
<div class="blame-strip c2" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#555" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l708" class="line-number">708
<div class="blame-strip c2" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#556" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l709" class="line-number">709
<div class="blame-strip c2" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#557" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l710" class="line-number">710
<div class="blame-strip c2" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#558" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l711" class="line-number">711
<div class="blame-strip c1" data-blame="2ff4c3a1bc39151016102aa16599ab52c3e873f7#toolkit/devtools/server/actors/webaudio.js#578" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l712" class="line-number">712
<div class="blame-strip c1" data-blame="2ff4c3a1bc39151016102aa16599ab52c3e873f7#toolkit/devtools/server/actors/webaudio.js#579" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l713" class="line-number">713
<div class="blame-strip c1" data-blame="2ff4c3a1bc39151016102aa16599ab52c3e873f7#toolkit/devtools/server/actors/webaudio.js#580" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l714" class="line-number">714
<div class="blame-strip c2" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#718" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l715" class="line-number">715
<div class="blame-strip c1" data-blame="76baf9e8d67bf3c9c883264c490cdb19038445d5#%#707" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l716" class="line-number">716
<div class="blame-strip c1" data-blame="76baf9e8d67bf3c9c883264c490cdb19038445d5#%#708" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l717" class="line-number">717
<div class="blame-strip c1" data-blame="76baf9e8d67bf3c9c883264c490cdb19038445d5#%#709" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l718" class="line-number">718
<div class="blame-strip c1" data-blame="76baf9e8d67bf3c9c883264c490cdb19038445d5#%#710" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l719" class="line-number">719
<div class="blame-strip c1" data-blame="76baf9e8d67bf3c9c883264c490cdb19038445d5#%#711" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l720" class="line-number">720
<div class="blame-strip c1" data-blame="76baf9e8d67bf3c9c883264c490cdb19038445d5#%#712" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l721" class="line-number">721
<div class="blame-strip c1" data-blame="76baf9e8d67bf3c9c883264c490cdb19038445d5#%#713" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l722" class="line-number">722
<div class="blame-strip c1" data-blame="76baf9e8d67bf3c9c883264c490cdb19038445d5#%#714" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l723" class="line-number">723
<div class="blame-strip c2" data-blame="2ff4c3a1bc39151016102aa16599ab52c3e873f7#toolkit/devtools/server/actors/webaudio.js#582" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l724" class="line-number">724
<div class="blame-strip c2" data-blame="2ff4c3a1bc39151016102aa16599ab52c3e873f7#toolkit/devtools/server/actors/webaudio.js#583" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l725" class="line-number">725
<div class="blame-strip c2" data-blame="2ff4c3a1bc39151016102aa16599ab52c3e873f7#toolkit/devtools/server/actors/webaudio.js#584" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l726" class="line-number">726
<div class="blame-strip c2" data-blame="2ff4c3a1bc39151016102aa16599ab52c3e873f7#toolkit/devtools/server/actors/webaudio.js#585" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l727" class="line-number">727
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#892" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l728" class="line-number">728
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#893" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l729" class="line-number">729
<div class="blame-strip c2" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#733" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l730" class="line-number">730
<div class="blame-strip c1" data-blame="ffc364ee028ce196fc30b922a9b5f68fdf25bc68#%#735" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l731" class="line-number">731
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#896" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l732" class="line-number">732
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#897" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l733" class="line-number">733
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#898" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l734" class="line-number">734
<div class="blame-strip c1" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#738" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l735" class="line-number">735
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#900" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l736" class="line-number">736
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#901" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l737" class="line-number">737
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#902" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l738" class="line-number">738
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#903" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l739" class="line-number">739
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#559" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l740" class="line-number">740
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#560" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l741" class="line-number">741
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#561" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l742" class="line-number">742
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#562" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l743" class="line-number">743
<div class="blame-strip c2" data-blame="23ff4cc75dc8228ce5ebd25b814f4d12a2a5588c#%#747" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l744" class="line-number">744
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#564" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l745" class="line-number">745
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#565" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l746" class="line-number">746
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#566" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l747" class="line-number">747
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#567" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l748" class="line-number">748
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#568" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l749" class="line-number">749
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#569" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l750" class="line-number">750
<div class="blame-strip c1" data-blame="b5bd9291e9d3be8a3c2690e62f6b0b8014aeb400#toolkit/devtools/server/actors/webaudio.js#570" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l751" class="line-number">751
<div class="blame-strip c2" data-blame="21e6e270a49019cd376204aa17f1bacf1c17f0d9#%#755" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l752" class="line-number">752
<div class="blame-strip c1" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#756" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l753" class="line-number">753
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#386" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l754" class="line-number">754
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#387" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l755" class="line-number">755
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#388" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l756" class="line-number">756
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#403" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l757" class="line-number">757
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#404" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l758" class="line-number">758
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#405" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l759" class="line-number">759
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#406" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l760" class="line-number">760
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#407" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l761" class="line-number">761
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#408" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l762" class="line-number">762
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#409" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l763" class="line-number">763
<div class="blame-strip c2" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#410" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l764" class="line-number">764
<div class="blame-strip c1" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#924" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l765" class="line-number">765
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#toolkit/devtools/server/actors/webaudio.js#515" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l766" class="line-number">766
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#413" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l767" class="line-number">767
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#414" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l768" class="line-number">768
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#415" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l769" class="line-number">769
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#416" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l770" class="line-number">770
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#417" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l771" class="line-number">771
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#418" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l772" class="line-number">772
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#419" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l773" class="line-number">773
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#420" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l774" class="line-number">774
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#421" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l775" class="line-number">775
<div class="blame-strip c2" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#935" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l776" class="line-number">776
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#423" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l777" class="line-number">777
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#424" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l778" class="line-number">778
<div class="blame-strip c2" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#782" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l779" class="line-number">779
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#426" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l780" class="line-number">780
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#427" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l781" class="line-number">781
<div class="blame-strip c1" data-blame="5ba983f5292729704851c2178fb5392d19502f5f#toolkit/devtools/server/actors/webaudio.js#428" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l782" class="line-number">782
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#toolkit/devtools/server/actors/webaudio.js#532" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l783" class="line-number">783
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#562" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l784" class="line-number">784
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#563" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l785" class="line-number">785
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#564" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l786" class="line-number">786
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#565" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l787" class="line-number">787
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#566" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l788" class="line-number">788
<div class="blame-strip c2" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#948" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l789" class="line-number">789
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#568" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l790" class="line-number">790
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#569" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l791" class="line-number">791
<div class="blame-strip c2" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#795" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l792" class="line-number">792
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#571" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l793" class="line-number">793
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#572" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l794" class="line-number">794
<div class="blame-strip c1" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#573" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l795" class="line-number">795
<div class="blame-strip c2" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#955" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l796" class="line-number">796
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#975" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l797" class="line-number">797
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#976" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l798" class="line-number">798
<div class="blame-strip c2" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#802" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l799" class="line-number">799
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#978" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l800" class="line-number">800
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#979" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l801" class="line-number">801
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#980" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l802" class="line-number">802
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#574" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l803" class="line-number">803
<div class="blame-strip c1" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#toolkit/devtools/server/actors/webaudio.js#533" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l804" class="line-number">804
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#576" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l805" class="line-number">805
<div class="blame-strip c2" data-blame="2eae9dd67521d9ad7b7d8cf2dfafcde0a2596542#toolkit/devtools/server/actors/webaudio.js#577" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l806" class="line-number">806
<div class="blame-strip c1" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#toolkit/devtools/server/actors/webaudio.js#535" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l807" class="line-number">807
<div class="blame-strip c1" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#toolkit/devtools/server/actors/webaudio.js#536" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l808" class="line-number">808
<div class="blame-strip c1" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#toolkit/devtools/server/actors/webaudio.js#537" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l809" class="line-number">809
<div class="blame-strip c2" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#969" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l810" class="line-number">810
<div class="blame-strip c1" data-blame="96b7707bfe2e2c3bc95ce2b2bd5e3774be75d6a0#%#805" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l811" class="line-number">811
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#toolkit/devtools/server/actors/webaudio.js#540" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l812" class="line-number">812
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#toolkit/devtools/server/actors/webaudio.js#541" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l813" class="line-number">813
<div class="blame-strip c2" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#toolkit/devtools/server/actors/webaudio.js#542" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l814" class="line-number">814
<div class="blame-strip c1" data-blame="ca47a9a2a79c2dd7b4268d54ddf6963013f6fcf9#toolkit/devtools/server/actors/webaudio.js#666" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l815" class="line-number">815
<div class="blame-strip c1" data-blame="ca47a9a2a79c2dd7b4268d54ddf6963013f6fcf9#toolkit/devtools/server/actors/webaudio.js#667" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l816" class="line-number">816
<div class="blame-strip c1" data-blame="ca47a9a2a79c2dd7b4268d54ddf6963013f6fcf9#toolkit/devtools/server/actors/webaudio.js#668" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l817" class="line-number">817
<div class="blame-strip c2" data-blame="ed01e62cf6e2f3e7ab7fec5dc98e457b4313c4dd#toolkit/devtools/server/actors/webaudio.js#827" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l818" class="line-number">818
<div class="blame-strip c1" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#978" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l819" class="line-number">819
<div class="blame-strip c2" data-blame="ca47a9a2a79c2dd7b4268d54ddf6963013f6fcf9#toolkit/devtools/server/actors/webaudio.js#671" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l820" class="line-number">820
<div class="blame-strip c2" data-blame="ca47a9a2a79c2dd7b4268d54ddf6963013f6fcf9#toolkit/devtools/server/actors/webaudio.js#672" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l821" class="line-number">821
<div class="blame-strip c2" data-blame="ca47a9a2a79c2dd7b4268d54ddf6963013f6fcf9#toolkit/devtools/server/actors/webaudio.js#673" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l822" class="line-number">822
<div class="blame-strip c2" data-blame="ca47a9a2a79c2dd7b4268d54ddf6963013f6fcf9#toolkit/devtools/server/actors/webaudio.js#674" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l823" class="line-number">823
<div class="blame-strip c1" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#827" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l824" class="line-number">824
<div class="blame-strip c2" data-blame="ca47a9a2a79c2dd7b4268d54ddf6963013f6fcf9#toolkit/devtools/server/actors/webaudio.js#676" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l825" class="line-number">825
<div class="blame-strip c1" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#829" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l826" class="line-number">826
<div class="blame-strip c2" data-blame="ca47a9a2a79c2dd7b4268d54ddf6963013f6fcf9#toolkit/devtools/server/actors/webaudio.js#678" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l827" class="line-number">827
<div class="blame-strip c1" data-blame="eedebf7f21071d28f2bc1483f6164ebf2e437f6e#toolkit/devtools/server/actors/webaudio.js#556" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l828" class="line-number">828
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1007" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l829" class="line-number">829
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1008" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l830" class="line-number">830
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1009" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l831" class="line-number">831
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1010" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l832" class="line-number">832
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1011" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l833" class="line-number">833
<div class="blame-strip c1" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#993" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l834" class="line-number">834
<div class="blame-strip c2" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1013" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l835" class="line-number">835
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#839" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l836" class="line-number">836
<div class="blame-strip c2" data-blame="3e02aa5978268d680af3e6ea21f8f54ff58058f5#%#824" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l837" class="line-number">837
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1015" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l838" class="line-number">838
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1016" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l839" class="line-number">839
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1017" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l840" class="line-number">840
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1018" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l841" class="line-number">841
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1019" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l842" class="line-number">842
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1020" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l843" class="line-number">843
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1021" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l844" class="line-number">844
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1022" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l845" class="line-number">845
<div class="blame-strip c2" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#1004" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l846" class="line-number">846
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1024" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l847" class="line-number">847
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1025" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l848" class="line-number">848
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#852" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l849" class="line-number">849
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#853" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l850" class="line-number">850
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1028" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l851" class="line-number">851
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1029" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l852" class="line-number">852
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1030" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l853" class="line-number">853
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1031" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l854" class="line-number">854
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1032" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l855" class="line-number">855
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1033" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l856" class="line-number">856
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1034" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l857" class="line-number">857
<div class="blame-strip c2" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#1016" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l858" class="line-number">858
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1036" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l859" class="line-number">859
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1037" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l860" class="line-number">860
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1038" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l861" class="line-number">861
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1039" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l862" class="line-number">862
<div class="blame-strip c1" data-blame="4b1683e16c428a97e334124dd24c53ee3fd9cedf#toolkit/devtools/server/actors/webaudio.js#1040" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
      </td>
      <td class="code">
<pre><code id="line-1" aria-labelledby="1"><span class="syn_comment" >/* This Source Code Form is subject to the terms of the Mozilla Public</span>
</code><code id="line-2" aria-labelledby="2"><span class="syn_comment" > * License, v. 2.0. If a copy of the MPL was not distributed with this</span>
</code><code id="line-3" aria-labelledby="3"><span class="syn_comment" > * file, You can obtain one at <a href="http://mozilla.org/MPL/2.0/">http://mozilla.org/MPL/2.0/</a>. */</span>
</code><code id="line-4" aria-labelledby="4"><span class="syn_string" >"use strict"</span>;
</code><code id="line-5" aria-labelledby="5">
</code><code id="line-6" aria-labelledby="6"><span class="syn_comment" >/* global XPCNativeWrapper */</span>
</code><code id="line-7" aria-labelledby="7">
</code><code id="line-8" aria-labelledby="8"><span class="syn_reserved" >const</span> { <span class="syn_def" data-symbols="#Cu" data-i="0" >Cu</span> } = <span data-symbols="#require" data-i="1" >require</span>(<span class="syn_string" >"chrome"</span>);
</code><code id="line-9" aria-labelledby="9">
</code><code id="line-10" aria-labelledby="10"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#protocol" data-i="2" >protocol</span> = <span data-symbols="#require" data-i="3" >require</span>(<span class="syn_string" >"devtools/shared/protocol"</span>);
</code><code id="line-11" aria-labelledby="11"><span class="syn_reserved" >const</span> { <span class="syn_def" data-symbols="#CallWatcher" data-i="4" >CallWatcher</span> } = <span data-symbols="#require" data-i="5" >require</span>(<span class="syn_string" >"devtools/server/actors/utils/call-watcher"</span>);
</code><code id="line-12" aria-labelledby="12"><span class="syn_reserved" >const</span> { <span class="syn_def" data-symbols="#createValueGrip" data-i="6" >createValueGrip</span> } = <span data-symbols="#require" data-i="7" >require</span>(<span class="syn_string" >"devtools/server/actors/object/utils"</span>);
</code><code id="line-13" aria-labelledby="13"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#AutomationTimeline" data-i="8" >AutomationTimeline</span> = <span data-symbols="#require" data-i="9" >require</span>(<span class="syn_string" >"./utils/automation-timeline"</span>);
</code><code id="line-14" aria-labelledby="14"><span class="syn_reserved" >const</span> {
</code><code id="line-15" aria-labelledby="15">  <span class="syn_def" data-symbols="#audionodeSpec" data-i="10" >audionodeSpec</span>,
</code><code id="line-16" aria-labelledby="16">  <span class="syn_def" data-symbols="#webAudioSpec" data-i="11" >webAudioSpec</span>,
</code><code id="line-17" aria-labelledby="17">} = <span data-symbols="#require" data-i="12" >require</span>(<span class="syn_string" >"devtools/shared/specs/webaudio"</span>);
</code><code id="line-18" aria-labelledby="18"><span class="syn_reserved" >const</span> { <span class="syn_def" data-symbols="#WebAudioFront" data-i="13" >WebAudioFront</span> } = <span data-symbols="#require" data-i="14" >require</span>(<span class="syn_string" >"devtools/shared/fronts/webaudio"</span>);
</code><code id="line-19" aria-labelledby="19">
</code><code id="line-20" aria-labelledby="20"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#Services" data-i="15" >Services</span> = <span data-symbols="#require" data-i="16" >require</span>(<span class="syn_string" >"Services"</span>);
</code><code id="line-21" aria-labelledby="21">
</code><code id="line-22" aria-labelledby="22"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#AUDIO_NODE_DEFINITION" data-i="17" >AUDIO_NODE_DEFINITION</span> = <span data-symbols="#require" data-i="18" >require</span>(<span class="syn_string" >"devtools/server/actors/utils/audionodes.json"</span>);
</code><code id="line-23" aria-labelledby="23"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#ENABLE_AUTOMATION" data-i="19" >ENABLE_AUTOMATION</span> = <span class="syn_reserved" >false</span>;
</code><code id="line-24" aria-labelledby="24"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#AUTOMATION_GRANULARITY" data-i="20" >AUTOMATION_GRANULARITY</span> = 2000;
</code><code id="line-25" aria-labelledby="25"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#AUTOMATION_GRANULARITY_MAX" data-i="21" >AUTOMATION_GRANULARITY_MAX</span> = 6000;
</code><code id="line-26" aria-labelledby="26">
</code><code id="line-27" aria-labelledby="27"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#AUDIO_GLOBALS" data-i="22" >AUDIO_GLOBALS</span> = [
</code><code id="line-28" aria-labelledby="28">  <span class="syn_string" >"BaseAudioContext"</span>, <span class="syn_string" >"AudioContext"</span>, <span class="syn_string" >"AudioNode"</span>, <span class="syn_string" >"AudioParam"</span>,
</code><code id="line-29" aria-labelledby="29">];
</code><code id="line-30" aria-labelledby="30">
</code><code id="line-31" aria-labelledby="31"><span class="syn_comment" >/**</span>
</code><code id="line-32" aria-labelledby="32"><span class="syn_comment" > * An Audio Node actor allowing communication to a specific audio node in the</span>
</code><code id="line-33" aria-labelledby="33"><span class="syn_comment" > * Audio Context graph.</span>
</code><code id="line-34" aria-labelledby="34"><span class="syn_comment" > */</span>
</code><code id="line-35" aria-labelledby="35"><span class="syn_reserved" >var</span> <span class="syn_def" data-symbols="#AudioNodeActor" data-i="23" >AudioNodeActor</span> = <span data-symbols="#exports" data-i="24" >exports</span>.<span data-symbols="#AudioNodeActor,exports#AudioNodeActor" data-i="25" >AudioNodeActor</span> = <span data-symbols="#protocol" data-i="26" >protocol</span>.<span data-symbols="#ActorClassWithSpec,protocol#ActorClassWithSpec" data-i="27" >ActorClassWithSpec</span>(<span data-symbols="#audionodeSpec" data-i="28" >audionodeSpec</span>, {
</code><code id="line-36" aria-labelledby="36">  <span class="syn_def" data-symbols="#form" data-i="29" >form</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-37" aria-labelledby="37">    <span class="syn_reserved" >return</span> {
</code><code id="line-38" aria-labelledby="38">      <span class="syn_comment" >// actorID is set when this is added to a pool</span>
</code><code id="line-39" aria-labelledby="39">      <span class="syn_def" data-symbols="#actor" data-i="30" >actor</span>: <span class="syn_reserved" >this</span>.<span data-symbols="#actorID" data-i="31" >actorID</span>,
</code><code id="line-40" aria-labelledby="40">      <span class="syn_def" data-symbols="#type" data-i="32" >type</span>: <span class="syn_reserved" >this</span>.<span data-symbols="#type" data-i="33" >type</span>,
</code><code id="line-41" aria-labelledby="41">      <span class="syn_def" data-symbols="#source" data-i="34" >source</span>: <span class="syn_reserved" >this</span>.<span data-symbols="#source" data-i="35" >source</span>,
</code><code id="line-42" aria-labelledby="42">      <span class="syn_def" data-symbols="#bypassable" data-i="36" >bypassable</span>: <span class="syn_reserved" >this</span>.<span data-symbols="#bypassable" data-i="37" >bypassable</span>,
</code><code id="line-43" aria-labelledby="43">    };
</code><code id="line-44" aria-labelledby="44">  },
</code><code id="line-45" aria-labelledby="45">
</code><code id="line-46" aria-labelledby="46">  <span class="syn_comment" >/**</span>
</code><code id="line-47" aria-labelledby="47"><span class="syn_comment" >   * Create the Audio Node actor.</span>
</code><code id="line-48" aria-labelledby="48"><span class="syn_comment" >   *</span>
</code><code id="line-49" aria-labelledby="49"><span class="syn_comment" >   * @param DebuggerServerConnection conn</span>
</code><code id="line-50" aria-labelledby="50"><span class="syn_comment" >   *        The server connection.</span>
</code><code id="line-51" aria-labelledby="51"><span class="syn_comment" >   * @param AudioNode node</span>
</code><code id="line-52" aria-labelledby="52"><span class="syn_comment" >   *        The AudioNode that was created.</span>
</code><code id="line-53" aria-labelledby="53"><span class="syn_comment" >   */</span>
</code><code id="line-54" aria-labelledby="54">  <span class="syn_def" data-symbols="#initialize" data-i="38" >initialize</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-0" >conn</span>, <span data-symbols="7944-1" >node</span>) {
</code><code id="line-55" aria-labelledby="55">    <span data-symbols="#protocol" data-i="39" >protocol</span>.<span data-symbols="#Actor,protocol#Actor" data-i="40" >Actor</span>.<span data-symbols="#prototype" data-i="41" >prototype</span>.<span data-symbols="#initialize" data-i="42" >initialize</span>.<span data-symbols="#call" data-i="43" >call</span>(<span class="syn_reserved" >this</span>, <span data-symbols="7944-0" >conn</span>);
</code><code id="line-56" aria-labelledby="56">
</code><code id="line-57" aria-labelledby="57">    <span class="syn_comment" >// Store ChromeOnly property `id` to identify AudioNode,</span>
</code><code id="line-58" aria-labelledby="58">    <span class="syn_comment" >// rather than storing a strong reference, and store a weak</span>
</code><code id="line-59" aria-labelledby="59">    <span class="syn_comment" >// ref to underlying node for controlling.</span>
</code><code id="line-60" aria-labelledby="60">    <span class="syn_reserved" >this</span>.<span data-symbols="#nativeID" data-i="44" >nativeID</span> = <span data-symbols="7944-1" >node</span>.<span data-symbols="#id,node#id" data-i="45" >id</span>;
</code><code id="line-61" aria-labelledby="61">    <span class="syn_reserved" >this</span>.<span data-symbols="#node" data-i="46" >node</span> = <span data-symbols="#Cu" data-i="47" >Cu</span>.<span data-symbols="#getWeakReference,Cu#getWeakReference" data-i="48" >getWeakReference</span>(<span data-symbols="7944-1" >node</span>);
</code><code id="line-62" aria-labelledby="62">
</code><code id="line-63" aria-labelledby="63">    <span class="syn_comment" >// Stores the AutomationTimelines for this node's AudioParams.</span>
</code><code id="line-64" aria-labelledby="64">    <span class="syn_reserved" >this</span>.<span data-symbols="#automation" data-i="49" >automation</span> = {};
</code><code id="line-65" aria-labelledby="65">
</code><code id="line-66" aria-labelledby="66">    <span class="syn_reserved" >try</span> {
</code><code id="line-67" aria-labelledby="67">      <span class="syn_reserved" >this</span>.<span data-symbols="#type" data-i="50" >type</span> = <span data-symbols="#getConstructorName" data-i="51" >getConstructorName</span>(<span data-symbols="7944-1" >node</span>);
</code><code id="line-68" aria-labelledby="68">    } <span class="syn_reserved" >catch</span> (<span data-symbols="7944-2" >e</span>) {
</code><code id="line-69" aria-labelledby="69">      <span class="syn_reserved" >this</span>.<span data-symbols="#type" data-i="52" >type</span> = <span class="syn_string" >""</span>;
</code><code id="line-70" aria-labelledby="70">    }
</code><code id="line-71" aria-labelledby="71">
</code><code id="line-72" aria-labelledby="72">    <span class="syn_reserved" >this</span>.<span data-symbols="#source" data-i="53" >source</span> = !!<span data-symbols="#AUDIO_NODE_DEFINITION" data-i="54" >AUDIO_NODE_DEFINITION</span>[<span class="syn_reserved" >this</span>.<span data-symbols="#type,source#type" data-i="55" >type</span>].<span data-symbols="#source" data-i="56" >source</span>;
</code><code id="line-73" aria-labelledby="73">    <span class="syn_reserved" >this</span>.<span data-symbols="#bypassable" data-i="57" >bypassable</span> = !<span data-symbols="#AUDIO_NODE_DEFINITION" data-i="58" >AUDIO_NODE_DEFINITION</span>[<span class="syn_reserved" >this</span>.<span data-symbols="#type,bypassable#type" data-i="59" >type</span>].<span data-symbols="#unbypassable" data-i="60" >unbypassable</span>;
</code><code id="line-74" aria-labelledby="74">
</code><code id="line-75" aria-labelledby="75">    <span class="syn_comment" >// Create automation timelines for all AudioParams</span>
</code><code id="line-76" aria-labelledby="76">    <span data-symbols="#Object" data-i="61" >Object</span>.<span data-symbols="#keys,Object#keys" data-i="62" >keys</span>(<span data-symbols="#AUDIO_NODE_DEFINITION" data-i="63" >AUDIO_NODE_DEFINITION</span>[<span class="syn_reserved" >this</span>.<span data-symbols="#type" data-i="64" >type</span>].<span data-symbols="#properties" data-i="65" >properties</span> || {})
</code><code id="line-77" aria-labelledby="77">      .<span data-symbols="#filter" data-i="66" >filter</span>(<span data-symbols="#isAudioParam" data-i="67" >isAudioParam</span>.<span data-symbols="#bind,isAudioParam#bind" data-i="68" >bind</span>(<span class="syn_reserved" >null</span>, <span data-symbols="7944-1" >node</span>))
</code><code id="line-78" aria-labelledby="78">      .<span data-symbols="#forEach" data-i="69" >forEach</span>(<span data-symbols="7944-3" >paramName</span> => {
</code><code id="line-79" aria-labelledby="79">        <span class="syn_reserved" >this</span>.<span data-symbols="#automation" data-i="70" >automation</span>[<span data-symbols="7944-3" >paramName</span>] = <span class="syn_reserved" >new</span> <span data-symbols="#AutomationTimeline" data-i="71" >AutomationTimeline</span>(<span data-symbols="7944-1" >node</span>[<span data-symbols="7944-3" >paramName</span>].<span data-symbols="#defaultValue" data-i="72" >defaultValue</span>);
</code><code id="line-80" aria-labelledby="80">      });
</code><code id="line-81" aria-labelledby="81">  },
</code><code id="line-82" aria-labelledby="82">
</code><code id="line-83" aria-labelledby="83">  <span class="syn_comment" >/**</span>
</code><code id="line-84" aria-labelledby="84"><span class="syn_comment" >   * Returns the string name of the audio type.</span>
</code><code id="line-85" aria-labelledby="85"><span class="syn_comment" >   *</span>
</code><code id="line-86" aria-labelledby="86"><span class="syn_comment" >   * DEPRECATED: Use `audionode.type` instead, left here for legacy reasons.</span>
</code><code id="line-87" aria-labelledby="87"><span class="syn_comment" >   */</span>
</code><code id="line-88" aria-labelledby="88">  <span class="syn_def" data-symbols="#getType" data-i="73" >getType</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-89" aria-labelledby="89">    <span class="syn_reserved" >return</span> <span class="syn_reserved" >this</span>.<span data-symbols="#type" data-i="74" >type</span>;
</code><code id="line-90" aria-labelledby="90">  },
</code><code id="line-91" aria-labelledby="91">
</code><code id="line-92" aria-labelledby="92">  <span class="syn_comment" >/**</span>
</code><code id="line-93" aria-labelledby="93"><span class="syn_comment" >   * Returns a boolean indicating if the AudioNode has been "bypassed",</span>
</code><code id="line-94" aria-labelledby="94"><span class="syn_comment" >   * via `AudioNodeActor#bypass` method.</span>
</code><code id="line-95" aria-labelledby="95"><span class="syn_comment" >   *</span>
</code><code id="line-96" aria-labelledby="96"><span class="syn_comment" >   * @return Boolean</span>
</code><code id="line-97" aria-labelledby="97"><span class="syn_comment" >   */</span>
</code><code id="line-98" aria-labelledby="98">  <span class="syn_def" data-symbols="#isBypassed" data-i="75" >isBypassed</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-99" aria-labelledby="99">    <span class="syn_reserved" >const</span> <span data-symbols="7944-4" >node</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#node" data-i="76" >node</span>.<span class="syn_reserved" >get</span>();
</code><code id="line-100" aria-labelledby="100">    <span class="syn_reserved" >if</span> (<span data-symbols="7944-4" >node</span> === <span class="syn_reserved" >null</span>) {
</code><code id="line-101" aria-labelledby="101">      <span class="syn_reserved" >return</span> <span class="syn_reserved" >false</span>;
</code><code id="line-102" aria-labelledby="102">    }
</code><code id="line-103" aria-labelledby="103">
</code><code id="line-104" aria-labelledby="104">    <span class="syn_comment" >// Cast to boolean incase `passThrough` is undefined,</span>
</code><code id="line-105" aria-labelledby="105">    <span class="syn_comment" >// like for AudioDestinationNode</span>
</code><code id="line-106" aria-labelledby="106">    <span class="syn_reserved" >return</span> !!<span data-symbols="7944-4" >node</span>.<span data-symbols="#passThrough,node#passThrough" data-i="77" >passThrough</span>;
</code><code id="line-107" aria-labelledby="107">  },
</code><code id="line-108" aria-labelledby="108">
</code><code id="line-109" aria-labelledby="109">  <span class="syn_comment" >/**</span>
</code><code id="line-110" aria-labelledby="110"><span class="syn_comment" >   * Takes a boolean, either enabling or disabling the "passThrough" option</span>
</code><code id="line-111" aria-labelledby="111"><span class="syn_comment" >   * on an AudioNode. If a node is bypassed, an effects processing node (like gain,</span>
</code><code id="line-112" aria-labelledby="112"><span class="syn_comment" >   * biquad), will allow the audio stream to pass through the node, unaffected.</span>
</code><code id="line-113" aria-labelledby="113"><span class="syn_comment" >   * Returns the bypass state of the node.</span>
</code><code id="line-114" aria-labelledby="114"><span class="syn_comment" >   *</span>
</code><code id="line-115" aria-labelledby="115"><span class="syn_comment" >   * @param Boolean enable</span>
</code><code id="line-116" aria-labelledby="116"><span class="syn_comment" >   *        Whether the bypass value should be set on or off.</span>
</code><code id="line-117" aria-labelledby="117"><span class="syn_comment" >   * @return Boolean</span>
</code><code id="line-118" aria-labelledby="118"><span class="syn_comment" >   */</span>
</code><code id="line-119" aria-labelledby="119">  <span class="syn_def" data-symbols="#bypass" data-i="78" >bypass</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-5" >enable</span>) {
</code><code id="line-120" aria-labelledby="120">    <span class="syn_reserved" >const</span> <span data-symbols="7944-6" >node</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#node" data-i="79" >node</span>.<span class="syn_reserved" >get</span>();
</code><code id="line-121" aria-labelledby="121">
</code><code id="line-122" aria-labelledby="122">    <span class="syn_reserved" >if</span> (<span data-symbols="7944-6" >node</span> === <span class="syn_reserved" >null</span>) {
</code><code id="line-123" aria-labelledby="123">      <span class="syn_reserved" >return</span> <span data-symbols="#undefined" data-i="80" >undefined</span>;
</code><code id="line-124" aria-labelledby="124">    }
</code><code id="line-125" aria-labelledby="125">
</code><code id="line-126" aria-labelledby="126">    <span class="syn_reserved" >if</span> (<span class="syn_reserved" >this</span>.<span data-symbols="#bypassable" data-i="81" >bypassable</span>) {
</code><code id="line-127" aria-labelledby="127">      <span data-symbols="7944-6" >node</span>.<span data-symbols="#passThrough,node#passThrough" data-i="82" >passThrough</span> = <span data-symbols="7944-5" >enable</span>;
</code><code id="line-128" aria-labelledby="128">    }
</code><code id="line-129" aria-labelledby="129">
</code><code id="line-130" aria-labelledby="130">    <span class="syn_reserved" >return</span> <span class="syn_reserved" >this</span>.<span data-symbols="#isBypassed" data-i="83" >isBypassed</span>();
</code><code id="line-131" aria-labelledby="131">  },
</code><code id="line-132" aria-labelledby="132">
</code><code id="line-133" aria-labelledby="133">  <span class="syn_comment" >/**</span>
</code><code id="line-134" aria-labelledby="134"><span class="syn_comment" >   * Changes a param on the audio node. Responds with either `undefined`</span>
</code><code id="line-135" aria-labelledby="135"><span class="syn_comment" >   * on success, or a description of the error upon param set failure.</span>
</code><code id="line-136" aria-labelledby="136"><span class="syn_comment" >   *</span>
</code><code id="line-137" aria-labelledby="137"><span class="syn_comment" >   * @param String param</span>
</code><code id="line-138" aria-labelledby="138"><span class="syn_comment" >   *        Name of the AudioParam to change.</span>
</code><code id="line-139" aria-labelledby="139"><span class="syn_comment" >   * @param String value</span>
</code><code id="line-140" aria-labelledby="140"><span class="syn_comment" >   *        Value to change AudioParam to.</span>
</code><code id="line-141" aria-labelledby="141"><span class="syn_comment" >   */</span>
</code><code id="line-142" aria-labelledby="142">  <span class="syn_def" data-symbols="#setParam" data-i="84" >setParam</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-7" >param</span>, <span data-symbols="7944-8" >value</span>) {
</code><code id="line-143" aria-labelledby="143">    <span class="syn_reserved" >const</span> <span data-symbols="7944-9" >node</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#node" data-i="85" >node</span>.<span class="syn_reserved" >get</span>();
</code><code id="line-144" aria-labelledby="144">
</code><code id="line-145" aria-labelledby="145">    <span class="syn_reserved" >if</span> (<span data-symbols="7944-9" >node</span> === <span class="syn_reserved" >null</span>) {
</code><code id="line-146" aria-labelledby="146">      <span class="syn_reserved" >return</span> <span data-symbols="#CollectedAudioNodeError" data-i="86" >CollectedAudioNodeError</span>();
</code><code id="line-147" aria-labelledby="147">    }
</code><code id="line-148" aria-labelledby="148">
</code><code id="line-149" aria-labelledby="149">    <span class="syn_reserved" >try</span> {
</code><code id="line-150" aria-labelledby="150">      <span class="syn_reserved" >if</span> (<span data-symbols="#isAudioParam" data-i="87" >isAudioParam</span>(<span data-symbols="7944-9" >node</span>, <span data-symbols="7944-7" >param</span>)) {
</code><code id="line-151" aria-labelledby="151">        <span data-symbols="7944-9" >node</span>[<span data-symbols="7944-7" >param</span>].<span data-symbols="#value" data-i="88" >value</span> = <span data-symbols="7944-8" >value</span>;
</code><code id="line-152" aria-labelledby="152">        <span class="syn_reserved" >this</span>.<span data-symbols="#automation" data-i="89" >automation</span>[<span data-symbols="7944-7" >param</span>].<span data-symbols="#setValue" data-i="90" >setValue</span>(<span data-symbols="7944-8" >value</span>);
</code><code id="line-153" aria-labelledby="153">      } <span class="syn_reserved" >else</span> {
</code><code id="line-154" aria-labelledby="154">        <span data-symbols="7944-9" >node</span>[<span data-symbols="7944-7" >param</span>] = <span data-symbols="7944-8" >value</span>;
</code><code id="line-155" aria-labelledby="155">      }
</code><code id="line-156" aria-labelledby="156">      <span class="syn_reserved" >return</span> <span data-symbols="#undefined" data-i="91" >undefined</span>;
</code><code id="line-157" aria-labelledby="157">    } <span class="syn_reserved" >catch</span> (<span data-symbols="7944-10" >e</span>) {
</code><code id="line-158" aria-labelledby="158">      <span class="syn_reserved" >return</span> <span data-symbols="#constructError" data-i="92" >constructError</span>(<span data-symbols="7944-10" >e</span>);
</code><code id="line-159" aria-labelledby="159">    }
</code><code id="line-160" aria-labelledby="160">  },
</code><code id="line-161" aria-labelledby="161">
</code><code id="line-162" aria-labelledby="162">  <span class="syn_comment" >/**</span>
</code><code id="line-163" aria-labelledby="163"><span class="syn_comment" >   * Gets a param on the audio node.</span>
</code><code id="line-164" aria-labelledby="164"><span class="syn_comment" >   *</span>
</code><code id="line-165" aria-labelledby="165"><span class="syn_comment" >   * @param String param</span>
</code><code id="line-166" aria-labelledby="166"><span class="syn_comment" >   *        Name of the AudioParam to fetch.</span>
</code><code id="line-167" aria-labelledby="167"><span class="syn_comment" >   */</span>
</code><code id="line-168" aria-labelledby="168">  <span class="syn_def" data-symbols="#getParam" data-i="93" >getParam</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-11" >param</span>) {
</code><code id="line-169" aria-labelledby="169">    <span class="syn_reserved" >const</span> <span data-symbols="7944-12" >node</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#node" data-i="94" >node</span>.<span class="syn_reserved" >get</span>();
</code><code id="line-170" aria-labelledby="170">
</code><code id="line-171" aria-labelledby="171">    <span class="syn_reserved" >if</span> (<span data-symbols="7944-12" >node</span> === <span class="syn_reserved" >null</span>) {
</code><code id="line-172" aria-labelledby="172">      <span class="syn_reserved" >return</span> <span data-symbols="#CollectedAudioNodeError" data-i="95" >CollectedAudioNodeError</span>();
</code><code id="line-173" aria-labelledby="173">    }
</code><code id="line-174" aria-labelledby="174">
</code><code id="line-175" aria-labelledby="175">    <span class="syn_comment" >// Check to see if it's an AudioParam -- if so,</span>
</code><code id="line-176" aria-labelledby="176">    <span class="syn_comment" >// return the `value` property of the parameter.</span>
</code><code id="line-177" aria-labelledby="177">    <span class="syn_reserved" >const</span> <span data-symbols="7944-13" >value</span> = <span data-symbols="#isAudioParam" data-i="96" >isAudioParam</span>(<span data-symbols="7944-12" >node</span>, <span data-symbols="7944-11" >param</span>) ? <span data-symbols="7944-12" >node</span>[<span data-symbols="7944-11" >param</span>].<span data-symbols="#value" data-i="97" >value</span> : <span data-symbols="7944-12" >node</span>[<span data-symbols="7944-11" >param</span>];
</code><code id="line-178" aria-labelledby="178">
</code><code id="line-179" aria-labelledby="179">    <span class="syn_comment" >// Return the grip form of the value; at this time,</span>
</code><code id="line-180" aria-labelledby="180">    <span class="syn_comment" >// there shouldn't be any non-primitives at the moment, other than</span>
</code><code id="line-181" aria-labelledby="181">    <span class="syn_comment" >// AudioBuffer or Float32Array references and the like,</span>
</code><code id="line-182" aria-labelledby="182">    <span class="syn_comment" >// so this just formats the value to be displayed in the VariablesView,</span>
</code><code id="line-183" aria-labelledby="183">    <span class="syn_comment" >// without using real grips and managing via actor pools.</span>
</code><code id="line-184" aria-labelledby="184">    <span class="syn_reserved" >const</span> <span data-symbols="7944-14" >grip</span> = <span data-symbols="#createValueGrip" data-i="98" >createValueGrip</span>(<span data-symbols="7944-13" >value</span>, <span class="syn_reserved" >null</span>, <span data-symbols="#createObjectGrip" data-i="99" >createObjectGrip</span>);
</code><code id="line-185" aria-labelledby="185">
</code><code id="line-186" aria-labelledby="186">    <span class="syn_reserved" >return</span> <span data-symbols="7944-14" >grip</span>;
</code><code id="line-187" aria-labelledby="187">  },
</code><code id="line-188" aria-labelledby="188">
</code><code id="line-189" aria-labelledby="189">  <span class="syn_comment" >/**</span>
</code><code id="line-190" aria-labelledby="190"><span class="syn_comment" >   * Get an object containing key-value pairs of additional attributes</span>
</code><code id="line-191" aria-labelledby="191"><span class="syn_comment" >   * to be consumed by a front end, like if a property should be read only,</span>
</code><code id="line-192" aria-labelledby="192"><span class="syn_comment" >   * or is a special type (Float32Array, Buffer, etc.)</span>
</code><code id="line-193" aria-labelledby="193"><span class="syn_comment" >   *</span>
</code><code id="line-194" aria-labelledby="194"><span class="syn_comment" >   * @param String param</span>
</code><code id="line-195" aria-labelledby="195"><span class="syn_comment" >   *        Name of the AudioParam whose flags are desired.</span>
</code><code id="line-196" aria-labelledby="196"><span class="syn_comment" >   */</span>
</code><code id="line-197" aria-labelledby="197">  <span class="syn_def" data-symbols="#getParamFlags" data-i="100" >getParamFlags</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-15" >param</span>) {
</code><code id="line-198" aria-labelledby="198">    <span class="syn_reserved" >return</span> ((<span data-symbols="#AUDIO_NODE_DEFINITION" data-i="101" >AUDIO_NODE_DEFINITION</span>[<span class="syn_reserved" >this</span>.<span data-symbols="#type" data-i="102" >type</span>] || {}).<span data-symbols="#properties" data-i="103" >properties</span> || {})[<span data-symbols="7944-15" >param</span>];
</code><code id="line-199" aria-labelledby="199">  },
</code><code id="line-200" aria-labelledby="200">
</code><code id="line-201" aria-labelledby="201">  <span class="syn_comment" >/**</span>
</code><code id="line-202" aria-labelledby="202"><span class="syn_comment" >   * Get an array of objects each containing a `param` and `value` property,</span>
</code><code id="line-203" aria-labelledby="203"><span class="syn_comment" >   * corresponding to a property name and current value of the audio node.</span>
</code><code id="line-204" aria-labelledby="204"><span class="syn_comment" >   */</span>
</code><code id="line-205" aria-labelledby="205">  <span class="syn_def" data-symbols="#getParams" data-i="104" >getParams</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-16" >param</span>) {
</code><code id="line-206" aria-labelledby="206">    <span class="syn_reserved" >const</span> <span data-symbols="7944-17" >props</span> = <span data-symbols="#Object" data-i="105" >Object</span>.<span data-symbols="#keys,Object#keys" data-i="106" >keys</span>(<span data-symbols="#AUDIO_NODE_DEFINITION" data-i="107" >AUDIO_NODE_DEFINITION</span>[<span class="syn_reserved" >this</span>.<span data-symbols="#type" data-i="108" >type</span>].<span data-symbols="#properties" data-i="109" >properties</span> || {});
</code><code id="line-207" aria-labelledby="207">    <span class="syn_reserved" >return</span> <span data-symbols="7944-17" >props</span>.<span data-symbols="#map,props#map" data-i="110" >map</span>(<span data-symbols="7944-18" >prop</span> =>
</code><code id="line-208" aria-labelledby="208">      ({ <span class="syn_def" data-symbols="#param" data-i="111" >param</span>: <span data-symbols="7944-18" >prop</span>, <span class="syn_def" data-symbols="#value" data-i="112" >value</span>: <span class="syn_reserved" >this</span>.<span data-symbols="#getParam" data-i="113" >getParam</span>(<span data-symbols="7944-18" >prop</span>), <span class="syn_def" data-symbols="#flags" data-i="114" >flags</span>: <span class="syn_reserved" >this</span>.<span data-symbols="#getParamFlags" data-i="115" >getParamFlags</span>(<span data-symbols="7944-18" >prop</span>) }));
</code><code id="line-209" aria-labelledby="209">  },
</code><code id="line-210" aria-labelledby="210">
</code><code id="line-211" aria-labelledby="211">  <span class="syn_comment" >/**</span>
</code><code id="line-212" aria-labelledby="212"><span class="syn_comment" >   * Connects this audionode to an AudioParam via `node.connect(param)`.</span>
</code><code id="line-213" aria-labelledby="213"><span class="syn_comment" >   */</span>
</code><code id="line-214" aria-labelledby="214">  <span class="syn_def" data-symbols="#connectParam" data-i="116" >connectParam</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-19" >destActor</span>, <span data-symbols="7944-20" >paramName</span>, <span data-symbols="7944-21" >output</span>) {
</code><code id="line-215" aria-labelledby="215">    <span class="syn_reserved" >const</span> <span data-symbols="7944-22" >srcNode</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#node" data-i="117" >node</span>.<span class="syn_reserved" >get</span>();
</code><code id="line-216" aria-labelledby="216">    <span class="syn_reserved" >const</span> <span data-symbols="7944-23" >destNode</span> = <span data-symbols="7944-19" >destActor</span>.<span data-symbols="#node,destActor#node" data-i="118" >node</span>.<span class="syn_reserved" >get</span>();
</code><code id="line-217" aria-labelledby="217">
</code><code id="line-218" aria-labelledby="218">    <span class="syn_reserved" >if</span> (<span data-symbols="7944-22" >srcNode</span> === <span class="syn_reserved" >null</span> || <span data-symbols="7944-23" >destNode</span> === <span class="syn_reserved" >null</span>) {
</code><code id="line-219" aria-labelledby="219">      <span class="syn_reserved" >return</span> <span data-symbols="#CollectedAudioNodeError" data-i="119" >CollectedAudioNodeError</span>();
</code><code id="line-220" aria-labelledby="220">    }
</code><code id="line-221" aria-labelledby="221">
</code><code id="line-222" aria-labelledby="222">    <span class="syn_reserved" >try</span> {
</code><code id="line-223" aria-labelledby="223">      <span class="syn_comment" >// Connect via the unwrapped node, so we can call the</span>
</code><code id="line-224" aria-labelledby="224">      <span class="syn_comment" >// patched method that fires the webaudio actor's `connect-param` event.</span>
</code><code id="line-225" aria-labelledby="225">      <span class="syn_comment" >// Connect directly to the wrapped `destNode`, otherwise</span>
</code><code id="line-226" aria-labelledby="226">      <span class="syn_comment" >// the patched method thinks this is a new node and won't be</span>
</code><code id="line-227" aria-labelledby="227">      <span class="syn_comment" >// able to find it in `_nativeToActorID`.</span>
</code><code id="line-228" aria-labelledby="228">      <span data-symbols="#XPCNativeWrapper" data-i="120" >XPCNativeWrapper</span>.<span data-symbols="#unwrap,XPCNativeWrapper#unwrap" data-i="121" >unwrap</span>(<span data-symbols="7944-22" >srcNode</span>).<span data-symbols="#connect" data-i="122" >connect</span>(<span data-symbols="7944-23" >destNode</span>[<span data-symbols="7944-20" >paramName</span>], <span data-symbols="7944-21" >output</span>);
</code><code id="line-229" aria-labelledby="229">    } <span class="syn_reserved" >catch</span> (<span data-symbols="7944-24" >e</span>) {
</code><code id="line-230" aria-labelledby="230">      <span class="syn_reserved" >return</span> <span data-symbols="#constructError" data-i="123" >constructError</span>(<span data-symbols="7944-24" >e</span>);
</code><code id="line-231" aria-labelledby="231">    }
</code><code id="line-232" aria-labelledby="232">    <span class="syn_reserved" >return</span> <span data-symbols="#undefined" data-i="124" >undefined</span>;
</code><code id="line-233" aria-labelledby="233">  },
</code><code id="line-234" aria-labelledby="234">
</code><code id="line-235" aria-labelledby="235">  <span class="syn_comment" >/**</span>
</code><code id="line-236" aria-labelledby="236"><span class="syn_comment" >   * Connects this audionode to another via `node.connect(dest)`.</span>
</code><code id="line-237" aria-labelledby="237"><span class="syn_comment" >   */</span>
</code><code id="line-238" aria-labelledby="238">  <span class="syn_def" data-symbols="#connectNode" data-i="125" >connectNode</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-25" >destActor</span>, <span data-symbols="7944-26" >output</span>, <span data-symbols="7944-27" >input</span>) {
</code><code id="line-239" aria-labelledby="239">    <span class="syn_reserved" >const</span> <span data-symbols="7944-28" >srcNode</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#node" data-i="126" >node</span>.<span class="syn_reserved" >get</span>();
</code><code id="line-240" aria-labelledby="240">    <span class="syn_reserved" >const</span> <span data-symbols="7944-29" >destNode</span> = <span data-symbols="7944-25" >destActor</span>.<span data-symbols="#node,destActor#node" data-i="127" >node</span>.<span class="syn_reserved" >get</span>();
</code><code id="line-241" aria-labelledby="241">
</code><code id="line-242" aria-labelledby="242">    <span class="syn_reserved" >if</span> (<span data-symbols="7944-28" >srcNode</span> === <span class="syn_reserved" >null</span> || <span data-symbols="7944-29" >destNode</span> === <span class="syn_reserved" >null</span>) {
</code><code id="line-243" aria-labelledby="243">      <span class="syn_reserved" >return</span> <span data-symbols="#CollectedAudioNodeError" data-i="128" >CollectedAudioNodeError</span>();
</code><code id="line-244" aria-labelledby="244">    }
</code><code id="line-245" aria-labelledby="245">
</code><code id="line-246" aria-labelledby="246">    <span class="syn_reserved" >try</span> {
</code><code id="line-247" aria-labelledby="247">      <span class="syn_comment" >// Connect via the unwrapped node, so we can call the</span>
</code><code id="line-248" aria-labelledby="248">      <span class="syn_comment" >// patched method that fires the webaudio actor's `connect-node` event.</span>
</code><code id="line-249" aria-labelledby="249">      <span class="syn_comment" >// Connect directly to the wrapped `destNode`, otherwise</span>
</code><code id="line-250" aria-labelledby="250">      <span class="syn_comment" >// the patched method thinks this is a new node and won't be</span>
</code><code id="line-251" aria-labelledby="251">      <span class="syn_comment" >// able to find it in `_nativeToActorID`.</span>
</code><code id="line-252" aria-labelledby="252">      <span data-symbols="#XPCNativeWrapper" data-i="129" >XPCNativeWrapper</span>.<span data-symbols="#unwrap,XPCNativeWrapper#unwrap" data-i="130" >unwrap</span>(<span data-symbols="7944-28" >srcNode</span>).<span data-symbols="#connect" data-i="131" >connect</span>(<span data-symbols="7944-29" >destNode</span>, <span data-symbols="7944-26" >output</span>, <span data-symbols="7944-27" >input</span>);
</code><code id="line-253" aria-labelledby="253">    } <span class="syn_reserved" >catch</span> (<span data-symbols="7944-30" >e</span>) {
</code><code id="line-254" aria-labelledby="254">      <span class="syn_reserved" >return</span> <span data-symbols="#constructError" data-i="132" >constructError</span>(<span data-symbols="7944-30" >e</span>);
</code><code id="line-255" aria-labelledby="255">    }
</code><code id="line-256" aria-labelledby="256">    <span class="syn_reserved" >return</span> <span data-symbols="#undefined" data-i="133" >undefined</span>;
</code><code id="line-257" aria-labelledby="257">  },
</code><code id="line-258" aria-labelledby="258">
</code><code id="line-259" aria-labelledby="259">  <span class="syn_comment" >/**</span>
</code><code id="line-260" aria-labelledby="260"><span class="syn_comment" >   * Disconnects this audionode from all connections via `node.disconnect()`.</span>
</code><code id="line-261" aria-labelledby="261"><span class="syn_comment" >   */</span>
</code><code id="line-262" aria-labelledby="262">  <span class="syn_def" data-symbols="#disconnect" data-i="134" >disconnect</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-31" >destActor</span>, <span data-symbols="7944-32" >output</span>) {
</code><code id="line-263" aria-labelledby="263">    <span class="syn_reserved" >const</span> <span data-symbols="7944-33" >node</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#node" data-i="135" >node</span>.<span class="syn_reserved" >get</span>();
</code><code id="line-264" aria-labelledby="264">
</code><code id="line-265" aria-labelledby="265">    <span class="syn_reserved" >if</span> (<span data-symbols="7944-33" >node</span> === <span class="syn_reserved" >null</span>) {
</code><code id="line-266" aria-labelledby="266">      <span class="syn_reserved" >return</span> <span data-symbols="#CollectedAudioNodeError" data-i="136" >CollectedAudioNodeError</span>();
</code><code id="line-267" aria-labelledby="267">    }
</code><code id="line-268" aria-labelledby="268">
</code><code id="line-269" aria-labelledby="269">    <span class="syn_reserved" >try</span> {
</code><code id="line-270" aria-labelledby="270">      <span class="syn_comment" >// Disconnect via the unwrapped node, so we can call the</span>
</code><code id="line-271" aria-labelledby="271">      <span class="syn_comment" >// patched method that fires the webaudio actor's `disconnect` event.</span>
</code><code id="line-272" aria-labelledby="272">      <span data-symbols="#XPCNativeWrapper" data-i="137" >XPCNativeWrapper</span>.<span data-symbols="#unwrap,XPCNativeWrapper#unwrap" data-i="138" >unwrap</span>(<span data-symbols="7944-33" >node</span>).<span data-symbols="#disconnect" data-i="139" >disconnect</span>(<span data-symbols="7944-32" >output</span>);
</code><code id="line-273" aria-labelledby="273">    } <span class="syn_reserved" >catch</span> (<span data-symbols="7944-34" >e</span>) {
</code><code id="line-274" aria-labelledby="274">      <span class="syn_reserved" >return</span> <span data-symbols="#constructError" data-i="140" >constructError</span>(<span data-symbols="7944-34" >e</span>);
</code><code id="line-275" aria-labelledby="275">    }
</code><code id="line-276" aria-labelledby="276">    <span class="syn_reserved" >return</span> <span data-symbols="#undefined" data-i="141" >undefined</span>;
</code><code id="line-277" aria-labelledby="277">  },
</code><code id="line-278" aria-labelledby="278">
</code><code id="line-279" aria-labelledby="279">  <span class="syn_def" data-symbols="#getAutomationData" data-i="142" >getAutomationData</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-35" >paramName</span>) {
</code><code id="line-280" aria-labelledby="280">    <span class="syn_reserved" >const</span> <span data-symbols="7944-36" >timeline</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#automation" data-i="143" >automation</span>[<span data-symbols="7944-35" >paramName</span>];
</code><code id="line-281" aria-labelledby="281">    <span class="syn_reserved" >if</span> (!<span data-symbols="7944-36" >timeline</span>) {
</code><code id="line-282" aria-labelledby="282">      <span class="syn_reserved" >return</span> <span class="syn_reserved" >null</span>;
</code><code id="line-283" aria-labelledby="283">    }
</code><code id="line-284" aria-labelledby="284">
</code><code id="line-285" aria-labelledby="285">    <span class="syn_reserved" >const</span> <span data-symbols="7944-37" >values</span> = [];
</code><code id="line-286" aria-labelledby="286">    <span class="syn_reserved" >let</span> <span data-symbols="7944-38" >i</span> = 0;
</code><code id="line-287" aria-labelledby="287">
</code><code id="line-288" aria-labelledby="288">    <span class="syn_reserved" >if</span> (!<span data-symbols="7944-36" >timeline</span>.<span data-symbols="#events,timeline#events" data-i="144" >events</span>.<span data-symbols="#length" data-i="145" >length</span>) {
</code><code id="line-289" aria-labelledby="289">      <span class="syn_reserved" >return</span> { <span class="syn_def" data-symbols="#events" data-i="146" >events</span>: <span data-symbols="7944-36" >timeline</span>.<span data-symbols="#events,timeline#events" data-i="147" >events</span>, <span class="syn_def" data-symbols="#values,7944-37" data-i="148" >values</span> };
</code><code id="line-290" aria-labelledby="290">    }
</code><code id="line-291" aria-labelledby="291">
</code><code id="line-292" aria-labelledby="292">    <span class="syn_reserved" >const</span> <span data-symbols="7944-39" >firstEvent</span> = <span data-symbols="7944-36" >timeline</span>.<span data-symbols="#events,timeline#events" data-i="149" >events</span>[0];
</code><code id="line-293" aria-labelledby="293">    <span class="syn_reserved" >const</span> <span data-symbols="7944-40" >lastEvent</span> = <span data-symbols="7944-36" >timeline</span>.<span data-symbols="#events,timeline#events" data-i="150" >events</span>[<span data-symbols="7944-36" >timeline</span>.<span data-symbols="#events,timeline#events" data-i="151" >events</span>.<span data-symbols="#length" data-i="152" >length</span> - 1];
</code><code id="line-294" aria-labelledby="294">    <span class="syn_comment" >// `setValueCurveAtTime` will have a duration value -- other</span>
</code><code id="line-295" aria-labelledby="295">    <span class="syn_comment" >// events will have duration of `0`.</span>
</code><code id="line-296" aria-labelledby="296">    <span class="syn_reserved" >const</span> <span data-symbols="7944-41" >timeDelta</span> = (<span data-symbols="7944-40" >lastEvent</span>.<span data-symbols="#time,lastEvent#time" data-i="153" >time</span> + <span data-symbols="7944-40" >lastEvent</span>.<span data-symbols="#duration,lastEvent#duration" data-i="154" >duration</span>) - <span data-symbols="7944-39" >firstEvent</span>.<span data-symbols="#time,firstEvent#time" data-i="155" >time</span>;
</code><code id="line-297" aria-labelledby="297">    <span class="syn_reserved" >const</span> <span data-symbols="7944-42" >scale</span> = <span data-symbols="7944-41" >timeDelta</span> / <span data-symbols="#AUTOMATION_GRANULARITY" data-i="156" >AUTOMATION_GRANULARITY</span>;
</code><code id="line-298" aria-labelledby="298">
</code><code id="line-299" aria-labelledby="299">    <span class="syn_reserved" >for</span> (; <span data-symbols="7944-38" >i</span> &lt; <span data-symbols="#AUTOMATION_GRANULARITY" data-i="157" >AUTOMATION_GRANULARITY</span>; <span data-symbols="7944-38" >i</span>++) {
</code><code id="line-300" aria-labelledby="300">      <span class="syn_reserved" >const</span> <span data-symbols="7944-43" >delta</span> = <span data-symbols="7944-39" >firstEvent</span>.<span data-symbols="#time,firstEvent#time" data-i="158" >time</span> + (<span data-symbols="7944-38" >i</span> * <span data-symbols="7944-42" >scale</span>);
</code><code id="line-301" aria-labelledby="301">      <span class="syn_reserved" >const</span> <span data-symbols="7944-44" >value</span> = <span data-symbols="7944-36" >timeline</span>.<span data-symbols="#getValueAtTime,timeline#getValueAtTime" data-i="159" >getValueAtTime</span>(<span data-symbols="7944-43" >delta</span>);
</code><code id="line-302" aria-labelledby="302">      <span data-symbols="7944-37" >values</span>.<span data-symbols="#push,values#push" data-i="160" >push</span>({ <span class="syn_def" data-symbols="#delta,7944-43" data-i="161" >delta</span>, <span class="syn_def" data-symbols="#value,7944-44" data-i="162" >value</span> });
</code><code id="line-303" aria-labelledby="303">    }
</code><code id="line-304" aria-labelledby="304">
</code><code id="line-305" aria-labelledby="305">    <span class="syn_comment" >// If the last event is setTargetAtTime, the automation</span>
</code><code id="line-306" aria-labelledby="306">    <span class="syn_comment" >// doesn't actually begin until the event's time, and exponentially</span>
</code><code id="line-307" aria-labelledby="307">    <span class="syn_comment" >// approaches the target value. In this case, we add more values</span>
</code><code id="line-308" aria-labelledby="308">    <span class="syn_comment" >// until we're "close enough" to the target.</span>
</code><code id="line-309" aria-labelledby="309">    <span class="syn_reserved" >if</span> (<span data-symbols="7944-40" >lastEvent</span>.<span data-symbols="#type,lastEvent#type" data-i="163" >type</span> === <span class="syn_string" >"setTargetAtTime"</span>) {
</code><code id="line-310" aria-labelledby="310">      <span class="syn_reserved" >for</span> (; <span data-symbols="7944-38" >i</span> &lt; <span data-symbols="#AUTOMATION_GRANULARITY_MAX" data-i="164" >AUTOMATION_GRANULARITY_MAX</span>; <span data-symbols="7944-38" >i</span>++) {
</code><code id="line-311" aria-labelledby="311">        <span class="syn_reserved" >const</span> <span data-symbols="7944-45" >delta</span> = <span data-symbols="7944-39" >firstEvent</span>.<span data-symbols="#time,firstEvent#time" data-i="165" >time</span> + (++<span data-symbols="7944-38" >i</span> * <span data-symbols="7944-42" >scale</span>);
</code><code id="line-312" aria-labelledby="312">        <span class="syn_reserved" >const</span> <span data-symbols="7944-46" >value</span> = <span data-symbols="7944-36" >timeline</span>.<span data-symbols="#getValueAtTime,timeline#getValueAtTime" data-i="166" >getValueAtTime</span>(<span data-symbols="7944-45" >delta</span>);
</code><code id="line-313" aria-labelledby="313">        <span data-symbols="7944-37" >values</span>.<span data-symbols="#push,values#push" data-i="167" >push</span>({ <span class="syn_def" data-symbols="#delta,7944-45" data-i="168" >delta</span>, <span class="syn_def" data-symbols="#value,7944-46" data-i="169" >value</span> });
</code><code id="line-314" aria-labelledby="314">      }
</code><code id="line-315" aria-labelledby="315">    }
</code><code id="line-316" aria-labelledby="316">
</code><code id="line-317" aria-labelledby="317">    <span class="syn_reserved" >return</span> { <span class="syn_def" data-symbols="#events" data-i="170" >events</span>: <span data-symbols="7944-36" >timeline</span>.<span data-symbols="#events,timeline#events" data-i="171" >events</span>, <span class="syn_def" data-symbols="#values,7944-37" data-i="172" >values</span> };
</code><code id="line-318" aria-labelledby="318">  },
</code><code id="line-319" aria-labelledby="319">
</code><code id="line-320" aria-labelledby="320">  <span class="syn_comment" >/**</span>
</code><code id="line-321" aria-labelledby="321"><span class="syn_comment" >   * Called via WebAudioActor, registers an automation event</span>
</code><code id="line-322" aria-labelledby="322"><span class="syn_comment" >   * for the AudioParam called.</span>
</code><code id="line-323" aria-labelledby="323"><span class="syn_comment" >   *</span>
</code><code id="line-324" aria-labelledby="324"><span class="syn_comment" >   * @param String paramName</span>
</code><code id="line-325" aria-labelledby="325"><span class="syn_comment" >   *        Name of the AudioParam.</span>
</code><code id="line-326" aria-labelledby="326"><span class="syn_comment" >   * @param String eventName</span>
</code><code id="line-327" aria-labelledby="327"><span class="syn_comment" >   *        Name of the automation event called.</span>
</code><code id="line-328" aria-labelledby="328"><span class="syn_comment" >   * @param Array args</span>
</code><code id="line-329" aria-labelledby="329"><span class="syn_comment" >   *        Arguments passed into the automation call.</span>
</code><code id="line-330" aria-labelledby="330"><span class="syn_comment" >   */</span>
</code><code id="line-331" aria-labelledby="331">  <span class="syn_def" data-symbols="#addAutomationEvent" data-i="173" >addAutomationEvent</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-47" >paramName</span>, <span data-symbols="7944-48" >eventName</span>, <span data-symbols="7944-49" >args</span> = []) {
</code><code id="line-332" aria-labelledby="332">    <span class="syn_reserved" >const</span> <span data-symbols="7944-50" >node</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#node" data-i="174" >node</span>.<span class="syn_reserved" >get</span>();
</code><code id="line-333" aria-labelledby="333">    <span class="syn_reserved" >const</span> <span data-symbols="7944-51" >timeline</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#automation" data-i="175" >automation</span>[<span data-symbols="7944-47" >paramName</span>];
</code><code id="line-334" aria-labelledby="334">
</code><code id="line-335" aria-labelledby="335">    <span class="syn_reserved" >if</span> (<span data-symbols="7944-50" >node</span> === <span class="syn_reserved" >null</span>) {
</code><code id="line-336" aria-labelledby="336">      <span class="syn_reserved" >return</span> <span data-symbols="#CollectedAudioNodeError" data-i="176" >CollectedAudioNodeError</span>();
</code><code id="line-337" aria-labelledby="337">    }
</code><code id="line-338" aria-labelledby="338">
</code><code id="line-339" aria-labelledby="339">    <span class="syn_reserved" >if</span> (!<span data-symbols="7944-51" >timeline</span> || !<span data-symbols="7944-50" >node</span>[<span data-symbols="7944-47" >paramName</span>][<span data-symbols="7944-48" >eventName</span>]) {
</code><code id="line-340" aria-labelledby="340">      <span class="syn_reserved" >return</span> <span data-symbols="#InvalidCommandError" data-i="177" >InvalidCommandError</span>();
</code><code id="line-341" aria-labelledby="341">    }
</code><code id="line-342" aria-labelledby="342">
</code><code id="line-343" aria-labelledby="343">    <span class="syn_reserved" >try</span> {
</code><code id="line-344" aria-labelledby="344">      <span class="syn_comment" >// Using the unwrapped node and parameter, the corresponding</span>
</code><code id="line-345" aria-labelledby="345">      <span class="syn_comment" >// WebAudioActor event will be fired, subsequently calling</span>
</code><code id="line-346" aria-labelledby="346">      <span class="syn_comment" >// `_recordAutomationEvent`. Some finesse is required to handle</span>
</code><code id="line-347" aria-labelledby="347">      <span class="syn_comment" >// the cast of TypedArray arguments over the protocol, which is</span>
</code><code id="line-348" aria-labelledby="348">      <span class="syn_comment" >// taken care of below. The event will cast the argument back</span>
</code><code id="line-349" aria-labelledby="349">      <span class="syn_comment" >// into an array to be broadcasted from WebAudioActor, but the</span>
</code><code id="line-350" aria-labelledby="350">      <span class="syn_comment" >// double-casting will only occur when starting from `addAutomationEvent`,</span>
</code><code id="line-351" aria-labelledby="351">      <span class="syn_comment" >// which is only used in tests.</span>
</code><code id="line-352" aria-labelledby="352">      <span class="syn_reserved" >const</span> <span data-symbols="7944-52" >param</span> = <span data-symbols="#XPCNativeWrapper" data-i="178" >XPCNativeWrapper</span>.<span data-symbols="#unwrap,XPCNativeWrapper#unwrap" data-i="179" >unwrap</span>(<span data-symbols="7944-50" >node</span>[<span data-symbols="7944-47" >paramName</span>]);
</code><code id="line-353" aria-labelledby="353">      <span class="syn_reserved" >const</span> <span data-symbols="7944-53" >contentGlobal</span> = <span data-symbols="#Cu" data-i="180" >Cu</span>.<span data-symbols="#getGlobalForObject,Cu#getGlobalForObject" data-i="181" >getGlobalForObject</span>(<span data-symbols="7944-52" >param</span>);
</code><code id="line-354" aria-labelledby="354">      <span class="syn_reserved" >const</span> <span data-symbols="7944-54" >contentArgs</span> = <span data-symbols="#Cu" data-i="182" >Cu</span>.<span data-symbols="#cloneInto,Cu#cloneInto" data-i="183" >cloneInto</span>(<span data-symbols="7944-49" >args</span>, <span data-symbols="7944-53" >contentGlobal</span>);
</code><code id="line-355" aria-labelledby="355">
</code><code id="line-356" aria-labelledby="356">      <span class="syn_comment" >// If calling `setValueCurveAtTime`, the first argument</span>
</code><code id="line-357" aria-labelledby="357">      <span class="syn_comment" >// is a Float32Array, which won't be able to be serialized</span>
</code><code id="line-358" aria-labelledby="358">      <span class="syn_comment" >// over the protocol. Cast a normal array to a Float32Array here.</span>
</code><code id="line-359" aria-labelledby="359">      <span class="syn_reserved" >if</span> (<span data-symbols="7944-48" >eventName</span> === <span class="syn_string" >"setValueCurveAtTime"</span>) {
</code><code id="line-360" aria-labelledby="360">        <span class="syn_comment" >// Create a Float32Array from the content, seeding with an array</span>
</code><code id="line-361" aria-labelledby="361">        <span class="syn_comment" >// from the same scope.</span>
</code><code id="line-362" aria-labelledby="362">        <span class="syn_reserved" >const</span> <span data-symbols="7944-55" >curve</span> = <span class="syn_reserved" >new</span> <span data-symbols="7944-53" >contentGlobal</span>.<span data-symbols="#Float32Array,contentGlobal#Float32Array" data-i="184" >Float32Array</span>(<span data-symbols="7944-54" >contentArgs</span>[0]);
</code><code id="line-363" aria-labelledby="363">        <span data-symbols="7944-54" >contentArgs</span>[0] = <span data-symbols="7944-55" >curve</span>;
</code><code id="line-364" aria-labelledby="364">      }
</code><code id="line-365" aria-labelledby="365">
</code><code id="line-366" aria-labelledby="366">      <span class="syn_comment" >// Apply the args back from the content scope, which is necessary</span>
</code><code id="line-367" aria-labelledby="367">      <span class="syn_comment" >// due to the method wrapping changing in <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=1130901">bug 1130901</a> to be exported</span>
</code><code id="line-368" aria-labelledby="368">      <span class="syn_comment" >// directly to the content scope.</span>
</code><code id="line-369" aria-labelledby="369">      <span data-symbols="7944-52" >param</span>[<span data-symbols="7944-48" >eventName</span>].<span data-symbols="#apply" data-i="185" >apply</span>(<span data-symbols="7944-52" >param</span>, <span data-symbols="7944-54" >contentArgs</span>);
</code><code id="line-370" aria-labelledby="370">    } <span class="syn_reserved" >catch</span> (<span data-symbols="7944-56" >e</span>) {
</code><code id="line-371" aria-labelledby="371">      <span class="syn_reserved" >return</span> <span data-symbols="#constructError" data-i="186" >constructError</span>(<span data-symbols="7944-56" >e</span>);
</code><code id="line-372" aria-labelledby="372">    }
</code><code id="line-373" aria-labelledby="373">    <span class="syn_reserved" >return</span> <span data-symbols="#undefined" data-i="187" >undefined</span>;
</code><code id="line-374" aria-labelledby="374">  },
</code><code id="line-375" aria-labelledby="375">
</code><code id="line-376" aria-labelledby="376">  <span class="syn_comment" >/**</span>
</code><code id="line-377" aria-labelledby="377"><span class="syn_comment" >   * Registers the automation event in the AudioNodeActor's</span>
</code><code id="line-378" aria-labelledby="378"><span class="syn_comment" >   * internal timeline. Called when setting automation via</span>
</code><code id="line-379" aria-labelledby="379"><span class="syn_comment" >   * `addAutomationEvent`, or from the WebAudioActor's listening</span>
</code><code id="line-380" aria-labelledby="380"><span class="syn_comment" >   * to the event firing via content.</span>
</code><code id="line-381" aria-labelledby="381"><span class="syn_comment" >   *</span>
</code><code id="line-382" aria-labelledby="382"><span class="syn_comment" >   * @param String paramName</span>
</code><code id="line-383" aria-labelledby="383"><span class="syn_comment" >   *        Name of the AudioParam.</span>
</code><code id="line-384" aria-labelledby="384"><span class="syn_comment" >   * @param String eventName</span>
</code><code id="line-385" aria-labelledby="385"><span class="syn_comment" >   *        Name of the automation event called.</span>
</code><code id="line-386" aria-labelledby="386"><span class="syn_comment" >   * @param Array args</span>
</code><code id="line-387" aria-labelledby="387"><span class="syn_comment" >   *        Arguments passed into the automation call.</span>
</code><code id="line-388" aria-labelledby="388"><span class="syn_comment" >   */</span>
</code><code id="line-389" aria-labelledby="389">  <span class="syn_def" data-symbols="#_recordAutomationEvent" data-i="188" >_recordAutomationEvent</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-57" >paramName</span>, <span data-symbols="7944-58" >eventName</span>, <span data-symbols="7944-59" >args</span>) {
</code><code id="line-390" aria-labelledby="390">    <span class="syn_reserved" >const</span> <span data-symbols="7944-60" >timeline</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#automation" data-i="189" >automation</span>[<span data-symbols="7944-57" >paramName</span>];
</code><code id="line-391" aria-labelledby="391">    <span data-symbols="7944-60" >timeline</span>[<span data-symbols="7944-58" >eventName</span>].<span data-symbols="#apply" data-i="190" >apply</span>(<span data-symbols="7944-60" >timeline</span>, <span data-symbols="7944-59" >args</span>);
</code><code id="line-392" aria-labelledby="392">  },
</code><code id="line-393" aria-labelledby="393">});
</code><code id="line-394" aria-labelledby="394">
</code><code id="line-395" aria-labelledby="395"><span class="syn_comment" >/**</span>
</code><code id="line-396" aria-labelledby="396"><span class="syn_comment" > * The Web Audio Actor handles simple interaction with an BaseAudioContext</span>
</code><code id="line-397" aria-labelledby="397"><span class="syn_comment" > * high-level methods. After instantiating this actor, you'll need to set it</span>
</code><code id="line-398" aria-labelledby="398"><span class="syn_comment" > * up by calling setup().</span>
</code><code id="line-399" aria-labelledby="399"><span class="syn_comment" > */</span>
</code><code id="line-400" aria-labelledby="400"><span data-symbols="#exports" data-i="191" >exports</span>.<span data-symbols="#WebAudioActor,exports#WebAudioActor" data-i="192" >WebAudioActor</span> = <span data-symbols="#protocol" data-i="193" >protocol</span>.<span data-symbols="#ActorClassWithSpec,protocol#ActorClassWithSpec" data-i="194" >ActorClassWithSpec</span>(<span data-symbols="#webAudioSpec" data-i="195" >webAudioSpec</span>, {
</code><code id="line-401" aria-labelledby="401">  <span class="syn_def" data-symbols="#initialize" data-i="196" >initialize</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-61" >conn</span>, <span data-symbols="7944-62" >targetActor</span>) {
</code><code id="line-402" aria-labelledby="402">    <span data-symbols="#protocol" data-i="197" >protocol</span>.<span data-symbols="#Actor,protocol#Actor" data-i="198" >Actor</span>.<span data-symbols="#prototype" data-i="199" >prototype</span>.<span data-symbols="#initialize" data-i="200" >initialize</span>.<span data-symbols="#call" data-i="201" >call</span>(<span class="syn_reserved" >this</span>, <span data-symbols="7944-61" >conn</span>);
</code><code id="line-403" aria-labelledby="403">    <span class="syn_reserved" >this</span>.<span data-symbols="#targetActor" data-i="202" >targetActor</span> = <span data-symbols="7944-62" >targetActor</span>;
</code><code id="line-404" aria-labelledby="404">
</code><code id="line-405" aria-labelledby="405">    <span class="syn_reserved" >this</span>.<span data-symbols="#_onContentFunctionCall" data-i="203" >_onContentFunctionCall</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_onContentFunctionCall,_onContentFunctionCall#_onContentFunctionCall" data-i="204" >_onContentFunctionCall</span>.<span data-symbols="#bind" data-i="205" >bind</span>(<span class="syn_reserved" >this</span>);
</code><code id="line-406" aria-labelledby="406">
</code><code id="line-407" aria-labelledby="407">    <span class="syn_comment" >// Store ChromeOnly ID (`nativeID` property on AudioNodeActor) mapped</span>
</code><code id="line-408" aria-labelledby="408">    <span class="syn_comment" >// to the associated actorID, so we don't have to expose `nativeID`</span>
</code><code id="line-409" aria-labelledby="409">    <span class="syn_comment" >// to the client in any way.</span>
</code><code id="line-410" aria-labelledby="410">    <span class="syn_reserved" >this</span>.<span data-symbols="#_nativeToActorID" data-i="206" >_nativeToActorID</span> = <span class="syn_reserved" >new</span> <span data-symbols="#Map" data-i="207" >Map</span>();
</code><code id="line-411" aria-labelledby="411">
</code><code id="line-412" aria-labelledby="412">    <span class="syn_reserved" >this</span>.<span data-symbols="#_onGlobalDestroyed" data-i="208" >_onGlobalDestroyed</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_onGlobalDestroyed,_onGlobalDestroyed#_onGlobalDestroyed" data-i="209" >_onGlobalDestroyed</span>.<span data-symbols="#bind" data-i="210" >bind</span>(<span class="syn_reserved" >this</span>);
</code><code id="line-413" aria-labelledby="413">    <span class="syn_reserved" >this</span>.<span data-symbols="#_onGlobalCreated" data-i="211" >_onGlobalCreated</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_onGlobalCreated,_onGlobalCreated#_onGlobalCreated" data-i="212" >_onGlobalCreated</span>.<span data-symbols="#bind" data-i="213" >bind</span>(<span class="syn_reserved" >this</span>);
</code><code id="line-414" aria-labelledby="414">  },
</code><code id="line-415" aria-labelledby="415">
</code><code id="line-416" aria-labelledby="416">  <span class="syn_def" data-symbols="#destroy" data-i="214" >destroy</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-63" >conn</span>) {
</code><code id="line-417" aria-labelledby="417">    <span data-symbols="#protocol" data-i="215" >protocol</span>.<span data-symbols="#Actor,protocol#Actor" data-i="216" >Actor</span>.<span data-symbols="#prototype" data-i="217" >prototype</span>.<span data-symbols="#destroy" data-i="218" >destroy</span>.<span data-symbols="#call" data-i="219" >call</span>(<span class="syn_reserved" >this</span>, <span data-symbols="7944-63" >conn</span>);
</code><code id="line-418" aria-labelledby="418">    <span class="syn_reserved" >this</span>.<span data-symbols="#finalize" data-i="220" >finalize</span>();
</code><code id="line-419" aria-labelledby="419">  },
</code><code id="line-420" aria-labelledby="420">
</code><code id="line-421" aria-labelledby="421">  <span class="syn_comment" >/**</span>
</code><code id="line-422" aria-labelledby="422"><span class="syn_comment" >   * Returns definition of all AudioNodes, such as AudioParams, and</span>
</code><code id="line-423" aria-labelledby="423"><span class="syn_comment" >   * flags.</span>
</code><code id="line-424" aria-labelledby="424"><span class="syn_comment" >   */</span>
</code><code id="line-425" aria-labelledby="425">  <span class="syn_def" data-symbols="#getDefinition" data-i="221" >getDefinition</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-426" aria-labelledby="426">    <span class="syn_reserved" >return</span> <span data-symbols="#AUDIO_NODE_DEFINITION" data-i="222" >AUDIO_NODE_DEFINITION</span>;
</code><code id="line-427" aria-labelledby="427">  },
</code><code id="line-428" aria-labelledby="428">
</code><code id="line-429" aria-labelledby="429">  <span class="syn_comment" >/**</span>
</code><code id="line-430" aria-labelledby="430"><span class="syn_comment" >   * Starts waiting for the current target actor's document global to be</span>
</code><code id="line-431" aria-labelledby="431"><span class="syn_comment" >   * created, in order to instrument the Canvas context and become</span>
</code><code id="line-432" aria-labelledby="432"><span class="syn_comment" >   * aware of everything the content does with Web Audio.</span>
</code><code id="line-433" aria-labelledby="433"><span class="syn_comment" >   *</span>
</code><code id="line-434" aria-labelledby="434"><span class="syn_comment" >   * See ContentObserver and WebAudioInstrumenter for more details.</span>
</code><code id="line-435" aria-labelledby="435"><span class="syn_comment" >   */</span>
</code><code id="line-436" aria-labelledby="436">  <span class="syn_def" data-symbols="#setup" data-i="223" >setup</span>: <span class="syn_reserved" >function</span>({ <span data-symbols="7944-64" >reload</span> }) {
</code><code id="line-437" aria-labelledby="437">    <span class="syn_comment" >// Used to track when something is happening with the web audio API</span>
</code><code id="line-438" aria-labelledby="438">    <span class="syn_comment" >// the first time, to ultimately fire `start-context` event</span>
</code><code id="line-439" aria-labelledby="439">    <span class="syn_reserved" >this</span>.<span data-symbols="#_firstNodeCreated" data-i="224" >_firstNodeCreated</span> = <span class="syn_reserved" >false</span>;
</code><code id="line-440" aria-labelledby="440">
</code><code id="line-441" aria-labelledby="441">    <span class="syn_comment" >// Clear out stored nativeIDs on reload as we do not want to track</span>
</code><code id="line-442" aria-labelledby="442">    <span class="syn_comment" >// AudioNodes that are no longer on this document.</span>
</code><code id="line-443" aria-labelledby="443">    <span class="syn_reserved" >this</span>.<span data-symbols="#_nativeToActorID" data-i="225" >_nativeToActorID</span>.<span data-symbols="#clear" data-i="226" >clear</span>();
</code><code id="line-444" aria-labelledby="444">
</code><code id="line-445" aria-labelledby="445">    <span class="syn_reserved" >if</span> (<span class="syn_reserved" >this</span>.<span data-symbols="#_initialized" data-i="227" >_initialized</span>) {
</code><code id="line-446" aria-labelledby="446">      <span class="syn_reserved" >if</span> (<span data-symbols="7944-64" >reload</span>) {
</code><code id="line-447" aria-labelledby="447">        <span class="syn_reserved" >this</span>.<span data-symbols="#targetActor" data-i="228" >targetActor</span>.<span data-symbols="#window" data-i="229" >window</span>.<span data-symbols="#location" data-i="230" >location</span>.<span data-symbols="#reload" data-i="231" >reload</span>();
</code><code id="line-448" aria-labelledby="448">      }
</code><code id="line-449" aria-labelledby="449">      <span class="syn_reserved" >return</span>;
</code><code id="line-450" aria-labelledby="450">    }
</code><code id="line-451" aria-labelledby="451">
</code><code id="line-452" aria-labelledby="452">    <span class="syn_reserved" >this</span>.<span data-symbols="#_initialized" data-i="232" >_initialized</span> = <span class="syn_reserved" >true</span>;
</code><code id="line-453" aria-labelledby="453">
</code><code id="line-454" aria-labelledby="454">    <span class="syn_reserved" >this</span>.<span data-symbols="#_callWatcher" data-i="233" >_callWatcher</span> = <span class="syn_reserved" >new</span> <span data-symbols="#CallWatcher" data-i="234" >CallWatcher</span>(<span class="syn_reserved" >this</span>.<span data-symbols="#conn,_callWatcher#conn" data-i="235" >conn</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#targetActor,_callWatcher#targetActor" data-i="236" >targetActor</span>);
</code><code id="line-455" aria-labelledby="455">    <span class="syn_reserved" >this</span>.<span data-symbols="#_callWatcher" data-i="237" >_callWatcher</span>.<span data-symbols="#onCall" data-i="238" >onCall</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_onContentFunctionCall" data-i="239" >_onContentFunctionCall</span>;
</code><code id="line-456" aria-labelledby="456">    <span class="syn_reserved" >this</span>.<span data-symbols="#_callWatcher" data-i="240" >_callWatcher</span>.<span data-symbols="#setup" data-i="241" >setup</span>({
</code><code id="line-457" aria-labelledby="457">      <span class="syn_def" data-symbols="#tracedGlobals" data-i="242" >tracedGlobals</span>: <span data-symbols="#AUDIO_GLOBALS" data-i="243" >AUDIO_GLOBALS</span>,
</code><code id="line-458" aria-labelledby="458">      <span class="syn_def" data-symbols="#startRecording" data-i="244" >startRecording</span>: <span class="syn_reserved" >true</span>,
</code><code id="line-459" aria-labelledby="459">      <span class="syn_def" data-symbols="#performReload" data-i="245" >performReload</span>: <span data-symbols="7944-64" >reload</span>,
</code><code id="line-460" aria-labelledby="460">      <span class="syn_def" data-symbols="#holdWeak" data-i="246" >holdWeak</span>: <span class="syn_reserved" >true</span>,
</code><code id="line-461" aria-labelledby="461">      <span class="syn_def" data-symbols="#storeCalls" data-i="247" >storeCalls</span>: <span class="syn_reserved" >false</span>,
</code><code id="line-462" aria-labelledby="462">    });
</code><code id="line-463" aria-labelledby="463">    <span class="syn_comment" >// Bind to `window-ready` so we can reenable recording on the</span>
</code><code id="line-464" aria-labelledby="464">    <span class="syn_comment" >// call watcher</span>
</code><code id="line-465" aria-labelledby="465">    <span class="syn_reserved" >this</span>.<span data-symbols="#targetActor" data-i="248" >targetActor</span>.<span data-symbols="#on" data-i="249" >on</span>(<span class="syn_string" >"window-ready"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onGlobalCreated" data-i="250" >_onGlobalCreated</span>);
</code><code id="line-466" aria-labelledby="466">    <span class="syn_comment" >// Bind to the `window-destroyed` event so we can unbind events between</span>
</code><code id="line-467" aria-labelledby="467">    <span class="syn_comment" >// the global destruction and the `finalize` cleanup method on the actor.</span>
</code><code id="line-468" aria-labelledby="468">    <span class="syn_reserved" >this</span>.<span data-symbols="#targetActor" data-i="251" >targetActor</span>.<span data-symbols="#on" data-i="252" >on</span>(<span class="syn_string" >"window-destroyed"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onGlobalDestroyed" data-i="253" >_onGlobalDestroyed</span>);
</code><code id="line-469" aria-labelledby="469">  },
</code><code id="line-470" aria-labelledby="470">
</code><code id="line-471" aria-labelledby="471">  <span class="syn_comment" >/**</span>
</code><code id="line-472" aria-labelledby="472"><span class="syn_comment" >   * Invoked whenever an instrumented function is called, like an</span>
</code><code id="line-473" aria-labelledby="473"><span class="syn_comment" >   * BaseAudioContext method or an AudioNode method.</span>
</code><code id="line-474" aria-labelledby="474"><span class="syn_comment" >   */</span>
</code><code id="line-475" aria-labelledby="475">  <span class="syn_def" data-symbols="#_onContentFunctionCall" data-i="254" >_onContentFunctionCall</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-65" >functionCall</span>) {
</code><code id="line-476" aria-labelledby="476">    <span class="syn_reserved" >const</span> { <span data-symbols="7944-66" >name</span> } = <span data-symbols="7944-65" >functionCall</span>.<span data-symbols="#details,functionCall#details" data-i="255" >details</span>;
</code><code id="line-477" aria-labelledby="477">
</code><code id="line-478" aria-labelledby="478">    <span class="syn_comment" >// All Web Audio nodes inherit from AudioNode's prototype, so</span>
</code><code id="line-479" aria-labelledby="479">    <span class="syn_comment" >// hook into the `connect` and `disconnect` methods</span>
</code><code id="line-480" aria-labelledby="480">    <span class="syn_reserved" >if</span> (<span data-symbols="#WebAudioFront" data-i="256" >WebAudioFront</span>.<span data-symbols="#NODE_ROUTING_METHODS,WebAudioFront#NODE_ROUTING_METHODS" data-i="257" >NODE_ROUTING_METHODS</span>.<span data-symbols="#has" data-i="258" >has</span>(<span data-symbols="7944-66" >name</span>)) {
</code><code id="line-481" aria-labelledby="481">      <span class="syn_reserved" >this</span>.<span data-symbols="#_handleRoutingCall" data-i="259" >_handleRoutingCall</span>(<span data-symbols="7944-65" >functionCall</span>);
</code><code id="line-482" aria-labelledby="482">    } <span class="syn_reserved" >else</span> <span class="syn_reserved" >if</span> (<span data-symbols="#WebAudioFront" data-i="260" >WebAudioFront</span>.<span data-symbols="#NODE_CREATION_METHODS,WebAudioFront#NODE_CREATION_METHODS" data-i="261" >NODE_CREATION_METHODS</span>.<span data-symbols="#has" data-i="262" >has</span>(<span data-symbols="7944-66" >name</span>)) {
</code><code id="line-483" aria-labelledby="483">      <span class="syn_reserved" >this</span>.<span data-symbols="#_handleCreationCall" data-i="263" >_handleCreationCall</span>(<span data-symbols="7944-65" >functionCall</span>);
</code><code id="line-484" aria-labelledby="484">    } <span class="syn_reserved" >else</span> <span class="syn_reserved" >if</span> (<span data-symbols="#ENABLE_AUTOMATION" data-i="264" >ENABLE_AUTOMATION</span> &amp;&amp; <span data-symbols="#WebAudioFront" data-i="265" >WebAudioFront</span>.<span data-symbols="#AUTOMATION_METHODS,WebAudioFront#AUTOMATION_METHODS" data-i="266" >AUTOMATION_METHODS</span>.<span data-symbols="#has" data-i="267" >has</span>(<span data-symbols="7944-66" >name</span>)) {
</code><code id="line-485" aria-labelledby="485">      <span class="syn_reserved" >this</span>.<span data-symbols="#_handleAutomationCall" data-i="268" >_handleAutomationCall</span>(<span data-symbols="7944-65" >functionCall</span>);
</code><code id="line-486" aria-labelledby="486">    }
</code><code id="line-487" aria-labelledby="487">  },
</code><code id="line-488" aria-labelledby="488">
</code><code id="line-489" aria-labelledby="489">  <span class="syn_def" data-symbols="#_handleRoutingCall" data-i="269" >_handleRoutingCall</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-67" >functionCall</span>) {
</code><code id="line-490" aria-labelledby="490">    <span class="syn_reserved" >const</span> { <span data-symbols="7944-68" >caller</span>, <span data-symbols="7944-69" >args</span>, <span data-symbols="7944-70" >name</span> } = <span data-symbols="7944-67" >functionCall</span>.<span data-symbols="#details,functionCall#details" data-i="270" >details</span>;
</code><code id="line-491" aria-labelledby="491">    <span class="syn_reserved" >const</span> <span data-symbols="7944-71" >source</span> = <span data-symbols="7944-68" >caller</span>;
</code><code id="line-492" aria-labelledby="492">    <span class="syn_reserved" >const</span> <span data-symbols="7944-72" >dest</span> = <span data-symbols="7944-69" >args</span>[0];
</code><code id="line-493" aria-labelledby="493">    <span class="syn_reserved" >const</span> <span data-symbols="7944-73" >isAudioPar</span> = <span data-symbols="7944-72" >dest</span> ? <span data-symbols="#getConstructorName" data-i="271" >getConstructorName</span>(<span data-symbols="7944-72" >dest</span>) === <span class="syn_string" >"AudioParam"</span> : <span class="syn_reserved" >false</span>;
</code><code id="line-494" aria-labelledby="494">
</code><code id="line-495" aria-labelledby="495">    <span class="syn_comment" >// audionode.connect(param)</span>
</code><code id="line-496" aria-labelledby="496">    <span class="syn_reserved" >if</span> (<span data-symbols="7944-70" >name</span> === <span class="syn_string" >"connect"</span> &amp;&amp; <span data-symbols="7944-73" >isAudioPar</span>) {
</code><code id="line-497" aria-labelledby="497">      <span class="syn_reserved" >this</span>.<span data-symbols="#_onConnectParam" data-i="272" >_onConnectParam</span>(<span data-symbols="7944-71" >source</span>, <span data-symbols="7944-72" >dest</span>);
</code><code id="line-498" aria-labelledby="498">    } <span class="syn_reserved" >else</span> <span class="syn_reserved" >if</span> (<span data-symbols="7944-70" >name</span> === <span class="syn_string" >"connect"</span>) {
</code><code id="line-499" aria-labelledby="499">      <span class="syn_comment" >// audionode.connect(node)</span>
</code><code id="line-500" aria-labelledby="500">      <span class="syn_reserved" >this</span>.<span data-symbols="#_onConnectNode" data-i="273" >_onConnectNode</span>(<span data-symbols="7944-71" >source</span>, <span data-symbols="7944-72" >dest</span>);
</code><code id="line-501" aria-labelledby="501">    } <span class="syn_reserved" >else</span> <span class="syn_reserved" >if</span> (<span data-symbols="7944-70" >name</span> === <span class="syn_string" >"disconnect"</span>) {
</code><code id="line-502" aria-labelledby="502">      <span class="syn_comment" >// audionode.disconnect()</span>
</code><code id="line-503" aria-labelledby="503">      <span class="syn_reserved" >this</span>.<span data-symbols="#_onDisconnectNode" data-i="274" >_onDisconnectNode</span>(<span data-symbols="7944-71" >source</span>);
</code><code id="line-504" aria-labelledby="504">    }
</code><code id="line-505" aria-labelledby="505">  },
</code><code id="line-506" aria-labelledby="506">
</code><code id="line-507" aria-labelledby="507">  <span class="syn_def" data-symbols="#_handleCreationCall" data-i="275" >_handleCreationCall</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-74" >functionCall</span>) {
</code><code id="line-508" aria-labelledby="508">    <span class="syn_reserved" >const</span> { <span data-symbols="7944-75" >caller</span>, <span data-symbols="7944-76" >result</span> } = <span data-symbols="7944-74" >functionCall</span>.<span data-symbols="#details,functionCall#details" data-i="276" >details</span>;
</code><code id="line-509" aria-labelledby="509">    <span class="syn_comment" >// Keep track of the first node created, so we can alert</span>
</code><code id="line-510" aria-labelledby="510">    <span class="syn_comment" >// the front end that an audio context is being used since</span>
</code><code id="line-511" aria-labelledby="511">    <span class="syn_comment" >// we're not hooking into the constructor itself, just its</span>
</code><code id="line-512" aria-labelledby="512">    <span class="syn_comment" >// instance's methods.</span>
</code><code id="line-513" aria-labelledby="513">    <span class="syn_reserved" >if</span> (!<span class="syn_reserved" >this</span>.<span data-symbols="#_firstNodeCreated" data-i="277" >_firstNodeCreated</span>) {
</code><code id="line-514" aria-labelledby="514">      <span class="syn_comment" >// Fire the start-up event if this is the first node created</span>
</code><code id="line-515" aria-labelledby="515">      <span class="syn_comment" >// and trigger a `create-node` event for the context destination</span>
</code><code id="line-516" aria-labelledby="516">      <span class="syn_reserved" >this</span>.<span data-symbols="#_onStartContext" data-i="278" >_onStartContext</span>();
</code><code id="line-517" aria-labelledby="517">      <span class="syn_reserved" >this</span>.<span data-symbols="#_onCreateNode" data-i="279" >_onCreateNode</span>(<span data-symbols="7944-75" >caller</span>.<span data-symbols="#destination,caller#destination" data-i="280" >destination</span>);
</code><code id="line-518" aria-labelledby="518">      <span class="syn_reserved" >this</span>.<span data-symbols="#_firstNodeCreated" data-i="281" >_firstNodeCreated</span> = <span class="syn_reserved" >true</span>;
</code><code id="line-519" aria-labelledby="519">    }
</code><code id="line-520" aria-labelledby="520">    <span class="syn_reserved" >this</span>.<span data-symbols="#_onCreateNode" data-i="282" >_onCreateNode</span>(<span data-symbols="7944-76" >result</span>);
</code><code id="line-521" aria-labelledby="521">  },
</code><code id="line-522" aria-labelledby="522">
</code><code id="line-523" aria-labelledby="523">  <span class="syn_def" data-symbols="#_handleAutomationCall" data-i="283" >_handleAutomationCall</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-77" >functionCall</span>) {
</code><code id="line-524" aria-labelledby="524">    <span class="syn_reserved" >let</span> { <span data-symbols="7944-78" >caller</span>, <span data-symbols="7944-79" >name</span>, <span data-symbols="7944-80" >args</span> } = <span data-symbols="7944-77" >functionCall</span>.<span data-symbols="#details,functionCall#details" data-i="284" >details</span>;
</code><code id="line-525" aria-labelledby="525">    <span class="syn_reserved" >const</span> <span data-symbols="7944-81" >wrappedParam</span> = <span class="syn_reserved" >new</span> <span data-symbols="#XPCNativeWrapper" data-i="285" >XPCNativeWrapper</span>(<span data-symbols="7944-78" >caller</span>);
</code><code id="line-526" aria-labelledby="526">
</code><code id="line-527" aria-labelledby="527">    <span class="syn_comment" >// Sanitize arguments, as these should all be numbers,</span>
</code><code id="line-528" aria-labelledby="528">    <span class="syn_comment" >// with the exception of a TypedArray, which needs</span>
</code><code id="line-529" aria-labelledby="529">    <span class="syn_comment" >// casted to an Array</span>
</code><code id="line-530" aria-labelledby="530">    <span data-symbols="7944-80" >args</span> = <span data-symbols="#sanitizeAutomationArgs" data-i="286" >sanitizeAutomationArgs</span>(<span data-symbols="7944-80" >args</span>);
</code><code id="line-531" aria-labelledby="531">
</code><code id="line-532" aria-labelledby="532">    <span class="syn_reserved" >const</span> <span data-symbols="7944-82" >nodeActor</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_getActorByNativeID" data-i="287" >_getActorByNativeID</span>(<span data-symbols="7944-81" >wrappedParam</span>.<span data-symbols="#_parentID,wrappedParam#_parentID" data-i="288" >_parentID</span>);
</code><code id="line-533" aria-labelledby="533">    <span data-symbols="7944-82" >nodeActor</span>.<span data-symbols="#_recordAutomationEvent,nodeActor#_recordAutomationEvent" data-i="289" >_recordAutomationEvent</span>(<span data-symbols="7944-81" >wrappedParam</span>.<span data-symbols="#_paramName,wrappedParam#_paramName" data-i="290" >_paramName</span>, <span data-symbols="7944-79" >name</span>, <span data-symbols="7944-80" >args</span>);
</code><code id="line-534" aria-labelledby="534">
</code><code id="line-535" aria-labelledby="535">    <span class="syn_reserved" >this</span>.<span data-symbols="#_onAutomationEvent" data-i="291" >_onAutomationEvent</span>({
</code><code id="line-536" aria-labelledby="536">      <span class="syn_def" data-symbols="#node" data-i="292" >node</span>: <span data-symbols="7944-82" >nodeActor</span>,
</code><code id="line-537" aria-labelledby="537">      <span class="syn_def" data-symbols="#paramName" data-i="293" >paramName</span>: <span data-symbols="7944-81" >wrappedParam</span>.<span data-symbols="#_paramName,wrappedParam#_paramName" data-i="294" >_paramName</span>,
</code><code id="line-538" aria-labelledby="538">      <span class="syn_def" data-symbols="#eventName" data-i="295" >eventName</span>: <span data-symbols="7944-79" >name</span>,
</code><code id="line-539" aria-labelledby="539">      <span class="syn_def" data-symbols="#args" data-i="296" >args</span>: <span data-symbols="7944-80" >args</span>,
</code><code id="line-540" aria-labelledby="540">    });
</code><code id="line-541" aria-labelledby="541">  },
</code><code id="line-542" aria-labelledby="542">
</code><code id="line-543" aria-labelledby="543">  <span class="syn_comment" >/**</span>
</code><code id="line-544" aria-labelledby="544"><span class="syn_comment" >   * Stops listening for document global changes and puts this actor</span>
</code><code id="line-545" aria-labelledby="545"><span class="syn_comment" >   * to hibernation. This method is called automatically just before the</span>
</code><code id="line-546" aria-labelledby="546"><span class="syn_comment" >   * actor is destroyed.</span>
</code><code id="line-547" aria-labelledby="547"><span class="syn_comment" >   */</span>
</code><code id="line-548" aria-labelledby="548">  <span class="syn_def" data-symbols="#finalize" data-i="297" >finalize</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-549" aria-labelledby="549">    <span class="syn_reserved" >if</span> (!<span class="syn_reserved" >this</span>.<span data-symbols="#_initialized" data-i="298" >_initialized</span>) {
</code><code id="line-550" aria-labelledby="550">      <span class="syn_reserved" >return</span>;
</code><code id="line-551" aria-labelledby="551">    }
</code><code id="line-552" aria-labelledby="552">    <span class="syn_reserved" >this</span>.<span data-symbols="#_initialized" data-i="299" >_initialized</span> = <span class="syn_reserved" >false</span>;
</code><code id="line-553" aria-labelledby="553">
</code><code id="line-554" aria-labelledby="554">    <span class="syn_reserved" >try</span> {
</code><code id="line-555" aria-labelledby="555">      <span data-symbols="#Services" data-i="300" >Services</span>.<span data-symbols="#obs,Services#obs" data-i="301" >obs</span>.<span data-symbols="#removeObserver" data-i="302" >removeObserver</span>(<span class="syn_reserved" >this</span>, <span class="syn_string" >"webaudio-node-demise"</span>);
</code><code id="line-556" aria-labelledby="556">    } <span class="syn_reserved" >catch</span> (<span data-symbols="7944-83" >e</span>) {
</code><code id="line-557" aria-labelledby="557">      <span class="syn_comment" >// Maybe we've shutdown already and it's too late to remove the observer. So avoid</span>
</code><code id="line-558" aria-labelledby="558">      <span class="syn_comment" >// NS_ERROR_FAILURE errors with this silent try/catch.</span>
</code><code id="line-559" aria-labelledby="559">    }
</code><code id="line-560" aria-labelledby="560">
</code><code id="line-561" aria-labelledby="561">    <span class="syn_reserved" >this</span>.<span data-symbols="#targetActor" data-i="303" >targetActor</span>.<span data-symbols="#off" data-i="304" >off</span>(<span class="syn_string" >"window-destroyed"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onGlobalDestroyed" data-i="305" >_onGlobalDestroyed</span>);
</code><code id="line-562" aria-labelledby="562">    <span class="syn_reserved" >this</span>.<span data-symbols="#targetActor" data-i="306" >targetActor</span>.<span data-symbols="#off" data-i="307" >off</span>(<span class="syn_string" >"window-ready"</span>, <span class="syn_reserved" >this</span>.<span data-symbols="#_onGlobalCreated" data-i="308" >_onGlobalCreated</span>);
</code><code id="line-563" aria-labelledby="563">    <span class="syn_reserved" >this</span>.<span data-symbols="#targetActor" data-i="309" >targetActor</span> = <span class="syn_reserved" >null</span>;
</code><code id="line-564" aria-labelledby="564">    <span class="syn_reserved" >this</span>.<span data-symbols="#_nativeToActorID" data-i="310" >_nativeToActorID</span> = <span class="syn_reserved" >null</span>;
</code><code id="line-565" aria-labelledby="565">    <span class="syn_reserved" >this</span>.<span data-symbols="#_callWatcher" data-i="311" >_callWatcher</span>.<span data-symbols="#eraseRecording" data-i="312" >eraseRecording</span>();
</code><code id="line-566" aria-labelledby="566">    <span class="syn_reserved" >this</span>.<span data-symbols="#_callWatcher" data-i="313" >_callWatcher</span>.<span data-symbols="#finalize" data-i="314" >finalize</span>();
</code><code id="line-567" aria-labelledby="567">    <span class="syn_reserved" >this</span>.<span data-symbols="#_callWatcher" data-i="315" >_callWatcher</span> = <span class="syn_reserved" >null</span>;
</code><code id="line-568" aria-labelledby="568">  },
</code><code id="line-569" aria-labelledby="569">
</code><code id="line-570" aria-labelledby="570">  <span class="syn_comment" >/**</span>
</code><code id="line-571" aria-labelledby="571"><span class="syn_comment" >   * Helper for constructing an AudioNodeActor, assigning to</span>
</code><code id="line-572" aria-labelledby="572"><span class="syn_comment" >   * internal weak map, and tracking via `manage` so it is assigned</span>
</code><code id="line-573" aria-labelledby="573"><span class="syn_comment" >   * an `actorID`.</span>
</code><code id="line-574" aria-labelledby="574"><span class="syn_comment" >   */</span>
</code><code id="line-575" aria-labelledby="575">  <span class="syn_def" data-symbols="#_constructAudioNode" data-i="316" >_constructAudioNode</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-84" >node</span>) {
</code><code id="line-576" aria-labelledby="576">    <span class="syn_comment" >// Ensure AudioNode is wrapped.</span>
</code><code id="line-577" aria-labelledby="577">    <span data-symbols="7944-84" >node</span> = <span class="syn_reserved" >new</span> <span data-symbols="#XPCNativeWrapper" data-i="317" >XPCNativeWrapper</span>(<span data-symbols="7944-84" >node</span>);
</code><code id="line-578" aria-labelledby="578">
</code><code id="line-579" aria-labelledby="579">    <span class="syn_reserved" >this</span>.<span data-symbols="#_instrumentParams" data-i="318" >_instrumentParams</span>(<span data-symbols="7944-84" >node</span>);
</code><code id="line-580" aria-labelledby="580">
</code><code id="line-581" aria-labelledby="581">    <span class="syn_reserved" >const</span> <span data-symbols="7944-85" >actor</span> = <span class="syn_reserved" >new</span> <span data-symbols="#AudioNodeActor" data-i="319" >AudioNodeActor</span>(<span class="syn_reserved" >this</span>.<span data-symbols="#conn" data-i="320" >conn</span>, <span data-symbols="7944-84" >node</span>);
</code><code id="line-582" aria-labelledby="582">    <span class="syn_reserved" >this</span>.<span data-symbols="#manage" data-i="321" >manage</span>(<span data-symbols="7944-85" >actor</span>);
</code><code id="line-583" aria-labelledby="583">    <span class="syn_reserved" >this</span>.<span data-symbols="#_nativeToActorID" data-i="322" >_nativeToActorID</span>.<span class="syn_reserved" >set</span>(<span data-symbols="7944-84" >node</span>.<span data-symbols="#id,node#id" data-i="323" >id</span>, <span data-symbols="7944-85" >actor</span>.<span data-symbols="#actorID,actor#actorID" data-i="324" >actorID</span>);
</code><code id="line-584" aria-labelledby="584">    <span class="syn_reserved" >return</span> <span data-symbols="7944-85" >actor</span>;
</code><code id="line-585" aria-labelledby="585">  },
</code><code id="line-586" aria-labelledby="586">
</code><code id="line-587" aria-labelledby="587">  <span class="syn_comment" >/**</span>
</code><code id="line-588" aria-labelledby="588"><span class="syn_comment" >   * Takes an XrayWrapper node, and attaches the node's `nativeID`</span>
</code><code id="line-589" aria-labelledby="589"><span class="syn_comment" >   * to the AudioParams as `_parentID`, as well as the the type of param</span>
</code><code id="line-590" aria-labelledby="590"><span class="syn_comment" >   * as a string on `_paramName`.</span>
</code><code id="line-591" aria-labelledby="591"><span class="syn_comment" >   */</span>
</code><code id="line-592" aria-labelledby="592">  <span class="syn_def" data-symbols="#_instrumentParams" data-i="325" >_instrumentParams</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-86" >node</span>) {
</code><code id="line-593" aria-labelledby="593">    <span class="syn_reserved" >const</span> <span data-symbols="7944-87" >type</span> = <span data-symbols="#getConstructorName" data-i="326" >getConstructorName</span>(<span data-symbols="7944-86" >node</span>);
</code><code id="line-594" aria-labelledby="594">    <span data-symbols="#Object" data-i="327" >Object</span>.<span data-symbols="#keys,Object#keys" data-i="328" >keys</span>(<span data-symbols="#AUDIO_NODE_DEFINITION" data-i="329" >AUDIO_NODE_DEFINITION</span>[<span data-symbols="7944-87" >type</span>].<span data-symbols="#properties" data-i="330" >properties</span> || {})
</code><code id="line-595" aria-labelledby="595">      .<span data-symbols="#filter" data-i="331" >filter</span>(<span data-symbols="#isAudioParam" data-i="332" >isAudioParam</span>.<span data-symbols="#bind,isAudioParam#bind" data-i="333" >bind</span>(<span class="syn_reserved" >null</span>, <span data-symbols="7944-86" >node</span>))
</code><code id="line-596" aria-labelledby="596">      .<span data-symbols="#forEach" data-i="334" >forEach</span>(<span data-symbols="7944-88" >paramName</span> => {
</code><code id="line-597" aria-labelledby="597">        <span class="syn_reserved" >const</span> <span data-symbols="7944-89" >param</span> = <span data-symbols="7944-86" >node</span>[<span data-symbols="7944-88" >paramName</span>];
</code><code id="line-598" aria-labelledby="598">        <span data-symbols="7944-89" >param</span>.<span data-symbols="#_parentID,param#_parentID" data-i="335" >_parentID</span> = <span data-symbols="7944-86" >node</span>.<span data-symbols="#id,node#id" data-i="336" >id</span>;
</code><code id="line-599" aria-labelledby="599">        <span data-symbols="7944-89" >param</span>.<span data-symbols="#_paramName,param#_paramName" data-i="337" >_paramName</span> = <span data-symbols="7944-88" >paramName</span>;
</code><code id="line-600" aria-labelledby="600">      });
</code><code id="line-601" aria-labelledby="601">  },
</code><code id="line-602" aria-labelledby="602">
</code><code id="line-603" aria-labelledby="603">  <span class="syn_comment" >/**</span>
</code><code id="line-604" aria-labelledby="604"><span class="syn_comment" >   * Takes an AudioNode and returns the stored actor for it.</span>
</code><code id="line-605" aria-labelledby="605"><span class="syn_comment" >   * In some cases, we won't have an actor stored (for example,</span>
</code><code id="line-606" aria-labelledby="606"><span class="syn_comment" >   * connecting to an AudioDestinationNode, since it's implicitly</span>
</code><code id="line-607" aria-labelledby="607"><span class="syn_comment" >   * created), so make a new actor and store that.</span>
</code><code id="line-608" aria-labelledby="608"><span class="syn_comment" >   */</span>
</code><code id="line-609" aria-labelledby="609">  <span class="syn_def" data-symbols="#_getActorByNativeID" data-i="338" >_getActorByNativeID</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-90" >nativeID</span>) {
</code><code id="line-610" aria-labelledby="610">    <span class="syn_comment" >// Ensure we have a Number, rather than a string</span>
</code><code id="line-611" aria-labelledby="611">    <span class="syn_comment" >// return via notification.</span>
</code><code id="line-612" aria-labelledby="612">    <span data-symbols="7944-90" >nativeID</span> = ~~<span data-symbols="7944-90" >nativeID</span>;
</code><code id="line-613" aria-labelledby="613">
</code><code id="line-614" aria-labelledby="614">    <span class="syn_reserved" >const</span> <span data-symbols="7944-91" >actorID</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_nativeToActorID" data-i="339" >_nativeToActorID</span>.<span class="syn_reserved" >get</span>(<span data-symbols="7944-90" >nativeID</span>);
</code><code id="line-615" aria-labelledby="615">    <span class="syn_reserved" >const</span> <span data-symbols="7944-92" >actor</span> = <span data-symbols="7944-91" >actorID</span> != <span class="syn_reserved" >null</span> ? <span class="syn_reserved" >this</span>.<span data-symbols="#conn" data-i="340" >conn</span>.<span data-symbols="#getActor" data-i="341" >getActor</span>(<span data-symbols="7944-91" >actorID</span>) : <span class="syn_reserved" >null</span>;
</code><code id="line-616" aria-labelledby="616">    <span class="syn_reserved" >return</span> <span data-symbols="7944-92" >actor</span>;
</code><code id="line-617" aria-labelledby="617">  },
</code><code id="line-618" aria-labelledby="618">
</code><code id="line-619" aria-labelledby="619">  <span class="syn_comment" >/**</span>
</code><code id="line-620" aria-labelledby="620"><span class="syn_comment" >   * Called on first audio node creation, signifying audio context usage</span>
</code><code id="line-621" aria-labelledby="621"><span class="syn_comment" >   */</span>
</code><code id="line-622" aria-labelledby="622">  <span class="syn_def" data-symbols="#_onStartContext" data-i="342" >_onStartContext</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-623" aria-labelledby="623">    <span data-symbols="#Services" data-i="343" >Services</span>.<span data-symbols="#obs,Services#obs" data-i="344" >obs</span>.<span data-symbols="#addObserver" data-i="345" >addObserver</span>(<span class="syn_reserved" >this</span>, <span class="syn_string" >"webaudio-node-demise"</span>);
</code><code id="line-624" aria-labelledby="624">    <span class="syn_reserved" >this</span>.<span data-symbols="#emit" data-i="346" >emit</span>(<span class="syn_string" >"start-context"</span>);
</code><code id="line-625" aria-labelledby="625">  },
</code><code id="line-626" aria-labelledby="626">
</code><code id="line-627" aria-labelledby="627">  <span class="syn_comment" >/**</span>
</code><code id="line-628" aria-labelledby="628"><span class="syn_comment" >   * Called when one audio node is connected to another.</span>
</code><code id="line-629" aria-labelledby="629"><span class="syn_comment" >   */</span>
</code><code id="line-630" aria-labelledby="630">  <span class="syn_def" data-symbols="#_onConnectNode" data-i="347" >_onConnectNode</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-93" >source</span>, <span data-symbols="7944-94" >dest</span>) {
</code><code id="line-631" aria-labelledby="631">    <span class="syn_reserved" >const</span> <span data-symbols="7944-95" >sourceActor</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_getActorByNativeID" data-i="348" >_getActorByNativeID</span>(<span data-symbols="7944-93" >source</span>.<span data-symbols="#id,source#id" data-i="349" >id</span>);
</code><code id="line-632" aria-labelledby="632">    <span class="syn_reserved" >const</span> <span data-symbols="7944-96" >destActor</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_getActorByNativeID" data-i="350" >_getActorByNativeID</span>(<span data-symbols="7944-94" >dest</span>.<span data-symbols="#id,dest#id" data-i="351" >id</span>);
</code><code id="line-633" aria-labelledby="633">
</code><code id="line-634" aria-labelledby="634">    <span class="syn_reserved" >this</span>.<span data-symbols="#emit" data-i="352" >emit</span>(<span class="syn_string" >"connect-node"</span>, {
</code><code id="line-635" aria-labelledby="635">      <span class="syn_def" data-symbols="#source" data-i="353" >source</span>: <span data-symbols="7944-95" >sourceActor</span>,
</code><code id="line-636" aria-labelledby="636">      <span class="syn_def" data-symbols="#dest" data-i="354" >dest</span>: <span data-symbols="7944-96" >destActor</span>,
</code><code id="line-637" aria-labelledby="637">    });
</code><code id="line-638" aria-labelledby="638">  },
</code><code id="line-639" aria-labelledby="639">
</code><code id="line-640" aria-labelledby="640">  <span class="syn_comment" >/**</span>
</code><code id="line-641" aria-labelledby="641"><span class="syn_comment" >   * Called when an audio node is connected to an audio param.</span>
</code><code id="line-642" aria-labelledby="642"><span class="syn_comment" >   */</span>
</code><code id="line-643" aria-labelledby="643">  <span class="syn_def" data-symbols="#_onConnectParam" data-i="355" >_onConnectParam</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-97" >source</span>, <span data-symbols="7944-98" >param</span>) {
</code><code id="line-644" aria-labelledby="644">    <span class="syn_reserved" >const</span> <span data-symbols="7944-99" >sourceActor</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_getActorByNativeID" data-i="356" >_getActorByNativeID</span>(<span data-symbols="7944-97" >source</span>.<span data-symbols="#id,source#id" data-i="357" >id</span>);
</code><code id="line-645" aria-labelledby="645">    <span class="syn_reserved" >const</span> <span data-symbols="7944-100" >destActor</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_getActorByNativeID" data-i="358" >_getActorByNativeID</span>(<span data-symbols="7944-98" >param</span>.<span data-symbols="#_parentID,param#_parentID" data-i="359" >_parentID</span>);
</code><code id="line-646" aria-labelledby="646">    <span class="syn_reserved" >this</span>.<span data-symbols="#emit" data-i="360" >emit</span>(<span class="syn_string" >"connect-param"</span>, {
</code><code id="line-647" aria-labelledby="647">      <span class="syn_def" data-symbols="#source" data-i="361" >source</span>: <span data-symbols="7944-99" >sourceActor</span>,
</code><code id="line-648" aria-labelledby="648">      <span class="syn_def" data-symbols="#dest" data-i="362" >dest</span>: <span data-symbols="7944-100" >destActor</span>,
</code><code id="line-649" aria-labelledby="649">      <span class="syn_def" data-symbols="#param" data-i="363" >param</span>: <span data-symbols="7944-98" >param</span>.<span data-symbols="#_paramName,param#_paramName" data-i="364" >_paramName</span>,
</code><code id="line-650" aria-labelledby="650">    });
</code><code id="line-651" aria-labelledby="651">  },
</code><code id="line-652" aria-labelledby="652">
</code><code id="line-653" aria-labelledby="653">  <span class="syn_comment" >/**</span>
</code><code id="line-654" aria-labelledby="654"><span class="syn_comment" >   * Called when an audio node is disconnected.</span>
</code><code id="line-655" aria-labelledby="655"><span class="syn_comment" >   */</span>
</code><code id="line-656" aria-labelledby="656">  <span class="syn_def" data-symbols="#_onDisconnectNode" data-i="365" >_onDisconnectNode</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-101" >node</span>) {
</code><code id="line-657" aria-labelledby="657">    <span class="syn_reserved" >const</span> <span data-symbols="7944-102" >actor</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_getActorByNativeID" data-i="366" >_getActorByNativeID</span>(<span data-symbols="7944-101" >node</span>.<span data-symbols="#id,node#id" data-i="367" >id</span>);
</code><code id="line-658" aria-labelledby="658">    <span class="syn_reserved" >this</span>.<span data-symbols="#emit" data-i="368" >emit</span>(<span class="syn_string" >"disconnect-node"</span>, <span data-symbols="7944-102" >actor</span>);
</code><code id="line-659" aria-labelledby="659">  },
</code><code id="line-660" aria-labelledby="660">
</code><code id="line-661" aria-labelledby="661">  <span class="syn_comment" >/**</span>
</code><code id="line-662" aria-labelledby="662"><span class="syn_comment" >   * Called when a parameter changes on an audio node</span>
</code><code id="line-663" aria-labelledby="663"><span class="syn_comment" >   */</span>
</code><code id="line-664" aria-labelledby="664">  <span class="syn_def" data-symbols="#_onParamChange" data-i="369" >_onParamChange</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-103" >node</span>, <span data-symbols="7944-104" >param</span>, <span data-symbols="7944-105" >value</span>) {
</code><code id="line-665" aria-labelledby="665">    <span class="syn_reserved" >const</span> <span data-symbols="7944-106" >actor</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_getActorByNativeID" data-i="370" >_getActorByNativeID</span>(<span data-symbols="7944-103" >node</span>.<span data-symbols="#id,node#id" data-i="371" >id</span>);
</code><code id="line-666" aria-labelledby="666">    <span class="syn_reserved" >this</span>.<span data-symbols="#emit" data-i="372" >emit</span>(<span class="syn_string" >"param-change"</span>, {
</code><code id="line-667" aria-labelledby="667">      <span class="syn_def" data-symbols="#source" data-i="373" >source</span>: <span data-symbols="7944-106" >actor</span>,
</code><code id="line-668" aria-labelledby="668">      <span class="syn_def" data-symbols="#param" data-i="374" >param</span>: <span data-symbols="7944-104" >param</span>,
</code><code id="line-669" aria-labelledby="669">      <span class="syn_def" data-symbols="#value" data-i="375" >value</span>: <span data-symbols="7944-105" >value</span>,
</code><code id="line-670" aria-labelledby="670">    });
</code><code id="line-671" aria-labelledby="671">  },
</code><code id="line-672" aria-labelledby="672">
</code><code id="line-673" aria-labelledby="673">  <span class="syn_comment" >/**</span>
</code><code id="line-674" aria-labelledby="674"><span class="syn_comment" >   * Called on node creation.</span>
</code><code id="line-675" aria-labelledby="675"><span class="syn_comment" >   */</span>
</code><code id="line-676" aria-labelledby="676">  <span class="syn_def" data-symbols="#_onCreateNode" data-i="376" >_onCreateNode</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-107" >node</span>) {
</code><code id="line-677" aria-labelledby="677">    <span class="syn_reserved" >const</span> <span data-symbols="7944-108" >actor</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_constructAudioNode" data-i="377" >_constructAudioNode</span>(<span data-symbols="7944-107" >node</span>);
</code><code id="line-678" aria-labelledby="678">    <span class="syn_reserved" >this</span>.<span data-symbols="#emit" data-i="378" >emit</span>(<span class="syn_string" >"create-node"</span>, <span data-symbols="7944-108" >actor</span>);
</code><code id="line-679" aria-labelledby="679">  },
</code><code id="line-680" aria-labelledby="680">
</code><code id="line-681" aria-labelledby="681">  <span class="syn_comment" >/**</span>
</code><code id="line-682" aria-labelledby="682"><span class="syn_comment" >   * Called by the ObserverService when webaudio-node-demise events are emitted.</span>
</code><code id="line-683" aria-labelledby="683"><span class="syn_comment" >   */</span>
</code><code id="line-684" aria-labelledby="684">  <span class="syn_def" data-symbols="#observe" data-i="379" >observe</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-109" >subject</span>, <span data-symbols="7944-110" >topic</span>, <span data-symbols="7944-111" >data</span>) {
</code><code id="line-685" aria-labelledby="685">    <span class="syn_reserved" >switch</span> (<span data-symbols="7944-110" >topic</span>) {
</code><code id="line-686" aria-labelledby="686">      <span class="syn_reserved" >case</span> <span class="syn_string" >"webaudio-node-demise"</span>:
</code><code id="line-687" aria-labelledby="687">        <span class="syn_comment" >// Cast the data to an integer.</span>
</code><code id="line-688" aria-labelledby="688">        <span class="syn_reserved" >this</span>.<span data-symbols="#_handleNodeDestroyed" data-i="380" >_handleNodeDestroyed</span>(~~<span data-symbols="7944-111" >data</span>);
</code><code id="line-689" aria-labelledby="689">        <span class="syn_reserved" >break</span>;
</code><code id="line-690" aria-labelledby="690">    }
</code><code id="line-691" aria-labelledby="691">  },
</code><code id="line-692" aria-labelledby="692">
</code><code id="line-693" aria-labelledby="693">  <span class="syn_comment" >/**</span>
</code><code id="line-694" aria-labelledby="694"><span class="syn_comment" >   * Handles `webaudio-node-demise` events. Emits the associated actor to the front if</span>
</code><code id="line-695" aria-labelledby="695"><span class="syn_comment" >   * found.</span>
</code><code id="line-696" aria-labelledby="696"><span class="syn_comment" >   * @param {Number} nodeNativeID The ID for the audio node.</span>
</code><code id="line-697" aria-labelledby="697"><span class="syn_comment" >   */</span>
</code><code id="line-698" aria-labelledby="698">  <span class="syn_def" data-symbols="#_handleNodeDestroyed" data-i="381" >_handleNodeDestroyed</span>: <span class="syn_reserved" >function</span>(<span data-symbols="7944-112" >nodeNativeID</span>) {
</code><code id="line-699" aria-labelledby="699">    <span class="syn_reserved" >const</span> <span data-symbols="7944-113" >actor</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_getActorByNativeID" data-i="382" >_getActorByNativeID</span>(<span data-symbols="7944-112" >nodeNativeID</span>);
</code><code id="line-700" aria-labelledby="700">
</code><code id="line-701" aria-labelledby="701">    <span class="syn_comment" >// If actorID exists, emit; in the case where we get demise</span>
</code><code id="line-702" aria-labelledby="702">    <span class="syn_comment" >// notifications for a document that no longer exists,</span>
</code><code id="line-703" aria-labelledby="703">    <span class="syn_comment" >// the mapping should not be found, so we do not emit an event.</span>
</code><code id="line-704" aria-labelledby="704">    <span class="syn_reserved" >if</span> (<span data-symbols="7944-113" >actor</span>) {
</code><code id="line-705" aria-labelledby="705">      <span class="syn_reserved" >this</span>.<span data-symbols="#_nativeToActorID" data-i="383" >_nativeToActorID</span>.<span class="syn_reserved" >delete</span>(<span data-symbols="7944-112" >nodeNativeID</span>);
</code><code id="line-706" aria-labelledby="706">      <span class="syn_reserved" >this</span>.<span data-symbols="#emit" data-i="384" >emit</span>(<span class="syn_string" >"destroy-node"</span>, <span data-symbols="7944-113" >actor</span>);
</code><code id="line-707" aria-labelledby="707">    }
</code><code id="line-708" aria-labelledby="708">  },
</code><code id="line-709" aria-labelledby="709">
</code><code id="line-710" aria-labelledby="710">  <span class="syn_comment" >/**</span>
</code><code id="line-711" aria-labelledby="711"><span class="syn_comment" >   * Ensures that the new global has recording on</span>
</code><code id="line-712" aria-labelledby="712"><span class="syn_comment" >   * so we can proxy the function calls.</span>
</code><code id="line-713" aria-labelledby="713"><span class="syn_comment" >   */</span>
</code><code id="line-714" aria-labelledby="714">  <span class="syn_def" data-symbols="#_onGlobalCreated" data-i="385" >_onGlobalCreated</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-715" aria-labelledby="715">    <span class="syn_comment" >// Used to track when something is happening with the web audio API</span>
</code><code id="line-716" aria-labelledby="716">    <span class="syn_comment" >// the first time, to ultimately fire `start-context` event</span>
</code><code id="line-717" aria-labelledby="717">    <span class="syn_reserved" >this</span>.<span data-symbols="#_firstNodeCreated" data-i="386" >_firstNodeCreated</span> = <span class="syn_reserved" >false</span>;
</code><code id="line-718" aria-labelledby="718">
</code><code id="line-719" aria-labelledby="719">    <span class="syn_comment" >// Clear out stored nativeIDs on reload as we do not want to track</span>
</code><code id="line-720" aria-labelledby="720">    <span class="syn_comment" >// AudioNodes that are no longer on this document.</span>
</code><code id="line-721" aria-labelledby="721">    <span class="syn_reserved" >this</span>.<span data-symbols="#_nativeToActorID" data-i="387" >_nativeToActorID</span>.<span data-symbols="#clear" data-i="388" >clear</span>();
</code><code id="line-722" aria-labelledby="722">
</code><code id="line-723" aria-labelledby="723">    <span class="syn_reserved" >this</span>.<span data-symbols="#_callWatcher" data-i="389" >_callWatcher</span>.<span data-symbols="#resumeRecording" data-i="390" >resumeRecording</span>();
</code><code id="line-724" aria-labelledby="724">  },
</code><code id="line-725" aria-labelledby="725">
</code><code id="line-726" aria-labelledby="726">  <span class="syn_comment" >/**</span>
</code><code id="line-727" aria-labelledby="727"><span class="syn_comment" >   * Fired when an automation event is added to an AudioNode.</span>
</code><code id="line-728" aria-labelledby="728"><span class="syn_comment" >   */</span>
</code><code id="line-729" aria-labelledby="729">  <span class="syn_def" data-symbols="#_onAutomationEvent" data-i="391" >_onAutomationEvent</span>: <span class="syn_reserved" >function</span>({<span data-symbols="7944-114" >node</span>, <span data-symbols="7944-115" >paramName</span>, <span data-symbols="7944-116" >eventName</span>, <span data-symbols="7944-117" >args</span>}) {
</code><code id="line-730" aria-labelledby="730">    <span class="syn_reserved" >this</span>.<span data-symbols="#emit" data-i="392" >emit</span>(<span class="syn_string" >"automation-event"</span>, {
</code><code id="line-731" aria-labelledby="731">      <span class="syn_def" data-symbols="#node" data-i="393" >node</span>: <span data-symbols="7944-114" >node</span>,
</code><code id="line-732" aria-labelledby="732">      <span class="syn_def" data-symbols="#paramName" data-i="394" >paramName</span>: <span data-symbols="7944-115" >paramName</span>,
</code><code id="line-733" aria-labelledby="733">      <span class="syn_def" data-symbols="#eventName" data-i="395" >eventName</span>: <span data-symbols="7944-116" >eventName</span>,
</code><code id="line-734" aria-labelledby="734">      <span class="syn_def" data-symbols="#args" data-i="396" >args</span>: <span data-symbols="7944-117" >args</span>,
</code><code id="line-735" aria-labelledby="735">    });
</code><code id="line-736" aria-labelledby="736">  },
</code><code id="line-737" aria-labelledby="737">
</code><code id="line-738" aria-labelledby="738">  <span class="syn_comment" >/**</span>
</code><code id="line-739" aria-labelledby="739"><span class="syn_comment" >   * Called when the underlying ContentObserver fires `global-destroyed`</span>
</code><code id="line-740" aria-labelledby="740"><span class="syn_comment" >   * so we can cleanup some things between the global being destroyed and</span>
</code><code id="line-741" aria-labelledby="741"><span class="syn_comment" >   * when the actor's `finalize` method gets called.</span>
</code><code id="line-742" aria-labelledby="742"><span class="syn_comment" >   */</span>
</code><code id="line-743" aria-labelledby="743">  <span class="syn_def" data-symbols="#_onGlobalDestroyed" data-i="397" >_onGlobalDestroyed</span>: <span class="syn_reserved" >function</span>({<span data-symbols="7944-118" >id</span>}) {
</code><code id="line-744" aria-labelledby="744">    <span class="syn_reserved" >if</span> (<span class="syn_reserved" >this</span>.<span data-symbols="#_callWatcher" data-i="398" >_callWatcher</span>.<span data-symbols="#_tracedWindowId" data-i="399" >_tracedWindowId</span> !== <span data-symbols="7944-118" >id</span>) {
</code><code id="line-745" aria-labelledby="745">      <span class="syn_reserved" >return</span>;
</code><code id="line-746" aria-labelledby="746">    }
</code><code id="line-747" aria-labelledby="747">
</code><code id="line-748" aria-labelledby="748">    <span class="syn_reserved" >if</span> (<span class="syn_reserved" >this</span>.<span data-symbols="#_nativeToActorID" data-i="400" >_nativeToActorID</span>) {
</code><code id="line-749" aria-labelledby="749">      <span class="syn_reserved" >this</span>.<span data-symbols="#_nativeToActorID" data-i="401" >_nativeToActorID</span>.<span data-symbols="#clear" data-i="402" >clear</span>();
</code><code id="line-750" aria-labelledby="750">    }
</code><code id="line-751" aria-labelledby="751">    <span data-symbols="#Services" data-i="403" >Services</span>.<span data-symbols="#obs,Services#obs" data-i="404" >obs</span>.<span data-symbols="#removeObserver" data-i="405" >removeObserver</span>(<span class="syn_reserved" >this</span>, <span class="syn_string" >"webaudio-node-demise"</span>);
</code><code id="line-752" aria-labelledby="752">  },
</code><code id="line-753" aria-labelledby="753">});
</code><code id="line-754" aria-labelledby="754">
</code><code id="line-755" aria-labelledby="755"><span class="syn_comment" >/**</span>
</code><code id="line-756" aria-labelledby="756"><span class="syn_comment" > * Determines whether or not property is an AudioParam.</span>
</code><code id="line-757" aria-labelledby="757"><span class="syn_comment" > *</span>
</code><code id="line-758" aria-labelledby="758"><span class="syn_comment" > * @param AudioNode node</span>
</code><code id="line-759" aria-labelledby="759"><span class="syn_comment" > *        An AudioNode.</span>
</code><code id="line-760" aria-labelledby="760"><span class="syn_comment" > * @param String prop</span>
</code><code id="line-761" aria-labelledby="761"><span class="syn_comment" > *        Property of `node` to evaluate to see if it's an AudioParam.</span>
</code><code id="line-762" aria-labelledby="762"><span class="syn_comment" > * @return Boolean</span>
</code><code id="line-763" aria-labelledby="763"><span class="syn_comment" > */</span>
</code><code id="line-764" aria-labelledby="764"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#isAudioParam" data-i="406" >isAudioParam</span>(<span data-symbols="7944-119" >node</span>, <span data-symbols="7944-120" >prop</span>) {
</code><code id="line-765" aria-labelledby="765">  <span class="syn_reserved" >return</span> !!(<span data-symbols="7944-119" >node</span>[<span data-symbols="7944-120" >prop</span>] &amp;&amp; <span class="syn_regex" >/AudioParam/</span>.<span data-symbols="#test" data-i="407" >test</span>(<span data-symbols="7944-119" >node</span>[<span data-symbols="7944-120" >prop</span>].<span data-symbols="#toString" data-i="408" >toString</span>()));
</code><code id="line-766" aria-labelledby="766">}
</code><code id="line-767" aria-labelledby="767">
</code><code id="line-768" aria-labelledby="768"><span class="syn_comment" >/**</span>
</code><code id="line-769" aria-labelledby="769"><span class="syn_comment" > * Takes an `Error` object and constructs a JSON-able response</span>
</code><code id="line-770" aria-labelledby="770"><span class="syn_comment" > *</span>
</code><code id="line-771" aria-labelledby="771"><span class="syn_comment" > * @param Error err</span>
</code><code id="line-772" aria-labelledby="772"><span class="syn_comment" > *        A TypeError, RangeError, etc.</span>
</code><code id="line-773" aria-labelledby="773"><span class="syn_comment" > * @return Object</span>
</code><code id="line-774" aria-labelledby="774"><span class="syn_comment" > */</span>
</code><code id="line-775" aria-labelledby="775"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#constructError" data-i="409" >constructError</span>(<span data-symbols="7944-121" >err</span>) {
</code><code id="line-776" aria-labelledby="776">  <span class="syn_reserved" >return</span> {
</code><code id="line-777" aria-labelledby="777">    <span class="syn_def" data-symbols="#message" data-i="410" >message</span>: <span data-symbols="7944-121" >err</span>.<span data-symbols="#message,err#message" data-i="411" >message</span>,
</code><code id="line-778" aria-labelledby="778">    <span class="syn_def" data-symbols="#type" data-i="412" >type</span>: <span data-symbols="7944-121" >err</span>.<span data-symbols="#constructor,err#constructor" data-i="413" >constructor</span>.<span data-symbols="#name" data-i="414" >name</span>,
</code><code id="line-779" aria-labelledby="779">  };
</code><code id="line-780" aria-labelledby="780">}
</code><code id="line-781" aria-labelledby="781">
</code><code id="line-782" aria-labelledby="782"><span class="syn_comment" >/**</span>
</code><code id="line-783" aria-labelledby="783"><span class="syn_comment" > * Creates and returns a JSON-able response used to indicate</span>
</code><code id="line-784" aria-labelledby="784"><span class="syn_comment" > * attempt to access an AudioNode that has been GC'd.</span>
</code><code id="line-785" aria-labelledby="785"><span class="syn_comment" > *</span>
</code><code id="line-786" aria-labelledby="786"><span class="syn_comment" > * @return Object</span>
</code><code id="line-787" aria-labelledby="787"><span class="syn_comment" > */</span>
</code><code id="line-788" aria-labelledby="788"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#CollectedAudioNodeError" data-i="415" >CollectedAudioNodeError</span>() {
</code><code id="line-789" aria-labelledby="789">  <span class="syn_reserved" >return</span> {
</code><code id="line-790" aria-labelledby="790">    <span class="syn_def" data-symbols="#message" data-i="416" >message</span>: <span class="syn_string" >"AudioNode has been garbage collected and can no longer be reached."</span>,
</code><code id="line-791" aria-labelledby="791">    <span class="syn_def" data-symbols="#type" data-i="417" >type</span>: <span class="syn_string" >"UnreachableAudioNode"</span>,
</code><code id="line-792" aria-labelledby="792">  };
</code><code id="line-793" aria-labelledby="793">}
</code><code id="line-794" aria-labelledby="794">
</code><code id="line-795" aria-labelledby="795"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#InvalidCommandError" data-i="418" >InvalidCommandError</span>() {
</code><code id="line-796" aria-labelledby="796">  <span class="syn_reserved" >return</span> {
</code><code id="line-797" aria-labelledby="797">    <span class="syn_def" data-symbols="#message" data-i="419" >message</span>: <span class="syn_string" >"The command on AudioNode is invalid."</span>,
</code><code id="line-798" aria-labelledby="798">    <span class="syn_def" data-symbols="#type" data-i="420" >type</span>: <span class="syn_string" >"InvalidCommand"</span>,
</code><code id="line-799" aria-labelledby="799">  };
</code><code id="line-800" aria-labelledby="800">}
</code><code id="line-801" aria-labelledby="801">
</code><code id="line-802" aria-labelledby="802"><span class="syn_comment" >/**</span>
</code><code id="line-803" aria-labelledby="803"><span class="syn_comment" > * Takes an object and converts it's `toString()` form, like</span>
</code><code id="line-804" aria-labelledby="804"><span class="syn_comment" > * "[object OscillatorNode]" or "[object Float32Array]",</span>
</code><code id="line-805" aria-labelledby="805"><span class="syn_comment" > * or XrayWrapper objects like "[object XrayWrapper [object Array]]"</span>
</code><code id="line-806" aria-labelledby="806"><span class="syn_comment" > * to a string of just the constructor name, like "OscillatorNode",</span>
</code><code id="line-807" aria-labelledby="807"><span class="syn_comment" > * or "Float32Array".</span>
</code><code id="line-808" aria-labelledby="808"><span class="syn_comment" > */</span>
</code><code id="line-809" aria-labelledby="809"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#getConstructorName" data-i="421" >getConstructorName</span>(<span data-symbols="7944-122" >obj</span>) {
</code><code id="line-810" aria-labelledby="810">  <span class="syn_reserved" >return</span> <span data-symbols="#Object" data-i="422" >Object</span>.<span data-symbols="#prototype,Object#prototype" data-i="423" >prototype</span>.<span data-symbols="#toString" data-i="424" >toString</span>.<span data-symbols="#call" data-i="425" >call</span>(<span data-symbols="7944-122" >obj</span>).<span data-symbols="#match" data-i="426" >match</span>(<span class="syn_regex" >/\[object ([^\[\]]*)\]\]?$/</span>)[1];
</code><code id="line-811" aria-labelledby="811">}
</code><code id="line-812" aria-labelledby="812">
</code><code id="line-813" aria-labelledby="813"><span class="syn_comment" >/**</span>
</code><code id="line-814" aria-labelledby="814"><span class="syn_comment" > * Create a grip-like object to pass in renderable information</span>
</code><code id="line-815" aria-labelledby="815"><span class="syn_comment" > * to the front-end for things like Float32Arrays, AudioBuffers,</span>
</code><code id="line-816" aria-labelledby="816"><span class="syn_comment" > * without tracking them in an actor pool.</span>
</code><code id="line-817" aria-labelledby="817"><span class="syn_comment" > */</span>
</code><code id="line-818" aria-labelledby="818"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#createObjectGrip" data-i="427" >createObjectGrip</span>(<span data-symbols="7944-123" >value</span>) {
</code><code id="line-819" aria-labelledby="819">  <span class="syn_reserved" >return</span> {
</code><code id="line-820" aria-labelledby="820">    <span class="syn_def" data-symbols="#type" data-i="428" >type</span>: <span class="syn_string" >"object"</span>,
</code><code id="line-821" aria-labelledby="821">    <span class="syn_def" data-symbols="#preview" data-i="429" >preview</span>: {
</code><code id="line-822" aria-labelledby="822">      <span class="syn_def" data-symbols="#kind" data-i="430" >kind</span>: <span class="syn_string" >"ObjectWithText"</span>,
</code><code id="line-823" aria-labelledby="823">      <span class="syn_def" data-symbols="#text" data-i="431" >text</span>: <span class="syn_string" >""</span>,
</code><code id="line-824" aria-labelledby="824">    },
</code><code id="line-825" aria-labelledby="825">    <span class="syn_reserved" >class</span>: <span data-symbols="#getConstructorName" data-i="432" >getConstructorName</span>(<span data-symbols="7944-123" >value</span>),
</code><code id="line-826" aria-labelledby="826">  };
</code><code id="line-827" aria-labelledby="827">}
</code><code id="line-828" aria-labelledby="828">
</code><code id="line-829" aria-labelledby="829"><span class="syn_comment" >/**</span>
</code><code id="line-830" aria-labelledby="830"><span class="syn_comment" > * Converts all TypedArrays of the array that cannot</span>
</code><code id="line-831" aria-labelledby="831"><span class="syn_comment" > * be passed over the wire into a normal Array equivilent.</span>
</code><code id="line-832" aria-labelledby="832"><span class="syn_comment" > */</span>
</code><code id="line-833" aria-labelledby="833"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#sanitizeAutomationArgs" data-i="433" >sanitizeAutomationArgs</span>(<span data-symbols="7944-124" >args</span>) {
</code><code id="line-834" aria-labelledby="834">  <span class="syn_reserved" >return</span> <span data-symbols="7944-124" >args</span>.<span data-symbols="#reduce,args#reduce" data-i="434" >reduce</span>((<span data-symbols="7944-125" >newArgs</span>, <span data-symbols="7944-126" >el</span>) => {
</code><code id="line-835" aria-labelledby="835">    <span class="syn_reserved" >const</span> <span data-symbols="7944-127" >isArray</span> = <span class="syn_reserved" >typeof</span> <span data-symbols="7944-126" >el</span> === <span class="syn_string" >"object"</span> &amp;&amp; <span data-symbols="#getConstructorName" data-i="435" >getConstructorName</span>(<span data-symbols="7944-126" >el</span>) === <span class="syn_string" >"Float32Array"</span>;
</code><code id="line-836" aria-labelledby="836">    <span data-symbols="7944-125" >newArgs</span>.<span data-symbols="#push,newArgs#push" data-i="436" >push</span>(<span data-symbols="7944-127" >isArray</span> ? <span data-symbols="#castToArray" data-i="437" >castToArray</span>(<span data-symbols="7944-126" >el</span>) : <span data-symbols="7944-126" >el</span>);
</code><code id="line-837" aria-labelledby="837">    <span class="syn_reserved" >return</span> <span data-symbols="7944-125" >newArgs</span>;
</code><code id="line-838" aria-labelledby="838">  }, []);
</code><code id="line-839" aria-labelledby="839">}
</code><code id="line-840" aria-labelledby="840">
</code><code id="line-841" aria-labelledby="841"><span class="syn_comment" >/**</span>
</code><code id="line-842" aria-labelledby="842"><span class="syn_comment" > * Casts TypedArray to a normal array via a</span>
</code><code id="line-843" aria-labelledby="843"><span class="syn_comment" > * new scope.</span>
</code><code id="line-844" aria-labelledby="844"><span class="syn_comment" > */</span>
</code><code id="line-845" aria-labelledby="845"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#castToArray" data-i="438" >castToArray</span>(<span data-symbols="7944-128" >typedArray</span>) {
</code><code id="line-846" aria-labelledby="846">  <span class="syn_comment" >// The Xray machinery for TypedArrays denies indexed access on the grounds</span>
</code><code id="line-847" aria-labelledby="847">  <span class="syn_comment" >// that it's slow, and advises callers to do a structured clone instead.</span>
</code><code id="line-848" aria-labelledby="848">  <span class="syn_reserved" >const</span> <span data-symbols="7944-129" >global</span> = <span data-symbols="#Cu" data-i="439" >Cu</span>.<span data-symbols="#getGlobalForObject,Cu#getGlobalForObject" data-i="440" >getGlobalForObject</span>(<span class="syn_reserved" >this</span>);
</code><code id="line-849" aria-labelledby="849">  <span class="syn_reserved" >const</span> <span data-symbols="7944-130" >safeView</span> = <span data-symbols="#Cu" data-i="441" >Cu</span>.<span data-symbols="#cloneInto,Cu#cloneInto" data-i="442" >cloneInto</span>(<span data-symbols="7944-128" >typedArray</span>.<span data-symbols="#subarray,typedArray#subarray" data-i="443" >subarray</span>(), <span data-symbols="7944-129" >global</span>);
</code><code id="line-850" aria-labelledby="850">  <span class="syn_reserved" >return</span> <span data-symbols="#copyInto" data-i="444" >copyInto</span>([], <span data-symbols="7944-130" >safeView</span>);
</code><code id="line-851" aria-labelledby="851">}
</code><code id="line-852" aria-labelledby="852">
</code><code id="line-853" aria-labelledby="853"><span class="syn_comment" >/**</span>
</code><code id="line-854" aria-labelledby="854"><span class="syn_comment" > * Copies values of an array-like `source` into</span>
</code><code id="line-855" aria-labelledby="855"><span class="syn_comment" > * a similarly array-like `dest`.</span>
</code><code id="line-856" aria-labelledby="856"><span class="syn_comment" > */</span>
</code><code id="line-857" aria-labelledby="857"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#copyInto" data-i="445" >copyInto</span>(<span data-symbols="7944-131" >dest</span>, <span data-symbols="7944-132" >source</span>) {
</code><code id="line-858" aria-labelledby="858">  <span class="syn_reserved" >for</span> (<span class="syn_reserved" >let</span> <span data-symbols="7944-133" >i</span> = 0; <span data-symbols="7944-133" >i</span> &lt; <span data-symbols="7944-132" >source</span>.<span data-symbols="#length,source#length" data-i="446" >length</span>; <span data-symbols="7944-133" >i</span>++) {
</code><code id="line-859" aria-labelledby="859">    <span data-symbols="7944-131" >dest</span>[<span data-symbols="7944-133" >i</span>] = <span data-symbols="7944-132" >source</span>[<span data-symbols="7944-133" >i</span>];
</code><code id="line-860" aria-labelledby="860">  }
</code><code id="line-861" aria-labelledby="861">  <span class="syn_reserved" >return</span> <span data-symbols="7944-131" >dest</span>;
</code><code id="line-862" aria-labelledby="862">}
</code></pre>      </td>
    </tr>
  </tbody>
</table>
<script>var ANALYSIS_DATA = [[[],[{"pretty":"property Cu","sym":"#Cu"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property protocol","sym":"#protocol"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property CallWatcher","sym":"#CallWatcher"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property createValueGrip","sym":"#createValueGrip"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property AutomationTimeline","sym":"#AutomationTimeline"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property audionodeSpec","sym":"#audionodeSpec"}]],[[],[{"pretty":"property webAudioSpec","sym":"#webAudioSpec"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property WebAudioFront","sym":"#WebAudioFront"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property Services","sym":"#Services"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property AUDIO_NODE_DEFINITION","sym":"#AUDIO_NODE_DEFINITION"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property ENABLE_AUTOMATION","sym":"#ENABLE_AUTOMATION"}]],[[],[{"pretty":"property AUTOMATION_GRANULARITY","sym":"#AUTOMATION_GRANULARITY"}]],[[],[{"pretty":"property AUTOMATION_GRANULARITY_MAX","sym":"#AUTOMATION_GRANULARITY_MAX"}]],[[],[{"pretty":"property AUDIO_GLOBALS","sym":"#AUDIO_GLOBALS"}]],[[],[{"pretty":"property AudioNodeActor","sym":"#AudioNodeActor"}]],[[],[{"pretty":"property exports","sym":"#exports"}]],[[],[{"pretty":"property AudioNodeActor","sym":"#AudioNodeActor"},{"pretty":"property exports.AudioNodeActor","sym":"exports#AudioNodeActor"}]],[[],[{"pretty":"property protocol","sym":"#protocol"}]],[[],[{"pretty":"property ActorClassWithSpec","sym":"#ActorClassWithSpec"},{"pretty":"property protocol.ActorClassWithSpec","sym":"protocol#ActorClassWithSpec"}]],[[],[{"pretty":"property audionodeSpec","sym":"#audionodeSpec"}]],[[],[{"pretty":"property form","sym":"#form"}]],[[],[{"pretty":"property actor","sym":"#actor"}]],[[],[{"pretty":"property actorID","sym":"#actorID"}]],[[],[{"pretty":"property type","sym":"#type"}]],[[],[{"pretty":"property type","sym":"#type"}]],[[],[{"pretty":"property source","sym":"#source"}]],[[],[{"pretty":"property source","sym":"#source"}]],[[],[{"pretty":"property bypassable","sym":"#bypassable"}]],[[],[{"pretty":"property bypassable","sym":"#bypassable"}]],[[],[{"pretty":"property initialize","sym":"#initialize"}]],[[],[{"pretty":"property protocol","sym":"#protocol"}]],[[],[{"pretty":"property Actor","sym":"#Actor"},{"pretty":"property protocol.Actor","sym":"protocol#Actor"}]],[[],[{"pretty":"property prototype","sym":"#prototype"}]],[[],[{"pretty":"property initialize","sym":"#initialize"}]],[[],[{"pretty":"property call","sym":"#call"}]],[[],[{"pretty":"property nativeID","sym":"#nativeID"}]],[[],[{"pretty":"property id","sym":"#id"},{"pretty":"property node.id","sym":"node#id"}]],[[],[{"pretty":"property node","sym":"#node"}]],[[],[{"pretty":"property Cu","sym":"#Cu"}]],[[],[{"pretty":"property getWeakReference","sym":"#getWeakReference"},{"pretty":"property Cu.getWeakReference","sym":"Cu#getWeakReference"}]],[[],[{"pretty":"property automation","sym":"#automation"}]],[[],[{"pretty":"property type","sym":"#type"}]],[[{"pretty":"getConstructorName","sym":"#getConstructorName"}],[{"pretty":"property getConstructorName","sym":"#getConstructorName"}]],[[],[{"pretty":"property type","sym":"#type"}]],[[],[{"pretty":"property source","sym":"#source"}]],[[],[{"pretty":"property AUDIO_NODE_DEFINITION","sym":"#AUDIO_NODE_DEFINITION"}]],[[],[{"pretty":"property type","sym":"#type"},{"pretty":"property source.type","sym":"source#type"}]],[[],[{"pretty":"property source","sym":"#source"}]],[[{"pretty":"bypassable","sym":"#bypassable"}],[{"pretty":"property bypassable","sym":"#bypassable"}]],[[],[{"pretty":"property AUDIO_NODE_DEFINITION","sym":"#AUDIO_NODE_DEFINITION"}]],[[],[{"pretty":"property type","sym":"#type"},{"pretty":"property bypassable.type","sym":"bypassable#type"}]],[[],[{"pretty":"property unbypassable","sym":"#unbypassable"}]],[[],[{"pretty":"property Object","sym":"#Object"}]],[[],[{"pretty":"property keys","sym":"#keys"},{"pretty":"property Object.keys","sym":"Object#keys"}]],[[],[{"pretty":"property AUDIO_NODE_DEFINITION","sym":"#AUDIO_NODE_DEFINITION"}]],[[],[{"pretty":"property type","sym":"#type"}]],[[],[{"pretty":"property properties","sym":"#properties"}]],[[],[{"pretty":"property filter","sym":"#filter"}]],[[{"pretty":"isAudioParam","sym":"#isAudioParam"}],[{"pretty":"property isAudioParam","sym":"#isAudioParam"}]],[[],[{"pretty":"property bind","sym":"#bind"},{"pretty":"property isAudioParam.bind","sym":"isAudioParam#bind"}]],[[],[{"pretty":"property forEach","sym":"#forEach"}]],[[],[{"pretty":"property automation","sym":"#automation"}]],[[{"pretty":"AutomationTimeline","sym":"#AutomationTimeline"}],[{"pretty":"property AutomationTimeline","sym":"#AutomationTimeline"}]],[[],[{"pretty":"property defaultValue","sym":"#defaultValue"}]],[[],[{"pretty":"property getType","sym":"#getType"}]],[[],[{"pretty":"property type","sym":"#type"}]],[[],[{"pretty":"property isBypassed","sym":"#isBypassed"}]],[[],[{"pretty":"property node","sym":"#node"}]],[[],[{"pretty":"property passThrough","sym":"#passThrough"},{"pretty":"property node.passThrough","sym":"node#passThrough"}]],[[],[{"pretty":"property bypass","sym":"#bypass"}]],[[],[{"pretty":"property node","sym":"#node"}]],[[],[{"pretty":"property undefined","sym":"#undefined"}]],[[{"pretty":"bypassable","sym":"#bypassable"}],[{"pretty":"property bypassable","sym":"#bypassable"}]],[[],[{"pretty":"property passThrough","sym":"#passThrough"},{"pretty":"property node.passThrough","sym":"node#passThrough"}]],[[],[{"pretty":"property isBypassed","sym":"#isBypassed"}]],[[],[{"pretty":"property setParam","sym":"#setParam"}]],[[],[{"pretty":"property node","sym":"#node"}]],[[{"pretty":"CollectedAudioNodeError","sym":"#CollectedAudioNodeError"}],[{"pretty":"property CollectedAudioNodeError","sym":"#CollectedAudioNodeError"}]],[[{"pretty":"isAudioParam","sym":"#isAudioParam"}],[{"pretty":"property isAudioParam","sym":"#isAudioParam"}]],[[],[{"pretty":"property value","sym":"#value"}]],[[],[{"pretty":"property automation","sym":"#automation"}]],[[],[{"pretty":"property setValue","sym":"#setValue"}]],[[],[{"pretty":"property undefined","sym":"#undefined"}]],[[{"pretty":"constructError","sym":"#constructError"}],[{"pretty":"property constructError","sym":"#constructError"}]],[[],[{"pretty":"property getParam","sym":"#getParam"}]],[[],[{"pretty":"property node","sym":"#node"}]],[[{"pretty":"CollectedAudioNodeError","sym":"#CollectedAudioNodeError"}],[{"pretty":"property CollectedAudioNodeError","sym":"#CollectedAudioNodeError"}]],[[{"pretty":"isAudioParam","sym":"#isAudioParam"}],[{"pretty":"property isAudioParam","sym":"#isAudioParam"}]],[[],[{"pretty":"property value","sym":"#value"}]],[[],[{"pretty":"property createValueGrip","sym":"#createValueGrip"}]],[[{"pretty":"createObjectGrip","sym":"#createObjectGrip"}],[{"pretty":"property createObjectGrip","sym":"#createObjectGrip"}]],[[],[{"pretty":"property getParamFlags","sym":"#getParamFlags"}]],[[],[{"pretty":"property AUDIO_NODE_DEFINITION","sym":"#AUDIO_NODE_DEFINITION"}]],[[],[{"pretty":"property type","sym":"#type"}]],[[],[{"pretty":"property properties","sym":"#properties"}]],[[],[{"pretty":"property getParams","sym":"#getParams"}]],[[],[{"pretty":"property Object","sym":"#Object"}]],[[],[{"pretty":"property keys","sym":"#keys"},{"pretty":"property Object.keys","sym":"Object#keys"}]],[[],[{"pretty":"property AUDIO_NODE_DEFINITION","sym":"#AUDIO_NODE_DEFINITION"}]],[[],[{"pretty":"property type","sym":"#type"}]],[[],[{"pretty":"property properties","sym":"#properties"}]],[[],[{"pretty":"property map","sym":"#map"},{"pretty":"property props.map","sym":"props#map"}]],[[],[{"pretty":"property param","sym":"#param"}]],[[],[{"pretty":"property value","sym":"#value"}]],[[],[{"pretty":"property getParam","sym":"#getParam"}]],[[],[{"pretty":"property flags","sym":"#flags"}]],[[],[{"pretty":"property getParamFlags","sym":"#getParamFlags"}]],[[],[{"pretty":"property connectParam","sym":"#connectParam"}]],[[],[{"pretty":"property node","sym":"#node"}]],[[],[{"pretty":"property node","sym":"#node"},{"pretty":"property destActor.node","sym":"destActor#node"}]],[[{"pretty":"CollectedAudioNodeError","sym":"#CollectedAudioNodeError"}],[{"pretty":"property CollectedAudioNodeError","sym":"#CollectedAudioNodeError"}]],[[{"pretty":"XPCNativeWrapper","sym":"#XPCNativeWrapper"}],[{"pretty":"property XPCNativeWrapper","sym":"#XPCNativeWrapper"}]],[[],[{"pretty":"property unwrap","sym":"#unwrap"},{"pretty":"property XPCNativeWrapper.unwrap","sym":"XPCNativeWrapper#unwrap"}]],[[],[{"pretty":"property connect","sym":"#connect"}]],[[{"pretty":"constructError","sym":"#constructError"}],[{"pretty":"property constructError","sym":"#constructError"}]],[[],[{"pretty":"property undefined","sym":"#undefined"}]],[[],[{"pretty":"property connectNode","sym":"#connectNode"}]],[[],[{"pretty":"property node","sym":"#node"}]],[[],[{"pretty":"property node","sym":"#node"},{"pretty":"property destActor.node","sym":"destActor#node"}]],[[{"pretty":"CollectedAudioNodeError","sym":"#CollectedAudioNodeError"}],[{"pretty":"property CollectedAudioNodeError","sym":"#CollectedAudioNodeError"}]],[[{"pretty":"XPCNativeWrapper","sym":"#XPCNativeWrapper"}],[{"pretty":"property XPCNativeWrapper","sym":"#XPCNativeWrapper"}]],[[],[{"pretty":"property unwrap","sym":"#unwrap"},{"pretty":"property XPCNativeWrapper.unwrap","sym":"XPCNativeWrapper#unwrap"}]],[[],[{"pretty":"property connect","sym":"#connect"}]],[[{"pretty":"constructError","sym":"#constructError"}],[{"pretty":"property constructError","sym":"#constructError"}]],[[],[{"pretty":"property undefined","sym":"#undefined"}]],[[],[{"pretty":"property disconnect","sym":"#disconnect"}]],[[],[{"pretty":"property node","sym":"#node"}]],[[{"pretty":"CollectedAudioNodeError","sym":"#CollectedAudioNodeError"}],[{"pretty":"property CollectedAudioNodeError","sym":"#CollectedAudioNodeError"}]],[[{"pretty":"XPCNativeWrapper","sym":"#XPCNativeWrapper"}],[{"pretty":"property XPCNativeWrapper","sym":"#XPCNativeWrapper"}]],[[],[{"pretty":"property unwrap","sym":"#unwrap"},{"pretty":"property XPCNativeWrapper.unwrap","sym":"XPCNativeWrapper#unwrap"}]],[[],[{"pretty":"property disconnect","sym":"#disconnect"}]],[[{"pretty":"constructError","sym":"#constructError"}],[{"pretty":"property constructError","sym":"#constructError"}]],[[],[{"pretty":"property undefined","sym":"#undefined"}]],[[],[{"pretty":"property getAutomationData","sym":"#getAutomationData"}]],[[],[{"pretty":"property automation","sym":"#automation"}]],[[],[{"pretty":"property events","sym":"#events"},{"pretty":"property timeline.events","sym":"timeline#events"}]],[[],[{"pretty":"property length","sym":"#length"}]],[[],[{"pretty":"property events","sym":"#events"}]],[[],[{"pretty":"property events","sym":"#events"},{"pretty":"property timeline.events","sym":"timeline#events"}]],[[],[{"pretty":"property values","sym":"#values"}]],[[],[{"pretty":"property events","sym":"#events"},{"pretty":"property timeline.events","sym":"timeline#events"}]],[[],[{"pretty":"property events","sym":"#events"},{"pretty":"property timeline.events","sym":"timeline#events"}]],[[],[{"pretty":"property events","sym":"#events"},{"pretty":"property timeline.events","sym":"timeline#events"}]],[[],[{"pretty":"property length","sym":"#length"}]],[[],[{"pretty":"property time","sym":"#time"},{"pretty":"property lastEvent.time","sym":"lastEvent#time"}]],[[],[{"pretty":"property duration","sym":"#duration"},{"pretty":"property lastEvent.duration","sym":"lastEvent#duration"}]],[[],[{"pretty":"property time","sym":"#time"},{"pretty":"property firstEvent.time","sym":"firstEvent#time"}]],[[{"pretty":"AUTOMATION_GRANULARITY","sym":"#AUTOMATION_GRANULARITY"}],[{"pretty":"property AUTOMATION_GRANULARITY","sym":"#AUTOMATION_GRANULARITY"}]],[[{"pretty":"AUTOMATION_GRANULARITY","sym":"#AUTOMATION_GRANULARITY"}],[{"pretty":"property AUTOMATION_GRANULARITY","sym":"#AUTOMATION_GRANULARITY"}]],[[],[{"pretty":"property time","sym":"#time"},{"pretty":"property firstEvent.time","sym":"firstEvent#time"}]],[[],[{"pretty":"property getValueAtTime","sym":"#getValueAtTime"},{"pretty":"property timeline.getValueAtTime","sym":"timeline#getValueAtTime"}]],[[],[{"pretty":"property push","sym":"#push"},{"pretty":"property values.push","sym":"values#push"}]],[[],[{"pretty":"property delta","sym":"#delta"}]],[[],[{"pretty":"property value","sym":"#value"}]],[[],[{"pretty":"property type","sym":"#type"},{"pretty":"property lastEvent.type","sym":"lastEvent#type"}]],[[{"pretty":"AUTOMATION_GRANULARITY_MAX","sym":"#AUTOMATION_GRANULARITY_MAX"}],[{"pretty":"property AUTOMATION_GRANULARITY_MAX","sym":"#AUTOMATION_GRANULARITY_MAX"}]],[[],[{"pretty":"property time","sym":"#time"},{"pretty":"property firstEvent.time","sym":"firstEvent#time"}]],[[],[{"pretty":"property getValueAtTime","sym":"#getValueAtTime"},{"pretty":"property timeline.getValueAtTime","sym":"timeline#getValueAtTime"}]],[[],[{"pretty":"property push","sym":"#push"},{"pretty":"property values.push","sym":"values#push"}]],[[],[{"pretty":"property delta","sym":"#delta"}]],[[],[{"pretty":"property value","sym":"#value"}]],[[],[{"pretty":"property events","sym":"#events"}]],[[],[{"pretty":"property events","sym":"#events"},{"pretty":"property timeline.events","sym":"timeline#events"}]],[[],[{"pretty":"property values","sym":"#values"}]],[[],[{"pretty":"property addAutomationEvent","sym":"#addAutomationEvent"}]],[[],[{"pretty":"property node","sym":"#node"}]],[[],[{"pretty":"property automation","sym":"#automation"}]],[[{"pretty":"CollectedAudioNodeError","sym":"#CollectedAudioNodeError"}],[{"pretty":"property CollectedAudioNodeError","sym":"#CollectedAudioNodeError"}]],[[{"pretty":"InvalidCommandError","sym":"#InvalidCommandError"}],[{"pretty":"property InvalidCommandError","sym":"#InvalidCommandError"}]],[[{"pretty":"XPCNativeWrapper","sym":"#XPCNativeWrapper"}],[{"pretty":"property XPCNativeWrapper","sym":"#XPCNativeWrapper"}]],[[],[{"pretty":"property unwrap","sym":"#unwrap"},{"pretty":"property XPCNativeWrapper.unwrap","sym":"XPCNativeWrapper#unwrap"}]],[[],[{"pretty":"property Cu","sym":"#Cu"}]],[[],[{"pretty":"property getGlobalForObject","sym":"#getGlobalForObject"},{"pretty":"property Cu.getGlobalForObject","sym":"Cu#getGlobalForObject"}]],[[],[{"pretty":"property Cu","sym":"#Cu"}]],[[],[{"pretty":"property cloneInto","sym":"#cloneInto"},{"pretty":"property Cu.cloneInto","sym":"Cu#cloneInto"}]],[[],[{"pretty":"property Float32Array","sym":"#Float32Array"},{"pretty":"property contentGlobal.Float32Array","sym":"contentGlobal#Float32Array"}]],[[],[{"pretty":"property apply","sym":"#apply"}]],[[{"pretty":"constructError","sym":"#constructError"}],[{"pretty":"property constructError","sym":"#constructError"}]],[[],[{"pretty":"property undefined","sym":"#undefined"}]],[[],[{"pretty":"property _recordAutomationEvent","sym":"#_recordAutomationEvent"}]],[[],[{"pretty":"property automation","sym":"#automation"}]],[[],[{"pretty":"property apply","sym":"#apply"}]],[[],[{"pretty":"property exports","sym":"#exports"}]],[[],[{"pretty":"property WebAudioActor","sym":"#WebAudioActor"},{"pretty":"property exports.WebAudioActor","sym":"exports#WebAudioActor"}]],[[],[{"pretty":"property protocol","sym":"#protocol"}]],[[],[{"pretty":"property ActorClassWithSpec","sym":"#ActorClassWithSpec"},{"pretty":"property protocol.ActorClassWithSpec","sym":"protocol#ActorClassWithSpec"}]],[[],[{"pretty":"property webAudioSpec","sym":"#webAudioSpec"}]],[[],[{"pretty":"property initialize","sym":"#initialize"}]],[[],[{"pretty":"property protocol","sym":"#protocol"}]],[[],[{"pretty":"property Actor","sym":"#Actor"},{"pretty":"property protocol.Actor","sym":"protocol#Actor"}]],[[],[{"pretty":"property prototype","sym":"#prototype"}]],[[],[{"pretty":"property initialize","sym":"#initialize"}]],[[],[{"pretty":"property call","sym":"#call"}]],[[{"pretty":"targetActor","sym":"#targetActor"}],[{"pretty":"property targetActor","sym":"#targetActor"}]],[[],[{"pretty":"property _onContentFunctionCall","sym":"#_onContentFunctionCall"}]],[[],[{"pretty":"property _onContentFunctionCall","sym":"#_onContentFunctionCall"},{"pretty":"property _onContentFunctionCall._onContentFunctionCall","sym":"_onContentFunctionCall#_onContentFunctionCall"}]],[[],[{"pretty":"property bind","sym":"#bind"}]],[[],[{"pretty":"property _nativeToActorID","sym":"#_nativeToActorID"}]],[[],[{"pretty":"property Map","sym":"#Map"}]],[[],[{"pretty":"property _onGlobalDestroyed","sym":"#_onGlobalDestroyed"}]],[[],[{"pretty":"property _onGlobalDestroyed","sym":"#_onGlobalDestroyed"},{"pretty":"property _onGlobalDestroyed._onGlobalDestroyed","sym":"_onGlobalDestroyed#_onGlobalDestroyed"}]],[[],[{"pretty":"property bind","sym":"#bind"}]],[[],[{"pretty":"property _onGlobalCreated","sym":"#_onGlobalCreated"}]],[[],[{"pretty":"property _onGlobalCreated","sym":"#_onGlobalCreated"},{"pretty":"property _onGlobalCreated._onGlobalCreated","sym":"_onGlobalCreated#_onGlobalCreated"}]],[[],[{"pretty":"property bind","sym":"#bind"}]],[[],[{"pretty":"property destroy","sym":"#destroy"}]],[[],[{"pretty":"property protocol","sym":"#protocol"}]],[[],[{"pretty":"property Actor","sym":"#Actor"},{"pretty":"property protocol.Actor","sym":"protocol#Actor"}]],[[],[{"pretty":"property prototype","sym":"#prototype"}]],[[],[{"pretty":"property destroy","sym":"#destroy"}]],[[],[{"pretty":"property call","sym":"#call"}]],[[],[{"pretty":"property finalize","sym":"#finalize"}]],[[],[{"pretty":"property getDefinition","sym":"#getDefinition"}]],[[],[{"pretty":"property AUDIO_NODE_DEFINITION","sym":"#AUDIO_NODE_DEFINITION"}]],[[],[{"pretty":"property setup","sym":"#setup"}]],[[],[{"pretty":"property _firstNodeCreated","sym":"#_firstNodeCreated"}]],[[],[{"pretty":"property _nativeToActorID","sym":"#_nativeToActorID"}]],[[],[{"pretty":"property clear","sym":"#clear"}]],[[],[{"pretty":"property _initialized","sym":"#_initialized"}]],[[{"pretty":"targetActor","sym":"#targetActor"}],[{"pretty":"property targetActor","sym":"#targetActor"}]],[[],[{"pretty":"property window","sym":"#window"}]],[[],[{"pretty":"property location","sym":"#location"}]],[[],[{"pretty":"property reload","sym":"#reload"}]],[[],[{"pretty":"property _initialized","sym":"#_initialized"}]],[[],[{"pretty":"property _callWatcher","sym":"#_callWatcher"}]],[[],[{"pretty":"property CallWatcher","sym":"#CallWatcher"}]],[[],[{"pretty":"property conn","sym":"#conn"},{"pretty":"property _callWatcher.conn","sym":"_callWatcher#conn"}]],[[{"pretty":"targetActor","sym":"#targetActor"}],[{"pretty":"property targetActor","sym":"#targetActor"},{"pretty":"property _callWatcher.targetActor","sym":"_callWatcher#targetActor"}]],[[],[{"pretty":"property _callWatcher","sym":"#_callWatcher"}]],[[],[{"pretty":"property onCall","sym":"#onCall"}]],[[],[{"pretty":"property _onContentFunctionCall","sym":"#_onContentFunctionCall"}]],[[],[{"pretty":"property _callWatcher","sym":"#_callWatcher"}]],[[],[{"pretty":"property setup","sym":"#setup"}]],[[],[{"pretty":"property tracedGlobals","sym":"#tracedGlobals"}]],[[{"pretty":"AUDIO_GLOBALS","sym":"#AUDIO_GLOBALS"}],[{"pretty":"property AUDIO_GLOBALS","sym":"#AUDIO_GLOBALS"}]],[[],[{"pretty":"property startRecording","sym":"#startRecording"}]],[[],[{"pretty":"property performReload","sym":"#performReload"}]],[[],[{"pretty":"property holdWeak","sym":"#holdWeak"}]],[[],[{"pretty":"property storeCalls","sym":"#storeCalls"}]],[[{"pretty":"targetActor","sym":"#targetActor"}],[{"pretty":"property targetActor","sym":"#targetActor"}]],[[],[{"pretty":"property on","sym":"#on"}]],[[],[{"pretty":"property _onGlobalCreated","sym":"#_onGlobalCreated"}]],[[{"pretty":"targetActor","sym":"#targetActor"}],[{"pretty":"property targetActor","sym":"#targetActor"}]],[[],[{"pretty":"property on","sym":"#on"}]],[[],[{"pretty":"property _onGlobalDestroyed","sym":"#_onGlobalDestroyed"}]],[[],[{"pretty":"property _onContentFunctionCall","sym":"#_onContentFunctionCall"}]],[[],[{"pretty":"property details","sym":"#details"},{"pretty":"property functionCall.details","sym":"functionCall#details"}]],[[],[{"pretty":"property WebAudioFront","sym":"#WebAudioFront"}]],[[{"pretty":"NODE_ROUTING_METHODS","sym":"#NODE_ROUTING_METHODS"}],[{"pretty":"property NODE_ROUTING_METHODS","sym":"#NODE_ROUTING_METHODS"},{"pretty":"property WebAudioFront.NODE_ROUTING_METHODS","sym":"WebAudioFront#NODE_ROUTING_METHODS"}]],[[],[{"pretty":"property has","sym":"#has"}]],[[{"pretty":"_handleRoutingCall","sym":"#_handleRoutingCall"}],[{"pretty":"property _handleRoutingCall","sym":"#_handleRoutingCall"}]],[[],[{"pretty":"property WebAudioFront","sym":"#WebAudioFront"}]],[[{"pretty":"NODE_CREATION_METHODS","sym":"#NODE_CREATION_METHODS"}],[{"pretty":"property NODE_CREATION_METHODS","sym":"#NODE_CREATION_METHODS"},{"pretty":"property WebAudioFront.NODE_CREATION_METHODS","sym":"WebAudioFront#NODE_CREATION_METHODS"}]],[[],[{"pretty":"property has","sym":"#has"}]],[[{"pretty":"_handleCreationCall","sym":"#_handleCreationCall"}],[{"pretty":"property _handleCreationCall","sym":"#_handleCreationCall"}]],[[{"pretty":"ENABLE_AUTOMATION","sym":"#ENABLE_AUTOMATION"}],[{"pretty":"property ENABLE_AUTOMATION","sym":"#ENABLE_AUTOMATION"}]],[[],[{"pretty":"property WebAudioFront","sym":"#WebAudioFront"}]],[[{"pretty":"AUTOMATION_METHODS","sym":"#AUTOMATION_METHODS"}],[{"pretty":"property AUTOMATION_METHODS","sym":"#AUTOMATION_METHODS"},{"pretty":"property WebAudioFront.AUTOMATION_METHODS","sym":"WebAudioFront#AUTOMATION_METHODS"}]],[[],[{"pretty":"property has","sym":"#has"}]],[[{"pretty":"_handleAutomationCall","sym":"#_handleAutomationCall"}],[{"pretty":"property _handleAutomationCall","sym":"#_handleAutomationCall"}]],[[],[{"pretty":"property _handleRoutingCall","sym":"#_handleRoutingCall"}]],[[],[{"pretty":"property details","sym":"#details"},{"pretty":"property functionCall.details","sym":"functionCall#details"}]],[[{"pretty":"getConstructorName","sym":"#getConstructorName"}],[{"pretty":"property getConstructorName","sym":"#getConstructorName"}]],[[],[{"pretty":"property _onConnectParam","sym":"#_onConnectParam"}]],[[],[{"pretty":"property _onConnectNode","sym":"#_onConnectNode"}]],[[],[{"pretty":"property _onDisconnectNode","sym":"#_onDisconnectNode"}]],[[],[{"pretty":"property _handleCreationCall","sym":"#_handleCreationCall"}]],[[],[{"pretty":"property details","sym":"#details"},{"pretty":"property functionCall.details","sym":"functionCall#details"}]],[[],[{"pretty":"property _firstNodeCreated","sym":"#_firstNodeCreated"}]],[[],[{"pretty":"property _onStartContext","sym":"#_onStartContext"}]],[[],[{"pretty":"property _onCreateNode","sym":"#_onCreateNode"}]],[[],[{"pretty":"property destination","sym":"#destination"},{"pretty":"property caller.destination","sym":"caller#destination"}]],[[],[{"pretty":"property _firstNodeCreated","sym":"#_firstNodeCreated"}]],[[],[{"pretty":"property _onCreateNode","sym":"#_onCreateNode"}]],[[],[{"pretty":"property _handleAutomationCall","sym":"#_handleAutomationCall"}]],[[],[{"pretty":"property details","sym":"#details"},{"pretty":"property functionCall.details","sym":"functionCall#details"}]],[[{"pretty":"XPCNativeWrapper","sym":"#XPCNativeWrapper"}],[{"pretty":"property XPCNativeWrapper","sym":"#XPCNativeWrapper"}]],[[{"pretty":"sanitizeAutomationArgs","sym":"#sanitizeAutomationArgs"}],[{"pretty":"property sanitizeAutomationArgs","sym":"#sanitizeAutomationArgs"}]],[[{"pretty":"_getActorByNativeID","sym":"#_getActorByNativeID"}],[{"pretty":"property _getActorByNativeID","sym":"#_getActorByNativeID"}]],[[],[{"pretty":"property _parentID","sym":"#_parentID"},{"pretty":"property wrappedParam._parentID","sym":"wrappedParam#_parentID"}]],[[{"pretty":"_recordAutomationEvent","sym":"#_recordAutomationEvent"}],[{"pretty":"property _recordAutomationEvent","sym":"#_recordAutomationEvent"},{"pretty":"property nodeActor._recordAutomationEvent","sym":"nodeActor#_recordAutomationEvent"}]],[[],[{"pretty":"property _paramName","sym":"#_paramName"},{"pretty":"property wrappedParam._paramName","sym":"wrappedParam#_paramName"}]],[[{"pretty":"_onAutomationEvent","sym":"#_onAutomationEvent"}],[{"pretty":"property _onAutomationEvent","sym":"#_onAutomationEvent"}]],[[],[{"pretty":"property node","sym":"#node"}]],[[],[{"pretty":"property paramName","sym":"#paramName"}]],[[],[{"pretty":"property _paramName","sym":"#_paramName"},{"pretty":"property wrappedParam._paramName","sym":"wrappedParam#_paramName"}]],[[],[{"pretty":"property eventName","sym":"#eventName"}]],[[],[{"pretty":"property args","sym":"#args"}]],[[],[{"pretty":"property finalize","sym":"#finalize"}]],[[],[{"pretty":"property _initialized","sym":"#_initialized"}]],[[],[{"pretty":"property _initialized","sym":"#_initialized"}]],[[],[{"pretty":"property Services","sym":"#Services"}]],[[],[{"pretty":"property obs","sym":"#obs"},{"pretty":"property Services.obs","sym":"Services#obs"}]],[[],[{"pretty":"property removeObserver","sym":"#removeObserver"}]],[[{"pretty":"targetActor","sym":"#targetActor"}],[{"pretty":"property targetActor","sym":"#targetActor"}]],[[],[{"pretty":"property off","sym":"#off"}]],[[],[{"pretty":"property _onGlobalDestroyed","sym":"#_onGlobalDestroyed"}]],[[{"pretty":"targetActor","sym":"#targetActor"}],[{"pretty":"property targetActor","sym":"#targetActor"}]],[[],[{"pretty":"property off","sym":"#off"}]],[[],[{"pretty":"property _onGlobalCreated","sym":"#_onGlobalCreated"}]],[[{"pretty":"targetActor","sym":"#targetActor"}],[{"pretty":"property targetActor","sym":"#targetActor"}]],[[],[{"pretty":"property _nativeToActorID","sym":"#_nativeToActorID"}]],[[],[{"pretty":"property _callWatcher","sym":"#_callWatcher"}]],[[],[{"pretty":"property eraseRecording","sym":"#eraseRecording"}]],[[],[{"pretty":"property _callWatcher","sym":"#_callWatcher"}]],[[],[{"pretty":"property finalize","sym":"#finalize"}]],[[],[{"pretty":"property _callWatcher","sym":"#_callWatcher"}]],[[],[{"pretty":"property _constructAudioNode","sym":"#_constructAudioNode"}]],[[{"pretty":"XPCNativeWrapper","sym":"#XPCNativeWrapper"}],[{"pretty":"property XPCNativeWrapper","sym":"#XPCNativeWrapper"}]],[[{"pretty":"_instrumentParams","sym":"#_instrumentParams"}],[{"pretty":"property _instrumentParams","sym":"#_instrumentParams"}]],[[{"pretty":"AudioNodeActor","sym":"#AudioNodeActor"}],[{"pretty":"property AudioNodeActor","sym":"#AudioNodeActor"}]],[[],[{"pretty":"property conn","sym":"#conn"}]],[[],[{"pretty":"property manage","sym":"#manage"}]],[[],[{"pretty":"property _nativeToActorID","sym":"#_nativeToActorID"}]],[[],[{"pretty":"property id","sym":"#id"},{"pretty":"property node.id","sym":"node#id"}]],[[],[{"pretty":"property actorID","sym":"#actorID"},{"pretty":"property actor.actorID","sym":"actor#actorID"}]],[[],[{"pretty":"property _instrumentParams","sym":"#_instrumentParams"}]],[[{"pretty":"getConstructorName","sym":"#getConstructorName"}],[{"pretty":"property getConstructorName","sym":"#getConstructorName"}]],[[],[{"pretty":"property Object","sym":"#Object"}]],[[],[{"pretty":"property keys","sym":"#keys"},{"pretty":"property Object.keys","sym":"Object#keys"}]],[[],[{"pretty":"property AUDIO_NODE_DEFINITION","sym":"#AUDIO_NODE_DEFINITION"}]],[[],[{"pretty":"property properties","sym":"#properties"}]],[[],[{"pretty":"property filter","sym":"#filter"}]],[[{"pretty":"isAudioParam","sym":"#isAudioParam"}],[{"pretty":"property isAudioParam","sym":"#isAudioParam"}]],[[],[{"pretty":"property bind","sym":"#bind"},{"pretty":"property isAudioParam.bind","sym":"isAudioParam#bind"}]],[[],[{"pretty":"property forEach","sym":"#forEach"}]],[[],[{"pretty":"property _parentID","sym":"#_parentID"},{"pretty":"property param._parentID","sym":"param#_parentID"}]],[[],[{"pretty":"property id","sym":"#id"},{"pretty":"property node.id","sym":"node#id"}]],[[],[{"pretty":"property _paramName","sym":"#_paramName"},{"pretty":"property param._paramName","sym":"param#_paramName"}]],[[],[{"pretty":"property _getActorByNativeID","sym":"#_getActorByNativeID"}]],[[],[{"pretty":"property _nativeToActorID","sym":"#_nativeToActorID"}]],[[],[{"pretty":"property conn","sym":"#conn"}]],[[],[{"pretty":"property getActor","sym":"#getActor"}]],[[],[{"pretty":"property _onStartContext","sym":"#_onStartContext"}]],[[],[{"pretty":"property Services","sym":"#Services"}]],[[],[{"pretty":"property obs","sym":"#obs"},{"pretty":"property Services.obs","sym":"Services#obs"}]],[[],[{"pretty":"property addObserver","sym":"#addObserver"}]],[[],[{"pretty":"property emit","sym":"#emit"}]],[[],[{"pretty":"property _onConnectNode","sym":"#_onConnectNode"}]],[[{"pretty":"_getActorByNativeID","sym":"#_getActorByNativeID"}],[{"pretty":"property _getActorByNativeID","sym":"#_getActorByNativeID"}]],[[],[{"pretty":"property id","sym":"#id"},{"pretty":"property source.id","sym":"source#id"}]],[[{"pretty":"_getActorByNativeID","sym":"#_getActorByNativeID"}],[{"pretty":"property _getActorByNativeID","sym":"#_getActorByNativeID"}]],[[],[{"pretty":"property id","sym":"#id"},{"pretty":"property dest.id","sym":"dest#id"}]],[[],[{"pretty":"property emit","sym":"#emit"}]],[[],[{"pretty":"property source","sym":"#source"}]],[[],[{"pretty":"property dest","sym":"#dest"}]],[[],[{"pretty":"property _onConnectParam","sym":"#_onConnectParam"}]],[[{"pretty":"_getActorByNativeID","sym":"#_getActorByNativeID"}],[{"pretty":"property _getActorByNativeID","sym":"#_getActorByNativeID"}]],[[],[{"pretty":"property id","sym":"#id"},{"pretty":"property source.id","sym":"source#id"}]],[[{"pretty":"_getActorByNativeID","sym":"#_getActorByNativeID"}],[{"pretty":"property _getActorByNativeID","sym":"#_getActorByNativeID"}]],[[],[{"pretty":"property _parentID","sym":"#_parentID"},{"pretty":"property param._parentID","sym":"param#_parentID"}]],[[],[{"pretty":"property emit","sym":"#emit"}]],[[],[{"pretty":"property source","sym":"#source"}]],[[],[{"pretty":"property dest","sym":"#dest"}]],[[],[{"pretty":"property param","sym":"#param"}]],[[],[{"pretty":"property _paramName","sym":"#_paramName"},{"pretty":"property param._paramName","sym":"param#_paramName"}]],[[],[{"pretty":"property _onDisconnectNode","sym":"#_onDisconnectNode"}]],[[{"pretty":"_getActorByNativeID","sym":"#_getActorByNativeID"}],[{"pretty":"property _getActorByNativeID","sym":"#_getActorByNativeID"}]],[[],[{"pretty":"property id","sym":"#id"},{"pretty":"property node.id","sym":"node#id"}]],[[],[{"pretty":"property emit","sym":"#emit"}]],[[],[{"pretty":"property _onParamChange","sym":"#_onParamChange"}]],[[{"pretty":"_getActorByNativeID","sym":"#_getActorByNativeID"}],[{"pretty":"property _getActorByNativeID","sym":"#_getActorByNativeID"}]],[[],[{"pretty":"property id","sym":"#id"},{"pretty":"property node.id","sym":"node#id"}]],[[],[{"pretty":"property emit","sym":"#emit"}]],[[],[{"pretty":"property source","sym":"#source"}]],[[],[{"pretty":"property param","sym":"#param"}]],[[],[{"pretty":"property value","sym":"#value"}]],[[],[{"pretty":"property _onCreateNode","sym":"#_onCreateNode"}]],[[{"pretty":"_constructAudioNode","sym":"#_constructAudioNode"}],[{"pretty":"property _constructAudioNode","sym":"#_constructAudioNode"}]],[[],[{"pretty":"property emit","sym":"#emit"}]],[[],[{"pretty":"property observe","sym":"#observe"}]],[[{"pretty":"_handleNodeDestroyed","sym":"#_handleNodeDestroyed"}],[{"pretty":"property _handleNodeDestroyed","sym":"#_handleNodeDestroyed"}]],[[],[{"pretty":"property _handleNodeDestroyed","sym":"#_handleNodeDestroyed"}]],[[{"pretty":"_getActorByNativeID","sym":"#_getActorByNativeID"}],[{"pretty":"property _getActorByNativeID","sym":"#_getActorByNativeID"}]],[[],[{"pretty":"property _nativeToActorID","sym":"#_nativeToActorID"}]],[[],[{"pretty":"property emit","sym":"#emit"}]],[[],[{"pretty":"property _onGlobalCreated","sym":"#_onGlobalCreated"}]],[[],[{"pretty":"property _firstNodeCreated","sym":"#_firstNodeCreated"}]],[[],[{"pretty":"property _nativeToActorID","sym":"#_nativeToActorID"}]],[[],[{"pretty":"property clear","sym":"#clear"}]],[[],[{"pretty":"property _callWatcher","sym":"#_callWatcher"}]],[[],[{"pretty":"property resumeRecording","sym":"#resumeRecording"}]],[[],[{"pretty":"property _onAutomationEvent","sym":"#_onAutomationEvent"}]],[[],[{"pretty":"property emit","sym":"#emit"}]],[[],[{"pretty":"property node","sym":"#node"}]],[[],[{"pretty":"property paramName","sym":"#paramName"}]],[[],[{"pretty":"property eventName","sym":"#eventName"}]],[[],[{"pretty":"property args","sym":"#args"}]],[[],[{"pretty":"property _onGlobalDestroyed","sym":"#_onGlobalDestroyed"}]],[[],[{"pretty":"property _callWatcher","sym":"#_callWatcher"}]],[[],[{"pretty":"property _tracedWindowId","sym":"#_tracedWindowId"}]],[[],[{"pretty":"property _nativeToActorID","sym":"#_nativeToActorID"}]],[[],[{"pretty":"property _nativeToActorID","sym":"#_nativeToActorID"}]],[[],[{"pretty":"property clear","sym":"#clear"}]],[[],[{"pretty":"property Services","sym":"#Services"}]],[[],[{"pretty":"property obs","sym":"#obs"},{"pretty":"property Services.obs","sym":"Services#obs"}]],[[],[{"pretty":"property removeObserver","sym":"#removeObserver"}]],[[],[{"pretty":"property isAudioParam","sym":"#isAudioParam"}]],[[],[{"pretty":"property test","sym":"#test"}]],[[],[{"pretty":"property toString","sym":"#toString"}]],[[],[{"pretty":"property constructError","sym":"#constructError"}]],[[],[{"pretty":"property message","sym":"#message"}]],[[],[{"pretty":"property message","sym":"#message"},{"pretty":"property err.message","sym":"err#message"}]],[[],[{"pretty":"property type","sym":"#type"}]],[[],[{"pretty":"property constructor","sym":"#constructor"},{"pretty":"property err.constructor","sym":"err#constructor"}]],[[],[{"pretty":"property name","sym":"#name"}]],[[],[{"pretty":"property CollectedAudioNodeError","sym":"#CollectedAudioNodeError"}]],[[],[{"pretty":"property message","sym":"#message"}]],[[],[{"pretty":"property type","sym":"#type"}]],[[],[{"pretty":"property InvalidCommandError","sym":"#InvalidCommandError"}]],[[],[{"pretty":"property message","sym":"#message"}]],[[],[{"pretty":"property type","sym":"#type"}]],[[],[{"pretty":"property getConstructorName","sym":"#getConstructorName"}]],[[],[{"pretty":"property Object","sym":"#Object"}]],[[],[{"pretty":"property prototype","sym":"#prototype"},{"pretty":"property Object.prototype","sym":"Object#prototype"}]],[[],[{"pretty":"property toString","sym":"#toString"}]],[[],[{"pretty":"property call","sym":"#call"}]],[[],[{"pretty":"property match","sym":"#match"}]],[[],[{"pretty":"property createObjectGrip","sym":"#createObjectGrip"}]],[[],[{"pretty":"property type","sym":"#type"}]],[[],[{"pretty":"property preview","sym":"#preview"}]],[[],[{"pretty":"property kind","sym":"#kind"}]],[[],[{"pretty":"property text","sym":"#text"}]],[[{"pretty":"getConstructorName","sym":"#getConstructorName"}],[{"pretty":"property getConstructorName","sym":"#getConstructorName"}]],[[],[{"pretty":"property sanitizeAutomationArgs","sym":"#sanitizeAutomationArgs"}]],[[],[{"pretty":"property reduce","sym":"#reduce"},{"pretty":"property args.reduce","sym":"args#reduce"}]],[[{"pretty":"getConstructorName","sym":"#getConstructorName"}],[{"pretty":"property getConstructorName","sym":"#getConstructorName"}]],[[],[{"pretty":"property push","sym":"#push"},{"pretty":"property newArgs.push","sym":"newArgs#push"}]],[[{"pretty":"castToArray","sym":"#castToArray"}],[{"pretty":"property castToArray","sym":"#castToArray"}]],[[],[{"pretty":"property castToArray","sym":"#castToArray"}]],[[],[{"pretty":"property Cu","sym":"#Cu"}]],[[],[{"pretty":"property getGlobalForObject","sym":"#getGlobalForObject"},{"pretty":"property Cu.getGlobalForObject","sym":"Cu#getGlobalForObject"}]],[[],[{"pretty":"property Cu","sym":"#Cu"}]],[[],[{"pretty":"property cloneInto","sym":"#cloneInto"},{"pretty":"property Cu.cloneInto","sym":"Cu#cloneInto"}]],[[{"pretty":"subarray","sym":"#subarray"}],[{"pretty":"property subarray","sym":"#subarray"},{"pretty":"property typedArray.subarray","sym":"typedArray#subarray"}]],[[{"pretty":"copyInto","sym":"#copyInto"}],[{"pretty":"property copyInto","sym":"#copyInto"}]],[[],[{"pretty":"property copyInto","sym":"#copyInto"}]],[[],[{"pretty":"property length","sym":"#length"},{"pretty":"property source.length","sym":"source#length"}]]];</script>
    </div>
  <div id="foot" class="footer">
    This page was generated by Searchfox <span class="pretty-date" data-datetime="Wed, 13 Feb 2019 15:28:34 +0000"></span>.
  </div>
  <span id="data" data-root="/" data-search="/mozilla-central/search" data-tree="mozilla-central" data-path="devtools/server/actors/webaudio.js"></span>
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
