<template>
    <div class="fixed w-44 bottom-40 -mb-5 right-20 bg-white rounded-full cursor-pointer p-3 boxShadowGreenMini text-center text-2xl " v-if="!showUi && !showHelperUi">
      <span class="mt-2 text-xl useRoboto" @click="handleOpenRoute()">Chat with us</span>
      <!-- <ChevronRightIcon class="w-10 absolute -right-14 -mt-8 text-white"/> -->
      <p class="absolute -right-14 -mt-8 text-white bg-black w-8 h-8 leading-none rounded-full justify-center" @click="handleHide()">&times;</p>
    </div>
  
    <!-- whats app button -->
    <div class="fixed bottom-10 right-8 bg-green-400 w-20 h-20 rounded-full text-white text-center cursor-pointer flex items-center justify-center" @click="showUi = !showUi">    
      <label
        for="showPopUp"
        class="block flex text-center text-3xl focus:outline useOswald cursor-pointer"
      >
        <img srcset="@/assets/image/whatsapp_ico.png" alt="home" class="w-12"/>
      </label>
    </div>
  
    <!-- chervon down button -->  
    <div class="fixed bottom-48 right-10 w-auto h-auto bg-white p-14 pb-7 border-2 border-black watsAppInfo boxShadowGreen transition-all transition delay-150 duration-300 ease-in-out" v-if="showUi">
  
      <img class="wa-chat-box-brand" onerror="this.src= &quot;https://cdn.clare.ai/wati/images/WATI_logo_square_2.png&quot;;" src="https://www.wati.io/wp-content/uploads/2023/04/Wati-logo.svg" alt="">
  
      <div class="mt-8">
        <h2 class="text-3xl mb-4 useRoboto">Hi there!</h2>
        <h2 class="text-3xl useRoboto">How can I help you?</h2>
      </div>
  
      <div class="bg-black text-white inline-flex rounded-2xl mt-8 mb-6 cursor-pointer w-full relative p-6 boxShadowGreen" @click="handleOpenRoute()">
        <img srcset="@/assets/image/whatsapp_ico.png" alt="home" class="w-11 mr-4"/> 
        <span class="mt-2 text-3xl useRoboto">Chat with us</span>
        <ChevronRightIcon class="w-10 absolute right-4 mt-1"/>
      </div>
  
      <label class="text-gray-600 block text-center text-2xl flex text-center justify-center space-x-2">
        <svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg" class="mt-1">
          <path d="M3 15V9H0L5 0V6H8L3 15Z" fill="#999999"></path>
        </svg>
        <p>
        Powered by <a rel="noopener noreffer" href="#" target="_blank" class="wa-chat-box-poweredby-link">wati.io</a>
        </p>
      </label>
  
      <p class="block fixed bottom-10 right-8 bg-green-400 w-20 h-20 rounded-full text-center cursor-pointer flex items-center justify-center border border-black" @click="showUi = !showUi">      
        <ChevronDownIcon class="w-12"/>
      </p>    
    </div>
  </template>
  
  <script setup>
  import { ChevronDownIcon, ChevronRightIcon } from '@heroicons/vue/24/outline';
  
  import { ref } from 'vue';
  const showUi = ref(false);
  const showHelperUi = ref(false);
  
  const handleOpenRoute = () => {
    window.open("https://www.test.org/", "testWindow", "blank");
  }
  const handleHide = () => {
    showHelperUi.value = true;
  }
  </script>
  <style>
  .watsAppInfo::before{
    content: '';
    position: absolute;
    top: 100%;
    right: 29px;
    width: 0;
    height: 0;
    border-width: 0 0px 30px 30px;
    border-color: transparent transparent white transparent;
    border-style: solid;
    transform: rotate(270deg);
    z-index: 1; 
  }
  .watsAppInfo::after{
    content: '';
    position: absolute;
    top: 100%;
    right: 27px;
    width: 0;
    height: 0;
    border-width: 0px 0px 34px 34px;
    border-color: transparent transparent black transparent;
    border-style: solid;
    border-radius: 2px;
    filter: drop-shadow(-2px 5px 0px #00e785);
    transform: rotate(270deg);
  }
  .wa-chat-box-brand {
    width: 52px;
    height: 52px;
    border: 1px solid #363636;
    box-shadow: 0px 2px 240px rgba(0, 0, 0, 0.04);
    border-radius: 100px;
    background-color: #00e785;
  }
  .watsAppInfo{
    min-width: 320px;
    border-radius: 40px;
    z-index:999999;
  }
  </style>