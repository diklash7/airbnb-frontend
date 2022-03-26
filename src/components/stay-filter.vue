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
    <span class="buffer">|</span>
    <button
      class="explore-btn"
      @click="setFilter"
      :v-model="filterBy.amenities.WiFi"
    >
      Wifi
    </button>
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

    <div class="slider-demo-block">
      <el-slider
        @change="setFilter"
        v-model="filterBy.price"
        range
        max="2000"
      />
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
        price: ref([100, 1000]),
        amenities: ["WiFi"],
      },
      isOpen: true,
    };
  },
  created() {
    this.setFilter = utilService.debounce(this.setFilter, 500);
  },
  methods: {
    setFilter() {
      this.$emit("set-filter", { ...this.filterBy });
    },
  },
};
</script>
