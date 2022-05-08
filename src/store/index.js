//配置vuex
import Vue from "vue";
import Vuex from "vuex";
//使用插件
Vue.use(Vuex);
/* //state存储数据
const state = {};
//actions，响应组件动作，处理业务逻辑和异步
const actions = {};
//mutation：修改state
const mutations = {};
//getters：计算属性
const getters = {}; */

//引入模块化的vuex
import home from "./home";
import search from "./search";
import detail from "./detail";
import shopCart from "./shopCart";
import user from "./user";
import trade from "./trade";
//对外暴露store类的一个实例对象
export default new Vuex.Store({
  //实现Vuex仓库模块化开发
  modules: {
    home,
    search,
    detail,
    shopCart,
    user,
    trade,
  },
});
