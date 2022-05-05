//对axios进行二次封装
import store from "@/store";
import axios from "axios";
//引入进度条
import nprogress from "nprogress";
//引入进度条样式
import "nprogress/nprogress.css";
//1.创建axios实例
//request 就是配置后的axios
const requests = axios.create({
  //配置对象，设置默认路径
  baseURL: "/api",
  //代表请求超时时间ms
  timeout: 5000,
});
//请求拦截器：在发请求前，拦截器可以检测到并在请求发出前进行处理,如设置请求头
requests.interceptors.request.use((config) => {
  //config配置对象，包含header请求头
  if (localStorage.getItem("UUIDTOKEN")) {
    config.headers.userTempId = localStorage.getItem("UUIDTOKEN");
  }
  //需要携带token给服务器
  if (store.state.user.token) {
    config.headers.token = store.state.user.token;
  }
  //进度条启动
  nprogress.start();
  return config;
});

//响应拦截器
requests.interceptors.response.use(
  (res) => {
    //进度条结束
    nprogress.done();
    return res.data;
  },
  (error) => {
    return Promise.reject(new Error("fail"));
  }
);

export default requests;
