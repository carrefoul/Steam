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
      <IconLink textSize="h3" :showBox="true" :showText="true" buttonText="ICON BUTTON" />
      <IconLink textSize="h5" :showBox="true" :showText="true" buttonText="ICON BUTTON" />
      <IconLink textSize="h3" :showBox="true" :showText="true" buttonText="ICON BUTTON" />
      <IconLink :showIcon="true" :aloneIcon="true" iconName="Basura" />
    </div>
  </div>
</template>

<script>
import BuyButton from '@/componentes/Atoms/BuyButton.vue';

export default {
  components: {
    BuyButton
  }
};
</script>

<style lang="postcss">
.prueba {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
}
</style>
