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
        ];
      },
      textBoxClass() {
        return [
          'text-box',
          { 'text-box-padding': !this.showIcon && this.showText } // Condición para agregar el padding solo si showIcon no está activo y showText está activo
        ];
      }
    },
    methods: {
      handleClick() {
        // Aquí puedes añadir lógica para manejar el clic del botón si es necesario
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
    padding: 0.2rem 0.5rem 0.2rem 0.5rem; /* Removemos padding por defecto */
    gap: 0.4rem;
    width: auto;
    height: auto;
  }
  
  .custom-button:hover {
    color: var(--azul); /* Color de texto por defecto en hover */
  }
  
  .with-box {
    border: 3px solid var(--azul);
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
    border: 3px solid var(--azul);
    border-radius: none;
    color: var(--azul);
  }
  
  .icon-box {
    width: 26px;
    height: 26px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .icon svg {
    width: 50px;
    height: 26px;
    fill: var(--icon-color, black); /* Color del icono por defecto */
    transition: fill 0.3s;
  }

  .nuxt-icon svg {
  margin-bottom: 0;
  width: 5em;
  }
  
  .custom-button:hover .icon {
    fill: var(--hover-icon-color, var(--azul)); /* Color del icono al hacer hover */
  }
  
  .with-box .icon {
    fill: white; /* Color del icono dentro de la caja con borde */
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
  