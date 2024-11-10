<template>
  <div class="pcontainer mx-auto py-20">
    <div class="grid grid-cols-12 service_pages_banner mb-20">
      <div class="col-span-12 p-8 text-center xs:bg-cyan-950 xs:text-white xs:p-28">
        <h2 class="text-5xl font-semibold tracking-tight text-lightBlue main_title uppercase tracking-wider xs:text-white">
          Third Party Service - PAN Card services
        </h2>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div class="text-2xl text-center uppercase useOswald tracking-wider w-1/3 m-auto relative before:content-banner_home_icon inline">            
            <label class="leading-10 ml-4 -mt-40">Home &nbsp;&nbsp;:&nbsp;:&nbsp;Third Party Service - PAN Card services</label>          
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
    accordionTitle: "What Is PAN?",
    accordionContent: [
      {
        id: 1,
        introText: "A permanent Account Number (PAN) is a ten-digit alphanumeric number with the first five characters are uppercase alphabets allotted by the Income Tax Department of India. Every individual who applies will receive a unique PAN as a laminated tamper-proof card or a PDF file. It is issued under Section 139A of the Indian Income Tax Act, 1961, with the supervision of the Central Board for Direct Taxes (CBDT).",
        contentTitle: null,
        haveBr: true,
        showMarkIcon: false,
        text: '',
      }
    ]
  },
  {
    id: 2,
    accordionTitle: "Benefits For Applying PAN",
    accordionContent: [
      {
        id: 1,
        introText: null,
        contentTitle: null,
        haveBr: true,
        showMarkIcon: true,
        text: `Proof of identification. br
                Valid across India. br
                Identification for various taxpayers in the nation. br
                Registration for a Business [Unique Tax Registration Number (TRN)]. br
                Buying or Selling [Goods or Services when exceeding Rs. 2 Lakh, Gold & Bullion when exceeding Rs. 5 lakh, Immovable Property & Assets when exceeding Rs. 10 Lakhs, and All Vehicles except for 2-wheelers]. br
                Income Tax Returns [Reduce Tax Deduction at Source, Filing ITR, and Claiming Tax Refunds]. br
                Transactions when exceeding Rs 50,000 [Depositing Cash in Bank Account, Banker Cheque & Demand Drafts, Payments to Prepaid Instruments for a Financial Year, Life Insurance Premiums for a Financial Year, Hotels & Restaurant Bills, and  Cash Payments for Travel].`
      }
    ]
  },
  {
    id: 3,
    accordionTitle: "Why Is PAN Necessary For An Investment?",
    accordionContent: [
      {
        id: 1,
        introText: null,
        contentTitle: null,
        haveBr: true,
        showMarkIcon: true,
        text: `Opening Accounts such as Bank Accounts, Demat Accounts, and NRO Accounts. br
                Foreign Transactions like Transferring money from an NRE account to NRO Account. br
                Buying Bonds, Mutual Funds, and Debentures that exceed Rs 50,000 in value in one year. br
                Buying or Selling Securities that exceed Rs. 1 Lakh.`
      }
    ]
  },
  {
    id: 4,
    accordionTitle: "Benefits Of Applying For A PAN Card With Marwadi",
    accordionContent: [
      {
        id: 1,
        introText: null,
        contentTitle: "FLEXIBLE",
        haveBr: false,
        showMarkIcon: false,
        text: `Apply for your PAN card from anywhere at your preferred time.`
      },
      {
        id: 2,
        introText: null,
        contentTitle: "CONVENIENT",
        haveBr: false,
        showMarkIcon: false,
        text: `Get your PAN card with ease and comfort.`
      },
      {
        id: 3,
        introText: null,
        contentTitle: "LESS TIME",
        haveBr: false,
        showMarkIcon: false,
        text: `Obtaining a new PAN Card will require less time.`
      },
      {
        id: 4,
        introText: null,
        contentTitle: "ENSURE SECURITY",
        haveBr: false,
        showMarkIcon: false,
        text: `The process of applying for and getting a PAN card is safe and secure.`
      },
      {
        id: 5,
        introText: null,
        contentTitle: "DEDICATED SUPPORT",
        haveBr: false,
        showMarkIcon: false,
        text: `Get the dedicated email & call support for your queries.`
      }
    ]
  }
]
</script>

<style lang="scss">
</style>