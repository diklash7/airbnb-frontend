
<template>
     <section v-if="stay" class="stay-detalis">
         <stay-preview :stay="stay">
        <section class="main-details">
          <div class="titles-details">
             <h1>{{ stay.name }}</h1>
             <div>
             <span>{{ stay.numOfReviews }} reviews </span> • <span>{{ stay.address.street }}</span>
             </div>
          </div>
          <div class="gallery-details">
              <div class="central-img">
                 <img :src="`src/assets/Images/${stay.imgUrls[0]}`" />
              </div>
              <!-- <div v-for="img in imgs" :key="img" class="side-imgs" > -->
              <div class="side-imgs" >
                  <div>
                 <img :src="`src/assets/Images/${stay.imgUrls[1]}`" />
                 <img :src="`src/assets/Images/${stay.imgUrls[2]}`" />
                  </div>
                  <div>
                 <img :src="`src/assets/Images/${stay.imgUrls[3]}`" />
                 <img :src="`src/assets/Images/${stay.imgUrls[4]}`" />
                  </div>
              </div>
          </div>
          <div>
           <h2> {{ stay.roomType }} by {{ stay.host.fullname }}</h2>  
           <span>
                {{ stay.capacity }} guests •
                {{ stay.bedrooms }} bedroom •
                {{ stay.beds }} bed •
                {{ stay.bathrooms }} bath
           </span>
          </div>
          <hr>
              <div>
              <h3>Great location</h3>
              <p>100% of recent guests gave the location a 5-star rating</p>
              <h3>Great check-in experience</h3>
              <p>90% of recent guests gave the check-in process a 5-star rating</p>
              <h3>Pool</h3>
              <p>Guests often search for this popular amenity</p>
        </div>
          <hr>
               <h3> Disc:</h3>
             <p> 
              {{ stay.summary }}
             </p>
          <hr>
             <h2> What this place offers</h2>
            <pre> {{stay.amenities.slice(0,10)}}</pre>
            <button>show all <span> {{stay.amenities.length}}</span> amenities</button>
          <hr>
          <div class="title-reviews">
           <h2 class="title-reviews">⭐ {{ stay.reviewScores.rating }}  •
         {{ stay.numOfReviews}} reviews </h2>
          </div>
         
           <div class="left-side-rating">
            Cleanliness       {{stay.reviewScores.cleanliness}}
            Communication     {{stay.reviewScores.communication}}
            Check-in          {{stay.reviewScores.checkin}}
           </div>
           <div class="right-side-rating"> 
            Accuracy          {{stay.reviewScores.accuracy}}
            Location          {{stay.reviewScores.location}}
            Value             {{stay.reviewScores.value}}
           </div>
        <!-- <stay-review></stay-review> -->
        <section class="list-reviews">
          <article v-for="review in stay.reviews.slice(0,6)" :key="review._id">
          <img class="img-user-review" :src="`${review.by.imgUrl}`" />
          <div>
           <h2> {{review.by.fullname}}</h2>
           <p>{{review.at.slice(0,10)}}</p>
          </div>
           <p>{{review.txt}}</p>
         </article>
          <button>show all <span> {{stay.reviews.length}}</span> reviews</button>
       </section>
     </section>
        </stay-preview>
     </section>

</template>

<script>
import { stayService } from '../services/stay-service'
import { reviewService } from '../services/review-service'
import stayPreview from '../components/stay-preview.vue'
// import stayReview from './stay-review.vue'
export default {
  components: { 
      stayPreview ,
    //   stayReview 
  },
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

</style>