<template>
    <div class="organismo">
        <div class="top-part">
            <component :is="textSize" class="text">
                {{ buttonText }}
            </component>
            <NuxtLink to="/ofertasEspeciales" class="no-underline">
                <BuyLink :showIcon="true" :showInverted="true" :showBox="true" iconName="Más" textSize="h6"
                    :showText="true" buttonText="Ver más" />
            </NuxtLink>

        </div>
        <div class="carousel-container">
            <UCarousel v-slot="{ item }" :items="games" :ui="{ item: 'snap-start' }" :prev-button="{
                class: 'custom-arrow custom-arrow-left',
                icon: 'i-heroicons-arrow-left-20-solid custom-icon'
            }" :next-button="{
                class: 'custom-arrow custom-arrow-right',
                icon: 'i-heroicons-arrow-right-20-solid custom-icon'
            }" arrows>
                <!-- <gameCardCarrusel :game="item" class="w-full" draggable="false" /> -->
                <div :class="['game-card', { expanded: isExpanded }]" @click="toggleExpand">
                    <div class="image-container">
                        <img :src="item.background_image" alt="Game Image" />
                    </div>
                    <div v-if="isExpanded" class="details-container">
                        <div class="textCard">
                            <h2>{{ item.name }}</h2>
                            <p class="game-description">{{ item.description }}</p>
                        </div>
                        <div>
                            <BuyMiniCard :gameId="item.id" />
                        </div>
                    </div>
                </div>
            </UCarousel>

        </div>
    </div>

</template>

<script>
import axios from 'axios';
import CarruselArrows from '../Atoms/CarruselArrows.vue';
import gameCardCarrusel from '../Moleculas/gameCardCarrusel.vue';

import BuyMiniCard from '../Atoms/BuyMiniCard.vue';

const apiKey = 'c320afcffae4417e9b8004ba91f1950b';

export default {
    // mounted() {
    //     this.initSwiper();
    // },
    components: {
        CarruselArrows,
        gameCardCarrusel,
        BuyMiniCard

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
        gameData: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            games: [],
            isExpanded: false,

        };
    },
    async mounted() {
        await this.fetchGames();
    },
    methods: {
        toggleExpand() {
            this.isExpanded = !this.isExpanded;

        },

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
.custom-arrow {
    background-color: #f0f0f0 ;
    border-radius: 0% ;
    height: 45px;
    color: var(--azul);
    width: 45px;
    transition: background-color 0.3s;
    border: 3px solid var(--azul);
}

.custom-arrow:hover {
    background-color: var(--azul) ;
}

.custom-arrow-left {
    left: -50px ;
}

.custom-arrow-right {
    right: -50px ;
}

.custom-icon {
    color: white !important;
    font-size: 20px !important;
}

.organismo {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 20px;
}

.top-part {
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

.no-underline {
    text-decoration: none;
}

.card-container {
    display: flex;
    flex-direction: row;
    gap: 5px;
    height: auto;
    width: 100%;
}


.game-card {
    height: 400px;
    width: auto;
    transition: all 0.3s ease;
    border: 3px solid transparent;
    box-sizing: border-box;
    display: flex;
    flex-direction: row;
    gap: 0;
}

.game-card:hover {
    border: 3px solid blue;
}



.image-container {
    width: auto;
    overflow: hidden;

}

.image-container img {
    width: auto;
    height: 100%;
    object-fit: cover;
}


.details-container {
    display: flex;
    flex-direction: column;
    padding: 20px;
    justify-content: space-between;
    gap: auto;
    align-items: end;
    background-color: white;
}

.textCard {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 10px;

    h2 {
        color: var(--azul);
        font-weight: bold;
    }
}

.game-description {

    overflow: hidden;
    text-overflow: ellipsis;
    max-height: 4.5em;
    /* Three lines */
    max-width: 180px;
}
</style>