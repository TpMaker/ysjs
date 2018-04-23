<template>
  <div>
    <el-button type="primary" @click="Print">主要按钮</el-button>
    <div id="printPage">
      <div class="imgWrap">
        <img src="../../assets/newCard.jpg">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    Print:function(){
      var newstr = document.getElementById("printPage").innerHTML; 
      var oldstr = document.body.innerHTML; 
      document.body.innerHTML = newstr; 
      window.print(); 
      // window.location.reload();
      document.body.innerHTML = oldstr; 
      return false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .imgWrap{
    text-align:center;
  }
  @media print{
  }
</style>
