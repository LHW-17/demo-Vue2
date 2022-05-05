import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import TypeNav from "./components/TypeNav";
import Pagination from "./components/Pagination";
//引入vuex仓库
import store from "./store";
//引入swiper样式
import "swiper/css/swiper.css";
import Carousel from "./components/Carousel";
//三级联动注册为全局组件（因为在多处使用到）
Vue.component(TypeNav.name, TypeNav);
Vue.config.productionTip = false;
//注册轮播图为全局组件
Vue.component(Carousel.name, Carousel);
//注册分页器为全局组件
Vue.component(Pagination.name, Pagination);
import { reqCategoryList } from "./api/index";
//console.log(reqCategoryList());
//引入mock模块，模拟数据
import "./mock/mockServe.js";
new Vue({
  render: (h) => h(App),
  //注册路由，此时组件实例上会有$route, $router属性
  router: router,
  //注册vuex仓库:此时组件实例上会有$store
  store,
  //配置全局事件总线
  beforeCreate() {
    Vue.prototype.$bus = this;
  },
}).$mount("#app");
