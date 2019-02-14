<!DOCTYPE html>
<html lang="en-US">
<head>
  <meta charset="utf-8" />
  <link href="/static/icons/search.png" rel="shortcut icon">
  <title>panel.js - mozsearch</title>
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
<div class="breadcrumbs"><a href="/mozilla-central/source/">mozilla-central</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools">devtools</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client">client</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor">webaudioeditor</a><span class="path-separator">/</span><a href="/mozilla-central/source/devtools/client/webaudioeditor/panel.js">panel.js</a></div>
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
  <a href="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/panel.js" title="Permalink" class="icon" data-update-link="true" data-link="/mozilla-central/rev/01b4b3830ea3cae2e9e431019afa6391b471c6da/devtools/client/webaudioeditor/panel.js">Permalink <span class="accel">Y</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/log/tip/devtools/client/webaudioeditor/panel.js" title="Log" class="icon">Log <span class="accel">L</span></a>
  </li>
  <li>
  <a href="https://hg.mozilla.org/mozilla-central/raw-file/tip/devtools/client/webaudioeditor/panel.js" title="Raw" class="icon">Raw <span class="accel">R</span></a>
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
<div class="blame-strip c1" data-blame="7e20285e704eb72146c79374a4b1180388ade9f4#browser/devtools/webaudioeditor/panel.js#1" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l2" class="line-number">2
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#2" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l3" class="line-number">3
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#3" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l4" class="line-number">4
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#4" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l5" class="line-number">5
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#5" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l6" class="line-number">6
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#6" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l7" class="line-number">7
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#7" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l8" class="line-number">8
<div class="blame-strip c2" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#8" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l9" class="line-number">9
<div class="blame-strip c1" data-blame="479d43ad5339d5d65f4064ebb9b77727b83d1aec#%#9" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l10" class="line-number">10
<div class="blame-strip c2" data-blame="644e1b42f851e83598451542be0a5af39578583d#%#10" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l11" class="line-number">11
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#12" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l12" class="line-number">12
<div class="blame-strip c2" data-blame="30b2b7ce44c7bebc55a05d761f2e3e6d6d45d86e#%#13" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l13" class="line-number">13
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#14" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l14" class="line-number">14
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#15" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l15" class="line-number">15
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#16" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l16" class="line-number">16
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#17" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l17" class="line-number">17
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#18" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l18" class="line-number">18
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#19" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l19" class="line-number">19
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#20" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l20" class="line-number">20
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#21" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l21" class="line-number">21
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#22" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l22" class="line-number">22
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#23" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l23" class="line-number">23
<div class="blame-strip c2" data-blame="4c1bb0403eb959d2ca6da6b61c6f522389cfb7ae#%#23" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l24" class="line-number">24
<div class="blame-strip c2" data-blame="4c1bb0403eb959d2ca6da6b61c6f522389cfb7ae#%#24" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l25" class="line-number">25
<div class="blame-strip c2" data-blame="4c1bb0403eb959d2ca6da6b61c6f522389cfb7ae#%#25" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l26" class="line-number">26
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#26" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l27" class="line-number">27
<div class="blame-strip c2" data-blame="21e70729495f6509b7fcc9debca900d20c8644ec#%#27" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l28" class="line-number">28
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#33" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l29" class="line-number">29
<div class="blame-strip c2" data-blame="4c1bb0403eb959d2ca6da6b61c6f522389cfb7ae#%#29" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l30" class="line-number">30
<div class="blame-strip c1" data-blame="d94b50a890eeab57e4eb4e086369c30a20efeaa4#browser/devtools/webaudioeditor/panel.js#38" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l31" class="line-number">31
<div class="blame-strip c2" data-blame="4c1bb0403eb959d2ca6da6b61c6f522389cfb7ae#%#31" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l32" class="line-number">32
<div class="blame-strip c2" data-blame="4c1bb0403eb959d2ca6da6b61c6f522389cfb7ae#%#32" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l33" class="line-number">33
<div class="blame-strip c2" data-blame="4c1bb0403eb959d2ca6da6b61c6f522389cfb7ae#%#33" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l34" class="line-number">34
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#50" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l35" class="line-number">35
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#51" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l36" class="line-number">36
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#52" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l37" class="line-number">37
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#53" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l38" class="line-number">38
<div class="blame-strip c2" data-blame="f74b4d25f0905a6cb786b68b3b8b5fa5ab6d95c3#browser/devtools/webaudioeditor/panel.js#55" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l39" class="line-number">39
<div class="blame-strip c2" data-blame="f74b4d25f0905a6cb786b68b3b8b5fa5ab6d95c3#browser/devtools/webaudioeditor/panel.js#56" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l40" class="line-number">40
<div class="blame-strip c2" data-blame="f74b4d25f0905a6cb786b68b3b8b5fa5ab6d95c3#browser/devtools/webaudioeditor/panel.js#57" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l41" class="line-number">41
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#55" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l42" class="line-number">42
<div class="blame-strip c2" data-blame="6a7d7e5b8c26013494dcefaea5a797d4863e613f#%#58" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l43" class="line-number">43
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#57" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l44" class="line-number">44
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#58" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l45" class="line-number">45
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#59" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l46" class="line-number">46
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#60" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l47" class="line-number">47
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#61" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l48" class="line-number">48
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#62" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l49" class="line-number">49
<div class="blame-strip c2" data-blame="6ec96fa315297c1226441953463b8d6d11cb0dab#browser/devtools/webaudioeditor/panel.js#64" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l50" class="line-number">50
<div class="blame-strip c2" data-blame="6ec96fa315297c1226441953463b8d6d11cb0dab#browser/devtools/webaudioeditor/panel.js#65" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l51" class="line-number">51
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#63" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l52" class="line-number">52
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#64" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l53" class="line-number">53
<div class="blame-strip c2" data-blame="ceaeb9355094af9bb68cce56902cf39086795fe0#%#53" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
<span id="l54" class="line-number">54
<div class="blame-strip c1" data-blame="c4cedfbea194d857d3366ef8b871b60c4ac317cf#browser/devtools/webaudioeditor/panel.js#66" role="button" aria-label="blame" aria-expanded="false"></div>
</span>
      </td>
      <td class="code">
