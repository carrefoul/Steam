<template>
  <nav class="nav">
    <div class="headerLeft">
      <div class="webNone">
        <IconLink @click="openOverlay" :showIcon="true" :aloneIcon="true" iconName="Menu" />
      </div>
      <nuxt-link to="/" class="LogoContainer">
        <nuxt-icon name="Logo" class="logo" filled></nuxt-icon>
      </nuxt-link>
      <ul class="nav-list">
        <li>
          <HeaderLink to="/tienda" isTitle>Tienda</HeaderLink>
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
      <HeaderRight :loggedIn="loggedIn" />
    </div>
    <transition name="overlay">
      <portraitNav v-if="isOverlayVisible"  @close="closeOverlay" class="portraitNav"/>
    </transition>
  </nav>
</template>

<script>
import HeaderLink from './Atoms/HeaderLink.vue';
import HeaderRight from './Atoms/HeaderRight.vue';
import IconLink from './Atoms/IconLink.vue';
import portraitNav from '@/componentes/Despegables/portraitNav.vue';

export default {
  components: {
    HeaderLink,
    HeaderRight,
    portraitNav,
    IconLink
  },
  data() {
    return {
      loggedIn: false,
      isOverlayVisible: false
    };
  },
  mounted() {
    this.checkLoginStatus();
    window.addEventListener('storage', this.checkLoginStatus);
  },
  methods: {
    checkLoginStatus() {
      this.loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    },
    openOverlay() {
      this.isOverlayVisible = true;
    },
    closeOverlay() {
      this.isOverlayVisible = false;
    }
  },
  beforeDestroy() {
    window.removeEventListener('storage', this.checkLoginStatus);
  }
};
</script>

<style lang="postcss" scoped>
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.12rem solid var(--azul);
  padding: 0.3rem 0.8rem;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 999;
  
}
.webNone {
  display: none;
}

.headerLeft {
  display: flex;
  align-items: center;
}

.LogoContainer {
  overflow: hidden;
    span{
     transform: scale(8.5);
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

@media (orientation : portrait) {
  .nav {
    width: 100vw;
    padding: 0.6rem 0.8rem;
    display: flex;
    align-items: center;
  }
  .nav-list {
    display: none;
  }
  .webNone {
    display: block;
  }

  .LogoContainer {
    width: 10rem;
    height: 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    svg{
      transform: scale(1.5);
    }
  }
  .LogoContainer span{
    transform: scale(5.5);

  }

  .overlay-enter-active, .overlay-leave-active {
  transition: opacity 0.5s, transform 0.5s;
  }
  .overlay-enter, .overlay-leave-to {
    opacity: 0;
    transform: translateX(-50%);
  }
}
</style>
