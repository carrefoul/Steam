<template>
  <div 
    :class="['news-card', { expanded: isExpanded }]" 
    @mouseenter="showButton = true" 
    @mouseleave="showButton = false"
    ref="newsCard"
    :style="{ gridColumnEnd: isExpanded ? 'span 2' : 'span 1' }"
  >
    <div class="image-container">
      <img :src="imageSrc" alt="News Image" @load="adjustHeight" />
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
        <h2>{{ newsData.title }}</h2>
        <p class="fecha">15 ABR</p>
        <p class="news-description">{{ newsData.content }}</p>
      </div>
      <div class="interacciones">
        <IconLink :showIcon="true" :aloneIcon="true" iconName="Like" />
        <IconLink :showIcon="true" :aloneIcon="true" iconName="Comentario" />
      </div>
    </div>
  </div>
</template>

<script>
import IconLink from '../Atoms/IconLink.vue';

export default {
  props: {
    newsData: {
      type: Object,
      required: true
    },
    imageSrc: {
      type: String,
      required: true
    }
  },
  components: {
    IconLink
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
        const card = this.$refs.newsCard;
        const height = card.offsetHeight + 10; // Altura real de la tarjeta más el gap
        const rowHeight = 10; // Debe coincidir con el valor de grid-auto-rows
        const rowSpan = Math.ceil(height / rowHeight);
        card.style.gridRowEnd = `span ${rowSpan}`;
      });
    }
  },
  watch: {
    isExpanded(newVal) {
      if (newVal) {
        this.$nextTick(() => {
          this.$refs.newsCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
      }
    }
  }
};
</script>

<style scoped>
.news-card {
  height: fit-content;
  width: 100%;
  transition: all 0.3s ease;
  position: relative;
  border: 3px solid transparent;
  box-sizing: border-box;
}

.news-card:hover {
  border: 3px solid blue;
}

.news-card.expanded {
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
  display: block; /* Ensures the image does not have any whitespace underneath */
}

.icon-button {
  position: absolute;
  top: 10px;
  left: 10px;
}

.details-container {
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 40px;
  padding: 20px;
  background: white;
  .interacciones{
    display: flex;
    flex-direction: row;
  }
}

.textCard {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 10px;
}

.textCard h2 {
  color: var(--azul);
  font-weight: bold;
}

.news-description {
  overflow: visible;
  max-height: none;
}
.fecha{
  color: var(--azul);
  font-size: 0.7rem;
}
</style>