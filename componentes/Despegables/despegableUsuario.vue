<template>
    <ul class="despegable-estilo">
        <li>
            <HeaderLink isSubtitle>Amigos</HeaderLink>
        </li>
        <li>
            <HeaderLink to="/userProfile" isSubTitle>Perfil</HeaderLink>
        </li>
        <li>
            <HeaderLink to="/insignias" isSubtitle>Insignias/Inventario</HeaderLink>
        </li>
        <li>
            <HeaderLink isSubtitle>Lista de deseos</HeaderLink>
        </li>
        <button class="boton-logout" @click="logout">Cerrar Sesión</button>
    </ul>


</template>


<script>
import HeaderLink from '../Atoms/HeaderLink.vue';


export default {
    components: {
        HeaderLink
    },
    methods: {
        logout() {
            window.dispatchEvent(new Event('storage'));
            localStorage.removeItem('isLoggedIn', 'true');
            // Actualizar el estado de inicio de sesión en la aplicación
            // Redirigir al usuario a la página de inicio de sesión u otra página apropiada
            this.$router.push('/tienda');
            window.dispatchEvent(new Event('storage'));
        }
    }
}
</script>

<style lang="postcss" scoped>
.despegable-estilo {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    gap: 15px;
    margin: 0;
    padding: 10px 8px;
    background-color: var(--white);
    border: 3px solid #0007FF;
    position: absolute;
    z-index: 2;
    top: calc(100% + 5px);
    right: 0;
    overflow: hidden;
    background-color: white;
    text-decoration: none;
    
}

li {
    list-style: none;
}

.despegable-estilo a {
    text-decoration: none;
}

.boton-logout {
    background-color: transparent;
    border: none;
    padding: 0;
    font-family: AeonikTRIAL-Regular;
    font-weight: normal;
    font-size: 1.05rem;
    cursor: pointer;
    outline: inherit;
}

.boton-logout:hover {
    color: var(--azul);
}
</style>