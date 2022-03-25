<template>
  <section class="stay-filter">
    <button class="explore-btn">Price</button>
    <select
      class="explore-btn"
      @change="setFilter"
      v-model="filterBy.propertyType"
    >
      <option value="">Type of place</option>
      <option value="House">House</option>
      <option value="Apartment">Apartment</option>
      <option value="Serviced apartment">Serviced apartment</option>
      <option value="Bungalow">Bungalow</option>
      <option value="Condominium">Condominium</option>
    </select>
    |
    <button class="explore-btn" @click="setFilter">Wifi</button>
    <button class="explore-btn">TV</button>
    <button class="explore-btn">Kitchen</button>
    <button class="explore-btn">AC</button>
    <button class="explore-btn">Smoking Allowed</button>

    <!-- <select @change="setFilter"  v-model="filterBy.city">
      <option value="">All</option>
      <option value="Barcelona">Barcelona</option>
      <option value="Hong Kong">Hong Kong</option>
      <option value="New York">New York</option> -->
    <!-- <option value="House">House</option>
      <option value="Apartment">Apartment</option>
      <option value="Serviced apartment">Serviced apartment</option>
      <option value="Bungalow">Bungalow</option>
      <option value="Condominium">Condominium</option> -->
    <!-- </select> -->

    <!-- <div>
      <span class="price-range">
        <b>Price:</b> 50
        <input
          @change="setFilter"
          type="range"
          v-model="filterBy.price"
          min="50"
          max="1000"
          alt="value"
        />
        1000
      </span>
    </div> -->

    <div class="slider-demo-block">
      <el-slider @change="setFilter" v-model="filterBy.price" range  max="2000" />
    </div>
  </section>
</template>

<script>
import { utilService } from "../services/util-service";
import { ref, reactive } from "vue";
// import type { CSSProperties } from 'vue';

export default {
  name: "stay-filter",
  data() {
    return {
      filterBy: {
        // city: '',
        propertyType: "",
        price: ref([100,1000]),
        amenities:['WiFi']
      },
      isOpen: true,
    };
  },
  created() {
    this.setFilter = utilService.debounce(this.setFilter, 500);
  },
  computed: {
    // city() {
    //   return this.$store.getters.city;
    // },
  },
  methods: {
    setFilter() {
      this.$emit("set-filter", { ...this.filterBy });
    },
  },

  // interface Mark {
  //   style: CSSProperties
  //   label: string
  // }

  // type Marks = Record<number, Mark | string>

  // const marks = reactive<Marks>({
  //   0: '0°C',
  //   8: '8°C',
  //   37: '37°C',
  //   50: {
  //     style: {
  //       color: '#1989FA',
  //     },
  //     label: '50%',
  //   },
  // })
};
</script>
<style>
.stay-filter {
  margin-top: 20px;
}
.explore-btn {
  height: 38px;
  cursor: pointer !important;
  border: 1px solid #ddd !important;
  background-color: #fff !important;
  outline: none !important;
  margin: 0 !important;
  border-radius: 30px !important;
  color: #222 !important;
  font-family: Circular, -apple-system, BlinkMacSystemFont, Roboto,
    Helvetica Neue, sans-serif !important;
  padding: 10px 16px !important;
  font-size: 14px !important;
  font-weight: 400 !important;
  line-height: 18px !important;
  margin-right: 8px !important;
  margin-top: 20px !important;
  margin-bottom: 4px !important;
}

.star {
  color: pink;
}

.slider-demo-block {
  display: flex;
  align-items: center;
}
.slider-demo-block .el-slider {
  margin-top: 0;
  margin-left: 12px;
}
</style>