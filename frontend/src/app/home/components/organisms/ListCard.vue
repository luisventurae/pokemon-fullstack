<template>
  <div class="list-card">
    <div
      v-for="(character, i) in get_characters"
      :key="i"
      class="list-card__item"
    >
      <XyzTransition appear xyz="fade up-100% origin-top flip-down">
        <poke-card
          :imageUrl="character.imageURL"
          :id="`${character.id}`"
          :name="character.name"
          :types="character.types"
          :beforeEvolution="character.beforeEvolution"
        />
      </XyzTransition>
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
    this.handlePaginate();
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeDestroy() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  computed: {
    ...mapGetters(["get_characters"]),
  },
  methods: {
    ...mapActions(["paginateCharactersAction"]),
    handleScroll() {
      const buffer = 1; // Ajusta este valor según sea necesario
      const isAtBottom =
        window.innerHeight + window.scrollY + buffer >=
        Math.max(
          document.body.scrollHeight,
          document.documentElement.scrollHeight,
          document.body.offsetHeight,
          document.documentElement.offsetHeight,
          document.body.clientHeight,
          document.documentElement.clientHeight
        );

      if (isAtBottom) {
        // Emitir un evento cuando el scroll llega al final del body
        this.$emit("scroll-to-bottom");
        this.handlePaginate();
      }
    },
    handlePaginate() {
      const self = this;
      this.paginateCharactersAction(this.page).then((el) => {
        self.page = el.nextPage;
      });
    },
  },
};
</script>

<style lang="sass" scoped>
$margin_space: 28px

.list-card
  margin: $margin_space 0
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr))
  grid-gap: 10px
  width: 100%
  &__item
    display: flex
    justify-content: space-evenly
    align-items: center
    z-index: 1
    margin: 0 0 $margin_space 0
</style>
