<template>
<div id="app">
  <transition name="slide-top">
    <router-view class="view"></router-view>
  </transition>
  <load v-show="hide" @hide="display"></load>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      hide:true
    }
  },
  methods:{
    display:function(flag){
      this.hide = flag;
    }
  }
}
</script>

<style lang="scss">
@import url('./css/reset.css');
html,body{
  height: 100%;
  background: url('./imgs/bg.jpg') no-repeat;
  background-size: 100% 100%;
}
#app {
  width: 100%;
  height: 100%;   
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: relative;
}
.view{
  transition: all 1s;
}
.slide-top-enter{
  transform: translateY(0)
}
.slide-top-leave-active{
  transform: translateY(-100%)
}
</style>
