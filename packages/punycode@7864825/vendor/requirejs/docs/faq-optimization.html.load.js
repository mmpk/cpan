montageDefine("7864825","vendor/requirejs/docs/faq-optimization.html",{text:'<html><head></head><body><div id=directory class=section>\n<h1>FAQ: RequireJS Optimizations</h1>\n<ul class="index mono">\n<li class=hbox><a href=#usage>How do I use the Optimization Tool?</a><span class="spacer boxFlex"></span><span class=sect>§ 1</span></li>\n<li class=hbox><a href=#wrap>How can I provide a library to others that does not depend on RequireJS?</a><span class="spacer boxFlex"></span><span class=sect>§ 2</span></li>\n<li class=hbox><a href=#namespace>How can I namespace my code to play well in other people\'s pages?</a><span class="spacer boxFlex"></span><span class=sect>§ 3</span></li>\n<li class=hbox><a href=#priority>How can I download all script dependencies in parallel?</a><span class="spacer boxFlex"></span><span class=sect>§ 4</span></li>\n</ul>\n</div>\n\n<div class=section>\n<h2><a name=usage>How do I use the Optimization Tool?</a><span class=sectionMark>§ 1</span></h2>\n\n<p>See the <a href=optimization.html>general optimization page</a> for basic set-up. Also see the <a href=jquery.html>jQuery doc page</a> for a good way to set up your project, even if you are not using jQuery.</p>\n</div>\n\n\n<div class=section>\n<h2><a name=wrap>How can I provide a library to others that does not depend on RequireJS?</a><span class=sectionMark>§ 2</span></h2>\n\n<p>If you are building a library for use on web pages that may not use RequireJS or an AMD loader, you can use the optimizer to combine\nall your modules into one file, then wrap them in a function and use an AMD API shim. This allows you to ship code that does not ship with all\nof RequireJS, and allows you to export any kind of API that works on a plain web page without an AMD loader.</p>\n\n<p><a href=https://github.com/jrburke/almond>almond</a> is an AMD API shim that is very small, so it can be used in place of require.js\nwhen all of your modules are built into one file using the RequireJS optimizer. The\n<a href=https://github.com/jrburke/r.js/blob/master/build/example.build.js#L244>wrap</a> build config option will put a function\nwrapper around the code, or you can provide your own wrapper if you need to do extra logic.</p>\n\n<p>See the almond project for details on how to build with the API shim and with wrap.</p>\n\n<p>If you need to dynamically load code after a build, then using almond+wrap will not be sufficient as almond cannot dynamically\nload code. Instead, you may want to namespace your use of require/define. See next section.</p>\n</div>\n\n<div class=section>\n<h2><a name=namespace>How can I namespace my code to play well in other people\'s pages?</a><span class=sectionMark>§ 3</span></h2>\n\n<p>If you want to provide your code to web sites that may not use an AMD loader, and you need to dynamically load code,\ndoing a simple <a href=#wrap>one file build with a wrapper</a> is not enough. You also may want isolate your loading needs from\nthe page\'s AMD loader.</p>\n\n<p>There is a <a href=https://github.com/jrburke/r.js/blob/master/build/example.build.js#L159>namespace</a> build option that\ndoes the following:</p>\n\n<ul>\n    <li>Renames requirejs, require and define uses to have "namespace." in front of them.</li>\n    <li>If the file does an existence check for define, in the following form <code>typeof define === \'function\' &amp;&amp; define.amd</code>,\n    then it will prefix the define references with "namespace.".</li>\n    <li>If require.js is included in the built file, it will make sure it exposes the "namespace." versions of the API.</li>\n</ul>\n\n<p>Do not code your source with namespace.require()/namespace.define() calls, but rather use require()/define() as you\nnormally would, then use the optimizer to do the renaming.</p>\n\n</div>\n\n<div class=section>\n<h2><a name=priority>How can I download all script dependencies in parallel?</a><span class=sectionMark>§ 4</span></h2>\n\n<p>Using <a href="">require()</a> and <a href=api.html#define>define()</a> to define script modules and dependencies is an efficient syntax for indicating related code. However, for deploying code in the browser, it may not lead to the best overall performance. To find nested dependencies, a script has to be fetched, then a require() or define() call in that script might trigger other script downloads.</p>\n\n<p>The <a href=optimization.html>Optimization Tool</a> allows a quick way to <a href=optimization.html#onejs>build all your scripts into one file</a>, so only one script download is needed for your page.</p>\n\n<p>However, if you have many pages in your web app, it may make more sense to optimize your scripts into a set of two or three optimized layers:</p>\n\n<ul>\n<li>One layer for common toolkit code, like jQuery, Dojo, Prototype or MooTools (toolkit.js). It may make sense to roll this layer in with the appcommon.js layer.</li>\n<li>One layer for common web app code (appcommon.js)</li>\n<li>One layer for page-specific code  (page.js)</li>\n</ul>\n\n<p>Ideally you could do that layering after you finish development, and tune those layers for optimal, parallel download of the files, without having to change all your scripts.</p>\n\n<p>This is possible with RequireJS:</p>\n\n<ul>\n<li><a href=optimization.html#wholeproject>Optimize your project</a> to create the three script layers.</li>\n<li>Use the <a href=api.html#config><strong>priority</strong> config value</a> to pass the list of layers to priority download to the top-level require() call in the HTML file(s).</li>\n</ul>\n\n<p>Script modules/files specified in the config\'s priority array will be downloaded in parallel before any other script dependencies are traced. <b>Note:</b> resources loaded by loader plugins (like \'text!template.html\') <b>cannot</b> be specified in the priority array: the priority mechanism only works with regular JavaScript resources.</p>\n\n<p>This example builds on the <a href=download.html#samplejquery>sample jQuery project</a> to demonstrate the approach:</p>\n\n<p>Assume the project has the following structure:</p>\n\n<ul>\n<li>app.build.js (the build profile used by optimization tool)</li>\n<li>webapp\n<ul>\n<li>page1.html</li>\n<li>page2.html</li>\n<li>scripts\n<ul>\n<li>require.js (the loader)</li>\n<li>appcommon.js (used on both pages, "appcommon")</li>\n<li>jquery.js (used on both pages, "appcommon")</li>\n<li>page1.js (lists the dependencies for page 1)</li>\n<li>page2.js (lists the dependencies for page 2)</li>\n<li>object.js (used on both pages, "appcommon")</li>\n<li>event.js (used on both pages, "appcommon")</li>\n<li>widget.js (used on both pages, "appcommon")</li>\n<li>Dialog.js (used on both pages, "appcommon")</li>\n<li>Slider.js (used only on page 2)</li>\n<li>Tabs.js (used only on page 1)</li>\n</ul></li>\n</ul></li>\n<li>webapp-build\n<ul>\n<li>this directory will hold the optimized files</li>\n</ul></li>\n</ul>\n\n<p>page1.html might look like this:</p>\n\n<pre><code>&lt;!DOCTYPE html&gt;\n&lt;html&gt;\n    &lt;head&gt;\n        &lt;title&gt;Page 1&lt;/title&gt;\n        &lt;script src="scripts/require.js"&gt;&lt;/script&gt;\n        &lt;script&gt;\n            require.config({\n                priority: ["appcommon", "page1"]\n            });\n        &lt;/script&gt;\n    &lt;/head&gt;\n    &lt;body&gt;\n    &lt;/body&gt;\n&lt;/html&gt;\n</code></pre>\n\n<p>with appcommon.js looking like this:</p>\n\n<pre><code>define(["jquery", "object", "event", "widget", "Dialog"],\nfunction () {\n    //Just an empty function, this is a place holder\n    //module that will be optimized to include the\n    //common depenendencies listed in this module\'s dependency array.\n});\n</code></pre>\n\n<p>and page1.js looking like this:</p>\n\n<pre><code>define([ "jquery", "object", "event", "widget", "Dialog", "Tabs"],\nfunction ($,        object,   event,   widget,   Dialog,   Tabs) {\n    ...\n});\n</code></pre>\n\n<p>page2.html and page2.js would look similar, except referencing "page2" instead of "page1" and using "Slider" instead of "Tabs" in page2.js.</p>\n\n<p>The build profile, <strong>app.build.js</strong> would look like this:</p>\n\n<pre><code>({\n    appDir: "webapp",\n    baseUrl: "scripts",\n    dir: "webapp-build",\n    optimize: "none",\n    modules: [\n        {\n            name: "appcommon"\n        },\n        {\n            name: "page1",\n            exclude: ["appcommon"]\n        },\n        {\n            name: "page2",\n            exclude: ["appcommon"]\n        }\n    ]\n})\n</code></pre>\n\n<p>Once the build is run, it will generate the contents of <strong>webapp-build</strong> that look similar to <strong>webapp</strong>, except that the contents are optimized. appcommon.js will contain the common modules, and page1.js will have all the modules page1 needs, excluding appcommon\'s modules and their nested dependencies.</p>\n\n<p>The <strong>priority</strong> config value tells RequireJS to load appcommon.js and page1.js in parallel and wait before both are loaded before tracing dependencies. With those two files, along with require.js, all the dependencies in the page will be loaded with three requests, with the appcommon.js and page1.js scripts being loaded asynchronously and in parallel.</p>\n</div></body></html>'});