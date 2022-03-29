<template>
  <div class="dashboard-page">
    <section class="dashboard-container">
      <div class="main-container">
        <section class="dash-header">
          <div class="dash-nav-container">
            <button>My Stays</button>
            <button>My Orders</button>
          </div>
          <div class="dash-stats"></div>
        </section>
        <section class="dash-info">
          <div class="host-lists-container">
            <host-stay-list />
            <host-order-list />
          </div>
        </section>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  created() {

  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
};
</script>

