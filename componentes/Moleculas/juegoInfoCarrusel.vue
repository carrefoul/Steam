<template>
    <div class="carousel-container">
      <UCarousel v-slot="{ item }" :items="images" :ui="{ item: 'basis-full' }" arrows>
        <img :src="item" class="w-full" draggable="false">
      </UCarousel>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      images: {
        type: Array,
        required: true,
        default: () => []
      }
    }
  };
  </script>
  
  <style scoped>
  .carousel-container {
    width: 60%;
    height: 500px;
    position: relative;
    overflow: hidden;
  }
  
  .carousel-container img {
    width: 100%;
    object-fit: cover;
  }
  </style>
  