<template>
  <section class="stay-form">
    
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

    <button class="btn-form-reserve">Reserve</button>
   
   <div class="info-reserve">
   {{value2}}
   </div>
  </section>


</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
const defaultTime = ref([
  new Date(2000, 1, 1, 0, 0, 0),
  new Date(2000, 2, 1, 23, 59, 59),
])

const value2 = ref('')
const options =[
  {
    value2: 'Adults',
    label: 'Adults',
  },
  {
    value2: 'Children',
    label: 'Children',
  },
  {
    value2: 'Infans',
    label: 'Infans',
  },
  {
    value2: 'Pets',
    label: 'Pets',
  },
]
</script>
<style>
  
</style>
