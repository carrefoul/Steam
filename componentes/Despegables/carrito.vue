<template>
  <div class="desplegable-container">
    <div class="cerrar">
      <nuxt-icon name="Cerrar" class="icon" @click="$emit('close')"></nuxt-icon>
      <BuyLink :fontChange="true" :showBox="true" textSize="p" :showIcon="true" iconName="Like" :showText="true" @click="redirectToPage" buttonText="Lista de Deseos" />
    </div>
    <div class="games">
      <CartGame v-for="game in games" :key="game.id" :gameData="game" @uninstall="removeGame(game.id)" />
    </div>
    <div class="bottom">
      <div class="precio">
        <h1>Subtotal {{ totalPrice }}€</h1>
      </div>

      <div>
        <BuyLink :fontChange="true" :showBox="true" textSize="p" :showText="true"  buttonText="Continuar el pago" />
        <BuyLink :fontChange="true"  textSize="p" :showText="true" @click="redirectToPage" buttonText="Seguir comprando" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

import DesplegableJuegosProfile from '~/componentes/Despegables/desplegableJuegosProfile.vue';
import profilePicture from '~/componentes/Atoms/profilePicture.vue';
import IconLink from '@/componentes/Atoms/IconLink.vue';
import CartGame from '@/componentes/Atoms/CartGame.vue';

const apiKey = 'f4de9380f16546b09a3041a05219c157';

export default {
  components: {
    IconLink,
    profilePicture,
    CartGame,
    DesplegableJuegosProfile
  },
  data() {
    return {
      games: [],
      showDesplegable: false
    };
  },
  computed: {
    totalPrice() {
      return this.games.reduce((total, game) => total + game.randomPrice, 0);
    }
  },
  async mounted() {
    await this.fetchGames();
    document.addEventListener('click', this.handleClickOutside);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.handleClickOutside);
  },
  methods: {
    async fetchGames() {
      const apiUrl = `https://api.rawg.io/api/games?key=${apiKey}&page_size=3`; 
      try {
        const response = await axios.get(apiUrl);
        const games = response.data.results.map(game => {
          return {
            ...game,
            randomPrice: Math.floor(Math.random() * (60 - 40 + 1)) + 40
          };
        });
        this.games = games;
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
    },
    removeGame(gameId) {
      this.games = this.games.filter(game => game.id !== gameId);
    },
    redirectToPage() {
      this.$emit('close'); 
      this.$router.push('/tienda');
    }
  }
};
</script>

<style scoped>
.games {
  height: 100%;
  width: 100%;
}
.desplegable-container {
  width: 100%;
  max-width: 30rem;
  height: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  box-sizing: border-box;
  background-color: var(--blanco);
  position: absolute;
  top: 0;
  right: 0;
}
.cerrar {
  display: flex;
  flex-direction: row;
  align-self: flex-end;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  cursor: pointer;
}
.icon {
  width: 15px;
  height: 15px;
}
.bottom {
  border-top: 3px solid var(--azul);
  padding-top: 10px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding-top: 1rem;
}
.precio {
  border-right: 3px solid var(--azul);
  padding: 1rem;
}
</style>
