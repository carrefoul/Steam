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
  h1 {
        color: var(--azul);
        font-family: AeonikTRIAL-Bold;
        font-size: 30px;
  }
  h2 {
        color: var(--negro);
        font-family: AeonikTRIAL-Regular;
        font-size: 25px;
  }
  h3 {
        color: var(--negro);
        font-family: AeonikTRIAL-Regular;
        font-size: 23px;
  }
  h4 {
        color: var(--negro);
        font-family: AeonikTRIAL-Bold;
        font-size: 23px;
  }
  h5 {
        color: var(--negro);
        font-family: AeonikTRIAL-Regular;
        font-size: 20px;
  }
  h6 {
        color: var(--negro);
        font-family: AeonikTRIAL-Bold;
        font-size: 15px;
  }
  h8 {
        color: red;
        font-family: AeonikTRIAL-Regular;
        font-size: 14px;
  }
  h9 {
        color: var(--negro);
        font-family: AeonikTRIAL-Bold;
        font-size: 25px;
  }
  h10 {
        color: var(--negro);
        font-family: AeonikTRIAL-Bold;
        font-size: 18px;
  }
  h11 {
        color: var(--azul);
        font-family: AeonikTRIAL-Regular;
        font-size: 30px;
  }
  h12 {
        color: var(--negro);
        font-family: AeonikTRIAL-Regular;
        font-size: 18px;
  }
  p{
    color: var(--negro);
    font-family: AeonikTRIAL-Regular;
    font-size: 15px;
  }
</style>