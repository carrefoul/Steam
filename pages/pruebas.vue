<template>
  <div>
    <main>
      <h1 class="ajuste-titulo">Pruebesitas</h1>
    </main>

    <div>
      <h1>Botones 2</h1>
    </div>
    <div class="prueba">
      <imputsElements :showText="true" placeholderText="Buscar un juego" :showIcon="true" iconName="Lupa"
        textSize="h3" />
      <imputsElements :showText="true" placeholderText="Escriba su correo electrónico" />
    </div>

    <div>
      <h1>Botones 3 y 3.2</h1>
    </div>
    <div class="prueba">
      <BuyLink :showIcon="true" iconName="Flecha d" :showBox="true" textSize="h6" :showText="true" buttonText="BUY BUTTON" />
      <BuyLink :showIcon="true" iconName="Flecha d" />
      <BuyLink :showIcon="true" :showBox="true" iconName="Flecha d" />
      <CheckButton />
      <BuyLink :fontChange="true" textSize="p" :showText="true" buttonText="BUY BUTTON" />
      <BuyLink :showIcon="true" :showInverted="true" :showBox="true" iconName="Flecha d" textSize="h6" :showText="true"
        buttonText="BUY BUTTON" />
      <BuyLink :fontChange="true" :showBox="true" textSize="p" :showText="true" buttonText="BUY BUTTON" />
      <IconLink textSize="p" :fondoAzul="true" :showText="true" buttonText="BUY BUTTON" />
      <BuyMiniCard />
    </div>
    <div>
      <h1>Botones 4 y 4.2</h1>
    </div>
    <div class="prueba">

      <IconLink :showIcon="true" iconName="Basura" textSize="h4" :showText="true" buttonText="ICON BUTTON" />
      <IconLink textSize="h3" :showBox="true" :showText="true" buttonText="ICON BUTTON" />
      <IconLink textSize="h3" :fondoAzul="true" :showText="true" buttonText="ICON BUTTON" />
      <IconLink textSize="h5" :fondoAzul="true" :showText="true" buttonText="ICON BUTTON" />
      <IconLink textSize="h3" :pagina="true" :showText="true" buttonText="ICON BUTTON" />
      <IconLink :showIcon="true" :aloneIcon="true" iconName="Basura" />

    </div>



    <div>
      <h1>Botones 5, 6 y 7</h1>
    </div>
    <div class="prueba">
      <linkListaYMiniIconLink :showText="true" buttonText="Botón lista" />
      <linkListaYMiniIconLink :showIcon="true" iconName="Facebook" textSize="h9" :showText="true"
        buttonText="Mini Icon Button" />

      <CarruselArrows :showBigIcon="true" iconName="Flecha d" />
      <CarruselArrows :showSmallIcon="true" iconName="Flecha d" />
    </div>

    <div>
      <h1>Botón carrusel categorías</h1>
    </div>
    <div>
      <categoriesBox buttonText="Nombre categoría" />
    </div>

    <div>
      <h1>Profile pic</h1>
    </div>
    <div class="prueba">
      <profilePicture :showProfilePic="true" />
      <profilePicture :showFriendProfile="true" />
      <profilePicture :showCommentPhoto="true" />
    </div>

    <div>
      <h1>Game Grid</h1>
      <GameGrid />
    </div>

    <div>
      
      <MainCarruselOrganismo />
    </div>




    <div>
      
      <gamesCarrusel buttonText="JUEGOS"/>

    </div>

    
    <div>
      <categoriasCarruselOrganismo buttonText="CATEGORÍAS" />
    </div>

    <div>
      <JuegoInfoCarrusel />
    </div>

    <div>
      <comentariosOrganismo />
    </div>






  </div>
</template>

<script>
import BuyLink from '@/componentes/Atoms/BuyLink.vue';
import CheckButton from '@/componentes/Atoms/CheckLink.vue';
import GameCard from '@/componentes/Moleculas/GameCard.vue';
import CarruselArrows from '@/componentes/Atoms/CarruselArrows.vue';
import linkListaYMiniIconLink from '~/componentes/Atoms/linkListaYMiniIconLink.vue';
import imputsElements from '~/componentes/Atoms/imputsElements.vue';
import BuyMiniCard from '~/componentes/Atoms/BuyMiniCard.vue';
import mainCarrusel from '~/componentes/Moleculas/mainCarrusel.vue';
import profilePicture from '~/componentes/Atoms/profilePicture.vue';
import GameGrid from '~/componentes/Organismos/GameGrid.vue';
import gameCardCarrusel from '~/componentes/Moleculas/gameCardCarrusel.vue';
import gamesCarrusel from '~/componentes/Organismos/gamesCarrusel.vue';
import categoriesBox from '~/componentes/Atoms/categoriesBox.vue';
import CategoriesCarrusel from '~/componentes/Moleculas/categoriesCarrusel.vue';
import mainCarruselOrganismo from '~/componentes/Organismos/mainCarruselOrganismo.vue';
import categoriasCarruselOrganismo from '~/componentes/Organismos/categoriasCarruselOrganismo.vue';
import juegoInfoCarrusel from '~/componentes/Moleculas/juegoInfoCarrusel.vue';
import comentariosOrganismo from '~/componentes/Organismos/comentariosOrganismo.vue';



export default {
  components: {
    BuyLink,
    BuyMiniCard,
    CheckButton,
    GameCard,
    CarruselArrows,
    linkListaYMiniIconLink,
    imputsElements,
    mainCarrusel,
    profilePicture,
    GameGrid,
    gameCardCarrusel,
    gamesCarrusel,
    categoriesBox,
    CategoriesCarrusel,
    mainCarruselOrganismo,
    categoriasCarruselOrganismo,
    juegoInfoCarrusel,
    comentariosOrganismo
  }
};



</script>


<style lang="postcss">
.ajuste-titulo {
  display: flex;
  flex-direction: row;
  justify-content: center;
  justify-items: center;
}

.prueba {
  display: flex;
  justify-content: flex-start;
  gap: 20px;
  padding: 20px;
  width: 100%;
}
</style>
