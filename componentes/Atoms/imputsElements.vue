<template>
  <button :class="buttonClass" @click="handleClick">
    <input
      v-model="inputText"
      @input="handleInput"
      @blur="handleBlur"
      @keyup.enter="handleBlur"
      class="input-box"
      :type="inputType"
      :placeholder="placeholderText"
      :readonly="!isEditing"
      :style="{ width: inputWidth }"
    />
    <span v-if="showIcon || showInput" class="icon-box">
      <nuxt-icon :name="iconName" class="icon"></nuxt-icon>
    </span>
  </button>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
      inputText: ''
    };
  },
  props: {
    showIcon: {
      type: Boolean,
      default: false
    },
    showInput: {
      type: Boolean,
      default: false
    },
    iconName: {
      type: String,
      default: 'Lupa'
    },
    placeholderText: {
      type: String,
      default: 'Escribe aquí...'
    },
    inputWidth: {
      type: String,
      default: '100%'
    },
    isPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    buttonClass() {
      return [
        'custom-button',
        { 'with-icon': this.showIcon || this.showInput },
      ];
    },
    inputType() {
      return this.isPassword ? 'password' : 'text';
    }
  },
  methods: {
    handleClick() {
      this.isEditing = true;
    },
    handleBlur() {
      this.isEditing = false;
      console.log('Texto ingresado:', this.inputText);
      this.$emit('update:inputText', this.inputText);
    },
    handleInput() {
    
      console.log('Input:', this.inputText);
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
    border: 0.18rem solid black;
    text-align: center;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    padding: 0.6rem;
    gap: 0.8rem;
    border-radius: none;
    width: auto;
}

.custom-button:hover {
    border-color: var(--azul);
    color: var(--azul);
}

.icon {
    transition: fill 0.3s;
    transform: scale(1.1);
}

.icon-box {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0;
}

.input-box {
    background: none;
    margin: 0;
    color: black;
    border: none;
    outline: none;
    cursor: pointer;
    font-family: AeonikTRIAL-Regular;
    font-weight: normal;
    font-size: 1.05rem;
}

.input-box:focus {
    cursor: text;
}

.text-box {
    background: none;
    font-family: AeonikTRIAL-Regular;
    margin: 0;
    color: var(--gris);
    transition: color 0.3s;
}

.custom-button:hover .text-box {
    color: var(--azul);
}
@media (orientation : portrait) {
  .custom-button {
    padding: 0.6rem;

    width: 12rem;
}



}
</style>