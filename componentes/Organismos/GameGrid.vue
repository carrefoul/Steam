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

const apiKey = 'f4de9380f16546b09a3041a05219c157'; 

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
      columns: 5,
    };
  },
  async mounted() {
    this.setColumns(); 
    await this.fetchGames();
    window.addEventListener('resize', this.setColumns); 
  },
  destroyed() {
    window.removeEventListener('resize', this.setColumns); 
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
    setColumns() {
      const screenWidth = window.innerWidth;
      if (screenWidth <= 600) { 
        this.columns = 1;
      } else if (screenWidth <= 1024) { 
        this.columns = 3;
      } else { 
        this.columns = Math.min(5, Math.floor(screenWidth / 200)); 
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); 
  gap: 10px;
  width: 100%;
  box-sizing: border-box;
}

@media screen and (min-width: 768px) {
  .game-grid {
    grid-template-columns: repeat(5, 1fr); 
  }
}

.load-more {
  display: flex;
  justify-content: center;
  margin-top: 20px;
}

@media (orientation : portrait) {
 .load-more {
  margin-top: 10px;
 }

 .gamegallery{
  gap: 10px;
  margin: 10px;
 }
}
</style>
