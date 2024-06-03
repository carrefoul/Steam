<template>
    <div class="outHolder">
            <div class="outTextHolder">
                <h2>¿No tienes cuenta todavía?</h2>
                <p>Inicia sesión en la Comunidad Steam para explorar más puntos de encuentro que explorar</p>
            </div>
            <div class="outButtonHolder">
                <nuxt-link to="/loggin" class="outLink">
                    <IconLink @click="login" textSize="h3" :pagina="true" :showText="true" buttonText="Iniciar sesión" />
                </nuxt-link>
                <nuxt-link to="/registration" class="outLink">
                    <IconLink class="link2" @click="login" textSize="h3" :pagina="true" :showText="true" buttonText="Registrarse" />
                </nuxt-link>
            </div>
        </div>

    
</template>

<script>
  import IconLink from '@/componentes/Atoms/IconLink.vue';

</script>

<style lang="postcss" scoped>
 
    
.outHolder {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 25px ;
    padding: 1.8rem 3.75rem 1.8rem 3.75rem;
    border: 0.2rem solid var(--azul);
    width: auto;
    
}

.outTextHolder {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 18px;

    h2 {
        color: var(--azul);
    }
}

.outButtonHolder {
    display: flex;
    flex-direction:row;
    gap: 0.7rem;
}

.outLink {
    text-decoration: none;
}

.link2{
    width: 100% !important;
    justify-content: center !important;
}

.subSoporte {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1.7rem 1rem 1.7rem 1rem;
    align-items: center;
}

</style>