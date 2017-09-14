<template>
    <div class="question">
        <div class="title">
            <span><b>{{questions[question_ind-1].subjectCh}}</b> 第{{question_ind}}题/共4题</span>
        </div>
        <p>{{questions[question_ind-1].title}}</p>  
        <div class="answers">
            <ul>
                <li class="ans a" @click="select(1)" :class="{selected:sel_ind==1}"><span></span><b>{{answers[0]}}</b></li>
                <li class="ans b" @click="select(2)" :class="{selected:sel_ind==2}"><span></span><b>{{answers[1]}}</b></li>
                <li class="ans c" @click="select(3)" :class="{selected:sel_ind==3}"><span></span><b>{{answers[2]}}</b></li>
            </ul>
        </div>
    </div>
</template>
<script>
    import store from '../../store/index'
    export default {
        store,
        data:function(){
            return{
                sel_ind:null,
                question_ind:null,
                questions:[],
                answers:[]
            }
        },
        methods:{
            select:function(ind){
                this.sel_ind = ind;
                
                setTimeout(()=>{
                    this.sel_ind = null;
                    if(this.question_ind==4){
                        this.$router.replace('/result');
                    }else{
                        this.$router.replace('/question/'+(this.question_ind+1));
                        this.question_ind = this.$route.params.id*1;
                        this.questions = this.$store.state.question_list;
                        this.answers = this.$store.state.question_list[this.question_ind-1].answers;
                    }
                },500)
            }
        },
        created:function(){
            let type = this.$route.query.type;
            this.$store.commit('select_question',type);
            this.question_ind = this.$route.params.id*1;
            this.questions = this.$store.state.question_list;
            this.answers = this.$store.state.question_list[this.question_ind-1].answers;
        }
    }
</script>
<style lang="scss">
    .question{
        width: 84%;
        margin: auto;
        padding-top: 16px;
        .title{
            height: 36px;
            background: url(../../imgs/bg-question-top.png) no-repeat;
            background-size: 100% 100%;
            text-align: center;
            font-size: 12px;
            line-height: 24px;
            color: #22C485;
        }
        p{
            color: #333;
            padding: 5px 20px 15px;
            background: url(../../imgs/bg-question-center.png) no-repeat;
            background-size: 100% 100%;
        }
        .answers{
            height: 400px;
            background: url(../../imgs/bg-question-bottom.png) no-repeat;
            background-size: 100% 100%;
            padding-top: 15px;
            box-sizing: border-box;
            .ans{
                width: 76%;
                margin-left: 6%;
                height: 42px;
                color: #fff;
                font-size: 14px;
                box-sizing: border-box;
                margin-bottom: 15px;
                background: url(../../imgs/btn-bg-select.png) no-repeat;
                background-size: 100% 200%;
                padding-left: 13px;
                display: flex;
                align-items: center;
                span{
                    width: 26px;
                    height: 28px;
                    margin-right: 13px;
                }
            }
            .selected{
                background-position: 0 100%;
            }
            .a span{
                background: url(../../imgs/a.png) no-repeat;
                background-size: contain;
            }
            .b span{
                background: url(../../imgs/b.png) no-repeat;
                background-size: contain;
            }
            .c span{
                background: url(../../imgs/c.png) no-repeat;
                background-size: contain;
            }
        }
    }
</style>
