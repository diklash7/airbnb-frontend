<template>
<section class="carousel">
  <div class="block">
    <span class="demonstration">Switch when indicator is clicked</span>
    <el-carousel trigger="click" height="150px">
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
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
  height: 100px;
  width: 150;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
