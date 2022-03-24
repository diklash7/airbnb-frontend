<template>
<section class="carousel">
  <div class="block">
    <span class="demonstration"></span>
    <el-carousel trigger="click" autoplay="false" indicator-position="none" interval="600000" height="150px">
      <el-carousel-item v-for="item in stay.imgUrls" :key="item">
        <img class="stay-img" :src="`src/assets/Images/${item}`" />
      </el-carousel-item>
    </el-carousel>
  </div>
  </section>
</template>

<script>
export default {
  name: "carousel",
  props: {
    stay: Object,
  },
  created() {
    console.log(this.stay.imgUrls);
  },
};
</script>

<style scoped>
.el-carousel__item img {
  border-radius: 12px;
  /* color: white; */
  /* font-size: 14px; */
  /* opacity: 0.75; */
  /* line-height: 150px; */
  /* margin: 0; */
  /* text-align: center; */
  /* height: 150px; */
  /* width:250px; */
}

/* .el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
} */

/* .el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
} */
</style>
