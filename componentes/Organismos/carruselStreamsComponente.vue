<template>
    <div class="organismo">
        <component :is="textSize" class="text">
            {{ buttonText }}
        </component>
        <streamCarrusel />

    </div>
</template>




<script scoped>
import streamCarrusel from '~/componentes/Moleculas/streamCarrusel.vue';

export default {
    components: {
        streamCarrusel
    },
    props: {

        buttonText: {
            type: String,
            default: 'RETRANSMISIONES'
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