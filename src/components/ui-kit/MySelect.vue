<template>
  <div class="select-wrapper">
    <select class="select" :value="modelValue" @change="changeOption">
      <option
        v-for="option in options"
        :key="option.value"
        :disabled="option.value === ''"
        :selected="option.value === ''"
        :value="option.value"
      >{{ option.name }}</option>
    </select>
    <button type="button" class="select__clear-btn" @click="clearValue">
      <img src="@/assets/x.svg" alt="clear" />
    </button>
  </div>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: {
      type: String
    },
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOption(event) {
      this.$emit("update:modelValue", event.target.value);
    },
    clearValue() {
      this.$emit("update:modelValue", "");
    }
  }
};
</script>

<style scoped>
.select-wrapper {
  position: relative;
}
.select {
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  width: 100%;
  padding: 9px 54px 9px 16px;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  background-color: #ffffff;
  outline: none;
  cursor: pointer;
}
.select::-ms-expand {
  display: none;
}
.select:focus {
  outline: none;
  box-shadow: 0px 0px 0px 1px #38577a, 0px 0px 10px #7e9bbd;
}
.select__clear-btn {
  position: absolute;
  width: 12px;
  height: 12px;
  top: 50%;
  right: 38px;
  transform: translateY(-50%);
  transition: visibility 0.2s, opacity 0.2s ease;
  opacity: 0;
}
.select:has(option[value=""]:not(:checked)) + .select__clear-btn {
  opacity: 1;
  visibility: visible;
}
.select-wrapper::after {
  content: "";

  position: absolute;
  top: 50%;
  right: 14px;
  width: 24px;
  height: 24px;
  transform: translateY(-50%);

  background-image: url("@/assets/arrow-select.svg");
  pointer-events: none;
}
</style>
