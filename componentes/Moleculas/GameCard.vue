<template>
  <div 
    :class="['game-card', { expanded: isExpanded }]" 
    @mouseenter="showButton = true" 
    @mouseleave="showButton = false"
    ref="card"
    :style="{ gridColumnEnd: isExpanded ? 'span 2' : 'span 1' }"
  >
    <div class="image-container">
      <img :src="gameImage" alt="Game Image" @load="adjustHeight" />
      <icon-link 
        :showIcon="true" 
        :iconName="isExpanded ? 'Cerrar' : 'Detalles'"
        v-if="showButton || isExpanded" 
        class="icon-button" 
        @click="toggleExpand"
      />
    </div>
    <div v-if="isExpanded" class="details-container">
      <div class="textCard">
        <h2>{{ gameTitle }}</h2>
        <p class="game-description">{{ gameDescription }}</p>
      </div>
      <div class="buttons-container">
        <buy-link :showIcon="true" iconName="Flecha d" :showSale="true" textSize="h3" :showText="true" buttonText="BUY BUTTON"/>
        <icon-link textSize="h5" :fondoAzul="true" :showText="true" buttonText="Añadir al carrito"/>
        <buy-link :showInverted="true" :showBox="true" textSize="h6" :showText="true" buttonText="Ver más" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import IconLink from '../Atoms/IconLink.vue';
import BuyLink from '../Atoms/BuyLink.vue';

const apiKey = 'ca9f888ff1d74abebec74dfbd11f308f'; // Replace with your RAWG API key

export default {
  components: {
    IconLink,
    BuyLink
  },
  data() {
    return {
      gameImage: '',
      gameTitle: '',
      gameDescription: '',
      isExpanded: false,
      showButton: false,
      usedIds: new Set(),
    };
  },
  async mounted() {
    await this.fetchRandomGame();
  },
  methods: {
    async fetchRandomGame() {
      const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&page_size=50`; // Fetch a list of 50 games

      try {
        const response = await axios.get(apiUrl);
        const games = response.data.results;

        let randomGame;
        do {
          randomGame = games[Math.floor(Math.random() * games.length)];
        } while (this.usedIds.has(randomGame.id) && this.usedIds.size < games.length);

        this.usedIds.add(randomGame.id);

        this.gameImage = randomGame.background_image;
        this.gameTitle = randomGame.name;

        // Fetch the detailed game data including description
        const gameDetailsUrl = `https://api.rawg.io/api/games/${randomGame.id}?key=${apiKey}`;
        const gameDetailsResponse = await axios.get(gameDetailsUrl);
        this.gameDescription = gameDetailsResponse.data.description_raw || 'No description available';
      } catch (error) {
        console.error('Error fetching game data:', error);
      }
    },
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
      this.adjustHeight();
    },
    adjustHeight() {
      this.$nextTick(() => {
        const card = this.$refs.card;
        const height = card.offsetHeight + 10; // Altura real de la tarjeta más el gap
        const rowHeight = 10; // Debe coincidir con el valor de grid-auto-rows
        const rowSpan = Math.ceil(height / rowHeight);
        card.style.gridRowEnd = `span ${rowSpan}`;
      });
    }
  },
  watch: {
    isExpanded(newVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.$refs.card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      }
    }
  }
};
</script>

<style scoped>
.game-card {
  height: fit-content;
  width: 100%;
  transition: all 0.3s ease;
  position: relative;
  border: 3px solid transparent;
  box-sizing: border-box;
}

.game-card:hover {
  border: 3px solid blue;
}

.game-card.expanded {
  width: calc(100%);
}

.image-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.image-container img {
  width: 100%;
  height: auto;
  display: block; /* Ensures the image does not have any whitespace underneath */
}

.icon-button {
  position: absolute;
  top: 10px;
  left: 10px;
}

.details-container {
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 20px;
  background: white;
}

.textCard {
  display: flex;
  flex-direction: column;
  flex: 1;
}

.game-description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 4.5em; /* Three lines */
}

.buttons-container {
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-top: 20px;
}
</style>
