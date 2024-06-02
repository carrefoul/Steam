<template>
  <main class="all">
      <div class="friendstitle">
          <h8 class="profilename">INSIGNIAS</h8>
      </div>
      <div class="insigbox">
          <profilePicture class="amigospic" :showFriendProfile="true" />
          <profilePicture class="amigospic" :showFriendProfile="true" />
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

.insigbox {
  display: flex;
  flex-wrap: wrap;
  gap: 1px; 
  justify-content: flex-start;
}

.amigospic {
  flex: 1 0 calc(33.333% - 0.844rem); 
  box-sizing: border-box;
  max-width: calc(33.33% - 20px); 
}
</style>
