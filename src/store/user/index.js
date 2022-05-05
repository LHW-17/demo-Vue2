import {
  reqGetCode,
  reqUserRegister,
  reqUserLogin,
  reqUserInfo,
  reqLogout,
} from "@/api";
import { getToken, removeToken, setToken } from "@/utils/token";

//登录注册模块的仓库
const state = {
  code: "",
  token: getToken(),
  userInfo: {},
};
const actions = {
  //获取验证码,正常情况下，验证码应发至用户，不应从此处获取，此处仅用于练习
  async getCode({ commit }, phone) {
    let result = await reqGetCode(phone);
    if (result.code == 200) {
      commit("GETCODE", result.data);
      return "OK";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  //注册
  async userRegister({ commit }, user) {
    let result = await reqUserRegister(user);
    if (result.code == 200) {
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  //登录 token
  async userLogin({ commit }, data) {
    let result = await reqUserLogin(data);
    if (result.code == 200) {
      commit("USERLOGIN", result.data.token);
      //持久化存储token
      setToken(result.data.token);
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
  //获取用户信息
  async getUserInfo({ commit }) {
    let result = await reqUserInfo();
    if (result.code == 200) {
      commit("GETUSERINFO", result.data);
      return "ok";
    } else {
      return Promise.reject(new Error("getUserInfofaile"));
    }
  },
  //退出登录 通知服务器清除数据
  async userLogout({ commit }) {
    let result = await reqLogout();
    if (result.code == 200) {
      commit("CLEAR");
      return "ok";
    } else {
      return Promise.reject(new Error("faile"));
    }
  },
};
const mutations = {
  GETCODE(state, data) {
    state.code = data;
  },
  USERLOGIN(state, token) {
    state.token = token;
  },
  GETUSERINFO(state, userInfo) {
    state.userInfo = userInfo;
  },
  CLEAR(state) {
    state.token = "";
    state.userInfo = {};
    removeToken();
  },
};
const getters = {};
export default {
  state,
  actions,
  mutations,
  getters,
};
