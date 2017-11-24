"use strict";


var DummyStorage = function(){
    



};


DummyStorage.prototype = {


    data : [],

    fetchAll : function(){
        var _this = this;
        window.setTimeout(function(){
            _this.data = _this.dummyData();

        }, 1000);
    },


    dummyData : function(){
        var dummyData = [];

        for(var index = 0; index <=10; index++){
            dummyData.push(   {
                done:           false,
                title:          "Dummy Title " + index,
                description:    "Dummy Description " + index
            });
        }

        return dummyData;
    }
};



export default DummyStorage;