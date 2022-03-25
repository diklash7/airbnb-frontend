<template>
  <section contenteditable="true" class="home-page main-layout" @scroll="checkScroll" ref="home">
    <section class="main-hero main-layout full">
      <h1>Not sure where to go? Perfect.</h1>
      <button @click="goToExplore()"><h3>Explore</h3></button>
    </section>

    <h1 class="gallery-title">Popular Destinations</h1>
    <div class="home-page-gallery">
      <article class="dest-card" v-for="(city, idx) in cities" :key="city">
        <img
          :src="`src/assets/Images/${idx + 1}.jpg`"
          @click="goToExploreCity()"
        />
        <h3>{{ city }}</h3>
      </article>
    </div>

    <h1 class="gallery-title">Top Rated</h1>
    <div class="home-page-gallery">
      <article class="top-rated-card" v-for="stay in topStays" :key="stay._id">
        <custom-card @click="goToStay(stay._id)">
          <template #default>
            <img :src="`src/assets/Images/${stay.imgUrls[0]}`" />
          </template>

          <template #footer>
            <div class="stay-name">
              <h3>{{ stay.name }}, {{ stay.address.country }}</h3>
            </div>
          </template>
        </custom-card>
      </article>
    </div>

    <section class="host-container full">
      <div class="host-cta">
        <h1>Become a host!</h1>
        <button @click="goToHost()">Learn more</button>
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
      cities: ["Barcelona", "New York", "Hong Kong", "Sydney"],
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
      if (!this.stays) return;
      const topStays = this.stays.sort((s1, s2) => {
        return s2.reviewScores.rating - s1.reviewScores.rating;
      });
      return topStays.slice(0, 4);
    },
  },
  methods: {
    // setFilter(filterBy) {
    //   const copyfilter = JSON.parse(JSON.stringify(filterBy));
    //   this.$store.dispatch({ type: "setFilter", filterBy: copyfilter });
    // },
    goToStay(stayId) {
      console.log("stay:", this.stayId);
      this.$router.push(`/stay/${stayId}`);
    },
    goToExplore() {
      this.$router.push("/explore");
    },
    goToHost() {
      this.$router.push("/host");
    },
  },
  components: {
    customCard,
  },
};
</script>

<style></style>
