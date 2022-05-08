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
//按需引入element-ui
import { MessageBox } from "element-ui";
//三级联动注册为全局组件（因为在多处使用到）
Vue.component(TypeNav.name, TypeNav);
Vue.config.productionTip = false;
//注册轮播图为全局组件
Vue.component(Carousel.name, Carousel);
//注册分页器为全局组件
Vue.component(Pagination.name, Pagination);

//按需引入element-ui并注册为全局组件
//一、挂载到原型
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
//二、注册为全局组件
//Vue.component(MessageBox.name, MessageBox);

import { reqCategoryList } from "./api/index";
//console.log(reqCategoryList());
//引入mock模块，模拟数据
import "./mock/mockServe.js";

//引入vue-lazyload插件
import VueLazyload from "vue-lazyload";

//注册插件
import RC from "./assets/RC.jpg";
Vue.use(VueLazyload, {
  //懒加载默认图片
  loading: RC,
});

//引入表单验证
import "./plugins/validate";

//统一接口api文件夹里的全部请求函数
import * as API from "@/api";
new Vue({
  render: (h) => h(App),
  //注册路由，此时组件实例上会有$route, $router属性
  router: router,
  //注册vuex仓库:此时组件实例上会有$store
  store,
  //配置全局事件总线 将api绑定到Vue原型中 后面组件使用api不需要引入
  beforeCreate() {
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API;
  },
}).$mount("#app");
