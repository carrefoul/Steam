<template>
    <div class="organismo">
        <component :is="textSize" class="text">
            {{ buttonText }}
        </component>
        <CategoriesCarrusel />

    </div>
</template>

<script>
import CategoriesCarrusel from '~/componentes/Moleculas/categoriesCarrusel.vue';

export default {
    components: {
        CategoriesCarrusel
    },
    props: {

        buttonText: {
            type: String,
            default: 'Estim'
        },
        textSize: {
            type: String,
            default: 'h1',
        },
    },

};
</script>

<style>
.organismo {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 20px;

}

;
</style>