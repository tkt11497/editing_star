<template>
  <ul class="nav-list">
    <li class="nav-item dropdown-trigger">
      <NuxtLink to="/who-we-are">Features
        <img src="@/assets/image/arrow.svg" alt="arrow" class="arrow-icon" />
      </NuxtLink>
      <div class="dropdown-content">
        <NuxtLink to="/who-we-are">Customization</NuxtLink>
        <NuxtLink to="/our-history">Growth</NuxtLink>
        <NuxtLink to="/leadership">Monetization</NuxtLink>
      </div>
    </li>
    <li class="nav-item">
      <NuxtLink to="/equity_directive">Resources</NuxtLink>
    </li>
    <li class="nav-item ">
      <NuxtLink to="/service/research-and-advisory">Video</NuxtLink>
    </li>

    <li class="nav-item">
      <NuxtLink to="/equity-derivatives-research-report">Podcast</NuxtLink>
    </li>

    <li class="nav-item ">
      <NuxtLink to="/life-at-msfl" style="position: relative;">
        Switch
      </NuxtLink>
    </li>
    <li class="nav-item ">
      <NuxtLink to="/sep-calculator">Help</NuxtLink>
    </li>
    <!-- <li class="nav-item">
      <img src="@/assets/image/search_icon.png" alt="search" />
    </li> -->

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
.arrow-icon{
  margin-top: -3px;
  margin-left: 5px;
   display: inline-block;
   transition: all 0.3s ease;
}
.dropdown-trigger {
  position: relative;
  &:hover .dropdown-content {
    display: block;
  }
}

.dropdown-content {
  display: none;
  position: absolute;
  top: 32px;
  left: -62px;
  background-color: #fff;
  border-radius: 16px;
  padding: 8px;
  min-width: 210px;
  // min-width: 160px;
  min-height: 50px;
  z-index: 1;
  &:after {
    content: "";
    position: absolute;
    top: -20px;
    left: 0px;
    width: 100%;
    height: 20px;
    background-color: transparent;
  }
  .router-link-exact-active::after {
    display: none;
  }
  a {
    font-size: 16px !important;
    font-weight: 500 !important;
    font-family: 'spotify';
    padding: 12px 16px;
    border-radius: 10px;
    text-align: left;
    color: $color-black!important;
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
  color: $color-white;
  font-family: "spotify";
  font-size: 16.5px;
  font-style: normal;
  font-weight: 500;
  line-height: 16.5px;
  letter-spacing: -0.495px;
  position: relative;
  // text-align: right;
  text-decoration: none;
  /* word-wrap: break-word; */
}

.nav-item a:hover,
.nav-item a:active {
  color: $color-white;
  transition: 0.5s ease;
  .arrow-icon{
    transform: rotate(180deg);
  }
}
.nav-item a::after{
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  background-color: $color-white;
  width: 0%;
  height: 1.5px;
  transition: all 0.6s ease;
}
.nav-item a:hover::after {
  width: 100%;
  // animation: moveInLeft 0.5s ease-out 0.1s;
  // animation-fill-mode: backwards;
}
// .router-link-exact-active {
//   color: $color-primary !important;
// }
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
