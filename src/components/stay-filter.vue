<template>
  <section class="stay-filter">
    <select @change="setFilter" multiple v-model="filterBy.city">
      <option value="">All</option>
      <option value="Barcelona">Barcelona</option>
      <option value="Hong Kong">Hong Kong</option>
      <option value="New York">New York</option>
      <!-- <option value="House">House</option>
      <option value="Apartment">Apartment</option>
      <option value="Serviced apartment">Serviced apartment</option>
      <option value="Bungalow">Bungalow</option>
      <option value="Condominium">Condominium</option> -->
    </select>
  </section>
</template>

<script>
import { utilService } from "../services/util-service";

export default {
  name: "stay-filter",
  data() {
    return {
      filterBy: {
        city: "",
        // amenities: [] 
        propertyType: [],
      },
      isOpen: true,
    };
  },
  created() {
    this.setFilter = utilService.debounce(this.setFilter, 500);
  },
  computed: {
    city() {
      return this.$store.getters.city;
    },
  },
  methods: {
    setFilter() {
      this.$emit("set-filter", { ...this.filterBy });
    },
  },
};
</script>
<style>
.stay-filter {
  margin-top: 300px;
}
</style>