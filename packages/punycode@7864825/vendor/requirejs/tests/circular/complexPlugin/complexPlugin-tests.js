require({baseUrl:require.isBrowser?"./":"./circular/complexPlugin"},["require","main"],function(e,i){doh.register("circularComplexPlugin",[function(e){e.is("main",i.name),e.is("viewport",i.viewport.name),e.is("viewportTemplate",i.viewport.template),e.is("toolbar",i.viewport.toolbar.name),e.is("toolbarTemplate",i.viewport.toolbar.template),e.is("helper",i.helper.name)}]),doh.run()});