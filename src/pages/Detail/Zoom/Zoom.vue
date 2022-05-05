<template>
  <div class="spec-preview">
    <img :src="imgObj.imgUrl" />
    <div class="event" @mousemove="handler"></div>
    <div class="big">
      <img :src="imgObj.imgUrl" ref="big" />
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
export default {
  name: "Zoom",
  data() {
    return {
      currentIndex: 0,
    };
  },
  computed: {
    imgObj() {
      return this.skuImgList[this.currentIndex] || {};
    },
  },
  props: ["skuImgList"],
  /* props: {
    //因为数据依赖于网络请求，存在滞后,可以要给数据设定默认值，为包含空对象的数组。此处为方便后面传值，使用计算属性写法
    skuImgList: {
      type: Array,
      required: true,
      default: () => [{}],
    },
  }, */
  methods: {
    //编写放大镜效果
    handler(event) {
      //console.log(event);
      let mask = this.$refs.mask;
      let left = event.offsetX - mask.offsetWidth / 2;
      let top = event.offsetY - mask.offsetHeight / 2;
      //约束范围
      left = left > 0 ? left : 0;
      left = left <= mask.offsetWidth ? left : mask.offsetWidth;
      top = top <= mask.offsetHeight ? top : mask.offsetHeight;
      top = top > 0 ? top : 0;
      //修改位置
      mask.style.left = left + "px";
      mask.style.top = top + "px";
      //修改大图位置
      let big = this.$refs.big;
      big.style.left = -2 * left + "px";
      big.style.top = -2 * top + "px";
    },
  },
  mounted() {
    //利用全局事件总线获取传递过来的索引值
    this.$bus.$on("getIndex", (index) => {
      this.currentIndex = index;
    });
  },
};
</script>

<style lang="less">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
      left: 0;
      top: 0;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>