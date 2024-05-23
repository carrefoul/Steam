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

      <GameCard />
      <GameCard />
      <GameCard />
      <GameCard />
    </div>
  </div>
</template>

<script>
import BuyLink from '@/componentes/Atoms/BuyLink.vue';
import CheckButton from '@/componentes/Atoms/CheckLink.vue';
import GameCard from '@/componentes/Moleculas/GameCard.vue';

export default {
  components: {
    BuyButton,
    GameCard
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

