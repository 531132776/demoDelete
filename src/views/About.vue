<template>
  <div class="about">
    <h1>This is an about page</h1>
    <span>{{msg}}</span>
  </div>
</template>
<script>
export default {
  data(){
    return {
      msg:'哎哟，挖槽'
    }
  }
}
</script>

<style scoped lang=less>
  .about{
    span{
      font-size: 20px;
    }
  }
    
</style>
