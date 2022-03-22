<template>
  <app-header/>
  <router-view/>
</template>

<script>
import appHeader from "./components/app-header.vue";

export default {
  name: "app",
  components: {
    appHeader,
  },
};
</script>
