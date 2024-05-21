<template>
    <button :class="buttonClass" @click="handleClick">
      <span v-if="showIcon">
      <nuxt-icon name="gato"></nuxt-icon> 
      </span>
      Estim
    </button>
</template>
  
<script>
  export default {
    props: {
      showIcon: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      buttonClass() {
        return ['custom-button', { 'with-icon': this.showIcon }];
      }
    },
    methods: {
      handleClick() {
        // Aquí puedes añadir lógica para manejar el clic del botón si es necesario
      }
    }
  };
</script>
  
<style lang="postcss" scoped>
  .custom-button {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    background-color: var(--azul);
    color: #fff;
    border-radius: 9999px;
    border: 1px solid #3b82f6;
    min-width: 80px;
    text-align: center;
    cursor: pointer;
  }
  
  .with-icon {
    padding-left: 1rem;
  }
  
  /* Estilos para el icono SVG */
  svg {
    vertical-align: middle;
    fill: currentColor;
  }
</style>