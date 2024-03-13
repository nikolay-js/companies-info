<template>
  <div class="companie" @click="$router.push(`/companies/${companie.id}`)">
    <div class="companie__img">
      <img :src="companie.picture" alt="Companie" />
    </div>
    <div class="companie__content">
      <div class="companie__title">{{ companie.title }}</div>
      <div class="companie__description">
        {{ companie.description_short }}
      </div>
      <div class="companie__tabs">
        <div
          class="companie__tab"
          v-for="companieTab in companieTabs"
          :companieTab="companieTab"
          :key="companieTab.id"
        >
          {{ companieTab.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    companie: {
      type: Object,
      required: true
    }
  },
  computed: {
    companieTabs () {
      return [
        ...this.companie.companySpecializations,
        ...this.companie.industries,
      ]
    }
  }
}
</script>

<style scoped>
.companie {
  position: relative;
  display: flex;
  padding: 32px 15px 32px 32px;
  border-radius: 10px;
  transition: background 0.2s ease;
}
.companie::after {
  content: "";
  position: absolute;
  right: 23px;
  bottom: 23px;
  width: 24px;
  height: 24px;
  opacity: 0;
  transition: opacity 0.2s ease-in;

  background-image: url("@/assets/arrow.svg");
}
.companie:hover {
  cursor: pointer;
  background: rgba(3, 9, 83, 0.03);
  border: none;
  transition: background 0.2s ease;
}
.companie:hover .companie__title {
  color: rgba(239, 62, 74, 1);
  transition: color 0.2s ease-in;
}
.companie:hover .companie__tab {
  background: rgba(255, 255, 255, 1);
  transition: background 0.2s ease-in;
}
.companie:hover::after {
  opacity: 1;
  transition: opacity 0.2s ease-in;
}
.companie__img {
  width: 164px;
}
.companie__img img {
  width: 50%;
}
.companie__content {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 524px;
  height: 128px;
}
.companie__title {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  font-size: 24px;
  font-weight: 400;
  transition: color 0.2s ease-in;
}
.companie__description {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  color: var(--secondary-color);
}
.companie__tabs {
  overflow: hidden;
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  max-height: 32px;
}
.companie__tab {
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
