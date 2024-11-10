<template>
    <section class="who-banner">
        <img src="@/assets/image/who_we_are_banner.jpg" alt="banner" class="who-banner-bimg"/>
        <div class="who-text-box">
            <h1 class="who-text-box-title">Our History</h1>
            <p class="who-text-box-subtitle">
                <picture class="who-text-box-subtitle-icon">
                   <source srcset="@/assets/image/home_white.svg" media="(max-width: 450px)">
                    <img srcset="@/assets/image/home.svg" alt="home" class="who-text-box-subtitle-icon"/>
                </picture>
              <span style="cursor: pointer;" @click="$router.push('/home')">Home</span> &nbsp;&nbsp; :&nbsp; : &nbsp;&nbsp;Our History
            </p>
        </div>
    </section>
    <section class="wave-section">
        <div class="row1 u-center-text">
            <h1 class="heading-main1 mb-4">“Humble beginnings to great heights”</h1>
            <p class="paragraph2">
                Marwadi Shares and Finance Limited was incorporated in 1992 
                with the vision of providing superior and innovative financial services 
                to meet the emerging needs of the investor community. The Company became a corporate
                 member of the National Stock Exchange of India (NSE) in 1996 and launched depository services of Depository Participant under National Securities Depository Limited (NSDL) in 1999. In the years since, from our humble beginnings, committed to the principles of professionalism, 
                speed and ethics we have catapulted our growth to emerge amongst the leading retail broking houses in India.
            </p>
        </div>
    </section>
    <div class="row1 u-center-text mt-8">
        <h1 class="heading-main1 mb-4">OUR MILESTONES</h1>
        <h1 class="sub-title-2 mb-4">
            <span class="sub-title-2-span" style="font-weight: 700;text-transform: uppercase;">
                The company crossed the following milestones to reach its present position as the leading retail broking house in India.
            </span>
        </h1>
    </div>
    <div class="history-section">
        <van-swipe class="" :autoplay="6000" :show-indicators="true" touchable>
            <van-swipe-item v-if="is_card_deskstop">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2>
                                    <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">
                                    1992
                                </h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">
                                Marwadi Founded
                            </p>
                            <p class="paragraph2 p-text">
                                Marwadi Shares And Finance Pvt. Ltd. was incorporated by first generation 
                                Entrepreneurs Shri Ketan H. Marwadi, Shri Deven H. Marwadi and Shri Sandeep H. Marwadi.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-1.png" alt="our history 1">
                            </div>
                        </div>
                    </div>

                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2>
                                    <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">
                                    1996
                                </h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">NSE</p>
                            <p class="paragraph2 p-text">
                                Became a corporate member of the National Stock Exchange Of India - (NSE).
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-2.png" alt="our history 1">
                            </div>
                        </div>
                    </div>

                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> 
                                    <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">
                                    1998
                                </h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">SKSE</p>
                            <p class="paragraph2 p-text">
                                Became a member of the Saurashtra Kutch Stock Exchange (SKSE).
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-3.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">1999</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">NSDL</p>
                            <p class="paragraph2 p-text">
                                Launched Depository services of Depository Participants under National Depository.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-4.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_card_deskstop">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2000</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">NSE</p>
                            <p class="paragraph2 p-text">
                                Commenced Derivative Trading after obtaining registration as Clearing and Trading Member in National Stock Exchange.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-2.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2003</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">NCDEX</p>
                            <p class="paragraph2 p-text">
                                - Marwadi commodity broker pvt ltd became a corporate member of the National Commodity and Derivatives Exchange of India Ltd. (NCDEX).
                            </p>
                            <p class="paragraph2 p-text">
                                - Marwadi Commodity Broker Pvt. Ltd. becomes a corporate member of The Multi Commodity Exchange of India Ltd. (MCX).
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-5.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2004</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">BSE</p>
                            <p class="paragraph2 p-text">
                                MSFL launches depository services of Depository Participant under Central Depository Services (India) Limited.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-6.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2005</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <!-- <p class="paragraph2 p-title">BSE</p> -->
                            <p class="paragraph2 p-text">
                                MSFL launches its first online trading platforms on desktops as well as web based.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-7.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_card_deskstop">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2006</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">ICGU</p>
                            <p class="paragraph2 p-text">
                                MSFPL converted to Limited co. (Marwadi Shares And Finance Limited) The Company raised private equity from ICGU Limited, a wholly-owned subsidiary of India Capital Growth Fund.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-8.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2007</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">ICGI</p>
                            <p class="paragraph2 p-text">
                                Attracted Private Equity Investment from Reputed Investors Caledonia & ICGI.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-9.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2008</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">Dun & Bradstreet</p>
                            <p class="paragraph2 p-text">
                                Adjudged the 5th Largest Broking House by Dun & Bradstreet.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-10.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2009</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">National Spot</p>
                            <p class="paragraph2 p-text">
                                - Growing Institutional Business.
                            </p>
                            <p class="paragraph2 p-text">
                                - Moves into 90000 Square Feet State of Art Infrastructure.
                            </p>
                            <p class="paragraph2 p-text">
                                - Marwadi Commodity Broker Pvt. Ltd. Become a member of NSEL.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-11.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_card_deskstop">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2011</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">MSFL Application</p>
                            <p class="paragraph2 p-text">
                                MSFL launches its first mobile trading application.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-12.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2015</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">Banking License</p>
                            <p class="paragraph2 p-text">
                                Obtained Merchant Banking License.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-15.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2017</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">Celebrating 25th Year</p>
                            <p class="paragraph2 p-text">
                                - MSFL launches ‘MSFL Connect’ the latest Mobile trading application.
                            </p>
                            <p class="paragraph2 p-text">
                                - MSFL launches ‘Marwadi Click’ the latest web-based trading platform.
                            </p>
                            <p class="paragraph2 p-text">
                                - Marwadi Group completes 25 years in the financial services business.
                            </p>
                            <p class="paragraph2 p-text">
                                - MCBPL has taken membership in ICEX in 2017 and active broker of a diamond derivative contract.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-13.jpg" alt="our history 1">
                            </div>
                        </div>
                    </div>
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2021</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <!-- <p class="paragraph2 p-title">Celebrating 25th Year</p> -->
                            <p class="paragraph2 p-text">
                                Marwadi Shares and Finance Ltd. was certified as a great place to work during the year 2021-22.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-14.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_tab">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2>
                                    <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">
                                    1992
                                </h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">
                                Marwadi Founded
                            </p>
                            <p class="paragraph2 p-text">
                                Marwadi Shares And Finance Pvt. Ltd. was incorporated by first generation 
                                Entrepreneurs Shri Ketan H. Marwadi, Shri Deven H. Marwadi and Shri Sandeep H. Marwadi.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-1.png" alt="our history 1">
                            </div>
                        </div>
                    </div>

                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2>
                                    <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">
                                    1996
                                </h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">NSE</p>
                            <p class="paragraph2 p-text">
                                Became a corporate member of the National Stock Exchange Of India - (NSE).
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-2.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_tab">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> 
                                    <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">
                                    1998
                                </h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">SKSE</p>
                            <p class="paragraph2 p-text">
                                Became a member of the Saurashtra Kutch Stock Exchange (SKSE).
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-3.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">1999</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">NSDL</p>
                            <p class="paragraph2 p-text">
                                Launched Depository services of Depository Participants under National Depository.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-4.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_tab">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2000</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">NSE</p>
                            <p class="paragraph2 p-text">
                                Commenced Derivative Trading after obtaining registration as Clearing and Trading Member in National Stock Exchange.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-2.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2003</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">NCDEX</p>
                            <p class="paragraph2 p-text">
                                - Marwadi commodity broker pvt ltd became a corporate member of the National Commodity and Derivatives Exchange of India Ltd. (NCDEX).
                            </p>
                            <p class="paragraph2 p-text">
                                - Marwadi Commodity Broker Pvt. Ltd. becomes a corporate member of The Multi Commodity Exchange of India Ltd. (MCX).
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-5.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_tab">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2004</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">BSE</p>
                            <p class="paragraph2 p-text">
                                MSFL launches depository services of Depository Participant under Central Depository Services (India) Limited.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-6.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2005</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <!-- <p class="paragraph2 p-title">BSE</p> -->
                            <p class="paragraph2 p-text">
                                MSFL launches its first online trading platforms on desktops as well as web based.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-7.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_tab">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2006</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">ICGU</p>
                            <p class="paragraph2 p-text">
                                MSFPL converted to Limited co. (Marwadi Shares And Finance Limited) The Company raised private equity from ICGU Limited, a wholly-owned subsidiary of India Capital Growth Fund.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-8.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2007</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">ICGI</p>
                            <p class="paragraph2 p-text">
                                Attracted Private Equity Investment from Reputed Investors Caledonia & ICGI.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-9.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_tab">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2008</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">Dun & Bradstreet</p>
                            <p class="paragraph2 p-text">
                                Adjudged the 5th Largest Broking House by Dun & Bradstreet.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-10.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2009</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">National Spot</p>
                            <p class="paragraph2 p-text">
                                - Growing Institutional Business.
                            </p>
                            <p class="paragraph2 p-text">
                                - Moves into 90000 Square Feet State of Art Infrastructure.
                            </p>
                            <p class="paragraph2 p-text">
                                - Marwadi Commodity Broker Pvt. Ltd. Become a member of NSEL.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-11.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_tab">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2011</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">MSFL Application</p>
                            <p class="paragraph2 p-text">
                                MSFL launches its first mobile trading application.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-12.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2015</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">Banking License</p>
                            <p class="paragraph2 p-text">
                                Obtained Merchant Banking License.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-15.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_tab">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2017</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">Celebrating 25th Year</p>
                            <p class="paragraph2 p-text">
                                - MSFL launches ‘MSFL Connect’ the latest Mobile trading application.
                            </p>
                            <p class="paragraph2 p-text">
                                - MSFL launches ‘Marwadi Click’ the latest web-based trading platform.
                            </p>
                            <p class="paragraph2 p-text">
                                - Marwadi Group completes 25 years in the financial services business.
                            </p>
                            <p class="paragraph2 p-text">
                                - MCBPL has taken membership in ICEX in 2017 and active broker of a diamond derivative contract.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-13.jpg" alt="our history 1">
                            </div>
                        </div>
                    </div>
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2021</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <!-- <p class="paragraph2 p-title">Celebrating 25th Year</p> -->
                            <p class="paragraph2 p-text">
                                Marwadi Shares and Finance Ltd. was certified as a great place to work during the year 2021-22.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-14.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_mobile">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2>
                                    <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">
                                    1992
                                </h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">
                                Marwadi Founded
                            </p>
                            <p class="paragraph2 p-text">
                                Marwadi Shares And Finance Pvt. Ltd. was incorporated by first generation 
                                Entrepreneurs Shri Ketan H. Marwadi, Shri Deven H. Marwadi and Shri Sandeep H. Marwadi.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-1.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_mobile">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2>
                                    <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">
                                    1996
                                </h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">NSE</p>
                            <p class="paragraph2 p-text">
                                Became a corporate member of the National Stock Exchange Of India - (NSE).
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-2.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_mobile">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> 
                                        <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">
                                        1998
                                </h2>
                            </div>
                            </div>
                            <div class="our-history-card-box-border"></div>
                            <div class="our-history-card-box-content">
                                <p class="paragraph2 p-title">SKSE</p>
                                <p class="paragraph2 p-text">
                                    Became a member of the Saurashtra Kutch Stock Exchange (SKSE).
                                </p>
                                <div class="logo-img">
                                    <img src="@/assets/image/history-img-3.png" alt="our history 1">
                                </div>
                            </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_mobile">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">1999</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">NSDL</p>
                            <p class="paragraph2 p-text">
                                Launched Depository services of Depository Participants under National Depository.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-4.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_mobile">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2000</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">NSE</p>
                            <p class="paragraph2 p-text">
                                Commenced Derivative Trading after obtaining registration as Clearing and Trading Member in National Stock Exchange.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-2.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_mobile">
                <div class="our-history-card-box">
                    <div class="our-history-card">
            <div class="our-history-card-box-year">
                <div class="our-history-card-box-year-title">
                    <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2003</h2>
                </div>
            </div>
            <div class="our-history-card-box-border"></div>
            <div class="our-history-card-box-content">
                <p class="paragraph2 p-title">NCDEX</p>
                <p class="paragraph2 p-text">
                    - Marwadi commodity broker pvt ltd became a corporate member of the National Commodity and Derivatives Exchange of India Ltd. (NCDEX).
                </p>
                <p class="paragraph2 p-text">
                    - Marwadi Commodity Broker Pvt. Ltd. becomes a corporate member of The Multi Commodity Exchange of India Ltd. (MCX).
                </p>
                <div class="logo-img">
                    <img src="@/assets/image/history-img-5.png" alt="our history 1">
                </div>
            </div>
        </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_mobile">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2004</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">BSE</p>
                            <p class="paragraph2 p-text">
                                MSFL launches depository services of Depository Participant under Central Depository Services (India) Limited.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-6.png" alt="our history 1">
                            </div>
                        </div>
            </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_mobile">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2005</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <!-- <p class="paragraph2 p-title">BSE</p> -->
                            <p class="paragraph2 p-text">
                                MSFL launches its first online trading platforms on desktops as well as web based.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-7.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_mobile">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2006</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">ICGU</p>
                            <p class="paragraph2 p-text">
                                MSFPL converted to Limited co. (Marwadi Shares And Finance Limited) The Company raised private equity from ICGU Limited, a wholly-owned subsidiary of India Capital Growth Fund.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-8.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_mobile">
                <div class="our-history-card-box">
                    <div class="our-history-card">
            <div class="our-history-card-box-year">
                <div class="our-history-card-box-year-title">
                    <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2007</h2>
                </div>
            </div>
            <div class="our-history-card-box-border"></div>
            <div class="our-history-card-box-content">
                <p class="paragraph2 p-title">ICGI</p>
                <p class="paragraph2 p-text">
                    Attracted Private Equity Investment from Reputed Investors Caledonia & ICGI.
                </p>
                <div class="logo-img">
                    <img src="@/assets/image/history-img-9.png" alt="our history 1">
                </div>
            </div>
        </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_mobile">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2008</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">Dun & Bradstreet</p>
                            <p class="paragraph2 p-text">
                                Adjudged the 5th Largest Broking House by Dun & Bradstreet.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-10.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_mobile">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2009</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">National Spot</p>
                            <p class="paragraph2 p-text">
                                - Growing Institutional Business.
                            </p>
                            <p class="paragraph2 p-text">
                                - Moves into 90000 Square Feet State of Art Infrastructure.
                            </p>
                            <p class="paragraph2 p-text">
                                - Marwadi Commodity Broker Pvt. Ltd. Become a member of NSEL.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-11.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_mobile">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2011</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">MSFL Application</p>
                            <p class="paragraph2 p-text">
                                MSFL launches its first mobile trading application.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-12.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_mobile">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2015</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">Banking License</p>
                            <p class="paragraph2 p-text">
                                Obtained Merchant Banking License.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-15.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_mobile">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2017</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <p class="paragraph2 p-title">Celebrating 25th Year</p>
                            <p class="paragraph2 p-text">
                                - MSFL launches ‘MSFL Connect’ the latest Mobile trading application.
                            </p>
                            <p class="paragraph2 p-text">
                                - MSFL launches ‘Marwadi Click’ the latest web-based trading platform.
                            </p>
                            <p class="paragraph2 p-text">
                                - Marwadi Group completes 25 years in the financial services business.
                            </p>
                            <p class="paragraph2 p-text">
                                - MCBPL has taken membership in ICEX in 2017 and active broker of a diamond derivative contract.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-13.jpg" alt="our history 1">
                            </div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_mobile">
                <div class="our-history-card-box">
                    <div class="our-history-card">
                        <div class="our-history-card-box-year">
                            <div class="our-history-card-box-year-title">
                                <h2> <img src="@/assets/image/calendar.png" class="calendar-img" alt="our history 1">2021</h2>
                            </div>
                        </div>
                        <div class="our-history-card-box-border"></div>
                        <div class="our-history-card-box-content">
                            <!-- <p class="paragraph2 p-title">Celebrating 25th Year</p> -->
                            <p class="paragraph2 p-text">
                                Marwadi Shares and Finance Ltd. was certified as a great place to work during the year 2021-22.
                            </p>
                            <div class="logo-img">
                                <img src="@/assets/image/history-img-14.png" alt="our history 1">
                            </div>
                        </div>
                    </div>
                </div>
            </van-swipe-item>
        </van-swipe>
    </div>
    <div class="testimonial-section">
        <div class="row1 u-center-text">
            <h1 class="sub-title-2">Our Success</h1>
            <h1 class="heading-main1">AWARDS AND RECOGNITION</h1>
        </div>
        <div class="row1">
        <van-swipe class="" :autoplay="6000" :show-indicators="true" touchable>
            <van-swipe-item v-if="is_card_deskstop">
                <div class="testimonial-card-box">
                    <div class="testimonial-card">
                        <img src="@/assets/image/award_img_1.jpg" alt="testimonial-img" class="testimonial-card-img">
                        <p class="testimonial-card-title">MCX Awards - Leading Member Algo Trading -2023 </p>
                    </div>
                    <div class="testimonial-card">
                        <img src="@/assets/image/award_img_2.jpg" alt="testimonial-img" class="testimonial-card-img">
                        <p class="testimonial-card-title">NCDEX Commodity Awards - 2023</p>
                    </div>
                    <div class="testimonial-card">
                        <img src="@/assets/image/award_img_3.jpg" alt="testimonial-img" class="testimonial-card-img">
                        <p class="testimonial-card-title">Over 150 Million Contracts Traded on Expiry Date - 2023</p>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item v-if="is_card_deskstop">
                <div class="testimonial-card-box">
                    <div class="testimonial-card">
                        <img src="@/assets/image/award_img_4.jpg" alt="testimonial-img" class="testimonial-card-img">
                        <p class="testimonial-card-title">Best Brands Broking Services (West) -2023 </p>
                    </div>
                    <div class="testimonial-card">
                        <img src="@/assets/image/award_img_5.jpg" alt="testimonial-img" class="testimonial-card-img">
                        <p class="testimonial-card-title">Best Performing Member Commodity Segment -2023 </p>
                    </div>
                    <div class="testimonial-card">
                        <img src="@/assets/image/award_img_6.jpg" alt="testimonial-img" class="testimonial-card-img">
                        <p class="testimonial-card-title">Top Performer In SLB Segment  -2018 </p>
                    </div>
                </div>  
            </van-swipe-item>
            <van-swipe-item v-if="is_card_deskstop">
                <div class="testimonial-card-box">
                    <div class="testimonial-card">
                        <img src="@/assets/image/award_img_7.jpg" alt="testimonial-img" class="testimonial-card-img">
                        <p class="testimonial-card-title">Market Ka Eklavya  -2022 </p>
                    </div>
                    <div class="testimonial-card">
                        <img src="@/assets/image/award_img_8.jpg" alt="testimonial-img" class="testimonial-card-img">
                        <p class="testimonial-card-title">MCX Awards -2022 </p>
                    </div>
                    <div class="testimonial-card">
                        <img src="@/assets/image/award_img_9.jpg" alt="testimonial-img" class="testimonial-card-img">
                        <p class="testimonial-card-title">CEO Insights Magazine 'Top 10 Best Brands in Finance'  -2022 </p>
                    </div>
                </div>  
            </van-swipe-item>
            <van-swipe-item v-if="is_card_deskstop">
                <div class="testimonial-card-box">
                    <div class="testimonial-card">
                        <img src="@/assets/image/award_img_10.jpg" alt="testimonial-img" class="testimonial-card-img">
                        <p class="testimonial-card-title">Best Performers in SLB   -2021 </p>
                    </div>
                    <div class="testimonial-card">
                        <img src="@/assets/image/award_img_11.jpg" alt="testimonial-img" class="testimonial-card-img">
                        <p class="testimonial-card-title">SIP Superstar  -2021 </p>
                    </div>
                    <div class="testimonial-card">
                        <img src="@/assets/image/award_img_1.jpg" alt="testimonial-img" class="testimonial-card-img">
                        <p class="testimonial-card-title">MCX Awards - Leading Member Algo Trading   -2023 </p>
                    </div>
                </div>  
            </van-swipe-item>
            <van-swipe-item  v-if="!is_card_deskstop">
                <div class="testimonial-card-box">
                    <div class="testimonial-card">
                            <img src="@/assets/image/award_img_1.jpg" alt="testimonial-img" class="testimonial-card-img">
                            <p class="testimonial-card-title">MCX Awards - Leading Member Algo Trading -2023 </p>
                    </div>
                </div>
            </van-swipe-item>
                <van-swipe-item  v-if="!is_card_deskstop">
                <div class="testimonial-card-box">
                    <div class="testimonial-card">
                            <img src="@/assets/image/award_img_2.jpg" alt="testimonial-img" class="testimonial-card-img">
                        <p class="testimonial-card-title">NCDEX Commodity Awards - 2023</p>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item  v-if="!is_card_deskstop">
                <div class="testimonial-card-box">
                    <div class="testimonial-card">
                        <img src="@/assets/image/award_img_3.jpg" alt="testimonial-img" class="testimonial-card-img">
                    <p class="testimonial-card-title">Over 150 Million Contracts Traded on Expiry Date - 2023</p>
                </div>
                </div>
            </van-swipe-item>
            <van-swipe-item  v-if="!is_card_deskstop">
                <div class="testimonial-card-box">
                    <div class="testimonial-card">
                        <img src="@/assets/image/award_img_4.jpg" alt="testimonial-img" class="testimonial-card-img">
                        <p class="testimonial-card-title">Best Brands Broking Services (West) -2023 </p>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item  v-if="!is_card_deskstop">
                <div class="testimonial-card-box">
                    <div class="testimonial-card">
                        <img src="@/assets/image/award_img_5.jpg" alt="testimonial-img" class="testimonial-card-img">
                        <p class="testimonial-card-title">Best Performing Member Commodity Segment -2023 </p>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item  v-if="!is_card_deskstop">
                <div class="testimonial-card-box">
                    <div class="testimonial-card">
                        <img src="@/assets/image/award_img_6.jpg" alt="testimonial-img" class="testimonial-card-img">
                        <p class="testimonial-card-title">Top Performer In SLB Segment  -2018 </p>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item  v-if="!is_card_deskstop">
                <div class="testimonial-card-box">
                    <div class="testimonial-card">
                        <img src="@/assets/image/award_img_7.jpg" alt="testimonial-img" class="testimonial-card-img">
                        <p class="testimonial-card-title">Market Ka Eklavya  -2022 </p>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item  v-if="!is_card_deskstop">
                <div class="testimonial-card-box">
                    <div class="testimonial-card">
                        <img src="@/assets/image/award_img_8.jpg" alt="testimonial-img" class="testimonial-card-img">
                        <p class="testimonial-card-title">MCX Awards -2022 </p>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item  v-if="!is_card_deskstop">
                <div class="testimonial-card-box">
                    <div class="testimonial-card">
                        <img src="@/assets/image/award_img_9.jpg" alt="testimonial-img" class="testimonial-card-img">
                        <p class="testimonial-card-title">CEO Insights Magazine 'Top 10 Best Brands in Finance'  -2022 </p>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item  v-if="!is_card_deskstop">
                <div class="testimonial-card-box">
                    <div class="testimonial-card">
                        <img src="@/assets/image/award_img_10.jpg" alt="testimonial-img" class="testimonial-card-img">
                        <p class="testimonial-card-title">Best Performers in SLB   -2021 </p>
                    </div>
                </div>
            </van-swipe-item>
            <van-swipe-item  v-if="!is_card_deskstop">
                <div class="testimonial-card-box">
                    <div class="testimonial-card">
                        <img src="@/assets/image/award_img_11.jpg" alt="testimonial-img" class="testimonial-card-img">
                        <p class="testimonial-card-title">SIP Superstar  -2021 </p>
                    </div>
                </div>
            </van-swipe-item>
        </van-swipe>
        </div>

    </div>
