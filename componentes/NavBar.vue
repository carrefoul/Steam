<template>
    <nav>
        <ul>
            <li>
                <NuxtLink to="/">Tienda</NuxtLink>
                <IconButton/>
            </li>
            <li>
                <NuxtLink to="/comunidad">Comunidad</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/soporte">Soporte</NuxtLink>
            </li>
        </ul>
    </nav>
</template>

<script>
import IconButton from "../componentes/IconButton.vue";
</script>