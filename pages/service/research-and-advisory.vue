<template>
  <div class="pcontainer mx-auto py-20">
    <div class="grid grid-cols-12 service_pages_banner mb-20">
      <div class="col-span-12 p-8 text-center xs:bg-cyan-950 xs:text-white xs:p-28">
        <h2 class="text-5xl font-semibold tracking-tight text-lightBlue main_title uppercase tracking-wider xs:text-white">
          Research and Advisory
        </h2>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div class="text-2xl text-center uppercase useOswald tracking-wider w-1/3 m-auto relative before:content-banner_home_icon inline">                
            <label class="leading-10 ml-4 -mt-40">Home &nbsp;&nbsp;:&nbsp;:&nbsp; Research and Advisory</label>       
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
    accordionTitle: "Research And Advisory",
    isTabularUi: false,
    accordionContent: [
      {
        id: 1,
        introText: null,
        contentTitle: "Why take research advisory?",
        haveBr: true,
        showMarkIcon: true,
        text: `Investing in capital markets requires information and analytics. br
                Adequate research before investing is required to keep a healthy portfolio. br
                Risks are strongly related to research; the more extensive the research, the lower the risk.`,
      },
      {
        id: 1,
        introText: null,
        contentTitle: "Who should follow research advice?",
        haveBr: true,
        showMarkIcon: true,
        text: `Beneficial for long-term investors. br
                Short-term traders should limit their daily and weekly losses.`,
      }
    ]
  }
]
</script>

<style lang="scss">
</style>