<template>
  <section class="carousel">
    <div class="block">
      <span class="demonstration"></span>
      <el-carousel
        :trigger="click"
        :autoplay="false"
        :interval=600000
        height="262px"
      >
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

