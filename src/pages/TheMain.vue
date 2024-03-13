<template>
  <main>
    <section class="companies">
      <div class="companies__row">
        <div class="companies__list">
          <h1 class="companies__title">Каталог компаний</h1>
          <div class="companies__search">
            <my-input
              type="search"
              class="search__input"
              placeholder="Поиск продукта или отрасли"
              v-model="searchValue"
            />
            <button type="button" class="search__clear-btn" @click="searchClear">
              <img src="@/assets/x.svg" alt="clear" />
            </button>
            <button type="button" class="search__btn" @click="searchQuery = searchValue">Найти</button>
          </div>
          <div class="companies__items">
            <companie-item v-for="companie in companies" :companie="companie" :key="companie.id" />
          </div>
        </div>
        <div class="companies__select">
          <label for="industry">Отрасль</label>
          <my-select
            name="industry"
            id="industry"
            v-model="selectedIndustry"
            :options="industryOptions"
          />
          <label for="specialization">Специализация</label>
          <my-select
            name="specialization"
            id="specialization"
            v-model="selectedSpecialization"
            :options="specializationOptions"
          />
        </div>
      </div>
    </section>
    <section class="pagination">
      <div
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        class="pagination__page"
        :class="{
    'pagination__current-page': page === pageNumber
    }"
        @click="changePage(pageNumber)"
      >{{ pageNumber }}</div>
    </section>
  </main>
</template>

<script>
import axios from "axios";
import CompanieItem from "@/components/CompanieItem";
import MySelect from "@/components/ui-kit/MySelect.vue";
import MyInput from "@/components/ui-kit/MyInput.vue";
export default {
  components: { CompanieItem, MySelect, MyInput },
  props: Array,
  data() {
    return {
      companies: [],
      specialization: [],
      industry: [],
      searchQuery: "",
      searchValue: "",
      selectedIndustry: this.$route.query.industries || "",
      selectedSpecialization: this.$route.query.specializations || "",
      page: 1,
      per_page: 10,
      totalPages: 0
    };
  },
  methods: {
    changePage(pageNumber) {
      this.page = pageNumber;
      window.scrollTo(0, 0);
    },
    async fetchCompanies() {
      try {
        const response = await axios.get(
          "http://api-test.duotek.ru/companies",
          {
            params: this.payload
          }
        );
        this.companies = response.data.data;
        this.totalPages = response.data.meta.last_page;
      } catch (error) {
        alert("Ошибка");
      }
    },
    async fetchDefinitions() {
      try {
        const response = await axios.get(
          "http://api-test.duotek.ru/definitions"
        );
        this.industry = response.data.Industry;
        this.specialization = response.data.CompanySpecialization;
      } catch (error) {
        alert("Ошибка");
      }
    },
    searchClear() {
      this.searchValue = "";
      if (this.searchValue !== this.searchQuery)
        this.searchQuery = this.searchValue;
    }
  },
  mounted() {
    this.fetchCompanies();
    this.fetchDefinitions();
  },
  watch: {
    payload() {
      this.fetchCompanies();
      this.$router.push({
        query: Object.keys(this.payload)
          .filter(key => ["specializations", "industries"].includes(key))
          .reduce((obj, key) => {
            obj[key] = this.payload[key];
            return obj;
          }, {})
      });
    }
  },
  computed: {
    industryOptions() {
      return [
        { value: "", name: "Все отрасли" },
        ...this.industry.map(({ id, title }) => ({ value: id, name: title }))
      ];
    },
    specializationOptions() {
      return [
        { value: "", name: "Все специализации" },
        ...this.specialization.map(({ id, title }) => ({
          value: id,
          name: title
        }))
      ];
    },
    payload() {
      return {
        ...(this.selectedSpecialization !== ""
          ? { specializations: this.selectedSpecialization }
          : {}),
        ...(this.selectedIndustry !== ""
          ? { industries: this.selectedIndustry }
          : {}),
        ...(this.searchQuery !== "" && this.searchQuery.length >= 2
          ? { search: this.searchQuery }
          : {}),
        page: this.page,
        per_page: this.per_page
      };
    }
  }
};
</script>

<style>
.pagination {
  display: flex;
  justify-content: center;
  margin-bottom: 44px;
}
.pagination__page {
  padding: 16px;
  font-size: 16px;
  font-weight: 400;
  border-radius: 4px;
  color: var(--primary-color);
  cursor: pointer;
}
.pagination__current-page {
  color: #808080;
  background: #f7f7f7;
}
.companies {
  padding: 50px 100px 40px 76px;
}
.companies__row {
  display: flex;
  justify-content: space-between;
}
.companies__list {
  max-width: 792px;
}
.companies__title {
  margin-left: 24px;
  margin-bottom: 20px;
  font-family: Raleway;
  font-size: 36px;
  font-weight: 600;
  color: rgba(0, 0, 0, 1);
}
.companies__search {
  position: relative;
  margin: 0 24px 40px;
}
.search__input {
  display: inline-block;
  width: 645px;
  height: 40px;
  padding: 8px 40px;
  border-radius: 4px 0px 0px 4px;
  border: 1px solid rgba(229, 229, 229, 1);
}
.search__input:focus {
  outline: none;
  box-shadow: 0px 0px 0px 1px #38577a, 0px 0px 10px #7e9bbd;
}
.search__clear-btn {
  position: absolute;
  right: 96px;
  transform: translateY(60%);
  transition: visibility 0.2s, opacity 0.2s ease;
  opacity: 0;
}
.search__input:not(:placeholder-shown) + .search__clear-btn {
  opacity: 1;
  visibility: visible;
}
.search__btn {
  display: inline-block;
  width: 80px;
  height: 40px;
  font-size: 14px;
  font-weight: 400;
  color: #fff;
  background: var(--primary-color);
  border-radius: 0px 4px 4px 0px;
}
.search__btn:active {
  position: relative;
  top: 1px;
}
.companies__select {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 264px;
  height: 204px;
  padding: 16px;
  border-radius: 4px;
  background: #f7f7f7;
}
</style>
