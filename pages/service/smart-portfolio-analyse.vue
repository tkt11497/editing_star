<template>
  <div class="pcontainer mx-auto py-20">
    <div class="grid grid-cols-12 service_pages_banner mb-20">
      <div class="col-span-12 p-8 text-center xs:bg-cyan-950 xs:text-white xs:p-28">
        <h2 class="text-5xl font-semibold tracking-tight text-lightBlue main_title uppercase tracking-wider xs:text-white">
          Smart portfolio analyse
        </h2>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div class="text-2xl text-center uppercase useOswald tracking-wider w-1/3 m-auto relative before:content-banner_home_icon inline">                
            <label class="leading-10 ml-4 -mt-40">Home &nbsp;&nbsp;:&nbsp;:&nbsp;Smart portfolio analyse</label>     
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
    accordionTitle: "Smart Portfolio Analyse",
    accordionContent: [
      {
        id: 1,
        introText: "We guide you in your wealth creation by analyzing your portfolio which you can upload in Marwadi OMO or via contacting our business team for the same.",
        contentTitle: null,
        haveBr: true,
        showMarkIcon: false,
        text: '',
      }
    ]
  }
]
</script>

<style lang="scss">
</style>