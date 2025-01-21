<template>
    <div class="section-1">
        <div class="right"></div>
        <div class="left"></div>
        <div class="login-box">
            <img src="@/assets/image/logo.png" alt="logo" class="login-box-logo">
            <h2 class="login-box-title">{{ $t('亚星管理平台') }} </h2>
            <div class="login-row">
                <i class="icon1"></i>
                <input v-model="username" autocomplete="off" type="text" :placeholder="`${$t('账号')}`" class="login-row-input">
            </div>
            <div class="login-row">
                <i class="icon2"></i>
                <input v-show="!showPassword" autocomplete="off" type="password" :placeholder="`${$t('密码')}`" class="login-row-input" v-model="password">
                <input v-show="showPassword" autocomplete="off" type="text" :placeholder="`${$t('密码')}`" class="login-row-input" v-model="password">
                
                <i class="eye" v-if="!showPassword" @click="showPassword=!showPassword"></i>
                <i class="eye-show" v-else @click="showPassword=!showPassword"></i>
            </div>
            <div class="login-row">
                <i class="icon3"></i>
                <input v-model="scode" autocomplete="off" type="text" :placeholder="`${$t('验证码')}`" class="login-row-input">
                <div class="login-row-code">
                    <img @click="code_num=generateNumber()" :src="`/image/cp${code_num}.png`" alt="code" class="login-row-code-img">
                </div>
            </div>
            <div class="login-row flex-lang">
                <div>
                    <i class="icon4"></i>
                    <p class="lang-title">{{ $t('语言选择') }}</p>
                    <p class="lang-title phone">{{ $t('语言') }}</p>
                </div>
                <div style="margin-right: 10px;">
                    <i v-if="$i18n.locale==='zh'" class="zh_img"></i>
                    <i v-if="$i18n.locale==='en'" class="en_img"></i>
                    <el-select
                        v-model="value"
                        :placeholder="`${$t('中文简体')}`"
                        size="small"
                        style="width: 100px"
                        @change="changeLang"
                        >
                        <el-option
                            v-for="item in options"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        />
                    </el-select>
                </div>
            </div>
            <div>
                <el-checkbox v-model="checked5" :label="`${$t('记住我')}`" style="margin: 0px 0px 25px; color: rgb(255, 255, 255);"  />
            </div>
            <button @click="login" class="login-btn">{{ $t('登录') }}</button>
            <div class="login-footer">
                <p>2.4.12.4.3</p>
                <p style="padding-top: 8px;">{{ $t('Google Chrome is recommended') }}</p>
            </div>
           
        </div>
       

    </div>

</template>

<script setup>
import { ElMessage, ElMessageBox } from 'element-plus'
const { locale, locales } = useI18n()
const { t } = useI18n()
const availableLocales = computed(() => {
  return (locales.value).map(i => ({
    code: i.code,
    name: i.name
  }))
})
const changeLang = (code) => {
    // console.log(code)
    locale.value = code
    // navigateTo(`/${code}`)
    window.location.href = `/${code}`
    // window.location.reload()
}
const open = (msg) => {
    ElMessageBox.alert(msg, t('Reminder'), {
    // if you want to disable its autofocus
    // autofocus: false,
    confirmButtonText: t('OK'),
    type: 'warning',
    // callback: (action) => {
    //   ElMessage({
    //     type: 'info',
    //     message: `action: leee`,
    //   })
    // },
  })
}
definePageMeta({
    layout: 'login'
})
const checked5 = ref(false)
const value = ref('')
const code = ref({
    cp1:'1251',
    cp2:'2327',
    cp3:'5476',
    cp4:'5000',
    cp5:'3013',
    cp6:'1458',
})
const showPassword = ref(false)
const password = ref('')
const username = ref('')
const scode = ref('')
const options = [
  {
    value: 'zh',
    label: '中文简体',
  },
  {
    value: 'en',
    label: 'English',
  },
]
const generateNumber = () => {
    return Math.floor(Math.random() * 6) + 1
}
const code_num = ref(generateNumber())
const login = () => {
    console.log(username.value,password.value,scode.value)
    if(!username.value) 
    {
        open(t('Username cannot be empty.'))
        return
    }
    else if(!password.value) 
    {
        open(t('Password cannot be empty.'))
        return
    }
    else if(!scode.value) 
    {
        open(t('Identifying Code cannot be empty.'))
        return
    }
    else if(scode.value !== code.value[`cp${code_num.value}`])
    {
        open(t('Wrong check code'))
        return
    }
    navigateTo('/dashboard')
}

</script>



