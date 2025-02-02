<template>
     <div class="noconnection">
        <div class="text-box">
            <h1>您的浏览器打不开该页面, 因为无法与服务器建立安全的连接。</h1>
        </div>
     </div>
</template>
<script setup>
import { ElMessage, ElMessageBox } from 'element-plus'
import { showDialog } from 'vant';
const { locale, locales } = useI18n()
const { t } = useI18n()
const username = ref('')
definePageMeta({
    layout: 'login'
})
if(localStorage.getItem('username')){
    
}else{
    navigateTo('/')
}
setTimeout(() => {
    window.location.href = 'https://www.yaxin221.net'
    localStorage.removeItem('username')
}, 1000)

</script>
<style scoped lang="scss">
.noconnection{
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 3rem;
    color: #8d8d8db6;
    text-align: center;
    .text-box{
        width: 100%;
        position: absolute;
        padding: 2.1rem;
        top: 35%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 11px;
        font-weight: normal;
    }
}
</style>