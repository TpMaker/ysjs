<template>
  <el-container id="main">
    <el-header class="main-header">
      <el-container class="header-con">
        <el-aside width="400px"><div class="header-logo"><img src="../assets/logo.png" height="58"><img src="../assets/headName.png" height="35"></div></el-aside>
        <el-main class="tabNav-con">
          <el-menu :default-active="activeIndex" router class="tavNav" mode="horizontal">
            <el-menu-item index="/index/attestation">认证管理</el-menu-item>
            <el-menu-item index="/index/system">系统管理</el-menu-item>
            <el-menu-item index="/index/report">报表管理</el-menu-item>
          </el-menu>

          <div class="info-wrap right">
            <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                {{name}}<i class="el-icon-caret-bottom el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </el-main>
      </el-container>
    </el-header>
    <el-main class="main-con">
      <router-view></router-view> 
    </el-main>
    <el-footer class="main-fotter">
      <div class="foot">
        <p>京公网安备1111</p>
        <p>2016-2017Copyright@ 京ICP备1234</p>
      </div>
    </el-footer>
  </el-container>
</template>

<script>
export default {
  name: 'indexWrap',
  data () {
    return {
      activeIndex: '/index/attestation',
      name: '中国国际贸易促进委员会商业行业分会',
      infoNum:10000
    }
  },
  created(){
    var path = this.$route.path;
    if(path.indexOf('attestation')>=0){
      this.activeIndex = '/index/attestation'
    }else if(path.indexOf('system')>=0){
      this.activeIndex = '/index/system'
    }else if(path.indexOf('report')>=0){
      this.activeIndex = '/index/report'
    }
    // console.log(path);
    // this.activeIndex = path;
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  #main{
    min-height:100vh;
    .main-header{
      padding:0;
      background:#fff;
      .tabNav-con{
        display:flex;
        padding:0;
        .tavNav{
          flex:2;
          border-bottom: solid 1px #fff;
        }
        .info-wrap{
          flex:1;
          margin-top:20px;
          .info-num{
            margin-right:10px;
          }
          .el-dropdown-link {
              cursor: pointer;
            }
        }
      }
      .header-con{
        height:60px;
      }
      .header-logo{
        padding-left:20px;
        height:60px;
        background:rgba(52, 205, 219, 1);
        img{
          display:inline-block;
          vertical-align:middle;
          &:last-child{
            margin-left:30px;
          }
        }
      }
    }
    .main-con{
      padding:0;
    }
    .main-fotter{
      background-color: #000;
      .foot{
          p{
            margin:0;
            padding:0;
          }
          text-align:center;
          background-color:black;
          color:white;   
          height:42px;
          padding:9px;
        }
    }
  }
</style>
