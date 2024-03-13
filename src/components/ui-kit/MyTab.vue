<template>
  <div class="tabs">
    <div class="tab" v-for="tab in tabs" :tab="tab" :key="tab.id">{{ tab.name || tab.title }}</div>
  </div>
</template>

<script>
export default {
  name: "my-tab",
  props: {
    tabs: {
      type: Array,
      default: () => []
    }
  }
};
</script>

<style scoped>
.tabs {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  max-height: 64px;
}
.tab {
  display: inline-block;
  padding: 6px 22px;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.12px;

  color: var(--secondary-color);
  background: rgba(247, 247, 247, 1);
  border-radius: 200px;
  transition: color 0.2s ease-in;
}
</style>
