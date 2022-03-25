<template>
<section class="carousel">
  <div class="block">
    <span class="demonstration"></span>
    <el-carousel trigger="click" autoplay="false" indicator-position="none" interval="600000" height="250px">
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
};
</script>

<style scoped>
.el-carousel__item {
   /* z-index: 10;
   border-radius: 30%;
    width: 0.4em  !important;
    height: 0.4rem !important; */
     /* border-radius: 40%;  */
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

/* el-carousel__container {
    position: relative;
    height: 260px;
 .el-carousel__arrow{
  color: none;
    background-color: none;
}
} */

.el-carousel__item{
    overflow: hidden;
    top: 0;
    left: 0;
    position: absolute;
     aspect-ratio: 3 / 2;

} 
 .el-carousel__button{
  z-index: 10;
   border-radius: 30%;
    width: 0.4em  !important;
    height: 0.4rem !important;
    border-radius: 40%;
    background-color: white;

}



/* .el-carousel__arrow-background{


} */
</style>
