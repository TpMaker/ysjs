<template>
  <div>审核会员</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #attestation-con{
    min-height:calc(100vh - 120px);
    padding:0;
    .att-tabnav{
      background-color:rgba(59, 70, 87, 1);
    }
    .tabMenu{
      background-color:rgba(59, 70, 87, 1);
      border:none;
      .el-menu-item.is-active{
        background-color:rgba(86, 92, 109, 1);
      }
      .el-menu-item:focus, .el-menu-item:hover{
        background-color:rgba(86, 92, 109, 1);
      }
      .el-menu-item{
        width:100%;
        margin:0;
      }
    }
  }
</style>
