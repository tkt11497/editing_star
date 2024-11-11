<template>
<ul class="navigation__list">
    <li class="navigation__item accordion">
        <div class="accordion-header"
            :class="{active_header: activeAccordion === 'about'}"
             @click="toggleAccordion('about')">
            <span>About</span>
            <span class="indicator-chevron accordion-icon" :style="{ transform: activeAccordion === 'about' ? 'rotate(-133deg)' : 'rotate(45deg)' }"></span>
        </div>
        <div class="accordion-content" :class="{ active: activeAccordion === 'about' }">
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/who-we-are">Who We Are</NuxtLink>
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/our-history">Our History</NuxtLink>
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/leadership">Leadership</NuxtLink>
        </div>
    </li>

    <li class="navigation__item accordion">
        <div class="accordion-header" 
            :class="{active_header: activeAccordion === 'products'}"
            @click="toggleAccordion('products')">
            <span>Our Products</span>
            <span class="indicator-chevron accordion-icon" :style="{ transform: activeAccordion === 'products' ? 'rotate(-133deg)' : 'rotate(45deg)' }"></span>
        </div>
        <div class="accordion-content" :class="{ active: activeAccordion === 'products' }">
            <div class="child-accordion">
                <div class="accordion-header child" 
                    :style="{color: activeAccordion_child === 'derivatives' ? '#0078bf' : '#111111'}"
                    @click="toggleAccordion_child('derivatives')">
                    <span>Derivatives</span>
                    <span class="indicator-chevron accordion-icon" :style="{ transform: activeAccordion_child === 'derivatives' ? 'rotate(-133deg)' : 'rotate(45deg)' }"></span>
                </div>
                <div class="accordion-content child" :class="{ active: activeAccordion_child === 'derivatives' }">
                    <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/equity_directive">Equity Derivative</NuxtLink>
                    <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/commodity_derivative">Commodity Derivative</NuxtLink>
                    <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/currency_derivative">Currency Derivative</NuxtLink>
                </div>
            </div>
            <!-- end derivatives -->
            <div class="child-accordion">
                <div class="accordion-header child" 
                    :style="{color: activeAccordion_child === 'smartcase' ? '#0078bf' : '#111111'}"
                    @click="toggleAccordion_child('smartcase')">
                    <span>Smartcase Model Portfolio</span>
                    <span class="indicator-chevron accordion-icon" :style="{ transform: activeAccordion_child === 'smartcase' ? 'rotate(-133deg)' : 'rotate(45deg)' }"></span>
                </div>
                <div class="accordion-content child" :class="{ active: activeAccordion_child === 'smartcase' }">
                    <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/smart_case">Smartcase Model Portfolio</NuxtLink>
                    <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/systematic_equity_plan">Systematic Equity Plan</NuxtLink>
                </div>
            </div>
            <!-- end smartcase -->
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/depositry_services">Depository Services</NuxtLink>
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/third_party_product">Third Party Product</NuxtLink>
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/initial-public-offering-ipo">Initial Public Offering (IPO)</NuxtLink>
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/national-pension-system-nps">National Pension System (NPS)</NuxtLink>
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/mutual-fund">Mutual Fund</NuxtLink>
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/non-convertible-debentures-ncd">Non-Convertible Debentures (NCD)</NuxtLink>
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/zero-coupon-ncd-marwadi-shares-and-finance-limited">Zero-Coupon NCD - Marwadi Shares and Finance Limited</NuxtLink>
        </div>
    </li>
    <li class="navigation__item accordion">
        <div class="accordion-header" 
            :class="{active_header: activeAccordion === 'services'}"
            @click="toggleAccordion('services')">
            <span>Our Services</span>
            <span class="indicator-chevron accordion-icon" :style="{ transform: activeAccordion === 'services' ? 'rotate(-133deg)' : 'rotate(45deg)' }"></span>
        </div>
        <div class="accordion-content" :class="{ active: activeAccordion === 'services' }">
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/service/research-and-advisory">Research and Advisory</NuxtLink>
            <div class="child-accordion">
                <div class="accordion-header child" 
                    :style="{color: activeAccordion_child === 'OnlineTrading' ? '#0078bf' : '#111111'}"
                    @click="toggleAccordion_child('OnlineTrading')">
                    <span>Online Trading</span>
                    <span class="indicator-chevron accordion-icon" :style="{ transform: activeAccordion_child === 'OnlineTrading' ? 'rotate(-133deg)' : 'rotate(45deg)' }"></span>
                </div>
                <div class="accordion-content child" :class="{ active: activeAccordion_child === 'OnlineTrading' }">
                    <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/service/msfl-connect">MSFL Connect</NuxtLink>
                    <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/service/web-trading">Web Trading</NuxtLink>
                    <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/service/msfl-diet">MSFL diet</NuxtLink>
                </div>
            </div>
            <!-- end online trading -->
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/service/margin-trading-smtf">Margin Trading /SMTF</NuxtLink>
            <!-- update -->
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/service/security-lending-and-borrowing-mechanism">Security lending and borrowing mechanism</NuxtLink>
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/service/call-and-trade">Call and Trade</NuxtLink>    
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/service/smart-portfolio-analyse">Smart portfolio analyse</NuxtLink>
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/service/third-party-service-pan-card-services">Third Party Service - PAN Card services</NuxtLink>
        </div>
    </li>

    <li class="navigation__item accordion">
        <div class="accordion-header" 
            :class="{active_header: activeAccordion === 'research'}"
            @click="toggleAccordion('research')">
            <span>Research</span>
            <span class="indicator-chevron accordion-icon" :style="{ transform: activeAccordion === 'research' ? 'rotate(-133deg)' : 'rotate(45deg)' }"></span>
        </div>
        <div class="accordion-content" :class="{ active: activeAccordion === 'research' }">
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/equity-derivatives-research-report">Equity & Derivatives Reports</NuxtLink>
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/commodity-scoreboard">Commodity Reports</NuxtLink>
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/currency-scoreboard">Currency Reports</NuxtLink>
        </div>
    </li>
    <li class="navigation__item accordion">
        <div class="accordion-header"
            style="position: relative;"
            :class="{active_header: activeAccordion === 'careers'}"
             @click="toggleAccordion('careers')">
            <span>Careers</span>
            <img src="@/assets/image/new_tag.png" alt="tag" class="new_tag"/>
            <span class="indicator-chevron accordion-icon" :style="{ transform: activeAccordion === 'about' ? 'rotate(-133deg)' : 'rotate(45deg)' }"></span>
        </div>
        <div class="accordion-content" :class="{ active: activeAccordion === 'careers' }">
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/life-at-msfl" style="text-transform: none;">Life at MSFL</NuxtLink>
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/career">Career</NuxtLink>
        </div>
    </li>
    <li class="navigation__item accordion">
        <div class="accordion-header"
            :class="{active_header: activeAccordion === 'tools'}"
             @click="toggleAccordion('tools')">
            <span>Tools</span>
            <span class="indicator-chevron accordion-icon" :style="{ transform: activeAccordion === 'about' ? 'rotate(-133deg)' : 'rotate(45deg)' }"></span>
        </div>
        <div class="accordion-content" :class="{ active: activeAccordion === 'tools' }">
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/margin-calculator">Margin Calculator</NuxtLink>
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/cagr-calculator">CAGR Calculator</NuxtLink>
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/sep-calculator">SEP Calculator</NuxtLink>
        </div>
    </li>
    <li class="navigation__item accordion" style="border-bottom: 1px solid #f0f0f0;">
        <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/contact-us">Contact Us</NuxtLink>
    </li>
