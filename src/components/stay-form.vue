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


     <section class="form-container">
       <el-form
        :model="form"
        label-width="80px"
      >
     
        <div class="form-add-dates">
          <div class="date-picker-title flex space-between">
            <el-form-item label="Check in"> </el-form-item>
            <el-form-item label="Check out"> </el-form-item>
          </div>
          <el-date-picker
            class="input-date"
            v-model="form.dates"
            type="daterange"
            start-placeholder="Add dates"
            end-placeholder="Add dates"
            :default-value="Check"
          />
        </div>
      </el-form>

        <Popper>
          <div class="guest-container">
            <label class="guest-label flex flex-column">
              <input
                type="text"
                v-model="form.city"
                placeholder="Add guests"
                disabled
              />
            </label>
          </div>
          <template #content>
            <div class="guests-modal flex flex-column">
              <div class="guest-type-label flex space-between align-center">
                <div class="guest-label flex flex-column">
                  <h3>Adults</h3>
                  <p>Ages 13 or above</p>
                </div>
                <div class="guest-btns flex align-center space-between">
                  <button type="button">
                    <span class="material-icons-sharp"
                      ><svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-dash"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                        /></svg
                    ></span>
                  </button>
                  <span class="guests-num">0</span>
                  <button type="button">
                    <span class="material-icons-sharp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#222222"
                        class="bi bi-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>

              <hr />

              <div class="guest-type-label flex space-between align-center">
                <div class="guest-label flex flex-column">
                  <h3>Children</h3>
                  <p>Ages 2-12</p>
                </div>
                <div class="guest-btns flex align-center space-between">
                  <button type="button">
                    <span class="material-icons-sharp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-dash"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z"
                        /></svg
                    ></span></button
                  ><span class="guests-num">0</span
                  ><button type="button">
                    <span class="material-icons-sharp">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="#222222"
                        class="bi bi-plus"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </template>
        </Popper>

      
          <div class="input3">
          <button class="btn-form-reserve" @click="goToOrder()">Reserve</button>
          </div>
      </section>
      </section>
</template>


<script>
import Popper from "vue3-popper";
  

export default {

 props: {
    stay: {}
  },
   components: {
    Popper,
  },
data() {
    return {
      form: {
        city: "",
        dates: [],
      },
    };
},
  computed: {
     goToOrder() {
      this.$router.push("/order");
    },
     rating() {
      return ((this.stay.reviewScores.rating)/20).toFixed(2)
    },
  }
}
</script>
<style>

</style>
