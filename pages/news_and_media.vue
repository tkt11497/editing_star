<template>
    <div class="news-and-media">
        <div class="flex-content">
            <p class="writer_text">News</p>
            <h1 class="content_title">{{ selectedNews.title }}</h1>
            <p class="content_date">{{ formatDate(selectedNews.created_at) }}</p>
            <p class="writer_text">By {{ selectedNews.author }}</p>
            <img :src="selectedNews.image_url" alt="news_and_media_1" class="content_image">
            <h3 class="sub_title">{{ selectedNews.sub_title || 'Press Releases' }}</h3>
            <div class="content_text" >
                <p v-html="selectedNews.content"></p>
            </div>
        </div>
        <div class="flex-list">
            <h2 class="list_title">More News</h2>
            <div class="list_item" v-for="(item, index) in newsData" :key="index" @click="selectedNewsIndex = index">
                <div class="list_image">
                    <img :src="item.image_url" alt="news_and_media_2">
                </div>
                <div class="list_text">
                    <p class="list_text_title">
                        {{item.title}}
                    </p>
                    <p class="list_text_preview">
                        {{ item.content.replace(/<[^>]*>/g, '').replace(/&nbsp;|&#160;/g, ' ').substring(0, 50) }}...
                    </p>
                    <p class="list_text_date">
                        {{item.author}} {{formatDate(item.created_at)}}
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
import axios from 'axios'
import dayjs from 'dayjs'


const formatDate = (date) => {
    return dayjs(date).format('MMM YYYY')
}
const selectedNews = computed(() => {
    return newsData.value.length > 0 ? newsData.value[selectedNewsIndex.value] : {}
})
const selectedNewsIndex = ref(0)
const newsData = ref([])
const getNews = async () => {
    await axios.get('https://admin.editingstar.com/api/news').then(res => {
        if(res.status == 200){
            newsData.value = res.data.data
            console.log(newsData.value)
        }
    }).catch(err => {
        console.log(err)
    })
}
getNews()
</script>
<style scoped lang="scss">
.news-and-media{
    font-family: 'Oswald', 'spotify';
    width: 100%;
    background: #002C47;
    min-height: 100vh;
    display: flex;
    .flex-content{
        padding: 130px 5.2vw 150px 5.2vw;
        background: #003252;
        display: flex;
        flex-direction: column;
        align-self: stretch;
        flex: 0 1 64%;
        .writer_text{
            color: #FFF;
            font-family: 'Oswald';
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: 20px;
            margin-top: 12px;
        }
        .content_title{
            color: #FFF;
            font-family: Oswald;
            font-size: 30px;
            font-style: normal;
            font-weight: 700;
            line-height: 39px;
            margin-top: 12px;
        }
        .content_date{
            color: #9691FF;
            font-family: 'Oswald';
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: 21px;
            margin-top: 50px;
        }
        .content_image{
            width: 100%;
            max-width: 990px;
            height: auto;
            margin-top: 32px;
            margin-bottom: 50px;
        }
        .sub_title{
            color: #FFF;
            font-family: 'Oswald';
            font-size: 30px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
            margin-bottom: 5px;
        }
        .content_text{
            color: #FFF;
            font-family: 'Roboto';
            font-size: 20px;
            font-style: normal;
            font-weight: 400;
            line-height: 28px;
            padding-top: 20px;
            .content_text_title{
                font-weight: 500;
                display: inline-block;
                padding-top: 20px;
            }
            .content_text_number{
                background: #9691FF;
                border-radius: 50%;
                padding: 0px 10px;
                color: #060A0E;
                text-align: center;
                font-family: 'Oswald';
                font-size: 18px;
                font-style: normal;
                font-weight: 400;
                line-height: 15.882px;
            }
        }
    }
    .flex-list{
        padding: 130px 5.2vw 0px 5.2vw;
        flex: 0 1 36%;
        align-self: stretch;
        display: flex;
        flex-direction: column;
        .list_title{
            color: #FFF;
            font-family: Roboto;
            font-size: 30px;
            font-style: normal;
            font-weight: 400;
            line-height: 130%; /* 39px */
        }
        .list_item{
            display: flex;
            padding: 25px 0px;
            gap: 25px;
            border-bottom: 2px solid #757575;
            cursor: pointer;
            // width: 480px;
            // height: 170px;
            align-items: center;
            .list_image{
                display: flex;
                align-self: stretch;
                img{
                    width: 100%;
                    max-width: 140px;
                    max-height: 120px;
                    min-height: 100px;
                    height: auto;
                }
            }
            .list_text{
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-self: stretch;
                gap: 15px;
                .list_text_title{
                    color: #FFF;
                    font-family: 'Roboto';
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 130%; /* 20.8px */
                }
                .list_text_preview{
                    // margin: 16px 0;
                    color: rgba(255, 255, 255, 0.70);
                    // text-overflow: ellipsis;
                    // white-space: nowrap;
                    font-family: 'Roboto';
                    font-size: 13px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }
                .list_text_date{
                    color: rgba(255, 255, 255, 0.70);
                    font-family: Roboto;
                    font-size: 13px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                }
            }
        }
    }
    @include respond(tab-land){
        .flex-content{
            padding: 130px 3.2vw 150px 3.2vw;
            .writer_text{
                font-size: 14px;
                margin-top: 12px;
                }
                .content_title{
                    font-size: 25px;
                    line-height: 39px;
                    margin-top: 10px;
                }
                .content_date{
                    font-size: 13px;
                    line-height: 21px;
                    margin-top: 30px;
                }
                .content_image{
                    margin-top: 30px;
                    margin-bottom: 40px;
                }
                .sub_title{
                    font-size: 25px;
                    margin-bottom: 5px;
                }
                .content_text{
                    font-size: 18px;
                    line-height: 28px;
                    padding-top: 18px;
                    .content_text_title{
                        padding-top: 18px;
                    }
                    .content_text_number{
                        padding: 0px 10px;
                        font-size: 16px;
                        line-height: 15.882px;
                    }
                }
        }
        .flex-list{
            padding: 130px 3.2vw 0px 3.2vw;
            .list_title{
                font-size: 25px;
            }
            .list_item{
                gap: 20px;
                .list_image{ 
                    img{
                        min-height: unset;
                    }
                }
                .list_text{
                    gap: 10px;
                    .list_text_title{
                        font-size: 14px;
                        line-height: 130%; /* 20.8px */
                    }
                    .list_text_preview{
                        font-size: 11px;
                    }
                    .list_text_date{
                        font-size: 11px;
                    }
                }
            }
        }
    }
    @include respond(tab-port){
        flex-direction: column;
        .flex-content{
            padding: 130px 4.2vw 50px 4.2vw;
            .writer_text{
                font-size: 16px;
                margin-top: 12px;
                }
                .content_title{
                    font-size: 28px;
                    line-height: 39px;
                    margin-top: 10px;
                }
                .content_date{
                    font-size: 15px;
                    line-height: 21px;
                    margin-top: 30px;
                }
                .content_image{
                    margin-top: 30px;
                    margin-bottom: 40px;
                }
                .sub_title{
                    font-size: 28px;
                    margin-bottom: 5px;
                }
                .content_text{
                    font-size: 20px;
                    line-height: 28px;
                    .content_text_title{
                        padding-top: 18px;
                    }
                    .content_text_number{
                        padding: 0px 10px;
                        font-size: 18px;
                        line-height: 15.882px;
                    }
                }
        }
        .flex-list{
            padding: 50px 4.2vw 50px 4.2vw;
            .list_title{
                font-size: 28px;
            }
            .list_item{
                gap: 20px;
                .list_text{
                    gap: 10px;
                    .list_text_title{
                        font-size: 16px;
                        line-height: 130%; /* 20.8px */
                    }
                    .list_text_preview{
                        font-size: 13px;
                    }
                    .list_text_date{
                        font-size: 13px;
                    }
                }
            }
        }
    }
    @include respond(phone){
        .flex-content{
            padding: 90px 6vw 50px 6vw;
            .writer_text{
                font-size: 13px;
                margin-top: 12px;
                }
                .content_title{
                    font-size: 23px;
                    line-height: 30px;
                    margin-top: 10px;
                }
                .content_date{
                    font-size: 12px;
                    line-height: 18px;
                    margin-top: 20px;
                }
                .content_image{
                    margin-top: 25px;
                    margin-bottom: 25px;
                }
                .sub_title{
                    font-size: 20px;
                    margin-bottom: 5px;
                }
                .content_text{
                    font-size: 16px;
                    line-height: 24px;
                    padding-top: 16px;
                    .content_text_title{
                        padding-top: 16px;
                    }
                    .content_text_number{
                        padding: 0px 10px;
                        font-size: 14px;
                        line-height: 13.882px;
                    }
                }
        }
        .flex-list{
            padding: 30px 5vw 30px 5vw;
            .list_title{
                font-size: 24px;
            }
            .list_item{
                gap: 18px;
                .list_text{
                    gap: 10px;
                    .list_text_title{
                        font-size: 13px;
                        line-height: 110%; /* 20.8px */
                    }
                    .list_text_preview{
                        font-size: 11px;
                    }
                    .list_text_date{
                        font-size: 11px;
                    }
                }
            }
        }
    }
}
</style>
