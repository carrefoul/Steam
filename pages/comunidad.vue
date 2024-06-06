<template>
    <div class="comunidadContainer">
        <div v-if="loggedIn" class="comunidadIn">
            <div class="subComunidad">
              <div class="textosSub">
                <h1>COMUNIDAD</h1>
              <div class="subcategorias">
                <h3>Actividad</h3>
                <h3>Retransmisiones en directo</h3>
              </div>
              </div>
              <div class="buscador">
                <imputsElements inputWidth="10rem" :showText="true" placeholderText="Busca un juego" :showIcon="true" iconName="Lupa" textSize="h3" />
              </div>
            </div>
            <div class="actividadHolder">
                <h1>ACTIVIDAD</h1>
                <NoticiasGrid />
            </div>
            <div class="retransmisionesHolder">
                <h1>RETRANSMISIONES</h1>
            </div>
            <div class="forosHolder">
                <h1>FOROS</h1>
            </div>
        </div>
        <div v-else class="ComunidadOut"> 
            <div class="subComunidad">
              <div class="textosSub">
                <h1>COMUNIDAD</h1>
              <div class="subcategorias">
                <h3>Actividad</h3>
                <h3>Retransmisiones en directo</h3>
              </div>
              </div>
              <div class="buscador">
                <imputsElements inputWidth="10rem" :showText="true" placeholderText="Busca un juego" :showIcon="true" iconName="Lupa" textSize="h3" />
              </div>
            </div>
            <div class="notifHolder">
                <registerNotif class="registerNotif"/>
            </div>
            <div class="actividadHolder">
                <h1>ACTIVIDAD</h1>
            </div>
            <div class="retransmisionesHolder">
                <h1>RETRANSMISIONES</h1>
            </div>
            
        </div>
    </div>
  </template>
  
  <script>
   import registerNotif from '~/componentes/Moleculas/registerNotif.vue';
   import IconLink from '@/componentes/Atoms/IconLink.vue';
   import NoticiasGrid from '@/componentes/Organismos/NoticiasGrid.vue';
  
   export default {
    registerNotif,
  
    name: 'ComunidadPage',
      components: {
      IconLink,
      NoticiasGrid,
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
h1 {
  color: var(--azul);
}

.comunidadIn {
  display: flex;
  flex-direction: column;
}

.subComunidad {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 2rem 1rem 2rem 1rem;
  align-items: center;
}

.textosSub {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.subcategorias {
  display: flex;
  flex-direction: row;
  gap: 1rem;
}

.notifHolder {
  display: flex;
  padding: 1rem;
}

.registerNotif {
  width: 100%;
}

.actividadHolder {
  display: flex;
  flex-direction: column;
  padding: 1rem;

  h1 {
    color: var(--negro);
  }
}

.retransmisionesHolder {
  display: flex;
  flex-direction: column;
  padding: 1rem;

  h1 {
    color: var(--negro);
  }
}

.forosHolder {
  display: flex;
  flex-direction: column;
  padding: 1rem;

  h1 {
    color: var(--negro);
  }
}

main {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  gap: 15px;
}
</style>