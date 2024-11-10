<template>
    <div class="main-container">
        <theheader></theheader>

        <slot />
        <div class="float_button"> 
            Block Online Trading
        </div>
        <Footer/>
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
    /* height: calc(100vh - 56px); */
    .float_button{
        position: fixed;
        top: 60%;
        right: -72px;
        cursor: pointer;
        background: #FFBC42;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0px 15px;
        color: #03436a;
        font-size: 15px;
        font-weight: 500;
        transform: rotate(90deg);
        width: 188px;
        height: 45px;
        z-index: 991;
        &:after{
            content: "";
            position: absolute;
            left: 0;
            top: 0;
            bottom: 0;
            right: 0;
            background: #d69b2e;
            width: 100%;
            height: 100%;
            transition: .5s;
            z-index: -1;
            transform: scale(0);
            transition: all .45s ease-in-out;
        }
        &:hover{
            &:after{
                transform: scale(1);
            }
        }
        @include respond(767px) {
            width: 177px;
            font-size: 14px;
        }
    }
}
@media (min-width: 850px) {

.drawer-toggle {
  display: none;
}
}
</style>
