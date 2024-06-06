<template>
  <div>
    <div class="detalle-juego">
      <DetalleJuego :gameData="gameData" />
    </div>
    <main>
      <RegisterNotif v-if="!loggedIn" />
      <comentariosOrganismo />
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import DetalleJuego from '~/componentes/Organismos/DetalleJuego.vue';
import RegisterNotif from '@/componentes/Moleculas/registerNotif.vue';
import comentariosOrganismo from '~/componentes/Organismos/comentariosOrganismo.vue';

const apiKey = 'f4de9380f16546b09a3041a05219c157'; // Reemplaza con tu clave de API de RAWG

export default {
  components: {
    DetalleJuego,
    RegisterNotif,
    comentariosOrganismo
  },
  data() {
    return {
      gameData: null,
      loggedIn: false
    };
  },
  methods: {
    async fetchGameDetails(gameId) {
      const apiUrl = `https://api.rawg.io/api/games/${gameId}?key=${apiKey}`;
      try {
        const response = await axios.get(apiUrl);
        this.gameData = response.data;
      } catch (error) {
        console.error('Error al obtener los detalles del juego:', error);
      }
    },
    checkLoginStatus() {
      this.loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    }
  },
  async created() {
    const gameId = this.$route.params.id; 
    await this.fetchGameDetails(gameId);
    this.checkLoginStatus();
  },
  mounted() {
    window.scrollTo(0, 0); // Desplazarse a la parte superior de la página cuando se monta el componente
  }
};
</script>

<style scoped>
.detalle-juego {
  padding: 20px;
}

main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  gap: 15px;
}
</style>
