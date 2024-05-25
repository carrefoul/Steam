<template>
  <div>
    <main>
      <h1 class="ajuste-titulo">Pruebesitas</h1>
    </main>

    <div>
      <h1>Botones 2</h1>
    </div>
    <div class="prueba">
      <imputsElements :showText="true" buttonText="Buscar un juego" :showIcon="true" iconName="Lupa" textSize="h3"/>
      <imputsElements :showText="true" buttonText="Escriba su correo electrónico" />
    </div>

    <div>
      <h1>Botones 3 y 3.2</h1>
    </div>
    <div class="prueba">
      <BuyLink :showIcon="true" iconName="Flecha d" :showBox="true" textSize="h6" :showText="true" buttonText="BUY BUTTON" />
      <BuyLink :showIcon="true" iconName="Flecha d" />
      <BuyLink :showIcon="true" :showBox="true" iconName="Flecha d" />
      <CheckButton />
      <BuyLink  :fontChange="true" textSize="p" :showText="true" buttonText="BUY BUTTON" />
      <BuyLink :showIcon="true" :showInverted="true" :showBox="true" iconName="Flecha d" textSize="h6" :showText="true" buttonText="BUY BUTTON" />
      <BuyLink :fontChange="true" :showBox="true" textSize="p" :showText="true" buttonText="BUY BUTTON" />
      <IconLink textSize="p" :fondoAzul="true" :showText="true" buttonText="BUY BUTTON" />
      <BuyMiniCard />
    </div>
    <div>
      <h1>Botones 4 y 4.2</h1>
    </div>
    <div class="prueba">

      <IconLink :showIcon="true" iconName="Basura" textSize="h4" :showText="true" buttonText="ICON BUTTON" />
      <IconLink textSize="h3" :showBox="true" :showText="true" buttonText="ICON BUTTON" />
      <IconLink textSize="h3" :fondoAzul="true" :showText="true" buttonText="ICON BUTTON" />
      <IconLink textSize="h5" :fondoAzul="true" :showText="true" buttonText="ICON BUTTON" />
      <IconLink textSize="h3" :pagina="true" :showText="true" buttonText="ICON BUTTON" />
      <IconLink :showIcon="true" :aloneIcon="true" iconName="Basura" />

    </div>

    

    <div>
      <h1>Botones 5, 6 y 7</h1>
    </div>
    <div class="prueba">
      <linkListaYMiniIconLink :showText="true" buttonText="Botón lista" />
      <linkListaYMiniIconLink :showIcon="true" iconName="Facebook" textSize="h9" :showText="true" buttonText="Mini Icon Button" /> 

      <CarruselArrows :showBigIcon="true"  iconName="Flecha d" />
      <CarruselArrows :showSmallIcon="true"  iconName="Flecha d" />
    </div>
    
    <div>
      <h1>Game Grid</h1>
    </div>
    <div class="prueba">

      <div class="game-grid">
        <game-card v-for="index in 20" :key="index" />
      </div>
    </div>
  </div>
</template>

<script>
import BuyLink from '@/componentes/Atoms/BuyLink.vue';
import CheckButton from '@/componentes/Atoms/CheckLink.vue';
import GameCard from '@/componentes/Moleculas/GameCard.vue';
import CarruselArrows from '@/componentes/Atoms/CarruselArrows.vue';
import linkListaYMiniIconLink from '~/componentes/Atoms/linkListaYMiniIconLink.vue';
import imputsElements from '~/componentes/Atoms/imputsElements.vue';
import BuyMiniCard from '~/componentes/Atoms/BuyMiniCard.vue';


export default {
  components: {
    BuyLink,
    BuyMiniCard,
    CheckButton,
    GameCard,
    CarruselArrows,
    linkListaYMiniIconLink,
    imputsElements
    
  }
};
</script>
<style lang="postcss">
.prueba {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  .game-grid {
    display: grid;
    padding: 0 20px;
    grid-template-columns: repeat(5, 1fr); /* 5 columns grid */
    gap: 10px; /* 10px gap between items */
    width: 100%;
    box-sizing: border-box;
  }
}
.ajuste-titulo{
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
}
</style>

