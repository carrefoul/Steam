<template>
    <div class="organismo">
        <div class="top-part">
            <component :is="textSize" class="text">
                {{ buttonText }}
            </component>
            <BuyLink :showIcon="true" :showInverted="true" :showBox="true" iconName="Más" textSize="h6"
                :showText="true" buttonText="Ver más" />
        </div>
        <div class="carousel-container">
            <swiper :slides-per-view="1" :navigation="true" :effect="'creative'" :creative-effect="{
                prev: {
                    shadow: false,
                    translate: ['-20%', 0, -1],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
            }" ref="swiper">
                <swiper-slide class="card-container">
                    <gameCardCarrusel v-for="game in games" :key="game.id" :gameData="game" />
                </swiper-slide>

            </swiper>
            <div class="arrowContainer">
                <CarruselArrows :showSmallIcon="true" iconName="Flecha i" />
                <CarruselArrows :showSmallIcon="true" iconName="Flecha d" />

            </div>

        </div>
    </div>


</template>

<script>
import axios from 'axios';
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/swiper-bundle.css';
import CarruselArrows from '../Atoms/CarruselArrows.vue';
import gameCardCarrusel from '../Moleculas/gameCardCarrusel.vue';

const apiKey = 'c320afcffae4417e9b8004ba91f1950b';

export default {
    // mounted() {
    //     this.initSwiper();
    // },
    components: {
        Swiper,
        SwiperSlide,
        CarruselArrows,
        gameCardCarrusel

    },
    props: {

        buttonText: {
            type: String,
            default: 'Estim'
        },
        textSize: {
            type: String,
            default: 'h1',
        },
    },
    data() {
        return {
            games: [],
            
        };
    },
    async mounted() {
        await this.fetchGames();
    },
    methods: {

        async fetchGames() {
            const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&page_size=7`;

            try {
                const response = await axios.get(apiUrl);
                const games = response.data.results;

                const gameDetailsPromises = games.map(async (game) => {
                    const gameDetailsUrl = `https://api.rawg.io/api/games/${game.id}?key=${apiKey}`;
                    const gameDetailsResponse = await axios.get(gameDetailsUrl);
                    return {
                        ...game,
                        description: gameDetailsResponse.data.description_raw || 'No description available'
                    };
                });

                this.games = await Promise.all(gameDetailsPromises);
            } catch (error) {
                console.error('Error fetching game data:', error);
            }
        }

    }
};
</script>

<style scoped>
.organismo {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 20px;
}

.top-part{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.carousel-container {
    width: 100%;
    height: 100%;
    position: relative;

}

.card-container {
    display: flex;
    flex-direction: row;
    gap: 5px;
    height: auto;
    width: 100%;
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
    /* Asegura que las flechas sean clicables */
}
</style>