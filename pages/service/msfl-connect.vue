<template>
  <div class="pcontainer mx-auto py-20">
    <div class="grid grid-cols-12 service_pages_banner mb-20">
      <div class="col-span-12 p-8 text-center xs:bg-cyan-950 xs:text-white xs:p-28">
        <h2
          class="text-5xl font-semibold tracking-tight text-lightBlue main_title uppercase tracking-wider xs:text-white"
        >
          MSFL Connect
        </h2>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div
            class="text-2xl text-center uppercase useOswald tracking-wider w-1/3 m-auto relative before:content-banner_home_icon inline"
          >
            <label class="leading-10 ml-4 -mt-40">Home &nbsp;&nbsp;:&nbsp;:&nbsp; Online Trading / MSFL Connect</label>
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
    accordionTitle: "Key Features",
    isTabularUi: false,
    accordionContent: [
      {
        id: 1,
        introText: null,
        contentTitle: "Intuitive Interface",
        haveBr: false,
        showMarkIcon: false,
        text: `Get an easy-to-understand user interface.`,
      },
      {
        id: 2,
        introText: null,
        contentTitle: "Utmost Securitye",
        haveBr: false,
        showMarkIcon: false,
        text: `Invest and trade safely and securely.`,
      },
      {
        id: 3,
        introText: null,
        contentTitle: "Various Securities",
        haveBr: false,
        showMarkIcon: false,
        text: `Trade and invest in multiple securities in leading stock exchanges like BSE and NSE.`,
      },
      {
        id: 4,
        introText: null,
        contentTitle: "Expert Advice",
        haveBr: false,
        showMarkIcon: false,
        text: `Timely advice from highly skilled experts helps you achieve your financial goal with better portfolio management and minimizing risk.`,
      },
      {
        id: 5,
        introText: null,
        contentTitle: "Dedicated Client Support",
        haveBr: false,
        showMarkIcon: false,
        text: `Get all your queries resolved in no time from our highly dedicated client support team.`,
      },
      {
        id: 6,
        introText: null,
        contentTitle: "High-Quality Services",
        haveBr: false,
        showMarkIcon: false,
        text: `We are committed to assisting you in meeting your financial goal effectively. `,
      },
      {
        id: 7,
        introText: null,
        contentTitle: "Charting Tools",
        haveBr: false,
        showMarkIcon: false,
        text: `Marwadi Shares and Finance Ltd. has partnered with TradingView for its charting technology. A global investing and trading platform offering market data, financial news, and a real-time economic calendar to track key financial events.`,
      },
      {
        id: 8,
        introText: null,
        contentTitle: null,
        haveBr: false,
        showMarkIcon: false,
        isanchorLink: true,
        text: null,
        anchorText: `go to the trading application`,
      },
    ],
  },
];
</script>

<style lang="scss">
</style>
