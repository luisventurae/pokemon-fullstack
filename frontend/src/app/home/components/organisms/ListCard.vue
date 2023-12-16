<template>
  <div class="list-card">
    <poke-card
      imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/152.svg"
      name="Chikorita"
    />
  </div>
</template>

<script>
import PokeCard from "../molecules/PokeCard.vue";

export default {
  name: "list-card",
  components: { PokeCard },
};
</script>

<style lang="sass" scoped>
.list-card
  margin: 28px 0
</style>
