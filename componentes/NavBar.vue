<template>
  <nav class="nav">
    <div class="headerLeft">
      <div class="LogoContainer">
        <nuxt-icon name="Logo" class="logo" filled></nuxt-icon>
      </div>
      <ul class="nav-list">
        <li>
          <HeaderButton to="/" isTitle>Tienda</HeaderButton>
        </li>
        <li>
          <HeaderButton to="/comunidad" isTitle>Comunidad</HeaderButton>
        </li>
        <li>
          <HeaderButton to="/soporte" isTitle>Soporte</HeaderButton>
        </li>
        <li>
          <HeaderButton to="/pruebas" isTitle>Pruebas</HeaderButton>
        </li>
      </ul>
    </div>
    <div class="headerRight">
      <HeaderRight :loggedIn="true"/>
    </div>
  </nav>
</template>

<script>
import HeaderButton from './Atoms/HeaderLink.vue';
import HeaderRight from "./Atoms/HeaderRight.vue";

export default {
  components: {
    HeaderButton,
    IconButton,
    HeaderRight
  }
};
</script>

<style lang="postcss">
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 2px solid var(--azul);
  padding: 5px 20px;
}

.headerLeft {
  display: flex;
  align-items: center;
}

.LogoContainer {
  width: 6rem;
  height: 100%;
  overflow: hidden;
    svg{
      width: 6rem;
    }
}

.nav-list {
  list-style: none;
  display: flex;
  gap: 15px;
}

.nav-list li {
  list-style: none;
}

.nav-list a {
  text-decoration: none; 
  color: inherit; 
}

.headerRight {
  display: flex;
  align-items: center;
}
</style>
