//自定义vue插件一定要暴露一个对象
let myPlugin = {};
myPlugin.install = function (vue, options) {
  //会注入vue作为参数, 以便在原型上加方法
  //options是配置对象参数
  //Vue.directive注册全局指令
  vue.directive(options.name, (element, params) => {
    //element为指令绑定的dom节点
    //params为一些参数,其中包括指令中输入的内容，modifiers指指令加的修饰符
    element.innerHTML = params.value.toUpperCase();
    console.log(params);
  });
};
export default myPlugin;
