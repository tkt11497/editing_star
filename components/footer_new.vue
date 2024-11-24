<template>
  <section class="footer">
    <div class="footer-left">
      <div class="logo-box">
        <img src="@/assets/image/logo.png" alt="logo">
        <p>editingstar</p>
      </div>
      <p class="copyright-text">@2024 EditingStar</p>
    </div>
    <div class="footer-col-flex-1">
      <p class="footer-text">Legal</p>
      <p class="footer-text">Privacy Center</p>
      <p class="footer-text">Privacy Policy</p>
      <p class="footer-text">Cookies</p>
      <p class="footer-text">Cookies Settings</p>
    </div>
    <div class="footer-col-flex-1">
      <p class="footer-text-title">Company</p>
      <p class="footer-text">About Us</p>
      <p class="footer-text">Press & Media</p>
      <p class="footer-text">Contact Us</p>
    </div>
    <div class="footer-col-flex-2">
      <p class="footer-text-title">EditingStar</p>
      <p class="footer-email-text">
        <img src="@/assets/image/email.svg" class="email-icon" alt="email">
        info@editingstar.com
      </p>
      <div class="customer-support">
        <img src="@/assets/image/customer-support.svg" class="cs-img" alt="customer-support">
        Customer Service
      </div>
      
    </div>
    <div class="footer-col-flex-2">
      <p class="footer-text-title">Get the app</p>
      <img src="@/assets/image/app-store.svg" alt="app-store" class="app-store-img">
      <img src="@/assets/image/play-store.png" alt="play-store" class="play-store-img">
      
    </div>
  </section>
</template>
<script setup>

</script>
<style scoped lang="scss">
.app-store-img{
  width: 157px;
  height: 52px;
  margin-bottom: 5px;
  margin-top: 15px;
}
.play-store-img{
  width: 157px;
  height: 66px;
}
.customer-support{
  width: 203px;
  height: 47px;
  border-radius: 6px;
  background: #9691FF;
  padding: 0px 5px;
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.10);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #FFF;
  font-family: 'spotify';
  font-size: 17px;
  font-weight: 600;
  .cs-img{
    display: inline-block;
    margin-right: 3px;
  }
}
.footer-text{
  color: #fff;
  font-size: 16px;
  font-family: 'spotify';
  font-weight: 400;
}
.footer-email-text{
  @extend .footer-text;
  margin: 18px 0;
  .email-icon{
    width: 20px;
    height: 20px;
    display: inline-block;
    margin-right: 5px;
  }
}
.footer-text-title{
  color: #fff;
  font-size: 16px;
  font-family: 'spotify';
  font-weight: 600;
}
.footer{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #121212;
  width: 100%;
  min-height: 225px;
  padding: 20px;
  .footer-left{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    flex:0 0 40%;
    // border: 1px solid white;
    align-self: stretch;
    .logo-box{
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
      margin-left: 0px;
      margin-top: 0px;
    }
    .copyright-text{
      color: #fff;
      font-size: 14px;
      margin-left: 10px;
      margin-bottom: 20px;
      font-family: 'spotify';
      font-weight: 400;
    }
  }
  .footer-col-flex-2{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 20px;
    // border: 1px solid white;
    align-self: stretch;
    flex:0 0 15%;

  }
  .footer-col-flex-1{
    display: flex;
    flex-direction: column;
    // border: 1px solid white;
    justify-content: flex-start;
    padding-top: 20px;
    align-self: stretch;
    flex:0 0 12%;
    gap: 10px;

  }
  @include respond('tab-land'){
   flex-wrap: wrap; 
   .footer-left{
    flex:0 0 25%;
   }

  }
}
</style>
