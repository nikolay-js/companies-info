<template>
  <footer class="footer">
    <nav class="nav">
      <ul class="nav__list">
        <h2 class="title">Тендеры</h2>
        <li>
          <a href="#!" class="active">Добавить тендер</a>
        </li>
        <li>
          <a href="#!">Каталог тендеров</a>
        </li>
        <li>
          <a href="#!">Работа с клиентами</a>
        </li>
        <li>
          <a href="#!">Управление проектами</a>
        </li>
        <li>
          <a href="#!">Маркетинг</a>
        </li>
        <li>
          <a href="#!">Финансы</a>
        </li>
        <li>
          <a href="#!">Управление бизнесом</a>
        </li>
      </ul>
      <ul class="nav__list nav__list--background">
        <h2 class="title">Компании</h2>
        <li>
          <a href="#!" class="active">Добавить компанию</a>
        </li>
        <li>
          <a href="#!">Рейтинги</a>
        </li>
        <li>
          <a href="#!">Отраслевая специализация</a>
        </li>
        <li>
          <a href="#!">Интеграторы</a>
        </li>
        <li>
          <a href="#!">Решения для бизнеса крепеж</a>
        </li>
        <li>
          <a href="#!">Разработка сайтов</a>
        </li>
        <li>
          <a href="#!">Мобильные приложения</a>
        </li>
        <li>
          <a href="#!">Онлайн-реклама</a>
        </li>
        <li>
          <a href="#!">Контент</a>
        </li>
      </ul>
      <ul class="nav__list">
        <h2 class="title">Продукты</h2>
        <li>
          <a href="#!" class="active">Рейтинги</a>
        </li>
        <li>
          <a href="#!">По отраслям</a>
        </li>
        <li>
          <a href="#!">Работа с клиентами</a>
        </li>
        <li>
          <a href="#!">Управление проектами</a>
        </li>
        <li>
          <a href="#!">Маркетинг</a>
        </li>
        <li>
          <a href="#!">Финансы</a>
        </li>
        <li>
          <a href="#!">Управление бизнесом</a>
        </li>
      </ul>
      <ul class="nav__list nav__list--background">
        <h2 class="title">Кейсы</h2>
        <li>
          <a href="#!" class="active">Автоматизация сантехников</a>
        </li>
        <li>
          <a href="#!">Автоматизация клининга</a>
        </li>
        <li>
          <a href="#!">Автоматизация СТО</a>
        </li>
        <li>
          <a href="#!">Автоматизация сантехников</a>
        </li>
        <li>
          <a href="#!">Автоматизация клининга</a>
        </li>
        <li>
          <a href="#!">Автоматизация СТО</a>
        </li>
      </ul>
    </nav>
    <div class="links">
      <div class="social-icons">
        <a href="#!">
          <img src="@/assets/fb.svg" alt="Facebook Icon" />
        </a>
        <a href="#!">
          <img src="@/assets/vk.svg" alt="Vk Icon" />
        </a>
        <a href="#!">
          <img src="@/assets/ytb.svg" alt="Youtube Icon" />
        </a>
      </div>
      <ul class="about">
        <li>
          <a href="#!">О проекте</a>
        </li>
        <li>
          <a href="#!">Пользовательское соглашение</a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {};
</script>

<style scoped>
.footer {
  position: relative;
  min-height: 594px;
  padding: 80px var(--container-padding);
}
.footer ::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  border: 1px solid #f2f2f2;
}
.nav {
  display: flex;
  margin-bottom: 18px;
}
.nav__list {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
}
.nav__list a {
  font-size: 14px;
  font-weight: 400;
  line-height: 22px;
  padding: 7px 0px;
  border-radius: 4px;
  color: var(--secondary-color);
  transition: padding 0.2s ease-in, background 0.2s ease-in, color 0.2s ease-in;
}
.nav__list a:hover {
  padding: 7px 20px;
  background: var(--primary-color);
  color: white;
}
.nav__list.nav__list--background a:hover {
  background: #ef3e4a;
}
.title {
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: var(--secondary-color);
}
.links {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.social-icons {
  display: flex;
  gap: 20px;
}
.about {
  display: flex;
  gap: 40px;
}
.about a {
  font-size: 12px;
  font-weight: 400;
  color: #808080;
}
</style>