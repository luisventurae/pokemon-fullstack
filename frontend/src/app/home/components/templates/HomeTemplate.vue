<template>
  <div class="hello">
    <input-atom type="text" placeholder="Filtra pokemons por nombre" />
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
