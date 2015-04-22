montageDefine("7864825","vendor/requirejs/docs/contributing.html",{text:'<html><head></head><body><div id=directory class=section>\n<h1>Contributing to RequireJS</h1>\n\n<ul class="index mono">\n<li class=hbox><a href=#whycla>Why a CLA?</a><span class="spacer boxFlex"></span><span class=sect>§ 1</span></li>\n<li class=hbox><a href=#codestyle>Code style</a><span class="spacer boxFlex"></span><span class=sect>§ 2</span></li>\n</ul>\n\n<span class=note>Note: <a href=http://github.com/jrburke/requirejs>The source for RequireJS is available on GitHub</a></span>\n\n<p>For something that is bigger than a one or two line fix:</p>\n\n<ol style=color:#222>\n<li><a href="http://help.github.com/forking/">Create your own fork of the code</a></li>\n<li>Do the changes in your fork</li>\n<li>If you like the change and think the project could use it:\n<ol style=color:#222;list-style-type:disc>\n<li>Be sure you have followed <a href=#codestyle>the code style for the project</a>.</li>\n<li>Sign a <a href="http://www.dojofoundation.org/about/cla/">Contributor License Agreement, CLA, with the Dojo Foundation</a> and send it to them.</li>\n<li>Send a pull request indicating that you have a CLA on file.</li>\n</ol></li>\n</ol>\n\n<p>For one or two line fixes, you can use the <a href=http://github.com/jrburke/requirejs/issues>RequireJS GitHub Issues page</a> to indicate the problem. You can also do the full fork/pull request as mentioned above, but a CLA is not needed for one or two line fixes.</p>\n\n<p>For discussions on code changes/additions/requests use the <a href=http://groups.google.com/group/requirejs>RequireJS Group</a>.</p>\n</div>\n\n<div class=section>\n<h2><a name=#whycla>Why a CLA?</a><span class=sectionMark>§ 1</span></h2>\n\n<p>CLAs are common with open source projects, with the Apache projects probably being the most well known. The goal is to allow RequireJS to be used in as many projects as possible, and for some companies, using only CLA-approved code is the best option.</p>\n\n<p>You still own the copyright on your contribution, the CLA just gives the most flexibility for licensing, and assures the lineage of the intellectual property. You should only submit patches for your own intellectual property, and not the intellectual property of others.</p>\n\n<p>Additional reading that may be helpful:</p>\n\n<ul>\n<li><a href=http://en.wikipedia.org/wiki/Contributor_License_Agreement>Wikipedia on CLAs</a></li>\n</ul>\n</div>\n\n<div class=section>\n<h2><a name=codestyle>Code Style</a><span class=sectionMark>§ 2</span></h2>\n\n<p><a href="http://jslint.com/">JSLint</a> is used for checking code style. It is also useful for avoiding some errors. The default settings on JSLint should be fine to use, in particular, 4 spaces for indentation, do not use tabs.</p>\n\n<p>camelCase should be used for all variables and file names. Avoid the use of underscores as word separators. This extends to things like CSS class names, IDs in test HTML documents, everything.</p>\n\n<p>Some exceptions to JSLint can be indicated at the top of each JS file, but they should be avoided when possible. Two common exceptions you may see in the source:</p>\n\n<ul>\n<li><strong>nomen: false</strong>, allow underscore at the beginning of some property/variable/function names.</li>\n<li><strong>plusplus: false</strong>, but only to allow for loops with an incrementing ++ value. Other uses of ++ should be avoided.</li>\n</ul>\n</div></body></html>'});