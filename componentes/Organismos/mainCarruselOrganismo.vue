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

<style scoped>
.organismo{
    display: flex;
    flex-direction: column;
    margin: 20px;

};
</style>