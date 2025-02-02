<template>
    <div class="main-container">
        <theheader class="header-1"></theheader>

        <slot />
    </div>

    <!-- <fx-footer  v-if="route.meta.tarbar" /> -->
</template>

<script setup>
const route = useRoute();
const navi_toggle=ref(null)
const close_nav=()=>{
                 console.log('asdsad')
                 navi_toggle.value.checked=false
            }

</script>

<style scoped lang="scss">
.main-container {
    overflow: hidden;
}
@media (max-width: 600px) {
.header-1{
    display: none;
}
.drawer-toggle {
  display: none;
}
}
</style>
