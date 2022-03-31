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
        <button v-if="isApproved || isPending" @click="changeApproveStatus">
          {{ "✔️" }}
        </button>
        <button v-if="isRejected || isPending" @click="changeRejectStatus">
          {{ "❌" }}
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
      isPending: true,
    };
  },
  created() {
    console.log("this.order:", this.order);
    if (this.order.status === 'approved') {
      this.isRejected = false;
    }
  },
  methods: {
    changeApproveStatus(){
      this.isRejected = false;
      this.isPending = false;
    },
    changeRejectStatus(){
      this.isApproved = false;
      this.isPending = false;
    }
  }
};
</script>