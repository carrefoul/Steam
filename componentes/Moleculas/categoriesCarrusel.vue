<template>
    <div class="carruselContainer">
        <swiper 
            :slides-per-view="1"
            :effect="'creative'"
            :creative-effect="{
                prev: {
                    shadow: false,
                    translate: ['-20%', 0, -1],
                },
                next: {
                    translate: ['100%', 0, 0],
                },
            }"
            ref="swiper">
            <swiper-slide class="categorias">
                <categoriesBox buttonText="Ciudades y asentamientos"/>
                <categoriesBox buttonText="Todos los deportes"/>
                <categoriesBox buttonText="Roguelike"/>
                <categoriesBox buttonText="Puzzles"/>
                <categoriesBox buttonText="Anime"/>
                <categoriesBox buttonText="Aventura"/>
                <categoriesBox buttonText="Estrategia"/>
                <categoriesBox buttonText="Carreras"/>
                <categoriesBox buttonText="Ciencia y steampunk"/>
            </swiper-slide>
           
        </swiper>
        <div class="arrowContainer">
            <CarruselArrows :showSmallIcon="true" iconName="Flecha i" />
            <CarruselArrows :showSmallIcon="true" iconName="Flecha d" />

        </div>
    </div>
</template>

<script scoped>

import categoriesBox from '~/componentes/Atoms/categoriesBox.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/swiper-bundle.css';
import CarruselArrows from '../Atoms/CarruselArrows.vue';

export default{
    components: {
        categoriesBox,
        Swiper,
        SwiperSlide,
        CarruselArrows



    },
};
</script>

<style>
 .carruselContainer{
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
   
 }
 .categorias{
    display: flex;
    flex-direction: row;
    gap: 5px;
 }

 .arrowContainer {
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    z-index: 4;
    top: 50%;
    width: 100%;
    transform: translateY(-50%);
}

.arrowContainer>* {
    pointer-events: all;
    /* Asegura que las flechas sean clicables */
}
 
</style>