<template>
    <section class="who-banner">
     <img src="@/assets/image/tool_bg.jpg" alt="banner" class="who-banner-bimg"/>
     <div class="who-text-box">
         <h1 class="who-text-box-title">CAGR Calculator</h1>
         <p class="who-text-box-subtitle">
             <picture class="who-text-box-subtitle-icon">
                <source srcset="@/assets/image/home_white.svg" media="(max-width: 450px)">
                 <img srcset="@/assets/image/home.svg" alt="home" class="who-text-box-subtitle-icon"/>
             </picture>
           <span style="cursor: pointer;" @click="$router.push('/home')">Home</span> 
                    &nbsp;&nbsp; :&nbsp; : &nbsp;&nbsp;
                    CAGR Calculator
         </p>
     </div>
    </section>
    <div class="row1">
            <h1 class="heading-main1">CAGR Calculator (Compound Annual Growth Rate)</h1>
    </div>
    <div class="calculator-box">
        <div class="row1">
            <div class="col-1-of-4">
                <div class="input-box">
                    <h2 class="input-box-title">Initial Value</h2>
                    <van-field :label-width="10" 
                                class="input-box-field" 
                                v-model="beginningValue"
                                type="number"
                                :maxlength="6"
                                :max="100000"
                                :min="1"
                                @input="beginningValue = check_input(beginningValue, 1, 100000);calculateCAGR(beginningValue, endingValue, years)" 
                                placeholder="1" >
                        <template #label>
                            <img src="@/assets/image/r_symbol.png" alt="home" class="input-box-label-icon"/>
                        </template>
                    </van-field>
                </div>
            </div>
            <div class="col-1-of-4">
                <div class="input-box">
                    <h2 class="input-box-title">Final Value Costs</h2>
                    <van-field :label-width="10" 
                                class="input-box-field" 
                                v-model="endingValue"
                                type="number" 
                                :maxlength="8"
                                :max="10000000"
                                :min="1"
                                @input="endingValue = check_input(endingValue, 1, 10000000);calculateCAGR(beginningValue, endingValue, years)"
                                @blur="if(!endingValue) endingValue = 1;calculateCAGR(beginningValue, endingValue, years)" 
                                placeholder="1" >
                        <template #label>
                            <img src="@/assets/image/r_symbol.png" alt="home" class="input-box-label-icon"/>
                        </template>
                    </van-field>
                </div>
            </div>
            <div class="col-1-of-4">
                <div class="input-box">
                    <h2 class="input-box-title">Duration of Investment</h2>
                    <van-field :label-width="30" 
                                class="input-box-field" 
                                v-model="years"
                                type="number"
                                :maxlength="2"
                                :max="30"
                                :min="1"
                                @input="years = check_input(years, 1, 30);calculateCAGR(beginningValue, endingValue, years)"
                                @blur="if(!years) years = 1;calculateCAGR(beginningValue, endingValue, years)" 
                               
                                placeholder="1" >
                        <template #label>
                            <p class="label-text1">Yrs</p>
                        </template>
                    </van-field>
                </div>
            </div>
            <div class="col-1-of-4">
                <div class="input-box">
                    <h2 class="input-box-title">CAGR</h2>
                    <div class="input-cagr-box" @click="calculateCAGR(beginningValue, endingValue, years)">
                        {{result_cagr}}%
                    </div>
                </div>
            </div>
        </div>
        <div class="c-row1" style="padding: 0;">
            <div class="c-col-1" style="padding: 0;">
                <div class="chart-box" style="min-width: 338px;">
                    <div class="chart-container">
                        <apexchart :options="chartOptions" :series="series"></apexchart>
                        <div class="chart_blog_numbers">
                            <ul>
                                <li>
                                    <div class="line_value">
                                        <span></span>
                                        <p>Initial Value</p>
                                        <h5>
                                            <img src="@/assets/image/r_symbol.png" alt="home" class="input-box-label-icon1"/>
                                            <p id="initial-lbl-value">{{initialValue}}</p>
                                        </h5>
                                        <div class="line_hr"></div>
                                    </div>
                                </li>
                                <li>
                                    <div class="line_value line_value_two">
                                        <span></span>
                                        <p>Final Value</p>
                                        <h5>
                                            <img src="@/assets/image/r_symbol.png" alt="home" class="input-box-label-icon1"/>
                                            <p id="final-lbl-value">{{finalValue}}</p>
                                        </h5>
                                        <div class="line_hr"></div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="cagr-percentage">
                        <p class="cagr-percentage-text">CAGR</p>
                        <p class="cagr-percentage-value">{{result_cagr}}%</p>
                    </div>
                </div>
            </div>

            <div class="c-col-2">
                <div class="chart-box"></div>
            </div>
        </div>

    </div>
    <div class="row1" style="margin-bottom: 60px;"></div>
