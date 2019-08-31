import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import VueRouter from 'vue-router';

import ProjectBox from "./components/ProjectBox";
import BaseComponent from "./components/BaseComponent";

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.config.productionTip = false;

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  base: '/',
  mode: "history",
  routes: [
    {path:'/', component: BaseComponent},
    {path: '/projects', component: ProjectBox}
  ] // short for `routes: routes`
});


new Vue({
   render: h => h(App),
   router,
}).$mount('#app');
