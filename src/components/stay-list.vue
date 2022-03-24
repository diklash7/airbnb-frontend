<template>
  <section class="home-cities">
    <stay-preview v-for="stay in stays" :key="stay._id" :stay="stay">
      <article @click="$router.push(`/stay/${stay._id}`)">
        <div>
          <img class="stay-img" :src="`src/assets/Images/${stay.imgUrls[0]}`" />
            <div>
           <span class="star">⭐</span> 
           <span>{{ stay.reviewScores.rating }}  •
         {{ stay.numOfReviews}} reviews </span>
          </div>
          <span>{{ stay.propertyType }} • {{ stay.address.city }}
          </span>
           <h3>{{ stay.name }}</h3>
          <span>${{ stay.price }}/ night</span>
        </div>
        <div>
          <custom-label
            v-for="label in stay.labels"
            :key="label"
            :label="label"
          />
        </div>
      </article>
    </stay-preview>
  </section>
</template>

<script>
import CustomLabel from "./custom-label.vue";
import stayPreview from "./stay-preview.vue";

export default {
  name: "stay-list",
  props: {
    stays: Array,
  },
  components: {
    stayPreview,
    CustomLabel,
  },
};
</script>

<style>
.stay-img {
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


</style>