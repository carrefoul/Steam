<template>
    <div v-if="show" class="overlay">
      <div class="overlay-content">
        <div class="logoHolder">
            <nuxt-icon name="Logo" class="icon"></nuxt-icon>
        </div>
        <nuxt-link to="tienda" class="portraitLink">
           <nuxt-icon name="Tienda" class="icon"></nuxt-icon>
           <h3>TIENDA</h3>
        </nuxt-link>
        <nuxt-link to="comunidad" class="portraitLink">
           <nuxt-icon name="Comunindad" class="icon"></nuxt-icon>
           <h3>COMUNIDAD</h3>
        </nuxt-link>
        <nuxt-link to="soporte" class="portraitLink">
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
      };
    },
    methods: {
      closeOverlay() {
        this.show = false;
        this.$emit('close');
      }
    }
  };
  </script>
  
  <style lang="postcss" scoped>
  .overlay {
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
  .logoHolder{
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
  </style>