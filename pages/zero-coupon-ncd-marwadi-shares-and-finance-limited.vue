<template>
  <div class="pcontainer mx-auto py-20">
    <div class="grid grid-cols-12 our_products_banner mb-20">
      <div class="col-span-12 p-8 text-center xs:bg-cyan-950 xs:text-white xs:p-28">
        <h2 class="text-5xl font-semibold tracking-tight text-lightBlue main_title uppercase tracking-wider xs:text-white">Zero-Coupon NCD - Marwadi Shares and Finance Limited</h2>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div class="text-2xl text-center uppercase useOswald tracking-wider w-1/3 m-auto relative before:content-banner_home_icon inline before:absolute before:mt-1.5 before:-ml-8">            
              <label class="leading-10 ml-4 -mt-40">Home &nbsp;&nbsp;:&nbsp;:&nbsp; Zero-Coupon NCD - Marwadi Shares and Finance Limited </label>            
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
    accordionTitle: "Our Latest ZCNCD Issue highlight",
    haveBr: false,
    is2TabularUi: true,
    accordionContent: [
      {
        id: 1,
        introText: null,
        contentTitle: "Tenure",
        haveBr: false,
        text: `27 Months  From The Deemed Date of Allotment`
      },	
      {
        id: 2,
        introText: null,
        contentTitle: "Rating Agency",
        haveBr: false,
        text: `Infomerics Valuation & Rating Pvt. Ltd.`
      },
      {
        id: 3,
        introText: null,
        contentTitle: "Rating",
        haveBr: false,
        text: `IVR A (SO)`
      },
      {
        id: 4,
        introText: null,
        contentTitle: "Face Value",
        haveBr: false,
        text: `Rs. 1,00,000/- Per Debenture`
      },
      {
        id: 5,
        introText: null,
        contentTitle: "Tranche Size",
        haveBr: false,
        text: `Rs. 100 Crores 
              (Comprising of Base Issue size of Rs. 50 Crores and Green Shoe Option of Rs. 50 Crores)`
      },
      {
        id: 6,
        introText: null,
        contentTitle: "Mode of Issue",
        haveBr: false,
        text: `Private Placement`
      },
      {
        id: 7,
        introText: null,
        contentTitle: "Types of instrument",
        haveBr: false,
        text: `Rated, Listed, Senior, Unsecured, Transferable, Redeemable, Taxable, Zero Coupon             
                Non-Convertible Debentures`
      },
      {
        id: 8,
        introText: null,
        contentTitle: "Minimum Application Value",
        haveBr: false,
        text: `Rs. 1 Lakh & in it's Multiple`
      },
      {
        id: 9,
        introText: null,
        contentTitle: "Listing On",
        haveBr: false,
        text: `Bombay Stock Exchange (BSE)`
      },
      {
        id: 10,
        introText: null,
        contentTitle: "TDS 15H & 15G Link",
        haveBr: false,
        text: `Click Here`
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
        contentTitle: "1. What is ZCNCD?",
        haveBr: false,
        text: `Zero-coupon non-convertible debentures (ZCNCDs) are debt instruments with a fixed tenure issued by companies to raise money for business purposes.`
      },
      {
        id: 2,
        introText: null,
        contentTitle: "2. What is the category of this instrument?",
        haveBr: false,
        text: `Senior, unsecured, rated, listed, redeemable, taxable, Zero Coupon Non-Convertible Debentures.`
      },
      {
        id: 3,
        introText: null,
        contentTitle: "3. What will be the mode of issue?",
        haveBr: false,
        text: `The ZCNCD will be issued in DEMAT mode only and it is on Private Placement Basis.`
      },
      {
        id: 4,
        introText: null,
        contentTitle: "4. What is the total issue size?",
        haveBr: false,
        text: `The total issue size is Rs. 100.00 Crores.`
      },
      {
        id: 5,
        introText: null,
        contentTitle: "5. What is the face value of the ZCNCD?",
        haveBr: false,
        text: `The Face Value and Issue Price per ZCNCD are Rs. 1 Lacs.`
      },
      {
        id: 6,
        introText: null,
        contentTitle: "6. What is the Interest Rate of ZCNCD?",
        haveBr: false,
        text: `11% p.a, payable at Redemption only i.e. on completion of 27 months from the Deemed Date of Allotment.`
      },
      {
        id: 7,
        introText: null,
        contentTitle: "7. What is the tenure of the ZCNCD?",
        haveBr: false,
        text: `The ZCNCD will be issued for 27 months from the date of allotment.`
      },
      {
        id: 8,
        introText: null,
        contentTitle: "What is the interest rate in case of delay/default in interest payment?",
        haveBr: false,
        text: `Coupon Rate Plus Additional interest of at least @ 2% p.a. on the outstanding principal amount.`
      },
      {
        id: 9,
        introText: null,
        contentTitle: "9. Is it possible to make premature redemption of the ZCNCD?",
        haveBr: false,
        text: `It is listed on the BSE Exchange and investors can exit at any point in time.`
      },
      {
        id: 10,
        introText: null,
        contentTitle: "10. Can the debentures be transferred off the market?",
        haveBr: false,
        text: `Yes, the debentures can be transferred off-market by following the Depository Participant’s processes.`
      },
      {
        id: 11,
        introText: null,
        contentTitle: "11. Can the ZCNCD be pledged with the bank and Overdraft facilities be availed?",
        haveBr: false,
        text: `Depending on the banks' policies, generally, the banks allow Overdraft facilities against ZCNCD.`
      },
      {
        id: 12,
        introText: 'The following are eligible categories',
        contentTitle: "12. What category of investors can invest in ZCNCD?",
        haveBr: true,
        showMarkIcon: true,
        text: `Companies, Body Corporate, financial institutions, NBFCs, Statutory Corporations br
                Commercial Banks and RegionalRural Banks br
                Provident funds/ Superannuation funds or gratuity funds, private trusts, as may be permitted by respective rules and guidelines of such funds/ trusts br
                Registered Society br
                Partnership firms & LLPs br
                Individuals and HUFs br
                High Net Worth Individuals br
                Insurance Companies br
                Mutual Funds br
                Portfolio Manager registered with SEBI br
                Any other investor permitted to invest in debentures of Indian body corporate.`,
        conclusionText: `NOTE: No Identified Person shall be entitled to renounce his right to subscribe   
                          to the ZCNCD to any person. 

                          Only the person (s) to whom this Placement Memorandum is circulated by the Company shall be eligible to apply for ZCNCD (“Identified Persons”).`
      }, 
      {
        id: 13,
        introText: null,
        contentTitle: "13. What is the rating for ZCNCD?",
        haveBr: false,
        text: `Credit Rating of A by Infomerics Valuation & Ratings Pvt. Ltd..`
      }, 
      {
        id: 14,
        introText: null,
        contentTitle: "14. What are the objects of the ZCNCD Issue?",
        haveBr: false,
        text: `To fund the Algo-based arbitrage/jobbing business activities of the Company.`
      }, 
      {
        id: 15,
        introText: null,
        contentTitle: "15. Can the ZCNCD be placed with brokers towards margin requirements in securities market transactions?",
        haveBr: false,
        text: `No`
      }, 
      {
        id: 16,
        introText: null,
        contentTitle: "16. Are there any debenture trustees?",
        haveBr: false,
        text: `Yes. MITCON Credential Trusteeship Services Limited is appointed as a debenture trustee.`
      }, 
      {
        id: 17,
        introText: null,
        contentTitle: "17. Do the ZCNCD holders carry any voting rights?",
        haveBr: false,
        text: `No, the ZCNCD holders do not have voting rights.`
      }, 
      {
        id: 18,
        introText: null,
        contentTitle: "18. Once the bond matures, how do I get my money back?",
        haveBr: false,
        text: `The money will automatically get remitted to your bank account on the date of maturity.`
      }, 
      {
        id: 19,
        introText: null,
        contentTitle: "19. Is a Demat account needed for ZCNCD?",
        haveBr: false,
        text: `Having a Demat account to invest in ZCNCDs is essential as most debentures are issued in dematerialized mode.`
      }, 
      {
        id: 20,
        introText: null,
        contentTitle: "20. Redemption Amount?",
        haveBr: false,
        text: `Rs. 1,26,494 per Debenture to be paid on the Redemption Date. `
      }
    ]
  }
]
</script>

<style lang="scss">
</style>