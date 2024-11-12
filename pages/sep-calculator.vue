<template>
    <section class="who-banner">
     <img src="@/assets/image/tool_bg.jpg" alt="banner" class="who-banner-bimg"/>
     <div class="who-text-box">
         <h1 class="who-text-box-title">SEP Calculator</h1>
         <p class="who-text-box-subtitle">
             <picture class="who-text-box-subtitle-icon">
                <source srcset="@/assets/image/home_white.svg" media="(max-width: 450px)">
                 <img srcset="@/assets/image/home.svg" alt="home" class="who-text-box-subtitle-icon"/>
             </picture>
           <span style="cursor: pointer;" @click="$router.push('/home')">Home</span> 
                    &nbsp;&nbsp; :&nbsp; : &nbsp;&nbsp;
                    SEP Calculator
         </p>
     </div>
    </section>
    <div class="calculator-box">
        <div class="row1">
            <h1 class="heading-main1">SEP Calculator</h1>
        </div>
        <div class="row1" style="padding: 0;">
            <div class="col-1-of-2">
                <div class="slider-container">
                    <div class="upper-div">
                        <p class="upper-div-text">Monthly Investment</p>
                        <van-field :label-width="30" 
                                class="input-box-field1" 
                                v-model="monthlyInvestment"
                                input-align="right"
                                type="number"
                                :maxlength="6"
                                :max="100000"
                                :min="500"
                                @input="monthlyInvestment = check_input(monthlyInvestment, 500, 100000);calculateSIP(monthlyInvestment, expectedReturnRate, timePeriod);"
                                placeholder="1" >
                            <template #label>
                                <img src="@/assets/image/r_symbol.png" alt="home" class="input-box-label-icon"/>
                            </template>
                        </van-field>
                    </div>
                    <van-slider 
                            :min="500" 
                            :max="100000" 
                            v-model="monthlyInvestment" 
                            :bar-height="10" 
                            @change="calculateSIP(monthlyInvestment, expectedReturnRate, timePeriod);"
                            active-color="#0078bf" 
                            inactive-color="#d3e6f2" >
                        <template #button>
                            <div class="custom-button"></div>
                        </template>
                    </van-slider>
                    <div class="lower-div">
                        <p class="lower-div-text">
                            <img src="@/assets/image/lower_icon.svg" alt="home" class="lower-icon"/>
                            500
                        </p>
                        <p class="lower-div-text">
                            <img src="@/assets/image/lower_icon.svg" alt="home" class="lower-icon"/>
                            100000
                        </p>
                    </div>
                    <!-- oneline -->
                    <div class="upper-div">
                        <p class="upper-div-text">Expected Return Rate (%)</p>
                        <van-field :label-width="30" 
                                class="input-box-field1" 
                                v-model="expectedReturnRate"
                                input-align="right"
                                type="number"
                                :maxlength="2"
                                :max="30"
                                :min="1"
                                @input="expectedReturnRate = check_input(expectedReturnRate, 1, 30);calculateSIP(monthlyInvestment, expectedReturnRate, timePeriod);"
                                placeholder="1" >
                            <template #label>
                                <img style="margin-top: 12px;" src="@/assets/image/percent.png" alt="home" class="input-box-label-icon"/>
                            </template>
                        </van-field>
                    </div>
                    <van-slider 
                            :min="1" 
                            :max="30" 
                            v-model="expectedReturnRate" 
                            :bar-height="10" 
                            @change="calculateSIP(monthlyInvestment, expectedReturnRate, timePeriod);"
                            active-color="#0078bf" 
                            inactive-color="#d3e6f2" >
                        <template #button>
                            <div class="custom-button"></div>
                        </template>
                    </van-slider>
                    <div class="lower-div">
                        <p class="lower-div-text">
                            <img src="@/assets/image/lower_icon.svg" alt="home" class="lower-icon"/>
                            1%
                        </p>
                        <p class="lower-div-text">
                            30%
                        </p>
                    </div>
                    <!-- 2nd -->
                    <div class="upper-div">
                        <p class="upper-div-text">Time Period (Years)</p>
                        <van-field :label-width="30" 
                                class="input-box-field1" 
                                v-model="timePeriod"
                                input-align="right"
                                type="number"
                                :maxlength="2"
                                :max="10"
                                :min="1"
                                @input="timePeriod = check_input(timePeriod, 1, 10);calculateSIP(monthlyInvestment, expectedReturnRate, timePeriod);"
                                placeholder="1" >
                            <template #label>
                                <img src="@/assets/image/r_symbol.png" alt="home" class="input-box-label-icon"/>
                            </template>
                        </van-field>
                    </div>
                    <van-slider 
                            :min="1" 
                            :max="10" 
                            v-model="timePeriod" 
                            :bar-height="10" 
                            @change="calculateSIP(monthlyInvestment, expectedReturnRate, timePeriod);"
                            active-color="#0078bf" 
                            inactive-color="#d3e6f2" >
                        <template #button>
                            <div class="custom-button"></div>
                        </template>
                    </van-slider>
                    <div class="lower-div">
                        <p class="lower-div-text"> 
                            1
                        </p>
                        <p class="lower-div-text">
                            10
                        </p>
                    </div>
                </div>
            </div>
            <div class="col-1-of-2">    
                <div class="circle-container">
                    <apexchart :options="chartOptions" :series="series"></apexchart>
                    <div class="chart_blog_numbers">
                            <ul>
                                <li>
                                    <div class="line_value">
                                        <p> Total Value</p>
                                        <h5>
                                            <img src="@/assets/image/r_symbol.png" alt="home" class="input-box-label-icon1"/>
                                            <p class="final-lbl-value">{{future_value}}</p>
                                        </h5>
                                        <div class="line_hr"></div>
                                    </div>
                                </li>
                                <li>
                                    <div class="line_value">
                                        <span></span>
                                        <p> Est. Returns</p>
                                        <h5>
                                            <img src="@/assets/image/r_symbol.png" alt="home" class="input-box-label-icon1"/>
                                            <p class="final-lbl-value">{{est_returns}}</p>
                                        </h5>
                                        <div class="line_hr"></div>
                                    </div>
                                </li>
                                <li>
                                    <div class="line_value line_value_two">
                                        <span></span>
                                        <p>Invested Amount</p>
                                        <h5>
                                            <img src="@/assets/image/r_symbol.png" alt="home" class="input-box-label-icon1"/>
                                            <p class="final-lbl-value">{{invested_amount}}</p>
                                        </h5>
                                    </div>
                                </li>
                            </ul>
                        </div>
                </div>
            </div>
        </div>
    </div>
    <div class="row1" style="margin: 50px 0;"></div>
