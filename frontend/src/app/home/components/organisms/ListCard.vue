<template>
  <div class="list-card">
    <div class="list-card__item">
      <poke-card
        imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/152.svg"
        name="Chikorita"
      />
    </div>
    <div class="list-card__item">
      <poke-card
        imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/152.svg"
        name="Chikorita"
      />
    </div>
    <div class="list-card__item">
      <poke-card
        imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/152.svg"
        name="Chikorita"
      />
    </div>
    <div class="list-card__item">
      <poke-card
        imageUrl="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/152.svg"
        name="Chikorita"
      />
    </div>
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
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
  grid-gap: 10px
  width: 100%
  &__item
    display: flex
    justify-content: space-evenly
    align-items: center
</style>
