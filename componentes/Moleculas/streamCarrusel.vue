<template>
  <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'snap-start' }" arrows>
    <div class="conainerStream">
        <img :src="item" class="w-full" draggable="false">
    </div>
    
  </UCarousel>
</template>

<script setup lang="ts">
const items = [
    '@/assets/img/streams1.jpg',
    '@/assets/img/Streams2.jpg',
    '@/assets/img/Streams3.jpg',
    '@/assets/img/Streams4.jpg',
    '@/assets/img/Streams5.jpg',
    '@/assets/img/Streams6.jpg',
    '@/assets/img/Streams7.jpg',
    '@/assets/img/Streams8.jpg'
]
</script>

<style scoped>
.conainerStream{
    height: 300px;
    width: auto;
    margin-right: 5px;
}
</style>