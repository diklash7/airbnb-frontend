<template>
  <section class="home-page main-layout">
    <section class="main-hero main-layout full">
      <h1>Not sure where to go? Perfect.</h1>
      <button><h3>Explore</h3></button>
    </section>

    <section class="home-cities">
      <div v-for="city in cities" :key="city">
        <img :src="`../assets/Images/${city}.jpg`" @click="goToExplore(city)"/>
        <h3>{{city}}</h3>
      </div>
    </section>

    <section class="top-rated">
      <div v-for="stay in topStays" :key="stay._id">
        <custom-card @click="goToStay(stay._id)">
          <template #default>
            <img :src="`src/assets/Images/${stay.imgUrls[0]}`" />
          </template>

          <template #footer>
            <div class="stay-name">
              <h3>{{ stay.name }},</h3>
              <h3>{{ stay.address.country }}</h3>
            </div>
          </template>
        </custom-card>
      </div>
    </section>
  </section>
</template>

<script>
import customCard from "../components/custom-card.vue";

export default {
  name: "home-page",
  data() {
    return {
      cities: ['barcelona', 'new york', 'hong kong', 'sydney']
    };
  },
  created() {
    this.$store.dispatch({ type: "loadStays" });
  },
  computed: {
    stays() {
      return this.$store.getters.staysToShow;
    },
    topStays() {
      const topStays = this.stays.sort(
        (s1, s2) => s1.reviewScores.rating - s2.reviewScores.rating
      );
      return topStays.slice(0, 4);
    },
  },
  methods: {
    setFilter(filterBy) {
      const copyfilter = JSON.parse(JSON.stringify(filterBy));
      this.$store.dispatch({ type: "setFilter", filterBy: copyfilter });
    },
    goToStay(stayId) {
      console.log("stay:", this.stayId);
      this.$router.push(`/stay/${stayId}`);
    },
    goToExplore() {
      this.$router.push(`/explore/${stayId}`);
    },
  },
  components: {
    customCard,
  },
};
</script>

<style>
</style>
