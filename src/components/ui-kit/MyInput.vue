<template>
  <input :value="modelValue" @input="updateInput" />
</template>

<script>
export default {
  name: 'my-input',
  props: {
    modelValue: [String, Number]
  },
  methods: {
    updateInput (event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>
input {
 background-image: url('@/assets/search.svg');
 background-position: 12px center;
 background-repeat: no-repeat;
}
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
}
</style>
