<template>
  <div class="container">
    <TheHeader />
    <router-view />
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
import TheFooter from "./components/TheFooter.vue";

export default {
  name: "App",
  components: {
    TheHeader,
    TheFooter
  }
};
</script>

<style>
@import "@/styles/reset.css";

:root {
  --container-width: 1400px;
  --container-padding: 100px;
  --primary-color: #030953;
  --secondary-color: #000000;
}

body {
  font-family: "Rubik", sans-serif;
  background-color: #ffffff;
  color: var(--primary-color);
}

.container {
  max-width: var(--container-width);
  margin: 0 auto;
}
</style>
