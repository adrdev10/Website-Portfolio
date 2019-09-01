import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueRouter from 'vue-router';

import ProjectBox from "./components/ProjectBox";
import BaseComponent from "./components/BaseComponent";

Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(VueRouter);


const router = new VueRouter({
  base: '/',
  mode: "history",
  routes: [
    {path:'/', component: BaseComponent},
    {path: '/projects', component: ProjectBox, props: true}
  ] // short for `routes: routes`
});

new Vue({
   render: h => h(App),
   router,
}).$mount('#app');
