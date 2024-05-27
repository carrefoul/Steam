<template>
    <div class="registrationHolder">
      
      <div class="todoReg">
        <div class="registration">
          <div class="titulo">
            <h1>Crea tu cuenta</h1>
          </div>
        <div class="registrationInput">
          <h2>Nombre de la cuenta</h2>
          <imputsElements inputWidth="20rem" :showText="true" placeholderText="Nombre de cuenta" v-model="username" />
        </div>
        <div class="registrationInput">
          <h2>Correo electrónico</h2>
          <imputsElements inputWidth="20rem" :showText="true" placeholderText="Correo electrónico" v-model="username" />
        </div>
        <div class="registrationInput">
          <h2>Contraseña</h2>
          <imputsElements inputWidth="20rem" :showText="true" :isPassword="true" placeholderText="Contraseña" v-model="username" />
        </div>
        <div class="registrationInput">
          <h2>Confirmar contraseña</h2>
          <imputsElements inputWidth="20rem" :showText="true" :isPassword="true" placeholderText="Confirmar contraseña" v-model="username" />
        </div>
        <div class="registrationInput">
          <h2>País</h2>
          <imputsElements inputWidth="20rem" :showText="true" placeholderText="País" v-model="username" />
        </div>
      </div>
      <div class="extras">
        <div class="extrasImput">
          <div class="robotInput">
          <CheckButton />
          <p>No soy un robot</p>
        </div>
        <div class="niñoInput">
          <CheckButton />
          <p>Tengo 13 años o más y acepto los términos del Acuerdo de Suscriptor a Steam y la Política de Privacidad de Valve.</p>
        </div>
        </div>
        <div class="regButton">
          <nuxt-link to="/loggin" class="logginLink">
            <IconLink @click="login" textSize="h3" :pagina="true" :showText="true" buttonText="Registrarse" />
          </nuxt-link>
        </div>        
      </div>
      </div>
    </div>
  </template>
  
  <script>
  import CheckButton from '@/componentes/Atoms/CheckLink.vue';
  import IconLink from '@/componentes/Atoms/IconLink.vue';
  export default {
    name: 'RegistrationPage',
    components: {
    CheckButton,
    IconLink
    }
  };
  </script>

<style>
.titulo {
  display: flex;
  box-sizing: content-box;
  width: max-content;
  align-self: flex-start;
}
.registrationHolder {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 5rem;
  align-items: center;
}
.todoReg {
  display: flex;
  gap: 4rem;
  box-sizing: content-box;
  width: max-content;
}
.registration {
  display: flex;
  flex-direction: column;
  gap: 1.4rem;
}
.registrationInput {
  width: 20rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.robotInput {
  box-sizing: border-box;
  width: 20rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;
  border: 0.18rem solid var(--azul);
  padding: 0.75rem;
}
.niñoInput {
  box-sizing: border-box;
  width: 20rem;
  display: flex;
  flex-direction: row;
  gap: 0.75rem;
  padding: 0.75rem;
}

.extras {
  display: flex;
  flex-direction: column;
  padding-top: 4.6rem;
  justify-content: space-between;
  align-items: flex-end;
}
h1 {
  margin: 0;
}
h2 {
  margin: 0;
}
</style>