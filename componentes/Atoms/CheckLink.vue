<template>
    <div>
      <div
        :class="['check-container', { checked: isChecked }]"
        @click="toggleCheck"
        @mouseover="hover = true"
        @mouseleave="hover = false"
      >
        <div v-if="isChecked" class="icon">
          <!-- Aquí puedes insertar tu icono como componente o imagen SVG -->
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
    width: 10px;
    height: 10px;
    border: 3px solid black;
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
  
  /* Ajusta el color del icono */
  .icon img {
    width: 18px;
    height: 18px;
    fill: var(--azul); /* Color del icono */
    position: absolute;
    top: -7px; 
    right: -6px; 
  }
  </style>
  