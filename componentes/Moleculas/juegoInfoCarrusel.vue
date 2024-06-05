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
    // mounted() {
    //     this.initSwiper();
    // },
    
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
    width: 60%;
    height: 500px;
    position: relative;
    overflow: hidden;
}

.carousel-container img {
    width: 100%;
    object-fit: cover;
}




</style>