<template>
  <div class="pcontainer mx-auto py-20">
    <div class="grid grid-cols-12 service_pages_banner mb-20">
      <div class="col-span-12 p-8 text-center xs:bg-cyan-950 xs:text-white xs:p-28">
        <h2
          class="text-5xl font-semibold tracking-tight text-lightBlue main_title uppercase tracking-wider xs:text-white"
        >
          Web Trading
        </h2>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div
            class="text-2xl text-center uppercase useOswald tracking-wider w-1/3 m-auto relative before:content-banner_home_icon inline"
          >
            <label class="leading-10 ml-4 -mt-40">Home &nbsp;&nbsp;:&nbsp;:&nbsp;Online Trading / Web Trading</label>
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
    accordionTitle: "Delightful Experience",
    isTabularUi: false,
    accordionContent: [
      {
        id: 1,
        introText: null,
        contentTitle: "Stay Organized",
        haveBr: false,
        showMarkIcon: false,
        text: `Set up your workspaces the way you want! Neatly shuffle around your trading systems.`,
      },
      {
        id: 2,
        introText: null,
        contentTitle: "Personalized",
        haveBr: false,
        showMarkIcon: false,
        text: `Make the platform work for you in your unique trading style with the widget features.`,
      },
      {
        id: 2,
        introText: null,
        contentTitle: "Robust Platform for easy investing",
        haveBr: true,
        showMarkIcon: false,
        text: `Streamlined and user-friendly, our robust platform empowers effortless investing with confidence. br
               We are committed to facilitating a robust trading system using technology to maximum advantage. The ultimate benefit of the web trading platform is the ability to trade in financial assets at your convenience from anywhere at a preferred trading period. Our innovative tools encourage intelligent minds with high-quality research and reports to help make well-informed decisions on investing and trading. We empower our clients to take advantage of all advanced trading features from a PC or laptop browser.`,
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
