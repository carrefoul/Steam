<template>
  <div class="detalle-juego">
    <h1>Detalle del Juego</h1>
    <DetalleJuego />
  </div>
</template>

<script>
  import DetalleJuego from '~/componentes/Organismos/DetalleJuego.vue';

export default {
  components: {
    DetalleJuego,
  },
  name: 'DetalleJuego'
};
</script>

<style scoped>
.detalle-juego {
  padding: 20px;
}
</style> 