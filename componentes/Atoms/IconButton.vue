<template>
    <button :class="buttonClass" @click="handleClick">
      <span v-if="showIcon">
      <nuxt-icon name="gato"></nuxt-icon> 
      </span>
      Estim
    </button>
</template>
  
<script>
  export default {
    props: {
      showIcon: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      buttonClass() {
        return ['custom-button', { 'with-icon': this.showIcon }];
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
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    background-color: blue;
    color: #fff;
    border-radius: 9999px;
    border: 1px solid #3b82f6;
    min-width: 80px;
    text-align: center;
    cursor: pointer;
  }
  
  .with-icon {
    padding-left: 1rem;
  }
  
  svg {
    vertical-align: middle;
    fill: currentColor;
  }
</style>