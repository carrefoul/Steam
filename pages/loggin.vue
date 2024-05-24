<template>
    <div class="logginHolder">
      <h1>Iniciar sesión</h1>
      <div class="logginS">
        <div class="logginLeft">
            <div class="main">
                <nuxt-link to="/" class="logginLink">
                    <IconLink textSize="h3" :pagina="true" :showText="true" buttonText="Iniciar sesión" />
                </nuxt-link>
            </div>
            <div class="extra">
                <p>Ayuda, no puedo iniciar sesión</p>
                <nuxt-link to="/registration" class="logginLink">
                    <p>No tengo cuenta</p>
                </nuxt-link>
            </div>
        </div>
        <div class="logginRight">
            <h1>o con un código QR</h1>
            <div class="qrHolder">
                <nuxt-icon name="qr" class="qrClass"></nuxt-icon>
            </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LogginPage'
  };
  </script>

<style>
.logginHolder {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.logginS {
    display: flex;
    flex-direction: row;
    gap: 3.5rem;
}
.logginLeft {
    display: flex;
    flex-direction: column;
}
.logginLink {
  text-decoration: none;
  appearance: none;
}
.logginRight {
    display: flex;
    flex-direction: column;
    gap: 0;
}
.qrHolder {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 13.2em;
    height: 13.2em;
}
.qrClass {
    transform: scale(13.2);
    color: var(--azul);
}
</style>