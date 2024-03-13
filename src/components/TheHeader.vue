<template>
  <header class="header">
    <nav class="nav">
      <div class="nav__logo">
        <img src="@/assets/logo.svg" alt="logo" />
      </div>

      <ul class="nav__list">
        <li><router-link to="/tenders" active-class="active">Тендеры</router-link></li>
        <li><router-link to="/companies" active-class="active">Компании</router-link></li>
        <li><router-link to="/products" active-class="active">Продукты</router-link></li>
        <li><router-link to="/cases" active-class="active">Кейсы</router-link></li>
        <li><router-link to="/blog" active-class="active">Блог</router-link></li>
      </ul>

      <ul class="nav__login">
        <li><router-link to="/login">Вход и регистрация</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
/* Header */
.header {
  overflow: hidden;
  position: relative;
  min-height: 96px;
  padding: 20px var(--container-padding) 0;
}

.header a {
  color: var(--primary-color);
}

.header::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  border: 1px solid #f2f2f2;
}

/* Nav */

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 40px;
}

.nav__list {
  display: flex;
  column-gap: 40px;
  font-size: 16px;
  font-weight: 400;
}

.nav__list a.active,
.nav__list a:hover,
.nav__login a.active,
.nav__login a:hover {
  opacity: 0.3;
}

.nav__login {
  font-size: 16px;
  font-weight: 400;
}
</style>
