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
                <h1 ref="scrollAnimationRef" class="sub-title" :class="{'inScrollAnimation': isInView}">High-definition materials, easy profit</h1>

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
.inScrollAnimation{
    @include scrollAnimation(moveInLeft);
}
.section-1{
    background-color: $color-bg-violet;
    padding: 174px 0px 146px 0px;
    margin-top: -100px;
    .flex-row{
        margin-top:137px;
        .flex-col-img{
            .section_1_img{
                width: 608px;
                height: 597.83px;
                clip-path: inset(40% round 0px);
                
            }
        }
        
    }
}



</style>