<template>
  <section class="home-cities">
    <stay-preview v-for="stay in stays" :key="stay._id" :stay="stay">
      <article @click="$router.push(`/stay/${stay._id}`)">
        <div>
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
            <span class="space-star">{{ stay.reviewScores.rating }} </span>

            <span class="num-rew"> ({{ stay.numOfReviews }} reviews)</span>
          </div>
          <span>{{ stay.propertyType }} • {{ stay.address.city }} </span>

          <div>{{ stay.name }}</div>
          <div class="stay-price">
            <span class="bold">${{ stay.price }}</span> / night
          </div>
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
import { computed } from "@vue/runtime-core";
import { rateEmits } from "element-plus";

export default {
  name: "stay-list",
  props: {
    stays: Array,
  },
  components: {
    stayPreview,
    customLabel,
    carousel,
  },

  computed: {
    rate() {
      return this.stay.reviewScores.rating / 20;
    },
  },
};
</script>
