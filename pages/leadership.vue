<template>
    <section class="who-banner">
     <img src="@/assets/image/who_we_are_banner.jpg" alt="banner" class="who-banner-bimg"/>
     <div class="who-text-box">
         <h1 class="who-text-box-title">Leadership</h1>
         <p class="who-text-box-subtitle">
             <picture class="who-text-box-subtitle-icon">
                <source srcset="@/assets/image/home_white.svg" media="(max-width: 450px)">
                 <img srcset="@/assets/image/home.svg" alt="home" class="who-text-box-subtitle-icon"/>
             </picture>
           <span style="cursor: pointer;" @click="$router.push('/home')">Home</span> &nbsp;&nbsp; :&nbsp; : &nbsp;&nbsp;Leadership
         </p>
     </div>
    </section>
    <div class="row1 u-center-text">
            <h1 class="heading-main1">BOARD OF DIRECTORS</h1>
    </div>
    <van-swipe class="leadership-swipe" :autoplay="6000" :show-indicators="true" touchable>
        <van-swipe-item >
            <div class="py-8 center-row">
                <div class="center-row-padding">
                    <img src="@/assets/image/leader-1.jpg" alt="Logo" class="row_1_img">
                </div>
                <div class="center-row-padding">
                    <div class="leader-name-box">
                        <h1 class="leader-name">Mr. Ketan H. Marwadi</h1>
                        <p class="leader-position">Chairman and Managing Director</p>
                    </div>
                    <p class="paragraph2 mb-8">
                        Mr. Ketan H. Marwadi promoted the Company in 1992. He has more than 30 years of 
                        experience in the primary as well as the secondary market Capital Market, dealing 
                        with stock exchanges, regulatory and statutory bodies and monitoring overall compliance. 
                        His core expertise also lies in the research &
                         development of capital markets and launching various services for investors as per their requirements.
                    </p>
                    <p class="paragraph2 mb-4">
                        He has been instrumental in guiding the Company 
                        in securing the corporate membership of BSE and NSE in the cash and derivatives segment, 
                        membership of Saurashtra Kutch Stock Exchange Ltd., and the launching of depository services of 
                        NSDL and CDSL. In his current role, he is the chief strategist, overseeing MSFL’s strategic growth and 
                        development as well as the operational functioning and initiatives for ensuring the best investor services.
                    </p>
                </div>
            </div>
        </van-swipe-item>
        <van-swipe-item >
            <div class="py-8 center-row">
                <div class="center-row-padding">
                    <img src="@/assets/image/leader-2.jpg" alt="Logo" class="row_1_img">
                </div>
                <div class="center-row-padding">
                    <div class="leader-name-box">
                        <h1 class="leader-name">Mr. Deven H. Marwadi</h1>
                        <p class="leader-position">Whole Time Director</p>
                    </div>
                    <p class="paragraph2 mb-8">
                        Mr. Deven H. Marwadi is the promoter Director of the Company. He has over 
                        32 years of expertise in the area of risk management and stock broking operations of the financial services industry.
                    </p>
                    <p class="paragraph2 mb-4">
                        He has extensive knowledge and expertise in trading and clearing operations 
                        and is in charge of day-to-day trading activities of NSE and BSE trading in 
                        the Cash and derivatives segment. He is in charge of the overall clientele base of the organization including DP operations of NSDL and CDSL apart 
                        from looking after the trading requirements of the Commodity market carried out by the company through membership of MCX and NCDEX.
                    </p>
                </div>
            </div>
        </van-swipe-item>
        <van-swipe-item >
            <div class="py-8 center-row">
                <div class="center-row-padding">
                    <img src="@/assets/image/leader-3.jpg" alt="Logo" class="row_1_img">
                </div>
                <div class="center-row-padding">
                    <div class="leader-name-box">
                        <h1 class="leader-name">Mr. Sandip H. Marwadi</h1>
                        <p class="leader-position">Whole Time Director</p>
                    </div>
                    <p class="paragraph2 mb-8">
                        Mr. Sandip H. Marwadi has been the Whole Time Director of the company 
                        since 1998. He has extensive knowledge and expertise in the area of hardware, 
                        software and various networking technologies. He is in charge of overall operations, 
                        hardware and software operations, installation of hardware and software, maintenance, 
                        connectivity and networking of branch offices and sub-brokers, back-up operations, 
                        software developments in relation to stock broking and DP-related operations of the company. 
                        Upgradation of technology, computer peripherals, effective networking of the company 
                        and its branch offices and providing uninterrupted communication facilities to the ultimate users.
                    </p>
                </div>
            </div>
        </van-swipe-item>
        <van-swipe-item >
            <div class="py-8 center-row">
                <div class="center-row-padding">
                    <img src="@/assets/image/leader-4.jpg" alt="Logo" class="row_1_img">
                </div>
                <div class="center-row-padding">
                    <div class="leader-name-box">
                        <h1 class="leader-name">Mrs. Mira D. Marwadi</h1>
                        <p class="leader-position">Whole Time Director</p>
                    </div>
                    <p class="paragraph2 mb-8">
                        Mrs. Mira D. Marwadi has been associated with MSFL since 1995 as a whole-time director. 
                        She holds a degree in Bachelor of Commerce and has about 27 years of experience in stock market-related activities. 
                        She is the designated director of various exchanges in which the company is a member. Her core expertise is in 
                        the field of administration and HR. Thus, she looks after the general administration and HR departments in the company. 
                    </p>
                </div>
            </div>
        </van-swipe-item>
        
    </van-swipe>
    <div class="padding-box">
        <div class="center-row2">
                    <div class="center-row2-padding4">
                        <img src="@/assets/image/leader-5.jpg" alt="Logo" class="row_1_img">
                    </div>
                    <div class="center-row2-padding2">
                        <div class="leader-name-box2">
                            <h1 class="leader-name">MR. Jeet K. Marwadi</h1>
                            <p class="leader-position">Whole Time Director</p>
                        </div>
                        <p class="paragraph2 mb-8">
                            Mr. Jeet K. Marwadi has been associated with our Company since 2017. 
                            He graduated with a degree in Economics from Loyola Marymount University based in Los Angeles,
                             California. A lifelong learner at heart, he is the Founder, Managing Director at 1 Finance and is also at the forefront of Marwadi University.
                             He has been implementing and is instrumental in bringing in new ideas and processes of positive work culture in our Company.
                        </p>
                    </div>
        </div>
    </div>
    <div class="padding-box">
        <div class="center-row2">
            <div class="center-row2-padding2">
                <div class="leader-name-box2 t-right">
                    <h1 class="leader-name">Mrs. Juhi V. Patel</h1>
                    <p class="leader-position">Non-Executive Director</p>
                </div>
                <p class="paragraph2 mb-8">
                    Mrs. Juhi V. Patel has been associated with MSFL since 2020 as a Director. She has been awarded her MSc. 
                    in Management degree from the University of Leeds, UK. At MSFL, she leads the Marketing and HR management
                     teams along with Customer Support and Centralized Dealing Desk and is actively involved in strategic planning
                      and training-related functions. She is an active board member of Pixon Energy Limited, a solar module manufacturing
                       company. She firmly believes in protecting the environment to preserve the quality of life for future generations.
                        A maverick at heart, she also invests her time in sketching the CSR activities and Marketing activities 
                        for Pixon Energy Limited and the Marwadi Group. Her people-centric approach has contributed towards
                     increased trust, transparency and accountability in different departments across the organization. 
                </p>
            </div>
            <div class="center-row2-padding4">
                <img src="@/assets/image/leader-5.jpg" alt="Logo" class="row_1_img">
            </div>
        </div>
    </div>
    <div class="padding-box">
        <div class="center-row2">
                    <div class="center-row2-padding4">
                        <img src="@/assets/image/leader-5.jpg" alt="Logo" class="row_1_img">
                    </div>
                    <div class="center-row2-padding2">
                        <div class="leader-name-box2">
                            <h1 class="leader-name">MR. Dhruv S. Marwadi</h1>
                            <p class="leader-position">Whole Time Director</p>
                        </div>
                        <p class="paragraph2 mb-8">
                            Mr. Dhruv S. Marwadi completed his Bsc Management from the University of Warwick,
                             UK, prior to joining Marwadi Financial Services as a Director in 2020. He has since
                              then been working closely on internal strategic initiatives that are directed towards
                               increasing the innovative, collaborative and productivity quotient of the company.
                                To achieve this, he has been working towards promoting employee engagement.
                                 Furthermore, he also has a keen interest in building a community of people interested in Business & Finance 
                            by sharing stories around the domain with the long-term goal of improving financial awareness among the youth of India.
                        </p>
                    </div>
        </div>
    </div>
    <div class="row1 u-center-text my-12">
            <h1 class="heading-main1">INDEPENDENT DIRECTORS</h1>
    </div>
    <div class="padding-box">
        <div class="center-row2">
                    <div class="center-row2-padding4">
                        <img src="@/assets/image/leader-5.jpg" alt="Logo" class="row_1_img">
                    </div>
                    <div class="center-row2-padding2">
                        <div class="leader-name-box2">
                            <h1 class="leader-name">Mr. Kantilal K. Khakhar</h1>
                            <p class="leader-position">Independent Director</p>
                        </div>
                        <p class="paragraph2 mb-8">
                            Mr. Kantilal K. Khakhar has been appointed to the Board of our Company since 2015 as 
                            an Independent Director. He is a retired professor at Saurashtra University and has 
                            a rich experience in financial market-related businesses. 
                            He headed the Department of Economics at Saurashtra University during the period of his service. 
                        </p>
                    </div>
        </div>
    </div>
    <div class="padding-box">
        <div class="center-row2">
            <div class="center-row2-padding2">
                <div class="leader-name-box2 t-right">
                    <h1 class="leader-name">Mr. Nareshkumar D. Jadeja</h1>
                    <p class="leader-position">Independent Director</p>
                </div>
                <p class="paragraph2 mb-8">
                    Mr. Nareshkumar D. Jadeja has been appointed to the Board of our Company 
                    since 2016 as an Independent Director. He holds Master of Engineering and 
                    Master of Science degrees from Stevens Institute of Technology, USA and 
                    has worked with the United States’ Environment Protection Agency affiliated 
                    organization for 8 years in Air, Water and Soil Analysis. He joined Gujarat Technological
                     University (GTU) as Deputy Director and was involved with the development and execution of 
                     the Student Start-up Policy, GTU Incubation Center, 
                    Community Innovation and Co-Creation Center, Bosch-Rexroth Center of Excellence, GTU Techfest, GT Motorsports team.
                </p>
            </div>
            <div class="center-row2-padding4">
                <img src="@/assets/image/leader-5.jpg" alt="Logo" class="row_1_img">
            </div>
        </div>
    </div>
    <div class="row1 u-center-text my-12">
            <h1 class="heading-main1">Key Managerial Personnel</h1>
    </div>
    <div class="padding-box">
        <div class="center-row2">
                    <div class="center-row2-padding4">
                        <img src="@/assets/image/leader-5.jpg" alt="Logo" class="row_1_img">
                    </div>
                    <div class="center-row2-padding2">
                        <div class="leader-name-box2">
                            <h1 class="leader-name">Mr. Lakhan A. Bambhaniya</h1>
                            <p class="leader-position">Chief Technology Officer</p>
                        </div>
                        <p class="paragraph2 mb-8">
                            The Chief Technology Officer (CTO) is responsible for the overall direction of
                             all technology functions associated with the enterprise.This includes Information 
                             Technology applications, communications (voice, data, and wireless) and
                             computing services within the enterprise that impacts the enterprise, its products and its customers.
                        </p>
                    </div>
        </div>
    </div>
    <div class="padding-box">
        <div class="center-row2">
            <div class="center-row2-padding2">
                <div class="leader-name-box2 t-right">
                    <h1 class="leader-name">Mr. Sanjay H. Thakrar</h1>
                    <p class="leader-position">Senior Vice President - Accounts & Finance</p>
                </div>
                <p class="paragraph2 mb-8">
                    An ICWAI graduate, Mr. Sanjay H. Thakrar supervises and controls the overall 
                    accounting functions. He is responsible for conducting internal audits, preparing 
                    monthly and quarterly financial statements, and management information reports, and 
                    supervising the internal audit team.
                </p>
            </div>
            <div class="center-row2-padding4">
                <img src="@/assets/image/leader-5.jpg" alt="Logo" class="row_1_img">
            </div>
        </div>
    </div>
    <div class="padding-box">
        <div class="center-row2">
                    <div class="center-row2-padding4">
                        <img src="@/assets/image/leader-5.jpg" alt="Logo" class="row_1_img">
                    </div>
                    <div class="center-row2-padding2">
                        <div class="leader-name-box2">
                            <h1 class="leader-name">Mr. Tushit G. Mangukiya</h1>
                            <p class="leader-position">Company Secretary</p>
                        </div>
                        <p class="paragraph2 mb-8">
                            With around two decades long experience in stock broking compliance heads the 
                            compliance team at MSFL.Responsible for ensuring corporate compliances, broking and depository 
                            compliances in accordance with the rules, regulations and circulars from exchanges, depositories and SEBI.
                        </p>
                    </div>
        </div>
    </div>
    <div class="padding-box mb-20">
        <div class="center-row2">
            <div class="center-row2-padding2">
                <div class="leader-name-box2 t-right">
                    <h1 class="leader-name">HARESH I. MANIAR</h1>
                    <p class="leader-position">Head - Business Development</p>
                </div>
                <p class="paragraph2 mb-8">
                    Mr. Haresh I. Maniar has over 35 years of experience in sales and distribution channel management 
                    with reputed companies. India and controls branch offices and the sub-brokers network. He also explores 
                    new business prospects through the expansion of B2C and
                     B2B channels. He has worked with reputed companies like Asian Paints and Pidilite Industries for more than 20 years.
                </p>
            </div>
            <div class="center-row2-padding4">
                <img src="@/assets/image/leader-5.jpg" alt="Logo" class="row_1_img">
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
.leadership-swipe.van-swipe{
    min-height: 492px;
}
.heading-main1{
        position: relative;
        margin-bottom: 30px;
        &::before{
            position: absolute;
            bottom:-12px;
            left: 50%;
            transform: translateX(-50%);
            content: '';
            width: 70px;
            height: 3px;
            background:  $color-primary-dark;
        }
    }
