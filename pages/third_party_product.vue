<template>
  <div class="pcontainer mx-auto py-20">
    <div class="grid grid-cols-12 our_products_banner mb-20">
      <div class="col-span-12 p-8 text-center xs:bg-cyan-950 xs:text-white xs:p-28">
        <h2 class="text-5xl font-semibold tracking-tight text-lightBlue main_title uppercase tracking-wider xs:text-white">Third Party Product</h2>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div class="text-2xl text-center uppercase useOswald tracking-wider w-1/3 m-auto relative before:content-banner_home_icon inline">            
              Home &nbsp;&nbsp;:&nbsp;:&nbsp; <span aria-hidden="true">Third Party Product </span>            
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
    accordionTitle: 'ipo',
    haveBr: true,
    accordionContent: [
      {
        id: 1,
        contentTitle: null,
        text: `An Initial Public Offering (IPO) is the process by which a private company issues shares of stock to the public for the first time. This allows the company to raise capital and provides an opportunity for investors to buy shares in the company. When a company goes public, its shares are listed on a stock exchange and can be bought and sold by the public. br

                An IPO can provide an opportunity for investors to buy shares in a company before it is listed on a stock exchange. This can potentially offer a lower price than its later market value, which can provide an opportunity for significant returns if the company performs well in the stock market. However, it also carries a higher risk as the company's performance and future prospects are uncertain. Investing in an IPO requires a good understanding of the company, its industry, and the market. br

                Before investing in an IPO, it's important to do thorough research on the company, its financials, management, and industry. Additionally, it's also important to consider the company's valuation, the number of shares offered, and the price per share. It's also important to be aware of the risks involved, such as the company not performing well, and to consider the liquidity of the shares. br

                Overall, investing in an IPO can be a potentially lucrative opportunity, but it's important to approach it with caution and do the necessary research and due diligence. br`
      }
    ]
  },
  {
    id: 2,
    accordionTitle: 'nps',
    accordionContent: [
      {
        id: 1,
        contentTitle: null,
        text: "NPS is a retirement saving scheme that offers not only the benefits of long-term saving but also the tax benefits under Section 80C of the Income Tax Act, up to a limit of Rs 1.5 lakhs per year. It is a smart and efficient way to plan for retirement and also to save on taxes."
      }
    ]
  },
  {
    id: 3,
    accordionTitle: 'Mutual Fund',
    accordionContent: [
      {
        id: 1,
        contentTitle: null,
        text: "A mutual fund is a type of investment vehicle that pools money from multiple investors to purchase securities, typically stocks, bonds, or a mix of both. The value of a mutual fund's holdings is known as its net asset value (NAV). Investors buy shares in the mutual fund, and the price per share is based on the NAV. The fund is managed by a professional money manager, who makes investment decisions on behalf of the fund's shareholders. Mutual funds offer investors the benefits of diversification and professional management, but they also come with fees and expenses that can eat into returns."
      }
    ]
  }
]
</script>

<style lang="scss">
</style>