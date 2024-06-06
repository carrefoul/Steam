<template>
  <div class="subHeaderContainer">
    <div class="subHeaderTienda">
      <div class="section">
        <h1>DESTACADOS/NOVEDADES</h1>
        <div class="pages-links">
          <h3 @click="scrollToGamesCarrusel">Ofertas especiales</h3>
          <h3 @click="scrollToCategorias">Categorías</h3>
        </div>
      </div>

      <imputsElements inputWidth="10rem" :showText="true" placeholderText="Busca un juego" :showIcon="true"
        iconName="Lupa" textSize="h3" />
    </div>
  </div>
  <main>
    <MainCarruselOrganismo />
    <gamesCarrusel id="ofertasEspeciales" buttonText="OFERTAS ESPECIALES" />
    <CategoriasCarruselOrganismo id="categorias" buttonText="CATEGORÍAS" />
  </main>



</template>

<script>
import mainCarruselOrganismo from '~/componentes/Organismos/mainCarruselOrganismo.vue';
import categoriasCarruselOrganismo from '~/componentes/Organismos/categoriasCarruselOrganismo.vue';
import gamesCarrusel from '~/componentes/Organismos/gamesCarrusel.vue';

export default {
  components: {
    mainCarruselOrganismo,
    categoriasCarruselOrganismo,
    gamesCarrusel
  },
  methods: {
    scrollToGamesCarrusel() {
      const gamesCarruselElement = document.getElementById('ofertasEspeciales');
      if (gamesCarruselElement) {
        gamesCarruselElement.scrollIntoView({ behavior: 'smooth' });
      }
    },
    scrollToCategorias() {
      const CategoriasCarruselOrganismo = document.getElementById('categorias');
      if (CategoriasCarruselOrganismo) {
        CategoriasCarruselOrganismo.scrollIntoView({ behavior: 'smooth' });
      }
    },
    scrollToElement(elementId) {
      const element = document.getElementById(elementId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  },
   watch: {
    '$route.query.scrollTo': {
      immediate: true,
      handler(newVal) {
        if (newVal) {
          this.scrollToElement(newVal);
        }
      }
    }
  }
}

</script>

<style lang="postcss" scoped>
.subHeaderContainer{
  width: 100%;
}

.subHeaderTienda {
  display: flex;
  flex-direction: row;
  margin: 20px;
  justify-content: space-between;
  align-items: center;
}

.section {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
}

.pages-links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 20px;
}

main{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  gap: 15px;
}
</style>