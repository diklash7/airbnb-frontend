<template>
  <section v-if="orders" class="order-list">
    <tr v-for="order in orders" :key="order.amount">
      <order-preview :order="order" v-if="order"/>
    </tr>
  </section>
</template>
<script>
import orderPreview from "./order-preview.vue";
export default {
  data() {
    return {
      orders: [
        {
        date: "03/13/22",
        booker: "Leo",
        stay: "Fresh and modern 1BR in Bed-Stuy",
        tripDates: "03/14/20-11/18/20",
        nights: 4,
        guests: 3,
        amount: 516,
        status: ["✔️", "❌"],
      },
      ]
    };
  },
  components: {
    orderPreview,
  },
};
</script>