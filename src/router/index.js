//配置路由
import store from "@/store";
import Vue from "vue";
import VueRouter from "vue-router";
//引入路由信息
import routes from "./routes";

Vue.use(VueRouter);
//重写push | replace 处理编程式路由跳转到当前路由（参数不变），多次执行会抛出NavigationDuplicated（导航重复）的警告错误
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

let router = new VueRouter({
  routes: routes,
  //滚动行为 表示滚动条在跳转后定位的y轴位置
  scrollBehavior(to, from, savedPosition) {
    return { y: 0 };
  },
});
//配置全局路由守卫
router.beforeEach(async (to, from, next) => {
  let token = store.state.user.token;
  let name = store.state.user.userInfo.name;
  if (token) {
    //已经登录了，不能再去login
    if (to.path == "/login") {
      next("/home");
    }
    //已登录去其他组件
    else {
      if (name) {
        //用户信息已存在
        next();
      } else {
        //用户信息不存在，派发action获取
        try {
          await store.dispatch("getUserInfo");
          next();
        } catch (error) {
          //token失效了 清除token,重新登录
          await store.dispatch("userLogout");
          next("/login");
        }
      }
    }
  } else {
    //未登录
    next();
  }
});

export default router;
