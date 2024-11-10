<template>
  <div class="pcontainer mx-auto py-20">
    <div class="grid grid-cols-12 our_products_banner mb-20">
      <div class="col-span-12 p-8 text-center xs:bg-cyan-950 xs:text-white xs:p-28">
        <h2 class="text-5xl font-semibold tracking-tight text-lightBlue main_title uppercase tracking-wider xs:text-white">Initial Public Offering (IPO)</h2>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div class="text-2xl text-center uppercase useOswald tracking-wider w-1/3 m-auto relative before:content-banner_home_icon inline">            
              Home &nbsp;&nbsp;:&nbsp;:&nbsp; <span aria-hidden="true">Initial Public Offering (IPO)</span>            
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
import Accordion from '../../components/Accordion.vue';

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
        text: `An Initial Public Offering (IPO) is the process by which a private company issues shares of stock to the public for the first time. This allows the company to raise capital and provides an opportunity for investors to buy shares in the company. When a company goes public, its shares are listed on a stock exchange and can be bought and sold by the public.
        br
        An IPO can provide an opportunity for investors to buy shares in a company before it is listed on a stock exchange. This can potentially offer a lower price than its later market value, which can provide an opportunity for significant returns if the company performs well in the stock market. However, it also carries a higher risk as the company's performance and future prospects are uncertain. Investing in an IPO requires a good understanding of the company, its industry, and the market.
        br
        Before investing in an IPO, it's important to do thorough research on the company, its financials, management, and industry. Additionally, it's also important to consider the company's valuation, the number of shares offered, and the price per share. It's also important to be aware of the risks involved, such as the company not performing well, and to consider the liquidity of the shares.
        br
        Overall, investing in an IPO can be a potentially lucrative opportunity, but it's important to approach it with caution and do the necessary research and due diligence.`
      }
    ]
  },
  {
    id: 3,
    accordionTitle: 'Types of IPO Investment',
    accordionContent: [
      {
        id: 1,
        contentTitle: "SFixed Price Method: ",
        text: "In this method, the company sets a fixed price for the shares being offered in the IPO. Investors can then purchase shares at a fixed price."
      },
      {
        id: 2,
        contentTitle: "Book Building Method: ",
        text: "In this method, the company sets a price range for the shares being offered in the IPO, and investors can bid for shares within that range. The final price is determined based on the demand for shares."
      },
      {
        id: 3,
        contentTitle: "Reverse Book Building Method: ",
        text: "This method is typically used in India, it's similar to the book-building method, but the bids are placed by the company and the shares are allotted to the investors at a price determined by the company."
      }
    ]
  },
  {
    id: 4,
    accordionTitle: 'Features of IPO',
    accordionContent: [
      {
        id: 1,
        contentTitle: "Real-time Rate Update: ",
        text: "Get real-time rates on Initial Public Offering that keep you updated on price actions to ensure consistency."
      },
      {
        id: 2,
        contentTitle: 'Portfolio',
        text: "A portfolio is a set of financial investments, help you to get a better view of your investment to improve the success ratio."
      },
      {
        id: 3,
        contentTitle: 'Online Trading',
        text: "You can get involved in online trading at your convenience with an advanced user interface. You can use your phone or computer for an IPO investment."
      },
      {
        id: 4,
        contentTitle: 'Integrated News Flash and Reports',
        text: "You can make well-informed decisions about your IPO investment with high-quality reports. While the news about Initial Public Offerings will help open up your mind to good ideas."
      }
    ]
  },
  {
    id: 5,
    accordionTitle: "Benefits of IPO Investment",
    accordionContent: [
      {id: 1, contentTitle: "GET IN ON THE ACTION EARLY", text: "An IPO is the best example of high growth potential in the investment world. You stand a chance to earn a significant profit in a short period."},
      {id: 2, contentTitle: "MEET LONG-TERM GOALS", text: "As IPO investments are equity investments, they can generate massive returns in the long run. The profit can be so much that it can help you meet your long-term goals."},
      {id: 3, contentTitle: "THE INDIAN IPO STORY", text: "In the last 3-4 years, an increasing number of companies have been going public, presenting endless opportunities for investors. 2020 saw the launch of as many as 43 IPOs in the market!"},
      {id: 4, contentTitle: "EXPECT HIGHER RETURNS", text: "The prices of most of the IPOs shoot up once they get listed. When you get an IPO allotted, it is an incredible investment opportunity."},
    ]
  }
]
</script>

<style lang="scss">
</style>