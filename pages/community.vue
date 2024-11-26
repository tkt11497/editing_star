<template>
    <div class="section-1">
        <!-- <div class="row1 u-center-text">
            <h1 class="heading-main1">EditingStar helped me increase revenue and take my business to the next level!</h1>
        </div> -->
        <div class="flex-row">
            <div class="flex-col-img">
                <img class="section_1_img expand-animation"  
                src="@/assets/image/p2_section_1.png" alt="section_1_img">
            </div>
            <div class="flex-col-text">
                <h1 ref="scrollAnimationRef" class="sub-title" :class="{'scrollInRight': isInView}">
                    EditingStar helped me increase revenue and take my business to the next level!
                </h1>
                <p class="paragraph1">
                    Since I started using EditingStar, my productivity has skyrocketed,
                     and so has my income! The AI-powered smart editing feature alone 
                     saved me hours on every project, which allowed me to take on more
                      clients and expand my business. I’m now able to deliver higher-quality work 
                      in less time, and the multi-platform export options have opened up new opportunities for
                       me on YouTube, Instagram, and even TikTok. I recently worked on a brand campaign and thanks 
                       to the tool’s seamless editing and professional effects, the video went viral, bringing in new clients and boosting my earnings. 
                    EditingStar is not just a tool; it’s been a game-changer for my freelance career and has directly contributed to my business growth.
                </p>

            </div>

        </div>

    </div>
    <div class="section-2">
        <!-- <div class="row1 u-center-text" style="z-index: 2;position: relative;">
            <h1 class="heading-main1">A game-changer for professional<br> video editors!</h1>
        </div> -->
        <div class="dot-bg">
            <img src="@/assets/image/dot_bg.svg" alt="dot-bg">
        </div>
        <div class="flex-row">
            <div class="flex-col-text">
                <h1 ref="scrollInLeft2" class="sub-title" :class="{'scrollInLeft': scrollInLeft2_isInView}">
                    A game-changer for professional video editors!
                </h1>
                <p class="paragraph1" style="z-index: 2;position: relative;">
                    I've been in the industry for over a decade and have used numerous video editing tools, 
                    but EditingStar has completely blown me away with its AI-driven smart editing and automation.
                     The ability to automatically recognize key scenes in footage and apply seamless transitions is a huge time-saver.
                      What really impressed me was its automatic color grading — it’s almost
                     like having a professional colorist on the team. The multi-track editing and synchronization 
                     features make it perfect for multi-camera shoots. This tool is truly the future of post-production
                </p>

            </div>
            <div class="flex-col-img">
                <img ref="expandRef2" class="section_2_img" :class="{'expand-animation': expandRef2_isInView}" 
                src="@/assets/image/p2_section_2.png" alt="section_2_img">
            </div>

        </div>

    </div>
    <div class="section-3">
        <!-- <div class="row1 u-center-text">
            <h1 class="heading-main1">Stand out on Editingstar</h1>
        </div> -->
        <div class="flex-row">
            <div class="flex-col-img">
                <img ref="expandRef3" class="section_3_img" :class="{'expand-animation': expandRef3_isInView}" 
                src="@/assets/image/p2_section_3.png" alt="section_3_img">
            </div>
            <div class="flex-col-text">
                <h1 ref="scrollInLeft3" class="sub-title" :class="{'scrollInLeft': scrollInLeft3_isInView}">
                    One-click export and multi-platform support saves me hours!
                </h1>
                <p class="paragraph1">
                    As a YouTuber and TikTok creator, I need to process a lot of video content quickly.
                     EditingStar’s one-click export and multi-platform presets are a lifesaver! Whether it's YouTube, Instagram,
                     or TikTok, I can select the appropriate format and aspect ratio, and the system takes care of the rest. 
                     The real-time preview feature is also a great touch, letting me see the
                     final result instantly without the need for lengthy renders. This tool has significantly boosted my productivity!"
                </p>

            </div>

        </div>

    </div>

</template>

<script setup>
import { useTemplateRef } from 'vue';
import useIntersectionObserver from '@/helper/utility'


const expandRef2 = useTemplateRef('expandRef2')
const expandRef2_isInView = useIntersectionObserver(expandRef2, {
  threshold: 0.01
})
const expandRef3 = useTemplateRef('expandRef3')
const expandRef3_isInView = useIntersectionObserver(expandRef3, {
  threshold: 0.01
})
const scrollAnimationRef = useTemplateRef('scrollAnimationRef')
const isInView = useIntersectionObserver(scrollAnimationRef, {threshold: 0.4})
const scrollInLeft2 = useTemplateRef('scrollInLeft2')
const scrollInLeft2_isInView = useIntersectionObserver(scrollInLeft2, {threshold: 0.4})
const scrollInLeft3 = useTemplateRef('scrollInLeft3')
const scrollInLeft3_isInView = useIntersectionObserver(scrollInLeft3, {threshold: 0.4})


