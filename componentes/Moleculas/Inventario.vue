<template>
    <main class="all">
        <div class="friendstitle">
            <h8 class="profilename">INVENTARIO</h8>

        </div>
        <div class="insigbox">
            <profilePicture class="amigospic" :showGamePhoto="true" />
            <profilePicture class="amigospic" :showGamePhoto="true" />
            <profilePicture class="amigospic" :showGamePhoto="true" />
            <profilePicture class="amigospic" :showGamePhoto="true" />
            <profilePicture class="amigospic" :showGamePhoto="true" />
            <profilePicture class="amigospic" :showGamePhoto="true" />
            <profilePicture class="amigospic" :showGamePhoto="true" />
            <profilePicture class="amigospic" :showGamePhoto="true" />
            <profilePicture class="amigospic" :showGamePhoto="true" />
            <profilePicture class="amigospic" :showGamePhoto="true" />
            <profilePicture class="amigospic" :showGamePhoto="true" />
            <profilePicture class="amigospic" :showGamePhoto="true" />
            <profilePicture class="amigospic" :showGamePhoto="true" />
            <profilePicture class="amigospic" :showGamePhoto="true" />
            <profilePicture class="amigospic" :showGamePhoto="true" />
            <profilePicture class="amigospic" :showGamePhoto="true" />
            <profilePicture class="amigospic" :showGamePhoto="true" />
            <profilePicture class="amigospic" :showGamePhoto="true" />
            <profilePicture class="amigospic" :showGamePhoto="true" />
            <profilePicture class="amigospic" :showGamePhoto="true" />
            <profilePicture class="amigospic" :showGamePhoto="true" />
            <profilePicture class="amigospic" :showGamePhoto="true" />
        </div>
    </main>
</template>

<script>
import profilePicture from '~/componentes/Atoms/profilePicture.vue';
import IconLink from '@/componentes/Atoms/IconLink.vue';
import BuyLink from '@/componentes/Atoms/BuyLink.vue';

export default {
  components: {
    IconLink,
    BuyLink,
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
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(14rem, 1fr));
  grid-auto-rows: minmax(100px, auto);
  gap: 1rem;
}




</style>
