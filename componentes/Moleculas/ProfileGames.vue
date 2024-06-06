<template>
  <main class="all">
      <h8 class="profilename">JUEGOS</h8>
      <div class="friendstitle">
          <div class="icon-container" @click="toggleDesplegable" ref="iconContainer">
              <IconLink class="juegos" textSize="p" :pagina="true" :showText="true" buttonText="Todos los juegos" />
              <div v-if="showDesplegable" class="desplegable" @click.stop>
                  <DesplegableJuegosProfile />
              </div>
          </div>
          <imputsElements class="ajusteinput" :showText="true" placeholderText="Buscar un juego" :showIcon="true" iconName="Lupa" textSize="h3" />
      </div>
      <div class="containerBox">
          <ProfileGame v-for="game in games" :key="game.id" :gameData="game" />
      </div>
  </main>
</template>

<script>
import axios from 'axios';

import DesplegableJuegosProfile from '~/componentes/Despegables/desplegableJuegosProfile.vue';
import profilePicture from '~/componentes/Atoms/profilePicture.vue';
import IconLink from '@/componentes/Atoms/IconLink.vue';
import profileGame from '@/componentes/Atoms/profileGame.vue';

const apiKey = 'f4de9380f16546b09a3041a05219c157';

export default {
components: {
  IconLink,
  profilePicture,
  profileGame,
  DesplegableJuegosProfile
},
data() {
  return {
    games: [],
    showDesplegable: false
  };
},
async mounted() {
  await this.fetchGames();
  document.addEventListener('click', this.handleClickOutside);
},
beforeDestroy() {
  document.removeEventListener('click', this.handleClickOutside);
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
  },
  toggleDesplegable() {
    this.showDesplegable = !this.showDesplegable;
  },
  handleClickOutside(event) {
    const iconContainer = this.$refs.iconContainer;
    if (this.showDesplegable && !iconContainer.contains(event.target)) {
      this.showDesplegable = false;
    }
  }
}
}
</script>

<style scoped>
.all {
display: flex;
flex-direction: column;
padding: 1rem 20px;
gap: 10px;
}
.profilename {
display: flex;
align-items: center;
color: var(--negro);
}
.icon-container {
position: relative;
}

.juegos {
width: 9rem;
height: 2rem;
border: 2px solid;
display: flex;
justify-content: center;
}
.friendstitle {
display: flex;
flex-direction: row;
justify-content: space-between;
align-content: center;
align-items: center;
}
.ajusteinput {
margin-right: 0.3rem;
}
.friendsbox {
display: flex;
flex-direction: row;
}
.containerBox {
display: flex;
flex-direction: column;
gap: 5px;
}
</style>
