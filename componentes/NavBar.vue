<template>
    <nav>
        <div class="LogoContainer">
            <nuxt-icon name="Logo" filled></nuxt-icon>
        </div>
        <ul class="headerMenu">
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
    flex-direction: row;
  }
  .LogoContainer{
    width: auto;
    .nuxt-icon svg{
       margin-bottom: 0;
       width: 20vw;
       .li{
        list-style: none;
       }
    }
  }
  .headerMenu{
    display: flex;
    flex-direction: row;
  }
</style>