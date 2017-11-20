
export default  {

    isNew :     false,
    category :  null,
    title :     null,
    project :   null,
    done :      false,
    tasks :     [{
            name : "Hallo",
            done : false
    }],


    /**
     * 
     * @returns {Boolean}
     */
    getIsNew : function(){
        return this.isNew;
    },

    /**
     *
     * @returns {String}
     */
    getCategory : function(){
        return this.category;
    },

    /**
     *
     * @returns {String}
     */
    getTitle : function(){
        return this.title;
    },

    /**
     *
     * @returns {String}
     */
    getProject : function(){
        return this.project;
    },

    /**
     *
     * @returns {Boolean}
     */
    getDone : function(){
        return this.done;
    },

    /**
     *
     * @returns {Boolean}
     */
    isDone : function(){
        return (this.done === true);
    },

    /**
     *
     * @param {type} value
     * @returns {default}
     */
    setIsNew : function(value){
        this.isNew = value;
        return this;
    },

    /**
     *
     * @param {string} value
     * @returns {this}
     */
    setCategory : function(value){
        this.category = value;
        return this;
    },

    /**
     *
     * @param {type} value
     * @returns {default}
     */
    setTitle : function(value){
        this.title = value;
        return this;
    },

    /**
     *
     * @param {type} value
     * @returns {default}
     */
    setProject : function(value){
        this.project = value;
        return this;
    },

    /**
     *
     * @param {type} value
     * @returns {default}
     */
    setDone : function(value){
        this.done = value;
        return this;
    }
};


