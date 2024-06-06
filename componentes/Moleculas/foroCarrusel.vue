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
    { id: 1, name: 'Category 1', buttonText: 'New to Steam' },
    { id: 2, name: 'Category 2', buttonText: 'Helps and tips' },
    { id: 3, name: 'Category 3', buttonText: 'Suggestions/Ideas' },
    { id: 4, name: 'Category 4', buttonText: 'Steam discussions' },
    { id: 5, name: 'Category 5', buttonText: 'Steam for MAC' },
    { id: 6, name: 'Category 6', buttonText: 'Steam mobile' },
    { id: 7, name: 'Category 7', buttonText: 'Steam community' },
    { id: 8, name: 'Category 8', buttonText: 'VAC discussion' }
    
]);

</script>

<style lang="postcss" scoped>
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