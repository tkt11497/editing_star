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
    <div class="section-3">
        <div class="row1 u-center-text">
            <h1 class="heading-main1">Stand out on Editingstar</h1>
        </div>
        <div class="flex-row">
            <div class="flex-col-img">
                <img ref="expandRef3" class="section_3_img" :class="{'expand-animation': expandRef3_isInView}" 
                src="@/assets/image/section_3_img.png" alt="section_3_img">
            </div>
            <div class="flex-col-text">
                <!-- <h1 ref="scrollInLeft3" class="sub-title" :class="{'scrollInLeft': scrollInLeft3_isInView}">
                    Production and release in one go
                </h1> -->
                <p class="paragraph2">
                    The Editingstar platform continuously updates and optimizes copyrighted materials, 
                    while providing users with multi-faceted rewards and support,
                     aiming to provide users with high-quality employment, skill improvement, and wealth appreciation!
                </p>

            </div>

        </div>

    </div>
    <div class="section-4">
        <div class="row1 u-center-text">
            <h1 class="heading-main1">What kind of person is suitable to join Editingstar?</h1>
        </div>
        <div class="flex-row">
            <div class="flex-col-item">
                <div class="item-box">
                    <h1 class="item-title">
                        Unemployed <span class="hider" style="opacity: 0">want to earn a high return in their spare time</span>
                    </h1>
                    <p class="item-content">
                        The Editingstar platform can provide users with a job with long-term benefits
                    </p>
                </div>
            </div>
            <div class="flex-col-item">
                <div class="item-box">
                    <h1 class="item-title">
                        People who want to earn a high return in their spare time
                    </h1>
                    <p class="item-content">
                        The Editingstar platform provides users with high-definition
                        copyright-compliant materials.
                        Users use the materials to edit videos and upload them to the
                        Editingstar platform to receive high returns.
                    </p>
                </div>
            </div>
            <div class="flex-col-item">
                <div class="item-box">
                    <h1 class="item-title">
                        People who want to create a better future for themselves
                    </h1>
                    <p class="item-content">
                        The Editingstar platform provides users with multi-faceted support, 
                        including supporting users to set up companies, 
                        obtain permanent profit dividends, and help users improve their personal connections, economy, and status!
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="section-5">
        <div class="row1 u-center-text">
            <h1 class="heading-main1">Platform Introduction</h1>
        </div>
        <div class="flex-row">
            <div class="flex-col-img1">
                <img src="@/assets/image/p_img_1.png" alt="platform_1">
                <img src="@/assets/image/p_img_2.png" alt="platform_2">
            </div>
            <div class="flex-col-text1">
                <img v-for="(url, name) in icons" :key="name" class="p_icon" :src="url" :alt="name">
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
const expandRef3 = useTemplateRef('expandRef3')
const expandRef3_isInView = useIntersectionObserver(expandRef3, {
  threshold: 0.01
})
const scrollInLeft2 = useTemplateRef('scrollInLeft2')
const scrollInLeft2_isInView = useIntersectionObserver(scrollInLeft2, {threshold: 0.4})
const scrollInLeft3 = useTemplateRef('scrollInLeft3')
const scrollInLeft3_isInView = useIntersectionObserver(scrollInLeft3, {threshold: 0.4})
const isInView = useIntersectionObserver(scrollAnimationRef, {
  threshold: 0.4 // Element is considered "visible" when 20% is in viewport
})

// You can watch the visibility changes
// watch(isInView, (visible) => {
//   if (visible) {
//     console.log('Countdown section is now visible!')
    
//   }
// })
// Get all icon files from the directory
const icons_glob = import.meta.glob('@/assets/image/icon/*.{svg,png,jpg}', { eager: true })

// Create a map of icon names to their URLs
 const getIconsMap = () => {
  const iconMap = {}
  console.log(icons_glob,'asdasd')
  for (const path in icons_glob) {
    // Extract filename without extension
    const fileName = path.split('/').pop().split('.')[0]
    iconMap[fileName] = icons_glob[path].default
  }
  
  return iconMap
}
const icons = ref({})

