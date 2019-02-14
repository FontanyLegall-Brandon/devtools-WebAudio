<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8" />
  <link href="/static/icons/search.png" rel="shortcut icon">
  <title>browser_wa_properties-view-media-nodes.js - mozsearch</title>
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
<div class="breadcrumbs"><a href="/mozilla-central/source/">mozilla-central</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools">devtools</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client">client</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor">webaudioeditor</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/test">test</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/test/browser_wa_properties-view-media-nodes.js">browser_wa_properties-view-media-nodes.js</a></div>
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
  <a href="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/test/browser_wa_properties-view-media-nodes.js" title="Permalink" class="icon" data-update-link="true" data-link="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/test/browser_wa_properties-view-media-nodes.js">Permalink <span class="accel">Y</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/log/tip/devtools/client/webaudioeditor/test/browser_wa_properties-view-media-nodes.js" title="Log" class="icon">Log <span class="accel">L</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/raw-file/tip/devtools/client/webaudioeditor/test/browser_wa_properties-view-media-nodes.js" title="Raw" class="icon">Raw <span class="accel">R</span></a>
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
<div class="blame-strip c1" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#1" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l2" class="line-number">2
<div class="blame-strip c1" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#2" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l3" class="line-number">3
<div class="blame-strip c1" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#3" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l4" class="line-number">4
<div class="blame-strip c1" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#4" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l5" class="line-number">5
<div class="blame-strip c1" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#5" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l6" class="line-number">6
<div class="blame-strip c1" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#6" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l7" class="line-number">7
<div class="blame-strip c1" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#7" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l8" class="line-number">8
<div class="blame-strip c1" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#8" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l9" class="line-number">9
<div class="blame-strip c2" data-blame="64db2267cf9899840b44ce4116c2dd94aa0c3d8e#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#9" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l10" class="line-number">10
<div class="blame-strip c1" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#10" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l11" class="line-number">11
<div class="blame-strip c2" data-blame="4282b5345df3144ffde5fae37a7b130ff8e0ebad#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#11" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l12" class="line-number">12
<div class="blame-strip c2" data-blame="4282b5345df3144ffde5fae37a7b130ff8e0ebad#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#12" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l13" class="line-number">13
<div class="blame-strip c2" data-blame="4282b5345df3144ffde5fae37a7b130ff8e0ebad#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#13" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l14" class="line-number">14
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#14" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l15" class="line-number">15
<div class="blame-strip c2" data-blame="e563788ea7e93e9ec0bd9dc3baaec7676404614c#%#15" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l16" class="line-number">16
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#16" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l17" class="line-number">17
<div class="blame-strip c2" data-blame="4282b5345df3144ffde5fae37a7b130ff8e0ebad#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#17" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l18" class="line-number">18
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#18" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l19" class="line-number">19
<div class="blame-strip c2" data-blame="4282b5345df3144ffde5fae37a7b130ff8e0ebad#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#19" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l20" class="line-number">20
<div class="blame-strip c1" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#20" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l21" class="line-number">21
<div class="blame-strip c2" data-blame="4282b5345df3144ffde5fae37a7b130ff8e0ebad#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#20" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l22" class="line-number">22
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#21" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l23" class="line-number">23
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#22" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l24" class="line-number">24
<div class="blame-strip c2" data-blame="f5754d679a0d35fb522d3af6fe77fc77c8574c4a#%#23" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l25" class="line-number">25
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#26" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l26" class="line-number">26
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l27" class="line-number">27
<div class="blame-strip c2" data-blame="f5754d679a0d35fb522d3af6fe77fc77c8574c4a#%#26" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l28" class="line-number">28
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#29" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l29" class="line-number">29
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#30" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l30" class="line-number">30
<div class="blame-strip c1" data-blame="9e1699e113e8f29a497c663d3db1170dce6abd9f#%#31" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l31" class="line-number">31
<div class="blame-strip c2" data-blame="2c53bdd401408255d49c88d40c669e71c83075fb#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#32" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l32" class="line-number">32
<div class="blame-strip c1" data-blame="4282b5345df3144ffde5fae37a7b130ff8e0ebad#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#33" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l33" class="line-number">33
<div class="blame-strip c1" data-blame="4282b5345df3144ffde5fae37a7b130ff8e0ebad#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#34" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l34" class="line-number">34
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#34" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l35" class="line-number">35
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#35" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l36" class="line-number">36
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#36" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l37" class="line-number">37
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#37" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l38" class="line-number">38
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#38" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l39" class="line-number">39
<div class="blame-strip c2" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#16" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l40" class="line-number">40
<div class="blame-strip c2" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#17" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l41" class="line-number">41
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#41" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l42" class="line-number">42
<div class="blame-strip c2" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#19" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l43" class="line-number">43
<div class="blame-strip c2" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#20" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l44" class="line-number">44
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#45" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l45" class="line-number">45
<div class="blame-strip c2" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#50" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l46" class="line-number">46
<div class="blame-strip c1" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#46" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l47" class="line-number">47
<div class="blame-strip c2" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#24" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l48" class="line-number">48
<div class="blame-strip c1" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#48" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l49" class="line-number">49
<div class="blame-strip c2" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#26" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l50" class="line-number">50
<div class="blame-strip c1" data-blame="76baf9e8d67bf3c9c883264c490cdb19038445d5#%#53" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l51" class="line-number">51
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#51" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l52" class="line-number">52
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#52" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l53" class="line-number">53
<div class="blame-strip c1" data-blame="76baf9e8d67bf3c9c883264c490cdb19038445d5#%#56" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l54" class="line-number">54
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#54" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l55" class="line-number">55
<div class="blame-strip c1" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#30" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l56" class="line-number">56
<div class="blame-strip c2" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#56" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l57" class="line-number">57
<div class="blame-strip c1" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#32" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l58" class="line-number">58
<div class="blame-strip c1" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#33" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l59" class="line-number">59
<div class="blame-strip c2" data-blame="640fe52298335597260c4708fb754d6d899feeda#%#59" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l60" class="line-number">60
<div class="blame-strip c1" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#63" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l61" class="line-number">61
<div class="blame-strip c2" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#34" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l62" class="line-number">62
<div class="blame-strip c2" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#35" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l63" class="line-number">63
<div class="blame-strip c1" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#64" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l64" class="line-number">64
<div class="blame-strip c2" data-blame="1e8acdbc6e6532fc5ab7c34378dce1eb9377305f#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#67" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l65" class="line-number">65
<div class="blame-strip c1" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#38" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l66" class="line-number">66
<div class="blame-strip c1" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#39" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l67" class="line-number">67
<div class="blame-strip c1" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#40" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l68" class="line-number">68
<div class="blame-strip c1" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#41" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l69" class="line-number">69
<div class="blame-strip c1" data-blame="8657f221cc9b47e8e4b9a3926803e6e814fef1df#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#42" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l70" class="line-number">70
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#71" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l71" class="line-number">71
<div class="blame-strip c1" data-blame="4282b5345df3144ffde5fae37a7b130ff8e0ebad#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#68" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l72" class="line-number">72
<div class="blame-strip c2" data-blame="bcf6facc3c1d9edf3de911b652ad9a36a3c0a41d#%#73" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l73" class="line-number">73
<div class="blame-strip c1" data-blame="3c0bacbcdc816623a9982b930c0638c78ab4a2c5#browser/devtools/webaudioeditor/test/browser_wa_properties-view-media-nodes.js#72" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
      </td>
      <td class="code">
