<template>
    <div>
      <h1>{{ gameData ? gameData.name : 'Cargando...' }}</h1>
      <div class="container">
        <div class="containerLeft">
          <div class="carrousel">
            <div class="carruselImgFlechas">
              <div class="imageDiv">
                <img class="capsule" :src="gameData ? gameData.background_image : 'https://via.placeholder.com/1120x561'" />
              </div>
              <div class="flechas">
                <div class="icon-flechadcha">
                  <CarruselArrows :showSmallIcon="true" iconName="Flecha i"/>
                </div>
                <div class="icon-flechadcha">
                  <CarruselArrows :showSmallIcon="true"/>
                </div>
              </div>
            </div>
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
            <p>Datos del juego (Número de jugadores, plataformas, detalles del PC, etc.)</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CarruselArrows from '~/componentes/Atoms/CarruselArrows.vue';
  import BuyLink from '~/componentes/Atoms/BuyLink.vue';
  
  export default {
    components: {
      CarruselArrows,
      BuyLink,
    },
    props: {
      gameData: {
        type: Object,
        required: false,
        default: null
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
    padding: 20px;
    width: 100%;
    border: 3px var(--azul) solid;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 10px;
  }
  </style>
  