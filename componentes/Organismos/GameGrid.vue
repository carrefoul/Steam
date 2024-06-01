<template>
  <div class="game-grid">
    <game-card
      v-for="game in games"
      :key="game.id"
      :gameData="game"
    />
  </div>
</template>

<script>
import axios from 'axios';
import GameCard from '../Moleculas/GameCard.vue';

const apiKey = 'c320afcffae4417e9b8004ba91f1950b'; // Reemplaza con tu clave de API de RAWG

export default {
  components: {
    GameCard,
  },
  data() {
    return {
      games: [],
    };
  },
  async mounted() {
    await this.fetchGames();
  },
  methods: {
    async fetchGames() {
      const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&page_size=20`;

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

        this.games = await Promise.all(gameDetailsPromises);
      } catch (error) {
        console.error('Error fetching game data:', error);
      }
    },
  },
};
</script>

<style scoped>
.game-grid {
  display: grid;
  padding: 0 20px;
  grid-template-columns: repeat(5, 1fr);
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
}
</style>
