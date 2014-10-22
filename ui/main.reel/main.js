/**
 * @module ui/main.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;

/**
 * @class Main
 * @extends Component
 */
exports.Main = Component.specialize(/** @lends Main# */ {
    constructor: {
        value: function Main() {
            this.super();
        }
    },
    enterDocument: {
        value: function() {
            window.addEventListener("resize", function(){
                /*
                var footer = document.getElementsByTagName("footer")[0];
                var pos = footer.getBoundingClientRect()
                var height = window.innerHeight;

                height = height - pos.top;
                height = height - footer.offsetHeight;
                
                console.log(height)
                if (height > 0) {
                    footer.style.marginTop = height + 'px'
                }
                */
            })
        }
    },
    handleButton3Action: {
        value: function (event) {
                console.log("TOGGLE")
                var qq = document.querySelectorAll('header > ul')[0];
                qq.classList.toggle('expanded') 
        }
    }

});
