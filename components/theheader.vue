<template>   
      <div id="navbar" class="fixed  ">

          <div class="header1" >
            <div class="brand-name" @click="$router.push('/home')">
                <img width="69px" src="@/assets/image/logo.png" alt="logo"/>
                <p>editingstar</p>
              </div>
            <div class="header_content">
  
              <div class="app-links">
                <app-links></app-links>
              </div>
            </div>
            <div class="navbar_content">
              <img class="language-icon" src="@/assets/image/language-icon.svg" alt="language" />
              <!-- <button class="header-btn">Log in</button>
              <button class="header-btn header-btn--signup">Sign up</button> -->

                <div class="navigation drawer-toggle">
                      <input type="checkbox" class="navigation__checkbox" ref="navi_toggle" id="navi-toggle">                    
                      <label for="navi-toggle" class="navigation__button">
                        <span class="navigation__icon">&nbsp;</span>
                    </label>
                    
                    <!-- <div class="navigation__background">&nbsp;</div> -->

                    <nav class="navigation__nav">
                    <MobileNav @close_nav="closeNav" />
                    </nav>
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
onMounted(() => {
  
})
let lastScroll = window.scrollY;
  onMounted(() => {
    window.addEventListener('scroll', () => {
      const navbar = document.getElementById('navbar')
      // const firstDivHeight = document.getElementById('first-div').offsetHeight;
      // console.log(window.scrollY )
      if (window.scrollY > lastScroll&& !navi_toggle.value.checked) {
        navbar.classList.add('top')
      } else {
        navbar.classList.remove('top')
      }
      lastScroll = window.scrollY;
    })
  });

</script>
  
<style lang="scss" scoped>
.header-btn{
  display: flex;
  padding: 8px 17px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 100px;
  border: 1px solid #FFF;
  font-family: 'spotify';
  color: #FFF;
  font-size: 14px;
  font-weight: 600;
  margin-right: 16px;
  &--signup{
    background-color: #fff;
    color: #000;
    margin-right: 0px;
  }
  &:hover{
    background-color: #fff;
    color: #000;
  }
  &--signup:hover{
    background-color: #000;
    color: #fff;
  }
  @include respond(901px){
    display: none;
  }
}
.navigation{
  display: none;
  @include respond(tab-port){
    display: block;
  }
}
.navbar_content{
    display: flex;
    align-items: center;
    flex-grow: 0;
    .language-icon{
      margin-right: 16px;
      margin-left: 10px;
      cursor: pointer;
    }
    @include respond(tab-port){
        display: flex;
    }
}


  #navbar {
    z-index: 800;
    transition: all 0.4s ease-in-out;
    background-color: #000;
  }
  /* #navbar #navbar-inner {
    width: 1600px;
    max-width: 100%;
    margin: 0 auto;
  } */
  
  #navbar.fixed {
    position: fixed;
    top: 0px;
    left: 0;
    right: 0;
    @include respond(phone){
      top: 0px;
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
    display: flex;
    flex-grow: 0;
  }
  .header1 {
     display: flex;
     position: relative;
    flex-direction: row;
    justify-content: space-between;
     align-items: center;
     height: 92px;
     padding:0 24px;
     width: 100%;
     background: #000;
     @include respond(phone){
      padding:0 8px;
     }
  }
  
  .app-links {
    display: flex;
    flex-grow: 2;
    justify-content: center;
    align-items: center;
    margin-right: 100px;
    @include respond(1280px){
      margin-right: 10px;
    }
    @include respond(tab-land){
      margin-right: 0px;
    }
    // justify-self: end;
  }
  
  .brand-name {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    /* left:129px; */
    font-size: 17px;
    text-transform: uppercase;
    font-family: 'spotify';
    font-weight: 600;
    cursor: pointer;
    margin-left: 20px;
    @include respond(tab-port){
      margin-left: 0px;
    }
  }
  
  .brand-name a {
    text-decoration: none;
    color: #fefefe;
    font-size: 17px;
  }
  
  @media (min-width: 992px) {
    .app-links {
      display: flex;
    }
  
  }
  @media (max-width: 991px) {
    .app-links {
      display: none;
    }
  
  }

  @media (max-width: 320px) {
 
  }
  
  </style>
  