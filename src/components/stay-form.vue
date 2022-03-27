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
            <form class="bg-white shadow-md rounded px-8 pt-6 pb-8" @submit.prevent>
    <div class="mb-4">
      <v-date-picker
        v-model="range"
        mode="dateTime"
        :masks="masks"
        is-range
      >
        <template v-slot="{ inputValue, inputEvents, isDragging }">
          <div class="flex flex-col sm:flex-row justify-start items-center">
            <div class="relative flex-grow">
              <svg
                class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              <input
                class="flex-grow pl-8 pr-2 py-1 bg-gray-100 border rounded w-full"
                :class="isDragging ? 'text-gray-600' : 'text-gray-900'"
                :value="inputValue.start"
                v-on="inputEvents.start"
              />
            </div>
            <span class="flex-shrink-0 m-2">
              <svg
                class="w-4 h-4 stroke-current text-gray-600"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </span>
            <div class="relative flex-grow">
              <svg
                class="text-gray-600 w-4 h-full mx-2 absolute pointer-events-none"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                ></path>
              </svg>
              <input
                class="flex-grow pl-8 pr-2 py-1 bg-gray-100 border rounded w-full"
                :class="isDragging ? 'text-gray-600' : 'text-gray-900'"
                :value="inputValue.end"
                v-on="inputEvents.end"
              />
            </div>
          </div>
        </template>
      </v-date-picker>
    </div>
  </form>

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
          value1: ref(''),
      value2: ref(''),
      defaultTime: new Date(2000, 1, 1,),
      shortcuts: [
  {
    text: 'Today',
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]
    }
  }, data() {
    return {
      range: {
        start: new Date(2020, 0, 6),
        end: new Date(2020, 0, 23),
      },
      masks: {
        input: 'YYYY-MM-DD h:mm A',
      },
    };
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
  }
}
</script>
<style>
</style>
