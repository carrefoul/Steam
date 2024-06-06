<template>
  <div 
    :class="['game-card', { expanded: isExpanded }]" 
    @mouseenter="showButton = true" 
    @mouseleave="showButton = false"
    ref="card"
    :style="{ gridColumnEnd: isExpanded ? 'span 2' : 'span 1' }"
  >
    <div class="image-container">
      <img :src="gameData.background_image" alt="Game Image" @load="adjustHeight" />
      <icon-link 
        :showIcon="true" 
        :aloneIcon="true"
        :iconName="isExpanded ? 'Cerrar' : 'Detalles'"
        v-if="showButton || isExpanded" 
        class="icon-button" 
        @click="toggleExpand"
      />
    </div>
    <div v-if="isExpanded" class="details-container">
      <div class="textCard">
        <h2>{{ gameData.name }}</h2>
        <p class="game-description">{{ gameData.description }}</p>
      </div>
      <div class="buttons-container">
        <BuyMiniCard :gameId="gameData.id"/>
      </div>
    </div>
  </div>
</template>

<script>
import IconLink from '../Atoms/IconLink.vue';
import BuyMiniCard from '../Atoms/BuyMiniCard.vue';

export default {
  props: {
    gameData: {
      type: Object,
      required: true
    }
  },
  components: {
    IconLink,
    BuyMiniCard
  },
  data() {
    return {
      isExpanded: false,
      showButton: false,
    };
  },
  methods: {
    toggleExpand() {
      this.isExpanded = !this.isExpanded;
      this.adjustHeight();
    },
    adjustHeight() {
      this.$nextTick(() => {
        const card = this.$refs.card;
        const height = card.offsetHeight + 10; 
        const rowHeight = 10; 
        const rowSpan = Math.ceil(height / rowHeight);
        card.style.gridRowEnd = `span ${rowSpan}`;
      });
    }
  },
  watch: {
    isExpanded(newVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.$refs.card.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      }
    }
  }
};
</script>

<style scoped>
.game-card {
  height: fit-content;
  width: 100%;
  transition: all 0.3s ease;
  position: relative;
  border: 3px solid transparent;
  box-sizing: border-box;
}

.game-card:hover {
  border: 3px solid blue;
}

.game-card.expanded {
  width: calc(100%);
  border: 3px solid blue;
}

.image-container {
  width: 100%;
  overflow: hidden;
  position: relative;
}

.image-container img {
  width: 100%;
  height: auto;
  display: block; 
}

.icon-button {
  position: absolute;
  top: 10px;
  left: 10px;
}

.details-container {
  display: flex;
  flex-direction: row;
  align-items: start;
  gap: 40px;
  padding: 20px;
  background: white;
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
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 4.5em; 
}

.buttons-container {
  display: flex;
  flex-direction: column;
  margin-top: -8px;
}
</style>
