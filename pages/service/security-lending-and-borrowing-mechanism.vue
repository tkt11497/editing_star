<template>
  <div class="pcontainer mx-auto py-20">
    <div class="grid grid-cols-12 service_pages_banner mb-20">
      <div class="col-span-12 p-8 text-center xs:bg-cyan-950 xs:text-white xs:p-28">
        <h2 class="text-5xl font-semibold tracking-tight text-lightBlue main_title uppercase tracking-wider xs:text-white">
          Security lending and borrowing mechanism
        </h2>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div class="text-2xl text-center uppercase useOswald tracking-wider w-1/3 m-auto relative before:content-banner_home_icon inline">            
            <label class="leading-10 ml-4 -mt-40">Home &nbsp;&nbsp;:&nbsp;:&nbsp; Security lending and borrowing mechanism</label>        
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
    accordionTitle: "SLBM",
    accordionContent: [
      {
        id: 1,
        introText: "The Security Lending and Borrowing Mechanism (SLBM) is a system where a trader borrows equity shares that they do not already own, lends shares that they own, or lends shares that they own but with no intention to sell them.",
        contentTitle: null,
        haveBr: true,
        showMarkIcon: false,
        text: '',
      }
    ]
  },
  {
    id: 2,
    accordionTitle: "Why use SLBM Facility ?",
    accordionContent: [
      {
        id: 1,
        introText: null,
        contentTitle: null,
        haveBr: true,
        showMarkIcon: true,
        text: `Individuals can borrow stocks and short-sell equities that they do not own in the market. br
                It is a hedging tool that is frequently used to balance potential hazards. br
                Possibility of boosting liquidity for traders. br
                Allows investors to earn fees on long-term held equities if they use them as collateral.`
      }
    ]
  },
  {
    id: 3,
    accordionTitle: "Who should use the SLBM facility?",
    accordionContent: [
      {
        id: 1,
        introText: null,
        contentTitle: null,
        haveBr: true,
        showMarkIcon: true,
        text: `This tool can be used by sophisticated and experienced traders to boost liquidity. br
                Hedgers who want to reduce their possible risks and losses. br
                Retail investors can use this service to lend their shares and earn fees.`
      }
    ]
  },
  {
    id: 4,
    accordionTitle: "Benefits and features of SLBM",
    accordionContent: [
      {
        id: 1,
        introText: null,
        contentTitle: null,
        haveBr: true,
        showMarkIcon: true,
        text: `Tenure of lending and borrowing is available for up to a period of 1 to 12 months. br
                Mainly securities traded in the F&O segment are eligible for lending and borrowing. br
                Investors can generate additional income from the idle shares in their portfolio. br
                Exchange provides a list of securities for SLB trading every month. br
                The specified reverse leg settlement date is the first Thursday of the corresponding month. Thus, each reverse leg settlement date is assigned a specific series number. br
                All corporate action benefits go to the lender, for those who lend the shares in the SLBM platform. br
                The borrower has the option to repay the obligation before the first Thursday of the month. br
                Exchanges quote lending fees per share. It is usually based on the rate of return expected by the lender, interest rate, and tenure. br
                SLBM is offered through an automated online platform with a facility for trading on price-time priority.`
      }
    ]
  }
]
</script>

<style lang="scss">
</style>