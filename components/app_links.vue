<template>
  <ul class="nav-list">
    <li class="nav-item">
      <NuxtLink to="/home">Home</NuxtLink>
    </li>
    <li class="nav-item dropdown-trigger">
      <NuxtLink to="/introduction">About Editingstar
        <img src="@/assets/image/arrow.svg" alt="arrow" class="arrow-icon" />
      </NuxtLink>
      <div class="dropdown-content">
        <NuxtLink to="/introduction">Editingstar Introduction</NuxtLink>
        <NuxtLink to="/direction">Development Direction</NuxtLink>
        <!-- <NuxtLink to="/leadership">Certificates</NuxtLink> -->
      </div>
    </li>
    <li class="nav-item">
      <NuxtLink to="/equity_directive">News & Media</NuxtLink>
    </li>
    <li class="nav-item ">
      <NuxtLink to="/community">Community</NuxtLink>
    </li>

    <li class="nav-item">
      <NuxtLink to="/classroom">Classroom</NuxtLink>
    </li>

    <li class="nav-item ">
      <NuxtLink to="/life-at-msfl" style="position: relative;">
        User Guide
      </NuxtLink>
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
  left: -32px;
  background-color: #9691FF;
  box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.10);
  border-radius: 16px;
  padding: 8px;
  min-width: 223px;
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
  a {
    font-size: 16px !important;
    font-weight: 500 !important;
    font-family: 'spotify';
    padding: 12px 16px;
    border-radius: 10px;
    text-align: left;
    color: #000!important;
    display: block;
    &:hover {
      background-color: #26008D;
      color: #fff!important;
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
.nav-item .router-link-exact-active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  background-color: $color-white;
  width: 100%;
  height: 1.5px;
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
