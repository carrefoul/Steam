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
                <div class="barra">
                    <Bar></Bar>
                </div>
            </div>
            <div class="right">
                <BuyLink :showBox="true" textSize="h6"
                    :showText="true" buttonText="Desinstalar" @click="uninstallGame" />
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
        }
    }
};
</script>

<style scoped>
.container {
    display: flex;
    flex-direction: row;
    width: 100%;
    gap: 20px;
    height: 100px;
}
.image-container {
    width: 180px;
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
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
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
    font-size: 1.05rem;
    margin: 0;
}
</style>
