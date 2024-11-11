<template>
  <NewsLetter/>
  <noticeBar style="margin-bottom: 0px;" :phoneHeight="'85px'" :padding="'0 0px'" :barMaxWidth="'100%'" :bgColor="'#2A333D'" :speed="100">
        <template #left_custom>
            <div class="notice-left-footer">
                <p>Attention Investors :</p>
            </div>
        </template>
        <template #default_custom>
            <p class="notice-text-1">
                Prevent Unauthorised transactions in your account. Update your 
                mobile numbers/email IDs with your stock brokers. Receive information 
                of your transactions directly from Exchange on your mobile/email 
                at the end of the day..... Issued in the interest of investors. | 
                KYC is one time exercise while dealing in securities markets - 
                once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), 
                you need not undergo the same process again when you approach another intermediary. 
                |We do proprietary trading occasionally |Stock Brokers can accept securities as margin 
                from clients only by way of pledge in the depository system w.e.f. September 01, 2020. |Check your securities / MF / bonds 
                in the consolidated account statement issued by NSDL/CDSL every month ........... Issued in the interest of Investors.
            </p>
        </template>
    </noticeBar>
  <div class="footer clear-both py-20"> 
    <div class="container mx-auto text-white">
      <!-- <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-40">     -->
        To fund the Algo-based arbitrage/jobbing business activities of the Company.
      <!-- footer data sections of 4 columns -->
      <div class="grid grid-cols-12">
        <div class="col-span-12 md:col-span-6 lg:col-span-3 p-8">
          <h2 class="text-pretty lg:text-6xl uppercase tracking-tight text-white sm:text-3xl pb-2 font-bold">marwadi</h2>
          <p class="tracking-widest -mt-3 uppercase text-1xl">financial services</p>        

            <ul class="list-none leading-loose py-8">
              <li>Our success as a financial services</li>
              <li>company speaks for itself.</li>
            </ul>
            
            <ul class="flex justify-between pr-8">
              <li v-for="appstorelink in storelinks" class="mr-4 py-4">
                <img :src="appstorelink.icon_path" :key="appstorelink.id" alt="logo" class="w-80 inline-block just"/>
              </li>
            </ul>
            
            <ul class="flex justify-between pr-8 py-8">
              <li v-for="social in socialList">
                <a :href="social.url">
                  <img :src="social.icon_path" :key="social.id" alt="logo" class="inline-block"/>
                </a>
              </li>
            </ul>
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-3 p-8">
          <h2 class="text-pretty text-2xl font-semibold tracking-tight text-white sm:text-3xl pb-8">Quick Links</h2>
          <ul class="w-96 text-surface dark:text-white">
            <li class="w-full py-2"
              v-for="list2 in col2ListItem"
              :key="list2.id"
            >
              {{ list2.name }}
            </li>
          </ul>
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-2 p-8">
          <h2 class="text-pretty text-2xl font-semibold tracking-tight text-white sm:text-3xl pb-8">Quick Links</h2>
          <ul class="w-96 text-surface dark:text-white">
            <li class="w-full py-2"
              v-for="list3 in col3ListItem"
              :key="list3.id"
            >
              {{ list3.name }}
            </li>
          </ul>
        </div>
        <div class="col-span-12 md:col-span-6 lg:col-span-4 py-8 pl-8 w-full sm:col-span-12">
          <h2 class="text-pretty text-2xl font-semibold tracking-tight text-white sm:text-3xl pb-2">Contact Us</h2>        
          
          <div class="relative mt-8 gap-x-4">          
            <img src="@/assets/image/office_ico.png" alt="logo" class="float-left">
            <div class="ml-24">
              <h2 class="text-pretty text-2xl font-semibold tracking-tight text-white sm:text-2xl pb-4 mt-4">Corporate Office</h2>
              <p class="font-semibold text-gray-900">
                <ul class="list-none leading-loose">
                  <li>Marwadi Shares and Finance Limited</li>
                  <li>Marwadi Financial Plaza, Nana Mava Main</li>
                  <li>Road, Off 150 Feet Ring Road, Rajkot- 360001,</li>
                  <li>Gujarat (India) PHONE : +91 9988861331,</li>
                  <li>Email: mewd1992@gmail.com</li>
                </ul>
              </p>
            </div>
          </div>

          <div class="relative mt-8 gap-x-4">          
            <img src="@/assets/image/office_ico.png" alt="logo" class="float-left"/>
            <div class="ml-24">
              <h2 class="text-pretty text-2xl font-semibold tracking-tight text-white sm:text-2xl">Corporate Office</h2>
              <p class="font-semibold text-gray-900">
                <ul class="list-none leading-loose">
                  <li>X – Change Plaza, Office No. 1201 to 1205,</li>
                  <li>12th Floor, Building No. – 53E, Zone-5, Road 5E,,</li>
                  <li>GIFT CITY, Gandhinagar- 382355 Gujarat</li>
                </ul>
              </p>
            </div>
          </div>
          
        </div>
      </div>

      <!-- company patent sections of 2 columns -->
      <div class="grid grid-cols-12 mt-24">
        <div 
          v-for="patentInfo in patentsInfo"
          :key="patentInfo.id" 
          class="col-span-12 md:col-span-6 lg:col-span-6 p-8">    
          <h2 class="text-pretty text-2xl font-semibold tracking-tight text-white sm:text-3xl pb-8">{{ patentInfo.title }}</h2>    
          <ul class="w-96 text-surface dark:text-white w-full">
            <li 
              v-for="patentSubInfo in patentInfo.infos"
              :key="patentSubInfo.id"  class="w-full py-2">
              <span class="font-bold">{{ patentSubInfo.label }}</span>
              <span class="font-bold m-2">:</span>
              <span>{{ patentSubInfo.data }}</span>
            </li> 
          </ul>
        </div>
      </div>

      <!-- useful links -->
      <div class="grid grid-cols-12 text-center">
        <div class="col-span-12">
          <h1 class="text-3xl font-bold">USEFUL LINKS</h1>
          <ul class="inline-flex py-8 remove-last-border xs:flex-wrap xs:p-4">
            <li 
              v-for="usefulLink in usefulLinks"
              :key="usefulLink"
              class="mr-2 after:border-solid tracking-widest">
              <a :href="usefulLink.url" class="px-2">
                {{usefulLink.label}}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- copyright section -->
      <div class="grid grid-cols-1 mt-4">
        <div class="col-span-1 text-center bg-gray-600 p-8 m-8">
          © Copyright - 2024. All Rights Reserved by Marwadi Shares and Finance Limited.
        </div>         
      </div>
      
    </div>
  </div>
  <WhatsAppCompo/>
