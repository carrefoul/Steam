<template>
    <div class="contenedor">
        <component :is="textSize" class="text">
            {{ buttonText }}
        </component>
        <div class="comentariosApartado">
            <comentario />
            <comentario />
            <comentario />

        </div>
    </div>
</template>

<script>
import comentario from '~/componentes/Moleculas/comentario.vue';
export default {
    components: {
        comentario
    },
    props: {

        buttonText: {
            type: String,
            default: 'COMENTARIOS'
        },
        textSize: {
            type: String,
            default: 'h1',
        },
    },
}
</script>


<style>
.contenedor {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 15px;
    margin: 20px;
}

.comentariosApartado {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
}
</style>