</template>
<script setup>
const chartOptions = {
            colors: ['#0078bf','#949596'],
            labels: ['Initial Value', 'Final Value'],
            dataLabels: {
              enabled: false
            },
            plotOptions: {
                    pie: {
                        donut: {
                        size: '80%'
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
const beginningValue = ref(1000);
const endingValue = ref(2000);
const initialValue = ref(1000);
const finalValue = ref(2000);
const years = ref(1);

const result_cagr = ref(null);
const series = computed(() => [+initialValue.value, +finalValue.value]);
const calculateCAGR = (beginningValue, endingValue, years) =>  {
    if (years <= 0) {
        //throw new Error('The number of years must be greater than zero');
    }
    const cagr = (Math.pow(endingValue / beginningValue, 1 / years) - 1) * 100;
    cagr.toFixed(2); // Returns the result as a percentage with 2 decimal places
    result_cagr.value = cagr.toFixed(2);
    initialValue.value = beginningValue;
    finalValue.value = endingValue;
    return result_cagr.value;

}
const check_input = (value, min, max) => {
    if(value > max) value = max;
    //if(value < min) value = min;
    return value;
}


console.log(`The CAGR is ${result_cagr}%`);        

</script>
<style lang="scss" scoped>
.c-row1{
    display: flex;
    flex-direction: row;
    width: 100%;
    .c-col-1{
        width: 50%;
        padding: 0 20px;
    }
    .c-col-2{
        width: 50%;
        padding: 0 20px;
    }
    @include respond(1100px){
        .c-col-1{
            width: 55%;
        }
        .c-col-2{
            width: 45%;
        }
    }
    @include respond(980px){
        .c-col-1{
            width: 59%;
        }
        .c-col-2{
            width: 41%;
        }
    }
    @include respond(tab-port){
        flex-direction: column;
        .c-col-1{
            width: 100%;
        }
        .c-col-2{
            display: none;
            width: 100%;
        }
    }
}
.chart-box{
    margin: 25px 0px;
    padding: 10px;
    position: relative;
    min-height: 358px;
    height: auto;
    width: 100%;
    background-color: #fff;
    display: flex;
    flex-direction: row;
    align-items: center;
    .chart-container{
        min-height: 286px;
        position: relative;
        width: 75%;
        background-color: #fff;
        .chart_blog_numbers{
            position: absolute;
            top: 48%;
            left: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;
            width: 116px;
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
                            font-size: 16px;
                            display: inline-block;
                            margin-bottom: 0px;
                        }
                         h5 {
                                font-size: 22px;
                                font-weight: 900;
                                margin: 4px 0px 8px;
                            }
                            .line_hr {
                                width: 46px;
                                text-align: center;
                                margin: 0px auto;
                                background: #0078bf;
                                opacity: 1;
                                /* height: 2px; */
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
    }
    .cagr-percentage{
        width: 25%;
        background-color: #ebf3f8;
        padding: 25px 0px;
        margin:0 0 0 20px;
        height: 110px;
        text-align: center;
        .cagr-percentage-text{
            font-size: 16px;
            font-weight: 400;
            color: #111;
            font-family: 'Roboto', sans-serif;
            margin-bottom: 5px;
        }
        .cagr-percentage-value{
            font-size: 22px;
            font-weight: 900;
            font-family: 'Roboto', sans-serif;
            color: #111;
        }
    }
    @include respond(tab-port){
        flex-direction: column;
        .chart-container{
            width: 100%;
            .chart_blog_numbers{
                ul{
                    li{
                        .line_value{
                            width: 100%;
                            p{
                            font-size: 13px;
                        }
                         h5 {
                                font-size: 20px;
                            }
                        }
                    }
                }
            }
        }
        .cagr-percentage{
            margin: 20px 0 0 0;
            width: 100%;
        }
    }
}
.input-box{
    margin: 0px 10px;
    .input-box-title{
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 7px;
        color: #111;
        font-family: 'Roboto', sans-serif;
    }
    .input-box-field{
        height: 55px;
        font-size: 22px;
        font-weight: 900;
        color: #1111;
        font-family: 'Roboto', sans-serif;
        border: 1px solid #dddddd;
        .input-box-label-icon{
            margin-top: 9px;
            width: 100%;
        }
        .label-text1{
            font-size: 15px;
            margin-top: 5px;
            font-weight: bold;
            font-family: 'Roboto', sans-serif;
            color: #111;
        }
        .van-field__value{
                .van-field__body {
                    height: 100%!important;
                }
        }
    }
    .input-cagr-box{
        height: 55px;
        font-size: 22px;
        font-weight: 900;
        font-family: 'Roboto', sans-serif;
        color: #fff;
        background-color: #0078bf;
        text-align: center;
        line-height: 55px;
    }
}

.calculator-box{
    background-color: #e9f1f6;
    padding: 30px 20px;
    margin: 0 auto;
    max-width: $max-width-home;
    width: 100%;
    @include respond(tab-port){
        width: 97%;
        padding: 30px 10px;
    }
}
.heading-main1{
    font-size:28px;
    margin-top: 65px;
    margin-bottom: 20px;
    padding-left: 10px;
    @include respond(tab-land){
        font-size: 22px;
        margin-bottom: 0px;
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