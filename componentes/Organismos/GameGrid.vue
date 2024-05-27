<template>
    <div class="prueba">

      <div class="game-grid">
        <game-card v-for="index in 20" :key="index" />
      </div>
    </div>
</template>

<script>
    import GameCard from '../componentes/Moleculas/GameCard.vue';

    export default {
        components: {
            GameCard,
        }
    };
</script>

<style lang="postcss">
    .prueba {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

        .game-grid {
            display: grid;
            padding: 0 20px;
            grid-template-columns: repeat(5, 1fr);
            /* 5 columns grid */
            gap: 10px;
            /* 10px gap between items */
            width: 100%;
            box-sizing: border-box;
        }
    }
</style>