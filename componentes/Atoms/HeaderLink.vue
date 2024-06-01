<template>
  <nuxt-link :to="to" :class="buttonClass">
    <component :is="headerTag" class="header-button">
      <slot>HEADER BUTTON</slot>
    </component>
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
    },
    headerTag() {
      if (this.isTitle) return 'h2';
      if (this.isSubtitle) return 'h3';
      return 'span'; 
    }
  }
};
</script>

<style lang="postcss" scoped>
.custom-button {
  font-family: AeonikTRIAL-Regular;
  text-align: center;
  cursor: pointer;
  border: none;
  background: none;
  appearance: none;
  outline: none;
}

.header-button {
  color: var(--negro);
}

.custom-button:hover .header-button,
.custom-button.router-link-exact-active .header-button {
  color: var(--azul);
}


</style>
