<template>
  <div id="app">
    <Header></Header>
    <router-view> </router-view>
    <!-- Footer组件仅在Home、Search显示，在登录和注册时隐藏 -->
    <Footer v-show="$route.meta.showFooter"></Footer>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Footer,
  },
  mounted() {
    //通知Vuex发请求，获取数据，存储于仓库中,因为数据只需获取一次，所以在根组件加载后就应获取，三级联动组件中即可使用
    this.$store.dispatch("categoryList");
  },
};
</script>

<style>
</style>
