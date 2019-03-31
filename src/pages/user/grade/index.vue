<template>
    <div class="grade">
       <div class="head">
           我的成绩
       </div>
       <div class="gradeinfo" v-for="item in grade" :key="item.id">
           <div class="cu-form-group">
                <div class='title'>{{item.textbook}}:</div>
                <div class="txt">{{item.score}}</div>
            </div>
       </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            grade:[
                {id:1,textbook:'科目1',score:60},
                {id:2,textbook:'科目1',score:60},
                {id:3,textbook:'科目1',score:60},
                {id:4,textbook:'科目1',score:60},
                {id:5,textbook:'科目1',score:60}
            ]
        }
    }

}
</script>
<style scoped>
    .head{
        width: 100%;
        padding: 30px;
        background:#2b99ff;
        font-size: 20px;
        color: white;
    }
</style>

