<template>   

        <div class="navbar" >
            <div class="navbar-left">
                
            </div>
            <div class="navbar-right">
              <div class="lang-content">
                <i class="zh-img"></i>
                <p class="zh-text">中文简体</p>
                <div class="down-icon"></div>
              </div>
              <div class="avatar-wrapper">
                <img src="@/assets/image/avatar.png" alt="" class="user-avatar">
                <p class="user-name">{{ username }}</p>
              </div>
              <div class="quit">
                <i class="icon-logout"></i>
              </div>
            </div>
        </div>

  </template>
  
<script setup>
const username = localStorage.getItem('username')||'user1'



</script>
  
<style lang="scss" scoped>
  .navbar {
     display: flex;
     position: fixed;
    flex-direction: row;
    justify-content: space-between;
     align-items: center;
     height: 70px;
     padding:0px;
     width: 100%;
     box-shadow: 0 1px 4px rgba(0, 21, 41, .08);
     background: #fff;
     .navbar-left{
      padding-left:10px;
     }
     .navbar-right{
      display: flex;
      align-items: center;
      .lang-content{
        display: flex;
        align-items: center;
        margin-right: 62px;
        .zh-img{  
          display: block;
          height: 18px;
          width: 30px;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAAAtCAYAAADm45atAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAARPSURBVHgB7ZtNiFtVGIbfc+5Nbv7T6TTtTKgo1GrHH1C0iFAUraD4B+1GcCMuunAhtAjqpqgLcaO0gjsVLQgFXbgRXCqiGyuios5gWx1/2s7YMZNJJ8nN/Tt+59xpptOkyb1tU3rKfSCQZO6c4b7zft/3nhPCQExvnHiFMb5XMKxDwhqYQB2B+HDb6VP72Exl8oBgYi8SBhIAr7GZTdVFIYLEUUOgyqvzpPSiIXXiuBJwQQ9oz8hugecFmCVUsZd32WBpAd0xMSKkUJvfr8Ovc6QmfDQ+zUJ3YjmLGQLGWDSH+Asc9s8pFHfasG7yUH2njvRWDzoTSyzrZg/l3S3qdsOvze9wkNvuwD5qovmNhYW3CnD/NqAz0cUigUq72yg+Yke6vPVtGrNPjOPEnjG0fzLROWZC2Ky7lo5EFovnBIoPdWDd6MHa5g69Xnjh6u4JA/VDOarhlXWKAtntrhJMNn2jFEAXIouVvduFWfXBSwL5+5xY7vAbq38maAITry9h/Z4mJt9cAktBG3qmoVEMkN7iq01RF1mCT7YpxUJFgdJjNtrfp9TzLvQzWWpB48L683JADd9BmkTf+PIZ/PduAR4NgrOuu9rpESugvpKe8uhmGjAKawU766bMbS6u/6TWfS18hsX3cugcHWwTsxLQNPVhHzdhbfFoCNhoPZhC8wsLOtAjlnAZlg5nYZNzqgfrsOS4P7/k5Gs/fOqeNHDqxbJq6MNK0yHn1WSjJ0cGixyNzzMwyG3q9zRwF5ueqAoE/ZusbMAbnm9i/LnlvoLJm53fX1rTk6KQ2uzDI5GFPr2deggfLJaC/uNbj8yTA0TP+8d2VODN6Z2dIkNiDbVE5lZ3NbUzrJaLbPqP2xeVmYyxQMu94mCxpCC72mrqBS2G2kd5nHyhTGUXKhY1oJ67nlxLRo/So3ZYhhppNnAjrYLozg6c4wbm3yiFU0tGhOkUKjQtc3e5yEy5sGeihaXsHS6KD3eQfyB0ZOZOD2c+s9A6koYODHRWlsSwf0nhz6fH0fzSCq+WYv1m4p9n16P2QR65e9zI7rBnTHiLFE1u8NWUdWYNtL7TQyjJQGe1f6AM9NW6rkhroNcLBwrgWRF57IsOg/O7SU6lx18G+Mp5l7ah9FyCZTbYeywMscOQDV2uJRwG7zTD7FNjlNOY2meq9TXpWyM7KZVCZG731N5vw77l8E3S1f4xDdHk6gRCnnddMw3+UnD+MHHd4Royt7gqgMr44c0zbUquH6P7GEEIOuzjqqeZdKy8aX8j3DppzMiclbvXUel+6eMsBIX8uZfKWjXzfoxMrObXljpOlod9hfs72gslGb43vBzIYtdp09yPKHvDy4LuQq1wDXxOfOVIxIpBIlYMErFikIgVg0SsGCRixSARKwaJWDFIxIpBIlYMErFiwNU3CBKGInXivgjeRsJQgsA/pI7jfq1MHuScPZN8gaAX6ShBhpr6d+7V/wG6f4iu6HnDMAAAAABJRU5ErkJggg==) no-repeat;
          background-size: 100% 100%;
          cursor: pointer;
          margin-right: 0;
        }
        .zh-text{
          color: #2b2d3f !important;
          font-size: 16px;
          margin-bottom: 3px;
          font-weight: 500;
          padding-left: 15px;
        }
        .down-icon{ 
          display: inline-block;
          width: 7.5px;
          height: 7.5px;
          margin-left: 15px;
          margin-bottom: 5px;
          background-image: linear-gradient(45deg, #c0c4cc 0%, #c0c4cc 50%, transparent 50%);
          transform: rotate(-45deg);
        }
      }
      .avatar-wrapper{
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100%;
        margin-right: 10px;
        .user-avatar{
          cursor: pointer;
          width: 35px;
          height: 35px;
          margin-top: 5px;
        }
        .user-name{
          color: #2b2d3f;
          font-size: 16px;
          margin: 0 5px;
        }
      }
      .quit{
        padding-right: 30px;
        cursor: pointer;
        .icon-logout{
          display: block;
          width: 20px;
          height: 20px;
          background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAABCCAYAAADjVADoAAAACXBIWXMAACE4AAAhOAFFljFgAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAZdSURBVHgB7VvLbttGFL0zpIwUaRAVfaToImZ3smMl8i4o6pj5gjhfYOULouy6i/0Frr/A8hfE/gIzLRB0F6G2ZQNdlMnKbQNUWaRwbJHTe0na0WNmROpJCj4LPzgz1PDo3jv3RQYTwkJx+V8BkO+43Djcf/kFTAAcJgQJCYQ8TAgTIyJtGAoRhYUf7TvFBxulkj3Wb5Q+s1CwLRgCBiKCNoG6/sJgxh4Aq3z8eHYTxoRCiQhgFSMn/rxTXN4alJC+iVi4++CpmROvUddXYPIoIyF788WlMvQJExLCsuz85zfElhCpIKAVFgO+hdKx7J2z9eNjx02yOJFEkPhdv5EaKVAhkI6kqhKbiPl5u0SqgH9akH5YgargnuMuiEUE3ZAbYk/oz3n36OjVGxgTjmuB6LuaKRYz4pPRk4g4JAjBNj8YbBHGjBx+JhNiUzMlH5cMphskPSMRA4U64OKG77Fn9bpThYRAoyZk19HFZpAQ80W7zEBsgPrLaqABXdQZUKVE0OmgIwHh+gZ72A8Jw0Z936l6oUS6iinBs+gcPiUReDoQw5Zi2PWIhJpTg5SAbAbtCdRkWOde8ExSSIkgUcNfZcWa4AMjY5UqxCCjPHd3qSIb6CKC7ALq23PZZLIJaSXhArQ34bHH+GdDNs4Ffy5TkS4iUJeIBEt2E+Gjx5ZiEi6AdqsmgD1TDOfPPb/ri24jIvLGyoobVA8PnZ8hIyADqj5aWaWwYNutV9qIiKRBBtK9dcgYTJOvgUJFDNb+rJdE6KQBxSwTKtGJWs1paFTEbo1HLonQSQOJGWQU0d4d2Rg3/csTpFU1bNlkkgbIOJiQPwNjbPXiBAmIKBaXKKy2JHMzLQ0XODhwHJDbivxpE4I4JCDCB/5IdgMhxDZMCVQnCGdiNfgd/W/LJvkmr8KUoKl4FhYlmXgUolqSOW4WTwoVNPmL/NzcD7PcMDxLsdaBKQOq+q7sOmPGQ+4JZssGfWC7MG1gXB4tc1bieITck401PW0aLJPwDYWUM7A4OgrSZMUf9fTkGoaFawp3mwG7x/GnjAjpgqyDXG5QhecgPzGmkogIsmezrqrhEa6IiHBFRAQiwpVcn1jnyhggezbXxOOzISnz5Ck8jazsSIBe3iaGx2Prp2hBNxHIgSkYuMhDV0nsw1lwmozMl6gf/FKBMSOMq7oLbIKJN+hQCWnhNgde7EpyVqCMqwS4XOd/w5RBmXdh3OEq/xtjkEcwfbBlFymu4po43erM/WcZurwLxVWBH6GK0zn4NkwLuF9WjDjBcPiD78hmoHo8hSmBStUxHxPkZQMidFneQVr20oKoum9Jhtzj8Nk/udiqLC8Drir8ZAaq6j60pCMvicA6IRV4pSGqqqcgC9BIA7TWcy+JIHdamftX9BSkHbpeD0S1NUvfFn1qpCJ/5oktyBh0vR6d1X2j9Z+TE/f01jezn6GJtTsXYjxS+Orb2+/f/fX2N8gAqFccd/2TYrh69PvLtipeVz4ikgpXtppUJEk366RAexSCqZpapL0eXUSEtoI9UdyEGjhfDOsdiVEgsAu4R9W4qtdDmqEiv0LT0Wr10/Q9DvRqkKUOYVV1X5mqOwjzBY5iOHHT96hBe+nVIPufCWuq9dqcZc4I2vRcxTCJ4Os0+BhkGKlfHHo0yLqajFvPvmd6ZcjwtB9CqPbzssigoDbp6zfFBiYayqo51BvaNNhir8q+AT3w7sRtfPnd97s8fGNH5VSVuAErX9+6/f6fv9+OpVRIUjAzAzto/e6r5gRN8ygJRzXnuNf9YnfCx5QMgivAX6/v/1qFEWCuuLSC0TJFxTb02geqdtx+8USvBARk+Hg0CYhjJF1Milb9M749qMoUCvctPjOzygWriDilBgE1z2SPkzS6JH43grCwYK8JJuJHpQyz4bg5H/zdpudhRuiV8lsivb927TTPczmbqtTo5a7gWgtigo5IOh3chKWIvoggIBk2kkHxhwV9gPQXSwkNyiBHFfnwmxb9388D9uRo39npc/1gSCwdI0C/UtCKgYkghIbUX8PbrcJ4QW/uDKU9eihEXIAIMZtQFmHvogUjAKkAFiI2m2Z7PmEI9x0NQhtCmWO2DAOSEvgDQmxTkjnKrw4dIyOiFSQpOQ9KnvBtLK3NCiImNJBWx1SXCrKMXpwDLEViFc4/B2ccHuv/aZGUcQ1iZcAAAAAASUVORK5CYII=) no-repeat;
          background-size: 100% 100%;
          margin-right: 10px;

        }
      }
    }
     @include respond(phone){
      padding:0 8px;
      height: 65px;
     }
  }
  
  
  
  @media (min-width: 992px) {
    .app-links {
      display: flex;
    }
  
  }
  @media (max-width: 991px) {
    .app-links {
      display: none;
    }
  
  }

  @media (max-width: 320px) {
 
  }
  
  </style>
  