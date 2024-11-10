<template>
  <div class="pcontainer mx-auto py-20">
    <div class="grid grid-cols-12 our_products_banner mb-20">
      <div class="col-span-12 p-8 text-center xs:bg-cyan-950 xs:text-white xs:p-28">
        <h2 class="text-5xl font-semibold tracking-tight text-lightBlue main_title uppercase tracking-wider xs:text-white">Non-Convertible Debentures (NCD)</h2>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div class="text-2xl text-center uppercase useOswald tracking-wider w-1/3 m-auto relative before:content-banner_home_icon inline">            
              Home &nbsp;&nbsp;:&nbsp;:&nbsp; <span aria-hidden="true">Non-Convertible Debentures (NCD)</span>            
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
    accordionTitle: 'Overview',
    introText: null,
    is2TabularUi: false,
    accordionContent: [
      {
        id: 1,
        contentTitle: null,
        haveBr: false,
        text: `NCDs (Non-Convertible Debentures) are fixed-interest loans issued by companies. They offer fixed returns and have a specific maturity date. Unlike convertible debentures, they cannot be converted into shares. NCDs provide investors with a simple and secure way to For more details please contact us on Mo: 85111 60888, 98790 16667 , 83208 97726earn fixed income.`
      },
      {
        id: 2,
        contentTitle: null,
        haveBr: false,
        textBold: `For more details please contact us on`,
        text: ` Mo: ??, ?? , ??`
      },
    ]
  },
  {
    id: 2,
    accordionTitle: "Our Latest NCD Issue hIghlight",
    haveBr: false,
    is2TabularUi: true,
    accordionContent: [
      {
        id: 1,
        introText: null,
        contentTitle: "Tenure",
        haveBr: false,
        text: `18 months from the Deemed Date of Allotment`
      },
      {
        id: 2,
        introText: null,
        contentTitle: "Face Value",
        haveBr: false,
        text: `Rs. 1,00,000/- Per Debenture`
      },
      {
        id: 3,
        introText: null,
        contentTitle: "Tranche Size",	
        haveBr: false,
        text: `Rs.50 Crores + Rs.100 Crores Greenshoe Option`
      },
      {
        id: 4,
        introText: null,
        contentTitle: " Mode of Issue",	 
        haveBr: false,
        text: `Private placement`
      },
      {
        id: 5,
        introText: null,
        contentTitle: "Types of instrument",	
        haveBr: false,
        text: `Senior, unsecured, rated, listed, redeemable, taxable, non-convertible debentures`
      },
      {
        id: 6,
        introText: null,	
        contentTitle: "Minimum Application Value",	
        haveBr: false,
        text: `Rs. 1 Lakh & in it's Multiple`
      },
      {
        id: 7,
        introText: null,	 	
        contentTitle: "Listing On",	
        haveBr: false,
        text: `Bombay Stock Exchange (BSE)`
      },
      {
        id: 8,
        textBold: `For more details please contact us on`,
        text: ` Mo: ??, ?? , ??`
      }
    ]
  },
  {
    id: 3,
    accordionTitle: "FAQs",
    haveBr: false,
    is2TabularUi: false,
    accordionContent: [
      {
        id: 1,
        introText: null,
        contentTitle: "1. What is an NCD? ",
        haveBr: false,
        text: `Non-convertible debentures (NCDs) are debt instruments with a fixed tenure issued by companies to raise money for business purposes. `
      },
      {
        id: 2,
        introText: null,
        contentTitle: "2. What is the category of this instrument?",
        haveBr: false,
        text: `Listed, Unsecured, Redeemable, Non-convertible debentures.`
      },
      {
        id: 3,
        introText: null,
        contentTitle: "3. What will be the mode of the issue?",
        haveBr: false,
        text: `The NCD will be issued in DEMAT mode only and it is on Private Placement Basis. `
      },
      {
        id: 4,
        introText: null,
        contentTitle: "4. What is the total issue size?",
        haveBr: false,
        text: `The total issue size is Rs. 150.00 Crores.`
      },
      {
        id: 5,
        introText: null,
        contentTitle: "5. What is the face value of the NCD?",
        haveBr: false,
        text: `The Face Value and Issue Price per NCD is Rs. 1 Lacs.`
      },
      {
        id: 6,
        introText: null,
        contentTitle: "6. What is the minimum size of the application/investment?",
        haveBr: false,
        text: `1 NCD (i.e. Rs. 1 lacs) and then an investor can apply in multiples of 1 NCD of Rs. 1 Lacs each. `
      },
      {
        id: 7,
        introText: null,
        contentTitle: "7. What is the Interest Rate of NCD?",
        haveBr: false,
        text: `11% p.a, payable at Redemption only i.e. on completion of 18 months.`
      },
      {
        id: 8,
        introText: null,
        contentTitle: "8. What is the tenure of the NCD? ",
        haveBr: false,
        text: `The NCD will be issued for 18 months from the date of allotment.`
      },
      {
        id: 9,
        introText: null,
        contentTitle: "9. What is the interest rate in case of delay/default in interest payment?",
        haveBr: false,
        text: `Coupon Rate Plus Additional interest of at least @ 2% p.a. on the outstanding Principal amount. `
      },
      {
        id: 10,
        introText: null,
        contentTitle: "10. Is it possible to make premature redemption of the NCD?",
        haveBr: false,
        text: `It is listed on the BSE Exchange and investors can exit at any point of time.`
      },
      {
        id: 11,
        introText: null,
        contentTitle: "11. Can the debentures be transferred off the market?",
        haveBr: false,
        text: `Yes, the debentures can be transferred off the market by following Depository Participant’s processes. `
      },
      {
        id: 12,
        introText: null,
        contentTitle: "12. Can the NCD be pledged with bank and Overdraft facilities be availed?",
        haveBr: false,
        text: `Depending on the banks’ policies, generally, the banks allow Overdraft facilities against NCD.`
      }, 
      {
        id: 13,
        introText: null,
        contentTitle: "13. What category of investors can invest in NCD?",
        haveBr: true,
        showMarkIcon: true,
        text: `The following are eligible categories; br
                Companies, Body Corporate, Financial Institutions, NBFCs, Statutory Corporations; br 
                Commercial Banks and Regional Rural Banks; br
                Provident funds/ Superannuation funds or gratuity funds, private trusts, as may be permitted by respective rules and guidelines of such funds/ trusts; br
                Registered Society; br
                Partnership firms & LLPs; br
                Individuals and HUFs; 
                High Net Worth Individuals; br
                Insurance Companies; br
                Mutual Funds; br
                Portfolio Manager registered with SEBI; br
                Any other investor permitted to invest in debentures of Indian body corporate br
                NOTE: No Identified Person shall be entitled to renounce his right to subscribe to the NCD to any person. Only the person(s) to whom this Placement Memorandum is circulated by the Companyshall be eligible to apply for NCD (“Identified Persons”).  `
      }, 
      {
        id: 14,
        introText: null,
        contentTitle: "14. What is the rating for NCD?",
        haveBr: false,
        text: `Credit Rating of A by Infomerics Valuation & Ratings Pvt. Ltd..`
      }, 
      {
        id: 15,
        introText: null,
        contentTitle: "15. What are the objects of the NCD Issue? ",
        haveBr: false,
        text: `To fund the Algo-based arbitrage/jobbing business activities of the Company.`
      }, 
      {
        id: 16,
        introText: null,
        contentTitle: "16. Can the NCD be placed with brokers towards margin requirements in securities market transactions?",
        haveBr: false,
        text: `To fund the Algo-based arbitrage/jobbing business activities of the Company.`
      }, 
      {
        id: 17,
        introText: null,
        contentTitle: "17. Are there any debenture trustees?",
        haveBr: false,
        text: `Yes. MITCON Credential Trusteeship Services Limited is appointed as a debenture trustee.`
      }, 
      {
        id: 18,
        introText: null,
        contentTitle: "18. Do the NCD holders carry any voting rights?",
        haveBr: false,
        text: `No, the NCD holders do not have voting rights.`
      }, 
      {
        id: 19,
        introText: null,
        contentTitle: "19. Once the bond matures, how do I get my money back?",
        haveBr: false,
        text: `The money will automatically get remitted to your bank account on the date of maturity.`
      }, 
      {
        id: 20,
        introText: null,
        contentTitle: "20. Is a Demat account needed for NCD? ",
        haveBr: false,
        text: `Having a Demat account to invest in NCDs is essential as most debentures are issued in dematerialized mode.`
      }
    ]
  }
]
</script>

<style lang="scss">
</style>