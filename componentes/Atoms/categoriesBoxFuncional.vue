<template>
    <NuxtLink :to="'/categoria'" :class="buttonClass" @click="handleClick">
      <component :is="textSize" class="text">
        {{ buttonText }}
      </component>
    </NuxtLink>
  </template>
  
  <script scoped>
  
  
  export default {
    props: {
  
      buttonText: {
        type: String,
        default: 'Estim'
      },
      textSize: {
        type: String,
        default: 'h8',
      },
    },
    computed: {
      buttonClass() {
        return [
          'custom-button'
        ];
      }
    }
  
  };
  
  
  </script>
  
  <style lang="postcss" scoped>
  .custom-button {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--azul);
    border: none;
    text-align: center;
    padding: 50px 70px;
    /* Padding por defecto */
    width: auto;
    height: auto;
    color: white;
    white-space: nowrap;
  }
  
  .custom-button text {
    width: auto;
  }
  </style>