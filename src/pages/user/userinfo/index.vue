<template>
    
<div class='userinfo'>
  <div class='us-photo'>
    <img src="https://image.weilanwl.com/img/square-4.jpg">
    <div class='us-name'>
      <text>用户名</text>
    </div>
  </div>

  <div class="amend">
    <div class="amend-info" v-for="item in userinfo" :key="item.id">
      <block>
          <div class="amend-icon">
          </div>
          <div class="amend-text">
            <text>{{item.name}}</text>
            <text class='txt-right'>{{item.text}}</text>
          </div>
      </block>
    </div>
  </div>
</div>
</template>
<script>
export default {
    data(){
        return{
            userinfo:[
                {id:1,name:'姓名:',text:'name'},
                {id:1,name:'手机:',text:'1368008***0'},
                {id:1,name:'学号:',text:'015'},
                {id:1,name:'职位:',text:'学生'}
            ]
        }
    }
};
</script>
<style>

.userinfo {
  width: 100%;

  padding-top: 20rpx;
}
.userinfo .us-photo {
  width: 100%;
  height: 250rpx;
  background: #fff;
  margin-bottom: 20rpx;
  margin-top: 10rpx;
  padding: 25rpx;
}
.userinfo .us-photo image {
  width: 200rpx;
  height: 200rpx;
  border-radius: 20rpx;
  float: left;
  margin-right: 50rpx;
}

.us-name {
  line-height: 200rpx;
}

.amend {
  background: #fff;
}

.amend .amend-data {
  overflow: hidden;
}

.amend .amend-icon image {
  width: 30rpx;
  height: 30rpx;
  float: right;
  margin-right: 20rpx;
  margin-top: 35rpx;
}

.amend .amend-text {
  padding: 25rpx 0rpx 25rpx 30rpx;
  border-bottom: 1rpx solid #f0eeee;
}

.txt-right {
  float: right;
  color: #999;
  margin-right: 30rpx;
}
</style>
