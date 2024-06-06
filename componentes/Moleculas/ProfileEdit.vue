<template>
    <main class="all">
        <div class="leftProfile">
            <div class="ProfilePic">
                <profilePicture :showProfilePic="true" />
            </div>
            <div class="ProfileInfo">
                <div class="NombreNivel">
                <h1 class="profilename">Admin</h1>
                <h5>Nivel 8</h5>
                </div>
                <IconLink class="editar" textSize="p" :pagina="true" :showText="true" buttonText="Editar Perfil" />
                <BuyLink class="ajuste" :fontChange="true" textSize="p" :showText="true" buttonText="Juegos" />
                <BuyLink class="ajuste" :fontChange="true" textSize="p" :showText="true" buttonText="Capturas" />
                <BuyLink class="ajuste" :fontChange="true" textSize="p" :showText="true" buttonText="Comentarios" />
            </div>
        </div>
        <div class="rightProfile" @click="redirectToInsigniasPage">
            <profilePicture class="amigospic" :showFriendProfile="true"  />
            <profilePicture class="amigospic" :showFriendProfile="true" />
            <profilePicture class="amigospic" :showFriendProfile="true" />
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
.profilename{
    color:var(--negro);
    margin-right: 0.5rem;
}

.editar{
width: 7rem;
height: 2rem;
border: 2px solid;
display: flex;
justify-content: center;
}
.all{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.563rem;
    align-items: center;
}
.leftProfile{
    display: flex;
    flex-direction: row;
}
.ajuste{
   padding: 0;
   margin: 0;
   height: auto;
}
.NombreNivel{
    display: flex;
    flex-direction: row;
    align-items: flex-end;

}
.rightProfile{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.rightProfile:hover{
cursor: pointer;
}
.ProfileInfo{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 1rem;
}




@media (orientation : portrait) {
    .profilename{
    color:var(--negro);
    margin-right: 0.3rem;
    font-size: 1.2rem;
}

.editar{
width: 7rem;
height: 2rem;
border: 2px solid;
display: flex;
justify-content: center;
}
.all{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 0.5rem;    align-items: center;
}
.leftProfile{
    display: flex;
    flex-direction: row;
}
.ajuste{
   padding: 0;
   margin: 0;
   height: auto;
}
.NombreNivel{
    display: flex;
    flex-direction: row;
    align-items: flex-end;

}
.rightProfile{
    display: none;
   
}

.rightProfile:hover{
cursor: pointer;
}
.ProfileInfo{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 0.5rem;
}
}
</style>
