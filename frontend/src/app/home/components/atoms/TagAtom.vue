<template>
  <div class="tag-atom">{{ text }}</div>
</template>

<script>
export default {
  name: "tag-atom",
  props: {
    text: String,
  },
};
</script>

<style lang="sass" scoped>
$tag_color: #9e9494
$text_size: 18px

.tag-atom
  border: 1px solid $tag_color
  border-radius: 8px
  width: fit-content
  padding: 2px 4px
  color: $tag_color
  display: inline-block
  margin-right: 6px
  font-size: $text_size
  text-transform: uppercase
</style>
