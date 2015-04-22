montageDefine("7864825","vendor/requirejs/docs/node.html",{text:"<html><head></head><body><div id=directory class=section>\n<h1>RequireJS in Node</h1>\n\n    <ul class=\"index mono\">\n        <li class=hbox>\n            <a href=#1>Doesn't Node already have a module loader?</a><span class=\"spacer boxFlex\"></span><span class=sect>§ 1</span>\n        </li>\n        <li class=hbox>\n            <a href=#2>Can I use server modules written in the CommonJS module format?</a><span class=\"spacer boxFlex\"></span><span class=sect>§ 2</span>\n        </li>\n        <li class=hbox>\n            <a href=#3>How do I use it?</a><span class=\"spacer boxFlex\"></span><span class=sect>§ 3</span>\n        </li>\n    </ul>\n\n</div>\n\n<div class=section>\n<h2>\n<a name=1>Doesn't Node already have a module loader?</a>\n<span class=sectionMark>§ 1</span>\n</h2>\n\n<p>Yes <a href=http://nodejs.org>Node</a> does. That loader uses the CommonJS module format. The CommonJS module format is <a href=why.html>non-optimal for the browser</a>, and I do not agree with <a href=http://tagneto.blogspot.com/2010/03/commonjs-module-trade-offs.html>some of the trade-offs made in the CommonJS module format</a>. By using RequireJS on the server, you can use one format for all your modules, whether they are running server side or in the browser. That way you can preserve the speed benefits and easy debugging you get with RequireJS in the browser, and not have to worry about extra translation costs for moving between two formats.</p>\n\n<p>If you want to use define() for your modules but still run them in Node without needing to run RequireJS on the server, see <a href=#nodeModules>the section below</a> about using <a href=https://github.com/jrburke/amdefine>amdefine</a>.</p>\n\n</div>\n\n<div class=section>\n<h2>\n<a name=2>Can I use Node modules already written in the CommonJS module format?</a>\n<span class=sectionMark>§ 2</span></h2>\n\n<p>Yes! The Node adapter for RequireJS, called r.js, will use Node's implementation of require and Node's search paths if the module is not found with the configuration used by RequireJS, so you can continue to use your existing Node-based modules without having to do changes to them.</p>\n\n<p>RequireJS will use its <a href=api.html#config>Configuration Options</a> first to find modules. If RequireJS cannot find the module with its configuration, it is assumed to be a module that uses Node's type of modules and configuration. So, only configure module locations with RequireJS if they use the RequireJS API. For modules that expect Node's APIs and configuration/paths, just install them with a Node package manager, like <a href=\"http://npmjs.org/\">npm</a>, and do not configure their locations with RequireJS.</p>\n\n<p><strong>Best practice</strong>: Use npm to install Node-only packages/modules into the projects <strong>node_modules</strong> directory, but do not configure RequireJS to look inside the node_modules directory. Also avoid using relative module IDs to reference modules that are Node-only modules. So, <strong>do not</strong> do something like <strong>require(\"./node_modules/foo/foo\")</strong>.</p>\n\n<p>Even though RequireJS is an asynchronous loader in the browser, the RequireJS Node adapter loads modules synchronously in the Node environment to match the default loading behavior in Node.</p>\n\n<p>Finally, RequireJS in Node can only load modules that are on the local disk -- fetching modules across http, for instance, is not supported at this time.</p>\n\n</div>\n\n<div class=section>\n<h2>\n<a name=3>How do I use it?</a>\n<span class=sectionMark>§ 3</span>\n</h2>\n\n<p>There are two ways to get the Node adapter:</p>\n\n<h3 id=npm>npm</h3>\n<p>Use <a href=http://npmjs.org>npm</a> to install it:</p>\n\n<pre><code>npm install requirejs\n</code></pre>\n\n<p>This option will install the latest release.</p>\n\n<h3 id=rjs>Download r.js</h3>\n\n<p>If you prefer to not use npm, you can get r.js directly:</p>\n\n<ul>\n    <li>Download r.js from the <a href=download.html#rjs>the download page</a> and place it in your project.</li>\n    <li>Get the source from the <a href=https://github.com/jrburke/r.js>r.js repo</a> and either generate the r.js via \"node dist.js\", or grab a snapshot from the <strong>dist</strong> directory.</li>\n</ul>\n\n<h3 id=usage>Usage</h3><h3>\n\n<p>These instructions assume an npm installation of 'requirejs'. If you are using the r.js file directly, replace  require('requirejs') with require('./path/to/r.js'). Basic usage is:</p>\n\n<ul>\n    <li>require('requirejs')</li>\n    <li>Pass the main js file's \"require\" function in the configuration to requirejs.</li>\n</ul>\n\n<p>Example:</p>\n\n<pre><code>var requirejs = require('requirejs');\n\nrequirejs.config({\n    //Pass the top-level main.js/index.js require\n    //function to requirejs so that node modules\n    //are loaded relative to the top-level JS file.\n    nodeRequire: require\n});\n\nrequirejs(['foo', 'bar'],\nfunction   (foo,   bar) {\n    //foo and bar are loaded according to requirejs\n    //config, but if not found, then node's require\n    //is used to load the module.\n});\n</code></pre>\n\n<p>Be sure to read the <a href=#2>notes in section 2</a> about configuring RequireJS so that it can load node-only modules installed via npm.</p>\n\n<p>To see a more complete example that loads a module via RequireJS but uses Node-native modules for other things, see the <a href=https://github.com/jrburke/r.js/tree/master/tests/node/embedded>embedded test</a> in the r.js repo.</p>\n\n</h3><h3 id=nodeModules>Building node modules with AMD or RequireJS</h3>\n\n<p>If you want to code a module so that it works with RequireJS and in Node, without requiring users of your library in Node to use RequireJS, then you can use the <a href=https://github.com/jrburke/amdefine>amdefine</a> package to do this:</p>\n\n<pre><code>if (typeof define !== 'function') {\n    var define = require('amdefine')(module);\n}\n\ndefine(function(require) {\n    var dep = require('dependency');\n\n    //The value returned from the function is\n    //used as the module export visible to Node.\n    return function () {};\n});\n</code></pre>\n\n<p>The RequireJS optimizer, as of version 1.0.3, will strip out the use of 'amdefine' above, so it is safe to use this module for your web-based projects too. Just be sure to use <strong>the exact 'amdefine' if() test and contents as shown above</strong>. Differences in spaces/line breaks are allowed. See the <a href=https://github.com/jrburke/amdefine>amdefine project</a> for more information.</p>\n\n<p>If you want to use RequireJS directly to code your module, and then export a module value to node so that it can be used in other Node programs without requiring that app to use RequireJS, you can use the code mentioned above in the <a href=#usage>basic usage section</a> with a few modifications.</p>\n\n<p>It is best to set the baseUrl specifically to the directory containing the module, so that it works properly when nested inside a node_modules heirarchy. Then use Node's module.exports to export your module value:</p>\n\n<pre><code>var requirejs = require('requirejs');\n\nrequirejs.config({\n    //Use node's special variable __dirname to\n    //get the directory containing this file.\n    //Useful if building a library that will\n    //be used in node but does not require the\n    //use of node outside\n    baseUrl: __dirname,\n\n    //Pass the top-level main.js/index.js require\n    //function to requirejs so that node modules\n    //are loaded relative to the top-level JS file.\n    nodeRequire: require\n});\n\nrequirejs(['foo', 'bar'],\nfunction   (foo,   bar) {\n    //foo and bar are loaded according to requirejs\n    //config, but if not found, then node's require\n    //is used to load the module.\n\n    //Now export a value visible to Node.\n    module.exports = function () {};\n});\n</code></pre>\n\n<h3 id=optimizer>Using the optimizer as a node module</h3>\n\n<p>The node module also exposes the RequireJS Optimizer as an <strong>optimize</strong> method for using the <a href=optimization.html>RequireJS optimizer</a> via a function call instead of a command line tool:</p>\n\n<pre><code>var requirejs = require('requirejs');\n\nvar config = {\n    baseUrl: '../appDir/scripts',\n    name: 'main',\n    out: '../build/main-built.js'\n};\n\nrequirejs.optimize(config, function (buildResponse) {\n    //buildResponse is just a text output of the modules\n    //included. Load the built file for the contents.\n    //Use config.out to get the optimized file contents.\n    var contents = fs.readFileSync(config.out, 'utf8');\n});\n</code></pre>\n\n<p>This allows you to build other optimization workflows, like <a href=https://github.com/jrburke/r.js/tree/master/build/tests/http>a web builder</a> that can be used if you prefer to always develop with the \"one script file included before the &lt;/body&gt; tag\" approach. The optimizer running in Node if fairly fast, but for larger projects that do not want to regenerate the build for every browser request, but just if you modify a script that is part of the build. You could use Node's fs.watchFile() to watch files and then trigger the build when a file changes.</p>\n\n<h3 id=feedback>Feedback</h3>\n\n<p>If you find you have a problem, and want to report it, use the <a href=http://github.com/jrburke/r.js/issues>r.js GitHub Issues page</a>.</p>\n\n<p>If you want to discuss the RequireJS-Node integration, you can use the <a href=http://groups.google.com/group/requirejs>RequireJS Group</a>.</p>\n</div>\n</body></html>"});