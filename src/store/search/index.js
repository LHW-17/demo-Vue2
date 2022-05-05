//vuex模块化：search模块
import { reqGetSearchInfo } from "@/api";

const state = {
  searchList: {},
};
const actions = {
  //发请求获取search模块数据
  async getSearchList({ commit }, params = {}) {
    let result = await reqGetSearchInfo(params);
    if (result.code == 200) {
      commit("GETSEARCHLIST", result.data);
    }
  },
};
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList;
  },
};
//项目中getters主要作用是简化仓库中的数据
const getters = {
  //此处形参state是当前仓库中的state
  goodsList(state) {
    return state.searchList.goodsList || [];
  },
  trademarkList(state) {
    return state.searchList.trademarkList || [];
  },
  attrsList(state) {
    return state.searchList.attrsList || [];
  },
};
export default {
  state,
  actions,
  mutations,
  getters,
};
