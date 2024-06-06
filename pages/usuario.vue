<template>
    <button @click="logout">Cerrar Sesión</button>
  </template>
  
  <script>
  export default {
    name: 'UsuarioPage',
    methods: {
      logout() {
        window.dispatchEvent(new Event('storage'));
        localStorage.removeItem('isLoggedIn');
        this.$emit('logout');
        this.$router.push('/loggin');
      }
    }
  };
  </script>