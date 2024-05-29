<template>
    <main class="allbutton">
      <div class="cerrar">
        <nuxt-icon name="Cerrar" class="icon"></nuxt-icon>
      </div>
      <div>
        <div class="LogoContainer">
        <nuxt-icon name="Logo" class="logo" filled></nuxt-icon>
        </div>      
    </div>
      <p class="textsteam">Steam es el mejor sitio para jugar, hablar sobre juegos y crearlos</p>
      <div class="containerdata">
        <div class="onlinegroup">
          <div class="title">
            <nuxt-icon name="NoCheck" class="iconon"></nuxt-icon>
            <p>En línea</p>
          </div>
          <p>132454354</p>
        </div>
        <div class="playgroup">
          <div class="title">
            <nuxt-icon name="NoCheck" class="iconon"></nuxt-icon>
            <p>Jugando</p>
          </div>
          <p>352463356</p>
        </div>
        <div class="installgroup">
          <p>Disponible en</p>
          <nuxt-icon name="Apple" class="icon"></nuxt-icon>
          <nuxt-icon name="Windows" class="icon"></nuxt-icon>
          <BuyLink :fontChange="true" :showBox="true" textSize="p" :showText="true" buttonText="INSTALAR" />
        </div>
      </div>
    </main>
  </template>
  
  <script>
  import BuyLink from '@/componentes/Atoms/BuyLink.vue';
  
  export default {
    components: {
      BuyLink,
    },
  };
  </script>
  
  <style lang="postcss" scoped>
  .allbutton {
    max-width: 420px;
    min-width: 420px;
    max-height: 200px;
    border: 0.1875rem solid var(--azul); /* 3px converted to rem */
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem; /* Added padding for better spacing */
    box-sizing: border-box; /* Ensure padding is included in width/height */
  }
  .title{
    display: flex;
    flex-direction: row;
    padding-bottom: 10px;
    margin: 0;

  }
  .cerrar {
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
.installgroup{
    display: flex;
    flex-direction: row;
    align-items: center;
}
.iconon{
    color: var(--azul);
}
.LogoContainer {
  width: 6rem;
  height: 100%;
  overflow: hidden;
  padding-bottom: 20px;
    svg{
      width: 6rem;
    }
}
  .logo {
    width: 5rem !important; 
    height: 5rem !important; 
    transform: scale(2);
  }
  
  .containerdata {
    flex-grow: 1; /* Allow containerdata to grow and fill available space */
  }
  
  .custom-button {
    display: flex;
    align-items: center;
    justify-content: left;
    background: none;
    border: none;
    text-align: center;
    transition: background-color 0.3s, color 0.3s;
    padding: 0.5rem 0.5rem;
    gap: 0.4rem;
    width: auto;
    height: 2.25rem;
  }
  
  .icon {
    width: 15px;
    height: 15px;
    transition: fill 0.3s;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  
  .icon path {
    fill: var(--icon-color, black);
    transition: fill 0.3s;
    transform: scale(1.5);
    transform-origin: center;
  }
  .textsteam{
    padding-bottom: 20px;
  }
  .custom-button:hover .icon path {
    fill: var(--hover-icon-color, var(--azul));
  }
  .containerdata{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
  .with-box .icon path {
    fill: white;
  }
  
  .text-box {
    background: none;
    font-family: AeonikTRIAL-Bold;
    margin: 0;
  }
  
  p {
    font-size: 14px;
  }
  </style>
  