</template>
<script setup>
import NewsLetter from './NewsLetter.vue';
import WhatsAppCompo from './WhatsAppCompo.vue';

const col2ListItem = [
  {id: 1, name: "Privacy Policy"},
  {id: 2, name: "Anti-Phishing Disclaimer"},
  {id: 3, name: "Disclaimer"},
  {id: 4, name: "Faq on Recent Compliance Changes"},
  {id: 5, name: "Caution For Investor"},
  {id: 6, name: "Research SMS Disclaimer Form"},
  {id: 7, name: "Investors Complaints"},
  {id: 8, name: "Investors Protection"},
  {id: 9, name: "Contact Us"},
  {id: 10, name: "FAQ"},
  {id: 11, name: "Investor Charter"},
  {id: 12, name: "Sitemap"},
  {id: 13, name: "Blogs"},
  {id: 14, name: "About"},
  {id: 15, name: "Our Products"},
  {id: 16, name: "Our Services"},
  {id: 17, name: "Approved Securities"}
];

const col3ListItem = [
  {id: 1, name: "Platforms"},
  {id: 2, name: "Research"},
  {id: 3, name: "Careers"},
  {id: 4, name: "Network"},
  {id: 5, name: "Investor Awareness"},
  {id: 6, name: "MSFL Member Details"},
  {id: 7, name: "Re-KYC"},
  {id: 8, name: "KRA RE-VALIDATION"},
  {id: 9, name: "SMART ODR"},
  {id: 10, name: "Account Opening"},
  {id: 11, name: "Filing Complaint"},
  {id: 12, name: "TDS 15H & 15G"},
];

const storelinks = [
  {id: 1, icon_path: "/image/play_store.png"},
  {id: 2, icon_path: "/image/app_store.png"},
];

