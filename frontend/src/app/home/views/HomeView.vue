<template>
  <div class="home main__bg">
    <!-- <img alt="Vue logo" src="@/assets/logo.png" /> -->
    <home-template msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTemplate from "@/app/home/components/templates/HomeTemplate.vue";

export default {
  name: "HomeView",
  components: {
    HomeTemplate,
  },
};
</script>
