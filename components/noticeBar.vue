<template>
<div class="notice-container">
    <van-notice-bar
        :speed="speed"
        color="#000"
        :key="componentKey"
        >
        <template #default>
            <div v-if="$slots.default_custom">
                <slot name="default_custom"></slot>
            </div>
            <div v-else>
                <p class="notice-text">
                    <span v-for="item in market_data" :key="item.id">
                        <van-icon :name="+item.open<+item.Ltp?'arrow-up':'arrow-down'" />{{item.s_name}} {{item.Ltp}}
                    </span>
                </p>   
             </div>
        </template>
        <template #left-icon>
            <slot name="left_custom">

            </slot>
        </template>
    </van-notice-bar>
    </div>
</template>
<script setup>
const {padding,barMaxWidth,bgColor, speed,phoneHeight,market_data} = defineProps({
    market_data: {
        type: Array,
        default: []
    },
    padding: {
        type: String,
        default: '0 16px'
    },
    barMaxWidth: {
        type: String,
        default: '1170px'
    },
    bgColor: {
        type: String,
        default: '#e8f7ff'
    },
    speed: {
        type: Number,
        default: 60
    },
    phoneHeight: {
        type: String,
        default: '50px'
    }
})
const componentKey = ref(0)
watch(() => market_data, (newVal) => {
    componentKey.value += 1
    console.log(newVal,'asdsa')
}, { deep: true })
// console.log(bgColor, speed);


</script>
<style lang="scss" scoped>
.notice-container {
    height: 50px;
    position: relative;
    width: 100%;
    background-color: v-bind(bgColor);
    .van-notice-bar {
        height: 100%;
        width: 100%;
        padding: v-bind(padding);
        max-width: v-bind(barMaxWidth);
        margin: 0 auto;
        background-color: transparent;
        .notice-text{
            .van-icon{
                    font-size: 10px;
                    margin: 0 5px;
                    padding: 3px;
                    color: $color-white;
                    border-radius: 50%;
                    &.van-icon-arrow-up{
                        background-color: green;
                    }
                    &.van-icon-arrow-down{
                        background-color: red;
                    }
                }
            }
    }
    @include respond(phone){
        height: v-bind(phoneHeight);
        .van-notice-bar {
            flex-direction: column;
        }
    }
}
</style>