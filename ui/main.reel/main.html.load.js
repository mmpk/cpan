montageDefine("803caed","ui/main.reel/main.html",{text:'<!DOCTYPE html><html><head>\n    <meta charset=utf-8>\n    <title>\n        Main\n    </title>\n    <link rel=stylesheet href=main.css>\n    <script type=text/montage-serialization>{"owner":{"properties":{"element":{"#":"main"}}},"actionEventListener":{"prototype":"montage/core/event/action-event-listener","properties":{"action":"show","handler":{"@":"overlay"}},"_dev":{"isHidden":true}},"button":{"prototype":"digit/ui/button.reel","properties":{"element":{"#":"button"},"enabled":true,"label":"Login "},"listeners":[{"type":"action","useCapture":false,"listener":{"@":"actionEventListener"}}]},"button2":{"prototype":"digit/ui/button.reel","properties":{"element":{"#":"button2"},"enabled":true,"label":"Sign up"}},"button3":{"prototype":"digit/ui/button.reel","properties":{"element":{"#":"button3"},"enabled":true,"label":""},"listeners":[{"type":"action","useCapture":false,"listener":{"@":"owner"}}]},"listview":{"prototype":"ui/listview.reel","properties":{"element":{"#":"listview"}}},"loginForm":{"prototype":"ui/login-form.reel","properties":{"element":{"#":"loginForm"}}},"overlay":{"prototype":"montage/ui/overlay.reel","properties":{"element":{"#":"overlay"}}}}</script>\n</head>\n<body>\n    <div data-montage-id=main data-montage-skin=wireframeX class=Main>\n        <div data-montage-id=overlay>\n            <div data-montage-id=loginForm></div>\n        </div>\n        <div class=content>  \n        <header>\n            <div>\n                <i class="fa fa-cube fa-3x"></i>\n            </div>\n            <h3 id=logo>\n                Sitename\n            </h3>\n            <ul>\n                <li>\n                    Home\n                </li>\n                <li>\n                    About\n                </li>\n                <li>\n                    Product\n                </li>\n                <li>\n                    Price\n                </li>\n            </ul>\n            <div class=wrap>\n                <button data-montage-id=button>\n                    <i class="fa fa-sign-in"></i>\n                </button>\n                <button data-montage-id=button2></button>\n   \n                <button data-montage-id=button3 class=nav_btn>\n                    <i class="fa fa-th"></i>\n                </button>\n            </div>\n        </header>\n        \n\n            <div data-montage-id=listview></div>\n            <div class=empty></div>\n        </div>\n\n        <footer>\n            <div>\n                <i class="fa fa-copyright"></i>\n                <i class="fa fa-trophy"></i>\n                <i class="fa fa-twitter"></i>\n            </div>\n        </footer>\n        \n    </div>\n\n</body></html>'});