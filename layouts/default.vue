<template>
    <div class="main-container">
        <theheader></theheader>

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
@media (min-width: 850px) {

.drawer-toggle {
  display: none;
}
}
</style>