</ul>
</template>

<script setup>
import { ref } from 'vue';
const close_nav = defineEmits(['close_nav'])
const activeAccordion = ref(null);
const activeAccordion_child = ref(null);
const toggleAccordion_child = (section)=>{
    if (activeAccordion_child.value === section) {
        activeAccordion_child.value = null;
    } else {
        activeAccordion_child.value = section;
    }
}
const toggleAccordion = (section) => {
    if (activeAccordion.value === section) {
        activeAccordion.value = null;
    } else {
        activeAccordion.value = section;
    }
}
</script>
<style lang="scss" scoped>
.new_tag{
    position: absolute;
    top: 6px;
    left: 100px;
    animation: flash 600ms ease infinite alternate;
}
.accordion-header.active_header{
    color: $color-primary;
        &:after {
            width: 95%;
        }
        & .indicator-chevron {
            border-color: transparent $color-primary $color-primary transparent;
        }
}
.child-accordion{
    
}
.child{
    padding-left: 20px;
}
.indicator-chevron {
    height: 6px;
    width: 6px;
    display: block;
    border-style: solid;
    border-width: 0 1px 1px 0;
    border-color: transparent #111111 #111111 transparent;
}
.accordion {
    border-top: solid 1px #f0f0f0;      
}

.accordion-header {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px 10px 30px;
    color:#111111;
    font-weight: 500;
    cursor: pointer;
    font-size: 15px;
    font-family: Roboto, sans-serif;
    transition: all 0.3s ease;
    &:after {
        content: '';
        position: absolute;
        left: 7px;
        bottom: 0;
        background: $color-primary;
        width: 0%;
        height: 1px;
        transition: all 0.3s ease;
    }
    &:hover {
        color: $color-primary;
        &:after {
            width: 95%;
        }
        & .indicator-chevron {
            border-color: transparent $color-primary $color-primary transparent;
        }
    }
}

.accordion-icon {
    transition: transform 0.3s ease;
}

.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.accordion-content.active {
    border-top: solid 1px #f0f0f0;
    max-height: 500px;
}
.accordion-content.active.child {
    border-top: solid 1px #f0f0f0;
}

.accordion-content .navigation__link {
    font-size: 15px;
}
.router-link-exact-active{
    color:$color-primary!important;
  }
</style>