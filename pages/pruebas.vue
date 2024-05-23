<template>
  <div>
    <main>
      <h1>Pruebesitas</h1>
    </main>

    <div class="prueba">
      <BuyLink :showSale="true" textSize="h3" :showText="true" buttonText="BUY BUTTON" />
      <BuyLink :showIcon="true" iconName="Flecha d" :showBox="true" textSize="h6" :showText="true" buttonText="BUY BUTTON" />
      <BuyLink :showIcon="true" iconName="Flecha d" />
      <BuyLink :showIcon="true" :showBox="true" iconName="Flecha d" />
      <BuyLink :showIcon="true" :showInverted="true" :showBox="true" iconName="Flecha d" textSize="h6" :showText="true" buttonText="BUY BUTTON" />
      <BuyLink :showInverted="true" :showBox="true" textSize="h6" :showText="true" buttonText="BUY BUTTON" />

      <CheckButton />

      <IconLink :showIcon="true" iconName="Basura" textSize="h4" :showText="true" buttonText="ICON BUTTON" />
      <IconLink textSize="h3" :showBox="true" :showText="true" buttonText="ICON BUTTON" />
      <IconLink textSize="h3" :fondoAzul="true" :showText="true" buttonText="ICON BUTTON" />
      <IconLink textSize="h5" :fondoAzul="true" :showText="true" buttonText="ICON BUTTON" />
      <IconLink textSize="h3" :pagina="true" :showText="true" buttonText="ICON BUTTON" />
      <IconLink :showIcon="true" :aloneIcon="true" iconName="Basura" />

      <linkListaYMiniIconLink :showText="true" buttonText="Botón lista" />
      <linkListaYMiniIconLink :showIcon="true" iconName="Facebook" textSize="h9" :showText="true" buttonText="Mini Icon Button" />

      <CarruselArrows :showBigIcon="true"  iconName="Flecha d" />
      <CarruselArrows :showSmallIcon="true"  iconName="Flecha d" />

      
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

export default {
  components: {
    BuyLink,
    GameCard,
    CheckButton,
    CarruselArrows,
    linkListaYMiniIconLink
  }
};
</script>
<style lang="postcss">
.prueba {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  .game-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr); /* 5 columns grid */
    gap: 10px; /* 10px gap between items */
  }
}
</style>

