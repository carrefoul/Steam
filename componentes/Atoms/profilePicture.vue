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
    <div v-if="showGamePhoto" :class="['profile-container', 'game-pic']">
      <img :src="randomGameImageUrl" />
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
      showGamePhoto: {
        type: Boolean,
        default: false
      },
      showCommentPhoto: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        seed: Math.floor(Math.random() * 1000) // Seed fixed for both server and client
      };
    },
    computed: {
      randomImageUrl() {
        return this.getRandomImageUrl(this.seed);
      },
      randomFriendImageUrl() {
        return this.getRandomImageUrl(this.seed + 1);
      },
      randomCommentImageUrl() {
        return this.getRandomImageUrl(this.seed + 2);
      },
      randomGameImageUrl() {
        return this.getRandomImageUrl(this.seed + 2);
      }
    },
    methods: {
      getRandomImageUrl(seed) {
        return `https://picsum.photos/200?random=${seed}`;
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
    overflow: hidden; 
  }
  
  .profile-container img {
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }
  
  .profile-pic {
    border: 5px solid; 
    height: 7.8rem;
    width: 7.8rem;
  }

  .game-pic {
    border: 3px solid; 
    height: 14rem;
    width: 14rem;
  }
  
  .friends-profile-pic {
    border: 3px solid; 
    width: 5rem;
    margin-right: 0.3rem;
    margin-top: 0.3rem;
  }
  
  .comment-profile-pic {
    border: 3px solid;
    height: 3.5rem;
    width: 3.5rem;
  }
  </style>
  