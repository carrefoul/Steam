<template>
    <div>
      <div
        :class="['check-container', { checked: isChecked }]"
        @click="toggleCheck"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <div v-if="isChecked" class="icon">
          <img src="@/assets/icons/Check.svg" alt="Checked Icon" />
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  
  export default defineComponent({
    name: 'CheckLink',
    data() {
      return {
        isChecked: false as boolean,
        hover: false as boolean,
      };
    },
    methods: {
      toggleCheck() {
        this.isChecked = !this.isChecked;
      },
    },
  });
  </script>
  
  
<style scoped>
.check-container {
  width: 1rem;
  height: 1rem;
  border: 0.1875rem solid black; 
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
}

.check-container:hover {
  border-color: var(--azul);
}

.check-container.checked {
  border-color: var(--azul);
}

.icon img {
  width: 1.125rem; 
  height: 1.125rem;
  fill: var(--azul);
  position: absolute;
  top: -0.4375rem; 
  right: -0.375rem; 
}
</style>