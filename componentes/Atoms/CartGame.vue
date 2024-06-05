<template>
    <div v-if="isVisible" class="container">
        <div class="image-container">
            <img :src="gameData.background_image" alt="Game Image" @load="adjustHeight" />
        </div>
        <div class="things">
            <div class="left">
                <div class="textCard">
                    <h2>{{ gameData.name }}</h2>
                </div>
            </div>
           <h5 class="price">{{ gameData.randomPrice }} €</h5>

            <div class="right">
                <IconLink showIcon="true" @click="uninstallGame" />
            </div>
        </div>
    </div>
</template>

<script>
import Bar from './Bar.vue';
import BuyLink from './BuyLink.vue';

export default {
    components: {
        Bar,
        BuyLink
    },
    props: {
        gameData: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            isVisible: true
        };
    },
    methods: {
        uninstallGame() {
            this.isVisible = false;
            this.$emit('uninstall', this.gameData.id);
        },
    
    }
};
</script>

<style scoped>
.right{
    width: 100%;
}
.container {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 20px;
    height: 100px;
    margin-bottom: 1rem;
}
.image-container {
    width: 36rem;
    height: 100px;
    overflow: hidden;
}
.image-container img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}
.things {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    align-items: flex-start;
}
.left {
    display: flex;
    flex-direction: column;
    gap: 5px;
}
.textCard {
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 10px;
}
.textCard h2 {
    font-family: AeonikTRIAL-Regular, Helvetica, sans-serif;
    font-weight: normal;
    font-size: 1rem;
    margin: 0;
}
.price{
    color: var(--azul);
    font-weight: bolder;
}
</style>
