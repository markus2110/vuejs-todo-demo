"use strict";


var LocalStorage = function( prefix ){

//    // Storage not supported
//    if(!this._storageAvailable()){
//        return false;
//    }else{
//        this._storage = window['localStorage'];
//        this._storagePrefix = prefix || null;
//    }
//
//    return this;
};


LocalStorage.prototype = {

//    _storage : null,
//
//    _storagePrefix : null,
//
//
//    fetchAll : function(){
//
//    }
//
//
//    get : function(key){
//        return this._storage.getItem(this._prepareKey(key));
//    },
//
//
//    set : function(key, value){
//        this._storage.setItem(this._prepareKey(key), value);
//        return this;
//    },
//
//
//    flush : function(){
//        for(var item in this._storage){
//            if(typeof item === "string" && item.match(new RegExp(this._storagePrefix+"\:", 'gi'))){
//                this._storage.removeItem(item);
//            }
//        }
//        return this;
//    },
//
//    _prepareKey : function(key){
//        key = (this._storagePrefix!==null) ? this._storagePrefix + ":" + key : key;
//        return key;
//    },
//
//    _storageAvailable : function() {
//
//        try {
//            var storage = window[this._storageType],
//                x = '__storage_test__'
//            ;
//            storage.setItem(x, x);
//            storage.removeItem(x);
//            return true;
//        }catch(e) {
//            console.warn(this._storageType + " undefined");
//            return false;
//        }
//    }
    
};

export default LocalStorage;