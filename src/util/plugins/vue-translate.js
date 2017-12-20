import View from "./switch.vue";

const enGB = {
    "config.page.head" : "ConfigPage",
    "config.page.subhead" : "Sub Config title"
};

const deDE = {
    "config.page.head" : "Konfiguration",
    "config.page.subhead" : "noch ein Titel"
};


const VueTranslate =  {

    defaultLocale: "en_GB",


    install : function (Vue, options){


        Vue.filter('trans', function(value){
            console.log(value);
        });


        Vue.prototype.$switchLocale = function(){
            this.$root.$data.locale = "deDE";
        };


        Vue.component('LanguageSwitch', View);
    }
}





export default VueTranslate;