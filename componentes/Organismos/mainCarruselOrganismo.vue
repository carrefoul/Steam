<template>
    <div class="organismo">
        <MainCarrusel />

    </div>
</template>

<script>
import mainCarrusel from '~/componentes/Moleculas/mainCarrusel.vue';

export default {
    components: {
        mainCarrusel
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