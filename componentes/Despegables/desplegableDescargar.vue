<template>
  <div class="desplegable-container">
    <div class="cerrar" @click="$emit('close')">
      <nuxt-icon name="Cerrar" class="icon"></nuxt-icon>
    </div>
    <div class="LogoContainer">
      <nuxt-icon name="Logo" class="logo" filled></nuxt-icon>
    </div>
    <p class="textsteam">Steam es el mejor sitio para jugar, hablar sobre juegos y crearlos</p>
    <div class="containerdata">
      <div class="onlinegroup">
        <div class="title">
          <nuxt-icon name="NoCheck" class="iconon"></nuxt-icon>
          <p>En línea</p>
        </div>
        <p class="numbers">132,454,354</p>
      </div>
      <div class="playgroup">
        <div class="title">
          <nuxt-icon name="NoCheck" class="iconon"></nuxt-icon>
          <p>Jugando</p>
        </div>
        <p class="numbers">52,463,356</p>
      </div>
      <div class="installgroup">
        <p>Disponible en</p>
        <nuxt-icon name="Apple" class="icon no-pointer"></nuxt-icon>
        <nuxt-icon name="Windows" class="icon no-pointer"></nuxt-icon>
        <BuyLink :fontChange="true" :showBox="true" textSize="p" :showText="true" @click="redirectToPage" buttonText="INSTALAR" />
      </div>
    </div>
  </div>
</template>

<script>
import BuyLink from '@/componentes/Atoms/BuyLink.vue';

export default {
  components: {
    BuyLink,
  },
  methods: {
    redirectToPage() {
      window.open('https://store.steampowered.com/about/?l=spanish', '_blank');
    }
  }
};
</script>

<style scoped>
.desplegable-container {
  max-width: 420px;
  min-width: 420px;
  max-height: 200px;
  border: 0.1875rem solid var(--azul);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;
  background-color: var(--blanco);
}
.title {
  display: flex;
  flex-direction: row;
  padding-bottom: 5px;
  margin: 0;
  justify-content: center;
  align-items: center;
}
p {
  margin: 0;
}

.cerrar {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
}
.installgroup {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.iconon {
  color: var(--azul);
}
.LogoContainer {
  width: 6rem;
  height: 100%;
  overflow: hidden;
  padding-bottom: 20px;
}
.logo {
  width: 5rem !important;
  height: 5rem !important;
  transform: scale(2);
}
.containerdata {
  flex-grow: 1;
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
  cursor: pointer;
}
.icon {
  width: 15px;
  height: 15px;
  transition: fill 0.3s;
  display: flex;
  align-items: center;
}
.icon path {
  fill: var(--icon-color, black);
  transition: fill 0.3s;
  transform: scale(1.5);
  transform-origin: center;
}
.icon.no-pointer {
  cursor: default; 
  margin: 0 5px;
}
.textsteam {
  padding-bottom: 20px;
}
.custom-button:hover .icon path {
  fill: var(--hover-icon-color, var(--azul));
}
.containerdata {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.with-box{
  border: 3px solid var(--azul);

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
.installgroup .button-custom {
  border: 3px solid var(--border-color, black);
}
.onlinegroup{
  display: flex;
  flex-direction: column;
  align-items: baseline;
}
.playgroup{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
