import Vue from "vue";
import navs from "./components/nav.vue";
import Router from "vue-router";
import "./components/router/css/style.css"
import list from "./components/list.vue";
import fen from "./components/fen.vue";
import jing from "./components/jing.vue";
import son from "./components/son.vue";
import index from "./components/index.vue";

// console.log(nav)

let router = new Router({
    linkActiveClass: "active",
    routes: [{
        name: "index",
        path: "/index",
        component: index
    }, {
        name: "navs",
        path: "/navs",
        component: navs
    }, {
        name: "list",
        path: "/list",
        component: list
    }, {
        name: "fen",
        path: "/fen",
        component: fen
    }, {
        name: "jing",
        path: "/jing",
        component: jing
    }, {
        name: "son",
        path: "/son",
        component: son
    }]
});
Vue.use(Router)
new Vue({
    el: "#app",
    router,
})