<template>
    <div class="logginHolder">
      <div class="logginS">
        <div class="logginLeft">
            <div class="main">
                <h1>inicia sesión con tu cuenta</h1>
                <div class="logginImput">
                    <imputsElements inputWidth="20rem" :showText="true" placeholderText="Nombre de cuenta" />
                </div>
                <div class="logginImput">
                    <imputsElements inputWidth="20rem" :showText="true" placeholderText="Contraseña" />
                </div>
            </div>
            <nuxt-link to="/tienda" class="logginLink">
                    <IconLink textSize="h3" :pagina="true" :showText="true" buttonText="Iniciar sesión" />
                </nuxt-link>
        </div>
        <div class="logginRight">
            <h1>o con un código QR</h1>
            <div class="qrHolder">
                <nuxt-icon name="qr" class="qrClass"></nuxt-icon>
            </div>
        </div>
      </div>
      <div class="extra">
                <p>Ayuda, no puedo iniciar sesión</p>
                <nuxt-link to="/registration" class="logginLink">
                    <p>No tengo cuenta</p>
                </nuxt-link>
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
    padding-top: 5rem;
}
.logginS {
    display: flex;
    flex-direction: row;
    gap: 5rem;
}
.logginLeft {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.main {
    display: flex;
    flex-direction: column;
    gap: 1.4rem;
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

h1 {
    font-size: 1.3rem;
    margin: 0;
}
p{
    margin: 0;
}
</style>