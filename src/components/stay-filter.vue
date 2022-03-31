<template>
  <section v-if="filterBy" class="stay-filter flex">

<div class="price-filter-container">
    <button @click="isPriceOpen = !isPriceOpen" class="explore-btn">Price</button>
     <div v-if="isPriceOpen" class="slider-demo-block">
     <p>The average nightly price is </p>
      <HistogramSlider
        v-model="filterBy.price"
        @change="setFilterPrice"
        :width="400"
        :bar-height="120"
        :data="prices"
      />
       <hr />
          <div class="type-save">
      <button class="clear">Clear</button>
      <button class="save">Save</button>
    </div>
    </div>
 
    </div>
   
   <div class="room-filter-container">
    <button @click="isTypeOpen = !isTypeOpen" class="explore-btn">Type of place</button>
    <div v-if="isTypeOpen">
      <custom-type-filter v-model="filterBy.roomType" @setFilter="setFilter" />
    </div>
    </div>

    <span class="buffer">|</span>

    <amenities v-model="filterBy.amenities" @setFilter="setFilter"/>

     </section>
</template>

<script>
import { utilService } from "../services/util-service";
import customTypeFilter from "./custom-type-filter.vue";
import Amenities from "./amenities.vue";

export default {
  components: { customTypeFilter, Amenities },
  name: "stay-filter",
  props: {
    prices: Array,
  },
  data() {
    return {
      filterBy: null,
      isTypeOpen: false,
      isPriceOpen: false,
      isClicked: false,
    };
  },
  created() {
    this.setFilter = utilService.debounce(this.setFilter, 500);
    this.filterBy = JSON.parse(JSON.stringify(this.$store.getters.getFilterBy));
  },
  methods: {
    setFilter() {  
      this.$emit("set-filter", { ...this.filterBy });
    },
    setFilterPrice(ev) {
      this.filterBy.price[0] = ev.from;
      this.filterBy.price[1] = ev.to;
      this.setFilter()
    },
    
  },
};
</script>
