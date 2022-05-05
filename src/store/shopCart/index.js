import {
  reqCartList,
  reqDeleteCartListBySkuId,
  reqUpdateCheckedById,
} from "@/api";

const state = {
  cartList: [],
};
const actions = {
  //获取购物车列表数据
  async getCartList({ commit }) {
    let result = await reqCartList();
    //console.log(result);

    if (result.code == 200) {
      commit("GETCARTLIST", result.data);
    }
  },
  //删除购物车中某个商品
  async deleteCartListBySkuId({ commit }, skuId) {
    let result = await reqDeleteCartListBySkuId(skuId);
    if (result.code == 200) {
      return "OK";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  //修改选中状态
  async updateCheckedById({ commit }, { skuId, isChecked }) {
    let result = await reqUpdateCheckedById(skuId, isChecked);
    if (result.code == 200) {
      return "OK";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  deleteAllCheckedCart({ dispatch, getters }) {
    //遍历产品数组，执行删除选中
    let promiseAll = [];
    getters.cartList.cartInfoList.forEach((element) => {
      if (element.isChecked == 1) {
        promiseAll.push(dispatch("deleteCartListBySkuId", element.skuId));
      }
    });
    //Promise.all([])以promise对象数组为参数，当所有promise对象都是成功时才返回成功。
    return Promise.all(promiseAll);
  },
  //修改全部产品的isChecked
  updateAllCartIsChecked({ dispatch, state }, isChecked) {
    let promiseAll = [];
    state.cartList[0].cartInfoList.forEach((item) => {
      promiseAll.push(
        dispatch("updateCheckedById", { skuId: item.skuId, isChecked })
      );
    });
    return Promise.all(promiseAll);
  },
};
const mutations = {
  GETCARTLIST(state, data) {
    state.cartList = data;
  },
};
const getters = {
  cartList(state) {
    return state.cartList[0] || {};
  },
};
export default {
  state,
  actions,
  mutations,
  getters,
};
