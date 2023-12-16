<template>
  <div class="note-mark">
    <div class="note-mark__line"></div>
    <div class="note-mark__text-container">
      <p class="note-mark__text">{{ preTitle }}</p>
      <h3 class="note-mark__text">
        {{ title }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  name: "note-mark",
  props: {
    preTitle: String,
    title: String,
  },
};
</script>

<style lang="sass" scoped>
$pretitle_size: 18px
$title_size: 28px
$line_color: #5c2f1b

.note-mark
  display: flex
  align-items: center
  &__line
    height: 50px
    border-left: 6px solid $line_color
  &__text-container
    display: flex
    flex-direction: column
    margin: 0 10px
    &__text
      margin: 0
    p
      font-size: $pretitle_size
      margin: 0
      padding: 0
    h3
      font-size: $title_size
      margin: 0
      padding: 0
      font-weight: 500
</style>
