<template>
    <div class="carousel-container">
        <UCarousel v-slot="{ item }" :items="images" :ui="{ item: 'basis-full' }" 
            arrows>
            <img :src="item" class="w-full" draggable="false">
        </UCarousel>

    </div>

</template>

<script>
import axios from 'axios';


const apiKey = 'c320afcffae4417e9b8004ba91f1950b';

export default {
   
    data() {
        return {
            images: [],
            usedIds: new Set()
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
                while (this.images.length < 4 && attempts < maxAttempts) {
                    const response = await axios.get(apiUrl);
                    const games = response.data.results;

                    games.forEach((game) => {
                        if (!this.usedIds.has(game.id) && this.images.length < 4) {
                            this.usedIds.add(game.id);
                            this.images.push(game.background_image);
                        }
                    });
                    attempts++;
                }

                if (this.images.length < 4) {
                    console.warn(
                        'No se encontraron suficientes imágenes únicas después de múltiples intentos.'
                    );
                }
            } catch (error) {
                console.error('Error fetching game data', error);
            }
        },
    }
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
</style>