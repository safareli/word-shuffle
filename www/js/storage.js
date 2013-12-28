define(function (require) {

    "use strict";
    var isAvailable = function(){
        try {
            return 'localStorage' in window && window['localStorage'] !== null;
        } catch(e){
            return false;
        }
    };
    return{
        
        normalize:function(){
            if(!isAvailable()) return false;
            Storage.prototype.setObj = function(key, obj) {
                return this.setItem(key, JSON.stringify(obj))
            }
            Storage.prototype.getObj = function(key) {
                return JSON.parse(this.getItem(key))
            }
             return true;
        }
    };

});
