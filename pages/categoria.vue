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
      <div class="selectorContainer">
        <IconLink textSize="p" :pagina="true" :showText="true" buttonText="Plataforma" @click="togglePlataforma" />
        <div class="despegable-estilo" v-if="showPlataforma">
          <p>Window</p>
          <p>MacOS</p>
          <p>Linux</p>
        </div>
      </div>
      <div class="selectorContainer">
        <IconLink textSize="p" :pagina="true" :showText="true" buttonText="Género" @click="toggleGenero" />
        <div class="despegable-estilo" v-if="showGenero">
          <p>Acción</p>
          <p>Aventura</p>
          <p>Rol</p>
          <p>Estrategia</p>
          <p>Deportes</p>
        </div>
      </div>
      <div class="selectorContainer">
        <IconLink textSize="p" :pagina="true" :showText="true" buttonText="Temática" @click="toggleTematica" />
        <div class="despegable-estilo" v-if="showTematica">
          <p>Anime</p>
          <p>Ciencia ficción</p>
          <p>Misterio</p>
          <p>Mundo abierto</p>
          <p>Terror</p>
          <p>Supervivencia</p>
        </div>
      </div>
      <div class="selectorContainer">
        <IconLink textSize="p" :pagina="true" :showText="true" buttonText="Modo" @click="toggleModos" />
        <div class="despegable-estilo" v-if="showModos">
          <p>Cooperativo</p>
          <p>LAN</p>
          <p>Multijugador</p>
          <p>Un jugador</p>
        </div>
      </div>




    </div>
    <GameGrid />
  </main>
</template>

<script setup>
import { useRoute } from 'vue-router';
import IconLink from '@/componentes/Atoms/IconLink.vue';
import GameGrid from '~/componentes/Organismos/GameGrid.vue';
import despegablePlataforma from '@/componentes/Despegables/despegablePlataformas.vue';

const route = useRoute();
const id = route.params.id;

const showPlataforma = ref(false);
const showGenero = ref(false);
const showTematica = ref(false);
const showModos = ref(false);

// Método para cambiar la visibilidad del desplegable
const togglePlataforma = () => {
  showPlataforma.value = !showPlataforma.value;
};

const toggleGenero = () => {
  showGenero.value = !showGenero.value;
};

const toggleTematica = () => {
  showTematica.value = !showTematica.value;
};

const toggleModos = () => {
  showModos.value = !showModos.value;
};

</script>

<style lang="postcss" scoped>
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

.selectorContainer {
  position: relative;

}

.custom-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: none;
  border: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  padding: 0.2rem 0.5rem 0.2rem 0.5rem;
  /* Removemos padding por defecto */
  gap: 0.4rem;
  width: 200px;
  height: 2.25rem;
  border: 0.18rem solid var(--azul);
  border-radius: none;
  color: var(--azul);
  position: relative;
}

.custom-button:hover {
  color: var(--azul);
  background-color: var(--azul);
  color: var(--blanco);
}

.despegable-estilo {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 15px;
  margin: 0;
  padding: 10px 8px;
  background-color: var(--white);
  border: 3px solid #0007FF;
  position: absolute;
  z-index: 1000;
  top: 100%;
  left: 0;
  overflow: hidden;
  background-color: white;
  text-decoration: none;
  width: 200px;
}
</style>
