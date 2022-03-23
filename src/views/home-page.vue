<template>
  <section class="home-page">
    <section class="main-hero">
      <h1>Not sure where to go? Perfect.</h1>
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
      cities: ['barcelona', 'newyork', 'hongkong', 'sydney']
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
      this.$router.push(`/explore/${stayId}`);
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
.main-hero {
  background-image: url(../assets/Images/hero.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  height: 750px;
  text-align: center;
  background-position: 50%;
  margin-bottom: 96px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
}

.main-hero h1 {
  color: #ffffff;
  font-size: 32px;
  text-shadow: 1px 1px 2px #000;
}

.home-cities {
  display: grid;
  border-radius: 10px;
  grid-template-columns: repeat(auto-fill, minmax(326px, 1fr));
  gap: 25px;
}

img {
  margin: 0;
  height: 200px;
  border-radius: 10px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(326px, 1fr));
}

.top-rated {
  display: grid;
  border-radius: 10px;
  grid-template-columns: repeat(auto-fill, minmax(326px, 1fr));
  gap: 25px;
}
</style>
