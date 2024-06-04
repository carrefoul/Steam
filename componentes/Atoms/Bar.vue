<template>
    <main class="flex">
       <p class="text">Avances en los logros</p>
    <div class="progress-bar-container">
      <div class="progress-bar" :style="{ width: progressBarWidth + '%' }"></div>
    </div>
</main>

  </template>
  
  <script>
  export default {
    data() {
      return {
        progressBarWidth: 0
      };
    },
    created() {
      this.generateRandomWidth();
    },
    methods: {
      generateRandomWidth() {
        this.progressBarWidth = Math.floor(Math.random() * 100) + 1;
      }
    }
  };
  </script>
  
  <style scoped>

  .flex{
    display: flex;
    flex-direction: row;
  }
  .progress-bar-container {
    width: 10rem;
    height: 0.7rem; 
    border: 3px solid var(--azul);
    background-color: white;
    display: flex;
    align-items: center;
  }
  
  .progress-bar {
    height: 100%;
    background-color: var(--azul);
  }
  </style>