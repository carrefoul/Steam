<template>
    <button :class="buttonClass" @click="handleClick">
      <span v-if="showIcon || showInput" class="icon-box">
        <nuxt-icon :name="iconName" class="icon"></nuxt-icon>
      </span>
      <component v-if="showText" :is="textSize">
        {{ buttonText }}
      </component>
    </button>
  </template>
  
  <script>
  export default {
    props: {
      showIcon: {
        type: Boolean,
        default: false
      },
      showInput: {
        type: Boolean,
        default: false
      },
      showText: {
        type: Boolean,
        default: false
      },
      buttonText: {
        type: String,
        default: 'Estim'
      },
      iconName: {
        type: String,
        default: 'Twitter'
      },
      textSize: {
        type: String,
        default: 'p',
        validator: function (value) {
          return ['h9', 'p'].indexOf(value) !== -1;
        }
      }
    },
    computed: {
      buttonClass() {
        return [
          'custom-button',
          {'with-icon': this.showIcon || this.showInput}
        ];
      },
     
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
    justify-content: center;
    background: none;
    border: none;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    padding: 0.3rem;
    gap: 0.4rem;
    line-height: 0.8rem;
    
  }
  
  .custom-button:hover {
    color: var(--azul); 
  }
  
  .icon-box {
    display: flex;
    align-items: center;
    justify-content: center;
     margin: 0;
  }
  
  .icon {
    transition: fill 0.3s;

  }

  .custom-button component {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}
  </style>
  