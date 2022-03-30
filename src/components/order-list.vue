<template>
  <section v-if="orders" class="order-list">
    <tr v-for="order in orders" :key="order.amount">
      <order-preview :order="order" :orders="orders" v-if="order" />
    </tr>
  </section>
</template>
<script>
import orderPreview from "./order-preview.vue";
export default {
  props: {
    orders: Array,
  },
  data() {
    return {};
  },
  components: {
    orderPreview,
  },
};
</script>