<template>
  <div 
    :class="['game-card', { expanded: isExpanded }]" 
    @mouseenter="showButton = true" 
    @mouseleave="showButton = false"
    ref="card"
    :style="{ gridColumnEnd: isExpanded ? 'span 2' : 'span 1' }"
  >
    <div class="image-container">
      <img :src="gameImage" alt="Game Image" @load="adjustHeight"/>
      <icon-link 
        :showIcon="true" 
        :iconName="isExpanded ? 'Cerrar' : 'Detalles'"
        v-if="showButton || isExpanded" 
        class="icon-button" 
        @click="toggleExpand"
      />
    </div>
    <div v-if="isExpanded" class="details-container">
      <textCard class="textCard">
        <h2 class="gameTitle" >{{ gameTitle }}</h2>
        <p class="game-description">{{ gameDescription }}</p>
      </textCard>
      <div class="buttons-container">
        <BuyMiniCard />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import IconLink from '../Atoms/IconLink.vue';
import BuyMiniCard from '../Atoms/BuyMiniCard.vue';

const apiKey = 'ca9f888ff1d74abebec74dfbd11f308f'; // Reemplaza con tu clave de API de RAWG

export default {
  components: {
    IconLink,
    BuyMiniCard,
  },
  props: {
    expandHandler: Function,
    resetAllExpanded: Function,
  },
  data() {
    return {
      gameImage: '',
      gameTitle: '',
      gameDescription: '',
      buttonText: '',
      saleText: '',
      isExpanded: false,
      showButton: false,
      usedIds: new Set(),
    };
  },
  async mounted() {
    await this.fetchRandomGame();
    this.generatePrices();
  },
  methods: {
    async fetchRandomGame() {
      const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&page_size=50`; // Obtén una lista de 50 juegos

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

        // Obtén los datos detallados del juego, incluida la descripción
        const gameDetailsUrl = `https://api.rawg.io/api/games/${randomGame.id}?key=${apiKey}`;
        const gameDetailsResponse = await axios.get(gameDetailsUrl);
        this.gameDescription = gameDetailsResponse.data.description_raw || 'No description available';
      } catch (error) {
        console.error('Error fetching game data:', error);
      }
    },
    generatePrices() {
      const randomPrice = (min, max) => {
        return (Math.random() * (max - min) + min).toFixed(2);
      };
      const price = parseFloat(randomPrice(10, 60)); // Precio entre 10 y 60 euros
      const salePrice = (price + Math.random() * 10).toFixed(2); // Precio de venta mayor que el precio base

      this.buttonText = `${price} €`;
      this.saleText = `${salePrice} €`;
    },
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
      this.adjustHeight();
      if (this.isExpanded) {
        this.expandHandler(this.$refs.card);
      }
    },
    adjustHeight() {
      this.$nextTick(() => {
        const card = this.$refs.card;
        const height = card.offsetHeight + 10; // Altura real de la tarjeta más el gap
        const rowHeight = 10; // Debe coincidir con el valor de grid-auto-rows
        const rowSpan = Math.ceil(height / rowHeight);
        card.style.gridRowEnd = `span ${rowSpan}`;
      });
    },
    scrollToCard() {
      if (this.isExpanded) {
        this.$refs.card.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  },
  watch: {
    isExpanded(newVal) {
      if (newVal) {
        this.scrollToCard();
      }
    }
  }
};
</script>

<style scoped>
.game-card {
  display: flex;
  flex-direction: column;
  border: 3px solid transparent;
  box-sizing: border-box;
  transition: all 0.3s ease;
  position: relative;
  height: fit-content; /* Ajusta la altura según el contenido */
}

.game-card:hover {
  border: 3px solid blue;
}

.game-card.expanded {
  grid-column-end: span 2; /* Ocupa dos columnas cuando está expandida */
}

.image-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.image-container img {
  width: 100%;
  height: auto;
  display: block; /* Asegura que la imagen no tenga espacio en blanco debajo */
}

.icon-button {
  position: absolute;
  top: 5px;
  left: 5px;
}

.details-container {
  display: flex;
  flex-direction: row;
  gap: 40px;
  padding: 20px;
  background: white;
}

.textCard {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
}

.gameTitle {
  margin: 0;
}

.game-description {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 4.5em; /* Tres líneas */
  margin: 0;
}

</style>