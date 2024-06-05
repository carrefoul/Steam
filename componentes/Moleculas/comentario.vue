<template>
    <div class="comentario">
      <profilePicture :showCommentPhoto="true" />
      <div class="commentContent">
        <div class="commentText">
          <component :is="textSizeOne" class="textOne">
            {{ buttonText="Nombre de usuario" }}
          </component>
          <component :is="textSizeTwo" class="text">
            {{ buttonText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean id pellentesque metus, sit amet consectetur ex. Cras suscipit scelerisque felis, ac tempor erat fermentum in. Aliquam id varius sapien, id placerat dolor. " }}
          </component>
        </div>
        <div class="iconHolder">
          <IconLink :showIcon="true" :aloneIcon="true" iconName="Comentario" />
          <IconLink :showIcon="true" :aloneIcon="true" :isActive="likeActive" :iconName="likeIconName" @click="toggleLike" :class="{ active: likeActive, inactive: !likeActive }" />
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import profilePicture from '~/componentes/Atoms/profilePicture.vue';
  
  export default {
    components: {
      profilePicture
    },
    props: {
      buttonText: {
        type: String,
        default: 'Estim'
      },
      textSizeOne: {
        type: String,
        default: 'h1',
      },
      textSizeTwo: {
        type: String,
        default: 'h2',
      },
    },
    data() {
      return {
        likeActive: false
      };
    },
    computed: {
      likeIconName() {
        return this.likeActive ? "Liked" : "Like";
      }
    },
    methods: {
      toggleLike() {
        this.likeActive = !this.likeActive;
      }
    }
  }
  </script>
  
  <style scoped>
  .comentario {
    width: auto;
    border: .2rem solid var(--azul);
    background-color: white;
    padding: 30px;
    display: flex;
    flex-direction: row;
    gap: 30px;
  }
  
  .commentContent {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    width: 100%;
  }
  
  .commentText {
    display: flex;
    flex-direction: column;
    gap: 5px;
    justify-content: space-between;
  }
  
  .iconHolder {
    display: flex;
    flex-direction: row;
    gap: 5px;
    align-items: flex-end;
    align-self: flex-end;
  }
  
  .active path {
    fill: var(--azul);
  }
  
  .inactive {
    fill: none;
  }
  </style>
  