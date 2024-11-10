<template>
    <section class="who-banner">
     <img src="@/assets/image/career_bg.jpg" alt="banner" class="who-banner-bimg"/>
     <div class="who-text-box">
         <h1 class="who-text-box-title">LIFE AT MSFL</h1>
         <p class="who-text-box-subtitle">
             <picture class="who-text-box-subtitle-icon">
                <source srcset="@/assets/image/home_white.svg" media="(max-width: 450px)">
                 <img srcset="@/assets/image/home.svg" alt="home" class="who-text-box-subtitle-icon"/>
             </picture>
           <span style="cursor: pointer;" @click="$router.push('/home')">Home</span> &nbsp;&nbsp; :&nbsp; : &nbsp;&nbsp;LIFE AT MSFL
         </p>
     </div>
    </section>
    <div class="row1">
        <div class="way-to-rise">
            <div class="way-to-rise-img-box">
                <img src="@/assets/image/career-img-1.jpg" alt="way to rise" class="way-to-rise-img-box-img">
            </div>
            <div class="way-to-rise-text-box">
                <h2 class="way-to-rise-text-box-title">THE MARWADI WAY TO RISE</h2>
                <p class="way-to-rise-text-box-text">
                    At MSFL, we believe that a positive work environment is key to our success. 
                    We strive to create an atmosphere where our employees feel valued and supported 
                    in their personal and professional lives. Our culture promotes collaboration, innovation,
                     and open communication to ensure that 
                    everyone is working towards our common goal of delivering exceptional service to our clients.
                </p>
                <ul>
                    <li>Professional Development</li>
                    <li>Work-Life Balance</li>
                    <li>Employee Recognition</li>
                    <li>Social Events</li>
                </ul>

            </div>

        </div>

    </div>
    <div class="row1 u-center-text">
            <h1 class="heading-main1">Ready to make a difference?</h1>
    </div>
    <div class="row1">
        <div class="col-1-of-3">
            <div class="make-difference-box">
                <div class="make-difference-box-img">
                    <img src="@/assets/image/make-box-img-1.jpg" alt="ready to make a difference" class="make-difference-box-image">

                </div>
                <div class="make-difference-box-text">
                    <h4>Personalized Approach</h4>
                    <p>
                        At MSFL, we believe that every customer is unique and deserves a personalized 
                        experience. Our team works closely
                         with each client to understand their specific needs and tailor our products and services to meet those needs.
                    </p>

                </div>

            </div>
        </div>
        <div class="col-1-of-3">
            <div class="make-difference-box">
                <div class="make-difference-box-img">
                    <img src="@/assets/image/make-box-img-2.jpg" alt="ready to make a difference" class="make-difference-box-image">

                </div>
                <div class="make-difference-box-text">
                    <h4>Innovative Solutions</h4>
                    <p>
                        We are constantly seeking new and better ways to serve our customers. 
                        Innovation is at the core of our brand, 
                        and we are dedicated to developing cutting-edge solutions that meet the changing needs of our clients.
                    </p>

                </div>

            </div>
        </div>
        <div class="col-1-of-3">
            <div class="make-difference-box">
                <div class="make-difference-box-img">
                    <img src="@/assets/image/make-box-img-3.jpg" alt="ready to make a difference" class="make-difference-box-image">

                </div>
                <div class="make-difference-box-text">
                    <h4>Trusted Partner</h4>
                    <p>
                        Our customers rely on us to be trusted partners in their business. 
                        We are committed to building long-lasting relationships 
                        with our clients based on trust, transparency, and reliability.
                    </p>

                </div>

            </div>
        </div>

    </div>
    <div class="brand-pillars">
        <div class="row1">
            <div class="brand-pillars-title">
                <h2>Our Brand Pillars</h2>
                <p>
                    marwadi creates positive change, for you and the world you live in.
                </p>
            </div>
        </div>
        <div class="row1">
            <div class="col-1-of-3">
                <div class="brand-pillars-blog">
                    <img src="@/assets/image/brand-1.png" alt="brand pillars" class="brand-pillars-blog-img">
                    <h3>Sustainability</h3>
                    <p>
                        We are deeply committed to sustainability and take responsibility for our impact on the environment and society.
                    </p>
                </div>
            </div>
            <div class="col-1-of-3">
                <div class="brand-pillars-blog brand_pillars_blog_other_color">
                    <img src="@/assets/image/brand-2.png" alt="brand pillars" class="brand-pillars-blog-img">
                    <h3>Customer Focus</h3>
                    <p>
                        Our customers are at the heart of everything we do, and we are dedicated to providing exceptional experiences that exceed their expectations.
                    </p>
                </div>
            </div>
            <div class="col-1-of-3">
                <div class="brand-pillars-blog">
                    <img src="@/assets/image/brand-3.png" alt="brand pillars" class="brand-pillars-blog-img">
                    <h3>Innovation</h3>
                    <p>
                        We are committed to creating innovative solutions that allow us to constantly improve and evolve our products and services to better meet the needs of our customers.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="container-c">
        <div class="core-value-section">
            <h2>Our Core Purpose Values</h2>
            <div class="row1">
                <div class="col-1-of-2">
                    <div class="core-value-box">
                        <div class="core-value-box-img">
                            <img src="@/assets/image/collaboration.png" alt="core value" class="core-value-img">
                        </div>
                        <div class="core-value-box-info">
                            <h3>Collaboration</h3>
                            <p>
                                We believe in working together as a team, both internally and with our customers, to achieve common goals and create value.
                            </p>
                        </div>

                    </div>
                </div>
                <div class="col-1-of-2">
                    <div class="core-value-box">
                        <div class="core-value-box-img">
                            <img src="@/assets/image/integrity.png" alt="core value" class="core-value-img">
                        </div>
                        <div class="core-value-box-info">
                            <h3>Integrity</h3>
                            <p>
                                We are committed to conducting ourselves with the highest level of integrity in all our interactions with customers, employees, partners, and stakeholders.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div class="row1">
                <div class="col-1-of-2">
                    <div class="core-value-box">
                        <div class="core-value-box-img">
                            <img src="@/assets/image/excellence.png" alt="core value" class="core-value-img">
                        </div>
                        <div class="core-value-box-info">
                            <h3>Excellence</h3>
                            <p>
                                We are committed to achieving excellence in everything we do, from the quality of our products and services to the professionalism of our team.
                            </p>
                        </div>

                    </div>
                </div>
                <div class="col-1-of-2">
                    <div class="core-value-box">
                        <div class="core-value-box-img">
                            <img src="@/assets/image/adaptability.png" alt="core value" class="core-value-img">
                        </div>
                        <div class="core-value-box-info">
                            <h3>Adaptability</h3>
                            <p>
                                We believe in working together as a team, both internally and with our customers, to achieve common goals and create value.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
            <div class="row1">
                <div class="col-1-of-2">
                    <div class="core-value-box">
                        <div class="core-value-box-img">
                            <img src="@/assets/image/accountability.png" alt="core value" class="core-value-img">
                        </div>
                        <div class="core-value-box-info">
                            <h3>Accountability</h3>
                            <p>
                                We take ownership of our actions and are accountable for our results. We are committed to delivering on our promises and holding ourselves to the highest standards of performance.
                            </p>
                        </div>

                    </div>
                </div>
                <div class="col-1-of-2">
                    <div class="core-value-box">
                        <div class="core-value-box-img">
                            <img src="@/assets/image/empowerment.png" alt="core value" class="core-value-img">
                        </div>
                        <div class="core-value-box-info">
                            <h3>Empowerment</h3>
                            <p>
                                We believe in empowering our employees and customers to reach their full potential. We provide the tools, resources, and support necessary to achieve success.
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>

