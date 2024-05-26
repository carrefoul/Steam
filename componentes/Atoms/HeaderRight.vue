<template>
  <div class="header-container">
    <div v-if="loggedIn" class="headerRight">
      <IconLink :showIcon="true" :aloneIcon="true" iconName="Download" />
      <IconLink :showIcon="true" :aloneIcon="true" iconName="Tienda" />
      <div class="headerRightLink" >
        <IconLink :showIcon="true" :aloneIcon="true" iconName="Usuario" @click="toggleDesplegableUsuario" />
        <despegableUsuario v-if="showDespegableUsuario" @close="toggleDesplegableUsuario" />
      </div>
      
    </div>
    <div v-else class="headerRight">
      <IconLink :showIcon="true" :aloneIcon="true" iconName="Download" />
      <nuxt-link to="/loggin" class="headerRightLink">
        <IconLink textSize="h3" :fondoAzul="true" :showText="true" buttonText="Iniciar sesión" />
      </nuxt-link>
      <nuxt-link to="/registration" class="headerRightLink">
        <IconLink textSize="h3" :showBox="true" :showText="true" buttonText="Registrarse" />
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import IconLink from '@/componentes/Atoms/IconLink.vue';
import despegableUsuario from '../Despegables/despegableUsuario.vue';

export default {
  components: {
    despegableUsuario, 
    IconLink
  },
  data() {
    return {
      showDespegableUsuario: false
    };
  },
  methods: {
    toggleDesplegableUsuario() {
      this.showDespegableUsuario = !this.showDespegableUsuario;
    }
  },
  props: {
    loggedIn: {
      type: Boolean,
      default: false
    }
  },
  
};
</script>

<style>

    .header-container{
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
</style>