<pre><code id="line-1" aria-labelledby="1"><span class="syn_comment" >/* Any copyright is dedicated to the Public Domain.</span>
</code><code id="line-2" aria-labelledby="2"><span class="syn_comment" >   <a href="http://creativecommons.org/publicdomain/zero/1.0/">http://creativecommons.org/publicdomain/zero/1.0/</a> */</span>
</code><code id="line-3" aria-labelledby="3">
</code><code id="line-4" aria-labelledby="4"><span class="syn_comment" >/**</span>
</code><code id="line-5" aria-labelledby="5"><span class="syn_comment" > * Tests that params view correctly displays all properties for nodes</span>
</code><code id="line-6" aria-labelledby="6"><span class="syn_comment" > * correctly, with default values and correct types.</span>
</code><code id="line-7" aria-labelledby="7"><span class="syn_comment" > */</span>
</code><code id="line-8" aria-labelledby="8">
</code><code id="line-9" aria-labelledby="9"><span class="syn_reserved" >var</span> <span class="syn_def" data-symbols="#MEDIA_PERMISSION" data-i="0" >MEDIA_PERMISSION</span> = <span class="syn_string" >"media.navigator.permission.disabled"</span>;
</code><code id="line-10" aria-labelledby="10">
</code><code id="line-11" aria-labelledby="11"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#waitForDeviceClosed" data-i="1" >waitForDeviceClosed</span>() {
</code><code id="line-12" aria-labelledby="12">  <span data-symbols="#info" data-i="2" >info</span>(<span class="syn_string" >"Checking that getUserMedia streams are no longer in use."</span>);
</code><code id="line-13" aria-labelledby="13">
</code><code id="line-14" aria-labelledby="14">  <span class="syn_reserved" >const</span> <span data-symbols="7366-0" >temp</span> = {};
</code><code id="line-15" aria-labelledby="15">  <span data-symbols="#ChromeUtils" data-i="3" >ChromeUtils</span>.<span class="syn_reserved" >import</span>(<span class="syn_string" >"<a href="resource:///modules/webrtcUI.jsm">resource:///modules/webrtcUI.jsm</a>"</span>, <span data-symbols="7366-0" >temp</span>);
</code><code id="line-16" aria-labelledby="16">  <span class="syn_reserved" >const</span> <span data-symbols="7366-1" >webrtcUI</span> = <span data-symbols="7366-0" >temp</span>.<span data-symbols="#webrtcUI,temp#webrtcUI" data-i="4" >webrtcUI</span>;
</code><code id="line-17" aria-labelledby="17">
</code><code id="line-18" aria-labelledby="18">  <span class="syn_reserved" >if</span> (!<span data-symbols="7366-1" >webrtcUI</span>.<span data-symbols="#showGlobalIndicator,webrtcUI#showGlobalIndicator" data-i="5" >showGlobalIndicator</span>) {
</code><code id="line-19" aria-labelledby="19">    <span class="syn_reserved" >return</span> <span data-symbols="#Promise" data-i="6" >Promise</span>.<span data-symbols="#resolve,Promise#resolve" data-i="7" >resolve</span>();
</code><code id="line-20" aria-labelledby="20">  }
</code><code id="line-21" aria-labelledby="21">
</code><code id="line-22" aria-labelledby="22">  <span class="syn_reserved" >return</span> <span class="syn_reserved" >new</span> <span data-symbols="#Promise" data-i="8" >Promise</span>((<span data-symbols="7366-2" >resolve</span>, <span data-symbols="7366-3" >reject</span>) => {
</code><code id="line-23" aria-labelledby="23">    <span class="syn_reserved" >const</span> <span data-symbols="7366-4" >message</span> = <span class="syn_string" >"webrtc:UpdateGlobalIndicators"</span>;
</code><code id="line-24" aria-labelledby="24">    <span data-symbols="#Services" data-i="9" >Services</span>.<span data-symbols="#ppmm,Services#ppmm" data-i="10" >ppmm</span>.<span data-symbols="#addMessageListener" data-i="11" >addMessageListener</span>(<span data-symbols="7366-4" >message</span>, <span class="syn_reserved" >function</span> listener(<span data-symbols="7366-5" >aMessage</span>) {
</code><code id="line-25" aria-labelledby="25">      <span data-symbols="#info" data-i="12" >info</span>(<span class="syn_string" >"Received "</span> + <span data-symbols="7366-4" >message</span> + <span class="syn_string" >" message"</span>);
</code><code id="line-26" aria-labelledby="26">      <span class="syn_reserved" >if</span> (!<span data-symbols="7366-5" >aMessage</span>.<span data-symbols="#data,aMessage#data" data-i="13" >data</span>.<span data-symbols="#showGlobalIndicator" data-i="14" >showGlobalIndicator</span>) {
</code><code id="line-27" aria-labelledby="27">        <span data-symbols="#Services" data-i="15" >Services</span>.<span data-symbols="#ppmm,Services#ppmm" data-i="16" >ppmm</span>.<span data-symbols="#removeMessageListener" data-i="17" >removeMessageListener</span>(<span data-symbols="7366-4" >message</span>, <span data-symbols="#listener" data-i="18" >listener</span>);
</code><code id="line-28" aria-labelledby="28">        <span data-symbols="7366-2" >resolve</span>();
</code><code id="line-29" aria-labelledby="29">      }
</code><code id="line-30" aria-labelledby="30">    });
</code><code id="line-31" aria-labelledby="31">  });
</code><code id="line-32" aria-labelledby="32">}
</code><code id="line-33" aria-labelledby="33">
</code><code id="line-34" aria-labelledby="34"><span data-symbols="#add_task" data-i="19" >add_task</span>(async <span class="syn_reserved" >function</span>() {
</code><code id="line-35" aria-labelledby="35">  <span class="syn_reserved" >const</span> { <span data-symbols="7366-6" >target</span>, <span data-symbols="7366-7" >panel</span> } = await <span data-symbols="#initWebAudioEditor" data-i="20" >initWebAudioEditor</span>(<span data-symbols="#MEDIA_NODES_URL" data-i="21" >MEDIA_NODES_URL</span>);
</code><code id="line-36" aria-labelledby="36">  <span class="syn_reserved" >const</span> { <span data-symbols="7366-8" >panelWin</span> } = <span data-symbols="7366-7" >panel</span>;
</code><code id="line-37" aria-labelledby="37">  <span class="syn_reserved" >const</span> { <span data-symbols="7366-9" >gFront</span>, $, $$, <span data-symbols="7366-12" >EVENTS</span>, <span data-symbols="7366-13" >PropertiesView</span> } = <span data-symbols="7366-8" >panelWin</span>;
</code><code id="line-38" aria-labelledby="38">  <span class="syn_reserved" >const</span> <span data-symbols="7366-14" >gVars</span> = <span data-symbols="7366-13" >PropertiesView</span>.<span data-symbols="#_propsView,PropertiesView#_propsView" data-i="22" >_propsView</span>;
</code><code id="line-39" aria-labelledby="39">
</code><code id="line-40" aria-labelledby="40">  <span class="syn_comment" >// Auto enable getUserMedia</span>
</code><code id="line-41" aria-labelledby="41">  <span class="syn_reserved" >const</span> <span data-symbols="7366-15" >mediaPermissionPref</span> = <span data-symbols="#Services" data-i="23" >Services</span>.<span data-symbols="#prefs,Services#prefs" data-i="24" >prefs</span>.<span data-symbols="#getBoolPref" data-i="25" >getBoolPref</span>(<span data-symbols="#MEDIA_PERMISSION" data-i="26" >MEDIA_PERMISSION</span>);
</code><code id="line-42" aria-labelledby="42">  <span data-symbols="#Services" data-i="27" >Services</span>.<span data-symbols="#prefs,Services#prefs" data-i="28" >prefs</span>.<span data-symbols="#setBoolPref" data-i="29" >setBoolPref</span>(<span data-symbols="#MEDIA_PERMISSION" data-i="30" >MEDIA_PERMISSION</span>, <span class="syn_reserved" >true</span>);
</code><code id="line-43" aria-labelledby="43">
</code><code id="line-44" aria-labelledby="44">  await <span data-symbols="#loadFrameScriptUtils" data-i="31" >loadFrameScriptUtils</span>();
</code><code id="line-45" aria-labelledby="45">
</code><code id="line-46" aria-labelledby="46">  <span class="syn_reserved" >const</span> <span data-symbols="7366-16" >events</span> = <span data-symbols="#Promise" data-i="32" >Promise</span>.<span data-symbols="#all,Promise#all" data-i="33" >all</span>([
</code><code id="line-47" aria-labelledby="47">    <span data-symbols="#getN" data-i="34" >getN</span>(<span data-symbols="7366-9" >gFront</span>, <span class="syn_string" >"create-node"</span>, 4),
</code><code id="line-48" aria-labelledby="48">    <span data-symbols="#waitForGraphRendered" data-i="35" >waitForGraphRendered</span>(<span data-symbols="7366-8" >panelWin</span>, 4, 0),
</code><code id="line-49" aria-labelledby="49">  ]);
</code><code id="line-50" aria-labelledby="50">  <span data-symbols="#reload" data-i="36" >reload</span>(<span data-symbols="7366-6" >target</span>);
</code><code id="line-51" aria-labelledby="51">  <span class="syn_reserved" >const</span> [<span data-symbols="7366-17" >actors</span>] = await <span data-symbols="7366-16" >events</span>;
</code><code id="line-52" aria-labelledby="52">  <span class="syn_reserved" >const</span> <span data-symbols="7366-18" >nodeIds</span> = <span data-symbols="7366-17" >actors</span>.<span data-symbols="#map,actors#map" data-i="37" >map</span>(<span data-symbols="7366-19" >actor</span> => <span data-symbols="7366-19" >actor</span>.<span data-symbols="#actorID,actor#actorID" data-i="38" >actorID</span>);
</code><code id="line-53" aria-labelledby="53">
</code><code id="line-54" aria-labelledby="54">  <span class="syn_reserved" >const</span> <span data-symbols="7366-20" >types</span> = [
</code><code id="line-55" aria-labelledby="55">    <span class="syn_string" >"AudioDestinationNode"</span>, <span class="syn_string" >"MediaElementAudioSourceNode"</span>,
</code><code id="line-56" aria-labelledby="56">    <span class="syn_string" >"MediaStreamAudioSourceNode"</span>, <span class="syn_string" >"MediaStreamAudioDestinationNode"</span>,
</code><code id="line-57" aria-labelledby="57">  ];
</code><code id="line-58" aria-labelledby="58">
</code><code id="line-59" aria-labelledby="59">  <span class="syn_reserved" >const</span> <span data-symbols="7366-21" >defaults</span> = await <span data-symbols="#Promise" data-i="39" >Promise</span>.<span data-symbols="#all,Promise#all" data-i="40" >all</span>(<span data-symbols="7366-20" >types</span>.<span data-symbols="#map,types#map" data-i="41" >map</span>(<span data-symbols="7366-22" >type</span> => <span data-symbols="#nodeDefaultValues" data-i="42" >nodeDefaultValues</span>(<span data-symbols="7366-22" >type</span>)));
</code><code id="line-60" aria-labelledby="60">
</code><code id="line-61" aria-labelledby="61">  <span class="syn_reserved" >for</span> (<span class="syn_reserved" >let</span> <span data-symbols="7366-23" >i</span> = 0; <span data-symbols="7366-23" >i</span> &lt; <span data-symbols="7366-20" >types</span>.<span data-symbols="#length,types#length" data-i="43" >length</span>; <span data-symbols="7366-23" >i</span>++) {
</code><code id="line-62" aria-labelledby="62">    <span data-symbols="#click" data-i="44" >click</span>(<span data-symbols="7366-8" >panelWin</span>, <span data-symbols="#findGraphNode" data-i="45" >findGraphNode</span>(<span data-symbols="7366-8" >panelWin</span>, <span data-symbols="7366-18" >nodeIds</span>[<span data-symbols="7366-23" >i</span>]));
</code><code id="line-63" aria-labelledby="63">    await <span data-symbols="#waitForInspectorRender" data-i="46" >waitForInspectorRender</span>(<span data-symbols="7366-8" >panelWin</span>, <span data-symbols="7366-12" >EVENTS</span>);
</code><code id="line-64" aria-labelledby="64">    <span data-symbols="#checkVariableView" data-i="47" >checkVariableView</span>(<span data-symbols="7366-14" >gVars</span>, 0, <span data-symbols="7366-21" >defaults</span>[<span data-symbols="7366-23" >i</span>], <span data-symbols="7366-20" >types</span>[<span data-symbols="7366-23" >i</span>]);
</code><code id="line-65" aria-labelledby="65">  }
</code><code id="line-66" aria-labelledby="66">
</code><code id="line-67" aria-labelledby="67">  <span class="syn_comment" >// Reset permissions on getUserMedia</span>
</code><code id="line-68" aria-labelledby="68">  <span data-symbols="#Services" data-i="48" >Services</span>.<span data-symbols="#prefs,Services#prefs" data-i="49" >prefs</span>.<span data-symbols="#setBoolPref" data-i="50" >setBoolPref</span>(<span data-symbols="#MEDIA_PERMISSION" data-i="51" >MEDIA_PERMISSION</span>, <span data-symbols="7366-15" >mediaPermissionPref</span>);
</code><code id="line-69" aria-labelledby="69">
</code><code id="line-70" aria-labelledby="70">  await <span data-symbols="#teardown" data-i="52" >teardown</span>(<span data-symbols="7366-6" >target</span>);
</code><code id="line-71" aria-labelledby="71">
</code><code id="line-72" aria-labelledby="72">  await <span data-symbols="#waitForDeviceClosed" data-i="53" >waitForDeviceClosed</span>();
</code><code id="line-73" aria-labelledby="73">});
</code></pre>      </td>
    </tr>
  </tbody>
