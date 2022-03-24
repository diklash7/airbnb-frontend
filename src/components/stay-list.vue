<template>
  <section class="home-cities">
    <stay-preview v-for="stay in stays" :key="stay._id" :stay="stay">
      <article @click="$router.push(`/stay/${stay._id}`)">
        <div>
          <!-- <img class="stay-img" :src="`src/assets/Images/${stay.imgUrls[0]}`" /> -->
          <carousel :stay="stay" />
          <div>
            <span class="star"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#E01661"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
            </span>
            <span
              >{{ stay.reviewScores.rating }} • {{ stay.numOfReviews }} reviews
            </span>
          </div>
          <span>{{ stay.propertyType }} • {{ stay.address.city }} </span>
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
import customLabel from "./custom-label.vue";
import stayPreview from "./stay-preview.vue";
import carousel from "./carousel.vue";

export default {
  name: "stay-list",
  props: {
    stays: Array,
  },
  components: {
    stayPreview,
    customLabel,
    carousel
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
.star {
  color: blue;
}
</style>