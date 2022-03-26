<template>
<section class="stay-maps">
    <h1>Where you’ll be</h1>
  <GMapMap
    :center="center"
    :zoom="12"
    map-type-id="terrain"
    style="width: 500px; height: 300px"
  >
    <GMapCluster>
      <GMapMarker
        v-for="(m, index) in markers"
        :key="index"
        :position="m.position"
        :clickable="true"
        :draggable="true"
        @click="center = m.position"
      />
    </GMapCluster>
  </GMapMap>
  
  <el-button v-for="loc in locs" :key="loc.name"
  size="large"
    :clickable="true"
    @click="loc.func(loc.pos)"
    :icon="Search"
    round>{{loc.name}}
  </el-button>
</section>
</template>

<script>
import { Search } from "@element-plus/icons-vue";
export default {
  name: "app",
  props: {
    stay: {}
  },
  data() {
    return {
      center: { lat: 32.088179, lng: 34.790144 },
      markers: [
        {
          position: {
            lat: 32.088179,
            lng: 34.790144,
          },
        }
      ],
    };
  },
  methods: {
    updateLoc({lat, lng}) {
      console.log(lat, lng);
      this.center = {lat: lat, lng: lng}
    },
  },
};
</script>

<style>
.vue-map-container {
  height: 300px;
  width: 70vw;
}

/* .stay-maps{
  margin-top: 30px;
} */
</style>
