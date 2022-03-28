<template>
  <app-header v-if="stays" :stays="stays" />
  <section v-if="stays" class="explore-page stay-app main-layout">
    <!-- <h4 class="num-stays">{{ stays.length }} stays in world</h4> -->
    <stay-filter @setFilter="setFilter" :prices="prices" />
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
  data() {
    return {};
  },
  created() {
    if (this.$route.query.destination || this.$route.query.capacity) {
      const { destination } = this.$route.query;
      const { capacity } = this.$route.query;
      const copyFilter = JSON.parse(
        JSON.stringify(this.$store.getters.getFilterBy)
      );
      copyFilter.city = destination;
      copyFilter.capacity = capacity;
      this.$store.commit({ type: "setFilter", filterBy: copyFilter });
    }
    this.$store.dispatch({ type: "loadStays" });
  },
  computed: {
    stays() {
      return this.$store.getters.stays;
    },
    prices() {
      const prices = this.stays.reduce((acc, stay) => {
        acc.push(stay.price);
        return acc;
      }, []);
      console.log("prices :>> ", prices);
      return prices;
    },
  },
  methods: {
    setFilter(filterBy) {
      const copyfilter = JSON.parse(JSON.stringify(filterBy));
      this.$store.dispatch({ type: "setFilter", filterBy: copyfilter });
    },
  },
  watch: {
    "$route.params"() {
      if (this.$route.query) {
        const filterBy = {
          propertyType: "",
          city: "",
          price: [0, 3000],
          amenities: [],
          WiFi: "",
          capacity: 0,
        };
        this.$store.dispatch({ type: "setFilter", filterBy: filterBy });
      }
      if (this.$route.query.destination || this.$route.query.capacity) {
        const { destination } = this.$route.query;
        const { capacity } = this.$route.query;
        const copyFilter = JSON.parse(
          JSON.stringify(this.$store.getters.getFilterBy)
        );
        copyFilter.city = destination;
        copyFilter.capacity = capacity;
        this.$store.commit({ type: "setFilter", filterBy: copyFilter });
      }
      this.$store.dispatch({ type: "loadStays" });
    },
  },
  components: {
    appHeader,
    stayList,
    stayFilter,
    carousel,
  },
};
</script>

<style>
</style>
