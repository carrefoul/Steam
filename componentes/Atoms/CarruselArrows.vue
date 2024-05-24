<template>
    <button :class="buttonClass" @click="handleClick">
        <span v-if="showBigIcon" class="arrowBigCarrusel">
            <nuxt-icon :name="iconName" class="icon"></nuxt-icon>
        </span>
        <span v-if="showSmallIcon" class="arrowSmallCarrusel">
            <nuxt-icon :name="iconName" class="icon"></nuxt-icon>
        </span>
    </button>
    
    
    
</template>

<script>
export default {
  props: {
    showBigIcon: {
      type: Boolean,
      default: false
    },
    showSmallIcon: {
      type: Boolean,
      default: false
    },
    iconName: {
      type: String,
      default: 'Flecha d'
    }
  },
  computed: {
    buttonClass() {
      return [
        'arrow-button',
        { 'arrowBigCarrousel': this.showBigIcon },
        { 'arrowSmallCarrousel': this.showSmallIcon }
      ];
    },
    
  },
  methods: {
    handleClick() {
      // Acción al hacer clic
    }
  }
};
</script>




<style lang="postcss" scoped>

.arrow-button {
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 3px solid var(--azul);
  text-align: center;
  cursor: pointer;
  padding: 0.6rem;
  transition: background-color 0.3s, color 0.3s;
  color: var(--azul);
}

.arrow-button:hover {
  background-color: var(--azul);
  color: var(--blanco);
}

.icon {
  fill: var(--icon-color, black);
  transition: fill 0.3s;
  display: flex;

}

.arrowBigCarrousel {
    height: 43px;
    width: 43px;
    margin: 0.6rem;
    transform: scale(2);
}

.arrowSmallCarrousel {
    height: 25px;
    width: 25px;
    margin: 0.6rem;
    transform: scale(1.5);
}

</style>