</table>
<script>var ANALYSIS_DATA = [[[],[{"pretty":"property MEDIA_PERMISSION","sym":"#MEDIA_PERMISSION"}]],[[],[{"pretty":"property waitForDeviceClosed","sym":"#waitForDeviceClosed"}]],[[],[{"pretty":"property info","sym":"#info"}]],[[],[{"pretty":"property ChromeUtils","sym":"#ChromeUtils"}]],[[],[{"pretty":"property webrtcUI","sym":"#webrtcUI"},{"pretty":"property temp.webrtcUI","sym":"temp#webrtcUI"}]],[[{"pretty":"webrtcUI.showGlobalIndicator","sym":"webrtcUI#showGlobalIndicator"}],[{"pretty":"property showGlobalIndicator","sym":"#showGlobalIndicator"},{"pretty":"property webrtcUI.showGlobalIndicator","sym":"webrtcUI#showGlobalIndicator"}]],[[],[{"pretty":"property Promise","sym":"#Promise"}]],[[{"pretty":"Promise.resolve","sym":"Promise#resolve"}],[{"pretty":"property resolve","sym":"#resolve"},{"pretty":"property Promise.resolve","sym":"Promise#resolve"}]],[[],[{"pretty":"property Promise","sym":"#Promise"}]],[[],[{"pretty":"property Services","sym":"#Services"}]],[[],[{"pretty":"property ppmm","sym":"#ppmm"},{"pretty":"property Services.ppmm","sym":"Services#ppmm"}]],[[],[{"pretty":"property addMessageListener","sym":"#addMessageListener"}]],[[],[{"pretty":"property info","sym":"#info"}]],[[],[{"pretty":"property data","sym":"#data"},{"pretty":"property aMessage.data","sym":"aMessage#data"}]],[[],[{"pretty":"property showGlobalIndicator","sym":"#showGlobalIndicator"}]],[[],[{"pretty":"property Services","sym":"#Services"}]],[[],[{"pretty":"property ppmm","sym":"#ppmm"},{"pretty":"property Services.ppmm","sym":"Services#ppmm"}]],[[],[{"pretty":"property removeMessageListener","sym":"#removeMessageListener"}]],[[],[{"pretty":"property listener","sym":"#listener"}]],[[],[{"pretty":"property add_task","sym":"#add_task"}]],[[{"pretty":"initWebAudioEditor","sym":"#initWebAudioEditor"}],[{"pretty":"property initWebAudioEditor","sym":"#initWebAudioEditor"}]],[[{"pretty":"MEDIA_NODES_URL","sym":"#MEDIA_NODES_URL"}],[{"pretty":"property MEDIA_NODES_URL","sym":"#MEDIA_NODES_URL"}]],[[],[{"pretty":"property _propsView","sym":"#_propsView"},{"pretty":"property PropertiesView._propsView","sym":"PropertiesView#_propsView"}]],[[],[{"pretty":"property Services","sym":"#Services"}]],[[],[{"pretty":"property prefs","sym":"#prefs"},{"pretty":"property Services.prefs","sym":"Services#prefs"}]],[[],[{"pretty":"property getBoolPref","sym":"#getBoolPref"}]],[[{"pretty":"MEDIA_PERMISSION","sym":"#MEDIA_PERMISSION"}],[{"pretty":"property MEDIA_PERMISSION","sym":"#MEDIA_PERMISSION"}]],[[],[{"pretty":"property Services","sym":"#Services"}]],[[],[{"pretty":"property prefs","sym":"#prefs"},{"pretty":"property Services.prefs","sym":"Services#prefs"}]],[[],[{"pretty":"property setBoolPref","sym":"#setBoolPref"}]],[[{"pretty":"MEDIA_PERMISSION","sym":"#MEDIA_PERMISSION"}],[{"pretty":"property MEDIA_PERMISSION","sym":"#MEDIA_PERMISSION"}]],[[{"pretty":"loadFrameScriptUtils","sym":"#loadFrameScriptUtils"}],[{"pretty":"property loadFrameScriptUtils","sym":"#loadFrameScriptUtils"}]],[[],[{"pretty":"property Promise","sym":"#Promise"}]],[[],[{"pretty":"property all","sym":"#all"},{"pretty":"property Promise.all","sym":"Promise#all"}]],[[{"pretty":"getN","sym":"#getN"}],[{"pretty":"property getN","sym":"#getN"}]],[[{"pretty":"waitForGraphRendered","sym":"#waitForGraphRendered"}],[{"pretty":"property waitForGraphRendered","sym":"#waitForGraphRendered"}]],[[],[{"pretty":"property reload","sym":"#reload"}]],[[],[{"pretty":"property map","sym":"#map"},{"pretty":"property actors.map","sym":"actors#map"}]],[[],[{"pretty":"property actorID","sym":"#actorID"},{"pretty":"property actor.actorID","sym":"actor#actorID"}]],[[],[{"pretty":"property Promise","sym":"#Promise"}]],[[],[{"pretty":"property all","sym":"#all"},{"pretty":"property Promise.all","sym":"Promise#all"}]],[[],[{"pretty":"property map","sym":"#map"},{"pretty":"property types.map","sym":"types#map"}]],[[{"pretty":"nodeDefaultValues","sym":"#nodeDefaultValues"}],[{"pretty":"property nodeDefaultValues","sym":"#nodeDefaultValues"}]],[[{"pretty":"types.length","sym":"types#length"}],[{"pretty":"property length","sym":"#length"},{"pretty":"property types.length","sym":"types#length"}]],[[],[{"pretty":"property click","sym":"#click"}]],[[{"pretty":"findGraphNode","sym":"#findGraphNode"}],[{"pretty":"property findGraphNode","sym":"#findGraphNode"}]],[[{"pretty":"waitForInspectorRender","sym":"#waitForInspectorRender"}],[{"pretty":"property waitForInspectorRender","sym":"#waitForInspectorRender"}]],[[{"pretty":"checkVariableView","sym":"#checkVariableView"}],[{"pretty":"property checkVariableView","sym":"#checkVariableView"}]],[[],[{"pretty":"property Services","sym":"#Services"}]],[[],[{"pretty":"property prefs","sym":"#prefs"},{"pretty":"property Services.prefs","sym":"Services#prefs"}]],[[],[{"pretty":"property setBoolPref","sym":"#setBoolPref"}]],[[{"pretty":"MEDIA_PERMISSION","sym":"#MEDIA_PERMISSION"}],[{"pretty":"property MEDIA_PERMISSION","sym":"#MEDIA_PERMISSION"}]],[[],[{"pretty":"property teardown","sym":"#teardown"}]],[[{"pretty":"waitForDeviceClosed","sym":"#waitForDeviceClosed"}],[{"pretty":"property waitForDeviceClosed","sym":"#waitForDeviceClosed"}]]];</script>
    </div>
  <div id="foot" class="footer">
    This page was generated by Searchfox <span class="pretty-date" data-datetime="Wed, 13 Feb 2019 15:28:42 +0000"></span>.
  </div>
  <span id="data" data-root="/" data-search="/mozilla-central/search" data-tree="mozilla-central" data-path="devtools/client/webaudioeditor/test/browser_wa_properties-view-media-nodes.js"></span>
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
