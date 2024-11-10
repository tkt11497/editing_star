<template>
  <div class="pcontainer mx-auto py-20">
    <div class="grid grid-cols-12 our_products_banner mb-20">
      <div class="col-span-12 p-8 text-center xs:bg-cyan-950 xs:text-white xs:p-28">
        <h2 class="text-5xl font-semibold tracking-tight text-lightBlue main_title uppercase tracking-wider xs:text-white">National Pension System (NPS)</h2>
        <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div class="text-2xl text-center uppercase useOswald tracking-wider w-1/3 m-auto relative before:content-banner_home_icon inline">            
              Home &nbsp;&nbsp;:&nbsp;:&nbsp; <span aria-hidden="true">National Pension System (NPS) </span>            
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
    accordionTitle: 'NPS & Tax Saving',
    haveBr: true,
    accordionContent: [
      {
        id: 1,
        contentTitle: null,
        text: ` Maximize Your Retirement Savings with NPS and Tax Benefits. br
                Invest in the National Pension System and reduce your tax liability with Section 80C br
                Avail Tax deductions of up to Rs 1.5 lakhs per year. br
                New User Registration / Exciting User Access br`,
        BreadcrumLink: "New User Registration / Exciting User Access"
      }
    ]
  },
  {
    id: 2,
    accordionTitle: 'Overview',
    haveBr: false,
    accordionContent: [
      {
        id: 1,
        contentTitle: null,
        text: `NPS is a retirement saving scheme that offers not only the benefits of long-term saving but also the tax benefits under Section 80C of the Income Tax Act, up to a limit of Rs 1.5 lakhs per year. It is a smart and efficient way to plan for retirement and also to save on taxes.`
      }
    ]
  },
  {
    id: 3,
    accordionTitle: 'Description',
    haveBr: true,
    accordionContent: [
      {
        id: 1,
        contentTitle: null,
        text: `The National Pension System (NPS) is a government-sponsored pension scheme in India that allows individuals to save for their retirement. It is a long-term investment option that offers several benefits, including professional management of funds, low costs, and flexibility in terms of investment choices. br
        
        In addition to the benefits of saving for retirement, NPS also offers tax benefits to investors. Under Section 80C of the Income Tax Act, contributions made to NPS are eligible for tax deductions up to a limit of Rs 1.5 lakhs per year. This means that an individual can reduce their tax liability by investing in NPS. br
        
        By investing in NPS, individuals can not only secure their financial future but also save on taxes. It is a smart and efficient way to plan for retirement while also reducing one's tax burden. Moreover, NPS also offers different investment options based on the investors' risk appetite which makes it even more flexible. br`
      }
    ]
  },
  {
    id: 4,
    accordionTitle: 'Types of NPS',
    haveBr: true,
    accordionContent: [
      {
        id: 1,
        contentTitle: 'Tier I account',
        text: `This is a non-withdrawable account that is meant for long-term savings for retirement. The contributions made to this account are eligible for tax deductions under Section 80C of the Income Tax Act, up to a limit of Rs 1.5 lakhs per year.`
      },
      {
        id: 2,
        contentTitle: 'Tier II account',
        text: `This is a withdrawable account that is meant for additional savings for retirement. It is linked to a Tier I account and can be opened only if the individual already has a Tier I account. The contributions made to this account are not eligible for tax deductions.`
      }
    ]
  },
  {
    id: 5,
    accordionTitle: 'Benefits of NPS',
    accordionContent: [
      {
        id: 1,
        contentTitle: 'Professional management of funds',
        text: `NPS is managed by professional fund managers, who invest the funds in various asset classes, such as equity, fixed income, and government securities, based on the individual's risk appetite.`
      },
      {
        id: 2,
        contentTitle: 'Low costs',
        text: `The management charges for NPS are low, making it a cost-effective investment option.`
      },
      {
        id: 3,
        contentTitle: 'Flexibility',
        text: `NPS offers different investment options, such as active and auto choice, which allows individuals to choose how their money is invested and gives them the flexibility to change their investment choices over time.`
      },
      {
        id: 4,
        contentTitle: 'Tax benefits',
        text: `Contributions made to NPS are eligible for tax deductions under Section 80C of the Income Tax Act, up to a limit of Rs 1.5 lakhs per year, which can help reduce an individual's tax liability.`
      },
      {
        id: 5,
        contentTitle: 'Withdrawal and pension options',
        text: `NPS account holders can withdraw up to 60% of their corpus at the time of retirement, while the remaining 40% has to be used to purchase an annuity plan that provides a pension to the individual.`
      },
      {
        id: 6,
        contentTitle: 'Portable',
        text: `NPS account is portable across jobs, and it is also possible to switch between fund managers.`
      },
      {
        id: 7,
        contentTitle: 'Government Backing',
        text: `It is a government-sponsored pension scheme, which adds an extra level of security to the investment.`
      },
      {
        id: 6,
        contentTitle: 'Different options available ',
        text: `NPS also provides different options for investment like Equity, Corporate bonds, Government bonds and Alternative investment funds.`
      }
    ]
  },
  {
    id: 6,
    accordionTitle: 'Features of NPS',
    accordionContent: [
      {
        id: 1,
        contentTitle: 'Account opening',
        text: `NPS accounts can be opened through Point of Presence-Service Providers (POP-SPs) or through the National Pension System Trust (NPS Trust) website.`
      },
      {
        id: 2,
        contentTitle: 'Contribution ',
        text: `Individuals can make regular contributions to their NPS account, either through electronic transfer or by issuing post-dated cheques.`
      },
      {
        id: 3,
        contentTitle: 'Investment choices',
        text: `NPS offers different investment options, such as active and auto choice, which allows individuals to choose how their money is invested and gives them the flexibility to change their investment choices over time.`
      },
      {
        id: 4,
        contentTitle: 'Asset allocation ',
        text: `NPS funds are invested in different asset classes, such as equity, fixed income, and government securities, based on the individual's risk appetite and investment choice.`
      },
      {
        id: 5,
        contentTitle: 'Asset allocation ',
        text: `NPS funds are invested in different asset classes, such as equity, fixed income, and government securities, based on the individual's risk appetite and investment choice.`
      },
      {
        id: 6,
        contentTitle: 'Withdrawal',
        text: `NPS account holders can withdraw up to 60% of their corpus at the time of retirement, while the remaining 40% has to be used to purchase an annuity plan that provides a pension to the individual.`
      },
      {
        id: 7,
        contentTitle: 'Exit option ',
        text: `Individuals can exit from the NPS scheme at any time, but they will have to use at least 80% of the corpus to purchase an annuity plan.`
      },
      {
        id: 8,
        contentTitle: 'Portability',
        text: `The NPS account is portable across jobs and it is also possible to switch between fund managers.`
      },
      {
        id: 9,
        contentTitle: 'Tax benefits',
        text: `Contributions made to NPS are eligible for tax deductions under Section 80C of the Income Tax Act, up to a limit of Rs 1.5 lakhs per year, which can help reduce an individual's tax liability.`
      },
      {
        id: 10,
        contentTitle: 'Nomination ',
        text: `NPS account holders can nominate a person to receive the corpus in case of their death.`
      },
      {
        id: 11,
        contentTitle: 'Tax benefits',
        text: `Contributions made to NPS are eligible for tax deductions under Section 80C of the Income Tax Act, up to a limit of Rs 1.5 lakhs per year, which can help reduce an individual's tax liability.`
      },
      {
        id: 9,
        contentTitle: 'Transparency',
        text: `NPS provides regular statements of account and transaction details to account holders, allowing them to monitor their investments and make informed decisions.`
      }
    ]
  },
  {
    id: 7, 
    accordionTitle: 'Service Charges',
    accordionContent: [
      { 
        id: 1,
        contentTitle: 'coming soon tabular data'
      }
    ]
  }
]
</script>

<style lang="scss">
</style>