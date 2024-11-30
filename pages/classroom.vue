<template>
 <div class="classroom">
    <div class="class_room_tab">
        <div class="tab_item tab_item_active">Tiro</div>
        <div class="tab_item">Hot</div>
        <div class="tab_item">Free</div>
        <div class="tab_item">Teaching</div>
    </div>
    <div class="video_list">
        <div class="video_item" v-for="item in v_list" :key="item.id" @click="$router.push(`/videos/${item.id}`)">
            <img :src="`https://img.youtube.com/vi/${item.id}/hqdefault.jpg`" alt="vc photo">
            <p class="video_title">How to Make Learning as Addictive as Social Media | Duolingo's Luis Von Ahn | TED</p>
        </div>
    </div>
 </div>
</template>
<script setup>
const v_list=ref([
    {
        id:"P6FORpg0KVo"
    },
    {
        id:"P6FORpg0KVo"
    },
    {
        id:"P6FORpg0KVo"
    },
    {
        id:"P6FORpg0KVo"
    },
    {
        id:"P6FORpg0KVo"
    },
    {
        id:"P6FORpg0KVo"
    },
    {
        id:"P6FORpg0KVo"
    },
    {
        id:"P6FORpg0KVo"
    },
    {
        id:"hT_nvWreIhg"
    },
    {
        id:"B5fzkq7JRfA"
    },
    {
        id:"xuyEr8ghIdg"
    },
    {
        id:"JcjYZ6xjYtI"
    },
    {
        id:"r1Fx0tqK5Z4"
    },

])
</script>
<style scoped lang="scss">
.classroom{
    padding: 91px 0px 100px 0px;
    background-color: #9691FF;
    min-height: 100vh;
    .class_room_tab{
        background-color: #fff;
        height: 84px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        gap: 50px;
        padding: 2px 100px;
        .tab_item{
            height: 32px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 51px;
            color: #26008D;
            padding: 3px 17px;

            color: #000;
            text-align: center;
            font-family: "spotify";
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
            cursor: pointer;
            &_active{
                background: #26008D;
                color: #fff;
            }
            &:hover{
                background: #26008D;
                color: #fff;
            }
        }
    }
    .video_list{
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 50px;
        padding: 70px 100px;
        .video_item{
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            max-width: 372px;
            height: auto;
            img{
                width: 372px;
                height: 209px;
                border-radius: 12px;
                object-fit: cover;
            }
            .video_title{
                margin: 10px 0px;
                color: #000;
                font-family: "spotify";
                font-size: 16px;
                font-style: normal;
                font-weight: 500;
                line-height: 22px;
            }
        }
    }
    @include respond(1550px) {
        .class_room_tab{
            padding: 2px 50px;
            gap: 30px;
            height: 74px;
            .tab_item{
                font-size: 17px;
                line-height: 24px;
                height: 28px;
            }
        }
        .video_list{
            justify-content: center;
            padding: 60px 50px;
            gap: 30px;
        }
    }
    @include respond(tab-land) {
        .class_room_tab{
            padding: 2px 25px;
            gap: 25px;
        }
    }
    @include respond(tab-port) {
        .video_list{
            padding: 60px 25px;
            justify-content: center;
            gap: 25px;
        }
    }
    @include respond(phone) {
        padding: 64px 0px 100px 0px;
        .class_room_tab{
            justify-content: center;
            padding: 2px 6vw;
            gap: 17px;
            height: 74px;
            .tab_item{
                height: 32px;
                font-size: 15px;
                line-height: 23px;
            }
        }
        .video_list{
            padding: 50px 6vw;
            gap: 25px;
            justify-content: center;
        }
    }
}
</style>
