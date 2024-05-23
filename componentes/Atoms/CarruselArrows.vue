<template>
    <button :class="buttonClass" @click="handleClick">
        <span v-if="showBigIcon" class="icon-box arrowBigCarrousel">
            <nuxt-icon :name="iconName" class="icon"></nuxt-icon>
        </span>
    </button>
    <button>
        <span v-if="showSmallIcon" class="icon-box arrowSmallCarrousel">
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

    showBox: {
      type: Boolean,
      default: false
    },

    iconName: {
      type: String,
      default: 'Flecha d'
    },
    
  },
  computed: {
    bigArrow() {
      return [
        'custom-button',
        'icon',
        'icon-box',
        { 'arrowBigCarrousel': this.showBigIcon }
        
      ];
    },
    smallArrow() {
      return [
        'custom-button',
        'icon',
        'icon-box',
        { 'arrowSmallCarrousel': this.showSmallIcon },
      ];
    }
  },
  methods: {
    handleClick() {
    }
  }
};
</script>




<style lang="postcss" scoped>
.custom-button {
  display: flex;
  align-items: center;
  justify-content: left;
  background: none;
  border: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  padding: 0.6rem;
  width: auto;
  height: auto;
  border: 3px solid var(--azul);
  border-radius: none;
  color: var(--azul);
}

.custom-button:hover {
    background-color: var(--azul);
    color: var(--blanco);
}



.icon{
 fill: var(----icon-color, black);
 transition: fill 0.3s;
 display: flex;
 align-items: center;
}

.icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.custom-button:hover .icon {
  fill: var(--hover-icon-color, var(--azul));
}

.arrowBigCarrousel{
    width: 43px;
    height: 43px;
    transform: scale(3);
    
}

.arrowSmallCarrousel{
    width: 25px;
    height: 25px;
    transform: scale(2);
}
</style>