<template>
  <div class="image-tag">
    <img :src="src" alt="" />
    <span v-show="tagText">{{ tagText }}</span>
  </div>
</template>

<script>
export default {
  name: "image-tag",
  props: {
    src: String,
    alt: String,
    text: String,
  },
  computed: {
    tagText() {
      if (!this.text) return "";
      return `ID / ${this.text}`;
    },
  },
};
</script>

<style lang="sass" scoped>
$bg_tag_color: #d1cdca

.image-tag
  position: relative
  width: -webkit-fill-available
  img
    width: 100px
  span
    position: absolute
    bottom: 0
    left: 0
    background-color: $bg_tag_color
    padding: 4px 8px
    margin-bottom: -35px
    font-weight: bold
</style>