</script>
<style lang="scss" scoped>
.container-c{
    width: 100%;
    max-width: 1170px;
    margin: 0 auto;
    @include respond(tab-port){
        padding: 0px 15px;
    }
    .core-value-section{
        background-color: #FFF;
        box-shadow: 0 0 12px rgb(0 0 0 / 13%);
        border-radius: 10px;
        padding: 25px 15px 0px;
        position: relative;
        margin-top: -130px;
        margin-bottom: 50px;
        @include respond(phone){
            margin-top: -60px;
            .row1{
                padding: 0px;
            .col-1-of-2{
                margin-bottom: 5px;
            }
        }
        }
        h2{
            font-size: 28px;
            font-family: 'Oswald', sans-serif;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 25px;
            text-align: center;
            @include respond(phone){
                font-size: 22px;
                margin-bottom: 15px;
            }
        }
        .core-value-box{
            position: relative;
            margin: 0px 12px 30px 12px;
            &-img{
                position: absolute;
                top: 0;
                left: 0;
            }
            &-info{
                position: relative;
                padding-left: 55px;
                h3{
                    font-weight: 900;
                    font-size: 20px;
                    text-transform: uppercase;
                    margin-bottom: 7px;
                    @include respond(phone){
                        font-size: 18px;
                        margin-bottom: 2px;
                    }
                }
                p{
                    font-size: 14px;
                    line-height: 25px;
                    color: $color-black;
                    font-family: Roboto;
                    font-weight: 400;
                }
            }
        }
    }
}
.brand-pillars{
    background-image: url('@/assets/image/core_values_bg.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    padding: 40px 0 150px;
    &-title{
        h2{
            font-size: 28px;
            color: #FFF;
            font-family: 'Oswald', sans-serif;
            font-weight: 600;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        p{
            font-weight: bold;
            font-size: 18px;
            text-transform: uppercase;
            color: #FFF;
            margin: 10px 0px 25px;
        }
    }
    &-blog{
        background-color: #FFF;
        border-radius: 10px;
        padding: 20px 15px;
        margin: 0px 12px 30px 12px;
        text-align: center;
        min-height: 251px;
        img{
            border: 0 none;
            max-width: 100%;
            vertical-align: top;
            margin: 0 auto;
        }
        h3{
            font-size: 20px;
            font-weight: 900;
            text-transform: uppercase;
            margin: 15px 0px 10px;
        }
        p{
            font-size: 14px;
            line-height: 25px;
            color: $color-black;
            font-family: Roboto;
            font-weight: 400;
        }
    }
    .brand_pillars_blog_other_color {
        background-color: #007dc5;
        h3{
            color: #FFF;
        }
        p{
            color: #111;
        }
    }
    @include respond(phone){
        padding: 4px 0px 60px;
        &-title{
            h2{
                
            }
            p{
                font-size: 15px;
            }
        }
        &-blog{
            margin: 0px 0px 10px 0px;
        }
    }
}
.heading-main1{
    font-size:28px;
    margin-bottom: 20px;
    @include respond(tab-land){
        font-size: 22px;
        margin-bottom: 0px;
    }
} 
.make-difference-box{
    background-color: #FFF;
    box-shadow: 0 0 12px rgb(0 0 0 / 13%);
    border-radius: 10px;
    margin: 0px 12px;
    min-height: 427px;
    &-img{
        img{
            width: 100%;
            border-radius: 10px 10px 0px 0px;
        }
    }
    &-text{
        padding: 0px 15px 20px;
        text-align: center;
        h4{
            font-size: 20px;
            font-weight: 900;
            margin: 15px 0px 10px;
            text-transform: uppercase;
        }
        p{
            font-size: 14px;
            line-height: 25px;
            color: $color-black;
            font-family: Roboto;
            font-weight: 400;

        }
    }
}
.way-to-rise{
    display: flex;
    flex-direction: row;
    background-color: #ebf3f8;
    border-radius: 20px;
    padding: 40px;
    margin-bottom: 40px;
    width: 100%;
    height: 100%;
    &-img-box{
        width: 50%;
        padding: 0px 12px;
        img{
            border-radius: 10px;
            width: 100%;
        }
    }
    &-text-box{
        width: 50%;
        padding: 0px 12px;
        h2{
            font-size: 28px;
            font-family: 'Oswald', sans-serif;
            font-weight: 600;
            text-transform: uppercase;
        }
        p{
            text-align: justify;
            font-size: 15px;
            margin: 10px 0px 10px 0px;
        }
        ul {
            margin: 0;
            padding: 0;
            list-style-type: none;
            li {
                position: relative;
                margin-bottom: 15px;
                position: relative;
                padding-left: 25px;
                font-size: 14px;
                &:before{
                    font-size: 18px;
                    color: #007dc5;
                    position: absolute;
                    top: 2px;
                    left: 0px;
                    content: "";
                    background-image: url('@/assets/image/check_msfl.png');
                    display: block;
                    width: 16px;
                    height: 16px;
                }
            }
        }
    }
    @include respond(780px){
        flex-direction: column;
        padding: 20px 15px;
        &-img-box{
            width: 100%;
        }
        &-text-box{
            width: 100%;
            h2{
                font-size: 22px;
                margin-top:10px ;
            }
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
