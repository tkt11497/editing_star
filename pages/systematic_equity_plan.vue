<template>
  <div class="pcontainer mx-auto py-20">
    <div class="grid grid-cols-12 our_products_banner mb-20">
      <div class="col-span-12 p-8 text-center xs:bg-cyan-950 xs:text-white xs:p-28">
        <h2 class="text-5xl font-semibold tracking-tight text-lightBlue main_title uppercase tracking-wider xs:text-white">Systematic Equity Plan</h2>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div class="text-2xl text-center uppercase useOswald tracking-wider w-1/3 m-auto relative before:content-banner_home_icon inline">            
              Home &nbsp;&nbsp;:&nbsp;:&nbsp; <span aria-hidden="true">Derivatives / Equity Derivative</span>            
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
import RightSidebar from '../../components/RightSidebar.vue';

  const accordionDataList = [
  {
    id: 1,
    accordionTitle: 'SEP',
    introText: "A systematic equity plan is a method of investing in a particular stock wherein an investor invests a fixed amount or quantity of his choice at regular intervals.",
    haveBr: true,
    accordionContent: [
      {
        id: 1,
        contentTitle: 'Why Invest in SEP with us?',
        text: `Disciplined Investment. br
                Experts verified stocks. br
                Zero management fees. br
                Rupee cost averaging. br
                Long-term approach. br
                Transparency. br`
      },
      {
        id: 2,
        contentTitle: 'Why Invest in SEP with us?',
        text: `Investors who aim to hedge against market volatility by purchasing direct equities. br
                Investors who are unable to keep up with the market on a regular basis. br
                Investors with specific financial goals. br`
      }
    ]
  },
  {
    id: 2,
    accordionTitle: "Best Stocks of SEP",
    introText: null,
    haveBr: true,
    accordionContent: [
      {
        id: 1,
        contentTitle: null,
        text: `LIC br
                Time Horizon: 48 Months br
                Target: 1200 br`
      }
    ]
  }
]
</script>

<style lang="scss">
</style>