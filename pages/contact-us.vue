<template>
    <section class="who-banner">
     <img src="@/assets/image/contact_bg.jpg" alt="banner" class="who-banner-bimg"/>
     <div class="who-text-box">
         <h1 class="who-text-box-title">Contact us</h1>
         <p class="who-text-box-subtitle">
             <picture class="who-text-box-subtitle-icon">
                <source srcset="@/assets/image/home_white.svg" media="(max-width: 450px)">
                 <img srcset="@/assets/image/home.svg" alt="home" class="who-text-box-subtitle-icon"/>
             </picture>
           <span style="cursor: pointer;" @click="$router.push('/home')">Home</span> &nbsp;&nbsp; :&nbsp; : &nbsp;&nbsp;Contact Us
         </p>
     </div>
    </section>
    <div class="row1">
        <div class="col-1-of-2">
            <div class="contact_blog min-height">
                <div class="contact_icon">
                    <img src="@/assets/image/location.svg" alt="location" class="contact_icon-img"/>
                </div>
                <div class="contact_info">
                    <h3>CORPORATE OFFICE</h3>
                    <p>
                        Marwadi Shares and Finance Limited. 
                    </p>
                    <p>
                        Marwadi Financial Plaza, Nana Mava Main Road, Off 150 Feet Ring Road, Rajkot - 360001, Gujarat (India)
                    </p>
                </div>

            </div>
        </div>
        <div class="col-1-of-2">
            <div class="contact_blog min-height">
                <div class="contact_icon">
                    <img src="@/assets/image/location.svg" alt="location" class="contact_icon-img"/>
                </div>
                <div class="contact_info">
                    <h3>REGISTERED OFFICE</h3>
                    <p>

                    </p>
                    <p>
                        X – Change Plaza, Office No. 1201 to 1205, 12th Floor, Building No. – 53E, Zone-5,Road 5E, GIFT CITY,Gandhinagar- 382355 Gujarat
                    </p>
                </div>

            </div>
        </div>
        <div class="col-1-of-2">
            <div class="contact_blog">
                <div class="contact_icon">
                    <img src="@/assets/image/email.svg" alt="location" class="contact_icon-img"/>
                </div>
                <div class="contact_info">
                    <h3>Email</h3>
                    <p>
                        mewd1992@gmail.com
                    </p>
                </div>

            </div>

        </div>
        <div class="col-1-of-2">
            <div class="contact_blog">
                <div class="contact_icon">
                    <img src="@/assets/image/call.svg" alt="location" class="contact_icon-img"/>
                </div>
                <div class="contact_info">
                    <h3>Call Us</h3>
                    <p>
                        +91 9988861331
                    </p>
                </div>

            </div>

        </div>
        <div class="col-1-of-2">
            <div class="contact_blog">
                <div class="contact_info" style="padding-left: 0;">
                    <h3>ESCALATION MATRIX</h3>
                    <p>
                        Click here
                    </p>
                </div>

            </div>

        </div>
        <div class="col-1-of-2">
            <div class="contact_blog">
                <div class="contact_info" style="padding-left: 0;">
                    <h3>Details of KMP</h3>
                    <p>
                        Click here
                    </p>
                </div>

            </div>

        </div>
        

    </div>
    <div class="contact_map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3819.9754142004513!2d96.16193207495838!3d16.779255883958194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca389c94f27f:0x2e1c3cb79dfe0537!2sMarwadi+Shares+and+Finance+Ltd!5e0!3m2!1sen!2smm!4v1690457088485!5m2!1sen!2smm" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>  
.contact_map{
    width: 100%;
    max-width: 1170px;
    padding: 10px;
    height: 535px;
    margin: 20px auto;
    img{
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
}
.min-height{
    min-height: 210px;
}
.contact_blog{
    box-shadow: 0 0 12px rgb(0 0 0 / 12%);
    padding: 27px 20px;
    background-color: #FFF;
    margin: 10px;
    margin-top: 5px;
    position: relative;
    .contact_icon {
        position: absolute;
        z-index: 1;
    }
    .contact_info{
        padding-left: 65px;
        h3 {
            font-weight: bold;
            color: #111111;
            font-size: 16px;
            text-transform: uppercase;
            margin-bottom: 10px;
        }
        p{
            font-size: 14px;
            font-weight: 400;
            color: #111111;
            line-height: 25px;
            margin-bottom: 10px;
            font-family: 'Roboto', sans-serif;
        }
    }
}
.who-banner{
 width: 100%;
 height: auto;
 position: relative;
 margin-bottom: 15px;
 &-bimg{
     width: 100%;
     height: 100%;
     object-fit: cover;
 }
 @include respond(450px){
     background:#002840 ;
     height: 160px;
     &-bimg{
         display: none;
     }
 }
}
</style>