</template>
<script setup>
const monthlyInvestment = ref(2000)
const expectedReturnRate = ref(10)
const timePeriod = ref(2)
const future_value = ref(0)
const invested_amount = ref(10)
const est_returns = ref(20)
const check_input = (value, min, max) => {
    if(value > max) value = max;
    // if(value < min) value = +min;
    return value;
}
const series = computed(() => [+est_returns.value, +invested_amount.value]);
const chartOptions = {
            colors: ['#0078bf','#949596'],
            labels: ['Expected Returns', 'Invested Amount'],
            dataLabels: {
              enabled: false
            },
            plotOptions: {
                    pie: {
                        donut: {
                        size: '87%'
                        }
                    }
             },
            chart: {
                height: '100%',
                width: '100%',
                type: 'donut'
            },
            legend: {
              show:false
            }
          }
const calculateSIP=(principal, rateOfReturn, years)=> {
    if (principal <= 0 || rateOfReturn <= 0 || years <= 0) {
        throw new Error('Principal, rate of return, and months must be greater than zero.');
    }

        // Convert annual rate of return to monthly rate (assuming rateOfReturn is in percentage)
        const monthlyRate = rateOfReturn / 12 / 100;
        //change years to months
        const months= years*12

        // Calculate SIP Future Value (A)
        const futureValue = principal * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate);

        future_value.value = futureValue.toFixed(2); // Return the result rounded to 2 decimal places
        invested_amount.value = principal*months
        est_returns.value = (future_value.value-invested_amount.value).toFixed(2)
}

// Example usage:



