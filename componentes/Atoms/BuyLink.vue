<template>
  <button :class="buttonClass" @click="handleClick" :disabled="isTextOnly">
    <span v-if="showIcon || showInput" :class="['icon-box', { pointer: isPointer }]">
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
    fondo: {
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
    },
    fontChange: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClass() {
      return [
        'custom-button',
        { 'with-icon': this.showIcon || this.showInput },
        { 'with-box': this.showBox },
        { 'inverted': this.showInverted },
        { 'text-only': this.isTextOnly },
        { 'custom-padding': this.customPadding },
        { 'fondo': this.fondo }

      ];
    },
    textBoxClass() {
      return [
        'text-box',
        { 'inverted-text': this.showInverted },
        { 'text-box-padding': !this.showIcon },
        { 'text-box': this.showText && this.showIcon },
        { 'text-box1': this.isPointer },
        { 'text-box2': this.fontChange && this.showText && !this.showSale } // Aplica la clase si fontChange es verdadero y no hay venta
      ];
    },
    isTextOnly() {
      return this.showText && !this.showIcon && !this.showInput && this.showSale;
    },
    isPointer() {
      return this.showText && !this.showSale;
    },
    customPadding() {
      return this.showText && this.showBox && !this.showIcon && !this.showInput && !this.showSale;
    }
  },
  methods: {
    handleClick() {
      if (!this.isTextOnly) {
        // Solo ejecuta la acción si no es solo texto
      }
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
  transition: background-color 0.3s, color 0.3s;
  padding: 0.5rem 0.5rem 0.5rem 0.5rem; /* Padding por defecto */
  gap: 0.4rem;
  width: auto;
  height: 2.25rem;
}

.custom-button.custom-padding {
  padding: 0.5rem 0.2rem 0.5rem 0.2rem; /* Padding personalizado */
}
.custom-button:hover {
  color: var(--azul);
}

.with-box:hover {
  background-color: var(--azul);
  color: var(--blanco);
  cursor: pointer;
}

/* Nuevo estilo para el fondo azul */
.with-box.fondo {
  background-color: var(--azul);
  color: var(--blanco);

}

/* Modificaciones en los estilos de texto para el fondo azul */
.text-box.fondo {
  background-color: var(--azul);
  color: var(--blanco);
}

.text-box1.fondo,
.text-box2.fondo {
  background-color: var(--azul);
  color: var(--blanco);
}

.custom-button:hover {
  color: var(--azul);
}

.custom-button.text-only {
  cursor: default;
  color: var(--negro);
}

.custom-button.text-only:hover {
  color: inherit;
  color: var(--negro);
}

.with-box {
  border: 3px solid var(--azul);
  border-radius: none;
  color: var(--azul);
}

.with-box.custom-padding {
  border-width: 2px; 
}

.with-box:hover {
  background-color: var(--azul);
  color: var(--blanco);
  cursor: pointer;
}

svg {
  margin: 0;
}

.icon-box {
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
}

.icon {
  width: 15px;
  height: 15px;
  transition: fill 0.3s;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.icon path {
  fill: var(--icon-color, black);
  transition: fill 0.3s;
  transform: scale(1.5); /* Aumenta el tamaño del path */
  transform-origin: center; /* Asegúrate de que el escalado ocurra desde el centro */
}

.custom-button:hover .icon path {
  fill: var(--hover-icon-color, var(--azul));
}

.with-box .icon path {
  fill: white;
}

.text-box {
  background: none;
  font-family: AeonikTRIAL-Bold;
  margin: 0;
}


.text-box1 {
  background: none;
  font-family: AeonikTRIAL-Bold;
  margin: 0;
  cursor: pointer;
}

.text-box2 {
  background: none;
  font-family: Aeon
ikTRIAL-Regular !important; /* Cambia la fuente a AeonikTRIAL-Regular */
margin: 0;
cursor: pointer;
}

.inverted .text-box {
padding-right: 5px;
padding-left: 5px;
}


.sale-text {
font-size: 0.75rem;
color: red;
}

.inverted {
flex-direction: row-reverse;
}

.pointer {
cursor: pointer;
}

</style>