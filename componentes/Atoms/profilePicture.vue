<template>
    <div v-if="showProfilePic" :class="['profile-container', 'profile-pic']">
        <img :src="randomImageUrl" />
    </div>
    <div v-if="showFriendProfile" :class="['profile-container', 'friends-profile-pic']">
        <img :src="randomFriendImageUrl" />
    </div>
    <div v-if="showCommentPhoto" :class="['profile-container', 'comment-profile-pic']">
        <img :src="randomCommentImageUrl" />
    </div>
</template>



<script>
export default {
    props: {
        showProfilePic: {
            type: Boolean,
            default: false
        },
        showFriendProfile: {
            type: Boolean,
            default: false
        },
        showCommentPhoto: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        randomImageUrl() {
            return this.getRandomImageUrl();
        },
        randomFriendImageUrl() {
            return this.getRandomImageUrl();
        },
        randomCommentImageUrl() {
            return this.getRandomImageUrl();
        }
    },
    methods: {
        getRandomImageUrl() {
            const randomSeed = Math.floor(Math.random() * 1000);
            return `https://picsum.photos/200?random=${randomSeed}`;
        }
    }
};
</script>


<style lang="postcss" scoped>
.profile-container {
    color: var(--azul);
    padding: 0;
    margin: 0;
    object-fit: cover;
    overflow: hidden; /* Asegura que la imagen no se salga del contenedor */
}

.profile-container img {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Ajusta la imagen al tamaño del contenedor */
}

.profile-pic {
    border: 8px solid; /* Añade borde de 8px */
    height: 9.8rem;
    width: 9.8rem;
}

.friends-profile-pic {
    border: 5px solid; /* Añade borde de 5px */
    height: 7rem;
    width: 7rem;
}

.comment-profile-pic {
    border: 5px solid; /* Añade borde de 5px */
    height: 5.5rem;
    width: 5.5rem;
}
</style>