</template>
<script setup>
const is_card_deskstop=ref(window.innerWidth > 901 ? true : false)
const is_tab=ref(window.innerWidth > 601 && window.innerWidth < 901 ? true : false)
const is_mobile=ref(window.innerWidth < 601 ? true : false)
const updateHeight = () => {
    is_mobile.value = window.innerWidth < 601 ? true : false
    is_tab.value = window.innerWidth > 601 && window.innerWidth < 901 ? true : false
    is_card_deskstop.value = window.innerWidth > 901 ? true : false
}

onMounted(() => {
    window.addEventListener('resize', updateHeight)
})

onUnmounted(() => {
    window.removeEventListener('resize', updateHeight)
})
</script>
<style lang="scss" scoped>
.wave-section{
    width: 100%;
    position: relative;
    height: 287px;
    background-image: url('@/assets/image/about_wave.png'),linear-gradient(#ebf3f8,#ebf3f8);
    background-size: cover;
    background-repeat: no-repeat;
    padding:30px 0px 15px 0px;
    margin-bottom: 40px;
    .heading-main1{
        position: relative;
        &::before{
            position: absolute;
            bottom:-20px;
            left: 50%;
            transform: translateX(-50%);
            content: '';
            width: 70px;
            height: 3px;
            background:  $color-primary-dark;
        }
    }
    .paragraph2{
        margin-top: 45px;
    }
    @include respond(tab-port){
        padding:15px 0px 0px 0px;
    }
    @include respond(phone){
        height:485px;
        padding:10px 0px 0px 0px;
        .paragraph2{
            text-align: center;
            font-size: 14px;
            margin-top: 25px;
        }
    }
}
.testimonial-section{
    width: 100%;
    padding: 40px 0px 0px 0px;
    height: 767px;
    background-image: url('@/assets/image/awards_bg.png'),linear-gradient(#0078bf,#0078bf);
    background-size: cover;
    background-repeat: no-repeat;
    .heading-main1{
        color: $color-white;
        margin-bottom: 35px;
    }
    .sub-title-2{
        color: $color-white;
        width: 70%;
        margin: 0 auto;
        margin-bottom: 0px;
        &::before{
            bottom:-55px;
            background-color: #fff;
            
        }
    }
    .van-swipe{
        height: 560px;
        @include respond(phone-xs){
            height: 485px;
        }
        
    }
    .testimonial-card-box{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        justify-content: space-between;
        .testimonial-card{
            padding: 0px;
            position: relative;
            max-width: 360px;
            width: 32vw;
            height: 440px;
            background: linear-gradient(0deg, rgba(0, 120, 191, 1) 0%, rgba(137, 211, 255, 1) 100%);
            border: 1px solid #0281cd;
            &-p{
                margin-top: 10px;
                text-align: left;
                color: $color-black;
                font-family: Roboto;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
                line-height: 25px; 
            }
            &-title{
                height: 80px;
                display: flex;
                color: #FFF;
                font-weight: bold;
                font-size: 17px;
                text-align: center;
                line-height: 30px;
                align-items: center;
                justify-content: center ;
                padding: 0px 20px; 
            }
            &-name{
                margin-top: 10px;
                text-align: center;
                color: $color-grey-light-1;
                font-family: Roboto;
                font-size: 13px;
                font-style: normal;
                font-weight: 400;
                line-height: 19.5px; 
            }
            &-img{
                position: relative;
                width: 100%;
            }
        }
    }
    @include respond(tab-port){
        .testimonial-card-box{
            justify-content: center;
            .testimonial-card{
                width: 100%;
            }
        }
    }
    @include respond(phone-xs){
        .testimonial-card-box{
            .testimonial-card{
                height: 425px;
            }
        }
    }
}
.history-section{
    width: 100%;
    max-width: $max-width-home;
    margin: 0 auto;
    margin-top: 35px;
    .van-swipe{
        min-height: 750px;
        @include respond(tab-port){
            min-height: 770px;
        }
        @include respond(phone){
            min-height: 680px;
        }
        
    }
}
.our-history-card-box{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    .our-history-card{
        position: relative;
        width: 25%;
        // height: 500px;
        // border:1px solid #002840;
        &-box-year{
            position: relative;
            &-title{
                max-width: 100% ;
                line-height: 30px;
                border: 1px solid #d0edff;
                background-color: #eaf2f7;
                width: 153px;
                margin: 0px auto;
                h2{
                    font-size: 26px;
                    color: $color-black;
                    font-weight: 600;
                    font-family: 'Oswald', sans-serif;
                    text-align: center;
                    padding: 10px 0px;
                    vertical-align: middle;
                }
                .calendar-img{
                    display: inline-block;
                    margin-top: -8px;
                    margin-right: 5px;
                }

            }
            &:before{
                position: absolute;
                content: ' ';
                top: 53px;
                height: 95px;
                width: 1px;
                background-color: #dddddd;
                display: block;
                margin: 0px auto;
                left: 0;
                right: 0;
            }
            &:after{
                position: absolute;
                content: ' ';
                bottom: -52px;
                left: 50%;
                margin-left: -9px;
                height: 17px;
                width: 17px;
                z-index: 1;
                border-radius: 50px;
                background-color: #dddddd;
            }
        }
        &-box-border {
            position: relative;
            margin: 43px 0 39px;
            border-bottom: 2px dashed #dddddd;
            width: 100%;
        }
        &-box-content{
            box-shadow: 0 0 12px rgb(0 0 0 / 10%);
            margin: 50px 20px 20px;
            padding: 25px 15px;
            background-color: #FFF;
            .p-title{
                font-weight: 700;
                line-height: 25px;
                margin-bottom: 16px;
                margin-top: 20px;
            }
            .p-text{
                line-height: 25px;
                margin-bottom: 16px;
            }
            .paragraph2{
                text-align: center;
            }
            .logo-img{
                text-align: center;
                img{
                    margin: 0 auto;
                }
            }
        }
        @include respond(tab-port){
            width: 50%;
        }
        @include respond(phone){
            width: 100%;
        }
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

</style>
