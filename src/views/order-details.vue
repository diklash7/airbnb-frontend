<template>
 
<section class="order-details details-layout">
  <div class="order-header">
    <h1>Your order:</h1>
     <button @click="goBack()"><h3>Back</h3></button>
  </div>

    <section class="order-details-container">


    </section>
</section>
</template>

<script>
export default {
 
methods: {
    goBack() {
      this.$router.push("/explore");
    },
}
}
</script>