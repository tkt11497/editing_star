<template>
  <div class="pcontainer mx-auto py-20">
    <div class="grid grid-cols-12 our_products_banner mb-20">
      <div class="col-span-12 p-8 text-center xs:bg-cyan-950 xs:text-white xs:p-28">
        <h2 class="text-5xl font-semibold tracking-tight text-lightBlue main_title uppercase tracking-wider xs:text-white">Mutual Fund</h2>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div class="text-2xl text-center uppercase useOswald tracking-wider w-1/3 m-auto relative before:content-banner_home_icon inline">            
              Home &nbsp;&nbsp;:&nbsp;:&nbsp; <span aria-hidden="true">Mutual Fund</span>            
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
    accordionTitle: 'Mutual Fund Investment',
    introText: null,
    haveBr: true,
    accordionContent: [
      {
        id: 1,
        contentTitle: null,
        text: `Maximize Your Returns: The Benefits of Investing in Mutual Funds. br
                Discover how professional management and diversification can help you achieve your financial goals with mutual fund investing. br`
      }
    ]
  },
  {
    id: 2,
    accordionTitle: "Overview",
    introText: null,
    accordionContent: [
      {
        id: 1,
        contentTitle: null,
        text: `A mutual fund is a type of investment vehicle that pools money from multiple investors to purchase securities, typically stocks, bonds, or a mix of both. The value of a mutual fund's holdings is known as its net asset value (NAV). Investors buy shares in the mutual fund, and the price per share is based on the NAV. The fund is managed by a professional money manager, who makes investment decisions on behalf of the fund's shareholders. Mutual funds offer investors the benefits of diversification and professional management, but they also come with fees and expenses that can eat into returns.`
      }
    ]
  },
  {
    id: 3,
    accordionTitle: "Description",
    introText: null,
    haveBr: true,
    accordionContent: [
      {
        id: 1,
        contentTitle: null,
        text: `The primary goal of a mutual fund is to provide investors with a way to invest in a professionally managed portfolio of securities that aligns with their investment objectives, such as growth, income, or preservation of capital. br
        
        When an investor buys shares in a mutual fund, they are buying a portion of the fund's assets, which are held in trust by the fund's custodian. The value of the investor's shares is determined by the net asset value (NAV) of the fund, which is calculated by dividing the total value of the fund's assets by the number of shares outstanding. The NAV is usually calculated at the end of each trading day, and the price at which shares can be bought or sold is based on the NAV. br 
        
        The mutual fund is managed by a team of professional money managers who are responsible for making investment decisions on behalf of the fund. These managers use a variety of investment strategies to select the securities that make up the fund's portfolio, with the goal of achieving the investment objectives stated in the fund's prospectus. The fund's prospectus provides information about the fund's investment objectives, strategies, and risks, as well as the fund's management fees and other expenses. br 
        
        Mutual funds offer a number of benefits to investors, including diversification, professional management, and liquidity. Diversification helps to spread risk across a variety of different securities, which can help to reduce the impact of any one security's poor performance on the overall portfolio. Professional management allows investors to benefit from the expertise and experience of the fund's managers, who have access to research and other resources that the individual investor may not have. Liquidity allows investors to easily buy and sell shares in the fund, which is convenient for those who need to access their funds quickly. br
        
        However, mutual funds also have some drawbacks, including management fees and other expenses, which can eat into returns, and the possibility of poor performance if the fund's managers make bad investment decisions. It's important for investors to carefully review a fund's prospectus and consider their own investment objectives and risk tolerance before investing in a mutual fund. br `
      }
    ]
  },
  {
    id: 4,
    accordionTitle: 'Types of Mutual Fund',
    introText: null,
    haveBr: false,
    accordionContent: [
      {
        id: 1,
        contentTitle: 'Equity Funds',
        text: 'These funds invest primarily in stocks and aim to provide long-term capital growth. They are further subdivided into various categories like large-cap, mid-cap, small-cap, sectoral, and thematic funds.'
      },
      {
        id: 2,
        contentTitle: 'Debt Funds',
        text: 'These funds invest primarily in fixed-income securities such as bonds, debentures, and government securities. They aim to provide regular income and capital preservation. They are further subdivided into various categories like short-term, long-term, liquid, gilt and corporate bond funds.'
      },
      {
        id: 3,
        contentTitle: 'Balanced Funds',
        text: 'These funds invest in both equities and fixed-income securities in a pre-determined proportion. They aim to provide both growth and income and are also known as hybrid funds.'
      },
      {
        id: 4,
        contentTitle: 'Index Funds',
        text: 'These funds track a specific index such as the Nifty or the Sensex. They invest in the same securities as the index and in the same proportion, with the goal of replicating the performance of the index.'
      },
      {
        id: 5,
        contentTitle: 'Gold Funds',
        text: 'These funds invest in gold-related investments such as physical gold, gold ETFs or gold mining companies. They are intended to provide a hedge against inflation and currency fluctuations.'
      },
      {
        id: 6,
        contentTitle: 'International Funds',
        text: 'These funds invest in foreign securities with the aim of providing diversification and exposure to different markets.'
      },
      {
        id: 7,
        contentTitle: 'Tax-saving Funds',
        text: 'These funds, also known as Equity-Linked Saving Scheme (ELSS) funds, invest primarily in equities and are eligible for tax deductions under section 80C of the Income Tax Act.'
      },
      {
        id: 8,
        contentTitle: 'Retirement Funds',
        text: 'These funds are specially tailored to meet the investment needs of investors approaching or in retirement age.'
      }
    ]
  }
]
</script>

<style lang="scss">
</style>