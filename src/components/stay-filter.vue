<template>
  <section v-if="filterBy" class="stay-filter">

    <button @click="isOpen = !isOpen" class="explore-btn">Price</button>
     <div v-if="isOpen" class="slider-demo-block">
      <HistogramSlider
        v-model="filterBy.price"
        @change="setFilterPrice"
        :width="400"
        :bar-height="100"
        :data="prices"
      />
    </div>
   
    <button @click="isOpen = !isOpen" class="explore-btn">Type of place</button>
    <div v-if="isOpen">
      <custom-type-filter v-model="filterBy.roomType" />
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
      isOpen: false,
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
