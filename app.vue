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
        font-weight: normal;
        font-size: 1.8rem;
  }
  h2 {
        font-family: AeonikTRIAL-Regular;
        font-weight: normal;
        font-size: 1.5rem;
  }
  h3 {
        font-family: AeonikTRIAL-Regular;
        font-weight: normal;
        font-size: 1.4rem;
  }
  h4 {
        color: var(--negro);
        font-family: AeonikTRIAL-Bold;
        font-weight: normal;
        font-size: 1.4rem;
  }
  h5 {
        color: var(--negro);
        font-family: AeonikTRIAL-Regular;
        font-weight: normal;
        font-size: 1.25rem;
  }
  h6 {
        color: var(--negro);
        font-family: AeonikTRIAL-Bold;
        font-weight: normal;
        font-size: 0.9rem;
  }
  h8 {
        color: red;
        font-family: AeonikTRIAL-Regular;
        font-weight: normal;
        font-size: 0.8rem;
  }
  h9 {
        color: var(--negro);
        font-family: AeonikTRIAL-Bold;
        font-weight: normal;
        font-size: 1.5rem;
  }
  h10 {
        color: var(--negro);
        font-family: AeonikTRIAL-Bold;
        font-weight: normal;
        font-size: 1.1rem;
  }
  h11 {
        color: var(--azul);
        font-family: AeonikTRIAL-Regular;
        font-weight: normal;
        font-size: 1.8rem;
  }
  h12 {
        color: var(--negro);
        font-family: AeonikTRIAL-Regular;
        font-weight: normal;
        font-size: 0.8rem;
  }
  p{
    color: var(--negro);
    font-family: AeonikTRIAL-Regular;
    font-size: 0.9rem;
  }
</style>