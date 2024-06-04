<template>
  <div class="header-container">
    <div v-if="loggedIn" class="headerRight">
      <div class= "portraitNone">
        <IconLink :showIcon="true" :aloneIcon="true" iconName="Download" @click="toggleDesplegableDescargar" />
        <div v-if="showDesplegableDescargar" class="overlay">
          <div class="background-overlay" @click="closeOutsideDesplegableDescargar"></div>
          <desplegableDescargar ref="desplegableDescargar" class="desplegable-descargar" @close="closeDesplegableDescargar" />
        </div>
      </div>
      <IconLink :showIcon="true" :aloneIcon="true" iconName="Tienda" />
      <div class="headerRightLink">
        <IconLink :showIcon="true" :aloneIcon="true" iconName="Usuario" @click="toggleDesplegableUsuario" />
        <despegableUsuario v-if="showDespegableUsuario" @close="toggleDesplegableUsuario" />
      </div>
    </div>
    <div v-else class="headerRight">
      <div class="portraitNone">
        <IconLink :showIcon="true" :aloneIcon="true" iconName="Download" @click="toggleDesplegableDescargar" />
        <div v-if="showDesplegableDescargar" class="overlay">
          <div class="background-overlay" @click="closeOutsideDesplegableDescargar"></div>
          <desplegableDescargar ref="desplegableDescargar" class="desplegable-descargar" @close="closeDesplegableDescargar" />
        </div>
      </div>
      <nuxt-link to="/loggin" class="headerRightLink">
        <IconLink textSize="h3" :fondoAzul="true" :showText="true" buttonText="Iniciar sesión" />
      </nuxt-link>
      <nuxt-link to="/registration" class="portraitNone">
        <IconLink textSize="h3" :showBox="true" :showText="true" buttonText="Registrarse" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import IconLink from '@/componentes/Atoms/IconLink.vue';
import despegableUsuario from '../Despegables/despegableUsuario.vue';
import desplegableDescargar from '../Despegables/desplegableDescargar.vue';

export default {
  components: {
    despegableUsuario,
    IconLink,
    desplegableDescargar
  },
  data() {
    return {
      showDespegableUsuario: false,
      showDesplegableDescargar: false
    };
  },
  methods: {
    toggleDesplegableUsuario() {
      this.showDespegableUsuario = !this.showDespegableUsuario;
    },
    toggleDesplegableDescargar() {
      this.showDesplegableDescargar = !this.showDesplegableDescargar;
    },
  
    closeDesplegableDescargar() {
      this.showDesplegableDescargar = false;
    },
    hideDesplegableUsuario(event) {
      if (this.showDespegableUsuario && !this.$el.contains(event.target)) {
        this.showDespegableUsuario = false;
      }
    }
  },
  props: {
    loggedIn: {
      type: Boolean,
      default: false
    }
  },
  mounted() {
    document.addEventListener('click', this.hideDesplegableUsuario);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideDesplegableUsuario);
  }
};
</script>

<style>
.header-container {
  position: relative;
}
.headerRight {
  display: flex;
  gap: 1.8rem;
}
.headerRightLink {
  text-decoration: none;
  appearance: none;
  position: relative;
}

.portraitNone {
  text-decoration: none;
  appearance: none;
  position: relative;
}

.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.background-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(circle, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0));
  z-index: 998; 
}

.desplegable-descargar {
  position: relative;
  z-index: 1000;
  background-color: white;
  padding: 1rem;
  box-shadow: 0 2px 10px var;
}
@media (orientation : portrait) {
  .portraitNone {
    display: none;
  }
}
</style>
