<template>
  <section v-if="filterBy" class="stay-filter">
    <button @click="isOpen = !isOpen" class="explore-btn">Price</button>
    <!-- <select class="explore-btn" @change="setFilter" v-model="filterBy.propertyType">
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
    </select> -->

    <button @click="isOpen = !isOpen" class="explore-btn">Type of place</button>

    <div v-if="isOpen">
      <custom-type-filter v-model="filterBy.roomType" />
    </div>

    <span class="buffer">|</span>
    <button
      class="explore-btn"
      @click="setFilter"
      :v-model="filterBy.amenities.WiFi"
    >
      Wifi
    </button>
    <!-- <custom-amenities-filter v-model="isOn"/> -->
    <button class="explore-btn" @click="toggleAmen">TV</button>
    <button class="explore-btn">Kitchen</button>
    <button class="explore-btn">AC</button>
    <button class="explore-btn">Smoking Allowed</button>

    <div v-if="isOpen" class="slider-demo-block">
      <!-- <el-slider @change="setFilter" v-model="filterBy.price" range :max="3000" /> -->
      <HistogramSlider
        v-model="filterBy.price"
        @change="setFilter"
        :width="400"
        :bar-height="100"
        :data="prices"
      />
    </div>
  </section>
</template>

<script>
import { utilService } from "../services/util-service";
import CustomAmenitiesFilter from "./custom-amenities-filter.vue";
import customTypeFilter from "./custom-type-filter.vue";

export default {
  components: { customTypeFilter, CustomAmenitiesFilter },
  name: "stay-filter",
  props: {
    prices: Array,
  },
  data() {
    return {
      filterBy: null,
      isOpen: false,
      isClicked: false,
    };
  },
  created() {
    this.setFilter = utilService.debounce(this.setFilter, 500);
    this.filterBy = JSON.parse(JSON.stringify(this.$store.getters.getFilterBy));
  },
  methods: {
    setFilter(ev) {
      this.filterBy.price[0] = ev.from;
      this.filterBy.price[1] = ev.to;
      this.$emit("set-filter", { ...this.filterBy });
    },
    toggleAmen(ev) {
      if (!this.isClicked) {
        console.log(ev.target.innerText, "ev");
        this.isClicked = true;
        this.filterBy.amenities.push(ev.target.innerText);
        console.log("this.filterBy.amenities:", this.filterBy.amenities);
      } else {
        this.isClicked = false;
        const idx = this.filterBy.amenities.findIndex(
          (amenity) => ev.target.innerText === amenity
        );
        this.filterBy.amenities.splice(idx, 1);
        console.log("this.filterBy.amenities:", this.filterBy.amenities);
      }
      this.$emit("set-filter", { ...this.filterBy });
    },
  },
};
</script>
