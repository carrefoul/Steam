<template>
    <main>
        <ProfileEdit />
        <ProfileFriends />
        <ProfileGames />

    </main>
</template>

<script>

import ProfileEdit from '@/componentes/Moleculas/ProfileEdit.vue';
import ProfileFriends from '@/componentes/Moleculas/ProfileFriends.vue';
import ProfileGames from '@/componentes/Moleculas/ProfileGames.vue';


</script>

<style scoped>
    main {
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    @media (orientation : portrait) {
        main{
            gap: 10px;
        }
        
    }
</style>