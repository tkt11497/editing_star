<template>
    <section class="who-banner">
     <img src="@/assets/image/tool_bg.jpg" alt="banner" class="who-banner-bimg"/>
     <div class="who-text-box">
         <h1 class="who-text-box-title">Margin Calculator</h1>
         <p class="who-text-box-subtitle">
             <picture class="who-text-box-subtitle-icon">
                <source srcset="@/assets/image/home_white.svg" media="(max-width: 450px)">
                 <img srcset="@/assets/image/home.svg" alt="home" class="who-text-box-subtitle-icon"/>
             </picture>
           <span style="cursor: pointer;" @click="$router.push('/home')">Home</span> 
                    &nbsp;&nbsp; :&nbsp; : &nbsp;&nbsp;
                    Margin Calculator
         </p>
     </div>
    </section>
    <div class="row1 u-center-text">
            <div class="title_bar">
                <p>Equity Calculator</p>
                <img src="@/assets/image/tab_icon.png" alt="home" class="title_bar_icon"/>
            </div>
    </div>
    <div class="row1">
        <div class="col-3-of-4">
            <h1 class="heading-main1">Equity Margin Calculator</h1>
            <p class="heading-main1-sub">Last Updated Date & Time - 04-Nov-2024 11:56:14 PM | File Name - C_VAR1_04112024_0.DAT</p>
        </div>
        <div class="col-1-of-4">
            <div class="main-button">
                View MTF Approved Script List
            </div>
        </div>
    </div>
    <div class="row1">
        <div class="securities_blog">
            <div class="securities_line">Securities under BAN:<span> NIL</span></div>
            <div class="row1" style="padding:0">
                <div class="col-1-of-4">
                    <div class="input-box">
                        <h2 class="input-box-title">Exchanges</h2>
                        <select class="form-select" disabled>
                            <option value="1">NSE</option>
                        </select>
                    </div>
                </div>
                <div class="col-1-of-4">
                    <div class="input-box">
                        <h2 class="input-box-title">Segments</h2>
                        <select class="form-select" disabled>
                            <option value="1">Equity</option>
                        </select>
                    </div>
                </div>
                <div class="col-1-of-4">
                    <div class="input-box">
                        <h2 class="input-box-title">Products</h2>
                        <select class="form-select">
                            <option value="1">SMTF ( Security Margin Trading Fund )</option>
                            <option value="2">Margin product</option>
                        </select>
                    </div>
                </div>
                <div class="col-1-of-4">
                    <div class="input-box">
                        <h2 class="input-box-title">Symbol</h2>
                        <select class="form-select" placeholder="Select Symbol">
                            <option value="1">Select Symbol</option>
                            <option value="2">20MICRONS</option>
                            <option value="3">21STCENMGM</option>
                            <option value="4">360ONE</option>
                            <option value="5">31INFOLTD</option>
                            <option value="6">3MINDIA</option>
                        </select>
                    </div>
                </div>
            </div>
            <div class="row1 s_margin_row" style="padding:0;">
                <div class="col-1-of-4">
                    <div class="input-box">
                        <h2 class="input-box-title">Price</h2>
                        <input type="text" class="input-box-field" placeholder="Enter Price">
                    </div>
                </div>
                <div class="col-1-of-4">
                    <div class="input-box">
                        <h2 class="input-box-title">QTY</h2>
                        <input type="text" class="input-box-field" placeholder="Enter QTY">
                    </div>
                </div>
                <div class="col-1-of-4">
                    <div class="input-box">
                        <h2 class="input-box-title">Margin Amount</h2>
                        <input type="text" class="input-box-field" placeholder="Enter Margin Amount">
                    </div>
                </div>
                <div class="col-1-of-4">
                    <div class="input-box">
                        <h2 class="input-box-title">Type</h2>
                        <div class="two-button-group">
                            <button class="two-button-group-btn">Buy</button>
                            <button class="two-button-group-btn" :disabled="true">Sell</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row1">
                <div class="three-button-group">
                    <button class="three-button-group-btn" disabled>Reset</button>
                    <button class="three-button-group-btn">Calculate</button>
                    <button class="three-button-group-btn add_scrip">add scrip</button>
                </div>
            </div>
        </div>
    </div>
    <div class="row1">
        <div class="securities_blog">
            <div class="row1 u-center-text" style="padding: 0;">
                <h1 class="heading-main1">COMBINED MARGIN REQUIREMENTS</h1>
            </div>
            <div class="row1">
                <div class="three-div-group">
                    <div class="three-div">
                        <h2>Var Margin</h2>
                        <p>Amount (Rs.): 0</p>
                        <p>Percentage(%): 0</p>
                    </div>
                    <div class="three-div">
                        <h2>ELM</h2>
                        <p>Amount (Rs.): 0</p>
                        <p>Percentage(%): 0</p>
                    </div>
                    <div class="three-div add_scrip">
                        <h2>Total Margin</h2>
                        <p>Amount (Rs.): 0</p>
                        <p>Percentage(%): 0</p>
                    </div>
                </div>
            </div>
            <div class="table-main">
                <div class=" table-responsive ">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">Products</th>
                                <th scope="col">Symbol</th>
                                <th scope="col">B/S</th>
                                <th scope="col">Qty</th>
                                <th scope="col">Amount</th>
                                <th scope="col">Var Margin</th>
                                <th scope="col" title="Extreme Loss Margin">ELM</th>
                                <!-- <th scope="col" id="tableAdhocTh" class="d-none">Adhoc Margin</th> -->
                                <th scope="col">Total Margin</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody id="MarginTblBody"></tbody>
                        <tfoot>
                            <tr>
                                <td colspan="3"></td>
                                <td>Total</td>
                                <td id="ft_amount">0.00</td>
                                <td id="ft_varMargin">0.00</td>
                                <td id="ft_eLM">0.00</td>
                                <!-- <td id="ft_adhocMargin" class="d-none">0.00</td> -->
                                <td id="ft_Totalmargin">0.00</td>
                            </tr>
                        </tfoot>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>


