<template>
    <div class="carousel-container">
      
        <UCarousel v-slot="{ item }" :items="carouselItems" :ui="{ item: 'basis-full' }" arrows>
          <NuxtLink v-if="carouselItems.length > 0" :to="`/detalleJuego/${carouselItems[0].gameData.id}`" class="no-underline">
            <img :src="item.image" class="w-full" draggable="false">
          </NuxtLink>
        </UCarousel>
      
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  const apiKey = 'c320afcffae4417e9b8004ba91f1950b';
  
  export default {
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
  
  .swiper-pagination {
    bottom: 10px;
  }
  
  .swiper-pagination-bullet {
    width: 21px;
    height: 21px;
    border-radius: 0;
    margin: 0 5px;
  }
  
  .swiper-pagination-bullet-active {
    background-color: var(--azul);
  }
  
  .arrowContainer {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 4;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
  }
  
  .arrowContainer>* {
    pointer-events: all;
  }
  
  .linkDetalles {
    position: absolute;
    z-index: 3;
    bottom: 1rem;
    left: 1rem;
  }

  .no-underline{
    width: 100%;
  }
  </style>
  