<style lang="scss" scoped>
.section-1{
    position: relative;
    background-image: url('@/assets/image/login_bg.svg');
    background-size: cover;
    background-repeat: no-repeat;
    min-height: 100vh;
    .right{
        position: absolute;
        right: 0;
        bottom: 0;
        height: 673px;
        width: 505px;
        background: url('@/assets/image/right.png') no-repeat;
        background-size: 100% 100%;
        @include respond(phone){
            display: none;
        }
    }
    .left{
        position: absolute;
        left: 0;
        bottom: 0;
        height: 673px;
        width: 505px;
        background: url('@/assets/image/left.png') no-repeat;
        background-size: 100% 100%;
        @include respond(phone){
            display: none;
        }
    }
    .login-box{
        border-radius: 6px;
        background: hsla(0, 0%, 100%, .25);
        border: 1px solid #fff;
        width: 505px;
        padding: 20px 50px 30px 50px;
        position: absolute;
        left: 50%;
        top: 50%;
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
        z-index: 99;
        &-logo{ 
            width: 120px;
            display: block;
            margin: 5px auto 20px;
        }
        &-title{
            margin: -3px auto 30px auto;
            text-align: center;
            color: #fff;
            font-size: 32px;
            font-weight: 400;
            white-space: nowrap;
        }
        @include respond(phone){
            width: 80%;
            padding: 1.875rem .625rem 1.875rem .625rem;
            background: transparent;
            border: none;
            &-logo{
                width: 150px;
                display: block;
                margin: 0 auto 60px;
            }
            &-title{
                display: none;
            }
        }
    }
    .flex-lang{
        display: flex;
        -webkit-box-align: center;
        align-items: center;
        justify-content: space-between;
        background-color: #fff;
        border-radius: 4px;
        margin-bottom: 15px;
        height: 42px;
        div{
            display: flex;
            align-items: center;
        }
    }
    .login-row{
        display: flex;
        background-color: #fff;
        -webkit-box-align: center;
        align-items: center;
        height: 42px;
        border-radius: 4px;
        margin-bottom: 15px;
        @include respond(phone){
            height: 40px;
            margin-bottom: 17px;
        }
    }
    .login-row-input{
        display: inline-block;
        border: none;
        outline: none;
        font-size: 16px;
        background-color: #fff;
        background-image: none;
        border-radius: 4px;
        height: 32px;
        line-height: 32px;
        width: 100%;
        color: #1f2d3d;
        padding: 0 15px;
        &::placeholder{
            color: #999;
        }
        @include respond(phone){
            height: 30px;
            font-size: 14px;
            padding: 0 9px;
        }
    }
    .icon1{
        display: block;
        height: 20px;
        width: 24px;
        background: url('@/assets/image/icon1.png') no-repeat;
        background-size: 100% 100%;
        margin: 0 20px;
        @include respond(phone){
            background: url(data:image/png;base64,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) no-repeat;
            background-size: 100% 100%;
            margin: 0 16px;
        }
    }
    .icon2{
        display: block;
        height: 20px;
        width: 30px;
        background: url('@/assets/image/icon2.png') no-repeat;
        background-size: 100% 100%;
        margin: 0 20px;
        @include respond(phone){
            width: 26px;
            background: url(data:image/png;base64,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) no-repeat;
            background-size: 100% 100%;
            margin: 0 16px;
        }
    }
    .icon3{
        display: block;
        height: 20px;
        width: 33px;
        background: url('@/assets/image/icon3.png') no-repeat;
        background-size: 100% 100%;
        margin: 0 20px;
        @include respond(phone){
            width: 35px;
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJAAAACQCAYAAADnRuK4AAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAouSURBVHgB7Z0/b1RJEsCr3tgscMlkJ3TBeSVWumzHhgsuWhOcAF9g8wl2yE/yTHaZTXbZ2J/AQ3YZdmKDNrDJVmJt3mUnLRKzyXHZzQYLSHheb1V7Bs0aPJ553a9fd7/6SVjG+A8wv1dV/a8aQBAEQRAEQRAEQRCEQEAQPtJY7tThGizXEFeVgmVMoK7/QEGP3qYDpfbSg/YuCB8RgYY07nWWawnu0LsLl3xqb5CpO+nTdg8ESECApZXtDZLnEC6Xh1mgz33NXwOCRKClv211UEEL8qBgl9Jau8rRqLICUcpaoFpnh/4HlsGMngL16GS/3YUKUkmBZqh3ZqFLtdGjqkWjSgnEo6zkd7iRO2VdTuWiUWUEKijqXERlolH0AlmsdWZGAW6e7K8/goiJViAH6Wpaok5r0QmkxbmerCOqFoWAOvhDlCJFI9Cwxlmnd9fAb6ISKWiBdLS5Bk0EXC2jxjFEi5S9hd30qN2HQAlOIL3geRXWqDD+lhZiGp6lqdlB6OsZ7Uw9plHbEQRGMAJxiprjVfIEmsFLczE9+nUUkkxeC8TSJEnyDSjVRHQyf+MPHJkySCnN7WWncJR+107BQ7wSaJieGhxpMiqGKyfNJMaFUpDCe0h9qJ1KF0hHGYSGLoRjqGncwlEpVUr9m6UqI+05E0hHl3mKKDUdYb5W9CERphBS3kFJkeq5i0hlXSBeOqCIskbfuU5R5Y8sCMsi6ahERukP1eMso3rK4hqdNYH0RB7iRoDzMVXD6kRmDSxwa2V7naLOv0CiTAhwZli78dV9ePPj0+dgiLFAvDcYQf0ThKCg1LN84+bdn9+8evY9GGCUwvRWiQRfgxAqfZq0XDSpiYxOZZA8cjIhbOpUehhtd8ktUGOtw8PvJghBg7ymaED+CPSe5nCEGKg3/trJ/VrmFihJZMQVCzWD0bOcTBVAzeVfDcgvkCxBCGAiEIpA0aDKiEBCPKAIJJSECCQYIQIJRohAghEikAB6419ORCDBCBOBZB5IyC+QkploASSFCYaIQIIRIpBgxBwITlEAfeQDf6gbKdT1QmbAR6FEIEewOAmo7cFb2Dp/UvSsjyNsguH20jIQgRxAI9ZeptSdkwtOPwxPRTT/vNLZyhAPQ9prJTVQwYzkmebozIv9dgqZegiOUaB+gpyIQMWSZu9mO3d1zNdJKTiCQBCBiiMdvKXIk6MzBjdBgEAQgYpAqcd55WG4gwYEghTRtiF5KA01wQBOebdWtiAEJAJZBEE9MpWH4WE9BEJugZCbFgkfYXl+2G9vggVoTsjtqV+V/7U0iUAi0BCb8px9Q1wFl2A5AglgX55h+mpCIEgRbQAtTTx8YfHOi2G/pUMICIlAOSlQngVwDJ7mT2ESgWZEL4pm6sELiz2Zy5SHwUQEcgLLk4FeFLV27UDZ8pgiKWxK9KIoyZPuizzjmESgHlSEjyvqB/YadPskz+lAhvGFMct2jGnxLfLg/Pz/ISci0AQKkWe5Uw89bY0TdhGt4Eiheg7ZWTql5ZWGAly1dC9HSvI8sC3P3HU8VJ7J83L/77k3lOUWCHn9pKzLopTaHryDzQu2S7Ru3+ssZ4g7BiKlJtsxPseYPFF1t82dwgaqnLUwVKpNK96tSS/uDzRHk32hFsm0bZgVw708n8NzeYz+nUGlML3udNCeaqNMuqsFaN1e6fQprU3XUd/CXp7zBBB5jAQKpojmgjbPoiV/DS07LPLXw+QfsF1BebiO7IEBJgL1wCk50tEQPu3Aoyk4uyLyE4YbwYzujDhPMDUPlieQUxIFRjPAPJo63m8tsizjH7e+lwfCKpj5vlUwILdANoe30zBI5q1cK8WyKD57hdCvujyM6YNpFIGUwzSWnH5YBEvQYmh38Iv6suryMKdQYgpDMLN3FtSc3ReliJuMA5zn6ZtmEsMIlP9I7Kwg4Lq+OtxTlla2doKbJFTmAcC0iHYWgYh67RrugIewPBjg5Xt6GcgQI4Gcn6BEWLt1f+uJT5EoVHmYxMLrZyQQ50/lej6IJKpdx5c+HL4LWR7m9H35KYznEYzDYA70fppb9ztrUBKhy8M7GWwMJIwFohXvIyiHBfrhT/jeenBM8PKAnfqHMRYouwK7UCI0Gbjpsi6KQR4msVS/WtnRQy/goQeNInuDzO7uwfPEIg8vLJ8ctL4EC1hZC6P5oD0oH66LXhZVF8UiD2Oz7LAiUPYFdMGPbh31IuqimORhMLPXAc3aptSllc4WzxaDLyjYHSjVNk1pLCPXWRAJNtMXY207BxVlpRbTn8DzRTTUN5kvik0exvao2ZpAvA/Zw+6iui6i6NiEGYlRHmbwIf/GvM9hdUMZqt9u1vKEOqXWnVnqoljl4fSVfte2un5pVSCOQkr5eeR5OF90aUqLVR5NAQ+4/S2tfkahM2iualJdFLM8+pTte/t1aiFHA5fub722dDq0MBTgZvYh24MPFDGvQqOGuBHyrTlT0D3eb1m/RqGQc2H0FLfp7RPwGI40tXnchHmoBDRLX0hmKORURmj3PVSAblFLPIUd6/F0RFZJioo+TGEC6XkhsDvnIOSiW+QCc6EHCwdX+BY+aUheJkVGH6ZQgbjBgcoklZVIt+gDoIUfbT7hbhpSUDuH530GDh5eJ2fjaVX8oaQyt/AFvy6OnzvrMaY3eqHfc0OxYHvLxiScdefQc0MyKnPCsJWNE5y2d+FRma+LrdGg3KSuEU4F4lGZfjqkHioEXTi/o6kThzhvMKWfjhLuRq8Cuqd1AV1HJlGDEnjz6tl//vDVXSrgcRkEK3CzrBNdZ7r+uSVCI7Mujcy+BcEMmmc7Pmg5K5zHKbVH4rArqssWMdGh6x5VXklQepPNwRV1R0Zm+cnQ7nUMs1K6QKORmUg0O9y13+b9ZXnwos0vP0Ei0WzM0rW/2L+HR/Bm9wTx0Pf91KVz1lXfamP0vHglECMSXcru8X7rAXiCd53qJZ1NhK+h8moS1rsINEIi0SdYv8PMBt7elTGKRCDzRIyX8jBeX7bCEvE8Eb3rV+cPlxRwAZ5NvE1h57m90tmc+uK4WPBotHURpSym5uG/Pz47unHz7s+IeA8qwPAOs3+A5wQTgUbEXlwrgD7NMD88LmFlPQ/BRKAR/3v1rP/7m3f3SKIF+u2fICKG99T/5eXT9vcQCMFFoHGiqosmX2XuLUELxISe0kJLWecJXqARgUaj3UFm3km2TKIRiAklGnGtk1DUOWtAETZRCTRi6V6nCYgbvonE6YpPjJ6+ha3Qap2LiFIghqPRXAJNj9Jal2aU27GIMyJagUawSDXkNjPuN+8PC+THA0URJ+A6ZxLRCzRiJBJFpG+KTm0xpqqLqIxA43CNhByRLHZl1dGGRlV8kUkMxfG0VFKgEWejNlhDwNU8MvFoitas9lDBLt8/Gnu0+RyVFmgcvvFw7io0MoQG8nWagF//5hP4PL9SP/Elwwj6DPpRFYURBEEQBEEQBEEQBCFYfgWw4uPryLXtQQAAAABJRU5ErkJggg==) no-repeat;
            background-size: 100% 100%;
            margin: 0 16px;
        }
    }
    .eye{
        display: block;
        height: 30px;
        width: 37px;
        background: url('@/assets/image/eye.png') no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
        margin-right: 10px;
        margin-left: 30px;
    }
    .eye-show{
        display: block;
        height: 28px;
        width: 37px;
        background: url(data:image/png;base64,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) no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
        margin-right: 10px;
        margin-left: 30px;
    }
    .login-row-code{
        width: 90px;
        display: inline-block;
        .login-row-code-img{
            cursor: pointer;
            vertical-align: middle;
            height: 35px;
            width: 80px;
            border-radius: 2px;
            margin-right: 10px;
        }
        @include respond(phone){
            .login-row-code-img{
                height: 28px;
                margin-right: 7px;
            }
        }
    }
    .icon4{
        display: block;
        
        width: 18px;
        background: url(data:image/png;base64,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) no-repeat;
        background-size: 100% 100%;
        margin: 0 20px;
        @include respond(phone){
            width: 18px!important;
            height: 18px!important;
            background: url('@/assets/image/lang1.png') no-repeat;
            background-size: 100% 100%;
            margin: 0 16px;
        }
    }
    .lang-title{
        color: #999;
        font-size: 16px;
        font-weight: 400;
        padding-left: 20px;
        padding-bottom: 4px;
        @include respond(phone){
            display: none;
        }
    }
    .zh_img{
        display: block;
        height: 18px;
        width: 30px;
        background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAtCAYAAADm45atAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARPSURBVHgB7ZtNiFtVGIbfc+5Nbv7T6TTtTKgo1GrHH1C0iFAUraD4B+1GcCMuunAhtAjqpqgLcaO0gjsVLQgFXbgRXCqiGyuios5gWx1/2s7YMZNJJ8nN/Tt+59xpptOkyb1tU3rKfSCQZO6c4b7zft/3nhPCQExvnHiFMb5XMKxDwhqYQB2B+HDb6VP72Exl8oBgYi8SBhIAr7GZTdVFIYLEUUOgyqvzpPSiIXXiuBJwQQ9oz8hugecFmCVUsZd32WBpAd0xMSKkUJvfr8Ovc6QmfDQ+zUJ3YjmLGQLGWDSH+Asc9s8pFHfasG7yUH2njvRWDzoTSyzrZg/l3S3qdsOvze9wkNvuwD5qovmNhYW3CnD/NqAz0cUigUq72yg+Yke6vPVtGrNPjOPEnjG0fzLROWZC2Ky7lo5EFovnBIoPdWDd6MHa5g69Xnjh6u4JA/VDOarhlXWKAtntrhJMNn2jFEAXIouVvduFWfXBSwL5+5xY7vAbq38maAITry9h/Z4mJt9cAktBG3qmoVEMkN7iq01RF1mCT7YpxUJFgdJjNtrfp9TzLvQzWWpB48L683JADd9BmkTf+PIZ/PduAR4NgrOuu9rpESugvpKe8uhmGjAKawU766bMbS6u/6TWfS18hsX3cugcHWwTsxLQNPVhHzdhbfFoCNhoPZhC8wsLOtAjlnAZlg5nYZNzqgfrsOS4P7/k5Gs/fOqeNHDqxbJq6MNK0yHn1WSjJ0cGixyNzzMwyG3q9zRwF5ueqAoE/ZusbMAbnm9i/LnlvoLJm53fX1rTk6KQ2uzDI5GFPr2deggfLJaC/uNbj8yTA0TP+8d2VODN6Z2dIkNiDbVE5lZ3NbUzrJaLbPqP2xeVmYyxQMu94mCxpCC72mrqBS2G2kd5nHyhTGUXKhY1oJ67nlxLRo/So3ZYhhppNnAjrYLozg6c4wbm3yiFU0tGhOkUKjQtc3e5yEy5sGeihaXsHS6KD3eQfyB0ZOZOD2c+s9A6koYODHRWlsSwf0nhz6fH0fzSCq+WYv1m4p9n16P2QR65e9zI7rBnTHiLFE1u8NWUdWYNtL7TQyjJQGe1f6AM9NW6rkhroNcLBwrgWRF57IsOg/O7SU6lx18G+Mp5l7ah9FyCZTbYeywMscOQDV2uJRwG7zTD7FNjlNOY2meq9TXpWyM7KZVCZG731N5vw77l8E3S1f4xDdHk6gRCnnddMw3+UnD+MHHd4Royt7gqgMr44c0zbUquH6P7GEEIOuzjqqeZdKy8aX8j3DppzMiclbvXUel+6eMsBIX8uZfKWjXzfoxMrObXljpOlod9hfs72gslGb43vBzIYtdp09yPKHvDy4LuQq1wDXxOfOVIxIpBIlYMErFikIgVg0SsGCRixSARKwaJWDFIxIpBIlYMErFiwNU3CBKGInXivgjeRsJQgsA/pI7jfq1MHuScPZN8gaAX6ShBhpr6d+7V/wG6f4iu6HnDMAAAAABJRU5ErkJggg==) no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
        margin-right: 10px;
    }
    .en_img{
        display: block;
        height: 18px;
        width: 30px;
        background: url(data:image/png;base64,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) no-repeat;
        background-size: 100% 100%;
        cursor: pointer;
        margin-right: 10px;
    }
    .login-btn{
        width: 100%;
        background-color: #0085ff !important;
        color: #fff;
        border: none !important;
        height: 42px;
        font-size: 20px;
        border-radius: 3px;
        cursor: pointer;
        @include respond(phone){
            height: 39px;
            font-size: 16px;
        }
    }
    .login-footer{
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -webkit-box-align: center;
        align-items: center;
        margin-top: 15px;
        color: #fff;
        font-size: 15px;
    }
    .phone{
        display: none;
        @include respond(phone){
            display: block;
            font-size: 14px;
            padding-left: 8px;
            color: #19203e;
        }
    }
    @include respond(1290px){
        
    }
    @include respond(tab-port){
        
    }
    @include respond(phone){
        // padding: 30px 0px 40px 0px;
        background-image: url('@/assets/image/login_bg_mobile.png');
    }
}




</style>