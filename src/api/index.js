//对API进行统一管理
import requests from "./request";
//引入mock数据
import mockRequests from "./mockAjax";
//三级联动接口
// /api/product/getBaseCategoryList get请求 无参数
export const reqCategoryList = () => {
  //发请求:axios发请求返回的结果是promise对象
  return requests({
    url: "/product/getBaseCategoryList",
    method: "get",
  });
};

//获取banner
export const reqGetBannerList = () => mockRequests.get("/banner");

//获取floor数据
export const reqFloorList = () => mockRequests.get("/floor");

//获取search数据 post 需要参数 至少要是一个空对象
export const reqGetSearchInfo = (params) =>
  requests({
    url: "/list",
    method: "post",
    data: params,
  });
//获取详情页数据 URL:/api/item/{skuId} GET
export const reqGoodsInfo = (skuId) =>
  requests({ url: `/item/${skuId}`, method: "get" });
//将产品添加到购物车中，或更新产品个数 URL:/api/cart/addToCart/{skuId}/{skuNum} POST
export const reqAddOrUpdateShopCart = (skuId, skuNum) =>
  requests({
    url: `/cart/addToCart/${skuId}/${skuNum}`,
    method: "post",
  });
//获取购物车数据，URL:/api/cart/cartList  GET
export const reqCartList = () =>
  requests({ url: "/cart/cartList", method: "get" });

//删除购物车数据 URL:/api/cart/deleteCart/{skuId} DELETE
export const reqDeleteCartListBySkuId = (skuId) =>
  requests({
    url: `/cart/deleteCart/${skuId}`,
    method: "delete",
  });

//切换商品选中状态 URL:/api/cart/checkCart/{skuId}/{isChecked} GET
export const reqUpdateCheckedById = (skuId, isChecked) =>
  requests({
    url: `/cart/checkCart/${skuId}/${isChecked}`,
    method: "get",
  });

//获取验证码 URL /api/user/passport/sendCode/{phone} method:gete
export const reqGetCode = (phone) =>
  requests({
    url: `/user/passport/sendCode/${phone}`,
    method: "get",
  });

//注册 url:/api/user/passport/register  POST  phone code password
export const reqUserRegister = (data) =>
  requests({
    url: "/user/passport/register",
    method: "post",
    data,
  });

//登录 url:/api/user/passport/login  POST  phone password
export const reqUserLogin = (data) =>
  requests({
    url: "/user/passport/login",
    method: "post",
    data: data,
  });

//使用token获取用户信息 url:/api/user/passport/auth/getUserInfo get
export const reqUserInfo = () =>
  requests({
    url: "/user/passport/auth/getUserInfo",
    method: "get",
  });

//退出登录 URL:/api/user/passport/logout get
export const reqLogout = () =>
  requests({
    url: "/user/passport/logout",
    method: "get",
  });
