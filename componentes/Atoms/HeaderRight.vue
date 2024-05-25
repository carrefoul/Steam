<template>
  <div>
    <div v-if="loggedIn" class="headerRight">
      <IconLink :showIcon="true" :aloneIcon="true" iconName="Download" />
      <IconLink :showIcon="true" :aloneIcon="true" iconName="Tienda" />
      <IconLink :showIcon="true" :aloneIcon="true" iconName="Usuario" />
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

export default {
  props: {
    loggedIn: {
      type: Boolean,
      default: false
    }
  },
  components: {
    IconLink
  }
};
</script>

<style scoped>
/* Agregar estilos según sea necesario */
</style>

<style>
   .headerRight {
    display: flex;
    gap: 1.8rem;
   }
   .headerRightLink {
     text-decoration: none;
     appearance: none;
   }
</style>