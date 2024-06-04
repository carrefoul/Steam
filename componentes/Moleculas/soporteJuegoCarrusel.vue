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
import { ref } from 'vue';
import categoriesBox from '~/componentes/Atoms/categoriesBox.vue';

const items = ref([
    { id: 1, name: 'Category 1', buttonText: 'Falta un DLC o contenido extra' },
    { id: 2, name: 'Category 2', buttonText: 'Problemas con clave de producto' },
    { id: 3, name: 'Category 3', buttonText: 'Problema técnico' },
    { id: 4, name: 'Category 4', buttonText: 'No es lo que esperaba' },
    { id: 5, name: 'Category 5', buttonText: 'No se encuentra en la biblioteca' },
    { id: 6, name: 'Category 6', buttonText: 'Quiero eliminar el juego' }
    
]);

</script>

<style>
.carruselContainer {
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;

}
.carousel-item-container {
    margin-right: 5px;
}

.categorias {
    display: flex;
    flex-direction: row;
    gap: 5px;
}
</style>