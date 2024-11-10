<template>
  <div class="pcontainer mx-auto py-20">
    <div class="grid grid-cols-12 our_products_banner mb-20">
      <div class="col-span-12 p-8 text-center xs:bg-cyan-950 xs:text-white xs:p-28">
        <h2 class="text-5xl font-semibold tracking-tight text-lightBlue main_title uppercase tracking-wider xs:text-white">Equity Derivative</h2>
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
import { ref } from 'vue';
import RightSidebar from '../../components/RightSidebar.vue';
import Accordion from '../../components/Accordion.vue';
const isChecked = ref(false);

  const accordionDataList = [
  {
    id: 1,
    accordionTitle: 'overview',
    accordionContent: [
      {
        id: 1,
        contentTitle: 'Equity Trading',
        text: "The buying and selling of company stock shares on a stock exchange"
      },
      {
        id: 2,
        contentTitle: 'Goal',
        text: "To make a profit by buying shares at a low price and selling them at a higher price"
      },
      {
        id: 3,
        contentTitle: 'Strategies',
        text: "Fundamental analysis (evaluating a company's financial and economic performance) and technical analysis (studying past market data to identify patterns and make predictions about future price movements)"
      },
      {
        id: 4,
        contentTitle: 'Platforms',
        text: 'Online brokerage accounts, trading software, stockbrokers, financial advisors'
      },
      {
        id: 5,
        contentTitle: 'Risks',
        text: "Equity trading comes with risks, it's important to have a proper understanding of the market and the company in which you are planning to invest in, diversifying your portfolio can be helpful in managing the risk."
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
        text: "Equity trading refers to the buying and selling of company stock shares on a stock exchange. The goal of equity trading is to make a profit by buying shares at a low price and selling them at a higher price."
      },
      {
        id: 2,
        contentTitle: null,
        text: "Traders can use a variety of strategies for equity trading, including fundamental analysis, which involves evaluating a company's financial and economic performance, and technical analysis, which involves studying past market data to identify patterns and make predictions about future price movements."
      },
      {
        id: 3,
        contentTitle: null,
        text: "Equity trading can be done by individuals or institutions, through a variety of platforms, including online brokerage accounts and trading software. The trading of equities can also be done through a stockbroker or a financial advisor, who can provide guidance and advice on the best stocks to buy and sell."
      },
      {
        id: 4,
        contentTitle: null,
        text: "It's important to note that equity trading comes with risks and it's important to have a proper understanding of the market and the company you are planning to invest. Additionally, diversifying your portfolio can be helpful in managing risk."
      },
    ]
  },
  {
    id: 3,
    accordionTitle: 'Types of Equity Derivative Trading',
    accordionContent: [
      {
        id: 1,
        contentTitle: 'Scalping Trading',
        text: "Scalping Trading is the act of buying Equity at a lower price and selling it at a high price within seconds or minutes."
      },
      {
        id: 2,
        contentTitle: 'Day Trading',
        text: "Day trading involves purchasing and selling a security within a single trading day to profit from a small price."
      },
      {
        id: 3,
        contentTitle: 'Swing Trading',
        text: "Swing trading is defined as a trading strategy that allows you to hold an asset for several days, sometimes weeks."
      },
      {
        id: 4,
        contentTitle: 'Position Trading',
        text: "Position trading is a strategy that allows you to leverage the price movement over a multi-week & multi-month period."
      },
      {
        id: 5,
        contentTitle: 'Long-Term Trading',
        text: "Long-term trading is a trading strategy involves holding an investment for that an extended period, like five years or above."
      }
    ]
  },
  {
    id: 4,
    accordionTitle: 'Benefits of Equity Derivative Trading',
    accordionContent: [
      {
        id: 1,
        contentTitle: "VOLUNTARY",
        text: "NPS is a voluntary savings scheme that allows you to make a defined contribution without any compulsion, persuasion, or legal obligation."
      },
      {
        id: 2,
        contentTitle: "FLEXIBLE",
        text: "Offers online trading in various equities and derivatives through a single window in NSE and BSE."
      },
      {
        id: 3,
        contentTitle: "PORTFOLIO",
        text: "Get portfolio investments diversification for Exchange-Traded Funds (ETF) along with ETF research to make your financial decisions better."
      },
      {
        id: 4,
        contentTitle: "TRENDY",
        text: "Get market trends daily or weekly so that you get to know which stocks can rise along with the risk factors associated with them."
      },
      {
        id: 5,
        contentTitle: "RISK MANAGEMENT",
        text: "Get a risk profile recommendation with the intent of proper investment and asset allocation."
      }
    ]
  }
]

const handleChecked = () => {
  console.log("hitted checked function");
  isChecked.value = !isChecked.value;
  console.log(isChecked.value);
}

</script>

<style lang="scss">
</style>