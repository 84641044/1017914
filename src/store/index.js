import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
let store = new Vuex.Store({
    state:{
      questions:[],
      question_list:[],
      school:{}
    },
    mutations:{
      set_question(state,data){
          state.questions = Object.values(data);
      },
      select_question(state,type){
        let list = [];
        let temp = [];
        if(type == 0){
            list = state.questions.filter((val)=>{
                if(val.type != 1){
                    return val;
                }
            })
        }else if(type == 1){
            list = state.questions.filter((val)=>{
                if(val.type == 1||val.type == 2){
                    return val;
                }
            })
        }
        for(let i = 0;i<4;i++){
           let num = Math.floor(Math.random()*list.length);
           temp.push(list.splice(num,1)[0])
        }
        state.question_list = [...temp]
      },
      set_school(state,data){
        let school_list = Object.values(data);
        let num = Math.floor(Math.random()*school_list.length);
        state.school = school_list[num];
      }
    },
    actions:{
      get_question({commit},data){
        commit('set_question',data);
      },
      get_school({commit},data){
        commit('set_school',data)
      }
    }
})
export default store;