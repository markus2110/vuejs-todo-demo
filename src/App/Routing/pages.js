
export const
    Home    = function(){ return import(/* webpackChunkName: "page/home" */ '@/App/Pages/Home.vue') },
    Config  = function(){ return import(/* webpackChunkName: "page/config" */ '@/App/Pages/Config.vue') },
    About   = function(){ return import(/* webpackChunkName: "page/about" */ '@/App/Pages/About.vue') }
;




//const CreateTodo    = function(){ return import(/* webpackChunkName: "page/todo/create" */ './pages/ToDo/Create.vue') };