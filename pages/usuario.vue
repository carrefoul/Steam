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
        // Actualizar el estado de inicio de sesión en la aplicación
        this.$emit('logout');
        // Redirigir al usuario a la página de inicio de sesión u otra página apropiada
        this.$router.push('/loggin');
      }
    }
  };
  </script>