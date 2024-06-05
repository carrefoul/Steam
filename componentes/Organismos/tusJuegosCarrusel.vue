<template>
    <div class="organismo">
        <tusjuegosSoporte />

    </div>
</template>

<script>
import tusjuegosSoporte from '~/componentes/Moleculas/tusjuegosSoporte.vue';

export default {
    components: {
        tusjuegosSoporte
    },
    
}
</script>

<style>
.organismo{
    display: flex;
    flex-direction: column;
    margin: 20px;

};
</style>