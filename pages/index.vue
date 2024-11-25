<template>
    <banner></banner>
    <div class="section-1">
        <div class="row1 u-center-text">
            <h1 class="heading-main1">Transform Videos, Transform Lives</h1>
        </div>
        <div class="flex-row">
            <div class="flex-col-img">
                <img ref="expandRef1" class="section_1_img" :class="{'expand-animation': expandRef1_isInView}" 
                src="@/assets/image/section_1_img.png" alt="section_1_img">
            </div>
            <div class="flex-col-text">
                <h1 ref="scrollAnimationRef" class="sub-title" :class="{'scrollInRight': isInView}">High-definition materials, easy profit</h1>
                <p class="paragraph1">
                    Editingstar cooperates with mainstream video media 
                    platforms around the world to obtain high-definition video 
                    copyrights and authorize users to edit. Editingstar distributes the user's edited works to the cooperative
                     media network to maximize the number of views, likes and advertising revenue, thereby achieving high returns.
                </p>

            </div>

        </div>

    </div>
    <div class="section-2">
        <div class="row1 u-center-text">
            <h1 class="heading-main1">Earn income by publishing works</h1>
        </div>
        <div class="flex-row">
            <div class="flex-col-text">
                <h1 ref="scrollInLeft2" class="sub-title" :class="{'scrollInLeft': scrollInLeft2_isInView}">
                    Production and release in one go
                </h1>
                <p class="paragraph1">
                    Users use the copyrighted materials provided by Editingstar to edit
                     videos and upload them to the Editingstar platform. Editingstar will conduct professional secondary review,
                      editing, advertising, AI function optimization and other professional distribution of users' 
                    videos to obtain higher playback and likes revenue, helping users realize the added value of editing wealth!
                </p>

            </div>
            <div class="flex-col-img">
                <img ref="expandRef2" class="section_2_img" :class="{'expand-animation': expandRef2_isInView}" 
                src="@/assets/image/section_2_img.png" alt="section_2_img">
            </div>

        </div>

    </div>


</template>

<script setup>
import { useTemplateRef } from 'vue';
import useIntersectionObserver from '@/helper/utility'

const scrollAnimationRef = useTemplateRef('scrollAnimationRef')
const expandRef1 = useTemplateRef('expandRef1')
const expandRef1_isInView = useIntersectionObserver(expandRef1, {
  threshold: 0.01
})
const expandRef2 = useTemplateRef('expandRef2')
const expandRef2_isInView = useIntersectionObserver(expandRef2, {
  threshold: 0.01
})
const scrollInLeft2 = useTemplateRef('scrollInLeft2')
const scrollInLeft2_isInView = useIntersectionObserver(scrollInLeft2, {threshold: 0.4})
const isInView = useIntersectionObserver(scrollAnimationRef, {
  threshold: 0.4 // Element is considered "visible" when 20% is in viewport
})

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
    padding: 80px 0px 100px 0px;
    margin-top: -50px;
    .heading-main1{
        // color: $color-white;
    }
    .flex-row{
        .flex-col-img{
            .section_1_img{
                max-width: 600px;
                width: 100%;
                clip-path: inset(40% round 20px);
                
            }
        }
        .flex-col-text{
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
    @include respond(1290px){
        padding: 70px 0px 70px 0px;
    }
    @include respond(tab-port){
        padding: 50px 0px 50px 0px;
    }
    @include respond(phone){
        padding: 30px 0px 40px 0px;
    }
}
.section-2{
    // background-color: $color-bg-green;
    background: linear-gradient(180deg, #009279 0%, #006050 100%);
    padding: 80px 0px 100px 0px;
    .heading-main1{
        // color: $color-white;
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
        }
        
    }
    @include respond(1290px){
        padding: 70px 0px 70px 0px;
    }
    @include respond(tab-port){
        padding: 50px 0px 50px 0px;
    }
    @include respond(phone){
        padding: 30px 0px 40px 0px;
    }
}



</style>