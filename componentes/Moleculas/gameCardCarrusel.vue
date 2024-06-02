<template>
<div 
    :class="['game-card', { expanded: isExpanded }]" 
    @click="toggleExpand"
  >
    <div class="image-container">
      <img :src="gameData.background_image" alt="Game Image" @load="adjustHeight" />
    </div>
    <div v-if="isExpanded" class="details-container">
      <div class="textCard">
        <h2>{{ gameData.name }}</h2>
        <p class="game-description">{{ gameData.description }}</p>
      </div>
      <div>
        <BuyMiniCard :gameId="gameData.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import BuyMiniCard from '../Atoms/BuyMiniCard.vue';

export default {
    
  props: {
    gameData: {
      type: Object,
      required: true
    }
  },
  components: {
    BuyMiniCard
  },
  data() {
    return {
      isExpanded: false,
    };
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
      
    }
    
  
  }
};
</script>



<style scoped>
.game-card {
  height: 400px;
  width: auto;
  transition: all 0.3s ease;
  border: 3px solid transparent;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  gap: 0;
}

.game-card:hover {
  border: 3px solid blue;
}



.image-container {
  width: auto;
  overflow: hidden;

}

.image-container img {
  width: auto;
  height: 100%;
  object-fit: cover;
}


.details-container {
  display: flex;
  flex-direction: column;
  padding: 20px;
  justify-content: space-between;
  gap: auto;
  align-items: end;
  background-color: white;
}

.textCard {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
  h2 {
    color: var(--azul);
    font-weight: bold;
  }
}

.game-description {
  
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 4.5em; /* Three lines */
  max-width: 180px;
}


</style>