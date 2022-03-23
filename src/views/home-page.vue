<template>
  <section class="home-page">
    <section class="home-cities">
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
      <div>
        <img src="../assets/Images/sydney.jpg" />
        <h3>Sydney</h3>
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
  created() {
    this.$store.dispatch({ type: "loadStays" });
  },
  computed: {
    stays() {
      return this.$store.getters.staysToShow;
    },
    topStays() {
      const topStays = this.stays.sort((s1, s2) => s1.reviewScores.rating - s2.reviewScores.rating);
      return topStays.slice(0, 4);
    },
    // stayName() {
    //   return this.stay.split(' ').slice(0,2).join('+')
    // },
  },
  methods: {
    setFilter(filterBy) {
      const copyfilter = JSON.parse(JSON.stringify(filterBy));
      this.$store.dispatch({ type: "setFilter", filterBy: copyfilter });
    },
    goToStay(stayId) {
      console.log("stay:", this.stayId);
      this.$router.push(`/explore/${stayId}`)
    },
  },
  components: {
    customCard,
  },
};
</script>

<style>
img {
  margin: 0;
  height: 200px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(326px, 1fr));
}

.home-cities {
  display: grid;
  border-radius: 10px;
  grid-template-columns: repeat(auto-fill, minmax(326px, 1fr));
  gap: 25px;
}

.top-rated {
  display: grid;
  border-radius: 10px;
  grid-template-columns: repeat(auto-fill, minmax(326px, 1fr));
  gap: 25px;
}
</style>
