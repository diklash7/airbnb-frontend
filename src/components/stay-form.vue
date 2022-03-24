<template>
  <section class="stay-form">
      <section class="form-options" >
      <section class="form-date">
     <div>
      <input
        v-model="value1"
        type="date"
        placeholder="check-in"
        :default-time="defaultTime"
      />
     </div>
     <div>
      <input
        v-model="value1"
        type="date"
        placeholder="check-out"
        :default-time="defaultTime"
      />
     </div>
    </section>

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
  </section>

</template>

<script>
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
.demo-date-picker {
  display: flex;
  width: 100%;
  padding: 0;
  flex-wrap: wrap;
}
.demo-date-picker .block {
  padding: 30px 0;
  text-align: center;
  border-right: solid 1px var(--el-border-color);
  flex: 1;
}
.demo-date-picker .block:last-child {
  border-right: none;
}
</style>
