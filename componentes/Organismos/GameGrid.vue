<template>
      <div class="game-grid">
        <game-card v-for="index in 20" :key="index" :expandHandler="expandCard" :resetAllExpanded="resetAllExpanded"/>
      </div>
  </template>
  
  <script>
  import GameCard from '../componentes/Moleculas/GameCard.vue';
  
  export default {
    components: {
      GameCard,
    },
    data() {
      return {
        expandedCard: null,
      };
    },
    methods: {
      expandCard(card) {
        if (this.expandedCard && this.expandedCard !== card) {
          this.expandedCard.isExpanded = false;
          this.expandedCard.adjustHeight();
        }
        this.expandedCard = card;
        this.$nextTick(() => {
          this.expandedCard.adjustHeight();
        });
      },
      resetAllExpanded() {
        if (this.expandedCard) {
          this.expandedCard.isExpanded = false;
          this.expandedCard.adjustHeight();
          this.expandedCard = null;
        }
      }
    }
  };
  </script>
  
  <style lang="postcss">
  
  .game-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr); /* Cinco columnas */
    grid-gap: 10px; /* 10px de espacio entre tarjetas */
    width: 100%;
    box-sizing: border-box;
  }
  </style>
  