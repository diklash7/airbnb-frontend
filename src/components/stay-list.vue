<template>
  <!-- <button @click="$router.push('/stay/edit')" class="btn btn-secondary">add a new stay</button> -->
  <button class="explore-btn">Price</button>
  <button class="explore-btn">Type of place</button> |
  <button class="explore-btn">Wifi</button>
  <button class="explore-btn">TV</button>
  <button class="explore-btn">Kitchen</button>
  <button class="explore-btn">AC</button>
  <button class="explore-btn">Smoking Allowed</button>

  <section class="home-cities">
    <stay-preview v-for="stay in stays" :key="stay._id" :stay="stay">
      <article @click="$router.push(`/stay/${stay._id}`)">
        <div>
          <img :src="`src/assets/Images/${stay.imgUrls[0]}`" />
          <!-- <span>
            {{ stay.capacity }} guests • {{ stay.bedrooms }} bedroom •
            {{ stay.beds }} bed • {{ stay.bathrooms }} bath
          </span> -->
          <span>{{ stay.roomType }} • {{ stay.address.city }}

          </span>
         
          <h2>{{ stay.name }}</h2>
          <h3>${{ stay.price }}/ night</h3>
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

.explore-btn {
    height: 38px;
    cursor: pointer!important;
    border: 1px solid #ddd!important;
    background-color: #fff!important;
    outline: none!important;
    margin: 0!important;
    border-radius: 30px!important;
    color: #222!important;
    font-family: Circular,-apple-system,BlinkMacSystemFont,Roboto,Helvetica Neue,sans-serif!important;
    padding: 10px 16px!important;
    font-size: 14px!important;
    font-weight: 400!important;
    line-height: 18px!important;
    margin-right: 8px!important;
    margin-top: 4px!important;
    margin-bottom: 4px!important;
}

</style>