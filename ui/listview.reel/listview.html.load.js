montageDefine("803caed","ui/listview.reel/listview.html",{text:'<!DOCTYPE html><html><head>\n    <title></title>\n    <link rel=stylesheet type=text/css href=listview.css>\n    <script type=text/montage-serialization>{"owner":{"properties":{"element":{"#":"owner"}}},"button":{"prototype":"digit/ui/button.reel","properties":{"element":{"#":"button"},"enabled":true,"label":"Button"},"_dev":{"isHidden":true},"listeners":[{"type":"action","useCapture":false,"listener":{"@":"owner"}}]},"button1":{"prototype":"digit/ui/button.reel","properties":{"element":{"#":"button1"},"enabled":true,"label":"Button"},"bindings":{"label":{"<-":"@repetition:iteration.index"}},"listeners":[{"type":"action","useCapture":false,"listener":{"@":"owner"}}]},"button2":{"prototype":"digit/ui/toggle-switch.reel","properties":{"element":{"#":"button2"}},"bindings":{"checked":{"<-":"@list:iteration.object.data.checked"}}},"checkbox":{"prototype":"digit/ui/checkbox.reel","properties":{"element":{"#":"checkbox"},"checked":true},"bindings":{"checked":{"<->":"@list:iteration.object.data.checked"}}},"image":{"prototype":"digit/ui/image.reel","properties":{"element":{"#":"image"},"crossOrigin":null,"height":"50","width":"50"},"bindings":{"src":{"<-":"@list:iteration.object.data.thumbnail || @list:iteration.object.data.url"}}},"list":{"prototype":"montage/ui/repetition.reel","properties":{"element":{"#":"list"},"isSelectionEnabled":true},"bindings":{"contentController.length":{"<-":"@number.value"},"contentController.start":{"<-":"0"}}},"number":{"prototype":"digit/ui/number-field.reel","properties":{"element":{"#":"number"},"value":5}},"removeBtn":{"prototype":"digit/ui/button.reel","properties":{"element":{"#":"removeBtn"},"enabled":true,"label":"Delete checked"},"listeners":[{"type":"action","useCapture":false,"listener":{"@":"owner"}}]},"repetition":{"prototype":"montage/ui/repetition.reel","properties":{"element":{"#":"repetition"},"isSelectionEnabled":true,"selectedIndexes":[0]},"bindings":{"content":{"<-":"@list.content.slice(0, @list.content.length / @list.contentController.length)"}}},"text":{"prototype":"montage/ui/text.reel","properties":{"element":{"#":"text"},"value":"Text"},"bindings":{"value":{"<-":"@list:iteration.object.data.title"}}},"textField":{"prototype":"digit/ui/text-field.reel","properties":{"element":{"#":"textField"},"placeholderValue":"search"},"_dev":{"isHidden":true}}}</script>\n</head>\n<body>\n    <div data-montage-id=owner class=Listview>\n        <input data-montage-id=textField>\n        <button data-montage-id=button>\n\n        </button>\n        <span>\n            per page:\n        </span>\n        <input type=number data-montage-id=number>\n        <ul data-montage-id=list id=list>\n            <li>\n                <img data-montage-id=image class=list_img>\n                <p data-montage-id=text>\n\n                </p>\n                <div style="text-align: right">\n                    <input type=checkbox data-montage-id=checkbox>\n                    <span> one way binding -&gt; </span>\n                    <button data-montage-id=button2></button>\n                </div>\n            </li>\n        </ul>\n        <button data-montage-id=removeBtn>\n\n        </button>\n        <div class=mid>\n            <ul data-montage-id=repetition class=digit-ButtonGroup>\n                <button data-montage-id=button1>\n\n                </button>\n            </ul>\n        </div>\n    </div>\n\n</body></html>'});