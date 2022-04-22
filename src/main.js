import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TypeNav from "./components/TypeNav";
//引入vuex仓库
import store from "./store";

//三级联动注册为全局组件（因为在多处使用到）
Vue.component(TypeNav.name, TypeNav);
Vue.config.productionTip = false;
import { reqCategoryList } from "./api/index";
//console.log(reqCategoryList());
new Vue({
  render: (h) => h(App),
  //注册路由，此时组件实例上会有$route, $router属性
  router: router,
  //注册vuex仓库:此时组件实例上会有$store
  store,
}).$mount("#app");
