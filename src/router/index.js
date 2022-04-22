//配置路由
import Vue from "vue";
import VueRouter from "vue-router";
//引入路由组件
import Home from "../pages/Home";
import Search from "../pages/Search";
import Login from "../pages/Login";
import Register from "../pages/Register";

Vue.use(VueRouter);
//重写push | replace
let originPush = VueRouter.prototype.push;
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.push = function (location, resolve, reject) {
  if (resolve && reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};
VueRouter.prototype.replace = function (location, resolve, reject) {
  if (resolve && reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(
      this,
      location,
      () => {},
      () => {}
    );
  }
};

export default new VueRouter({
  routes: [
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
  ],
});
