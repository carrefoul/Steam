<template>
    <div class="carruselContainer">
        <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'snap-start' }" arrows >
            <div class="carousel-item-container">
                <categoriesBox :item="item" :buttonText="item.buttonText" class="w-full" />

            </div>
            
        </UCarousel>

    </div>

</template>

<script setup lang="ts">
import categoriesBox from '~/componentes/Atoms/categoriesBox.vue';

const items = ref([
    { id: 1, name: 'Category 1', buttonText: 'Ciudades y asentamientos' },
    { id: 2, name: 'Category 2', buttonText: 'Todos los deportes' },
    { id: 3, name: 'Category 3', buttonText: 'Roguelike' },
    { id: 4, name: 'Category 4', buttonText: 'Puzzles' },
    { id: 5, name: 'Category 5', buttonText: 'Anime' },
    { id: 6, name: 'Category 6', buttonText: 'Aventura' },
    { id: 7, name: 'Category 7', buttonText: 'Estrategia' },
    { id: 8, name: 'Category 8', buttonText: 'Carreras' },
    { id: 9, name: 'Category 9', buttonText: 'Ciencia y steampunk' }
]);



</script>

<style scoped>
.carruselContainer {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;

}
.carousel-item-container {
    margin-right: 5px;
}


</style>
