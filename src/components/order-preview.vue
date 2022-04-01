<template>
  <section class="order-preview">
    <tr class="order-info" :class="pendingColor">
      <td>{{ order.date }}</td>
      <td>{{ order.booker }}</td>
      <td>{{ order.stay }}</td>
      <td>{{ order.tripDates }}</td>
      <td>{{ order.nights }}</td>
      <td>{{ order.guests }}</td>
      <td>{{ $filters.currencyUSD(new Intl.NumberFormat('en-US').format(order.amount)) }}</td>
      <td class="flex justify-center">
        <button v-if="isApproved || isPending" @click="changeApproveStatus">
          {{ 'Approved' }}
        </button>
        <button v-if="isRejected || isPending" @click="changeRejectStatus">
          {{ "Declined" }}
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
      isApproved: false,
      isRejected: false,
      isPending: true,
    };
  },
  created(){
    switch (this.order.status) {
      case 'approved':
      this.isApproved = true;
      this.isPending = false;        
        break;
      case 'rejected':
      this.isRejected = true;
      this.isPending = false;        
        break;
      case 'pending':
      this.isPending = true;        
        break;
    }
  },
  methods: {
    changeApproveStatus(){
      this.isApproved = true;
      this.isPending = false;
    },
    changeRejectStatus(){
      this.isRejected = true;
      this.isPending = false;
    }
  },
  computed: {
    pendingColor() {
      return {pending: this.isPending}
    }
  }
};
</script>