<template>
  <div class="label px-2" :class="label">{{ label }}</div>
  <!-- <div class="label px-2" :class="label">{{ stay.name }}</div> -->
</template>

<script>
import { utilService } from '../services/util-service'
export default {
  props: {
    label: String,
  },
  data() {
    return {
      color: utilService.getRandomColor(),
    }
  },
}
</script>


