<template>
  <main class="index-page">
    <div class="title-container" ref="titleContainer">
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
  mounted() {
    // Inicializa la opacidad del título en 0 al cargar la página
    this.$refs.titleContainer.style.opacity = '0';
  },
  methods: {
    
    videoEnded() {
      // Muestra el título con animaciones de opacidad y movimiento hacia abajo
      const title = this.$refs.titleContainer;
      title.style.transform = 'translateY(-50%)';
      title.style.transition = 'opacity 1.0s ease-in, transform 1.0s ease-out';
      title.style.opacity = '1';
      title.style.transform = 'translateY(0)';
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
  transform: translateY(-150%);
  width: 300px; 
  word-wrap: break-word;
  margin-top: 5%;
}

.title {
  color: var(--blanco);
  font-family: 'AeonikTRIAL-Regular', sans-serif;
  text-align: left; 
  font-size: 25px;
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
</style>
