<template>
  <div class="companie-info">
    <div class="companie-info__content">
      <button class="content__back" @click="$router.go(-1)">
        <img src="@/assets/arrow.svg" alt="Arrow" />
        Компании
      </button>
      <h1 class="content__title">{{companiesInfo.title}}</h1>
      <div class="content__age">{{companiesInfo.age}}</div>
      <span>лет</span>
      <div class="content__staff">{{companiesInfo.staff}}</div>
      <span>человек</span>
      <p class="content__description-full">{{companiesInfo.description_full}}</p>
      <p class="content__description-short">{{companiesInfo.description_short}}</p>
      <h2 class="content__specializations">Проектная специализация</h2>
      <div class="content__tabs">
        <my-tab :tabs="companiesInfo.companySpecializations" />
      </div>
      <h2 class="content__industries">Технологии</h2>
      <div class="content__tabs">
        <my-tab :tabs="companiesInfo.industries" />
      </div>
    </div>
    <div class="companie-info__contacts">
      <img :src="companiesInfo.picture" alt="logo" />
      <div class="contacts__contact">
        <h3>Сайт:</h3>
        <p>{{companiesInfo.url}}</p>
      </div>
      <div class="contacts__contact">
        <h3>E-mail:</h3>
        <p>{{companiesInfo.contact_email}}</p>
      </div>
      <div class="contacts__contact">
        <h3>Телефон:</h3>
        <p>{{companiesInfo.contact_phone}}</p>
      </div>
      <div class="contacts__contact">
        <h3>Офис:</h3>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import MyTab from "@/components/ui-kit/MyTab.vue";
export default {
  components: { MyTab },
  data() {
    return {
      companiesInfo: []
    };
  },
  methods: {
    async fetchInfo() {
      try {
        const response = await axios.get(
          `http://api-test.duotek.ru/companies/info?id=${this.$route.params.id}`
        );
        this.companiesInfo = response.data.data;
      } catch (error) {
        alert("Ошибка");
      }
    }
  },
  mounted() {
    this.fetchInfo();
  }
};
</script>

<style scoped>
.companie-info {
  display: flex;
  padding: 39px var(--container-padding) 0;
  column-gap: 119px;
}
.companie-info__content {
  width: 744px;
}
.content__back {
  display: flex;
  align-items: center;
  column-gap: 11px;
  margin-bottom: 12px;
}
.content__back img {
  transform: rotate(180deg);
  filter: invert(9%) sepia(37%) saturate(7226%) hue-rotate(227deg)
    brightness(84%) contrast(119%);
}
.content__title {
  font-family: Raleway;
  font-size: 36px;
  font-weight: 600;
  line-height: 46.8px;
  letter-spacing: 0.12px;
  margin-bottom: 18px;
  color: var(--secondary-color);
}
.content__age,
.content__staff {
  display: inline-block;
  font-size: 60px;
  font-weight: 300;
  line-height: 66px;
  color: #ef3e4a;
}
.content__age + span,
.content__staff + span {
  display: inline-block;
  vertical-align: top;
  padding-top: 8px;
}
.content__staff {
  margin-left: 16px;
  margin-bottom: 10px;
}
.content__description-full {
  font-size: 18px;
  font-weight: 400;
  line-height: 25px;
  margin-bottom: 24px;
  color: var(--secondary-color);
}
.content__description-short {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
  margin-bottom: 40px;
  color: var(--secondary-color);
}
.content__specializations,
.content__industries {
  font-size: 18px;
  font-weight: 400;
  line-height: 18px;
  margin-bottom: 24px;
}
.content__tabs {
  max-height: 68px;
  margin-bottom: 40px;
}
.content__industries {
  max-height: 177px;
}
.companie-info__contacts {
  width: 264px;
}
.companie-info__contacts img {
  max-width: 120px;
  max-height: 120px;
  margin-top: 140px;
  margin-bottom: 16px;
}
.companie-info__contacts h3 {
  color: #808080;
}
.contacts__contact {
  font-size: 14px;
  font-weight: 400;
  line-height: 21px;
}
.contacts__contact:not(:last-child) {
  margin-bottom: 20px;
}
</style>
