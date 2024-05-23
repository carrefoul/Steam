<template>
    
    <button
      :class="bigArrow"
      @click="handleClick"
      v-if="showBigIcon || showBox"
    >
      <nuxt-icon :name="iconName" class="icon"></nuxt-icon>
    </button>
    <button
      :class="smallArrow"
      @click="handleClick"
      v-if="showSmallIcon || showBox"
    >
      <nuxt-icon :name="iconName" class="icon"></nuxt-icon>
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
    bigArrow() {
      return [
        'arrow-button',
        { 'arrowBigCarrousel': this.showBigIcon }
      ];
    },
    smallArrow() {
      return [
        'arrow-button',
        { 'arrowSmallCarrousel': this.showSmallIcon }
      ];
    }
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
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  background: white;
  border: 3px solid var(--azul);
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  padding: 0.6rem;
  width: auto;
  height: auto;
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
  transform: scale(2);
}

.arrowSmallCarrousel {
  transform: scale(1.5);
}

</style>