<template>
    <section class="who-banner">
        <img src="@/assets/image/who_we_are_banner.jpg" alt="banner" class="who-banner-bimg"/>
        <div class="who-text-box">
            <h1 class="who-text-box-title">who we are</h1>
            <p class="who-text-box-subtitle">
                <picture class="who-text-box-subtitle-icon">
                   <source srcset="@/assets/image/home_white.svg" media="(max-width: 450px)">
                    <img srcset="@/assets/image/home.svg" alt="home" class="who-text-box-subtitle-icon"/>
                </picture>
              <span style="cursor: pointer;" @click="$router.push('/home')">Home</span> &nbsp;&nbsp; :&nbsp; : &nbsp;&nbsp;Who We Are
            </p>
        </div>
    </section>
    <div class="row1 u-center-text">
        <h1 class="heading-main1 mb-4">MSFL</h1>
        <h1 class="sub-title-2 mb-4">Motivated to Seek Forward Learning</h1>
    </div>
    <div class="row1 py-12 center-row">
        <div class="col-1-of-2">
            <p class="paragraph2 mb-6 center-row-padding">
                Marwadi Shares and Finance Ltd. (MSFL) was incorporated in 1992 as a financial 
                services company with a strong commitment to delivering
                 unmatched value and services. Our primary goal is to help individuals and families achieve their financial dreams.
            </p>
        </div>
        <div class="col-1-of-2 center-row-padding">
            <img src="@/assets/image/who-img-1.png" alt="Logo" class="row_1_img">
        </div>
    </div>
    <div class="row1 u-center-text mt-2">
        <h1 class="heading-main1 mb-4">HI-TECH HAVEN</h1>
        <h1 class="sub-title-2 mb-4">Contemporary Corporate Workspace</h1>
    </div>
    <div class="row1 py-12 center-row">
        <div class="col-1-of-2 center-row-padding">
            <img src="@/assets/image/who-img-2.png" alt="Logo" class="row_1_img">
        </div>
        <div class="col-1-of-2 center-row-padding">
            <p class="paragraph2 mb-6">
                MSFL operates from a cutting-edge office spread across 90,000 square feet in Rajkot, Gujarat. 
                Our location is strategically chosen to serve our clients better. 
                We have integrated the latest technology throughout our operations, ensuring seamless, secure, and uninterrupted trading experiences.
            </p>
        </div>
    </div>
    <div class="row1 u-center-text">
        <h1 class="heading-main1 mb-4">DEPENDABLE CONTRIBUTORS</h1>
        <h1 class="sub-title-2 mb-4">Building a community of trust and reliability</h1>
    </div>
    <div class="row1 py-12 center-row">
        <div class="col-1-of-2 center-row-padding">
            <p class="paragraph2 mb-6">
                With over 30 years of experience in the financial industry, MSFL has consistently ranked among the top 10 performers 
                in the equity segment of BSE since 2007-08. Our track record speaks volumes about our expertise and commitment to excellence.
            </p>
        </div>
        <div class="col-1-of-2 center-row-padding">
            <img src="@/assets/image/who-img-3.png" alt="Logo" class="row_1_img">
        </div>
    </div>
    <div class="row1 u-center-text">
        <h1 class="heading-main1 mb-4">Trust of Leaders</h1>
        <h1 class="sub-title-2 mb-4">Trading And Clearing Membership</h1>
    </div>
    <div class="row1 py-12">
        <div class="col-1-of-4 company-box-padding">
            <div class="company-box">
                <img src="@/assets/image/company-img-1.png" alt="Logo" class="company-box-img">
                <p class="company-box-text">
                    National Stock Exchange
                    of India Ltd.
                </p>
            </div>
        </div>
        <div class="col-1-of-4 company-box-padding">
            <div class="company-box">
                <img src="@/assets/image/company-img-2.png" alt="Logo" class="company-box-img">
                <p class="company-box-text">
                    Bombay Stock Exchange Ltd.
                </p>
            </div>
        </div>
        <div class="col-1-of-4 company-box-padding">
            <div class="company-box">
                <img src="@/assets/image/company-img-3.png" alt="Logo" class="company-box-img">
                <p class="company-box-text">
                    National Securities
                    Depository Limited
                </p>
            </div>
        </div>
        <div class="col-1-of-4 company-box-padding">
            <div class="company-box">
                <img src="@/assets/image/company-img-4.png" alt="Logo" class="company-box-img">
                <p class="company-box-text">
                    Central Depository
                    Services of India Limited
                </p>
            </div>
        </div>
        
    </div>
    <div class="row1 u-center-text mt-8">
        <h1 class="heading-main1 mb-4">Core Competency</h1>
        <h1 class="sub-title-2 mb-4">
            Our Commitment To Your Financial Well-being<br>
            <span class="sub-title-2-span">
                As a trusted, strategic partner we are deeply committed to meet your financial goals by
                helping you successfully navigate the changing and complex market structures.
            </span>
        </h1>
    </div>
    <div class="row1 py-16">
        <div class="col-1-of-5 p-4">
            <div class="blue-card">
                <span></span>
                <h3 class="blue-card-text">Excellent Network</h3>

            </div>
        </div>
        <div class="col-1-of-5 p-4">
            <div class="blue-card">
                <span></span>
                <h3 class="blue-card-text">Team of Professionals</h3>

            </div>
        </div>
        <div class="col-1-of-5 p-4">
            <div class="blue-card">
                <span></span>
                <h3 class="blue-card-text">Client Centric Services</h3>

            </div>
        </div>
        <div class="col-1-of-5 p-4">
            <div class="blue-card">
                <span></span>
                <h3 class="blue-card-text">Advanced Technology</h3>

            </div>
        </div>
        <div class="col-1-of-5 p-4">
            <div class="blue-card">
                <span></span>
                <h3 class="blue-card-text">Commodity trading</h3>

            </div>
        </div>
       
    </div>
    
</template>
<script setup>

</script>
<style lang="scss" scoped>
.blue-card{
    min-height: 107px;
    &-text{
        margin-top: 5px;
    }
}
.company-box{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &-img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    &-text{
        width: 95%;
        position: absolute;
        text-align: center;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: $color-white;
        font-family: 'Roboto';
        font-size: 22px;
        font-style: normal;
        font-weight: 700;
        line-height: 33px;
    }
}
.company-box-padding{
    padding: 0px 12px;
}
.who-banner{
    // display: block;
    // background-image: url('@/assets/image/who_we_are_banner.jpg');
    // background-size: cover;
    // background-position: top;
    // background-repeat: no-repeat;
    width: 100%;
    height: auto;
    position: relative;
    &-bimg{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @include respond(450px){
        background:#002840 ;
        height: 160px;
        &-bimg{
            display: none;
        }
    }
}
.center-row{
    display: flex;
    align-items: center;
    &-padding{
        padding-left:10px;
    }
    @include respond(tab-port){
        flex-direction: column;
    }
    @include respond(phone){
        &-padding{
            padding-left: 0px;
        }
    }
}
</style>
