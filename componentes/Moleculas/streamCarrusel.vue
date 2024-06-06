<template>
  <div class="carousel-container">
      <UCarousel v-slot="{ item }" :items="images" :ui="{ item: 'snap-start' }" 
          arrows>
          <div class="juego">
              <img :src="item" class="w-full" draggable="false">
          </div> 
          
      </UCarousel>

  </div>

</template>

<script>
import axios from 'axios';

const apiKey = 'c320afcffae4417e9b8004ba91f1950b';
const gameIds = [1234, 5678, 91011];

export default {
  data() {
    return {
      images: [],
      usedIds: new Set(),
      maxImages: 7,
    };
  },
  async mounted() {
    await this.fetchRandomGames();
  },
  methods: {
    async fetchRandomGames() {
      let attempts = 0;
      const maxAttempts = 5;

      try {
        while (this.images.length < this.maxImages && attempts < maxAttempts) {
          for (const gameId of gameIds) {
            const screenshotsUrl = `https://api.rawg.io/api/games/${gameId}/screenshots?key=${apiKey}`;
            const response = await axios.get(screenshotsUrl);
            const games = response.data.results;

            games.forEach((game) => {
              if (!this.usedIds.has(game.id) && this.images.length < this.maxImages) {
                this.usedIds.add(game.id);
                this.images.push(game.image);
              }
            });

            if (this.images.length >= this.maxImages) break;
          }
          attempts++;
        }

        if (this.images.length < this.maxImages) {
          console.warn('No se encontraron suficientes imágenes únicas después de múltiples intentos.');
        }
      } catch (error) {
        console.error('Error al obtener los datos del juego', error);
      }
    },
  },
};
</script>

<style lang="postcss" scoped>
.juego{
  height: 400px;
  width: auto;
  transition: all 0.3s ease;
  border: 3px solid transparent;
  box-sizing: border-box;
  margin-right: 5px;
}

.juego:hover {
  border: 3px solid blue;
}

.juego img {
  width: auto;
  height: 100%;
  object-fit: cover;
}

@media (orientation : portrait) {
  .juego{
  height: 200px;
  
}
}
</style>

