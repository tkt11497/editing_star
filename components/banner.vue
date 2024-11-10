<template>
    <van-swipe class="banner-swipe" :autoplay="4000" :show-indicators="false">
        <van-swipe-item>
            <div class="banner__text-box">
                    <h1 class="heading-primary">
                        <span class="heading-primary--main">Your Trusted Partner in Achieving</span>
                        <span class="heading-primary--main">Financial Success</span>
                    </h1>
            </div>
            <img src="@/assets/image/banner11.png" alt="banner"/>
        </van-swipe-item>
        <van-swipe-item>
            <img src="@/assets/image/banner2.jpg" alt="banner"/>
        </van-swipe-item>
        <van-swipe-item>
            <img src="@/assets/image/banner3.jpg" alt="banner"/>
        </van-swipe-item>
        <van-swipe-item>
            <img src="@/assets/image/banner4.jpg" alt="banner"/>
        </van-swipe-item>
    </van-swipe>
</template>

<script setup>
// import VueQrcode from 'vue-qrcode'
// import { Popover } from 'vant'
import { Loading } from 'vant';
import { useRoute } from "vue-router";
const loaded=ref(false)
const { query } = useRoute()
//getvideoLink()



</script>



<style lang="scss" scoped>
 .banner-swipe {
    // margin-top: 200px;
    .van-swipe-item {
    position: relative;
    background-color: #39a9ed;
    .banner__text-box{
        position: absolute;
        top: 42%;
        left: 3%;
        // transform: translate(-50%, -50%);
    }
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
  }
 }

</style>