// You can watch the visibility changes
// watch(isInView, (visible) => {
//   if (visible) {
//     console.log('Countdown section is now visible!')
    
//   }
// })



</script>



<style lang="scss" scoped>
.expand-animation{
    @include scrollAnimation(expandFromCenter);
}
.scrollInLeft{
    @include scrollAnimation(moveInLeft);
}
.scrollInRight{
    @include scrollAnimation(moveInRight);
}
.section-1{
    // background-color: $color-bg-violet;
    background: linear-gradient(170deg, #379CFF -14.88%, #8475FF 93.8%);
    padding: 140px 0px 100px 0px;
    .heading-main1{
        // color: $color-white;
    }
    .flex-row{
        gap: 0px;
        .flex-col-img{
            flex:0 0 35%;
            .section_1_img{
                max-width: 391px;
                width: 100%;
                clip-path: inset(40% round 20px);
                
            }
        }
        .flex-col-text{
            flex:0 0 65%;
            .sub-title{
               margin-top: 0px;
               color: $color-white;
            }
            .paragraph1{
               margin-top: 24px;
               color: $color-white;
            }
        }
        
    }
    @include respond(1550px){
        padding: 120px 0px 70px 0px;
        .flex-row{
            gap: 30px;
        }
    }
    @include respond(1290px){
        padding: 120px 0px 70px 0px;
    }
    @include respond(1134px){
       .flex-row{
        .flex-col-img{
            flex:0 0 40%;
        }
        .flex-col-text{
            flex:0 0 60%;
        }
       }
    }
    @include respond(tab-port){
        padding: 120px 0px 50px 0px;
    }
    @include respond(phone){
        padding: 80px 0px 40px 0px;
    }
}
.section-2{
    // background-color: $color-bg-violet;
    background: #3B4F05;
    position: relative;
    padding: 80px 0px 100px 0px;
    .dot-bg{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 0;
        img{
            width: 100%;
            object-fit: cover;
            height: 100%;
        }
    }
    .heading-main1{
        z-index: 1;
        // color: $color-white;
    }
    .flex-row{
        // gap: 30px;
        .flex-col-img{
            flex:0 0 35%;
            .section_2_img{
                max-width: 433px;
                width: 100%;
                clip-path: inset(40% round 20px);
                
            }
        }
        .flex-col-text{
            flex:0 0 65%;
            .sub-title{
               margin-top: 0px;
               color: $color-white;
            }
            .paragraph1{
               margin-top: 24px;
               color: $color-white;
            }
        }
        
    }
    @include respond(1550px){
        .flex-row{
            gap: 30px;
        }
    }
    @include respond(1290px){
        padding: 70px 0px 70px 0px;
    }
    @include respond(1134px){
       .flex-row{
        .flex-col-img{
            flex:0 0 40%;
        }
        .flex-col-text{
            flex:0 0 60%;
        }
       }
    }
    @include respond(tab-port){
        padding: 50px 0px 50px 0px;
    }
    @include respond(phone){
        padding: 30px 0px 40px 0px;
    }
}

.section-3{
    // background-color: $color-bg-violet;
    background: linear-gradient(180deg, #26008D 0%, #4000EC 100%);
    padding: 80px 0px 100px 0px;
    .heading-main1{
        // color: $color-white;
    }
    .flex-row{
        gap: 0px;
        .flex-col-img{
            flex:0 0 35%;
            .section_3_img{
                max-width: 391px;
                width: 100%;
                clip-path: inset(40% round 20px);
                
            }
        }
        .flex-col-text{
            flex:0 0 65%;
            .sub-title{
               margin-top: 0px;
               color: $color-white;
            }
            .paragraph1{
               margin-top: 24px;
               color: $color-white;
            }
        }
        
    }
    @include respond(1550px){
        .flex-row{
            gap: 30px;
        }
    }
    @include respond(1290px){
        padding: 70px 0px 70px 0px;
    }
    @include respond(1134px){
       .flex-row{
        .flex-col-img{
            flex:0 0 40%;
        }
        .flex-col-text{
            flex:0 0 60%;
        }
       }
    }
    @include respond(tab-port){
        padding: 50px 0px 50px 0px;
    }
    @include respond(phone){
        padding: 30px 0px 40px 0px;
    }
}



</style>