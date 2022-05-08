//存放交易页面的信息
import { reqAddressInfo, reqOrderInfo } from "@/api";

const state = {
  address: [],
  orderInfo: {},
};
const actions = {
  //获取用户地址信息
  async getUserAddress({ commit }) {
    let result = await reqAddressInfo();
    if (result.code == 200) {
      commit("GETUSERADDRESS", result.data);
    }
  },
  //获取商品清单
  async getOrderInfo({ commit }) {
    let result = await reqOrderInfo();
    if (result.code == 200) {
      commit("GETORDERINFO", result.data);
    }
  },
};
const mutations = {
  GETUSERADDRESS(state, data) {
    state.address = data;
  },
  GETORDERINFO(state, data) {
    state.orderInfo = data;
  },
};
const getters = {};
export default {
  state,
  actions,
  mutations,
  getters,
};
