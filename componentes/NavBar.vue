<template>
    <nav class="nav">
        <div class="LogoContainer">
            <nuxt-icon name="Logo" filled></nuxt-icon>
        </div>
        <ul class="nav-list">
            <li>
                <NuxtLink to="/">Tienda</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/comunidad">Comunidad</NuxtLink>
            </li>
            <li>
                <NuxtLink to="/soporte">Soporte</NuxtLink>
            </li>
        </ul>
        <div class="headerRight">
            <IconButton/>
        </div>
    </nav>
</template>

<script>
import IconButton from "./Atoms/IconButton.vue";
</script>

<style lang="postcss">
  .nav{
    display: flex;
    justify-content: space-between;
    .LogoContainer{
      background-color: white;
    }
    .nav-list{
      list-style: none;
      display: flex;
    }
  }

</style>