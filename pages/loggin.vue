<template>
    <div class="logginHolder">
      <div class="logginS">
        <div class="logginLeft">
          <div class="main">
            <h1>inicia sesión con tu cuenta</h1>
            <div class="logginImput">
              <!-- Utilizando tu componente de 'imputsElements' -->
              <imputsElements inputWidth="20rem" :showText="true" placeholderText="Nombre de cuenta" v-model="username" />
            </div>
            <div class="logginImput">
              <!-- Utilizando tu componente de 'imputsElements' -->
              <imputsElements inputWidth="20rem" :showText="true" placeholderText="Contraseña" v-model="password" />
            </div>
          </div>
          <!-- Utilizando tu componente de 'IconLink' -->
          <IconLink @click="login" textSize="h3" :pagina="true" :showText="true" buttonText="Iniciar sesión" />
        </div>
        <div class="logginRight">
          <h1>o con un código QR</h1>
          <div class="qrHolder">
            <nuxt-icon name="qr" class="qrClass"></nuxt-icon>
          </div>
        </div>
      </div>
      <div class="extra">
        <p>Ayuda, no puedo iniciar sesión</p>
        <nuxt-link to="/registration" class="logginLink">
          <p>No tengo cuenta</p>
        </nuxt-link>
      </div>
    </div>
  </template>
  
  <script>
  // Importa tus componentes personalizados
  import IconLink from '@/componentes/Atoms/IconLink.vue';
  import imputsElements from '@/componentes/Atoms/imputsElements.vue';
  
  export default {
    name: 'LogginPage',
    components: {
      IconLink, // Registra tu componente de 'IconLink'
      imputsElements // Registra tu componente de 'imputsElements'
    },
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        console.log('Username:', this.username);
        console.log('Password:', this.password);
        // Verificar las credenciales (esto es solo un ejemplo, en un caso real, usarías credenciales seguras almacenadas en un lugar seguro)
        if (this.username === '' && this.password === '') {
          // Guardar el estado de la sesión (podrías usar Vuex o localStorage)
          localStorage.setItem('isLoggedIn', true);
          
          // Redirigir al usuario a otra página (por ejemplo, a la página de inicio)
          this.$router.push('/tienda');
        } else {
          alert('Credenciales inválidas');
        }
      },
    },
  };
  </script>

<style>
.logginHolder {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
}
.logginS {
    display: flex;
    flex-direction: row;
    gap: 5rem;
}
.logginLeft {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.main {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
}
.logginLink {
  text-decoration: none;
  appearance: none;
}
.logginRight {
    display: flex;
    flex-direction: column;
    gap: 0;
}
.qrHolder {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13.2em;
    height: 13.2em;
}
.qrClass {
    transform: scale(13.2);
    color: var(--azul);
}

h1 {
    font-size: 1.3rem;
    margin: 0;
}
p{
    margin: 0;
}
</style>