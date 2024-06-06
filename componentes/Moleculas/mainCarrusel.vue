<template>
    <div class="carousel-container">
      <UCarousel v-slot="{ item }" :items="carouselItems" :ui="{ item: 'basis-full' }" arrows>
        <img :src="item.image" class="w-full" draggable="false">
        <BuyMiniCard class="linkDetalles" :gameId="item.gameData.id"/>
      </UCarousel>
    </div>
  </template>
  

<script>
import axios from 'axios';
import BuyMiniCard from '../Atoms/BuyMiniCard.vue';

const apiKey = 'c320afcffae4417e9b8004ba91f1950b';

export default {
  components: {
    BuyMiniCard,
  },
  data() {
    return {
      carouselItems: [],
      usedIds: new Set(),
    };
  },
  async mounted() {
    await this.fetchRandomGames();
  },
  methods: {
    async fetchRandomGames() {
      const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&page_size=10`;
      let attempts = 0;
      const maxAttempts = 5;

      try {
        while (this.carouselItems.length < 4 && attempts < maxAttempts) {
          const response = await axios.get(apiUrl);
          const games = response.data.results;

          games.forEach((game) => {
            if (!this.usedIds.has(game.id) && this.carouselItems.length < 4) {
              this.usedIds.add(game.id);
              this.carouselItems.push({
                image: game.background_image,
                gameData: game,
              });
            }
          });
          attempts++;
        }

        if (this.carouselItems.length < 4) {
          console.warn(
            'No se encontraron suficientes imágenes únicas después de múltiples intentos.'
          );
        }
      } catch (error) {
        console.error('Error fetching game data', error);
      }
    },
  },
};

</script>

<style scoped>
.carousel-container {
    width: 100%;
    height: 100%;
    position: relative;
    overflow: hidden;
}

.carousel-container img {
    width: 100%;
    height: 600px;
    object-fit: cover;
}


@media (orientation : portrait) {
    .carousel-container img {
    width: 100%;
    height: 300px;
    object-fit: cover;
}
}

.linkDetalles{
    position: absolute;
    z-index: 3;
    bottom: 1rem;
    left: 1rem;
}
</style>