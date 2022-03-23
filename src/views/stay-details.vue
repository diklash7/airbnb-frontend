
<template>
     <section v-if="stay" class="stay-detalis">
         <stay-preview :stay="stay">
        <section class="main-details">
          <div class="titles-details">
             <h2>{{ stay.name }}</h2>
             <span>{{ stay.numOfReviews }} reviews </span> • <span>{{ stay.address.street }}</span>
          </div>
          <div class="gallery-details">
              <div class="central-img">
                 <img :src="`src/assets/Images/${stay.imgUrls[0]}`" />
              </div>
              <div class="side-imgs" >
                 <img :src="`src/assets/Images/${stay.imgUrls[1]}`" />
                 <img :src="`src/assets/Images/${stay.imgUrls[2]}`" />
                 <img :src="`src/assets/Images/${stay.imgUrls[3]}`" />
                 <img :src="`src/assets/Images/${stay.imgUrls[4]}`" />
              </div>
          </div>
          <div>
           <h3> {{ stay.roomType }}</h3>  
           <span>
                {{ stay.capacity }} guests •
                {{ stay.bedrooms }} bedroom •
                {{ stay.beds }} bed •
                {{ stay.bathrooms }} bath
           </span>
          </div>
          

        </section>
        </stay-preview>
     </section>

</template>

<script>
import { stayService } from '../services/stay-service'
import { reviewService } from '../services/review-service'
import stayPreview from '../components/stay-preview.vue'
export default {
  components: { stayPreview },
  name: 'stay-details',
  data() {
    return {
      stay: null,
      reviewToAdd: null,
    }
  },
  async created() {
      const { id } = this.$route.params
    this.stay = await stayService.getById(id)
    const user = this.$store.getters.user

    // review-store
    await this.$store.dispatch({ type: 'getReviews', filterBy: { stayId: this.stay._id } })

    if (user) {
      this.reviewToAdd = await reviewService.getEmptyReview()
      this.reviewToAdd.userId = user._id
      this.reviewToAdd.stayId = this.stay._id
    }
  },
   computed: {
     user() {
      return this.$store.getters.user
    },
     reviews() {
      return this.$store.getters.reviews
    },
  },
  methods: {
    async addReview() {
      if (!this.reviewToAdd.content) return
      await this.$store.dispatch({ type: 'addReview', review: this.reviewToAdd })
      await this.$store.dispatch({ type: 'getReviews', filterBy: { toyId: this.toy._id } })
    },
    async removeReview(reviewId) {
      await this.$store.dispatch({ type: 'removeReview', reviewId })
      await this.$store.dispatch({ type: 'getReviews', filterBy: { toyId: this.toy._id } })
    },
  },
  }

</script>
<style>
.gallery-details {
    display: flex;
}

.central-img img{
width: 400px;
height: 400px;
}
.side-imgs {
 display: flex;
 flex-wrap: wrap;
 gap: 15px
}

.side-imgs img {
width: 150px;
height: 150px;
}
</style>