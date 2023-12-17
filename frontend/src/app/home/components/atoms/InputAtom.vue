<template>
  <div class="input-atom">
    <input
      class="shadow-common"
      type="text"
      :placeholder="placeholder"
      :value="value"
      @input="updateValue"
      :name="name"
    />
  </div>
</template>

<script>
export default {
  name: "input-atom",
  props: {
    value: String,
    placeholder: String,
    name: String,
  },
  methods: {
    /**
     * @param {Event} event
     */
    updateValue(event) {
      this.$emit("input", event.target.value);
    },
  },
};
</script>

<style lang="sass" scoped>
$width_input: 100%
$padding_input: 18px

.input-atom
  input
    font-family: Avenir, Helvetica, Arial, sans-serif
    font-size: 22px
    padding: $padding_input
    width: calc(#{$width_input} - #{$padding_input * 5})
    border: 0
    text-align: center
    outline: none
    z-index: 1
    &::placeholder
      color: #c6c6c5
</style>
