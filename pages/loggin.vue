<template>
    <div class="logginHolder">
      <div class="logginS">
        <div class="logginLeft">
          <div class="main">
            <h1>Inicia sesión con tu cuenta</h1>
            <div class="logginImput">
              <imputsElements inputWidth="20rem" :showText="true" placeholderText="Nombre de cuenta" v-model="username" />
            </div>
            <div class="logginImput">
              <imputsElements inputWidth="20rem" :showText="true" :isPassword="true" placeholderText="Contraseña" v-model="password" />
            </div>
          </div>
          <div class="logginButtonHolder">
            <div>
              <IconLink @click="login" textSize="h3" :pagina="true" :showText="true" buttonText="Iniciar sesión" />
            </div>
            
            <div class="extra">
                <p>Ayuda, no puedo iniciar sesión</p>
                <nuxt-link to="/registration" class="logginLink">
                   <p>No tengo cuenta</p>
                </nuxt-link>
            </div> 
          </div>          
        </div>
        <div class="logginRight">
          <h1>O con un código QR</h1>
          <div class="qrHolder">
            <nuxt-icon name="qr" class="qrClass"></nuxt-icon>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import IconLink from '@/componentes/Atoms/IconLink.vue';
  import imputsElements from '@/componentes/Atoms/imputsElements.vue';
  
  export default {
    name: 'LogginPage',
    components: {
      IconLink,
      imputsElements
    },
    data() {
      return {
        username: '',
        password: ''
      };
    },
    methods: {
      login() {
        console.log('Username:', this.username);
        console.log('Password:', this.password);
        if (this.username !== 'admin' && this.password !== 'admin') {
          localStorage.setItem('isLoggedIn', 'true');
          this.$router.push('/tienda');
          window.dispatchEvent(new Event('storage'));
        } else {
          alert('Credenciales inválidas');
        }
      }
    }
  };
  </script>

<style>
.logginHolder {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 5rem;
    gap: 0.5rem;
}
.logginS {
    display: flex;
    flex-direction: row;
    gap: 5rem;
}
.logginLeft {
    display: flex;
    flex-direction: column;
    gap: 4rem;
}
.main {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
}

.logginButtonHolder {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.logginLink {
  text-decoration: none;
  appearance: none;
  list-style: none;
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
    height: 14.2em;
}
.qrClass {
    transform: scale(13.2) translateY(-0.06rem);
    top: 0;
    color: var(--azul);
}

.extra {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  align-self: flex-start;
}

h1 {
    font-size: 1.3rem;
    margin: 0;
}
p{
    margin: 0;
}
</style>