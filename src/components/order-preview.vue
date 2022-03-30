<template>
  <section class="order-preview">
    <tr>
      <td>{{ order.date }}</td>
      <td>{{ order.booker }}</td>
      <td>{{ order.stay }}</td>
      <td>{{ order.tripDates }}</td>
      <td>{{ order.nights }}</td>
      <td>{{ order.guests }}</td>
      <td>{{ order.amount }}</td>
      <td>
        <button>{{ order.status[0] }}</button>
        <button>{{ order.status[1] }}</button>
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
    return {};
  },
};
</script>