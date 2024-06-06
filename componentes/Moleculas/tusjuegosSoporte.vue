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

const apiKey = 'f4de9380f16546b09a3041a05219c157';

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
                while (this.images.length < 7 && attempts < maxAttempts) {
                    const response = await axios.get(apiUrl);
                    const games = response.data.results;

                    games.forEach((game) => {
                        if (!this.usedIds.has(game.id) && this.images.length < 7) {
                            this.usedIds.add(game.id);
                            this.images.push(game.background_image);
                        }
                    });
                    attempts++;
                }

                if (this.images.length < 7) {
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
    .juego {
        height: 200px;
    }
}
</style>