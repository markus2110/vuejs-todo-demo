"use strict";


var StorageFactory = function( storageType, model ){
    this.type = storageType;
    this.model = model;

    return this;
};


StorageFactory.prototype = {

    timeout : 2000,

    type : false,

    model : {},

    data : [],

    fetchData(){

        var _this = this;

        return new Promise(function(resolve, reject) {

            _this.type.fetchAll();

            var checkData = setInterval(function(){
                if(_this.type.data.length){
                    clearInterval(checkData);
                    _this.data = _this._mapToModel(_this.type.data);
                    resolve(_this.data);
                }
            }, 50);


            var abortInterval = setInterval(function(){
                clearInterval(checkData);
                clearInterval(abortInterval);
                reject(Error("It broke"));
            }, _this.timeout);

        });
    },

    add: function(record){
        this.data.push(record);
        return this;
    },

    update: function(record){
        var index = this.data.indexOf(record);
        this.data[index] = record;
        return this;
    },

    remove: function(record){
        var index = this.data.indexOf(record);
        this.data.splice(index, 1);
        return this;
    },


    _mapToModel : function( data ){

        var records = [];

        for(var row in data){
            records[row] = new this.model(data[row]);
        }

        return records;
    }
};


export default StorageFactory;