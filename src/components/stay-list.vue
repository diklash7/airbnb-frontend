<template>
  <!-- <button @click="$router.push('/stay/edit')" class="btn btn-secondary">add a new stay</button> -->
  <ul class="home-cities">
    <stay-preview v-for="stay in stays" :key="stay._id" :stay="stay">
      <li @click="$router.push(`/explore/${stay._id}`)">
        <div>
          <img :src="`src/assets/Images/${stay.imgUrls[0]}`" />
             <span>
                {{ stay.capacity }} guests •
                {{ stay.bedrooms }} bedroom •
                {{ stay.beds }} bed •
                {{ stay.bathrooms }} bath
           </span>
          <!-- <h3 class="uppercase">{{ stay.address.city }}</h3>
          <h3 class="uppercase">{{ stay.roomType }}</h3> -->
          <h3 class="uppercase">${{ stay.price }}/ night</h3>
          •
          <h2 class="uppercase">{{ stay.name }}</h2>
        </div>
        <div>
          <custom-label
            v-for="label in stay.labels"
            :key="label"
            :label="label"
          />
        </div>
      </li>
    </stay-preview>
  </ul>
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
</style>