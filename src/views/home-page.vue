<template>
  <section class="home-page">
    <input type="text" />
    <section class="home-g" >
      <div>
        <img src="../assets/Images/barcelona.jpg" />
        <h3>Barcelona</h3>
      </div>
      <div>
        <img src="../assets/Images/newyork.jpg" />
        <h3>New York</h3>
      </div>
      <div>
        <img src="../assets/Images/hongkong.jpg" />
        <h3>Hong Kong</h3>
      </div>
      <section>
        <img src="../assets/Images/sydney.jpg" />
        <h3>Sydney</h3>
      </section>
    </section>
    <!-- <stay-filter @setFilter="setFilter" />
    <stay-list :stays="stays" /> -->
  </section>
</template>

<script>
// import stayList from '../components/stay-list.vue'
// import stayFilter from '../components/stay-filter.vue'
export default {
  name: "home-page",
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
      const copyfilter = JSON.parse(JSON.stringify(filterBy));
      this.$store.dispatch({ type: "setFilter", filterBy: copyfilter });
    },
  },
  components: {
    // stayList,
    // stayFilter,
  },
};
</script>

<style>
img {
  height: 200px;
  width: 250px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.dest-gallery, .top-rated-gallery {
    display: grid;
    grid-template-columns: repeat(4,1fr);
    gap: 25px;
}
</style>

