//可以把路由信息单独放一个文件，防止代码太多混乱
//引入路由组件
import Home from "../pages/Home";
import Search from "../pages/Search";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Detail from "../pages/Detail";
import AddCartSuccess from "../pages/AddCartSuccess";
import ShopCart from "../pages/ShopCart";

export default [
  {
    name: "shopcart",
    path: "/shopcart",
    component: ShopCart,
    meta: {
      showFooter: true,
    },
  },
  {
    name: "addcartsuccess",
    path: "/addcartsuccess",
    component: AddCartSuccess,
    meta: {
      showFooter: true,
    },
  },
  {
    path: "/home",
    component: Home,
    //路由元信息，可以用于设置组件的显示或隐藏
    meta: {
      showFooter: true,
    },
  },
  {
    name: "search",
    path: "/search",
    component: Search,
    meta: {
      showFooter: true,
    },
  },
  {
    name: "Detail",
    //params参数占位
    path: "/detail/:skuid?",
    component: Detail,
    meta: {
      showFooter: true,
    },
  },
  {
    path: "/login",
    component: Login,
    meta: {
      showFooter: false,
    },
  },
  {
    path: "/register",
    component: Register,
    meta: {
      showFooter: false,
    },
  },
  //路由重定向
  {
    path: "*",
    redirect: "/home",
  },
];
