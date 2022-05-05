//detail数据仓库
import { reqAddOrUpdateShopCart, reqGoodsInfo } from "@/api";
//封装的游客身份模块
import { getUUID } from "../../utils/uuid_token";
const state = {
  goodInfo: {},
  //游客临时身份
  uuid_token: getUUID(),
};
const actions = {
  //获取产品信息
  async getGoodInfo({ commit }, skuId) {
    let result = await reqGoodsInfo(skuId);
    if (result.code == 200) {
      commit("GETGOODINFO", result.data);
    }
  },
  //将产品添加到购物车中
  async addOrUpdateShopCart({ commit }, { skuId, skuNum }) {
    let result = await reqAddOrUpdateShopCart(skuId, skuNum);
    //此时无数据带回，所以不用改变数据，但要根据返回结果判断成功与失败，并以promise对象的形式告知调用处
    if (result.code == 200) {
      return "OK";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
};
const mutations = {
  GETGOODINFO(state, goodInfo) {
    state.goodInfo = goodInfo;
  },
};
//简化数据
const getters = {
  categoryView(state) {
    return state.goodInfo.categoryView || {};
  },
  skuInfo(state) {
    return state.goodInfo.skuInfo || {};
  },
  spuSaleAttrList(state) {
    return state.goodInfo.spuSaleAttrList || [];
  },
};
export default {
  state,
  actions,
  mutations,
  getters,
};
