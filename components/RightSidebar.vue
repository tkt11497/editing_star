<template>
  <!-- Accordion Data -->
  <div class="border" v-if="navFlag">
    <div 
        class="p-6 m-auto tab border-b relative" 
        v-for="sidebarData in ourServices_sidebarDataList"
        :key="sidebarData.id">
        <input type="checkbox" name="faq" :id="sidebarData.id+'rsd'" class="hidden peer">
        <label :for="sidebarData.id+'rsd'" class="block flex text-left text-2xl focus:outline font-semibold before:content-double_circle_icon before:pr-4 before:mt-0.5">  
          <NuxtLink :to="sidebarData.to">{{sidebarData.accordionTitle}}</NuxtLink>
        </label> 
        <ChevronDownIcon class="w-9 peer-checked:transform peer-checked:rotate-180 mr-6 absolute right-0 ease-in-out -mt-9 peer-checked:text-lightBlue" v-if="sidebarData.hasChild"/> 
        <div 
          v-for="content in sidebarData.childs" 
          :key="content.id"
          class="h-0 overflow-hidden peer-checked:h-full text-left relative">
          <div class="pl-8"> 
            <p class="mt-2 before:content-double_circle_icon pl-8 before:absolute before:left-7 before:-mt-0 ml-1 !text-xl cursor-pointer">
              <NuxtLink :to="content.to">{{content.text}}</NuxtLink>
            </p>
          </div> 
        </div>
    </div>
  </div>
  <!-- #End Accordion -->

  <!-- Accordion Data -->
  <div class="border" v-else>
    <div 
      class="p-6 m-auto tab border-b relative" 
      v-for="sidebarData in ourPoducts_sidebarDataList"
      :key="sidebarData.id">
      <input type="checkbox" name="faq" :id="sidebarData.id+'rsd'" class="hidden peer">
      <label :for="sidebarData.id+'rsd'" class="block flex text-left text-2xl focus:outline font-semibold before:content-double_circle_icon before:pr-4 before:mt-0.5">  
        <NuxtLink :to="sidebarData.to">{{sidebarData.accordionTitle}}</NuxtLink>
      </label> 
      <ChevronDownIcon class="w-9 peer-checked:transform peer-checked:rotate-180 mr-6 absolute right-0 ease-in-out -mt-8 peer-checked:text-lightBlue" v-if="sidebarData.hasChild"/> 
      <div 
        v-for="content in sidebarData.childs" 
        :key="content.id"
        class="h-0 overflow-hidden peer-checked:h-full text-left relative">
        <div class="pl-8"> 
          <p class="mt-2 before:content-double_circle_icon pl-8 before:absolute before:left-7 before:-mt-1 ml-1 !text-xl peer-checked:text-lightBlue cursor-pointer">
            <NuxtLink :to="content.to">{{content.text}}</NuxtLink>
          </p>
        </div> 
      </div>

    </div>
  </div>
  <!-- #End Accordion -->
</template>

<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline';
const props = defineProps(["navFlag"]);
// console.log(props);
const ourPoducts_sidebarDataList = [
  {
    id: 1,
    accordionTitle: "Derivatives",
    hasChild: true,
    childs: [
      {id: 1, text: "Equity Derivative", to: "/equity_directive"},
      {id: 2, text: "Commodity Derivative", to: "/commodity_derivative"},
      {id: 3, text: "Currency Derivative", to: "/currency_derivative"}
    ]
  },
  {
    id: 2,
    accordionTitle: "Smartcase Model Portfolio",
    hasChild: true,
    childs: [
      {id: 1, text: "Smart case", to: "/smart_case"},
      {id: 2, text: "Systematic Equity Plan", to: "/systematic_equity_plan"},
    ]
  },
  {
    id: 3,
    accordionTitle: "Third Party Product",
    hasChild: false,
    to: "/third_party_product"
  },
  {
    id: 4,
    accordionTitle: "Initial Public Offering (IPO)",
    hasChild: false,
    to: "/initial-public-offering-ipo"
  },
  {
    id: 5,
    accordionTitle: "National Pension System (NPS)",
    hasChild: false,
    to: "/national-pension-system-nps"
  },
  {
    id: 6,
    accordionTitle: "Mutual Fund",
    hasChild: false,
    to: "/mutual-fund"
  },
  {
    id: 7,
    accordionTitle: "Non-Convertible Debentures (NCD)",
    hasChild: false,
    to: "/non-convertible-debentures-ncd"
  },
  {
    id: 8,
    accordionTitle: "Zero-Coupon NCD - Marwadi Shares and Finance Limited ",
    hasChild: false,
    to: "/zero-coupon-ncd-marwadi-shares-and-finance-limited"
  }
];

const ourServices_sidebarDataList = [
  {
    id: 1,
    accordionTitle: "Research and Advisory",
    hasChild: false,
    to: "/service/research-and-advisory"
  },
  {
    id: 2,
    accordionTitle: "Online Trading",
    hasChild: true,
    childs: [
      {id: 1, text: "MSFL Connect", to: "/service/msfl-connect"},
      {id: 2, text: "Web Trading", to: "/service/web-trading"},
      {id: 3, text: "MSFL diet", to: "/service/msfl-diet"},
    ]
  },
  {
    id: 3,
    accordionTitle: "Margin Trading / SMTF",
    hasChild: false,
    to: "/service/margin-trading-smtf"
  },
  {
    id: 4,
    accordionTitle: "Security lending and borrowing mechanism",
    hasChild: false,
    to: "/service/security-lending-and-borrowing-mechanism"
  },
  {
    id: 5,
    accordionTitle: "Call and Trade",
    hasChild: false,
    to: "/service/call-and-trade"
  },
  {
    id: 6,
    accordionTitle: "Smart portfolio analyse",
    hasChild: false,
    to: "/service/smart-portfolio-analyse"
  },
  {
    id: 7,
    accordionTitle: "Third Party Service - PAN Card services",
    hasChild: false,
    to: "/service/third-party-service-pan-card-services"
  }
];
</script>
<style lang="">
  
</style>