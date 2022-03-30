<template>
  <section class="order-preview">
    <tr class="order-info">
      <td>{{ order.date }}</td>
      <td>{{ order.booker }}</td>
      <td>{{ order.stay }}</td>
      <td>{{ order.tripDates }}</td>
      <td>{{ order.nights }}</td>
      <td>{{ order.guests }}</td>
      <td>{{ $filters.currencyUSD(new Intl.NumberFormat('en-US').format(order.amount)) }}</td>
      <td class="flex justify-center">
        <button v-if="isApproved" @click="isRejected = !isRejected">
          {{ order.status[0] }}
        </button>
        <button v-if="isRejected" @click="isApproved = !isApproved">
          {{ order.status[1] }}
        </button>
      </td>
    </tr>
  </section>
</template>

<script>
export default {
  props: {
    order: Object,
  },
  data() {
    return {
      isApproved: true,
      isRejected: true,
    };
  },
  created() {
    console.log("this.order:", this.order);
  },
};
</script>