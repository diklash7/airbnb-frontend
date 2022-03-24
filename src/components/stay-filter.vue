<template>
  <section class="stay-filter">
    <select @click="setFilter" multiple v-model="filterBy.propertyType">
      <option value="House">House</option>
      <option value="Apartment">Apartment</option>
      <option value="Serviced apartment">Serviced apartment</option>
      <option value="Bungalow">Bungalow</option>
      <option value="Condominium">Condominium</option>
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
        // name: "",
        propertyType: [],
      },
      isOpen: true,
    };
  },
  created() {
    this.setFilter = utilService.debounce(this.setFilter, 500);
  },
  computed: {
    labels() {
      return this.$store.getters.labels;
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