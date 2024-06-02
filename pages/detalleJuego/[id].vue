<template>
    <div class="detalle-juego">
      <h1>Detalle del Juego</h1>
      <DetalleJuego :gameData="gameData" />
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import DetalleJuego from '~/componentes/Organismos/DetalleJuego.vue';
  
  const apiKey = 'c320afcffae4417e9b8004ba91f1950b'; // Reemplaza con tu clave de API de RAWG
  
  export default {
    components: {
      DetalleJuego,
    },
    data() {
      return {
        gameData: null
      };
    },
    methods: {
      async fetchGameDetails(gameId) {
        const apiUrl = `https://api.rawg.io/api/games/${gameId}?key=${apiKey}`;
        try {
          const response = await axios.get(apiUrl);
          this.gameData = response.data;
        } catch (error) {
          console.error('Error al obtener los detalles del juego:', error);
        }
      }
    },
    async created() {
      const gameId = this.$route.params.id; // Obtener el ID del juego de la ruta
      await this.fetchGameDetails(gameId);
    }
  };
  </script>
  
  <style scoped>
  .detalle-juego {
    padding: 20px;
  }
  </style>
  