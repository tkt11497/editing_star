<template>
    <div class="user_guide">
        <div class="user_guide_nav">
            <p class="nav_text nav_text_active">Overview</p>
            <p class="nav_text">Setup</p>
            <p class="nav_text">Getting Started</p>
            <p class="nav_text">User guide</p>
        </div>
        <div class="user_guide_content"> 
            <h1 class="content_title">Editingstar documentation</h1>
            <p class="content_subtitle">Use Editingstar and learn how to edit efficiently</p>
            <h2 class="user_guide_title">Getting Started</h2>
            <div class="guide_list">
                <div class="guide_item">
                    <span></span>
                    <img src="@/assets/image/download_icon.svg" alt="download_icon">
                    <p class="guide_text_1">Download Editingstar</p>
                    <p class="guide_text_2">Download Editingstar  for ios or android</p>
                </div>
                <div class="guide_item">
                    <img src="@/assets/image/get_started_icon.svg" alt="get_started_icon">
                    <p class="guide_text_1">Getting started</p>
                    <p class="guide_text_2">Learn the main functions of Editingstar through the distribution tutorial</p>
                </div>
                <div class="guide_item">
                    <img src="@/assets/image/q_and_a.svg" alt="q_and_a_icon">
                    <p class="guide_text_1">Q&A</p>
                    <p class="guide_text_2">Learn about the problems and answers</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style scoped lang="scss">
.user_guide{
    min-height: 100vh;
    background-color: #9691FF;
    display: flex;
    .user_guide_nav{
        padding: 140px 0px 140px 0px;
        max-width: 366px;
        flex: 0 0 15%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background: #7F7AEA;
        gap: 20px;
        .nav_text{
            min-width: 160px;
            text-align: left;
            color: #000;
            font-family: "spotify";
            font-size: 18px;
            font-style: normal;
            font-weight: 700;
            line-height: 25px;
            text-transform: uppercase;
            cursor: pointer;
            &:hover{
                color: #FFF;
            }
            &_active{
                color: #FFF;
            }
        }
    }
    .user_guide_content{
        display: flex;
        flex-direction: column;
        flex:0 0 85%;
        // border-left: 1px solid #000;
        padding: 125px 50px 140px 50px;
        .content_title{
            color: #000;
            font-family: "spotify";
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
            line-height:  56px;
        }
        .content_subtitle{
            margin-top: 20px;
            color: #000;
            font-family: "spotify";
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 28px;
        }
        .user_guide_title{
            margin-top: 70px;
            color: #FFF;
            font-family: "spotify";
            font-size: 40px;
            font-style: normal;
            font-weight: 700;
            line-height: 56px;
        }
        .guide_list{
            display: flex;
            gap: 20px;
            flex-wrap: wrap;
            width: 100%;
            margin-top: 30px;
            // border: 1px solid #000;
            .guide_item{
                width: 383px;
                height: 262px;
                padding: 20px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: center;
                border-radius: 12px;
                border: 2px solid #FFF;
                background: #A5A0FF;
                img{
                    margin-bottom: 50px;
                }
                .guide_text_1{
                    color: #000;
                    font-family: "spotify";
                    font-size: 20px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 28px
                }
                .guide_text_2{
                    margin-top: 10px;
                    color: #000;
                    font-family: "spotify";
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 26px;
                }
                &:hover{
                    border-color: #7F7AEA;
                }
            }
        }
    }
    @include respond(1550px){
        .user_guide_nav{
            flex: 0 0 23%;
        }
        .user_guide_content{
           flex: 0 0 77%;
        }
    }
    @include respond(tab-port){
        .user_guide_nav{
            flex: 0 0 26%;
            .nav_text{
                font-size: 16px;
                line-height: 22px;
            }
        }
        .user_guide_content{
           flex: 0 0 74%;
           .content_title{
                font-size: 35px;
                line-height:  50px;
            }
            .content_subtitle{
                margin-top: 18px;
                font-size: 18px;
                line-height: 24px;
            }
            .user_guide_title{
                margin-top: 50px;
                font-size: 35px;
                line-height: 50px;
            }
            .guide_list{
                margin-top: 25px;
                .guide_item{
                    width: 383px;
                    height: 262px;
                    padding: 20px;
                    img{
                        margin-bottom: 50px;
                    }
                    .guide_text_1{
                        font-size: 20px;
                        line-height: 28px
                    }
                    .guide_text_2{
                        margin-top: 10px;
                        font-size: 16px;
                        line-height: 26px;
                    }
                }
            }
        }
    }
    @include respond(820px){
        flex-direction: column;
        .user_guide_nav{
            padding: 115px 0px 30px 0px;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            max-width: 100%;
            flex: 0 0 100%;
            gap: 20px;
            .nav_text{
                min-width: unset;
                text-align: center;
            }
        }
        .user_guide_content{
           flex: 0 0 100%;
           padding: 20px 20px 40px 20px;
           .content_title{
                font-size: 30px;
                line-height:  40px;
                text-align: center;
            }
            .content_subtitle{
                margin-top: 14px;
                font-size: 18px;
                line-height: 24px;
                text-align: center;
            }
            .user_guide_title{
                margin-top: 30px;
                font-size: 30px;
                line-height: 40px;
                text-align: center;
            }
            .guide_list{
                margin-top: 20px;
                flex-direction: column;
                align-items: center;
                .guide_item{
                    width: 383px;
                    height: 262px;
                    padding: 20px;
                    img{
                        margin-bottom: 50px;
                    }
                    .guide_text_1{
                        font-size: 20px;
                        line-height: 28px
                    }
                    .guide_text_2{
                        margin-top: 10px;
                        font-size: 16px;
                        line-height: 26px;
                    }
                }
            }
        }
    }
    @include respond(phone){
        .user_guide_nav{
            padding: 85px 0px 20px 0px;
            gap: 10px;
            .nav_text{
                font-size: 13px;
                line-height: 17px;
            }
        }
        .user_guide_content{
           padding: 20px 20px 40px 20px;
           .content_title{
                font-size: 25px;
                line-height:  30px;
            }
            .content_subtitle{
                margin-top: 12px;
                font-size: 16px;
                line-height: 22px;
            }
            .user_guide_title{
                margin-top: 25px;
                font-size: 25px;
                line-height: 30px;
            }
            .guide_list{
                margin-top: 20px;
                .guide_item{
                    width: 313px;
                    height: 222px;
                    padding: 20px;
                    img{
                        margin-bottom: 30px;
                    }
                    .guide_text_1{
                        font-size: 18px;
                        line-height: 24px
                    }
                    .guide_text_2{
                        margin-top: 10px;
                        font-size: 14px;
                        line-height: 22px;
                    }
                }
            }
        }
    }
}
</style>
