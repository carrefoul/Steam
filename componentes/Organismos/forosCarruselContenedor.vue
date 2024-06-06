<template>
    <div class="organismo">
        <component :is="textSize" class="text">
            {{ buttonText }}
        </component>
        <forosCarrusel />

    </div>
</template>

<script>
import forosCarrusel from '~/componentes/Moleculas/forosCarrusel.vue';

export default {
    components: {
        forosCarrusel
    },
    props: {

        buttonText: {
            type: String,
            default: 'FOROS'
        },
        textSize: {
            type: String,
            default: 'h1',
        },
    },

};
</script>

<style lang="postcss" scoped>
.organismo {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin: 20px;

}

;
</style>