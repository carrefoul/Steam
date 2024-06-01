<template>
    <div class="carousel-container">
        <swiper 
           
            :slides-per-view="1" 
            :pagination="true"
            :navigation="true"
            :loop="true"
            :effect="'creative'"
            :creative-effect="{
                prev: {
                    shadow: false,
                    translate: ['-20%', 0, -1],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
            }"
            ref="swiper">
            <swiper-slide v-for="(image, index) in images" :key="index">
                <img :src="image" alt="game Image" />
            </swiper-slide>
           
        </swiper>
    
    </div>

</template>

<script>
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/swiper-bundle.css';
import CarruselArrows from '../Atoms/CarruselArrows.vue';

const apiKey = 'c320afcffae4417e9b8004ba91f1950b';

export default {
    // mounted() {
    //     this.initSwiper();
    // },
    components: {
        Swiper,
        SwiperSlide,
        CarruselArrows
    },
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
        // initSwiper() {
        //     import('swiper/swiper-bundle.css').then(() => {
        //         const Swiper = require('swiper');
        //         new Swiper('.swiper-container', {
        //             pagination: {
        //                  el: '.swiper-pagination',
        //                 clickable: true,
        //             },
        //         });
        //     });
        // },

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
        }

    }
};
</script>

<style scoped>
.carousel-container {
    width: 100%;
    height: 100%;
}

.carousel-container img {
    width: 100%;
    height: 550px;
    object-fit: cover;
}

.swiper-pagination {
    bottom: 10px;
}

.swiper-pagination-bullet {
    width: 21px;
    height: 21px;
    background-color: var(--gris);
    border-radius: 0;
    margin: 0 5px;
}

.swiper-pagination-bullet-active {
    background-color: var(--azul);
}
</style>