.who-banner{
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
    flex-direction: row;
    align-items: start;
    justify-content: center;
    max-width: $max-width-home;
    margin: 0 auto;
    &-padding{
        width: 50%;
        padding-left:10px;
    }
    .paragraph2{
        font-size: 14px;
        padding-left:20px;
        padding-right: 20px;
        text-align: justify;
    }
    .leader-name-box{
        border-left: 3px solid #007dc5;
        margin-left: 20px;
        margin-bottom: 20px;
        .leader-name{
            padding-left: 10px;
            font-weight: bold;
            font-size: 18px;
            text-transform: uppercase;
            margin-bottom: 5px;
        }
        .leader-position{
            color: #707070;
            font-size: 13px;
            padding-left: 10px;
        }
    }
    @include respond(tab-port){
        flex-direction: column;
        align-items: center;
        &-padding{
            padding: 20px;
            width: 100%;
        }
        .paragraph2{
            padding-left:0px;
            padding-right: 0px;
        }
        .leader-name-box{
            margin-left: 0px;
        }

    }
    @include respond(phone){
        &-padding{
            padding-left: 15px;
        }
    }
}
.padding-box{
    padding: 20px;
}
.center-row2{
    display: flex;
    flex-direction: row;
    align-items: start;
    justify-content: center;
    max-width: $max-width-home;
    margin: 0 auto;
    box-shadow: 0 0 12px rgb(0 0 0 / 10%);
    &-padding4{
        width: 41%;
        padding-left:0px;
    }
    &-padding2{
        width: 59%;
        padding-left:5px;
    }
    .paragraph2{
        font-size: 14px;
        padding-left:20px;
        padding-right: 20px;
        text-align: justify;
    }
    .leader-name-box2{
        // border-left: 3px solid #007dc5;
        padding-top:20px ;
        margin-left:10px;
        margin-bottom: 20px;
        .leader-name{
            padding-left: 10px;
            font-weight: bold;
            font-size: 18px;
            text-transform: uppercase;
            margin-bottom: 5px;
        }
        .leader-position{
            color: #707070;
            font-size: 13px;
            padding-left: 10px;
        }
    }
    .t-right{
        text-align: right;
        margin-right: 20px;
    }
    @include respond(tab-port){
        flex-direction: column;
        align-items: center;
        &-padding4{
            padding: 20px;
            width: 100%;
            order: 1;
        }
        &-padding2{
            padding: 20px;
            width: 100%;
            order: 2;
        }
        .paragraph2{
            padding-left:0px;
            padding-right: 0px;
        }
        .leader-name-box2{
            margin-left: 0px;
            .leader-name{
                padding-left: 0px;
            }
            .leader-position{
                padding-left: 0px;
            }

        }
        .t-right{
            text-align: left;
            margin-right: 0px;
        }

    }
    @include respond(phone){
        &-padding{
            padding-left: 15px;
        }
    }
}
</style>
