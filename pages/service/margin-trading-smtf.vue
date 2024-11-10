<template>
  <div class="pcontainer mx-auto py-20">
    <div class="grid grid-cols-12 service_pages_banner mb-20">
      <div class="col-span-12 p-8 text-center xs:bg-cyan-950 xs:text-white xs:p-28">
        <h2
          class="text-5xl font-semibold tracking-tight text-lightBlue main_title uppercase tracking-wider xs:text-white"
        >
          Margin Trading / SMTF
        </h2>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div
            class="text-2xl text-center uppercase useOswald tracking-wider w-1/3 m-auto relative before:content-banner_home_icon inline"
          >
            <label class="leading-10 ml-4 -mt-40">Home &nbsp;&nbsp;:&nbsp;:&nbsp; Margin Trading / SMTF</label>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-12 mb-20">
      <div class="col-span-12 md:col-span-9 lg:col-span-9 p-8 text-left">
        <Accordion :accordionDataList="accordionDataList" />
      </div>
      <div
        class="col-span-12 md:col-span-3 lg:col-span-3 text-center p-8 sm:pr-8 sm:pl-8 md:pl-0"
      >
        <RightSidebar :navFlag="`servicePage`"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import RightSidebar from "../../components/RightSidebar.vue";

const accordionDataList = [
  {
    id: 1,
    accordionTitle: "Margin Trading:",
    isTabularUi: false,
    accordionContent: [
      {
        id: 1,
        introText:
          "Margin trading allows you to purchase equities that are out of your price range. You can buy and sell securities in the same transaction. In India, it is also referred to as intraday trading.",
      },
    ],
  },
  {
    id: 2,
    accordionTitle: "Why use Margin trading?",
    isTabularUi: false,
    accordionContent: [
      {
        id: 1,
        introText: null,
        contentTitle: "Why take research advisory?",
        haveBr: true,
        showMarkIcon: true,
        text: `Profit from market changes in the short term without a large investment. br 
                Increase your portfolio's market exposure while spending less money. br
                Get higher returns than you invested. br
                In your Demat account, use stock holdings or other investments as collateral.`,
      },
    ],
  },
  {
    id: 3,
    accordionTitle: "Types Of Margins",
    isTabularUi: false,
    accordionContent: [
      {
        id: 1,
        introText: null,
        contentTitle: "Value at Risk Margin",
        haveBr: false,
        showMarkIcon: false,
        text: `The value at Risk margin shortly known as the VaR margin is used to cover up losses through unpredictable risk situations.`,
      },
      {
        id: 2,
        introText: null,
        contentTitle: "Extreme Loss Margin",
        haveBr: false,
        showMarkIcon: false,
        text: `Extreme Loss margin is shortly known as ELM set against risk conditions which are uncovered in VaR.`,
      },
      {
        id: 3,
        introText: null,
        contentTitle: "Mark-to-Market Margin",
        haveBr: false,
        showMarkIcon: false,
        text: `Mark-to-Market margin is shortly known as M2M used for the daily settlement of gains and losses due to the fluctuating market value of the security.`,
      },
    ],
  },
  {
    id: 4,
    accordionTitle: "The Risk Involved In Margin Trading",
    isTabularUi: false,
    accordionContent: [
      {
        id: 1,
        introText: null,
        contentTitle: "Low performance",
        haveBr: false,
        showMarkIcon: false,
        text: `There is a chance of underperformance of your chosen stocks, resulting into decreasing in price value.`,
      },
      {
        id: 2,
        introText: null,
        contentTitle: "Balance Maintenance",
        haveBr: false,
        showMarkIcon: false,
        text: `There may be a time when you put more funds in your account; otherwise, you will have to sell some stocks quickly at a low price to maintain the required balance.`,
      },
      {
        id: 2,
        introText: null,
        contentTitle: "Liquidation risk",
        haveBr: false,
        showMarkIcon: false,
        text: `When an investor cannot fulfil its debt obligation for the short term, the broker will liquidate financial instruments in an attempt for loss recovery, and they have the right to do so.`,
      },
    ],
  },
  {
    id: 5,
    accordionTitle: "Benefits Of Margin Trading",
    isTabularUi: false,
    accordionContent: [
      {
        id: 1,
        introText: null,
        contentTitle: "SHORT-TERM PROFITS",
        haveBr: false,
        showMarkIcon: false,
        text: `Make short-term profits from the price movements without having enough investment amount.`,
      },
      {
        id: 2,
        introText: null,
        contentTitle: "HIGHER RETURNS",
        haveBr: false,
        showMarkIcon: false,
        text: `Get returns that are higher than what you have invested.`,
      },
      {
        id: 3,
        introText: null,
        contentTitle: "INCREASE EXPOSURE",
        haveBr: false,
        showMarkIcon: false,
        text: `Get great portfolio exposure to the market with less money.`,
      },
      {
        id: 4,
        introText: null,
        contentTitle: "USE AS COLLATERAL",
        haveBr: false,
        showMarkIcon: false,
        text: `Use stock holdings or other investments as collateral in your Demat account.`,
      },
    ],
  },
];
</script>

<style lang="scss">
</style>
