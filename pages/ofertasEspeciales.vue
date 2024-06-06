<template>
    <div class="subHeaderContainer">
        <div class="subHeaderOfertas">
          <div class="titulo">
            <h1>OFERTAS ESPECIALES</h1>
          </div>
          <div class="lupa">
            <imputsElements inputWidth="10rem" :showText="true" placeholderText="Busca un juego" :showIcon="true"
                iconName="Lupa" textSize="h3" />
          </div>

        </div>
    </div>
    <main>
        <MainCarruselOrganismo />
        <gamesCarrusel buttonText="OFERTAS ESPECIALES" />
        <GameGrid />
    </main>
</template>

<script>
import mainCarruselOrganismo from '~/componentes/Organismos/mainCarruselOrganismo.vue';
import GameGrid from '~/componentes/Organismos/GameGrid.vue';
import gamesCarrusel from '~/componentes/Organismos/gamesCarrusel.vue';

export default {
  components: {
    mainCarruselOrganismo,
    GameGrid,
    gamesCarrusel
  }
}
</script>

<style scoped>
.subHeaderContainer {
    width: 100%;
}

.subHeaderOfertas {
    display: flex;
    flex-direction: row;
    margin: 20px;
    justify-content: space-between;
    align-items: center;
}
main{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  gap: 15px;
}

@media (orientation : portrait) {
  .subHeaderOfertas {
    flex-direction: column;
    gap: 10px;
    margin: 10px;
    justify-content: flex-start;
    width: 100%;

  }
  .titulo {
    width: 100%;
  }
  .lupa {
    width: 100%;
  }
  main {
    gap: 10px;
    margin-bottom: 90px;
  }
}
</style>