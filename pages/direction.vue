<template>
    <section class="direction-section-1">
        <div class="flex-row-figures">
            <div class="flex-col-figure-1">
                <figure class="figure-card expand-from-left-1">
                    <img src="@/assets/image/direction_img_1.png" alt="figure 1">
                    <figcaption class="figcaption-card figure_text move-in-btm-1">
                        EditingStar: Platform Development Directions
                        Since its launch, EditingStar has positioned itself as an innovative global 
                        short-video editing platform, recognized for its efficient 
                        editing tools, extensive licensed material resources, and diverse content distribution models
                    </figcaption>
                </figure>
            </div>
            <div class="flex-col-figure-2">
                <figure class="figure-card expand-from-left-2">
                    <img src="@/assets/image/direction_img_2.png" alt="figure 1">
                    <figcaption class="figcaption-card figure_text move-in-btm-2">
                        To secure its leadership in the rapidly evolving short-video industry,
                            EditingStar is poised to develop and innovate in the following directions.
                    </figcaption>
                </figure>
            </div>
        </div>

    </section>
    <section class="direction-section-2">
        <div class="row1 u-center-text">
            <h1 class="heading-main1">Global Market Expansion</h1>
        </div>
        <div class="flex-row-figures">
            <div class="flex-col-figure-1">
                <figure ref="direction_expand_1" class="figure-card " :class="{'expand-animation': direction_expand_1_isInView}">
                    <img src="@/assets/image/direction_img_3.png" alt="figure 1">
                    <figcaption class="figcaption-card figure_text">
                        EditingStar aims to expand its international presence, covering more countries
                         and regions while engaging creators from diverse cultural backgrounds
                          to participate in the platform's ecosystem.
                    </figcaption>
                </figure>
            </div>
            <div class="flex-col-figure-2">
                <figure ref="direction_expand_2" class="figure-card " :class="{'expand-animation': direction_expand_2_isInView}">
                    <img src="@/assets/image/direction_img_4.png" alt="figure 1">
                    <figcaption class="figcaption-card figure_text ">
                        Localized Strategies: Provide customized editing tools and material libraries tailored to the creative 
                        needs and aesthetic preferences of users in different regions.
                        International Partnerships: Strengthen collaborations with global mainstream 
                        video platforms and licensing agencies to expand the range of licensed materials.
                        Market Promotion: Conduct targeted branding campaigns in key markets to increase platform recognition among global users.
                    </figcaption>
                </figure>
            </div>
        </div>

    </section>
    <section class="direction-section-3">
        <div class="row1 u-center-text">
            <h1 class="heading-main1">Technological Innovation & Tool<br> Optimization</h1>
        </div>
        <div class="flex-row-figures">
            <div class="flex-col-figure-1">
                <figure  class="figure-card ">
                    <img src="@/assets/image/tech_1.png" alt="figure 1">
                    <figcaption class="figcaption-card figure_text">
                        Technology is the driving force behind EditingStar. The platform will 
                        continue to invest in research and development to deliver more powerful
                         features and user-friendly experiences.
                    </figcaption>
                </figure>
            </div>
            <div class="flex-col-figure-2">
                <figure  class="figure-card " >
                    <img src="@/assets/image/tech_2.png" alt="figure 1">
                    <figcaption class="figcaption-card figure_text ">
                        AI-Powered Editing System: Introduce and optimize AI-driven intelligent
                         editing features to help creators complete video production
                          more efficiently and precisely.
                    </figcaption>
                </figure>
                <figure  class="figure-card " >
                    <img src="@/assets/image/tech_3.png" alt="figure 1">
                    <figcaption class="figcaption-card figure_text ">
                        Intelligent Subtitle Generation: Use speech recognition
                         technology to quickly create multilingual subtitles.
                    </figcaption>
                </figure>
            </div>
            <div class="flex-col-figure-3">
                <figure  class="figure-card ">
                    <img src="@/assets/image/tech_4.png" alt="figure 1">
                    <figcaption class="figcaption-card figure_text">
                        Automatic Visual Enhancements: Employ AI to adjust lighting,
                         tones, and clarity, ensuring optimal output quality.
                    </figcaption>
                </figure>
                <figure  class="figure-card ">
                    <img src="@/assets/image/tech_5.png" alt="figure 1">
                    <figcaption class="figcaption-card figure_text">
                        Multi-Platform Compatibility: Develop versions for more devices, 
                        including smartphones, tablets, and PCs, to meet diverse user needs.
                    </figcaption>
                </figure>
            </div>
            <div class="flex-col-figure-4">
                <figure  class="figure-card " >
                    <img src="@/assets/image/tech_6.png" alt="figure 1">
                    <figcaption class="figcaption-card figure_text ">
                        Technology is the driving force behind EditingStar. 
                        The platform will continue to invest in
                         research and development to deliver more powerful 
                         features and user-friendly experiences.
                    </figcaption>
                </figure>
            </div>
        </div>

    </section>
