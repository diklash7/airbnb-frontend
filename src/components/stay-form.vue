<template>
   <section class="stay-form">
            <div class="form-header">
                <div class="form-price">
              <h2>${{ stay.price}}</h2> 
               <span class="word-night"> / night</span> 
               </div>
              <nav class="form-header-rate">
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
              {{rating}} • 
               <span class="reviews-form">{{ stay.numOfReviews }} reviews </span>
            </nav>
            </div>
              <section class="form-options" >
                 <div class="form-date">
            <label>
          <el-date-picker
          class="input-date"
            v-model="value1"
            type="daterange"
            start-placeholder="check-in"
            end-placeholder= "check-out"
            :default-value="[new Date(), new Date()]"
          />
        </label>
        </div>

   <section class="form-guests">
    <select v-model="value2" placeholder="Guests">
     <option
      v-for="item in options"
      :key="item.value2"
      :label="item.label"
      :value="item.value2"
     />
     </select>
     </section>
    </section>

    <button class="btn-form-reserve" @click="goToOrder()">Reserve</button>
   
   <div class="info-form" :aaa="aaa">
    {{aaa}}
   <!-- {{value1.slice(0,6)}} -->

   <!-- {{value1.splice(20,26)}} -->

   </div>
  </section>

</template>

<script>
import { ref } from 'vue'
export default {

 props: {
    stay: {}
  },

data() {
    return {
     value1: [],
    defaultTime: ref([
     new Date().getDay(),
     new Date().getDay()
])
    }
  },
   mounted() {
    // console.log(this.stay)
  },
  computed: {
     goToOrder() {
      this.$router.push("/order");
    },
     rating() {
      return (this.stay.reviewScores.rating)/20
    },
    aaa() {
      return this.value1.join()
    }
  }
}
</script>
<style>
  
</style>
