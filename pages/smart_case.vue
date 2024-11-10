<template>
  <div class="pcontainer mx-auto py-20">
    <div class="grid grid-cols-12 our_products_banner mb-20">
      <div class="col-span-12 p-8 text-center xs:bg-cyan-950 xs:text-white xs:p-28">
        <h2 class="text-5xl font-semibold tracking-tight text-lightBlue main_title uppercase tracking-wider xs:text-white">Smart case</h2>
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
    accordionTitle: 'Smartcase Portfolio Analysis',
    introText: "A model portfolio is a collection of curated portfolios that produce superior risk-adjusted returns over time based on an investor's risk tolerance and investment horizon.",
    accordionContent: [
      {
        id: 1,
        contentTitle: 'Why Invest in a Smartcase Model Portfolio?',
        haveBr: true,
        text: `Diversified portfolio. br
                Customer consent was taken. br
                No locking or exit load. br
                Curated after in-depth research. br`
      },
      {
        id: 2,
        contentTitle: "Who should invest in Smartcase?",
        text: "Smartcase is an option for investors who find it difficult to invest in high-ticket products such as Portfolio Management Services (PMS) and Alternative Investment Funds (AIF)."
      },
      {
        id: 3,
        contentTitle: "How to start investing in Smart Case with us?",
        haveBr: true,
        text: `Existing Demat account holder - Contact your RM or the nearest branch and e-sign the agreement. br
                New client - Open a Demat account with MSFL and contact your RM for an e-signing agreement. br`
      }
    ]
  },
  {
    id: 2,
    accordionTitle: "About Smartcase Model Portfolio",
    introText: null,
    haveBr: true,
    accordionContent: [
      {
        id: 1,
        contentTitle: "Large Cap",
        text: `Objective: Long-term capital appreciation by investing in Large Cap companies that are the top three players in their respective industries. br
                3 years horizon br
                ₹ 3 Lakh min investments br
                ₹ 50,000 Top Up br`
      },
      {
        id: 1,
        contentTitle: "Multi Cap",
        haveBr: true,
        text: `Objective: To participate in the India growth story by investing in the Indian equity markets by building a diversified portfolio across various sectors & caps. br
                5 years horizon br
                ₹ 3 Lakh min investments br
                ₹ 50,000 Top Up br`
      },
      {
        id: 1,
        contentTitle: "Small Cap",
        haveBr: true,
        text: `Objective: Long-term capital growth by investing in smaller but growing companies in India. br
                7 years horizon br
                ₹ 3 Lakh min investments br
                ₹ 50,000 Top Up br`
      }
    ]
  }
]
</script>

<style lang="scss">
</style>