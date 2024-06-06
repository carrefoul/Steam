<template>
  <div v-if="show" class="overlay" ref="overlay">
    <div class="overlay-content">
      <div class="logoHolder">
        <nuxt-icon name="Logo" class="icon"></nuxt-icon>
      </div>
      <nuxt-link to="tienda" class="portraitLink" @click.native="toggleTiendaSub">
        <nuxt-icon name="Tienda" class="icon"></nuxt-icon>
        <h3>TIENDA</h3>
      </nuxt-link>
      <div class="tiendaSub" v-if="showTiendaSub">
        <h3 @click.native="closeOverlay">Destacados</h3>
        <h3 @click.native="scrollToElement('ofertasEspeciales')">Ofertas</h3>
        <h3 @click.native="scrollToElement('categorias')">Categorías</h3>
      </div>
      <nuxt-link to="comunidad" class="portraitLink" @click.native="closeOverlay">
        <nuxt-icon name="Comunindad" class="icon"></nuxt-icon>
        <h3>COMUNIDAD</h3>
      </nuxt-link>
      <nuxt-link to="soporte" class="portraitLink" @click.native="closeOverlay">
        <nuxt-icon name="Soporte" class="icon"></nuxt-icon>
        <h3>SOPORTE</h3>
      </nuxt-link>
    </div>
    <div class="footerPortrait">
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      showTiendaSub: false,
      clickOutsideHandler: null,
    };
  },
  methods: {
    closeOverlay() {
      this.show = false;
      this.$emit('close');
      document.removeEventListener('click', this.clickOutsideHandler);
    },
    toggleTiendaSub() {
      this.showTiendaSub = !this.showTiendaSub;
    },
    scrollToElement(elementId) {
      this.$router.push({ name: 'tienda', query: { scrollTo: elementId } });
      this.closeOverlay();
    },
    handleClickOutside(event) {
      if (!this.$refs.overlay.contains(event.target)) {
        this.closeOverlay();
      }
    },
    addClickOutsideListener() {
      this.clickOutsideHandler = this.handleClickOutside.bind(this);
      document.addEventListener('click', this.clickOutsideHandler);
    }
  },
  mounted() {
    // Add a slight delay to ensure the menu has finished opening before adding the listener
    this.$nextTick(() => {
      setTimeout(this.addClickOutsideListener, 0);
    });
  },
  beforeDestroy() {
    document.removeEventListener('click', this.clickOutsideHandler);
  }
};
</script>

<style lang="postcss" scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: auto;
  background-color: var(--azul);
  color: white;
  padding: 2rem;
  align-items: flex-start;
  justify-content: space-between;
}
.overlay-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.icon {
  color: white;
}
.logoHolder {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 8em;
  height: 2em;
  margin-bottom: 2rem;
  span {
    transform: scale(8);
  }
}
.portraitLink {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
}
.tiendaSub {
  display: flex;
  flex-direction: column;
  padding-left: 2.1rem;
  transform: translateY(-1rem);
}
</style>
