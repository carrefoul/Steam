<template>
    <main class="all">
        <h8 class="profilename">JUEGOS</h8>
        <div class="friendstitle">
        <IconLink class="juegos" textSize="p" :pagina="true" :showText="true" buttonText="Todos los juegos" />
        <imputsElements class="ajusteinput" :showText="true" placeholderText="Buscar un juego" :showIcon="true" iconName="Lupa"
        textSize="h3" />
        </div>
        <div class="containerBox">
          <ProfileGame v-for="game in games" :key="game.id" :gameData="game" />
          

        </div>
        
       
    </main>
</template>

<script>
import axios from 'axios';




import profilePicture from '~/componentes/Atoms/profilePicture.vue';
import IconLink from '@/componentes/Atoms/IconLink.vue';
import profileGame from '@/componentes/Atoms/profileGame.vue';

const apiKey = 'c320afcffae4417e9b8004ba91f1950b';

export default {
  components: {
    IconLink,
    profilePicture,
    profileGame
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
    redirectToInsigniasPage() {
      this.$router.push('/insignias');
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
}
</script>

<style scoped>
.all{
    display: flex;
    flex-direction: column;
    padding: 20px;
    gap: 10px;
}
.profilename{
    display: flex;
    align-items: center;
    color: var(--negro);
    margin-bottom: 1rem;
}
.juegos{
width: 9rem;
height: 2rem;
border: 2px solid;
display: flex;
justify-content: center;
}
.friendstitle{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-content: center;
    align-items: center;
}
.ajusteinput{
    margin-right: 0.3rem;

}
.friendsbox{
    display: flex;
    flex-direction: row;
}
.containerBox{
  display: flex;
  flex-direction: column;
  gap: 5px;
}

</style>
