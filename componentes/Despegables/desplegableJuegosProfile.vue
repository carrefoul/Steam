<template>
    <ul class="despegable-estilo">
        <li>
            <HeaderLink isSubtitle>Jugados recientemente</HeaderLink>
        </li>
        <li>
            <HeaderLink isSubTitle>Completados</HeaderLink>
        </li>
        <li>
            <HeaderLink isSubtitle>Desinstalados</HeaderLink>
        </li>
        <li>
            <HeaderLink isSubtitle>Todos los juegos</HeaderLink>
        </li>
    </ul>


</template>


<script>
import HeaderLink from '../Atoms/HeaderLink.vue';


export default {
    components: {
        HeaderLink
    },
   
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
    max-width: 8.5rem;
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