<pre><code id="line-1" aria-labelledby="1"><span class="syn_comment" >/* -*- indent-tabs-mode: nil; js-indent-level: 2 -*- */</span>
</code><code id="line-2" aria-labelledby="2"><span class="syn_comment" >/* vim: set ft=javascript ts=2 et sw=2 tw=80: */</span>
</code><code id="line-3" aria-labelledby="3"><span class="syn_comment" >/* This Source Code Form is subject to the terms of the Mozilla Public</span>
</code><code id="line-4" aria-labelledby="4"><span class="syn_comment" > * License, v. 2.0. If a copy of the MPL was not distributed with this</span>
</code><code id="line-5" aria-labelledby="5"><span class="syn_comment" > * file, You can obtain one at <a href="http://mozilla.org/MPL/2.0/">http://mozilla.org/MPL/2.0/</a>. */</span>
</code><code id="line-6" aria-labelledby="6"><span class="syn_string" >"use strict"</span>;
</code><code id="line-7" aria-labelledby="7">
</code><code id="line-8" aria-labelledby="8"><span class="syn_reserved" >const</span> { <span class="syn_def" data-symbols="#Cc" data-i="0" >Cc</span>, <span class="syn_def" data-symbols="#Ci" data-i="1" >Ci</span>, <span class="syn_def" data-symbols="#Cu" data-i="2" >Cu</span>, <span class="syn_def" data-symbols="#Cr" data-i="3" >Cr</span> } = <span data-symbols="#require" data-i="4" >require</span>(<span class="syn_string" >"chrome"</span>);
</code><code id="line-9" aria-labelledby="9"><span class="syn_reserved" >const</span> <span class="syn_def" data-symbols="#EventEmitter" data-i="5" >EventEmitter</span> = <span data-symbols="#require" data-i="6" >require</span>(<span class="syn_string" >"devtools/shared/event-emitter"</span>);
</code><code id="line-10" aria-labelledby="10"><span class="syn_reserved" >const</span> { <span class="syn_def" data-symbols="#WebAudioFront" data-i="7" >WebAudioFront</span> } = <span data-symbols="#require" data-i="8" >require</span>(<span class="syn_string" >"devtools/shared/fronts/webaudio"</span>);
</code><code id="line-11" aria-labelledby="11">
</code><code id="line-12" aria-labelledby="12"><span class="syn_reserved" >function</span> <span class="syn_def" data-symbols="#WebAudioEditorPanel" data-i="9" >WebAudioEditorPanel</span>(<span data-symbols="7326-0" >iframeWindow</span>, <span data-symbols="7326-1" >toolbox</span>) {
</code><code id="line-13" aria-labelledby="13">  <span class="syn_reserved" >this</span>.<span data-symbols="#panelWin" data-i="10" >panelWin</span> = <span data-symbols="7326-0" >iframeWindow</span>;
</code><code id="line-14" aria-labelledby="14">  <span class="syn_reserved" >this</span>.<span data-symbols="#_toolbox" data-i="11" >_toolbox</span> = <span data-symbols="7326-1" >toolbox</span>;
</code><code id="line-15" aria-labelledby="15">  <span class="syn_reserved" >this</span>.<span data-symbols="#_destroyer" data-i="12" >_destroyer</span> = <span class="syn_reserved" >null</span>;
</code><code id="line-16" aria-labelledby="16">
</code><code id="line-17" aria-labelledby="17">  <span data-symbols="#EventEmitter" data-i="13" >EventEmitter</span>.<span data-symbols="#decorate,EventEmitter#decorate" data-i="14" >decorate</span>(<span class="syn_reserved" >this</span>);
</code><code id="line-18" aria-labelledby="18">}
</code><code id="line-19" aria-labelledby="19">
</code><code id="line-20" aria-labelledby="20"><span data-symbols="#exports" data-i="15" >exports</span>.<span data-symbols="#WebAudioEditorPanel,exports#WebAudioEditorPanel" data-i="16" >WebAudioEditorPanel</span> = <span data-symbols="#WebAudioEditorPanel" data-i="17" >WebAudioEditorPanel</span>;
</code><code id="line-21" aria-labelledby="21">
</code><code id="line-22" aria-labelledby="22"><span data-symbols="#WebAudioEditorPanel" data-i="18" >WebAudioEditorPanel</span>.<span data-symbols="#prototype,WebAudioEditorPanel#prototype" data-i="19" >prototype</span> = {
</code><code id="line-23" aria-labelledby="23">  <span class="syn_def syn_def" data-symbols="#open,WebAudioEditorPanel#open" data-i="20" >open</span>: async <span class="syn_reserved" >function</span>() {
</code><code id="line-24" aria-labelledby="24">    <span class="syn_reserved" >this</span>.<span data-symbols="#panelWin,WebAudioEditorPanel#panelWin" data-i="21" >panelWin</span>.<span data-symbols="#gToolbox" data-i="22" >gToolbox</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#_toolbox,WebAudioEditorPanel#_toolbox" data-i="23" >_toolbox</span>;
</code><code id="line-25" aria-labelledby="25">    <span class="syn_reserved" >this</span>.<span data-symbols="#panelWin,WebAudioEditorPanel#panelWin" data-i="24" >panelWin</span>.<span data-symbols="#gTarget" data-i="25" >gTarget</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#target,WebAudioEditorPanel#target" data-i="26" >target</span>;
</code><code id="line-26" aria-labelledby="26">
</code><code id="line-27" aria-labelledby="27">    <span class="syn_reserved" >this</span>.<span data-symbols="#panelWin,WebAudioEditorPanel#panelWin" data-i="27" >panelWin</span>.<span data-symbols="#gFront" data-i="28" >gFront</span> = await <span class="syn_reserved" >this</span>.<span data-symbols="#target,WebAudioEditorPanel#target" data-i="29" >target</span>.<span data-symbols="#getFront" data-i="30" >getFront</span>(<span class="syn_string" >"webaudio"</span>);
</code><code id="line-28" aria-labelledby="28">
</code><code id="line-29" aria-labelledby="29">    await <span class="syn_reserved" >this</span>.<span data-symbols="#panelWin,WebAudioEditorPanel#panelWin" data-i="31" >panelWin</span>.<span data-symbols="#startupWebAudioEditor" data-i="32" >startupWebAudioEditor</span>();
</code><code id="line-30" aria-labelledby="30">
</code><code id="line-31" aria-labelledby="31">    <span class="syn_reserved" >this</span>.<span data-symbols="#isReady,WebAudioEditorPanel#isReady" data-i="33" >isReady</span> = <span class="syn_reserved" >true</span>;
</code><code id="line-32" aria-labelledby="32">    <span class="syn_reserved" >this</span>.<span data-symbols="#emit,WebAudioEditorPanel#emit" data-i="34" >emit</span>(<span class="syn_string" >"ready"</span>);
</code><code id="line-33" aria-labelledby="33">    <span class="syn_reserved" >return</span> <span class="syn_reserved" >this</span>;
</code><code id="line-34" aria-labelledby="34">  },
</code><code id="line-35" aria-labelledby="35">
</code><code id="line-36" aria-labelledby="36">  <span class="syn_comment" >// DevToolPanel API</span>
</code><code id="line-37" aria-labelledby="37">
</code><code id="line-38" aria-labelledby="38">  <span class="syn_reserved" >get</span> <span class="syn_def syn_def" data-symbols="#target,WebAudioEditorPanel#target" data-i="35" >target</span>() {
</code><code id="line-39" aria-labelledby="39">    <span class="syn_reserved" >return</span> <span class="syn_reserved" >this</span>.<span data-symbols="#_toolbox,WebAudioEditorPanel#_toolbox" data-i="36" >_toolbox</span>.<span data-symbols="#target" data-i="37" >target</span>;
</code><code id="line-40" aria-labelledby="40">  },
</code><code id="line-41" aria-labelledby="41">
</code><code id="line-42" aria-labelledby="42">  <span class="syn_def syn_def" data-symbols="#destroy,WebAudioEditorPanel#destroy" data-i="38" >destroy</span>: <span class="syn_reserved" >function</span>() {
</code><code id="line-43" aria-labelledby="43">    <span class="syn_comment" >// Make sure this panel is not already destroyed.</span>
</code><code id="line-44" aria-labelledby="44">    <span class="syn_reserved" >if</span> (<span class="syn_reserved" >this</span>.<span data-symbols="#_destroyer,WebAudioEditorPanel#_destroyer" data-i="39" >_destroyer</span>) {
</code><code id="line-45" aria-labelledby="45">      <span class="syn_reserved" >return</span> <span class="syn_reserved" >this</span>.<span data-symbols="#_destroyer,WebAudioEditorPanel#_destroyer" data-i="40" >_destroyer</span>;
</code><code id="line-46" aria-labelledby="46">    }
</code><code id="line-47" aria-labelledby="47">
</code><code id="line-48" aria-labelledby="48">    <span class="syn_reserved" >return</span> <span class="syn_reserved" >this</span>.<span data-symbols="#_destroyer,WebAudioEditorPanel#_destroyer" data-i="41" >_destroyer</span> = <span class="syn_reserved" >this</span>.<span data-symbols="#panelWin,_destroyer#panelWin" data-i="42" >panelWin</span>.<span data-symbols="#shutdownWebAudioEditor" data-i="43" >shutdownWebAudioEditor</span>().<span data-symbols="#then" data-i="44" >then</span>(() => {
</code><code id="line-49" aria-labelledby="49">      <span class="syn_comment" >// Destroy front to ensure packet handler is removed from client</span>
</code><code id="line-50" aria-labelledby="50">      <span class="syn_reserved" >this</span>.<span data-symbols="#panelWin,_destroyer#panelWin" data-i="45" >panelWin</span>.<span data-symbols="#gFront" data-i="46" >gFront</span>.<span data-symbols="#destroy" data-i="47" >destroy</span>();
</code><code id="line-51" aria-labelledby="51">      <span class="syn_reserved" >this</span>.<span data-symbols="#emit,_destroyer#emit" data-i="48" >emit</span>(<span class="syn_string" >"destroyed"</span>);
</code><code id="line-52" aria-labelledby="52">    });
</code><code id="line-53" aria-labelledby="53">  },
</code><code id="line-54" aria-labelledby="54">};
</code></pre>      </td>
    </tr>
  </tbody>
