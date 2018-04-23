<template>
  <el-container id="attestation-con">
    <el-aside width="200px" class="att-tabnav">
      <el-menu
        :default-active="activeIndex"
        class="tabMenu"
        router
        text-color="#AEAEAE"
        active-text-color="#fff">
        <el-menu-item index="/index/attestation/checkVip">
          <span slot="title">审核会员</span>
        </el-menu-item>
        <el-menu-item index="/index/attestation/infoCheck">
          <span slot="title">人才信息审核</span>
        </el-menu-item>
        <el-menu-item index="/index/attestation/negativeList">
          <span slot="title">负面清单</span>
        </el-menu-item>
        <el-menu-item index="/index/attestation/peopleInfo">
          <span slot="title">人物百科</span>
        </el-menu-item>
      </el-menu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      activeIndex:'/index/attestation/default',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{

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
