<template>
  <ul class="nav-list">
    <li class="nav-item dropdown-trigger">
      <NuxtLink to="/who-we-are">About</NuxtLink>
      <div class="dropdown-content">
        <NuxtLink to="/who-we-are">Who We Are</NuxtLink>
        <NuxtLink to="/our-history">Our History</NuxtLink>
        <NuxtLink to="/leadership">Leadership</NuxtLink>
      </div>
    </li>
    <li class="nav-item dropdown-trigger">
      <NuxtLink to="/equity_directive">Our Products</NuxtLink>
      <div class="dropdown-content" style="min-width: 388px">
        <!-- <NuxtLink to="#" class="side-trigger"> -->
        <NuxtLink class="side-trigger" to="/equity_directive">
          Derivatives
          <div class="side-content">
            <NuxtLink to="/equity_directive">Equity Derivative</NuxtLink>
            <NuxtLink to="/commodity_derivative">Commodity Derivative</NuxtLink>
            <NuxtLink to="/currency_derivative">Currency Derivative</NuxtLink>
          </div>
        </NuxtLink>
        <NuxtLink to="/smart_case" class="side-trigger">
          Smartcase Model Portfolio
          <div class="side-content">
            <NuxtLink to="/smart_case">Smart Case</NuxtLink>
            <NuxtLink to="/systematic_equity_plan">Systematic Equity Plan</NuxtLink>
          </div>
        </NuxtLink>
        <NuxtLink to="/depositry_services">Depositry Services</NuxtLink>
        <NuxtLink to="/third_party_product">Third Party Product</NuxtLink>
        <NuxtLink to="/initial-public-offering-ipo"
          >Initial Public Offering (IPO)</NuxtLink
        >
        <NuxtLink to="/national-pension-system-nps"
          >National Pension System (NPS)</NuxtLink
        >
        <NuxtLink to="/mutual-fund">Mutual Fund</NuxtLink>
        <NuxtLink to="/non-convertible-debentures-ncd"
          >Non-Convertible Debentures (NCD)</NuxtLink
        >
        <NuxtLink to="/zero-coupon-ncd-marwadi-shares-and-finance-limited"
          >Zero-Coupon NCD - Marwadi Shares and Finance Limited</NuxtLink
        >
      </div>
    </li>
    <li class="nav-item dropdown-trigger">
      <NuxtLink to="/service/research-and-advisory">Our Services</NuxtLink>
      <div class="dropdown-content" style="min-width: 350px">
        <NuxtLink to="/service/research-and-advisory">Research and Advisory</NuxtLink>
        <NuxtLink class="side-trigger" to="/service/msfl-connect">
          Online Trading
          <div class="side-content">
            <NuxtLink to="/service/msfl-connect">MSFL Connect</NuxtLink>
            <NuxtLink to="/service/web-trading">Web Trading</NuxtLink>
            <NuxtLink to="/service/msfl-diet">MSFL diet</NuxtLink>
          </div>
        </NuxtLink>
        <NuxtLink to="/service/margin-trading-smtf">Margin Trading /SMTF</NuxtLink>
        <NuxtLink to="/service/security-lending-and-borrowing-mechanism"
          >Security lending and borrowing mechanism</NuxtLink
        >
        <NuxtLink to="/service/call-and-trade">Call and Trade</NuxtLink>    
        <NuxtLink to="/service/smart-portfolio-analyse">Smart portfolio analyse</NuxtLink>
        <NuxtLink to="/service/third-party-service-pan-card-services">Third Party Service - PAN Card services</NuxtLink>
      </div>
    </li>

    <li class="nav-item dropdown-trigger">
      <NuxtLink to="/equity-derivatives-research-report">Research</NuxtLink>
      <div class="dropdown-content">
        <NuxtLink to="/equity-derivatives-research-report"
          >Equity & Derivatives Reports</NuxtLink
        >
        <NuxtLink to="/commodity-scoreboard">Commodity Reports</NuxtLink>
        <NuxtLink to="/currency-scoreboard">Currency Reports</NuxtLink>
      </div>
    </li>

    <li class="nav-item dropdown-trigger">
      <NuxtLink to="/life-at-msfl">Careers</NuxtLink>
      <div class="dropdown-content">
        <NuxtLink to="/life-at-msfl">Life at MSFL</NuxtLink>
        <NuxtLink to="/career">Career</NuxtLink>
      </div>
    </li>
    <li class="nav-item dropdown-trigger">
      <NuxtLink to="/sep-calculator">Tools</NuxtLink>
      <div class="dropdown-content">
        <NuxtLink to="/margin-calculator">Margin Calculator</NuxtLink>
        <NuxtLink to="/cagr-calculator">CAGR Calculator</NuxtLink>
        <NuxtLink to="/sep-calculator">SEP Calculator</NuxtLink>
      </div>
    </li>
    <li class="nav-item">
      <NuxtLink to="/contact-us">Contact Us</NuxtLink>
    </li>
    <li class="nav-item">
      <img src="@/assets/image/search_icon.png" alt="search" />
    </li>

    <!-- <li class="nav-item">  
        <button  @click="$router.push('/home')"  style="border-radius: 16px;margin-top:-17px;background:#2D6DD9;color:#fff" class="btn btn--animated">Contact Us</button>
      </li> -->
  </ul>
