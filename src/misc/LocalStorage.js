"use strict";

const DEFAULT_STORAGE_TYPE = "localStorage";


var Storage = function( type, prefix ){

    if(type){
        this._storageType = type;
    }

    // Storage not supported
    if(!this._storageAvailable()){
        return false;
    }else{
        this._storage = window[this._storageType];
        this._storagePrefix = prefix || null;
    }
    
    return this;
};


Storage.prototype = {

    _storageType : DEFAULT_STORAGE_TYPE,

    _storage : null,

    _storagePrefix : null,

    get : function(key){
        return this._storage.getItem(this._prepareKey(key));
    },


    set : function(key, value){
        this._storage.setItem(this._prepareKey(key), value);
        return this;
    },


    flush : function(){
        for(var item in this._storage){
            if(typeof item === "string" && item.match(new RegExp(this._storagePrefix+"\:", 'gi'))){
                this._storage.removeItem(item);
            }
        }
        return this;
    },

    _prepareKey : function(key){
        key = (this._storagePrefix!==null) ? this._storagePrefix + ":" + key : key;
        return key;
    },

    _storageAvailable : function() {

        try {
            var storage = window[this._storageType],
                x = '__storage_test__'
            ;
            storage.setItem(x, x);
            storage.removeItem(x);
            return true;
        }catch(e) {
            console.warn(this._storageType + " undefined");
            return false;
        }
    }
    
};

export default Storage;