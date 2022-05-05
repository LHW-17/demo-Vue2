//vuex模块化：home模块
import { reqCategoryList, reqGetBannerList, reqFloorList } from "@/api";
const state = {
  categoryList: [], //初始值,根据服务器返回数据类型设定类型
  bannerList: [],
  floorList: [],
};
const actions = {
  //通过api里的接口函数，向服务器发请求获取数据
  //因为函数返回的是promise对象，所以使用async和await来获取fulfill状态的结果
  //actions中的函数被调用时收到的第一个参数是上下文context，解构赋值为commit
  async categoryList({ commit }) {
    let result = await reqCategoryList();
    if (result.code == 200) {
      commit("CATEGORYLIST", result.data);
    }
  },
  //mock请求 获取banner数据
  async getBannerList({ commit }) {
    let result = await reqGetBannerList();
    if (result.code == 200) {
      //console.log(result);
      commit("GETBANNERLIST", result.data);
    }
  },
  //mock请求 获取floor数据
  async getFloorList({ commit }) {
    let result = await reqFloorList();
    if (result.code == 200) {
      commit("GETFLOORLIST", result.data);
    }
  },
};
const mutations = {
  CATEGORYLIST(state, categoryList) {
    categoryList.pop();
    state.categoryList = categoryList;
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList;
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList;
    //console.log(state.floorList);
  },
};
const getters = {};
export default {
  state,
  actions,
  mutations,
  getters,
};
