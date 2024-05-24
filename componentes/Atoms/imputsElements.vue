<template>
  <button :class="buttonClass" @click="handleClick">
    <template v-if="isEditing">
      <input
        v-model="inputText"
        @blur="handleBlur"
        @keyup.enter="handleBlur"
        class="input-box"
        type="text"
      />
      <span v-if="showIcon || showInput" class="icon-box">
        <nuxt-icon :name="iconName" class="icon"></nuxt-icon>
      </span>
    </template>
    <template v-else>
      <component v-if="showText" :is="textSize" class="text-box">
        {{ buttonText }}
      </component>
      <span v-if="showIcon || showInput" class="icon-box">
        <nuxt-icon :name="iconName" class="icon"></nuxt-icon>
      </span>
    </template>
  </button>
</template>


<script>
export default {
  data() {
    return {
      isEditing: false,
      inputText: this.buttonText
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
      default: 'Lupa'
    },
    textSize: {
      type: String,
      default: 'h3',
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
      ];
    }
  },
  methods: {
    handleClick() {
      this.isEditing = true;
    },
    handleBlur() {
      this.isEditing = false;
      this.$emit('update:buttonText', this.inputText);
    }
  },
  watch: {
    buttonText(newVal) {
      this.inputText = newVal;
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
    border: 3px solid black;
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

.input-box {
  display: flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    text-align: left;
    cursor: pointer;
    transition: background-color 0.3s, color 0.3s;
    padding: 0.6rem;
    gap: 0.8rem;
    border-radius: none;
    width: auto;
    outline: none;
    box-sizing: border-box;

}
</style>

