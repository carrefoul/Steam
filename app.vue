<template>
  <div>
    <NavBar />
    <NuxtPage />
  </div>
</template>

<style lang="postcss">
@font-face{
  font-family: AeonikTRIAL-Bold;
  font-weight: bold;
  src: url("/public/fonts/AeonikTRIAL-Bold.woff2") format("woff2");
}
  body{
    margin: 0;
  }
  :root{
    --azul: #0007FF;
    --blanco: #FFFFFF;
    --negro: #000000;
    --gris: #D9D9D9;
  }
  h1{
    font-family: AeonikTRIAL-Bold;
    
  }
  h2{
    font-family: AeonikTRIAL-Regular;
  }
</style>