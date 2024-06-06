<template>
  <div class="gamegallery">
    <component :is="textSize" class="text">
      {{ buttonText }}
    </component>
    <div class="game-grid">
      <game-card v-for="game in games" :key="game.id" :gameData="game" />
    </div>
    <div v-if="!allGamesLoaded" class="load-more">
      <BuyLink
        :showIcon="true"
        :showInverted="true"
        :showBox="true"
        iconName="Más"
        textSize="h6"
        :showText="true"
        buttonText="Ver más"
        @click="loadMoreGames"
      />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import GameCard from '../Moleculas/GameCard.vue';
import BuyLink from '../Atoms/BuyLink.vue';

const apiKey = 'c320afcffae4417e9b8004ba91f1950b'; 

export default {
  components: {
    GameCard,
    BuyLink,
  },
  props: {
    buttonText: {
      type: String,
      default: 'TÍTULOS POPULARES'
    },
    textSize: {
      type: String,
      default: 'h1',
    },
  },
  data() {
    return {
      games: [],
      page: 1,
      totalGamesLoaded: 0,
      allGamesLoaded: false,
      // Variable para controlar el número de columnas en el grid
      columns: 5,
    };
  },
  async mounted() {
    this.setColumns(); // Llama a la función para configurar el número de columnas
    await this.fetchGames();
    window.addEventListener('resize', this.setColumns); // Actualiza el número de columnas cuando se redimensiona la ventana
  },
  destroyed() {
    window.removeEventListener('resize', this.setColumns); // Elimina el listener cuando se destruye el componente
  },
  methods: {
    async fetchGames() {
      const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&page_size=10&page=${this.page}`;

      try {
        const response = await axios.get(apiUrl);
        const games = response.data.results;

        const gameDetailsPromises = games.map(async (game) => {
          const gameDetailsUrl = `https://api.rawg.io/api/games/${game.id}?key=${apiKey}`;
          const gameDetailsResponse = await axios.get(gameDetailsUrl);
          return {
            ...game,
            description: gameDetailsResponse.data.description_raw || 'No description available'
          };
        });

        const newGames = await Promise.all(gameDetailsPromises);

        this.games = [...this.games, ...newGames];
        this.totalGamesLoaded += newGames.length;

        // Ocultar el botón si se han cargado 30 juegos en total
        if (this.totalGamesLoaded >= 30 || newGames.length < 10) {
          this.allGamesLoaded = true;
        }
      } catch (error) {
        console.error('Error fetching game data:', error);
      }
    },
    async loadMoreGames() {
      this.page += 1;
      await this.fetchGames();
    },
    // Función para ajustar el número de columnas según el tamaño de la pantalla
    setColumns() {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 600) { // Móvil
        this.columns = 1;
      } else if (screenWidth <= 1024) { // Entre móvil y tablet
        this.columns = 3;
      } else { // Pantalla grande (ordenador)
        this.columns = Math.min(5, Math.floor(screenWidth / 200)); // Máximo 5 columnas
      }
    }
  },
};
</script>

<style scoped>
.gamegallery {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
  margin: 20px;
}

.game-grid {
  display: grid;
  padding: 0px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); /* Mantenemos el mínimo de 200px */
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
}

@media screen and (min-width: 768px) {
  .game-grid {
    grid-template-columns: repeat(5, 1fr); /* Establecemos 5 columnas en pantallas más grandes */
  }
}

.load-more {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}
</style>
