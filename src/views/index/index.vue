<template>
<div class="home">
    <div class="people">
        <div class="text"></div>
        <div class="f-select"></div>
        <router-link :to="{path:'/question/1',query:{type:1}}"><div class="f-like"></div></router-link>
        <router-link :to="{path:'/question/1',query:{type:0}}"><div class="f-wenke"></div></router-link>
    </div>
    <div class="left-hand"></div>
    <div class="right-hand"></div>
    <div class="true"></div>
    <div class="false"></div>
</div>
</template>
<script>
    export default {
        beforeRouteEnter:function(to,from,next){
            setTimeout(()=>{
                next()
            },3200)
        }
    }
</script>
<style lang="scss">
.home{
    width: 100%;
    height: 100%;
}
.people{
    width: 80%;
    height: 100%;
    background: url('../../imgs/home-pepole.png') no-repeat;
    background-size: 100% 380px;
    margin: auto;
    position: relative;
    .text{
        position: absolute;
        width: 100%;
        height: 70px;
        top: 35px;
        background: url(../../imgs/home-title.png) center no-repeat;
        background-size: 150px 70px;
    }
    .f-like,.f-wenke{
        width: 40%;     
        position: absolute;
        height: 60px;
        top: 214px;
    }
    .f-like{
        width: 42%;
        background: url(../../imgs/f-like.png) no-repeat;
        background-size: contain;
        left: 4%;
    }
    .f-wenke{
        background: url(../../imgs/f-wenke.png) no-repeat;
        background-size: contain;
        right: 2%;
    }
    .f-select{
        position: absolute;
        top: 185px;
        width: 100%;
        height: 22px;
        left: 0;
        background: url(../../imgs/f-select.png) center no-repeat;
        background-size: 190px 20px;
    }
}
.left-hand,.right-hand{
    position: absolute;
    width: 35px;
    height: 50px;    
}
.left-hand{
    background: url(../../imgs/home-left-hand.png) no-repeat;
    background-size: cover;
    left: 0;
    top: 284px;
}
.right-hand{
    background: url(../../imgs/home-right-hand.png) no-repeat;
    background-size: cover;
    top: 250px;
    right: 0;
}
.true,.false{
    position: absolute;
    width: 40px;
    height: 40px;
    top: 484px;
}
.true{
    background: url(../../imgs/home-icon-1.png) no-repeat;
    left: 20%;
    background-size: contain;
}
.false{
    background: url(../../imgs/home-icon-2.png) no-repeat;
    right: 20%;
    background-size: contain;
}
</style>
