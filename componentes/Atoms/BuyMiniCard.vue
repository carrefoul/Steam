<template>
  <div v-if="loggedIn" class="BuyMiniCard">
    <BuyLink :showSale="true" textSize="h2" :showText="true" buttonText="BUY BUTTON" />
    <div class="MiniCard">
      <IconLink class="adjust-space" textSize="p" :fondoAzul="true" :showText="true" buttonText="Añadir al carro" />
      <BuyLink :fontChange="true" :showBox="true" textSize="p" :showText="true" buttonText="Ver más" />
    </div>
  </div>
  <div v-else class="BuyMiniCard">
    <BuyLink :showSale="true" textSize="h2" :showText="true" buttonText="BUY BUTTON" />
    <div class="MiniCard">
      <BuyLink :fontChange="true" :showBox="true" textSize="p" :showText="true" buttonText="Ver más" />
    </div>
  </div>
</template>

<script>
import IconLink from '@/componentes/Atoms/IconLink.vue';
import BuyLink from '@/componentes/Atoms/BuyLink.vue';
export default {
  components: {
  IconLink,
  BuyLink
  },
  
data() {
  return {
    loggedIn: false
  };
},
mounted() {
  this.checkLoginStatus();
  window.addEventListener('storage', this.checkLoginStatus);
},
beforeDestroy() {
  window.removeEventListener('storage', this.checkLoginStatus);
},
methods: {
  checkLoginStatus() {
    this.loggedIn = localStorage.getItem('isLoggedIn') === 'true';
  }
}
};
</script>

<style lang="postcss">
.MiniCard{
display: flex;
flex-direction: row;
}  
.adjust-space{
margin-right: 0.5rem;
}  
</style>