</template>
<script>
export default {
  computed: {},
  data() {
    return {};
  },
  methods: {
    scrollToPortfolio() {
      // this.$router.push('/')
      setTimeout(() => {
        const elem = document.getElementById("portfolio");
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, "100");
    },
    scrollToTeam() {
      //  this.$router.push('/')
      setTimeout(() => {
        const elem = document.getElementById("team");
        console.log(elem);
        if (elem) {
          elem.scrollIntoView({ behavior: "smooth", block: "start" });
        }
      }, "100");
    },
  },
};
</script>
<style lang="scss" scoped>
.dropdown-trigger {
  position: relative;
  &:hover .dropdown-content {
    display: block;
  }
}
.side-trigger {
  position: relative;
  &:hover .side-content {
    display: block;
  }
}
.dropdown-content {
  display: none;
  position: absolute;
  top: 52px;
  left: 0;
  background-color: #fdfdfd;
  min-width: 210px;
  // min-width: 160px;
  min-height: 50px;
  box-shadow: 0 14px 35px 0 rgb(9 9 12 / 40%);
  z-index: 1;
  &:before {
    content: "";
    position: absolute;
    top: -9px;
    left: 10px;
    width: 18px;
    height: 18px;
    background-color: #fdfdfd;
    transform: rotate(45deg);
  }
  &:after {
    content: "";
    position: absolute;
    top: -9px;
    left: 0px;
    width: 100%;
    height: 20px;
    background-color: transparent;
  }
  .router-link-exact-active::after {
    display: none;
  }
  a {
    font-size: 14px !important;
    font-weight: 500 !important;
    padding: 12px 16px;
    text-align: left;
    display: block;
    &:hover {
      background-color: #f1f1f1;
    }
    &:hover::after {
      display: none;
    }
  }
}
.side-content {
  display: none;
  position: absolute;
  top: 0px;
  left: 100%;
  background-color: #fdfdfd;
  min-width: 200px;
  min-height: 50px;
  box-shadow: 0 14px 35px 0 rgb(9 9 12 / 40%);
  z-index: 1;
  .router-link-exact-active::after {
    display: none;
  }
  a {
    font-size: 14px !important;
    font-weight: 500 !important;
    padding: 12px 16px;
    text-align: left;
    display: block;
    &:hover {
      background-color: #f1f1f1;
    }
    &:hover::after {
      display: none;
    }
  }
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin: 16px 10px;
  display: flex;
  align-items: center;
  color: $color-black;
}

.nav-item a {
  color: $color-black;
  font-family: "Roboto";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  position: relative;
  // text-align: right;
  text-decoration: none;
  /* word-wrap: break-word; */
}

.nav-item a:hover,
.nav-item a:active {
  color: $color-primary;
  transition: 0.5s ease;
}
.nav-item a:hover::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -7px;
  width: 100%;
  height: 2px;
  background-color: $color-primary;
  animation: moveInLeft 0.5s ease-out 0.1s;
  animation-fill-mode: backwards;
}
.router-link-exact-active {
  color: $color-primary !important;
}
.router-link-exact-active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -7px;
  width: 100%;
  height: 2px;
  background-color: $color-primary;
  animation: moveInLeft 0.5s ease-out 0.1s;
  animation-fill-mode: backwards;
}

@media (max-width: 767px) {
  .nav-list {
    display: block;
  }
  .nav-item {
    margin-top: 16px;
    margin-bottom: 16px;
  }
}

@media (min-width: 768px) {
  .nav-list {
    display: flex;
  }
  .home_nav {
    display: none;
  }
}
</style>
