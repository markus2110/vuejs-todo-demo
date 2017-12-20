//import './less/styles.less';
import Vue      from 'vue';

import router       from '@/App/Routing/routing';
import store        from "@/App/Store/store";
import translation  from "@/App/i18n/translation";


import appView  from "@/App/App.vue";



new Vue({
    router: router,
    store : store,
    el: '#application-wrapper',

    //data : () => { return {locale : "enGB"}},

    render: (createElement) => createElement(appView)
});

//

//
//
//// Views
////const Desktop   = function(){ return import("./App/Layout/Theme/Desktop.vue") };
////const Tablet    = function(){ return import("./App/Layout/Theme/Tablet.vue") };
////const Mobile    = function(){ return import("./App/Layout/Theme/Mobile.vue") };
//
//
//const App = function(){
//    this.init();
//}
//
//App.prototype = {
//
//    vue : null,
//
//
//    screenHeight:   window.innerHeight,
//    screenWidth :   window.innerWidth,
//
//    init : function(){
//        this.initListeners();
//    },
//
//    initListeners : function(){
//        window.addEventListener("resize", (e) => { this.onResize(e) });
//        return this;
//    },
//
//
//    onResize : function(e){
//        setTimeout(() => {
//            this.screenHeight   = window.innerHeight;
//            this.screenWidth    = window.innerWidth;
//            this.onResizeDone();
//        }, 500);
//    },
//
//    onResizeDone : function(){
//        this.vue.$forceUpdate();
//    },
//
//
//    start : function(){
//
//        this.vue = new Vue({
//            router: router,
//            store : store,
//            el: '#application-wrapper',
//            render: (h) => {
//
//                return h(AppView);
//
////                if(this.screenWidth >= 1024){
////                    return h(Desktop);
////                }
////                else if(this.screenWidth < 1024 && this.screenWidth >= 768){
////                    return h(Tablet);
////                }
////                else{
////                    return h(Mobile);
////                }
//            }
//
//        });
//
//    },
//};
//
//new App().start();