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
              {{ stay.reviewScores.rating }} • 
               <span>{{ stay.numOfReviews }} reviews </span>
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
            :default-value="[new Date(2010, 9, 1), new Date(2010, 10, 1)]"
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
   
   <div class="info-reserve">
   {{value2}}
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
   
     value1: ref(''),
    defaultTime: ref([
     new Date(2000, 1, 1, 0, 0, 0),
     new Date(2000, 2, 1, 23, 59, 59),
])
    }
  },
   mounted() {
    console.log(this.stay)
  },
  computed: {
     goToOrder() {
      this.$router.push("/order");
    },
  }
}
</script>
<style>
  
</style>
