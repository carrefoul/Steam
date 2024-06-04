<template>
    <div class="organismo">
        <component :is="textSize" class="text">
            {{ buttonText }}
        </component>
        <soporteCarrusel />

    </div>
</template>

<script>
import soporteCarrusel from '~/componentes/Moleculas/soporteCarrusel.vue';

export default {
    components: {
        soporteCarrusel
    },
    props: {

        buttonText: {
            type: String,
            default: 'SOPORTE'
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


</style>