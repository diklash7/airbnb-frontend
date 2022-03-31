<template>
  <span class="amenity">
    <button
      class="explore-btn"
      v-for="amenity in dataset"
      :key="amenity"
      :value="amenity"
      @click="toggleAmenity"
    >
      {{ amenity }}
    </button>
  </span>
</template>

<script>
export default {
  name: "amenities",
  data() {
    return {
      isClicked: false,
      amenities: [],
      dataset: ["Internet", "TV", "Kitchen", "Air conditioning", "Iron","Pool"],
    };
  },

  methods: {
    toggleAmenity(ev) {
      const amenity = ev.target.value;
      if (this.amenities.includes(amenity)) {
        const idx = this.amenities.findIndex((a) => a === amenity);
        this.amenities.splice(idx, 1);
        this.isClicked=false
      } else {
        this.amenities.push(amenity);
        this.isClicked=true

      }
      this.$emit("update:modelValue", this.amenities);
      this.$emit("setFilter");
    },
  },
  computed: {
    clickedBtn() {
      console.log('vvv',this.isClicked);
      return {active: this.isClicked};
    }
  }
};
</script>

 