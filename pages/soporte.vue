<template>
  <div class="soporteContainer">
      <div v-if="loggedIn" class="soporteIn">
        <div class="subSoporte">
          <div class="titulo">
            <h1>TUS JUEGOS</h1>

          </div>
          <div class="lupa">
            <imputsElements inputWidth="10rem" :showText="true" placeholderText="Busca un juego" :showIcon="true" iconName="Lupa" textSize="h3" />
          </div>
            
            
        </div>
        <main>
          <tusJuegosCarrusel />
          <soporteCarruselComponente />
          

        </main>
      </div>
      <div v-else class="soporteOut"> 
        <registerNotif class="registerNotif"/>
      </div>
  </div>
</template>

<script>
 import registerNotif from '~/componentes/Moleculas/registerNotif.vue';
 import IconLink from '@/componentes/Atoms/IconLink.vue';
 import soporteCarruselComponente from '~/componentes/Organismos/soporteCarruselComponente.vue';
 import tusJuegosCarrusel from '~/componentes/Organismos/tusJuegosCarrusel.vue';


 export default {
  registerNotif,

  name: 'SuportPage',
    components: {
    IconLink,
    soporteCarruselComponente ,
    tusJuegosCarrusel
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

<style lang="postcss" scoped>
.soporteContainer{
  display: flex;
}

.soporteIn{
  width: 100%;
}

.subSoporte {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.7rem 1rem 1.7rem 1rem;
    
    align-items: center;
}

.registerNotif {
  width: 100%;
}

.soporteOut {
  display: flex;
  padding: 5rem 5rem 15rem 5rem;
  width: 100%;
  height: 100%;
}

main{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  gap: 15px;
}

@media (orientation : portrait) {
  .subSoporte {
    flex-direction: column;
    gap: 10px;
    margin: 10px;
    justify-content: flex-start;
    width: 100%;
    padding: 0;

  }
  .titulo{
    width: 100%;
    margin: 0;
  }
  .lupa{
    width: 100%;
  }
  main {
    gap: 10px;
    margin-bottom: 90px;
  }
  .soporteOut {
    padding: 2rem;
    transform: translateX(-1.2rem);
  }
}


</style>