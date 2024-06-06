<template>
    <div class="despegable-estilo">
        <p>Window</p>
        <p>MacOS</p>
        <p>Linux</p>
    </div>

</template>

<script>

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
    z-index: 9;
    top: calc(100% + 5px);
    left: 0;
    overflow: hidden;
    background-color: white;
    text-decoration: none;
    width: 200px;
}
</style>
