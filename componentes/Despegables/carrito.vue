
<template>
    <div class="desplegable-container">
      <div class="cerrar">
        <nuxt-icon name="Cerrar" class="icon" @click="$emit('close')"></nuxt-icon>
        <BuyLink :fontChange="true" :showBox="true" textSize="p" :showIcon="true" iconName="Like" :showText="true" @click="redirectToPage" buttonText="Lista de Deseos" />
      </div>
      <div v-for="(game, index) in games" :key="index">
        <p>{{ game.name }}</p>
      </div>
    </div>
  </template>
  
  
  
  <script>
  import BuyLink from '@/componentes/Atoms/BuyLink.vue';
  
  export default {
    components: {
      BuyLink,
    },
    props: {
      games: {
        type: Array,
        required: true
      }
    },
    methods: {
      // Método para añadir un juego al carrito
      addToCart(gameData) {
        // Aquí puedes hacer lo que necesites con la información del juego, por ejemplo, agregarlo al array de juegos en el estado del componente
        this.games.push(gameData);
      }
    }
  };
  </script>
  
  <style scoped>
  .desplegable-container {
    width: 100%;
    max-width: 30rem;
    height: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 1rem;
    box-sizing: border-box;
    background-color: var(--blanco);
    position: absolute;
    top: 0;
    right: 0;
  }
  .cerrar {
    display: flex;
    flex-direction: row;
    align-self: flex-end;
    justify-content: space-between;
    width: 100%;
    height: 4rem;
    background-color: brown;
    cursor: pointer;
  }
  .icon {
    width: 15px;
    height: 15px;
  }
 
  </style>
  


  