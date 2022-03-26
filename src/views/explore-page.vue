
<template>
<app-header :stays="stays"/>
  <section class="stay-app main-layout">
    <stay-filter @setFilter="setFilter" />
    <stay-list :stays="stays" />
  </section>
</template>

<script>
import appHeader from "../components/app-header.vue";
import stayList from "../components/stay-list.vue";
import stayFilter from "../components/stay-filter.vue";
import carousel from "../components/carousel.vue";
export default {
  name: "stay-app",
  created() {
    this.$store.dispatch({ type: "loadStays" });
  },
  computed: {
    stays() {
      return this.$store.getters.staysToShow;
    },
  },
  methods: {
    setFilter(filterBy) {
      const copyfilter = JSON.parse(JSON.stringify(filterBy))
      this.$store.dispatch({ type: 'setFilter', filterBy: copyfilter })
    },
  },
  components: {
    appHeader,
    stayList,
    stayFilter,
    carousel
  },
};
</script>

<style></style>
