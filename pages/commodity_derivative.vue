<template>
  <div class="pcontainer mx-auto py-20">
    <div class="grid grid-cols-12 our_products_banner mb-20">
      <div class="col-span-12 p-8 text-center xs:bg-cyan-950 xs:text-white xs:p-28">
        <h2 class="text-5xl font-semibold tracking-tight text-lightBlue main_title uppercase tracking-wider xs:text-white">Commodity Derivative</h2>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div class="text-2xl text-center uppercase useOswald tracking-wider w-1/3 m-auto relative before:content-banner_home_icon inline">            
              Home &nbsp;&nbsp;:&nbsp;:&nbsp; <span aria-hidden="true">Derivatives / Commodity Derivative</span>            
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
    accordionTitle: 'overview',
    accordionContent: [
      {
        id: 1,
        contentTitle: null,
        text: "Commodity trading refers to the buying and selling of raw materials and primary products. These include resources such as metals, energy, and agricultural products. The goal of commodity trading is to make a profit by correctly predicting price movements in the market. Commodity markets can be highly speculative and risky, but they can also offer significant opportunities for profit. Some traders focus on specific commodities, while others trade a diverse range of products. Commodity trading can be done through futures contracts, which allow traders to buy or sell a specific commodity at a set price and date in the future, or through physical products."
      }
    ]
  },
  {
    id: 2,
    accordionTitle: 'description',
    accordionContent: [
      {
        id: 1,
        contentTitle: null,
        text: "Commodity trading involves the buying and selling of raw materials and primary products such as metals, energy, and agricultural products. The goal of commodity trading is to make a profit by correctly predicting price movements in the market."
      },
      {
        id: 2,
        contentTitle: null,
        text: "Commodities that are commonly traded include gold, oil, corn, wheat, and natural gas. These commodities are traded on commodity exchanges like the Multi Commodity Exchange of India Limited (MCX). Traders can participate in the market through futures contracts, which allow them to buy or sell a specific commodity at a set price and date in the future, or through physical products."
      },
      {
        id: 3,
        contentTitle: null,
        text: "Individual traders, financial institutions and hedge funds all participate in commodity trading. Commodity trading can be highly speculative and risky, but it also offers significant opportunities for profit. Traders use various strategies and tools to predict price movements and manage risk, such as technical and fundamental analysis, options trading and contract for difference."
      },
      {
        id: 4,
        contentTitle: null,
        text: "It's important to be aware that global economic and political events can have a big impact on commodity prices. Supply and demand are also key factors in determining prices. To manage risk, traders often use stop-loss orders."
      },
      {
        id: 4,
        contentTitle: null,
        text: "Overall, commodity trading provides an opportunity for traders to profit from the movement of raw materials and primary product prices. However, it's important to be aware of the risks involved and to use risk management strategies."
      }
    ]
  },
  {
    id: 3,
    accordionTitle: 'Types of Commodity Trading',
    accordionContent: [
      {
        id: 1,
        contentTitle: 'Agriculture',
        text: "Corn, Chana, Beans, Soya Bean, Jeera, Rice, Wheat, Rubber."
      },
      {
        id: 2,
        contentTitle: 'Metals',
        text: "Industrial Metals (Aluminum, Platinum, Copper, and Lead) and Precious Metals (Gold and Silver)."
      },
      {
        id: 3,
        contentTitle: 'Energy',
        text: "Natural Gas, Crude Oil, Coal, Gasoline, and Heating oil."
      },
      {
        id: 4,
        contentTitle: 'Live, Stock & Meat',
        text: "Live Stock & Meat."
      }
    ]
  },
  {
    id: 4,
    accordionTitle: 'Benefits of Commodity Trading',
    accordionContent: [
      {
        id: 1,
        contentTitle: "USER-FRIENDLY EXPERIENCE",
        text: "A straightforward interface that offers quick access to commodity trading online."
      },
      {
        id: 2,
        contentTitle: 'DEDICATED CLIENT SUPPORT',
        text: 'Get customized support from our dedicated team to foster strong relationships.'
      },
      {
        id: 3,
        contentTitle: 'HIGH-QUALITY RESEARCH',
        text: 'Offer in-depth insights and analytical research reports and the latest ones that help you make the right decisions. We provide Intraday and positional calls.'
      },
      {
        id: 4,
        contentTitle: 'REAL-TIME UPDATES',
        text: 'Keep yourself updated with the commodity trading happenings in real time.'
      },
      {
        id: 5,
        contentTitle: 'CLIENT-CENTRIC SERVICE',
        text: 'fulfilling your need is our priority. So we provide rational and timely advice.'
      },
      {
        id: 6,
        contentTitle: 'TRADE ON DIFFERENT PLATFORMS',
        text: 'Buy and sell different types of commodities on NCDEX and MCX.'
      },
      {
        id: 7,
        contentTitle: 'THE PLATFORM FOR EVERYONE',
        text: 'Investors, Traders, Hedgers, Speculators and Arbitrageurs can trade in the best commodities.'
      }
    ]
  }
]
</script>

<style lang="scss">
</style>