<template>
    <div class="organismo">
        <component :is="textSize" class="text">
            {{ buttonText }}
        </component>
        <foroCarrusel />

    </div>
</template>

<script>

import foroCarrusel from '../Moleculas/foroCarrusel.vue';


export default {
    components: {
        foroCarrusel
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

@media (orientation : portrait) {
    .organismo {
        gap: 10px;
        margin: 10px;
    }
}


</style>