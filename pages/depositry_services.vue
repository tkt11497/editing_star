<template>
  <div class="pcontainer mx-auto py-20">
    <div class="grid grid-cols-12 our_products_banner mb-20">
      <div class="col-span-12 p-8 text-center xs:bg-cyan-950 xs:text-white xs:p-28">
        <h2 class="text-5xl font-semibold tracking-tight text-lightBlue main_title uppercase tracking-wider xs:text-white">Depositry Services</h2>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div class="text-2xl text-center uppercase useOswald tracking-wider w-1/3 m-auto relative before:content-banner_home_icon inline">            
              Home &nbsp;&nbsp;:&nbsp;:&nbsp; <span aria-hidden="true">Depositry Services </span>            
          </div>
        </div>
      </div>     
    </div>
    
    <div class="grid grid-cols-12 mb-20">
      <div class="col-span-12 md:col-span-9 lg:col-span-9 p-8 text-left">
        <Accordion :accordionDataList="accordionDataList"/>
      </div>
      <div class="col-span-12 md:col-span-3 lg:col-span-3 text-center p-8 sm:pr-8 sm:pl-8 md:pl-0">
        <RightSidebar/> 
      </div>
    </div>
  </div>  
</template>

<script setup>
import { ref } from 'vue';
import RightSidebar from '../../components/RightSidebar.vue';
const isChecked = ref(false);

  const accordionDataList = [
  {
    id: 1,
    accordionTitle: 'Depository Services',
    accordionContent: [
      {
        id: 1,
        contentTitle: null,
        text: "Depository services are given by financial institutions to keep and assist securities such as stocks and bonds in an electronic form known as Demat (Dematerialized Account) rather than a physical form."
      }      
    ]
  },
  {
    id: 2,
    accordionTitle: 'Depository Services Include',
    accordionContent: [
      {
        id: 1,
        contentTitle: null,
        text: `Better Deliveries: Quick and immediate delivery of all your securities. br
                Best Security Practice: Get secured storage and transfer method for all your financial assets. br
                Cost-efficient: Avail of depository services without costing a lot of money. br
                Easy Portfolio Management: Get a better overview of your portfolio to help you manage it effectively. br
                Paperless Trading: There is no requirement for paperwork to take part in trading. br`
      }
    ]
  },
  {
    id: 3,
    accordionTitle: 'Types Of Depository Services',
    accordionContent: [
      {
        id: 1,
        contentTitle: '1. National Securities Depository Limited (NSDL)',
        text: "National Securities Depository Limited was founded on 8th November 1996 as an Indian central securities depository. This financial organization performs under the Securities and Exchange Board of India (SEBI). To revolutionize the Indian financial market, it introduced a dematerialized format for all tradable securities in India, becoming India’s first electronic securities depository. National Stock Exchange (NSE) primarily promotes this depository."
      },
      {
        id: 2,
        contentTitle: '2. Central Depository Services Limited (CDSL)',
        text: "Central Depository Services Limited is the second Indian central securities depository which was founded in February 1999. It helps you with dematerializing physical certificates and rematerializing electronic securities. It focuses on offering convenient, secure, and affordable services to every individual taking part in the capital market. CDSL is primarily promoted by the Bombay Stock Exchange (BSE)."
      }
    ]
  }
]
</script>

<style lang="scss">
</style>