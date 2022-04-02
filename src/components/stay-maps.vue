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
    round>{{loc.name}}
  </el-button>
</section>
</template>

<script>
export default {
  name: "app",
  props: {
    stay: {}
  },
  data() {
    return {
      center: { lat: 32.088179, lng: 34.790144 },
      locs: [{name: 'Tel Aviv', func: this.updateLoc, pos: {lat: 32.088179, lng: 34.790144}},
      {name: 'Ramat Gan', func: this.updateLoc, pos: {  lat: 32.066278,lng: 34.830301}},
    ],
      markers: [
        {
          position: {
            lat: 32.088179,
            lng: 34.790144,
          },
        }, // Along list of clusters
        {
          position: {
            lat: 32.066278,
            lng: 34.830301,
          },
        }, // Along list of clusters
       // Along list of clusters
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
