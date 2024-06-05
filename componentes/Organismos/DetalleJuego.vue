<template>
  <div>
    <h1>{{ gameData ? gameData.name : 'Cargando...' }}</h1>
    <div class="container">
      <div class="containerLeft">
        <div class="carrousel">
          <juegoInfoCarrusel />
          <div class="dotDiv">
            <div class="dot-carrusel active"></div>
            <div class="dot-carrusel"></div>
            <div class="dot-carrusel"></div>
            <div class="dot-carrusel"></div>
          </div>
        </div>
        <div class="infoDiv">
          <p class="description">
            {{ gameData ? gameData.description_raw : 'Cargando descripción...' }}
          </p>
          <BuyLink textSize="h2" :showText="true" buttonText="BUY BUTTON"/>
        </div>
      </div>
      <div class="containerRight">
        <div class="imagenes-juego">
          <img class="imagen" :src="gameData ? gameData.background_image_additional : 'https://via.placeholder.com/560x275'" />
          <img class="imagen" :src="gameData ? gameData.background_image_additional : 'https://via.placeholder.com/560x275'" />
        </div>
        <div class="detallesJuego">
          <div class="detalleSeccion">
            <p class="static-text">GÉNERO: </p>
            <p class="api-text">{{ gameData ? gameData.genres.map(genre => genre.name).join(', ') : 'Cargando...' }}</p>
          </div>
          <div class="detalleSeccion">
            <p class="static-text">DESARROLLADOR: </p>
            <p class="api-text">{{ gameData ? gameData.developers.map(dev => dev.name).join(', ') : 'Cargando...' }}</p>
          </div>
          <div class="detalleSeccion">
            <p class="static-text">EDITOR: </p>
            <p class="api-text">{{ gameData ? gameData.publishers.map(pub => pub.name).join(', ') : 'Cargando...' }}</p>
          </div>
          <div class="detalleSeccion">
            <p class="api-text rating">{{ gameData ? gameData.rating : 'Cargando...' }} / 5</p>
          </div>
          <div class="detalleSeccion tags">
            <p class="api-text">
              <h11 v-for="(tag, index) in displayedTags" :key="index">
                {{ tag.name }}<span v-if="index < displayedTags.length - 1">, </span>
              </h11>
              <span v-if="gameData && gameData.tags && !showAllTags && gameData.tags.length > 5" class="more-icon">
                <nuxt-icon name="Más" class="icon" @click="showAllTags = true"></nuxt-icon>
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import juegoInfoCarrusel from '~/componentes/Moleculas/juegoInfoCarrusel.vue';
import BuyLink from '~/componentes/Atoms/BuyLink.vue';

export default {
  components: {
    juegoInfoCarrusel,
    BuyLink,
  },
  props: {
    gameData: {
      type: Object,
      required: false,
      default: null
    }
  },
  data() {
    return {
      showAllTags: false
    };
  },
  computed: {
    displayedTags() {
      if (!this.gameData || !this.gameData.tags) {
        return [];
      }
      return this.showAllTags ? this.gameData.tags : this.gameData.tags.slice(0, 5);
    }
  },
  name: 'DetalleJuego'
};
</script>

<style scoped>
* {
  box-sizing: border-box; 
}
.container {
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  box-sizing: border-box;
  overflow: hidden;
}

.containerLeft {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 2rem;
  width: 70%;
  box-sizing: border-box;
}

.carrousel {
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  flex: 1;
}

.carruselImgFlechas {
  width: 100%;
  position: relative;
  flex: 1;
  height: 32.125rem; /* Altura fija en rem */
}

.imageDiv {
  width: 100%;
  background: white;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  height: 32.125rem; /* Altura fija en rem */
  overflow: hidden;
}

.capsule {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.flechas {
  width: 100%;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.dotDiv {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  gap: 10px;
}

.dot-carrusel {
  width: 1rem;
  height: 1rem;
  background: #d9d9d9;
}

.dot-carrusel.active {
  background: #0007ff;
}

.infoDiv {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 10rem;
  flex: 0 1 auto;
}

.containerRight {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
  gap: 20px;
  width: 30%;
  max-width: 30%;
  box-sizing: border-box;
  height: 100%; /* Expande en altura para ocupar todo el contenedor principal */
}

.imagenes-juego {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: stretch;
  width: 100%;
  gap: 10px;
  flex-grow: 1;
  height: 32.125rem; /* Altura fija en rem */
}

.imagen {
  width: 100%;
  flex-grow: 1;
  object-fit: cover;
  border: 3px var(--azul) solid;
}

.detallesJuego {
  display: flex;
  flex-direction: column;
  padding: 20px;
  width: 100%;
  border: 3px var(--azul) solid;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 10px;
}

.detalleSeccion {
  display: flex;
  flex-direction: row;
}

.static-text {
  color: black;
}

.api-text {
  color: var(--azul);
}

.icon {
  cursor: pointer;
}

.tags {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.tags .api-text {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}

.tags .api-text span {
  white-space: nowrap;
}

.more-icon {
  margin-left: 10px;
}

.rating{
  font-weight: bold;
}

</style>
