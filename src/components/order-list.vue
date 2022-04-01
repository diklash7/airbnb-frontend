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
    return {
      sortedOrders: null,
    };
  },
  // created() {
  //   console.log(this.orders);
  //   this.sortedOrders = this.orders.sort((a, b) => {
  //     let dateA = new Date(a.date);
  //     let dateB = new Date(b.date);
  //     return dateB > dateA ? -1 : 1;
  //   });
  //   console.log(this.sortedOrders);
  // },
  components: {
    orderPreview,
  },
};
</script>