</template>
<script setup >
import { useTemplateRef } from 'vue';
import useIntersectionObserver from '@/helper/utility'
const direction_expand_1 = useTemplateRef('direction_expand_1')
const direction_expand_1_isInView = useIntersectionObserver(direction_expand_1, {
  threshold: 0.01
})
const direction_expand_2 = useTemplateRef('direction_expand_2')
const direction_expand_2_isInView = useIntersectionObserver(direction_expand_2, {
  threshold: 0.01
})
const direction_scroll_1 = useTemplateRef('direction_scroll_1')
const direction_scroll_1_isInView = useIntersectionObserver(direction_scroll_1, {threshold: 0.4})
const direction_scroll_2 = useTemplateRef('direction_scroll_2')
const direction_scroll_2_isInView = useIntersectionObserver(direction_scroll_2, {threshold: 0.4})

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
.direction-section-1{
    background-image: url('@/assets/image/direction_1.png');
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
    padding: 130px 0px 140px 0px;
    .flex-row-figures{
        justify-content: center;
        flex-wrap: nowrap;
        gap: 50px;
        .flex-col-figure-1{
            display: flex;
            justify-content: center;
            .figure-card{
                max-width: 754px;
                width: 100%;
                height: auto;
                .figcaption-card{
                   min-height: 128px;
                }
            }
        }
        .flex-col-figure-2{
            display: flex;
            justify-content: center;
            .figure-card{
                max-width: 617px;
                width: 100%;
                height: auto;
                .figcaption-card{
                    padding-top: 30px;
                   min-height: 128px;
                }
            }
        }
    }
    @include respond(1550px){
        padding: 120px 0px 120px 0px;
        .flex-row-figures{
            .flex-col-figure-1{
                .figure-card{
                   .figcaption-card{
                    min-height: 126px;
                   }
                }
            }
            .flex-col-figure-2{
                .figure-card{
                    .figcaption-card{
                        min-height: 126px;
                        padding-top: 14px;
                    }
                }
            }
        }
    }
    @include respond(tab-land){
        .flex-row-figures{
            gap: 30px;
            .flex-col-figure-1{
                .figure-card{
                    .figcaption-card{
                        min-height: 110px;
                    }
                }
            }
            .flex-col-figure-2{
                .figure-card{
                    .figcaption-card{
                        min-height: 110px;
                    }
                }
            }
        }
    }
    @include respond(tab-port){
        padding: 120px 0px 70px 0px;
    }
    @include respond(900px){
        .flex-row-figures{
            .flex-col-figure-1{
                .figure-card{
                    max-width: unset;
                    width: 500px;
                }
            }
            .flex-col-figure-2{
                .figure-card{
                    max-width: unset;
                    width: 500px;
                    height: 464px;
                    .figcaption-card{
                        min-height: 80px;
                    }
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
            .flex-col-figure-1{
                .figure-card{
                    width: 100%;
                    min-height: 360px;
                }
            }
            .flex-col-figure-2{
                .figure-card{
                    width: 100%;
                    min-height: 360px;
                }
            }
        }
    }
    @include respond(430px){
        .flex-row-figures{
            .flex-col-figure-1{
                .figure-card{
                    width: 100%;
                    height: 380px;
                }
            }
            .flex-col-figure-2{
                .figure-card{
                    width: 100%;
                    height: 360px;
                }
            }
        }
    }
    @include respond(400px){
        .flex-row-figures{
            .flex-col-figure-1{
                .figure-card{
                    width: 100%;
                    height: 360px;
                }
            }
            .flex-col-figure-2{
                .figure-card{
                    width: 100%;
                    height: 360px;
                }
            }
        }
    }
}
.direction-section-2{
    background: linear-gradient(170deg, #379CFF -14.88%, #8475FF 93.8%);
    padding: 65px 0px 100px 0px;
    .flex-row-figures{
        justify-content: center;
        flex-wrap: nowrap;
        gap: 20px;
        .flex-col-figure-1{
            display: flex;
            justify-content: center;
            .figure-card{
                clip-path: inset(40% round 20px);
                max-width: 467px;
                width: 100%;
                height: auto;
                .figcaption-card{
                   
                }
            }
        }
        .flex-col-figure-2{
            display: flex;
            justify-content: center;
            .figure-card{
                clip-path: inset(40% round 20px);
                max-width: 950px;
                width: 100%;
                height: auto;
                .figcaption-card{
                    
                }
            }
        }
    }
    @include respond(1550px){
        padding: 60px 0px 100px 0px;
    }
    @include respond(tab-port){
        padding: 55px 0px 70px 0px;
    }
    @include respond(900px){
        .flex-row-figures{
            .flex-col-figure-1{
                .figure-card{
                    max-width: unset;
                    width: 500px;
                    height: 400px;
                }
            }
            .flex-col-figure-2{
                .figure-card{
                    max-width: unset;
                    width: 500px;
                    height: 400px;
                }
            }
        }
    }
    @include respond(phone){
        padding: 20px 0px 50px 0px;
        .heading-main1{
            font-size: 30px;
            letter-spacing: -1.22px;
        }
        .flex-row-figures{
            .flex-col-figure-1{
                .figure-card{
                    width: 100%;
                    min-height: 360px;
                }
            }
            .flex-col-figure-2{
                .figure-card{
                    width: 100%;
                    min-height: 360px;
                }
            }
        }
    }


}
.direction-section-3{
    background: #050014;
    padding: 65px 0px 100px 0px;
    .heading-main1{
        color: #fff;
    }
    .flex-row-figures{
        justify-content: center;
        flex-wrap: nowrap;
        gap: 20px;
        .flex-col-figure-1{
            display: flex;
            justify-content: center;
            flex-direction: column;
            .figure-card{
                max-width: 379px;
                width: 100%;
                height: auto;
                .figcaption-card{
                   
                }
            }
        }
        .flex-col-figure-2{
            display: flex;
            flex-direction: column;
            justify-content: center;
            .figure-card{
                max-width: 344px;
                margin-top: 10px;
                width: 100%;
                height: auto;
                .figcaption-card{
                    
                }
            }
        }
        .flex-col-figure-3{
            display: flex;
            flex-direction: column;
            justify-content: center;
            .figure-card{
                max-width: 343px;
                width: 100%;
                height: auto;
                margin-top: 10px;
                .figcaption-card{
                    
                }
            }
        }
        .flex-col-figure-4{
            display: flex;
            flex-direction: column;
            justify-content: center;
            .figure-card{
                max-width: 288px;
                width: 100%;
                height: auto;
                margin-top: 10px;
                .figcaption-card{
                    
                }
            }
        }
    }
    @include respond(1550px){
        padding: 60px 0px 100px 0px;
    }
    @include respond(tab-port){
        padding: 55px 0px 70px 0px;
    }
    @include respond(900px){
        .flex-row-figures{
            .flex-col-figure-1{
                .figure-card{
                    max-width: unset;
                    width: 500px;
                    height: 400px;
                }
            }
            .flex-col-figure-2{
                .figure-card{
                    max-width: unset;
                    width: 500px;
                    height: 400px;
                }
            }
        }
    }
    @include respond(phone){
        padding: 20px 0px 50px 0px;
        .heading-main1{
            font-size: 30px;
            letter-spacing: -1.22px;
        }
        .flex-row-figures{
            .flex-col-figure-1{
                .figure-card{
                    width: 100%;
                    min-height: 360px;
                }
            }
            .flex-col-figure-2{
                .figure-card{
                    width: 100%;
                    min-height: 360px;
                }
            }
        }
    }


}
</style>

