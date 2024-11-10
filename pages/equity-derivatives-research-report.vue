<template>
    <section class="who-banner">
     <img src="@/assets/image/report_bg.jpg" alt="banner" class="who-banner-bimg"/>
     <div class="who-text-box">
         <h1 class="who-text-box-title">Equity & Derivatives</h1>
         <p class="who-text-box-subtitle">
             <picture class="who-text-box-subtitle-icon">
                <source srcset="@/assets/image/home_white.svg" media="(max-width: 450px)">
                 <img srcset="@/assets/image/home.svg" alt="home" class="who-text-box-subtitle-icon"/>
             </picture>
           <span style="cursor: pointer;" @click="$router.push('/home')">Home</span> &nbsp;&nbsp; :&nbsp; : &nbsp;&nbsp;Equity & Derivatives
         </p>
     </div>
    </section>
    <div class="row1 u-center-text">
            <h1 class="heading-main1">Download Research Reports</h1>
    </div>
    <div class="tab-button-container">
        <div v-for="tab in tabList" :key="tab" :class="['tab-button', {active: activeTab === tab}]" @click="activeTab = tab">{{tab}}</div>
    </div>
    <div class="tab-content">
        <div v-if="activeTab === 'daily'">
            <div v-for="(reports, month) in dataList_daily" :key="month">
                <div class="row1 u-center-text">
                    <h1 class="date-title">{{ month }}</h1>
                </div>
                <div class="row1 u-center-text">
                    <div v-for="report in reports" :key="report.date" class="col-1-of-4">
                        <div class="pdf-button" @click="downloadPdf(report.pdf)">
                            <p>
                                <img src="@/assets/image/pdf_n_icon.png" class="pdf-icon" alt="pdf">
                                Equity Market Radiance {{ report.date }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="activeTab === 'weekly'">
            <div v-for="(reports, month) in dataList_weekly" :key="month">
                <div class="row1 u-center-text">
                    <h1 class="date-title">{{ month }}</h1>
                </div>
                <div class="row1 u-center-text">
                    <div v-for="report in reports" :key="report.date" class="col-1-of-4">
                        <div class="pdf-button" @click="downloadPdf(report.pdf)">
                            <p>
                                <img src="@/assets/image/pdf_n_icon.png" class="pdf-icon" alt="pdf">
                                Weekly Market Vision {{ report.date }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="activeTab === 'monthly'">
            <div v-for="(reports, month) in dataList_monthly" :key="month">
                <div class="row1 u-center-text">
                    <h1 class="date-title">{{ month }}</h1>
                </div>
                <div class="row1 u-center-text">
                    <div v-for="report in reports" :key="report.date" class="col-1-of-4">
                        <div class="pdf-button" @click="downloadPdf(report.pdf)">
                            <p>
                                <img src="@/assets/image/pdf_n_icon.png" class="pdf-icon" alt="pdf">
                                Rollover Report {{ report.date }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="activeTab === 'fundamental'">
            <div v-for="(reports, month) in dataList_fundamental" :key="month">
                <div class="row1 u-center-text">
                    <h1 class="date-title">{{ month }}</h1>
                </div>
                <div class="row1 u-center-text">
                    <div v-for="report in reports" :key="report.date" class="col-1-of-4">
                        <div class="pdf-button" @click="downloadPdf(report.pdf)">
                            <p>
                                <img src="@/assets/image/pdf_n_icon.png" class="pdf-icon" alt="pdf">
                                IPO NOTE - Swiggy Ltd {{ report.date }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="activeTab === 'occassional'">
            <div v-for="(reports, month) in dataList_occassional" :key="month">
                <div class="row1 u-center-text">
                    <h1 class="date-title">{{ month }}</h1>
                </div>
                <div class="row1 u-center-text">
                    <div v-for="report in reports" :key="report.date" class="col-1-of-4">
                        <div class="pdf-button" @click="downloadPdf(report.pdf)">
                            <p>
                                <img src="@/assets/image/pdf_n_icon.png" class="pdf-icon" alt="pdf">
                                Diwali Fundamental Pick {{ report.date }}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
const activeTab = ref('daily');
const tabList = ref(['daily', 'weekly', 'monthly','fundamental','occassional']);
const dataList_daily = ref({
    "November 2024": [
        {
            date: '07.11.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '06.11.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '05.11.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '04.11.2024',
            pdf: '/sample_pdf.pdf'
        }
    ],
    "October 2024": [
        {
            date: '31.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '29.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '27.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '25.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '23.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '21.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '19.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '17.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '15.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '13.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '11.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '09.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '07.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '05.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '03.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '01.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '31.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '31.10.2024',
            pdf: '/sample_pdf.pdf'
        },
    ]
});
const dataList_weekly = ref({
    "November 2024": [
        {
            date: '07.11.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '06.11.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '05.11.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '04.11.2024',
            pdf: '/sample_pdf.pdf'
        }
    ],
    "October 2024": [
        {
            date: '15.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '13.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '11.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '09.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '07.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '05.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '03.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '01.10.2024',
            pdf: '/sample_pdf.pdf'
        }
    ]
});
const dataList_monthly = ref({
    "November 2024": [
        {
            date: '07.11.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '06.11.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '05.11.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '04.11.2024',
            pdf: '/sample_pdf.pdf'
        }
    ],
    "October 2024": [
        {
            date: '15.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '13.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '11.10.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '09.10.2024',
            pdf: '/sample_pdf.pdf'
        },
    ]
});
const dataList_fundamental = ref({
    "November 2024": [
        {
            date: '07.11.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '07.11.2024',
            pdf: '/sample_pdf.pdf'
        }
    ],
    "June 2024": [
        {
            date: '07.11.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '07.11.2024',
            pdf: '/sample_pdf.pdf'
        }
    ]
});
const dataList_occassional = ref({
    "November 2024": [
        {
            date: '07.11.2024',
            pdf: '/sample_pdf.pdf'
        }
    ],
    "May 2024": [
        {
            date: '07.11.2024',
            pdf: '/sample_pdf.pdf'
        },
        {
            date: '07.11.2024',
            pdf: '/sample_pdf.pdf'
        }
    ]
});

const downloadPdf = (pdfUrl) => {
    window.open(pdfUrl, '_blank');
};

</script>
<style lang="scss" scoped>
.tab-content{
    .pdf-button{
        background-image: url('@/assets/image/pdf_bg.png');
        background-color: #ebf3f8;
        padding: 17px 0px;
        border-radius: 5px;
        background-size: 100% 100%;
        margin:0px 10px 30px 10px;
        background-position: center center;
        text-align: center;
        background-repeat: no-repeat;
        cursor: pointer;
        position: relative;
        .pdf-icon{
            display: inline-block;
            width: 20px;
            margin-right: 10px;
        }
        p{
            font-size: 16px;
            color: #111111;
            font-weight: 600;
            font-family: 'Roboto', sans-serif;
            position: relative;
            display: inline-block;
            width: 90%;
        }
        &:hover{
            p{
                color: #007dc5;
            }
        }
        @include respond(650px){
            margin:0px 7px 10px 7px;
        }
    }
}
.date-title{
    font-family: 'Oswald', sans-serif;
    font-weight: 600;
    font-size: 18px;
    margin: 15px;
}
.tab-button-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
    padding: 10px 0px;
    @include respond(650px){
        padding: 5px;
    }
    .tab-button{
        min-width: 110px;
        color: #fff;
        background-color: #cdcdcd;
        border-radius: 5px;
        padding: 9px 20px;
        text-align: center;
        text-transform: capitalize;
        font-size: 15px;
        margin: 0px 20px;
        transition: all 0.3s ease;
        cursor: pointer;
        @include respond(650px){
            min-width: 90px;
            padding: 7px 12px;
            margin: 5px 10px;
            font-size: 13px;
        }
        @include respond(450px){
            width: 90px; // Changed to fixed width
            height: 35px; // Added fixed height
            padding: 0; // Removed padding to use height
            margin: 3px 5px;
            font-size: 12px;
            display: flex; // Added flex to center content vertically
            align-items: center;
            justify-content: center;
        }
        &:hover{
            background-color: #007dc5;
            color: #fff;
        }
        &.active{
            background-color: #007dc5;
            color: #fff;
        }
    }
}
.heading-main1{
    font-size:28px;
    margin-bottom: 20px;
    @include respond(tab-land){
        font-size: 22px;
        margin-bottom: 0px;
    }
} 
.who-banner{
 width: 100%;
 height: auto;
 position: relative;
 margin-bottom: 15px;
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
