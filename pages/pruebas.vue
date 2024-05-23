<template>
  <div>
    <main>
      <h1>Pruebesitas</h1>
    </main>

    <div class="prueba">
      <BuyButton :showIcon="true" iconName="Flecha d" :showSale="true" textSize="h3" :showText="true" buttonText="BUY BUTTON" />
      <BuyButton :showIcon="true" :showBox="true" iconName="Flecha d" textSize="h6" :showText="true" buttonText="BUY BUTTON" />
      <BuyButton :showIcon="true" iconName="Flecha d" />
      <BuyButton :showIcon="true" :showBox="true" iconName="Flecha d" />
      <BuyButton :showIcon="true" :showInverted="true" :showBox="true" iconName="Flecha d" textSize="h6" :showText="true" buttonText="BUY BUTTON" />
      <BuyButton  :showInverted="true" :showBox="true"  textSize="h6" :showText="true" buttonText="BUY BUTTON" />
      
      <IconLink :showIcon="true" iconName="Basura" textSize="h4" :showText="true" buttonText="ICON BUTTON" />
      <IconLink textSize="h3" :showBox="true" :showText="true" buttonText="ICON BUTTON" />
      <IconLink textSize="h3" :fondoAzul="true" :showText="true" buttonText="ICON BUTTON" />
      <IconLink textSize="h5" :fondoAzul="true" :showText="true" buttonText="ICON BUTTON" />
      <IconLink textSize="h3" :pagina="true" :showText="true" buttonText="ICON BUTTON" />
      <IconLink :showIcon="true" :aloneIcon="true" iconName="Basura" />

      
      
      

      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
    </div>
  </div>
</template>

<script>
import BuyButton from '@/componentes/Atoms/BuyButton.vue';
import GameCard from '@/componentes/Moleculas/GameCard.vue';
import CarruselArrows from '~/componentes/Atoms/CarruselArrows.vue';

export default {
  components: {
    BuyButton,
    GameCard,
    CarruselArrows
  }
};
</script>

<style lang="postcss">
.prueba {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
