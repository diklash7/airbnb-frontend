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
        <button v-if="!isApproved || isPending" @click="changeRejectStatus">
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
      isApproved: null,
      isPending: null,
    };
  },
  created(){
    console.log("this.order.status:", this.order.status);
    if (this.order.status === 'approved') {
      this.isApproved = true;
      this.isPending = false;
    }
    else if (this.order.status === 'rejected') {
      this.isApproved = false;
      this.isPending = false;
    } else {
     this.isPending = true; 
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