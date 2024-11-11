<template>
  <div class="pcontainer mx-auto py-20">
    <div class="grid grid-cols-12 service_pages_banner mb-20">
      <div class="col-span-12 p-8 text-center xs:bg-cyan-950 xs:text-white xs:p-28">
        <h2 class="text-5xl font-semibold tracking-tight text-lightBlue main_title uppercase tracking-wider xs:text-white">
          Call and Trade
        </h2>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div class="text-2xl text-center uppercase useOswald tracking-wider w-1/3 m-auto relative before:content-banner_home_icon inline">             
            <label class="leading-10 ml-4 -mt-40">Home &nbsp;&nbsp;:&nbsp;:&nbsp; Call and Trade</label>      
          </div>
        </div>
      </div>     
    </div>

    <div class="grid grid-cols-12 mb-20">
      <div class="col-span-12 md:col-span-9 lg:col-span-9 p-8 text-left">
        <Accordion :accordionDataList="accordionDataList"/>
      </div>
      <div class="col-span-12 md:col-span-3 lg:col-span-3 text-center p-8 sm:pr-8 sm:pl-8 md:pl-0">
        <RightSidebar :navFlag="`servicePage`"/>        
      </div>
    </div>
  </div>  
</template>

<script setup>
import RightSidebar from '../../components/RightSidebar.vue';  

const accordionDataList = [  
  {
    id: 1,
    accordionTitle: "Call and Trade",
    accordionContent: [
      {
        id: 1,
        introText: "When you are unable to access the Internet or your computer, you can trade on the stock market using your mobile phone. You can buy and sell a variety of securities, including equity, mutual funds, derivatives, initial public offerings (IPOs), and many others.",
        contentTitle: null,
        haveBr: true,
        showMarkIcon: false,
        text: '',
      }
    ]
  },
  {
    id: 2,
    accordionTitle: "Why use Call and Trade?",
    accordionContent: [
      {
        id: 1,
        introText: null,
        contentTitle: null,
        haveBr: true,
        showMarkIcon: true,
        text: `There is no limit to the number of orders that can be placed for purchasing and selling. br
                You can place numerous orders at the same time. br
                A multi-layered verification mechanism eliminates the possibility of fraud. br
                This facility does not require any paperwork. br
                You will receive order status information such as confirmations and order flow details.`
      }
    ]
  },
]
</script>

<style lang="scss">

</style>