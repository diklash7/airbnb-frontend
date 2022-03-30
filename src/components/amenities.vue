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
      amenities: [],
      dataset: ["Wifi", "TV", "Kitchen", "AC", "Smoking Allowed"],
    };
  },
  methods: {
    toggleAmenity(ev) {
      const amenity = ev.target.value;
      if (this.amenities.includes(amenity)) {
        const idx = this.amenities.findIndex((a) => a === amenity);
        this.amenities.splice(idx, 1);
      } else {
        this.amenities.push(amenity);
      }
      this.$emit("update:modelValue", this.amenities);
      this.$emit("setFilter");
    },
  },
};
</script>

<style>
</style> 