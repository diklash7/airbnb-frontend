
<template>
     <section v-if="stay" class="stay-detalis main-layout">
         <stay-preview :stay="stay">
        <section class="main-details">
          <div class="titles-details">
             <h1>{{ stay.name }}</h1>
             <div>
               <span class="star">
               <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#E01661"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
              </span>
                {{ stay.reviewScores.rating }} • 
             <span>{{ stay.numOfReviews }} reviews </span> • <span>{{ stay.address.street }}</span>
             </div>
          </div>
          <div class="gallery-details">
              <div class="central-img">
                 <img class="center-img" :src="`src/assets/Images/${stay.imgUrls[0]}`" />
              </div>
              <div class="side-imgs" >
                  <div>
                 <img :src="`src/assets/Images/${stay.imgUrls[1]}`" />
                 <img class="side-img2" :src="`src/assets/Images/${stay.imgUrls[2]}`" />
                  </div>
                  <div>
                 <img :src="`src/assets/Images/${stay.imgUrls[3]}`" />
                 <img class="side-img4" :src="`src/assets/Images/${stay.imgUrls[4]}`" />
                  </div>
              </div>
          </div>
          <div class="host-details">
              <div class="host-title">
           <h2> {{ stay.roomType }} by {{ stay.host.fullname }}</h2>  
           <span>
                {{ stay.capacity }} guests •
                {{ stay.bedrooms }} bedroom •
                {{ stay.beds }} bed •
                {{ stay.bathrooms }} bath
           </span>
              </div>
            <img class="img-host" :src="`${stay.host.pictureUrl}`" />
          </div>
          <stay-form></stay-form>
          <hr>
          <div class="info-check">
            <section>
              <img src="../assets/Icons/Location.png">
            <div>
              <h3>Great location</h3>
              <p>100% of recent guests gave the location a 5-star rating</p>
            </div>
            </section>
              <section>
              <img src="../assets/Icons/House-key.png">
             <div>
              <h3>Great check-in experience</h3>
              <p>90% of recent guests gave the check-in process a 5-star rating</p>
            </div>
            </section>
              <section>
              <img src="../assets/Icons/Pool.png">
              <div>
              <h3>Pool</h3>
              <p>Guests often search for this popular amenity</p>
            </div>
            </section>
          </div>
          <hr>
          <div class="stay-disc">
               <h3> Info:</h3>
             <p> 
              {{ stay.summary }}
             </p>
          </div>
          <hr>
             <h2> What this place offers</h2>
            <section class="amenities-details">
              <div class="amenities-side">
            <div class="amenities-details-left" v-for="amenitie in stay.amenities.slice(0,5)" :key="amenitie">
              <img :src="getImage(amenitie)" alt="">
              <span> {{amenitie}}</span>
              </div>
            </div>
             <div class="amenities-side">
            <div class="amenities-details-right" v-for="amenitie in stay.amenities.slice(5,10)" :key="amenitie">
              <img :src="getImage(amenitie)" alt="">
              <span> {{amenitie}}</span>
            </div>
            </div>
              </section>
          <hr>
          <div class="title-reviews">
           <h2 class="title-reviews">
               <span class="star">
               <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#E01661"
                class="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                />
              </svg>
            </span>
             
              {{ stay.reviewScores.rating }}  •
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
          <article v-for="review in stay.reviews.slice(0,8)" :key="review._id">
          <img class="img-user-review" :src="`${review.by.imgUrl}`" />
          <div>
           <h2> {{review.by.fullname}}</h2>
           <p>{{review.at.slice(0,10)}}</p>
          </div>
           <p>{{review.txt.slice(0,150)}}</p>
         </article>
       </section>
          <button class="btn-show-more">show all <span> {{stay.reviews.length}}</span> reviews</button>
     </section>
        </stay-preview>
     </section>

</template>

<script>
import { stayService } from '../services/stay-service'
import { reviewService } from '../services/review-service'
import stayPreview from '../components/stay-preview.vue'
import stayForm from '../components/stay-form.vue'
// import stayReview from './stay-review.vue'
export default {
  components: { 
      stayPreview ,
      stayForm,
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
    getImage() {
      return (amenitie) => new URL(`../assets/Icons/${amenitie}.png`, import.meta.url)
    }
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