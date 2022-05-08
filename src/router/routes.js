//可以把路由信息单独放一个文件，防止代码太多混乱
//引入路由组件
//使用路由懒加载后，不需要再此处引入了
/* import Home from "../pages/Home";
import Search from "../pages/Search";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Detail from "../pages/Detail";
import AddCartSuccess from "../pages/AddCartSuccess";
import ShopCart from "../pages/ShopCart";
import Trade from "../pages/Trade";
import Pay from "../pages/Pay";
import PaySuccess from "../pages/PaySuccess";
import Center from "../pages/Center";
//引入二级路由
import MyOrder from "../pages/Center/MyOrder";
import GroupOrder from "../pages/Center/GroupOrder"; */

//路由懒加载 把不同的路由对应的组件分割成不同的代码块，当路由被访问的时候才加载对应的组件
export default [
  {
    name: "center",
    path: "/center",
    component: () => import("../pages/Center"),
    meta: {
      showFooter: true,
    },
    //二级路由组件
    children: [
      {
        path: "myorder",
        component: () => import("../pages/Center/MyOrder"),
      },
      {
        path: "grouporder",
        component: () => import("../pages/Center/GroupOrder"),
      },
      {
        path: "/center",
        redirect: "/center/myorder",
      },
    ],
  },
  {
    name: "paysuccess",
    path: "/paysuccess",
    component: () => import("../pages/PaySuccess"),
    meta: {
      showFooter: true,
    },
    beforeEnter: (to, from, next) => {
      if (from.path == "/pay") {
        next();
      } else {
        //其他页面来的停留在当前页面
        next(false);
      }
    },
  },
  {
    name: "pay",
    path: "/pay",
    component: () => import("../pages/Pay"),
    meta: {
      showFooter: true,
    },
    beforeEnter: (to, from, next) => {
      if (from.path == "/trade") {
        next();
      } else {
        //其他页面来的停留在当前页面
        next(false);
      }
    },
  },
  {
    name: "trade",
    path: "/trade",
    component: () => import("../pages/Trade"),
    meta: {
      showFooter: true,
    },
    //独享守卫 仅能从shopcart页进入trade页
    beforeEnter: (to, from, next) => {
      if (from.path == "/shopcart") {
        next();
      } else {
        //其他页面来的停留在当前页面
        next(false);
      }
    },
  },
  {
    name: "shopcart",
    path: "/shopcart",
    component: () => import("../pages/ShopCart"),
    meta: {
      showFooter: true,
    },
  },
  {
    name: "addcartsuccess",
    path: "/addcartsuccess",
    component: () => import("../pages/AddCartSuccess"),
    meta: {
      showFooter: true,
    },
  },
  {
    path: "/home",
    component: () => import("../pages/Home"),
    //路由元信息，可以用于设置组件的显示或隐藏
    meta: {
      showFooter: true,
    },
  },
  {
    name: "search",
    path: "/search",
    component: () => import("../pages/Search"),
    meta: {
      showFooter: true,
    },
  },
  {
    name: "Detail",
    //params参数占位
    path: "/detail/:skuid?",
    component: () => import("../pages/Detail"),
    meta: {
      showFooter: true,
    },
  },
  {
    path: "/login",
    component: () => import("../pages/Login"),
    meta: {
      showFooter: false,
    },
  },
  {
    path: "/register",
    component: () => import("../pages/Register"),
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
