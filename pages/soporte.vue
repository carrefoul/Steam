<template>
  <div class="soporteContainer">
      <div v-if="loggedIn" class="soporteIn">
        <div class="subSoporte">
            <h1>TUS JUEGOS</h1>
            <imputsElements inputWidth="10rem" :showText="true" placeholderText="Busca un juego" :showIcon="true" iconName="Lupa" textSize="h3" />
        </div>
      </div>
      <div v-else class="soporteOut"> 
        <registerNotif class="registerNotif"/>
      </div>
  </div>
</template>

<script>
 import registerNotif from '~/componentes/Moleculas/registerNotif.vue';
 import IconLink from '@/componentes/Atoms/IconLink.vue';

 export default {
  registerNotif,

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
</style>