<template>
  <div class="detail-view">
    <div>
      <router-link class="detail-view__link" to="/">
        <p>Volver</p>
      </router-link>
      <xyz-transition appear xyz="fade up-50%">
        <poke-card
          v-if="character"
          :imageUrl="character.imageURL"
          :id="`${character.id}`"
          :name="character.name"
          :types="character.types"
          :beforeEvolution="character.beforeEvolution"
        />
      </xyz-transition>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import PokeCard from "../components/molecules/PokeCard.vue";

export default {
  name: "detail-view",
  components: { PokeCard },
  data: () => ({
    pokeName: "",
    character: null,
  }),
  created() {
    this.pokeName = this.$route.params.pokemon;
  },
  mounted() {
    this.loadCharacter();
  },
  computed: {
    ...mapGetters(["get_characters"]),
  },
  methods: {
    loadCharacter() {
      this.getLocalCharacter();
    },
    /**
     * Para optimizar recursos se busca primero en local
     * @return {boolean}
     */
    getLocalCharacter() {
      console.log("getLocalCharacter");
      const localCharacter = this.get_characters.find(
        (el) => el.name === this.pokeName
      );
      if (localCharacter) {
        this.character = localCharacter;
        return true;
      } else {
        return false;
      }
    },
  },
};
</script>

<style lang="sass" scoped>
.detail-view
  display: flex
  justify-content: center
  align-items: center
  height: 100vh
  &__link
    padding: 0 0 40px 0
    margin: 0 0 40px 0
    text-transform: uppercase
    color: #007bff
</style>
