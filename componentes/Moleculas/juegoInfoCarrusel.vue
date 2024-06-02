<template>
    <div class="carousel-container">
        <swiper 
           
            :slides-per-view="1" 
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
        <div class="arrowContainer">
            <CarruselArrows @click="slidePrev" :showSmallIcon="true" iconName="Flecha i" />
            <CarruselArrows @click="slideNext" :showSmallIcon="true" iconName="Flecha d" />

        </div>
    
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
        slidePrev() {
            this.$refs.swiper.swiper.slidePrev();
        },
        slideNext() {
            this.$refs.swiper.swiper.slideNext();
        }

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

.arrowContainer{
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 4;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
}

.arrowContainer > * {
    pointer-events: all; /* Asegura que las flechas sean clicables */
}
</style>