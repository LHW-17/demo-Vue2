<template>
  <div class="swiper-container" ref="mySwiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
        <img :src="carousel.imgUrl" />
      </div>
    </div>
    <!-- 如果需要分页器 -->
    <div class="swiper-pagination"></div>

    <!-- 如果需要导航按钮 -->
    <div class="swiper-button-prev"></div>
    <div class="swiper-button-next"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "Carousel",
  props: ["list"],
  watch: {
    list: {
      immediate: true, //可能会创建两个swiper
      handler() {
        //使用监视的原因是，只有当数据获取后，组件结构才完整，此时创建swiper实例才有效
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.mySwiper, {
            loop: true,
            //如果需要分页器
            pagination: {
              el: ".swiper-pagination",
              //点击分页器切换页面
              clickable: true,
            },
            //如果需要前进后退按钮
            navigation: {
              nextEl: ".swiper-button-next",
              preEl: ".swiper-button-prev",
            },
          });
        });
      },
    },
  },
};
</script>

<style>
</style>