<template>
  <div class="home-template">
    <br />
    <xyz-transition appear xyz="fade up-100%">
      <input-atom
        type="text"
        placeholder="Filtra pokemons por nombre"
        v-model="searcher"
      />
    </xyz-transition>
    <list-card />
  </div>
</template>

<script>
import { mapMutations } from "vuex";
import InputAtom from "@/app/home/components/atoms/InputAtom";
import ListCard from "@/app/home/components/organisms/ListCard";

export default {
  name: "home-template",
  components: { InputAtom, ListCard },
  data: () => ({
    searcher: null,
  }),
  watch: {
    searcher() {
      this.SET_POKE_SEARCH({ pokeSearch: this.searcher });
    },
  },
  methods: {
    ...mapMutations(["SET_POKE_SEARCH"]),
  },
};
</script>

<style lang="sass" scoped>
.home-template
  padding: 0 0 100px 0
</style>
