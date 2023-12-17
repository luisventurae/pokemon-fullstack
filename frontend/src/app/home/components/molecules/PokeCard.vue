<template>
  <div class="poke-card shadow-common">
    <div class="poke-card__content">
      <div class="poke-card__content__image">
        <image-tag :src="imageUrl" alt="" :text="id" />
      </div>
      <div class="poke-card__content__desc">
        <ul>
          <li>
            <h4>{{ name }}</h4>
          </li>
          <li>
            <tag-atom v-for="txt in types" :text="txt" :key="txt" />
          </li>
          <li v-show="beforeEvolution">
            <note-mark preTitle="Evoluciona de:" :title="beforeEvolution" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import TagAtom from "../atoms/TagAtom.vue";
import NoteMark from "../atoms/NoteMark.vue";
import ImageTag from "../atoms/ImageTag.vue";

export default {
  name: "poke-card",
  components: { TagAtom, NoteMark, ImageTag },
  props: {
    id: String,
    imageUrl: String,
    name: String,
    types: Array,
    beforeEvolution: String,
  },
};
</script>

<style lang="sass" scoped>
$bg_pokecard: #dfdfdf

.poke-card
  background-color: white
  width: 350px
  height: 390px
  font-size: 18px
  &__content
    &__image
      background-color: $bg_pokecard
      width: 100%
      height: 200px
      display: flex
      align-items: center
      justify-content: center
    &__desc
      background-color: #fff
      height: 100%
      ul
        list-style: none
        padding: 8px
        margin: 0
        li
          padding: 12px
          margin: 0
          text-align: left
          padding-bottom: 0
          h4
            font-size: 28px
            margin: 12px 0 0 0
          &:nth-child(2)
            padding-top: 0
</style>
