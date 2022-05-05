<template>
  <div class="swiper-container">
    <div class="swiper-wrapper">
      <div
        class="swiper-slide"
        v-for="(slide, index) in skuImgList"
        :key="slide.id"
      >
        <img
          :src="slide.imgUrl"
          :class="{ active: currentIndex == index }"
          @click="changeIndex(index)"
        />
      </div>
    </div>
    <div class="swiper-button-next"></div>
    <div class="swiper-button-prev"></div>
  </div>
</template>

<script>
import Swiper from "swiper";
export default {
  name: "ImageList",
  data() {
    return {
      currentIndex: 0,
    };
  },
  props: {
    //因为数据依赖于网络请求，存在滞后，所以要给数据设定默认值，为包含空对象的数组。
    skuImgList: {
      type: Array,
      required: true,
      default: () => [{}],
    },
  },
  methods: {
    changeIndex(index) {
      this.currentIndex = index;
      //通知上方放大镜组件当前图片索引值
      this.$bus.$emit("getIndex", index);
    },
  },
  watch: {
    skuImgList(newValue, oldValue) {
      this.$nextTick(() => {
        new Swiper(".swiper-container", {
          //如果需要前进后退按钮
          navigation: {
            nextEl: ".swiper-button-next",
            preEl: ".swiper-button-prev",
          },
          //显示图片数量设置
          slidesPerView: 2,
          slidesPerGroup: 1,
        });
      });
    },
  },
};
</script>

<style lang="less" scoped>
.swiper-container {
  height: 56px;
  width: 412px;
  box-sizing: border-box;
  padding: 0 12px;

  .swiper-slide {
    width: 56px;
    height: 56px;

    img {
      width: 100%;
      height: 100%;
      border: 1px solid #ccc;
      padding: 2px;
      width: 50px;
      height: 50px;
      display: block;

      &.active {
        border: 2px solid #f60;
        padding: 1px;
      }
    }
  }

  .swiper-button-next {
    left: auto;
    right: 0;
  }

  .swiper-button-prev {
    left: 0;
    right: auto;
  }

  .swiper-button-next,
  .swiper-button-prev {
    box-sizing: border-box;
    width: 12px;
    height: 56px;
    background: rgb(235, 235, 235);
    border: 1px solid rgb(204, 204, 204);
    top: 0;
    margin-top: 0;
    &::after {
      font-size: 12px;
    }
  }
}
</style>