const socialList = [
  {id: 1, icon_path: "/image/social_1.png", url: "https://www.marwadionline.com/service/msfl-connect"},
  {id: 2, icon_path: "/image/social_2.png", url: "https://www.marwadionline.com/service/msfl-connect"},
  {id: 3, icon_path: "/image/social_3.png", url: "https://www.marwadionline.com/service/msfl-connect"},
  {id: 4, icon_path: "/image/social_4.png", url: "https://www.marwadionline.com/service/msfl-connect"},
  {id: 5, icon_path: "/image/social_5.png", url: "https://www.marwadionline.com/service/msfl-connect"},
  {id: 6, icon_path: "/image/social_6.png", url: "https://www.marwadionline.com/service/msfl-connect"},
  {id: 7, icon_path: "/image/social_7.png", url: "https://www.marwadionline.com/service/msfl-connect"}
];

const patentsInfo = [
    {
      id:1,
      title: "MARWADI SHARES AND FINANCE LIMITED (MSFL)",
      infos: [
        {id: 11, label: "SEBI Reg. No. of MSFL for NSE, BSE, MCX, NCDEX", data:"INZ000174730"},
        {id: 12, label: "Membership No.", data:"NSE:08760, BSE:0910, MCX:56410, NCDEX:1280"},
        {id: 13, label: "SEBI Regn.No. of DP", data:"IN-DP-476-2020 (NSDL DPID:IN300974) (CDSL DPID:12035100)"},
        {id: 14, label: "Research Analyst", data:"INH 000002186"},
        {id: 14, label: "AMFI", data:"ARN-42506"},
        {id: 14, label: "PFRDA", data:"POP07082018"},
        {id: 15, label: "CIN of MSFL", data:"U65910GJ1992PLC017544"}
      ]
    },
    {
      id:1,
      title: "MARWADI COMMODITY BROKER PRIVATE LIMITED",
      infos: [
        {id: 16, label: "SEBI Regn.No. of MCBPL", data:"INZ000105336"},
        {id: 17, label: "Membership No.", data:"2012"},
        {id: 18, label: "CIN of MCBPL", data:"U74992GJ2001PTC040221"},
        {id: 19, label: "Disclaimer", data:"Investment in securities market are subject to market risks, read all the related documents carefully before investing"}
      ]
    }
];

const usefulLinks = [
  {id:1, label: 'SEBI', url: "https://www.marwadionline.com/service/msfl-connect"}, 
  {id: 2, label: 'NSE', url: "https://www.marwadionline.com/service/msfl-connect"}, 
  {id:3, label: 'BSE', url: "https://www.marwadionline.com/service/msfl-connect"}, 
  {id:4, label: 'NSDL', url: "https://www.marwadionline.com/service/msfl-connect"}, 
  {id:5, label: 'CDSL', url: "https://www.marwadionline.com/service/msfl-connect"}, 
  {id:6, label: 'MCX', url: "https://www.marwadionline.com/service/msfl-connect"}, 
  {id:7, label: 'NCDEX', url: "https://www.marwadionline.com/service/msfl-connect"}, 
  {id:8, label: 'RBI', url: "https://www.marwadionline.com/service/msfl-connect"}, 
  {id:9, label: 'IRDA', url: "https://www.marwadionline.com/service/msfl-connect"}, 
  {id:10, label: 'AMFI', url: "https://www.marwadionline.com/service/msfl-connect"}, 
  {id:11, label: 'MSEI', url: "https://www.marwadionline.com/service/msfl-connect"}]

</script>
<style lang="scss">
.notice-text-1{
  color: #fff;
}
.notice-left-footer{
    color: #fff;
    font-size: 14px;
    font-weight: 600;
    background: $color-primary-dark;
    display: flex;
    align-items: center;
    justify-content: end;
    // border-right: 1px solid #fff;
    padding-right: 30px;
    height: 100%;
    width: 30%;
    transform: skewX(-25deg);
    position: relative;
    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 50px;
        height: 100%;
        background: $color-primary-dark;
        transform: skewX(25deg);
    }
    p{
        transform: skewX(25deg);
    }
    @include respond(phone){
        padding-top: 10px;
        padding-right: 0px;
        height: auto;
        width: auto;
        background: transparent;
        &::before{
            display: none;
        }
    }
}
.footer{
  background-image: url('@/assets/image/Footer.png');
  background-size: cover;
  background-repeat: no-repeat;
  // padding: 0;
}
.remove-last-border li::after{
  border-color: #888;
  border-width: 1px;
}
.remove-last-border li:last-child::after{
  border: none!important;
}
</style>