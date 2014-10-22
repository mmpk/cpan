/**
 * @module ui/listview.reel
 * @requires montage/ui/component
 */
var Component = require("montage/ui/component").Component;
var Jsonp = require("montage-jsonp/core/jsonp").Jsonp;
/**
 * @class Listview
 * @extends Component
 */
exports.Listview = Component.specialize(/** @lends Listview# */ {
    constructor: {
        value: function Listview() {
           this.super();
            
        }
    },
    handleButtonAction: {
        value: function (event) {
            var list = this.templateObjects.list;
            var str = this.templateObjects.textField.value;

            Jsonp.makeRequest("http://www.reddit.com/r/"+str+".json?limit=30", "jsonp")
            .then(function(response) {                
                    list.content = response.data.children;
            })
        }
    },

    handleButton1Action: {
        value: function (event) {
            var list = this.templateObjects.list;
                list.contentController.start = (event.target.label * list.contentController.length)
        }
    },
    enterDocument: {
        value: function(first) {
            if(first){
                var list = this.templateObjects.list;
                    Jsonp.makeRequest("http://www.reddit.com/r/kittens.json?limit=30", "jsonp")
                    .then(function(response) {                
                        list.content = response.data.children;
                    })             
            }
        }
    }

});
