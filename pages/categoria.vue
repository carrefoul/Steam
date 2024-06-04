<template>
  <div class="subHeaderContainer">
      <div class="subHeaderCategorias">
          <h1>NOMBRE DE LA CATEGORÍA {{ id }}</h1>
          <imputsElements inputWidth="10rem" :showText="true" placeholderText="Busca un juego" :showIcon="true"
              iconName="Lupa" textSize="h3" />
      </div>
  </div>
  <main>
      <div class="selectoresCategoria">
          <IconLink  textSize="p" :pagina="true" :showText="true" buttonText="Plataforma" />
          <IconLink  textSize="p" :pagina="true" :showText="true" buttonText="Género" />
          <IconLink textSize="p" :pagina="true" :showText="true" buttonText="Temática" />
          <IconLink  textSize="p" :pagina="true" :showText="true" buttonText="Modo" />
      </div>
      <GameGrid />
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router';
import IconLink from '@/componentes/Atoms/IconLink.vue';
import GameGrid from '~/componentes/Organismos/GameGrid.vue';

// Usar useRoute para obtener los parámetros de la ruta
const route = useRoute();
const id = route.params.id;
</script>

<style lang="postcss">
.subHeaderContainer {
width: 100%;
}

.subHeaderCategorias {
display: flex;
flex-direction: row;
margin: 20px;
justify-content: space-between;
align-items: center;
}


main {
display: flex;
flex-direction: column;
justify-content: space-between;
margin: 0;
padding: 0;
gap: 15px;
}

.selectoresCategoria {
width: 100%;
padding: 20px;
display: flex;
flex-direction: row;
gap: 80px;
align-items: center;
justify-content: center;
}
</style>