onMounted(() => {
  icons.value = getIconsMap()
})

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
.section-3{
    background: linear-gradient(180deg, #26008D 0%, #4000EC 100%);
    padding: 80px 0px 100px 0px;
    .heading-main1{
        color: $color-white;
    }
    .flex-row{
        .flex-col-img{
            .section_3_img{
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
.section-4{
    background: linear-gradient(#121212, #26008d);
    // background: linear-gradient(170deg, #379CFF -14.88%, #8475FF 93.8%);
    padding: 160px 0px 200px 0px;
    .heading-main1{
        color: $color-white;
        // line-height: 75px;
    }
    .flex-row{
        align-items: flex-start;
        gap: 25px;
        .flex-col-item{
            display: flex;
            flex: 0 0 32%;
            align-self: stretch;
            .item-box{
                // width: 390px;
                // height: 684px;
                width: 100%;
                min-height: 339px;
                border-radius: 40px;
                border: 2px solid #cff56a;
                // border: 2px solid #FFF946;
                display: flex;
                flex-direction: column;
                align-self: stretch;
                justify-content: flex-start;
                gap: 30px;
                padding: 40px 25px;
                .item-title{
                    color: $color-white;
                    font-family: 'spotify';
                    letter-spacing: -0.96px;
                    font-size: 26px;
                    line-height: 28px;
                    text-align: left;
                }
                .item-content{
                    color: $color-white;
                    font-family: 'spotify';
                    text-align: left;
                    font-size: 19px;
                    line-height: 24px;
                    letter-spacing: normal;
                }
            }
        }
        .flex-col-img1{
            display: flex;
            flex: 0 0 35%;
            flex-direction: column;
            gap: 20px;
        }
        .flex-col-text1{
            display: flex;
            flex: 0 0 65%;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: flex-start;
            // align-self: stretch;
            gap: 50px;
            .p_icon{
                width: 56px;
                height: 56px;
                display: inline-block;
            }
        }
    }
    @include respond(1290px){
        padding: 70px 0px 70px 0px;
    }
    @include respond(tab-port){
        padding: 50px 0px 50px 0px;
        .flex-row{
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .flex-col-item{
                flex: 0 0 100%;
                align-items: center;
                justify-content: center;
                .item-box{
                    min-height: 249px;
                    max-width: 390px;
                    .hider{
                        display: none;
                    }
                }
            }
        }
    }
    @include respond(phone){
        padding: 30px 0px 40px 0px;
        .heading-main1{
            font-size: 30px;
            letter-spacing: -1.22px;
        }
        .flex-row{
            .flex-col-item{
                .item-box{
                    min-height: 239px;
                    max-width: 390px;
                    .item-title{
                        font-size: 24px;
                        line-height: 26px;

                    }
                    .item-content{
                        font-size: 17px;
                        line-height: 22px;
                    }
                }
            }
        }
    }
}
.section-5{
    background: linear-gradient(170deg, #379CFF -14.88%, #8475FF 93.8%);
    padding: 80px 0px 130px 0px;
    .heading-main1{
        color: $color-white;
        // line-height: 75px;
    }
    .flex-row{
        align-items: flex-start;
        gap: 25px;
        .flex-col-img1{
            display: flex;
            flex: 0 0 45%;
            flex-direction: column;
            gap: 20px;
            img{
                width: 100%;
                max-width: 501px;
                max-height: 484px;
            }
        }
        .flex-col-text1{
            padding-top: 20px;
            display: flex;
            flex: 0 0 55%;
            flex-direction: row;
            flex-wrap: wrap;
            align-items: flex-start;
            justify-content: flex-start;
            align-self: stretch;
            gap: 50px;
            .p_icon{
                width: 56px;
                height: 56px;
                display: inline-block;
            }
        }
    }
    @include respond(1290px){
        padding: 70px 0px 70px 0px;
    }
    @include respond(tab-port){
        padding: 50px 0px 50px 0px;
        .flex-row{
            flex-direction: column;
            align-items: center;
            justify-content: center;
            .flex-col-img1{
                    flex: 0 0 100%;
                    gap: 20px;
                    img{
                        width: 100%;
                        max-width: 401px;
                        max-height: 384px;
                    }
                }
            .flex-col-text1{
                padding-top: 20px;
                flex: 0 0 100%;
                justify-content: center;
                gap: 50px;
                .p_icon{
                    width: 56px;
                    height: 56px;
                    display: inline-block;
                }
            }
        }
    }
    @include respond(phone){
        padding: 30px 0px 40px 0px;
        .heading-main1{
            font-size: 30px;
            letter-spacing: -1.22px;
        }
        .flex-row{
            .flex-col-img1{
                    gap: 20px;
                    img{
                        width: 100%;
                        max-width: 401px;
                        max-height: 384px;
                    }
                }
            .flex-col-text1{
                padding-top: 10px;
                gap: 40px;
                .p_icon{
                    width: 46px;
                    height: 46px;
                    display: inline-block;
                }
            }
        }
    }
}



</style>