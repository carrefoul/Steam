<template>
    <main class="all">
        <div class="friendstitle">
        <h8 class="profilename">AMIGOS</h8>
        <imputsElements class="ajusteinput" :showText="true" placeholderText="Buscar amigo" :showIcon="true" iconName="Lupa"
        textSize="h3" />
        </div>
        <div class="friendsbox">
            <profilePicture class="amigospic" :showFriendProfile="true" />
            <profilePicture class="amigospic" :showFriendProfile="true" />
            <profilePicture class="amigospic" :showFriendProfile="true" />
            <profilePicture class="amigospic" :showFriendProfile="true" />
            <profilePicture class="amigospic" :showFriendProfile="true" />
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
.all {
    display: flex;
    flex-direction: column;
    padding: 1.563rem;
}
.profilename {
    display: flex;
    align-items: center;
    color: var(--negro);
}
.friendstitle {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-bottom: 1rem;
    align-content: center;
    align-items: center;
}
.ajusteinput {
    margin-right: 0.3rem;
}
.friendsbox {
  width: 100%;
  display: flex;
  gap: 0.1rem;
}

.amigospic {
    width: 100%;
    height: auto;
}
</style>
