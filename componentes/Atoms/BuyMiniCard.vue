<template>
  <div class="BuyMiniCard">
    <BuyLink :showSale="true" textSize="h2" :showText="true" buttonText="BUY BUTTON" />
    <div class="MiniCard">
      <IconLink class="adjust-space" textSize="p" :fondoAzul="true" :showText="true" buttonText="Añadir al carro" />
      <BuyLink :fontChange="true" :showBox="true" textSize="p" :showText="true" buttonText="Ver más" />
    </div>
  </div>
</template>


<style lang="postcss">
.MiniCard{
display: flex;
flex-direction: row;
}  
.adjust-space{
margin-right: 0.5rem;
}  
</style>