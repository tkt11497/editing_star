<template>
    <div class="login-container">
        <slot />
    </div>

</template>

<script setup>
const route = useRoute();

const heighter =ref('')
function setFullHeight() {
    const vh = window.innerHeight
    heighter.value = `${vh}px`
}

// Call the function when the page loads or window resizes
window.addEventListener('resize', setFullHeight);
setFullHeight();
</script>

<style scoped lang="scss">
.login-container {
    overflow: hidden;
    height: v-bind(heighter);
    /* height: calc(100vh - 56px); */
}
@media (min-width: 850px) {


}
</style>
