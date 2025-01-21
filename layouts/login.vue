<template>
    <div class="login-container">
        <slot />
    </div>

</template>

<script setup>
const route = useRoute();


</script>

<style scoped lang="scss">
.login-container {
    overflow: hidden;
    /* height: calc(100vh - 56px); */
}
@media (min-width: 850px) {


}
</style>
