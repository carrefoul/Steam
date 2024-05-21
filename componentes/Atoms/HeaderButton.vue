<template>
    <nuxt-link :to="to" :class="buttonClass">
      <slot>HEADER BUTTON</slot>
    </nuxt-link>
  </template>
  
  <script>
  export default {
    props: {
      to: {
        type: String,
        required: true
      },
      isTitle: {
        type: Boolean,
        default: false
      },
      isSubtitle: {
        type: Boolean,
        default: false
      }
    },
    computed: {
      buttonClass() {
        return [
          'custom-button',
          { title: this.isTitle, subtitle: this.isSubtitle }
        ];
      }
    }
  };
  </script>
  
  <style lang="postcss" scoped>
  .custom-button {
    color: var(--negro);
    font-family: AeonikTRIAL-Regular;
    text-align: center;
    cursor: pointer;
    border: none;
    background: none;
    appearance: none;
    outline: none;
  }
  
  .custom-button:hover {
    color: var(--azul);
  }
  
  .custom-button.router-link-exact-active {
    color: var(--azul);
  }
  
  .title {
    font-size: 1rem;
  }
  
  .title:hover {
    color: var(--azul);
  }
  
  .subtitle {
    font-size: 0.8rem;
  }
  
  .subtitle:hover {
    color: var(--azul);
  }
  </style>
  