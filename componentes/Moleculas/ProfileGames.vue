<template>
    <main class="all">
        <div>
        <h8 class="profilename">JUEGOS</h8>
        </div>
        <div class="friendstitle">
        <IconLink class="juegos" textSize="p" :pagina="true" :showText="true" buttonText="Todos los juegos" />
        <imputsElements class="ajusteinput" :showText="true" placeholderText="Buscar un juego" :showIcon="true" iconName="Lupa"
        textSize="h3" />
        </div>
       
    </main>
</template>

<script>

import profilePicture from '~/componentes/Atoms/profilePicture.vue';
import IconLink from '@/componentes/Atoms/IconLink.vue';

export default {
  components: {
    IconLink,
    profilePicture
  },
  methods: {
    redirectToInsigniasPage() {
      this.$router.push('/insignias');
    }
  }
}
</script>

<style scoped>
.all{
    display: flex;
    flex-direction: column;
    padding: 1.563rem;
}
.profilename{
    display: flex;
    align-items: center;
    color: var(--negro);
    margin-bottom: 1rem;
}
.juegos{
width: 9rem;
height: 2rem;
border: 2px solid;
display: flex;
justify-content: center;
}
.friendstitle{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-content: center;
    align-items: center;
}
.ajusteinput{
    margin-right: 0.3rem;

}
.friendsbox{
    display: flex;
    flex-direction: row;
}

</style>
