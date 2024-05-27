<template>
  <div class="BuyMiniCard">
    <BuyLink 
      :showSale="true" 
      textSize="h2" 
      :showText="true" 
      :buttonText="buttonText" 
      :saleText="saleText" 
    />
    <div class="MiniCard">
      <IconLink 
        class="adjust-space" 
        textSize="p" 
        :fondoAzul="true" 
        :showText="true" 
        buttonText="Añadir al carro" 
      />
      <BuyLink 
        :fontChange="true" 
        :showBox="true" 
        textSize="p" 
        :showText="true" 
        buttonText="Ver más" 
      />
    </div>
  </div>
</template>

<script>
import BuyLink from '../Atoms/BuyLink.vue';
import IconLink from '../Atoms/IconLink.vue';

export default {
  components: {
    BuyLink,
    IconLink
  },
  data() {
    return {
      buttonText: '',
      saleText: '',
    };
  },
  mounted() {
    this.generatePrices();
  },
  methods: {
    generatePrices() {
      const randomPrice = (min, max) => {
        return (Math.random() * (max - min) + min).toFixed(2);
      };
      const price = parseFloat(randomPrice(10, 60)); // Precio entre 10 y 60 euros
      const salePrice = (price + Math.random() * 10).toFixed(2); // Precio de venta mayor que el precio base

      this.buttonText = `${price} €`;
      this.saleText = `${salePrice} €`;
    }
  }
};
</script>

<style lang="postcss" scoped>
.MiniCard {
  display: flex;
  flex-direction: row;
}  
.adjust-space {
  margin-right: 0.5rem;
}  
</style>
