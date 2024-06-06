<template>
    <div class="organismo">
        <component :is="textSize" class="text">
            {{ buttonText }}
        </component>
        <soporteJuegoCarrusel />

    </div>
</template>

<script>
import soporteJuegoCarrusel from '../Moleculas/soporteJuegoCarrusel.vue';

export default {
    components: {
        soporteJuegoCarrusel
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

<style scoped>
.organismo {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 20px;

}


</style>