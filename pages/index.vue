<template>
  <main class="index-page">
    <div class="title-container" :style="{ top: isMobile ? '50%' : '5%' }" ref="titleContainer">
      <h1 class="title">
        <span class="bold">Steam</span> Is The Ultimate Destination For Playing, Discussing, And Creating Games.
      </h1>
    </div>
    <div class="video-container">
      <video autoplay muted @ended="videoEnded" ref="videoPlayer">
        <source src="@/assets/animations/Logo.mp4" type="video/mp4">
      </video>
    </div>
  </main>
</template>

<script>
export default {
  name: 'IndexPage',
  data() {
    return {
      isMobile: false 
    };
  },
  mounted() {
    
    this.$refs.titleContainer.style.opacity = '0';
   
    this.isMobile = window.innerWidth < 700;
  },
  methods: {
    videoEnded() {
      const title = this.$refs.titleContainer;
      title.style.transition = 'opacity 1.0s ease-in, transform 1.0s ease-out';
      title.style.opacity = '1';
      if (this.isMobile) {
        title.style.transform = 'translateY(-200%)';
      } else {
        title.style.transform = 'translateY(0)';
      }
    }
  }
};
</script>

<style scoped>
.index-page {
  background-color: var(--azul);
  overflow: hidden; 
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
}

.title-container {
  position: absolute;
  left: 50%;
  transform: translateY(-10rem); 
  width: 18.75rem; 
  word-wrap: break-word;
}

.title {
  color: var(--blanco);
  font-family: 'AeonikTRIAL-Regular', sans-serif;
  text-align: left; 
  font-size: 1.5rem; 
}

.bold {
  font-family: 'AeonikTRIAL-Bold', sans-serif;
}

.video-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

video {
  width: 100%;
  height: auto;
  mix-blend-mode: screen;
  display: block;
  outline: none;
}

@media (max-width: 43.75rem) { 
  .title-container {
    left: 0.5rem; 
    transform: translateY(-15.625rem);
  }
}
</style>
