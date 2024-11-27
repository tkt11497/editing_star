<template>
    <section class="intro-section-1">
        <div class="row1 u-center-text">
            <h1 class="heading-main1">Platform Background</h1>
        </div>
        <div class="flex-row-figures">
            <div class="flex-col-figure">
                <figure class="figure-card expand-from-left-1">
                    <img src="@/assets/image/about_card_1.png" alt="figure 1">
                    <figcaption class="figcaption-card figure_text move-in-btm-1">
                        EditingStar is an innovative, globally-oriented short video editing platform developed by XXX Company in the United States.
                    </figcaption>
                </figure>
            </div>
            <div class="flex-col-figure">
                <figure class="figure-card expand-from-left-2">
                    <img src="@/assets/image/about_card_2.png" alt="figure 1">
                    <figcaption class="figcaption-card figure_text move-in-btm-2">
                        Leveraging cutting-edge technology and deep industry insights, EditingStar 
                        focuses on delivering efficient and creative editing tools for short 
                        video creators and production teams.
                    </figcaption>
                </figure>
            </div>
            <div class="flex-col-figure">
                <figure class="figure-card expand-from-left-3">
                    <img src="@/assets/image/about_card_3.png" alt="figure 1">
                    <figcaption class="figcaption-card figure_text move-in-btm-3">
                        By collaborating with major global video platforms such as YouTube, TikTok,
                         and Instagram, EditingStar offers users access to high-quality,
                          copyright-protected video materials, 
                        empowering creators to produce, distribute, and monetize their content with ease.
                    </figcaption>
                </figure>
            </div>
        </div>

    </section>
    <section class="intro-section-2">
        <div class="row1 u-center-text">
            <h1 class="heading-main1">Core Features & Services</h1>
        </div>
        <div class="flex-img">
            <img src="@/assets/image/core_feature.png" alt="figure 1" class="flex-img-item">

        </div>
        <div class="row1 u-center-text">
            <p class="paragraph2">EditingStar aims to create a comprehensive ecosystem 
                for creators, offering full support from content licensing to revenue generation.
            </p>
        </div>
    </section>
    <section class="intro-section-3">
        <!-- <div class="row1">
            <h1 class="heading-main1">Content Licensing</h1>
        </div> -->
        <div class="flex-row">
            <div class="flex-col-img">
                <img ref="intro_expand_1" class="section_2_img" :class="{'expand-animation': intro_expand_1_isInView}" 
                src="@/assets/image/content_img.png" alt="section_2_img">
            </div>
            <div class="flex-col-text">
                <h1 ref="intro_scroll_1" class="sub-title" :class="{'scrollInRight': intro_scroll_1_isInView}">
                    Content Licensing
                </h1>
                <p class="paragraph2">
                    Global Resource Integration: Partnering with renowned video platforms to provide diverse 
                    copyright-protected video materials, including film clips, sports highlights, and news footage, to meet various creative needs.
                    Legal Use: Users can legally utilize these materials for secondary creation, ensuring compliance and mitigating copyright risks.
                </p>

            </div>

        </div>

    </section>
    <section class="intro-section-4">
        <div class="row1 u-center-text">
            <h1 class="heading-main1">Diverse Editing Tools</h1>
        </div>
        <div class="flex-row-figures">
            <div class="flex-col-figure-1">
                <figure ref="fig_card_expand_1" class="figure-card" :class="{'expand-animation': fig_card_expand_1_isInView}">
                    <img src="@/assets/image/diverse_1.png" alt="figure 1">
                    <figcaption class="figcaption-card figure_text2" :class="{'move-in-btm-1': fig_card_expand_1_isInView}">
                       Scene Transition Templates: A variety of pre-set transition 
                       styles catering to different video genres.
                       Precise Video Editing: Features such as trimming, 
                       quality enhancement, and contrast adjustment
                        ensure professional-grade outputs.
                    </figcaption>
                </figure>
            </div>
            <div class="flex-col-figure-2">
                <figure ref="fig_card_expand_2" class="figure-card" :class="{'expand-animation': fig_card_expand_2_isInView}">
                    <img src="@/assets/image/diverse_2.png" alt="figure 1">
                    <figcaption class="figcaption-card figure_text2" :class="{'move-in-btm-1': fig_card_expand_2_isInView}">
                        Rich Audio Library: Includes background music, sound effects, and 
                        multilingual voiceovers to enrich video content.
                        Template and Effects Library: Offers a wide selection of editing templates,
                         dynamic effects, and filters to help users create compelling content effortlessly.
                    </figcaption>
                </figure>
            </div>
        </div>

    </section>
    <section class="intro-section-5">
        <div class="row1 u-center-text">
            <h1 class="heading-main1">Distribution and Revenue</h1>
        </div>
        <div class="flex-row-figures">
            <div class="flex-col-figure-1">
                <figure  class="figure-card" >
                    <img src="@/assets/image/distribution_1.png" alt="figure 1">
                    <figcaption class="figcaption-card figure_text2" >
                       Multi-Channel Distribution: Edited videos can be distributed through EditingStar’s 
                       network to major global platforms, reaching millions of viewers.

                    </figcaption>
                </figure>
            </div>
            <div class="flex-col-figure-2">
                <figure class="figure-card" >
                    <img src="@/assets/image/distribution_2.png" alt="figure 1">
                    <figcaption class="figcaption-card figure_text2" >
                       Multi-Channel Distribution: Edited videos can be distributed through EditingStar’s 
                       network to major global platforms, reaching millions of viewers.

                    </figcaption>
                </figure>
            </div>
        </div>

    </section>
    <section class="intro-section-6">
        <div class="row1 u-center-text">
            <h1 class="heading-main1">Community Support & Growth</h1>
        </div>
        <div class="flex-row-figures">
            <div class="flex-col-figure-1">
                <figure  class="figure-card" >
                    <img src="@/assets/image/community_1.png" alt="figure 1">
                    <figcaption class="figcaption-card figure_text2" >
                        Creator Support Program: Provides training, resources, 
                        and marketing assistance to help new creators grow quickly.
                    </figcaption>
                </figure>
            </div>
            <div class="flex-col-figure-2">
                <figure  class="figure-card" >
                    <img src="@/assets/image/community_2.png" alt="figure 1">
                    <figcaption class="figcaption-card figure_text2" >
                        Creative Community: A platform for sharing works and exchanging ideas, 
                        enabling creators to draw inspiration and grow alongside peers worldwide.
                    </figcaption>
                </figure>
            </div>
        </div>

    </section>
