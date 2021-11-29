<template>
  <div id="wrapper">
    <RouterView />
  </div>
</template>

<script>
export default {
  data(){
    return{};
  },
};
</script>

<style lang="scss" scoped>
//scoped를 사용하면 해당 템플릿에서만 효과 줄 수 있음
#wrapper{position:relative;width:100%;height:100vh;background-color:indianred;}

</style>