<template>
    <section>
      <h1>All Review:</h1>
      <article v-for="review in reviews" :key="review._id">
           <h2> {{stay.reviews[0].by.fullname}}</h2>
           <p>{{stay.reviews[at]}}</p>
      </article>
   </section>
</template>

 <script>
export default {
  name: 'stay-review',
  data() {
    return {
      reviews: null,
    }
  },
  async created() {
    this.reviews = await this.$store.dispatch({ type: 'getReviews' })
  }
}
</script>

<style></style>