</template>
<script setup >
import { useTemplateRef } from 'vue';
import useIntersectionObserver from '@/helper/utility'
const intro_expand_1 = useTemplateRef('intro_expand_1')
const intro_expand_1_isInView = useIntersectionObserver(intro_expand_1, {
  threshold: 0.01
})
const intro_scroll_1 = useTemplateRef('intro_scroll_1')
const intro_scroll_1_isInView = useIntersectionObserver(intro_scroll_1, {threshold: 0.4})
const fig_card_expand_1 = useTemplateRef('fig_card_expand_1')
const fig_card_expand_1_isInView = useIntersectionObserver(fig_card_expand_1, {threshold: 0.01})
const fig_card_expand_2 = useTemplateRef('fig_card_expand_2')
const fig_card_expand_2_isInView = useIntersectionObserver(fig_card_expand_2, {threshold: 0.01})
</script>
<style scoped lang="scss">
.expand-animation{
    @include scrollAnimation(expandFromCenter);
}
.scrollInLeft{
    @include scrollAnimation(moveInLeft);
}
.scrollInRight{
    @include scrollAnimation(moveInRight);
}
.move-in-btm-1{
    opacity: 0;
    animation: moveInBottom 1s ease-out 1s forwards;
}
.move-in-btm-2{
    opacity: 0;
    animation: moveInBottom 1s ease-out 2s forwards;
}
.move-in-btm-3{
    opacity: 0;
    animation: moveInBottom 1s ease-out 3s forwards;
}
.expand-from-left-1{
    @include scrollAnimation(expandFromLeft);
}
.expand-from-left-2{
    @include scrollAnimation(expandFromLeft,1s);
}
.expand-from-left-3{
    @include scrollAnimation(expandFromLeft,2s);
}
.intro-section-1{
    background-image: url('@/assets/image/intro_bg_1.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 140px 0px 140px 0px;
    .heading-main1{
        color: $color-white;
    }
    .flex-row-figures{
        .flex-col-figure{
            .figure-card{
                max-width: 422px;
                width: 100%;
                height: 100%;
            }
        }
    }
    @include respond(1550px){
        padding: 120px 0px 120px 0px;
        .flex-row-figures{
            .flex-col-figure{
                .figure-card{
                    max-width: 332px;
                    max-height: 500px;
                    width: 100%;
                    height: 100%;
                }
            }
        }
    }
    @include respond(tab-port){
        padding: 120px 0px 70px 0px;
    }
    @include respond(900px){
        .flex-row-figures{
            .flex-col-figure{
                .figure-card{
                    max-width: unset;
                    width: 300px;
                    height: 500px;
                }
            }
        }
    }
    @include respond(phone){
        padding: 80px 0px 50px 0px;
        .heading-main1{
            font-size: 30px;
        }
        .flex-row-figures{
            .flex-col-figure{
                .figure-card{
                    max-width: unset;
                    width: 290px;
                    height: 450px;
                }
            }
        }
    }
}
.intro-section-2{
    background: linear-gradient(170deg, #379CFF -14.88%, #8475FF 93.8%);
    padding: 45px 0px 45px 0px;
    .flex-img{
        max-width: $max-width-home;
        display: flex;
        flex-direction: row;
        margin: 0px auto;
        padding: 0px 100px;
        .flex-img-item{
            margin-top: 30px;
            margin-bottom: 30px;
            width: 100%;
            height: 100%;
        }
    }
        @include respond(1550px){
            .flex-img{
                 padding: 0px 80px;
                }
        }
        @include respond(tab-port){
            .flex-img{
                padding: 0px 70px;
            }
        }
        @include respond(phone){
            padding: 10px 0px 25px 0px;
            .heading-main1{
                font-size: 30px;
            }
            .flex-img{
                padding: 0px 6vw;
                .flex-img-item{
                    margin-top: 0px;
                    margin-bottom: 6px;
                }
            }
        }
}
.intro-section-3{
    background-image: url('@/assets/image/intro_bg_2.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 65px 0px 100px 0px;
    .row1{
        text-align: left;
        .heading-main1{
            color: $color-white;
        }
    }
    .flex-row{
        .flex-col-img{
            .section_2_img{
                max-width: 600px;
                width: 100%;
                clip-path: inset(40% round 20px);
                
            }
        }
        .flex-col-text{
            .sub-title{
                color: $color-white;
               margin-top: 0px;
            }
            .paragraph1{
                color: $color-white;
               margin-top: 24px;
            }
            .paragraph2{
                color: $color-white;
               margin-top: 24px;
            }
        }
        
    }
    @include respond(1290px){
        padding: 60px 0px 70px 0px;
    }
    @include respond(tab-port){
        padding: 50px 0px 50px 0px;
    }
    @include respond(phone){
        padding: 30px 0px 40px 0px;
    }
}
.intro-section-4{
    background: linear-gradient(180deg, #A2CBFF 0%, #61A6FF 100%);
    padding: 45px 0px 100px 0px;
    .heading-main1{
        color: #00397B;
    }
    .flex-row-figures{
        justify-content: center;
        align-items: flex-start;
        .flex-col-figure-1{
            display: flex;
            flex:0 0 36%;
            justify-content: center;
            .figure-card{
                clip-path: inset(40% round 20px);
                max-width: 430px;
                max-height: 638px;
                width: 100%;
                height: 100%;
                .figcaption-card{
                    background-color: #000;
                }
            }
        }
        .flex-col-figure-2{
            display: flex;
            flex:0 0 55%;
            justify-content: center;
            align-items: flex-start;
            align-self: stretch;
            .figure-card{
                clip-path: inset(40% round 20px);
                max-width: 647px;
                max-height: 427px;
                width: 100%;
                height: 100%;
                .figcaption-card{
                    background-color: #000;
                }
            }
        }
    }
    @include respond(1550px){
        // padding: 70px 0px 100px 0px;
        .flex-row-figures{
           gap: 30px;
        }
    }
    @include respond(1150px){
        .flex-row-figures{
            .flex-col-figure-1{
                flex:0 0 40%;
                .figure-card{
                    .figcaption-card{
                        padding-bottom: 20px;
                    }
                }
            }
            .flex-col-figure-2{
                flex:0 0 50%;
                .figure-card{
                    .figcaption-card{
                        padding-bottom: 40px;
                    }
                }
            }
        }
    }
    @include respond(tab-port){
        padding: 35px 0px 70px 0px;
    }
    @include respond(900px){
        .flex-row-figures{
            .flex-col-figure-1{
                flex:0 0 100%;
                align-self: stretch;
                .figure-card{
                    .figcaption-card{
                        padding-bottom: 20px;
                    }
                }
            }
            .flex-col-figure-2{
                flex:0 0 100%;
                .figure-card{
                    .figcaption-card{
                        padding-bottom: 20px;
                    }
                }
            }
        }
    }
    @include respond(phone){
        padding: 15px 0px 40px 0px;
        .heading-main1{
            font-size: 30px;
        }
        .flex-row-figures{
            .flex-col-figure-1{
                .figure-card{
                    .figcaption-card{
                        padding-bottom: 20px;
                    }
                }
            }
            .flex-col-figure-2{
                .figure-card{
                    height: 350px;
                    img{
                        height: 350px;
                    }
                    .figcaption-card{
                        padding-bottom: 20px;
                    }
                }
            }
        }

    }
}
.intro-section-5{
    background-image: url('@/assets/image/intro_bg_3.png');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding: 45px 0px 100px 0px;
    .heading-main1{
        color: #fff;
    }
    .flex-row-figures{
        justify-content: center;
        align-items: flex-start;
        gap: 0px;
        .flex-col-figure-1{
            padding-left: 40px;
            display: flex;
            flex:0 0 45%;
            justify-content: center;
            .figure-card{
                 max-width: 410px;
                max-height: 590px;
                width: 100%;
                height: 100%;
                .figcaption-card{
                    background-color: #fff;
                }
                .figure_text2{
                    color: #000;
                }
            }
        }
        .flex-col-figure-2{
            padding-right: 40px;
            display: flex;
            flex:0 0 45%;
            justify-content: center;
            .figure-card{
                max-width: 410px;
                max-height: 590px;
                width: 100%;
                height: 100%;
                .figcaption-card{
                    background-color: #fff;
                }
                .figure_text2{
                    color: #000;
                }
            }
        }
    }
    @include respond(1550px){
        // padding: 70px 0px 100px 0px;
        .flex-row-figures{
           gap: 0px;
        }
    }
    @include respond(1150px){
        .flex-row-figures{
            gap: 30px;
            .flex-col-figure-1{
                padding-left: 5px;
                .figure-card{
                    .figcaption-card{
                        padding-bottom: 20px;
                    }
                }
            }
            .flex-col-figure-2{
                padding-right: 5px;
                .figure-card{
                    .figcaption-card{
                        padding-bottom: 20px;
                    }
                }
            }
        }
    }
    @include respond(tab-port){
        padding: 35px 0px 70px 0px;
    }
    @include respond(900px){
        .flex-row-figures{
            .flex-col-figure-1{
                padding-left: 0px;
                flex:0 0 100%;
                align-self: stretch;
                .figure-card{
                    .figcaption-card{
                        padding-bottom: 20px;
                    }
                }
            }
            .flex-col-figure-2{
                padding-right: 0px;
                flex:0 0 100%;
                align-self: stretch;
                .figure-card{
                    .figcaption-card{
                        padding-bottom: 20px;
                    }
                }
            }
        }
    }
    @include respond(phone){
        padding: 15px 0px 40px 0px;
        .heading-main1{
            font-size: 30px;
        }
        .flex-row-figures{
            .flex-col-figure-1{
                .figure-card{
                    .figcaption-card{
                        padding-bottom: 20px;
                    }
                }
            }
            .flex-col-figure-2{
                .figure-card{
                    .figcaption-card{
                        padding-bottom: 20px;
                    }
                }
            }
        }

    }
}
.intro-section-6{
   background-image: url('@/assets/image/intro_bg_4.png');
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
    padding: 45px 0px 100px 0px;
    .heading-main1{
        color: #fff;
    }
    .flex-row-figures{
        justify-content: center;
        align-items: flex-start;
        .flex-col-figure-1{
            display: flex;
            flex:0 0 36%;
            justify-content: center;
            .figure-card{
                max-width: 430px;
                max-height: 638px;
                width: 100%;
                height: 100%;
                .figcaption-card{
                    background-color: #fff;
                }
                .figure_text2{
                    color: #000;
                    line-height: 40px;
                }
            }
        }
        .flex-col-figure-2{
            display: flex;
            flex:0 0 55%;
            justify-content: center;
            align-items: center;
            align-self: stretch;
            .figure-card{
                max-width: 647px;
                max-height: 427px;
                width: 100%;
                height: 100%;
                .figcaption-card{
                    background-color: #fff;
                }
                .figure_text2{
                    color: #000;
                    line-height: 40px;
                }
            }
        }
    }
    @include respond(1550px){
        // padding: 70px 0px 100px 0px;
        .flex-row-figures{
           gap: 30px;
        }
    }
    @include respond(1150px){
        .flex-row-figures{
            .flex-col-figure-1{
                flex:0 0 40%;
                .figure-card{
                    .figcaption-card{
                        padding-bottom: 20px;
                    }
                }
            }
            .flex-col-figure-2{
                flex:0 0 50%;
                .figure-card{
                    img{
                        min-height: 350px;
                    }
                    .figcaption-card{
                        padding-bottom: 40px;
                    }
                }
            }
        }
    }
    @include respond(tab-port){
        padding: 35px 0px 70px 0px;
    }
    @include respond(900px){
        .flex-row-figures{
            .flex-col-figure-1{
                flex:0 0 100%;
                align-self: stretch;
                .figure-card{
                    .figcaption-card{
                        padding-bottom: 20px;
                    }
                    .figure_text2{
                        line-height: 30px;
                    }
                }
            }
            .flex-col-figure-2{
                flex:0 0 100%;
                .figure-card{
                    .figcaption-card{
                        padding-bottom: 20px;
                    }
                    .figure_text2{
                        line-height: 30px;
                    }
                }
            }
        }
    }
    @include respond(phone){
        padding: 15px 0px 40px 0px;
        .heading-main1{
            font-size: 30px;
        }
        .flex-row-figures{
            .flex-col-figure-1{
                .figure-card{
                    .figcaption-card{
                        padding-bottom: 20px;
                    }
                    .figure_text2{
                        line-height: 20px;
                    }
                }
            }
            .flex-col-figure-2{
                .figure-card{
                    height: 350px;
                    img{
                        height: 350px;
                    }
                    .figcaption-card{
                        padding-bottom: 20px;
                    }
                    .figure_text2{
                        line-height: 20px;
                    }
                }
            }
        }

    }
}
</style>
