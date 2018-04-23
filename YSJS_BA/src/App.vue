<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang='scss'>
@import "styles/sass/reset.scss";
@import "styles/sass/common.scss";
  html,
  body,
  #app {
    box-sizing: border-box;
    padding: 0;
    min-height:100%;
    margin: 0;
    background:#eaeaea;
    font-family: 'Gill Sans', Arial, 'Microsoft Yahei', 'Microsoft Yahei In-Bold', 'Apple LiGothic Medium';
    font-size: 14px;
    ::placeholder{
      font-family: 'Gill Sans', Arial, 'Microsoft Yahei', 'Microsoft Yahei In-Bold', 'Apple LiGothic Medium';
    }

    .zh-CN {
      font-family: 'Microsoft Yahei', 'Microsoft Yahei In-Bold', 'Apple LiGothic Medium', Arial;
      ::placeholder{
        font-family: 'Gill Sans', Arial, 'Microsoft Yahei', 'Microsoft Yahei In-Bold', 'Apple LiGothic Medium';
      }
    }
  }
</style>
