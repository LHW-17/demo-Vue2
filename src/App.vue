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
};
</script>

<style>
</style>