</script>
<style lang="scss" scoped>
.circle-container{
    position: relative;
    .chart_blog_numbers{
        position: absolute;
        top: 43.4%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        width: 136px;
        height: 139px;
        text-align: center;
        border-radius: 50px;
        ul{
            margin: 0;
            padding: 0;
            list-style-type: none;
            li {
                width: 100%;
                display: inline-block;
                .line_value{
                    .input-box-label-icon1{
                        display: inline-block;
                        margin-top: -3px;
                        margin-right: 5px;
                    }
                    span{
                        display: inline-block;
                        width: 10px;
                        height: 10px;
                        background: #0078bf;
                        border-radius: 50px;
                        margin-right: 5px;
                    }
                    p{
                        font-size: 15px;
                        display: inline-block;
                        margin-bottom: 0px;
                    }
                    .final-lbl-value{
                        font-size: 15px;
                        display: inline-block;
                        margin-bottom: 0px;
                    }
                    h5 {
                            font-size: 16px;
                            font-weight: 900;
                            margin: 4px 0px 8px;
                        }
                        .line_hr {
                            width: 46px;
                            text-align: center;
                            margin: 0px auto;
                            background: #0078bf;
                            opacity: 1;
                            height: 0px;
                            border-bottom: 1px solid #0078bf;
                        }
                }
                .line_value_two {
                    margin-top: 10px;
                    span{
                        background: #d3e6f2;
                    }
                }
            }
        }
    }
    @include respond(440px){
        .chart_blog_numbers{
            top: 52%;
            ul{
                li{
                    .line_value{
                        .input-box-label-icon1{
                            display: inline-block;
                            width: 7px;
                            margin-top: -2px;
                            margin-right: 3px;
                    }
                    span{
                        margin-right: 5px;
                    }
                    p{
                        font-size: 12px;
                        display: inline-block;
                        margin-bottom: 0px;
                    }
                    .final-lbl-value{
                        font-size: 11px;
                    }
                    h5 {
                            font-size: 11px;
                            margin: 0px 0px 5px;
                        }
                }
                .line_value_two {
                    margin-top: 5px;
                    span{
                        background: #d3e6f2;
                    }
                }
                }
            }
        }
    }
}
.row1 .col-1-of-2{
    @include respond(tab-port){
        width: 100%!important;
    }
}
.input-box-field1{
    height: 38px;
    width: 135px;
    font-size: 16px;
    font-weight: 700;
    font-family: Roboto;
    color: #1111;
    border: 1px solid #a7cfeb;
    border-radius: 2px;
    padding: 0px 10px;
    .van-cell__title.van-field__label{
        border-right: 1px solid #a7cfeb;
        background: red;
    }
    .input-box-label-icon{
        margin-top: 9px;
        margin-left: 5px;
        width: 10px;
    }
}
.custom-button {
    width: 25px;
    height: 25px;
    background: #FFF;
    border: 7px solid #0078bf;
    border-radius: 50% !important;

    // width: 26px;
    // color: #fff;
    // font-size: 10px;
    // line-height: 18px;
    // text-align: center;
    // background-color: var(--van-primary-color);
    // border-radius: 100px;
  }
.calculator-box{
    width: 100%;
    height: auto;
    max-width: 1170px;
    margin: 0 auto;
    background-color: #ebf3f8;
    display: block;
    padding: 15px;
    position: relative;
    height: auto;
    .slider-container{
        padding-top: 25px;
        margin:0 15px;
        // border: 1px solid red;
        .upper-div{
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            .upper-div-text{
                color: #111;
                font-family: Roboto;
                font-size: 14px;
                font-style: normal;
                font-weight: 500;
            }
        }
        .lower-div{
            margin-top: 10px;
            margin-bottom: 20px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            flex-direction: row;
            .lower-div-text{
                color: #0078BF;
                font-family: Roboto;
                font-size: 14px;
                font-style: normal;
                font-weight: 400;
            }
            .lower-icon{
                margin-top: -2px;
                margin-right: 5px;
                display: inline-block;
            }
        }
    }
    .circle-container{
        margin:0 15px;
        background-color: #fff;
        
    }
}
.heading-main1{
    font-size:26px;
    margin-top: 10px;
    margin-bottom: 20px;
    @include respond(tab-land){
        font-size: 22px;
        margin-bottom: 0px;
    }
} 
.who-banner{
 width: 100%;
 height: auto;
 position: relative;
 margin-bottom: 65px;
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