<template>
    <section class="intro-section-1">
        <div class="row1 u-center-text">
            <h1 class="heading-main1">Platform Background</h1>
        </div>
        <div class="flex-row-figures">
            <div class="flex-col-figure">
                <figure class="figure-card expand-from-left-1">
                    <img src="@/assets/image/about_card_1.png" alt="figure 1">
                    <figcaption class="figcaption-card figure_text">
                        EditingStar is an innovative, globally-oriented short video editing platform developed by XXX Company in the United States.
                    </figcaption>
                </figure>
            </div>
            <div class="flex-col-figure">
                <figure class="figure-card expand-from-left-2">
                    <img src="@/assets/image/about_card_2.png" alt="figure 1">
                    <figcaption class="figcaption-card figure_text">
                        Leveraging cutting-edge technology and deep industry insights, EditingStar 
                        focuses on delivering efficient and creative editing tools for short 
                        video creators and production teams.
                    </figcaption>
                </figure>
            </div>
            <div class="flex-col-figure">
                <figure class="figure-card expand-from-left-3">
                    <img src="@/assets/image/about_card_3.png" alt="figure 1">
                    <figcaption class="figcaption-card figure_text">
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

    </section>
</template>
<script setup >

</script>
<style scoped lang="scss">
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
            padding: 0px 70px;
        }
        @include respond(phone){
            padding: 0px 6vw;
        }
}

</style>
