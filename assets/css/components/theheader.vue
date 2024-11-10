<template> 
    <div class="home-top">
        <div class="home-top-first mr-4">
            <a href="" class="btn-text">Investor Relations</a>
            <a href="" class="btn-text">Download</a>
        </div>
        <div class="home-top-second">
            <button class="m-btn" style="width: 70px;">
                Login
            </button>
            <button class="m-btn">
                Open An Account
            </button>
            <button class="m-btn">
                Become a Partner
            </button>
        </div>
    </div>
    <noticeBar style="margin-bottom: 87px;" :bgColor="'#e8f7ff'" :phoneHeight="'55px'" :market_data="market_data">
        <template #left_custom>
            <div class="notice-left-home">
                <span class="span1">{{market_data[0]?.symbol}} :</span>
                <span class="span2">{{market_data[0]?.Ltp}}</span>
                <span class="span3">{{market_data[0]?.change}}({{market_data[0]?.per_change}}%)</span>
            </div>
        </template>
    </noticeBar>    
      <div id="navbar" class="fixed  ">
  
        <div class="bottom-section">
          <div class="header1" >
            <div class="brand-name" @click="$router.push('/home')">
                <img width="146px" src="@/assets/image/logo_m.png" alt="logo"/>
              </div>
            <div class="header_content">
  
              <div class="app-links">
                <app-links></app-links>
              </div>
            </div>
            <div class="navbar_content">
                <div class="navigation drawer-toggle">
                      <input type="checkbox" class="navigation__checkbox" ref="navi_toggle" id="navi-toggle">

                      <label for="navi-toggle" class="navigation__button2">
                        <span class="navigation__icon2">&nbsp;</span>
                    </label>
                    
                      <label for="navi-toggle" class="navigation__button">
                        <span class="navigation__icon">&nbsp;</span>
                    </label>

                    <div class="navigation__background">&nbsp;</div>

                    <nav class="navigation__nav">
                      <div class="navigation__button2" @click="closeNav">
                        <span class="navigation__icon2">&nbsp;</span>
                      </div>
                    <MobileNav @close_nav="closeNav" />
                    </nav>
                </div>
                <img src="@/assets/image/search_icon.png" alt="search" class="search-icon"/>
              </div>
        </div>
        </div>
      </div>
  </template>
  
<script setup>
  import axios from 'axios'
  import AppLinks from './app_links.vue'
  import { useTemplateRef } from 'vue';
  import { onMounted } from 'vue'  
  const navi_toggle = useTemplateRef('navi_toggle')
  const closeNav = () => {
    navi_toggle.value.checked = false
  }
const market_data = ref([])
const url = 'https://corsproxy.io/?' + encodeURIComponent('https://www.marwadionline.com/market-info');
const getmarket_data = async() =>{
  const res = await axios.get(url)
  if(res.data.Table[0].change){
    res.data.Table[0].change = (+res.data.Table[0].change).toFixed(2)
  }
  market_data.value = res.data.Table?res.data.Table:[]
}
onMounted(() => {
  getmarket_data()
})
  onMounted(() => {
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar')
      // const firstDivHeight = document.getElementById('first-div').offsetHeight;
      // console.log(window.scrollY )
      if (window.scrollY > 100) {
        navbar.classList.add('top')
      } else {
        navbar.classList.remove('top') 
      }
    })
  })
</script>
  
<style lang="scss" scoped>
.navbar_content{
    display: none;
    align-items: center;
    .search-icon{
        width: 45px;
        height: 45px;
        display: inline-block;
    }
    @include respond(850px){
        display: flex;
    }
}
.home-top{
    width: 100%;
    margin:0 auto;
    max-width: $max-width-home;
    height: 50px;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-end;
    align-items: center;
    .m-btn , .btn-text{
        &:not(:last-child){
            margin-right: 10px;
        }
    }
    @include respond(tab-port){
        padding: 0 2rem;
    }
    @include respond(phone){
        height: auto;
        padding: 0 1rem;
        .home-top-first{
            display: block;
            width: 100%;
            text-align: center;
            margin:5px 0px;
        }
        .home-top-second{
            display: block;
            width: 100%;
            text-align: center;
            margin-bottom: 5px;
        }
    }
    @include respond(356px){
        .m-btn{
           font-size: 11px;
           padding: 0px 5px;
        }
    }
    
}
.notice-left-home{
    color: #000;
    font-size: 14px;
    font-weight: 600;
    border-right: 1px solid #000;
    padding-right: 10px;
    .span1{
       text-transform: uppercase;
       font-size: 14px;
       font-weight: 500;
    }
    .span2{
        font-size: 20px;
        font-weight: 900;
        margin-right: 5px;
    }
    .span3{
        font-size: 12px;
        font-weight: 500;
        text-transform: uppercase;
        color: #00a651;
    }
    @include respond(tab-port){
        .span1{
            font-size: 14px;
        }
        .span2{
            font-size: 18px;
        }
        .span3{
            font-size: 12px;
        }
    }
    @include respond(phone){
        border-right: none;
        .span2{
            font-size: 15px;
        }
    }
}  
  #navbar {
    z-index: 800;
    transition: all 0.7s ease-in-out;
    background-color: #fff;
  }
  /* #navbar #navbar-inner {
    width: 1600px;
    max-width: 100%;
    margin: 0 auto;
  } */
  
  #navbar.fixed {
    position: fixed;
    top: 100px;
    left: 0;
    right: 0;
    @include respond(phone){
      top: 130px;
    }
  }
  #navbar.top {
    transform: translateY(-100px);
    @include respond(phone){
      transform: translateY(-130px);
    }
  }  
  .logo {
    width: 19%;
    margin-left: 99px;
  }
  .header_content {
    padding:0px;
    position: relative;
    right:0;
    min-height: 40px;
    display: flex;
  }
  .header1 {
     display: flex;
     position: relative;
    flex-direction: row-reverse;
     background-color: transparent;
     align-items: center;
     height: 85px;
     max-width: $max-width-home;
     width: 100%;
     margin: 0 auto;
     background: #fff;
     @include respond(tab-port){
        padding: 0 2rem;
     }
    /* background-image: linear-gradient(
      to bottom,
      #215eb8 0%,
      #215eb8 51%,
      #043066 100%
    ); */
  }
  
  .app-links {
    justify-self: end;
  }
  
  .brand-name {
    position: absolute;
    cursor: pointer;
    top:53%;
    /* top:45px; */
    left:0;
    transform: translateY(-50%);
    /* left:129px; */
    font-size: 1.3rem;
    padding: 0px 0px 0px 10px;
    @include respond(tab-port){
        left: 2rem;
    }
  }
  
  .brand-name a {
    text-decoration: none;
    color: #fefefe;
    font-size: 17px;
  }
  
  @media (min-width: 850px) {
    .app-links {
      display: block;
    }
  
  }
  @media (max-width: 851px) {
    header {
      padding: 0 16px;
    }
  // .brand-name img {
  //     display: none;
  //   }
    // .brand-name {
    //   padding-left: 10px;
    // } 
    header:nth-child {
      justify-self: end !important;
    }
    .app-links {
      display: none;
    }
  
    .logo {
      margin-left: 14px;
      width: 40%;
    }
  }

  @media (max-width: 320px) {
    .logo {
      margin-left: 15px;
    }
  }
  
  </style>
  