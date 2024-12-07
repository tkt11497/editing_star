<template>
    <div class="video_page">
        <!-- <iframe class="video_container"
        :src="`https://www.youtube.com/embed/${id}`" 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; 
        encrypted-media; gyroscope; picture-in-picture; web-share" 
        referrerpolicy="strict-origin-when-cross-origin" 
        allowfullscreen></iframe> -->
        <video class="video_container" :src="selectedVideo?.video_url" controls></video>
        <h1 class="video_title">{{ selectedVideo?.title }}</h1>
    </div>
</template>
<script setup>
const router = useRouter()
const route = useRoute();
const id = route.params.id;
let selectedVideo = ref({})
if(localStorage.getItem('v_list')){
    const v_list = JSON.parse(localStorage.getItem('v_list'))
    selectedVideo.value = v_list.find(item => item.id == id)
}else{
    router.push('/classroom')
    }
</script>
<style scoped lang="scss">
.video_page{
    padding: 140px 0px 140px 0px;
    background-color: #9691FF;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .video_container{
        width: 1283px;
        height: 720px;
        border-radius: 25px;
    }
    .video_title{
        text-align: center;
        width: 1283px;
        margin-top: 20px;
        color: #000;
        font-family: "spotify";
        font-size: 32px;
        font-style: normal;
        font-weight: 500;
        line-height: 140%; /* 44.8px */    
    }
    @include respond(1550px) {
        padding: 120px 0px 120px 0px;
        .video_container{
            width: 1000px;
            height: 563px;
        }
        .video_title{
            font-size: 26px;
            width: 1000px;
        }
    }
    @include respond(1200px) {
        padding: 40px 0px 40px 0px;
        .video_container{
            width: 800px;
            height: 450px;
        }
        .video_title{
            font-size: 26px;
            width: 800px;
        }
    }
    @include respond(tab-port) {
        justify-content: flex-start;
        padding: 140px 0px 140px 0px;
        .video_container{
            width: 500px;
            height: 281px;
        }
        .video_title{
            font-size: 20px;
            width: 500px;
        }
    }
    @include respond(phone) {
        padding: 110px 6vw 110px 6vw;
        .video_container{
            width: 400px;
            height: 225px;
        }
        .video_title{
            font-size: 15px;
            width: 400px;
        }
    }
    @include respond(422px) {
        padding: 110px 4vw 110px 4vw;
        .video_container{
            width: 330px;
            height: 200px;
        }
        .video_title{
            font-size: 14px;
            width: 330px;
        }
    }
}
</style>
