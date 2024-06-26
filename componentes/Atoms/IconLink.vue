<template>
    <button :class="buttonClass" @click="handleClick">
      <span v-if="showIcon" class="icon-box">
        <nuxt-icon :name="iconName" class="icon"></nuxt-icon>
      </span>
      <component v-if="showText" :is="textSize" :class="textBoxClass">
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
      showBox: {
      type: Boolean,
      default: false
      },
      aloneIcon: {
      type: Boolean,
      default: false
      },
      fondoAzul: {
      type: Boolean,
      default: false
      },
      pagina: {
      type: Boolean,
      default: false
      },
      buttonText: {
        type: String,
        default: 'Estim'
      },
      iconName: {
        type: String,
        default: 'Basura'
      },
      textSize: {
        type: String,
        default: 'p',
        validator: function (value) {
          return ['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'h7', 'h8', 'h9', 'h10', 'h11', 'p'].indexOf(value) !== -1;
        }
      }
    },
    computed: {
      buttonClass() {
        return [
          'custom-button',
          { 'with-icon': this.showIcon },
          { 'with-box': this.showBox },
          { 'alone-icon': this.aloneIcon },
          { 'fondo-azul': this.fondoAzul },
          { 'pagina': this.pagina },
        ];
      },
      textBoxClass() {
        return [
          'text-box',
          { 'text-box-padding': !this.showIcon && this.showText } 
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
    padding: 0.2rem 0.5rem 0.2rem 0.5rem; 
    gap: 0.4rem;
    width: auto;
    height: 2.25rem;
  }
  
  .custom-button:hover {
    color: var(--azul); 
  }
  
  .with-box {
    border: 0.18rem solid var(--azul);
    border-radius: none;
    color: var(--azul);
  }
  
  .with-box:hover {
    background-color: var(--azul);
    color: var(--blanco);
  }

  .alone-icon {
    width: 35px;
    height: 35px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--azul);
  }
  
  .alone-icon:hover {
    border: 0.18rem solid var(--azul);
    border-radius: none;
    color: var(--azul);
  }

  .fondo-azul {
    background-color: var(--azul);
    color: var(--blanco);
    border: 0.2rem solid var(--azul);
  }
  
  .fondo-azul:hover {
    background-color: var(--azul);
    color: var(--blanco);
    h3 {
      font-weight: bolder;
    }
    p {
      font-weight: bolder;
    }
    h10 {
      font-weight: bolder;
    }
    h5 {
      font-weight: bolder;
    }
    
  }

  .pagina {
    color: var(--azul);
    border: 0.18rem solid var(--azul);
    box-sizing: border-box;
    padding: 0.2rem 1rem 0.2rem 1rem;
  }
  
  .pagina:hover {
    color: var(--azul);
    outline: 0.1em solid var(--azul); 
    h3 {
      font-weight: bolder;
    }
    h5 {
      font-weight: bolder;
    }
    h10 {
      font-weight: bolder;
    }
    p {
      font-weight: bolder;
    }
  }
  
  .icon-box {
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .icon {
    transform: scale(1.3);
    fill: var(--icon-color, black); 
    transition: fill 0.3s;
  }
  
  .custom-button:hover .icon {
    fill: var(--hover-icon-color, var(--azul));
  }
  
  .with-box .icon {
    fill: white; 
  }
  
  .text-box {
    padding: 0;
    margin: 0;
    background: none;
  }
  
  .text-box-padding {
    padding: 0;
  }
  
  </style>
  