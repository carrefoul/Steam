<template>
  <div class="soporteContainer">
      <div v-if="loggedIn" class="soporteIn">
        <div class="subSoporte">
            <h1>TUS JUEGOS</h1>
            <imputsElements inputWidth="10rem" :showText="true" placeholderText="Busca un juego" :showIcon="true" iconName="Lupa" textSize="h3" />
        </div>
      </div>
      <div v-else class="soporteOut"> 
        <registerNotif />
        
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

<style scoped>
.soporteContainer{
  display: flex;
  align-items: center;
  justify-content: center;
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
</style>