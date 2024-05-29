<template>
    <div class="soporteContainer">
      <div v-if="loggedIn" class="soporteIn">
        <div class="subSoporte">
            <h1>TUS JUEGOS</h1>
            <imputsElements inputWidth="10rem" :showText="true" placeholderText="Busca un juego" :showIcon="true" iconName="Lupa" textSize="h3" />
        </div>
      </div>
      <div v-else class="soporteOut"> 
        <div class="outHolder">
            <div class="outTextHolder">
                <h2>¿No tienes cuenta todavía?</h2>
                <p>Inicia sesión en la Comunidad Steam para explorar más puntos de encuentro que explorar</p>
            </div>
            <div class="outButtonHolder">
                <nuxt-link to="/loggin" class="outLink">
                    <IconLink @click="login" textSize="h3" :pagina="true" :showText="true" buttonText="Iniciar sesión" />
                </nuxt-link>
                <nuxt-link to="/registration" class="outLink">
                    <IconLink class="link2" @click="login" textSize="h3" :pagina="true" :showText="true" buttonText="Registrarse" />
                </nuxt-link>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import IconLink from '@/componentes/Atoms/IconLink.vue';
export default {
    name: 'SuportPage',
    components: {
    IconLink
    },
    
  data() {
    return {
      loggedIn: false
    };
  },
  mounted() {
    this.checkLoginStatus();
    window.addEventListener('storage', this.checkLoginStatus);
  },
  beforeDestroy() {
    window.removeEventListener('storage', this.checkLoginStatus);
  },
  methods: {
    checkLoginStatus() {
      this.loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    }
  }
};
</script>

<style lang="postcss">
.soporteOut {
    display: flex;
    justify-content: center;
}
.outHolder {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 3rem 2rem 3rem;
    margin: 5rem;
    border: 0.2rem solid var(--azul);
    width: 100%;
    max-width: 50rem;
}

.outTextHolder {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 20rem;

    h2 {
        color: var(--azul);
    }
}

.outButtonHolder {
    display: flex;
    flex-direction: column;
    gap: 0.7rem;
}

.outLink {
    text-decoration: none;
}

.link2{
    width: 100% !important;
    justify-content: center !important;
}

.subSoporte {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.7rem 1rem 1.7rem 1rem;
    align-items: center;
}

</style>