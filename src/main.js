import Vue from 'vue'
import App from './App.vue'
import router from './router/index'
import axios from 'axios'
import Vuex from 'vuex'
import store from './store/index'
Vue.prototype.$http = axios;
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  beforeCreate:function(){
    this.$http.get('./src/service/question.json').then((result)=>{
      this.$store.dispatch('get_question',result.data)
    })
  }
})
