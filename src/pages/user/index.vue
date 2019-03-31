<template>
    <div class="user">
        <div class="head">
            <div class="avatar">
                <div class="img">
                    <div class="cu-avatar xl round" @click="showModal">
                        <img :src="img" alt="">
                    </div>
                </div>
                <div class="name" ref="btn">1211</div>
            </div>
            <div class="set">
                <img src="../../../static/images/set.png" alt="">
            </div>
        </div>

        <div class="more-info" v-for="item in moreinfo" :key="item.id">
            <navigator :url="item.url">
            <div class="cu-form-group">
                <div class='title icon-right'>{{item.info}}</div>
                <div class="icon-right"></div>
            </div>
            </navigator>
        </div>
        



<div class="modal" v-if="modals">
  <div class="cu-dialog">
    <div class="bg-img" :style="{background:'url('+img+')'}">
      <div class="cu-bar justify-end text-white">
        <div class='action' @click='hideModal'>
          <text class='icon-close '></text>
        </div>
      </div>
    </div>
    <div class="cu-bar bg-white">
      <div class='action margin-0 flex-sub  solid-left' @click='upimg'>我知道了</div>
    </div>
  </div>
</div>




    </div>
</template>

<script>
export default {
    name: 'user',
    
    data(){
        return{
            moreinfo:[
                {id:1,info:"班级信息",url:'/pages/user/moreinfo/main?id={{item.id}}'},
                {id:2,info:"个人信息",url:'/pages/user/userinfo/main?id={{item.id}}'},
                {id:3,info:"课表查询",url:'/pages/user/classform/main?id={{item.id}}'},
                {id:4,info:"个人成绩",url:'/pages/user/grade/main?id={{item.id}}'}
            ],
           modals:false,
           img:'https://image.weilanwl.com/img/square-4.jpg',
        
        };
       

    },
    methods:{
        showModal () {
        this.modals = true
        },
        hideModal () {
            this.modals = false
        },
        upimg: function (e) {
        var that = this;
        wx.chooseImage({
        sizeType: ['original', 'compressed'],
        success: function (res) {
          var poster = res.tempFilePaths
          that.setData({
            poster: poster,

            
          })
          
        },
        
      })  
  },
   }
  
}
</script>

<style scoped>
    .head{
        width: 100%;
        background:#2b99ff;
        display: flex;   
        justify-content: center;
        padding: 60px 0 20px 0;
        text-align: center;
         position: relative;
    }
    .head .set{
        position: absolute;
        top: 15%;
        right: 5%;
        width: 25px;
        height: 25px;
    }
    .set img{
        width: 25px;
        height: 25px;
    }
   .head .avatar {
       margin: 0 auto; 
    }
   .head .avatar .name{
       font-size: 18px;
       color: #fff;
        
   }
   .modal{
        position:fixed;
        top:0;
        right:0;
        bottom:0;
        left:0;
        z-index:1110;
        text-align:center;
        -ms-transform:scale(1.185);
        transform:scale(1.185);
        backface-visibility:hidden;
        perspective:2000rpx;
        background:rgba(0, 0, 0, 0.6);
        transition:all 0.3s ease-in-out 0s;
        pointer-events:none;
        transition-duration:0.3s;
        -ms-transform:scale(1);
        transform:scale(1);
        overflow-x:hidden;
        overflow-y:auto;
        pointer-events:auto;

   }
   .modal .cu-dialog{
        width:500rpx;
        height:570rpx;
        top:100rpx;

   }
   .cu-avatar{
       overflow: hidden;
   }
   .cu-avatar img{
       width: 100%;
       height: 100%;
   }
  .bg-img{
      height: 470rpx;
      
  }
</style>
