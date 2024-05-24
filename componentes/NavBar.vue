<template>
  <nav class="nav">
    <div class="headerLeft">
      <div class="LogoContainer">
        <nuxt-icon name="Logo" class="logo" filled></nuxt-icon>
      </div>
      <ul class="nav-list">
        <li>
          <HeaderLink to="/" isTitle>Tienda</HeaderLink>
        </li>
        <li>
          <HeaderLink to="/comunidad" isTitle>Comunidad</HeaderLink>
        </li>
        <li>
          <HeaderLink to="/soporte" isTitle>Soporte</HeaderLink>
        </li>
        <li>
          <HeaderLink to="/pruebas" isTitle>Pruebas</HeaderLink>
        </li>
      </ul>
    </div>
    <div class="headerRight">
      <HeaderRight :loggedOut="true"/>
    </div>
  </nav>
</template>

<script>
import HeaderLink from './Atoms/HeaderLink.vue';
import HeaderRight from "./Atoms/HeaderRight.vue";

export default {
  components: {
    HeaderLink,
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
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
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
  margin: 0;
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
