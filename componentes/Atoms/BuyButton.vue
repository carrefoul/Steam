<template>
  <button :class="buttonClass" @click="handleClick">
    <span v-if="showIcon || showInput" class="icon-box">
      <nuxt-icon :name="iconName" class="icon"></nuxt-icon>
    </span>
    <component v-if="showText" :is="textSize" :class="textBoxClass">
      {{ buttonText }}
    </component>
    <span v-if="showSale" class="sale-text">
      sale
    </span>
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
    showSale: {
      type: Boolean,
      default: false
    },
    showBox: {
      type: Boolean,
      default: false
    },
    showInverted: {
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
        { 'with-icon': this.showIcon || this.showInput },
        { 'with-box': this.showBox },
        { 'inverted': this.showInverted }
      ];
    },
    textBoxClass() {
      return [
        'text-box',
        { 'text-box inverted-text': this.showInverted },
        { 'text-box-padding': !this.showIcon }, // Condición para agregar el padding solo si showIcon no está activo y showText está activo
        { 'text-box': this.showText && this.showIcon } // Aplica la clase invertida específica para showIcon
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
  justify-content: center;
  background: none;
  border: none;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  padding: 0; /* Removemos padding por defecto */
  min-width: 35px;
  height: 35px;
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

.icon-box {
  width: 35px;
  height: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon {
  width: 15px;
  height: 15px;
  fill: var(--icon-color, black); /* Color del icono por defecto */
  transition: fill 0.3s;
}

.custom-button:hover .icon {
  fill: var(--hover-icon-color, var(--azul)); /* Color del icono al hacer hover */
}

.with-box .icon {
  fill: white; /* Color del icono dentro de la caja con borde */
}

.text-box {
  padding-right: 10px;
  background: none;
  font-family: AeonikTRIAL-Bold;
  
}

.text-box-padding {
  padding-right: 5px; /* Ajuste de padding a 5px */
  padding-left: 5px; /* Ajuste de padding a 5px */
}

.inverted .text-box {
  padding-right: 0;
  padding-left: 10px;
}

.sale-text {
  font-size: 0.75rem;
  color: red;
}

.inverted {
  flex-direction: row-reverse; /* Invierte el orden de los elementos */
}
</style>
