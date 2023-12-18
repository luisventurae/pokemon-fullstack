<template>
  <div class="home-template">
    <br />
    <XyzTransition appear xyz="fade up-100%">
      <input-atom type="text" placeholder="Filtra pokemons por nombre" />
    </XyzTransition>
    <list-card />
  </div>
</template>

<script>
import InputAtom from "@/app/home/components/atoms/InputAtom";
import ListCard from "@/app/home/components/organisms/ListCard";

export default {
  name: "home-template",
  components: { InputAtom, ListCard },
};
</script>

<style lang="sass" scoped>
.home-template
  padding: 0 0 100px 0
</style>
