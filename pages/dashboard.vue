<template>
  <div>
    <div class="sidebar-container">
        <div class="sidebar-expand">
            <i class="icon-expand"></i>
        </div>
        <div class="logo-container">
            <img src="@/assets/image/logo.png" alt="" class="show-logo">
        </div>
    </div>
  </div>
</template>
<style scoped lang="scss">
.sidebar-container{
    -webkit-transition: width .28s;
    transition: width .28s;
    background: -webkit-gradient(linear, left top, left bottom, color-stop(56%, #2b2e5a), to(#161831));
    background: linear-gradient(180deg, #2b2e5a 56%, #161831);
    height: 100%;
    width: 210px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 5px;
    z-index: 1001;
    border-radius: 12px;
    .sidebar-expand{
        border-radius: 50%;
        padding: 5px 5px 5px 0;
        position: absolute;
        top: 36px;
        right: -10px;
        padding-right: 5px;
        cursor: pointer;
        &::after{
            content: "";
            background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAkAAAAkCAYAAABboxD4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAERSURBVHgBjdTPUcJAFAbw7+2kAErgbEbcDpQOOMeDUIFjBUIHdiDOOOjNlGAJ6x/QIyVwNnEfyzIDGdi8x3fIIfnly+6+mcDaYQdKTI3aqsizv1URMQbhk10RbS4VV48qAvPVWa+4l1EIAePcXt+IKMbzNAXN0WsJeIy28KG54zQCOhX/vWko7Bg2Py+GMtqEEI+F8l7BojOmLzeFeO8HKiKiSxWFkXV1FI7jFIRT0EpHRE5FzPyhImNMqY1l+e2e3zU0iW1Sy9zNpq0ojGL1T76/W1cKBTD6da/LdsQY/biXsnnLHIL513YdzWT755gsEmDXRIRy8TkboyUR1eTvICW/KMSfRWwiMk8qypA5Da0BDkZXeSar5gkAAAAASUVORK5CYII=) no-repeat;
            width: 10px;
            height: 40px;
            background-size: 100% 100%;
            position: absolute;
            top: -5px;
            right: 0;
            cursor: pointer;
            z-index: -1;
        }
        .icon-expand{
            display: block;
            width: 20px;
            height: 20px;
            background: url(data:image/png;base64,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) no-repeat;
            background-size: 100% 100%;
        }
    }
    .logo-container{
        display: flex;
        justify-content: center;
        align-items: center;
        position: relative;
        width: 100%;
        margin-top: 10px;
        margin-bottom: 10px;
        .show-logo{
            width: 80px;
        }
    }
}
</style>
