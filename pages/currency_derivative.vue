<template>
  <div class="pcontainer mx-auto py-20">
    <div class="grid grid-cols-12 our_products_banner mb-20">
      <div class="col-span-12 p-8 text-center xs:bg-cyan-950 xs:text-white xs:p-28">
        <h2 class="text-5xl font-semibold tracking-tight text-lightBlue main_title uppercase tracking-wider xs:text-white">Currency Derivative</h2>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div class="text-2xl text-center uppercase useOswald tracking-wider w-1/3 m-auto relative before:content-banner_home_icon inline">            
              Home &nbsp;&nbsp;:&nbsp;:&nbsp; <span aria-hidden="true">Derivatives / Currency Derivative </span>            
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
        text: "Currency trading offers the opportunity for traders to profit from fluctuations in exchange rates, but it's important to have a solid understanding of the market and the factors that impact it, as well as implement sound risk management strategies."
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
        text: "Currency trading, also known as forex trading, is the buying and selling of different national currencies in the foreign exchange market. The goal of currency trading is to make a profit by correctly predicting changes in currency exchange rates. The foreign exchange market is the largest financial market in the world and is open 24 hours a day, five days a week."
      },
      {
        id: 2,
        contentTitle: null,
        text: "Participants in the currency market include large financial institutions, governments, and individual investors. Currency trading can be done through a broker or through electronic trading platforms. Traders can also use various tools and strategies, such as technical and fundamental analysis, to predict exchange rate movements and manage risk."
      },
      {
        id: 3,
        contentTitle: null,
        text: "Currency trading can be highly speculative and risky, but it can also offer significant opportunities for profit. The market is influenced by a wide range of economic, political, and social factors, including interest rates, inflation, and trade balances. It is important for traders to keep abreast of these factors and how they may impact currency exchange rates."
      },
      {
        id: 4,
        contentTitle: null,
        text: "Currency trading can be done by anyone, but it is advisable to start with proper education and knowledge before jumping into it. It is also recommended to start with a demo account before moving to live to trade."
      }
    ]
  },
  {
    id: 3,
    accordionTitle: 'Types of Currency Trading',
    accordionContent: [
      {
        id: 1,
        contentTitle: "Spot Trading:",
        text: "This is the most common type of currency trading, in which a trader buys or sells a currency at the current market price, and the transaction is settled within two business days."
      },
      {
        id: 2,
        contentTitle: "Forward Trading:",
        text: "This type of trading involves buying or selling a currency at a set price for delivery at a future date. Forward contracts are typically used by businesses and investors to hedge against currency risk."
      },
      {
        id: 3,
        contentTitle: "Futures Trading:",
        text: "Similar to forward trading, futures trading involves buying or selling a currency at a set price for delivery at a future date. However, unlike forwards, futures are traded on a regulated exchange and are standardized contracts with a set expiration date."
      },
      {
        id: 4,
        contentTitle: "Options Trading:",
        text: "This type of trading involves buying or selling the right, but not the obligation, to buy or sell a currency at a specific exchange rate at a future date. Options can be used for hedging or speculating."
      },
      {
        id: 5,
        contentTitle: "Swaps:",
        text: "A currency swap is a type of agreement between two parties to exchange cash flows from one currency to another currency. This is typically done by large financial institutions and corporations to manage currency risk."
      },
      {
        id: 6,
        contentTitle: "Scalping: ",
        text: "It is a type of trading strategy that involves buying and selling currencies quickly, usually within minutes or seconds, in order to make small profits. Scalping is a high-risk, high-reward strategy that is best suited for experienced traders with a strong understanding of the market."
      }
    ]
  },
  {
    id: 4,
    accordionTitle: 'Benefits of Currency Trading',
    accordionContent: [
      {
        id: 1,
        contentTitle: "Liquidity: ",
        text: "The foreign exchange market is the largest financial market in the world and is highly liquid, which means that trades can be executed quickly and at low costs."
      },
      {
        id: 2,
        contentTitle: 'Flexibility:',
        text: "Currency trading can be done 24 hours a day, five days a week, which allows traders to take advantage of market fluctuations and opportunities as they arise."
      },
      {
        id: 3,
        contentTitle: "Leverage: ",
        text: "Currency trading often involves the use of leverage, which allows traders to control large positions with a relatively small amount of capital. This can increase the potential for profits, but it also amplifies the risk."
      },
      {
        id: 4,
        contentTitle: "Diversification:",
        text: "Currency trading can be used as a diversification tool, allowing traders to spread risk across different currencies and currency pairs."
      },
      {
        id: 5,
        contentTitle: "Transparency:",
        text: "The foreign exchange market is highly transparent, with real-time quotes and historical price data readily available to traders."
      },
      {
        id: 6,
        contentTitle: "Accessibility:",
        text: "With the advancement of technology, currency trading is now more accessible to individual traders and investors than ever before. Online trading platforms and mobile trading apps have made it easy for almost anyone to participate in the market."
      }
    ]
  }
]
</script>

<style lang="scss">
</style>