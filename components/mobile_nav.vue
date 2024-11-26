<template>
<ul class="navigation__list">
    <li class="navigation__item accordion">
        <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/">Home</NuxtLink>
    </li>
    <li class="navigation__item accordion">
        <div class="accordion-header"
            :class="{active_header: activeAccordion === 'about'}"
             @click="toggleAccordion('about')">
            <span>About Editingstar</span>
            <span class="indicator-chevron accordion-icon"></span>
        </div>
        <div class="accordion-content" :class="{ active: activeAccordion === 'about' }">
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/who-we-are">Editingstar Introduction</NuxtLink>
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/our-history">Development Direction</NuxtLink>
            <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/leadership">Certificates</NuxtLink>
        </div>
    </li>
    <li class="navigation__item accordion">
        <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/contact-us">News & Media</NuxtLink>
    </li>
    <li class="navigation__item accordion">
        <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/community">Community</NuxtLink>
    </li>

    <li class="navigation__item accordion">
        <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/contact-us">Classroom</NuxtLink>
    </li>
    <li class="navigation__item accordion" >
        <NuxtLink @click="$emit('close_nav')" class="navigation__link" to="/contact-us">User Guide</NuxtLink>
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
    color: $color-white;
        &:after {
            // width: 95%;
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
    margin-top: 10px;
    margin-left: 10px;
    height: 15px;
    width: 10px;
    display: block;
    background-color: #fff;
    clip-path: polygon(48% 48%, 0 0, 100% 0);
}
.accordion {
    // border-top: solid 1px #f0f0f0;      
}

.accordion-header {
    position: relative;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    padding: 10px 10px 10px 33px;
    color:#fff;
    font-weight: 400;
    cursor: pointer;
    font-size: 16px;
    font-family: 'spotify', sans-serif;
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
        // color: $color-primary;
        &:after {
            // width: 95%;
        }
        & .indicator-chevron {
            
        }
    }
}

.accordion-icon {
    transition: transform 0.3s ease;
    transform-origin: top;
}

.accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease;
}

.accordion-content.active {
    // border-top: solid 1px #f0f0f0;
    max-height: 500px;
}
.accordion-content.active.child {
    // border-top: solid 1px #f0f0f0;
}

.accordion-content .navigation__link {
    font-size: 15px;
}
.router-link-exact-active{
    // color:$color-primary!important;
  }
</style>