</script>
<style lang="scss" scoped>
.table-main{
    border: 1px solid #d9e2ef;      
    width: 100%;
    margin-top: 30px;

    .table-responsive {
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
        .table{
            width: 100%;
            thead tr th {
                background-color: #e5f0fa;
                font-size: 14px;
                font-weight: 500;
                font-family: 'Roboto', sans-serif;
                padding: 12px 10px;
                text-align: left;
                color: #212529;
            }
            tfoot tr td {
                font-weight: bold;
                font-size: 16px;
                border-bottom: none;
                padding-top: 14px;
                padding-left: 12px;
                padding-bottom: 14px;
            }
        }
    }

}
.three-div-group{
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    .three-div{
        height: 109px;
        width: 261px;
        background-color: #ebf3f8;
        padding: 15px 15px 13px;
        margin-bottom: 30px;
        h2{
            color: #111;
            font-family: Roboto;
            font-size: 18px;
            font-style: normal;
            font-weight: 500;
        }

        p{
            color: #111;
            font-size: 15px;
            font-weight: 500;
            font-family: 'Roboto', sans-serif;
            line-height: 25px;
            margin-bottom: 2px;
        }
        &.add_scrip{
            background: #0078bf;
            h2{
                color: #fff;
            }
            p{
                color: #fff;
            }
        }
    }
    @include respond(tab-land){
        flex-direction: column;
        gap: 10px;
        .three-div{
            width: 100%;
            margin-bottom: 5px;
        }
    }
    @include respond(phone){
        margin-top: 0px;
    }
}
.three-button-group{
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 20px;
    .three-button-group-btn{
        height: 45px;
        width: 130px;
        border: none;
        border-radius: 0;
        background: #0078bf;
        color: #fff;
        font-size: 15px;
        font-weight: 400;
        font-family: 'Roboto', sans-serif;
        text-transform: uppercase;
        &:disabled{
            background: #E3E3E3;
        }
        &.add_scrip{
            background: #00AD86;
        }
    }
    @include respond(tab-land){
        flex-direction: column;
        gap: 10px;
        .three-button-group-btn{
            width: 100%;
        }
    }
    @include respond(phone){
        margin-top: 10px;
    }
}
.input-box{
    margin: 0px 10px;
    .input-box-title{
        font-size: 15px;
        font-weight: 400;
        margin-bottom: 8px;
        color: #111;
        font-family: 'Roboto', sans-serif;
    }
    .form-select {
        width: 100%;
        display: block;
        height: 45px;
        box-shadow: none;
        border: 1px solid #dddddd;
        font-size: 13px;
        color: #111;
        font-weight: 400;
        padding: 0.375rem 2.25rem 0.375rem 0.75rem;
        position: relative;
        z-index: 3;

        background-image: url('@/assets/image/image.svg'); 
        background-position: right 0.75rem center; 
        background-repeat: no-repeat; 
        background-size: 16px 12px; 
        appearance: none;
        &:disabled{
            background-color: #e9ecef;
        }
        &:focus-visible{
            outline: none;
        }
    }
    .input-box-field{
        height: 45px;
        box-shadow: none;
        border: 1px solid #dddddd;
        border-radius: 0;
        font-size: 13px;
        font-weight: 400;
        color: #111;
        font-family: 'Roboto', sans-serif;
        display: block;
        width: 100%;
        padding: 0.375rem 0.75rem;
        &::placeholder{
            color: #111;
        }
    }
    .two-button-group{
        display: flex;
        gap: 20px;
        .two-button-group-btn{
            border: none;
            background: #00901b;
            font-size: 15px;
            color: #fff;
            text-transform: uppercase;
            font-weight: 400;
            font-family: 'Roboto', sans-serif;
            height: 45px;
            width: 120px;
            padding: 10px 20px;
            &:disabled{
                background: #E3E3E3;
            }
        }
    }
}
.securities_blog {
    background-color: #FFF;
    height: 100%;
    box-shadow: 0 0 12px rgb(0 0 0 / 13%);
    display: inline-block;
    width: 100%;
    padding: 15px;
    position: relative;
    margin-bottom: 40px;
    margin-top: 30px;
    .securities_line {
        margin-bottom: 30px;
        color: #111;
        font-family: Roboto;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 21px;
        span {
            color: #F00;
        }
    }
    .s_margin_row{
        margin-top: 40px;
    }
}
.main-button{
    border: none;
    border-radius: 0;
    color: #fff;
    display: inline-block;
    font-family: Roboto;
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 0;
    text-align: center;
    text-transform: capitalize;
    touch-action: manipulation;
    transition: all .3s ease-in-out;
    vertical-align: middle;
    white-space: nowrap;
    background: #0078bf;
    min-width: 130px;
    line-height: 45px;
    position: relative;
    z-index: 1;
    letter-spacing: 1px;
    padding: 0px 20px;
    cursor: pointer;
    &:after{
        content: "";
        position: absolute;
        left: 0;
        top: 0;
        bottom: 0;
        right: 0;
        background: #005180;
        width: 100%;
        height: 100%;
        transition: .5s;
        z-index: -1;
        transform: scale(0);
        transition: all .45s ease-in-out;
    }
    &:hover{
        &:after{
            transform: scale(1);
        }
    }
}
.title_bar{
    margin: 40px auto;
    display: flex;
    width: 360px;
    height: 70px;
    padding: 14px 16px 14px 20px;
    justify-content: flex-end;
    align-items: center;
    gap: 143.108px;
    border-radius: 4px;
    border-top: 1px solid #0078BF;
    border-right: 1px solid #0078BF;
    border-bottom: 1px solid #0078BF;
    border-left: 5px solid #0078BF;

    p{
        color:  #0078BF;
        font-family: Oswald;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 30px;
        width: 151px;
        text-wrap: nowrap;
    }
}
.heading-main1{
    font-size:26px;
    margin-top: 10px;
    margin-bottom: 12px;
    @include respond(tab-land){
        font-size: 22px;
        margin-bottom: 0px;
    }
} 
.heading-main1-sub{
    font-weight: bold;
    font-size: 16px;
    color: #007dc5;
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