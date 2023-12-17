<template>
  <div class="list-card">
    <div
      v-for="(character, i) in get_characters"
      :key="i"
      class="list-card__item"
    >
      <!-- https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/152.svg -->
      <poke-card
        :imageUrl="character.imageURL"
        :id="`${character.id}`"
        :name="character.name"
        :types="character.types"
        :beforeEvolution="character.beforeEvolution"
      />
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import PokeCard from "../molecules/PokeCard.vue";

export default {
  name: "list-card",
  components: { PokeCard },
  data: () => ({
    page: 1,
  }),
  mounted() {
    const self = this;
    this.paginateCharactersAction(this.page).then((el) => {
      self.page = el.nextPage;
    });
  },
  computed: {
    ...mapGetters(["get_characters"]),
  },
  methods: {
    ...mapActions(["paginateCharactersAction"]),
  },
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
    z-index: 1
</style>