</table>
<script>var ANALYSIS_DATA = [[[],[{"pretty":"property Cc","sym":"#Cc"}]],[[],[{"pretty":"property Ci","sym":"#Ci"}]],[[],[{"pretty":"property Cu","sym":"#Cu"}]],[[],[{"pretty":"property Cr","sym":"#Cr"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property EventEmitter","sym":"#EventEmitter"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property WebAudioFront","sym":"#WebAudioFront"}]],[[],[{"pretty":"property require","sym":"#require"}]],[[],[{"pretty":"property WebAudioEditorPanel","sym":"#WebAudioEditorPanel"}]],[[],[{"pretty":"property panelWin","sym":"#panelWin"}]],[[],[{"pretty":"property _toolbox","sym":"#_toolbox"}]],[[{"pretty":"_destroyer","sym":"#_destroyer"}],[{"pretty":"property _destroyer","sym":"#_destroyer"}]],[[],[{"pretty":"property EventEmitter","sym":"#EventEmitter"}]],[[{"pretty":"decorate","sym":"#decorate"}],[{"pretty":"property decorate","sym":"#decorate"},{"pretty":"property EventEmitter.decorate","sym":"EventEmitter#decorate"}]],[[],[{"pretty":"property exports","sym":"#exports"}]],[[{"pretty":"WebAudioEditorPanel","sym":"#WebAudioEditorPanel"}],[{"pretty":"property WebAudioEditorPanel","sym":"#WebAudioEditorPanel"},{"pretty":"property exports.WebAudioEditorPanel","sym":"exports#WebAudioEditorPanel"}]],[[{"pretty":"WebAudioEditorPanel","sym":"#WebAudioEditorPanel"}],[{"pretty":"property WebAudioEditorPanel","sym":"#WebAudioEditorPanel"}]],[[{"pretty":"WebAudioEditorPanel","sym":"#WebAudioEditorPanel"}],[{"pretty":"property WebAudioEditorPanel","sym":"#WebAudioEditorPanel"}]],[[],[{"pretty":"property prototype","sym":"#prototype"},{"pretty":"property WebAudioEditorPanel.prototype","sym":"WebAudioEditorPanel#prototype"}]],[[],[{"pretty":"property open","sym":"#open"},{"pretty":"property WebAudioEditorPanel.open","sym":"WebAudioEditorPanel#open"}]],[[],[{"pretty":"property panelWin","sym":"#panelWin"},{"pretty":"property WebAudioEditorPanel.panelWin","sym":"WebAudioEditorPanel#panelWin"}]],[[],[{"pretty":"property gToolbox","sym":"#gToolbox"}]],[[],[{"pretty":"property _toolbox","sym":"#_toolbox"},{"pretty":"property WebAudioEditorPanel._toolbox","sym":"WebAudioEditorPanel#_toolbox"}]],[[],[{"pretty":"property panelWin","sym":"#panelWin"},{"pretty":"property WebAudioEditorPanel.panelWin","sym":"WebAudioEditorPanel#panelWin"}]],[[],[{"pretty":"property gTarget","sym":"#gTarget"}]],[[{"pretty":"WebAudioEditorPanel.target","sym":"WebAudioEditorPanel#target"}],[{"pretty":"property target","sym":"#target"},{"pretty":"property WebAudioEditorPanel.target","sym":"WebAudioEditorPanel#target"}]],[[],[{"pretty":"property panelWin","sym":"#panelWin"},{"pretty":"property WebAudioEditorPanel.panelWin","sym":"WebAudioEditorPanel#panelWin"}]],[[],[{"pretty":"property gFront","sym":"#gFront"}]],[[{"pretty":"WebAudioEditorPanel.target","sym":"WebAudioEditorPanel#target"}],[{"pretty":"property target","sym":"#target"},{"pretty":"property WebAudioEditorPanel.target","sym":"WebAudioEditorPanel#target"}]],[[],[{"pretty":"property getFront","sym":"#getFront"}]],[[],[{"pretty":"property panelWin","sym":"#panelWin"},{"pretty":"property WebAudioEditorPanel.panelWin","sym":"WebAudioEditorPanel#panelWin"}]],[[{"pretty":"startupWebAudioEditor","sym":"#startupWebAudioEditor"}],[{"pretty":"property startupWebAudioEditor","sym":"#startupWebAudioEditor"}]],[[],[{"pretty":"property isReady","sym":"#isReady"},{"pretty":"property WebAudioEditorPanel.isReady","sym":"WebAudioEditorPanel#isReady"}]],[[],[{"pretty":"property emit","sym":"#emit"},{"pretty":"property WebAudioEditorPanel.emit","sym":"WebAudioEditorPanel#emit"}]],[[],[{"pretty":"property target","sym":"#target"},{"pretty":"property WebAudioEditorPanel.target","sym":"WebAudioEditorPanel#target"}]],[[],[{"pretty":"property _toolbox","sym":"#_toolbox"},{"pretty":"property WebAudioEditorPanel._toolbox","sym":"WebAudioEditorPanel#_toolbox"}]],[[],[{"pretty":"property target","sym":"#target"}]],[[],[{"pretty":"property destroy","sym":"#destroy"},{"pretty":"property WebAudioEditorPanel.destroy","sym":"WebAudioEditorPanel#destroy"}]],[[{"pretty":"_destroyer","sym":"#_destroyer"}],[{"pretty":"property _destroyer","sym":"#_destroyer"},{"pretty":"property WebAudioEditorPanel._destroyer","sym":"WebAudioEditorPanel#_destroyer"}]],[[{"pretty":"_destroyer","sym":"#_destroyer"}],[{"pretty":"property _destroyer","sym":"#_destroyer"},{"pretty":"property WebAudioEditorPanel._destroyer","sym":"WebAudioEditorPanel#_destroyer"}]],[[{"pretty":"_destroyer","sym":"#_destroyer"}],[{"pretty":"property _destroyer","sym":"#_destroyer"},{"pretty":"property WebAudioEditorPanel._destroyer","sym":"WebAudioEditorPanel#_destroyer"}]],[[],[{"pretty":"property panelWin","sym":"#panelWin"},{"pretty":"property _destroyer.panelWin","sym":"_destroyer#panelWin"}]],[[{"pretty":"shutdownWebAudioEditor","sym":"#shutdownWebAudioEditor"}],[{"pretty":"property shutdownWebAudioEditor","sym":"#shutdownWebAudioEditor"}]],[[],[{"pretty":"property then","sym":"#then"}]],[[],[{"pretty":"property panelWin","sym":"#panelWin"},{"pretty":"property _destroyer.panelWin","sym":"_destroyer#panelWin"}]],[[],[{"pretty":"property gFront","sym":"#gFront"}]],[[],[{"pretty":"property destroy","sym":"#destroy"}]],[[],[{"pretty":"property emit","sym":"#emit"},{"pretty":"property _destroyer.emit","sym":"_destroyer#emit"}]]];</script>
    </div>
  <div id="foot" class="footer">
    This page was generated by Searchfox <span class="pretty-date" data-datetime="Wed, 13 Feb 2019 15:28:42 +0000"></span>.
  </div>
  <span id="data" data-root="/" data-search="/mozilla-central/search" data-tree="mozilla-central" data-path="devtools/client/webaudioeditor/panel.js"></span>
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
