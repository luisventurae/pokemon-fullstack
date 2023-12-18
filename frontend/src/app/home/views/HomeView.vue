<template>
  <div class="home-view main__bg">
    <home-template msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HomeTemplate from "@/app/home/components/templates/HomeTemplate.vue";

export default {
  name: "home-view",
  components: {
    HomeTemplate,
  },
};
</script>
