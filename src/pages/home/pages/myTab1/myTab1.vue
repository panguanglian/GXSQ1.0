<template>
  <div class="tab1">
    <!-- 轮播图 -->
    <swiper class="card-swiper" indicator-dots="true" circular="true" autoplay="true" interval="5000" duration="500"
      indicator-color="#8799a3" indicator-active-color="#2b99ff">
      <swiper-item v-for="item in imageList" :key="item.id">
        <div class='bg-img shadow-blur' style="height: 100%;" :style="{background:'url('+item.url+')'}"></div>
      </swiper-item>
    </swiper>
    <!-- 九宫格导航 -->
    <!-- <div class="">
        <gird></gird>
    </div> -->
    <!-- 文章列表 -->
    <div v-for="(item, index) in 5" :key="index"  @click="toTextDetail(item)">
        <card></card>
    </div>
  </div>
</template>

<script>
import gird from 'components/grid/grid'
import card from 'components/card/card'
  export default {
      name: 'myTab1',
      components: {
          gird,
          card
      },
      data() {
          return {
              imageList:[
                {
                    id: 0,
                    url: 'https://image.weilanwl.com/img/4x3-1.jpg'
                }, {
                    id: 1,
                    url: 'https://image.weilanwl.com/img/4x3-2.jpg'
                }, {
                    id: 2,
                    url: 'https://image.weilanwl.com/img/4x3-3.jpg'
                }, {
                    id: 3,
                    url: 'https://image.weilanwl.com/img/4x3-4.jpg'
                }, {
                    id: 4,
                    url: 'https://image.weilanwl.com/img/4x3-2.jpg'
                }, {
                    id: 5,
                    url: 'https://image.weilanwl.com/img/4x3-4.jpg'
                }, {
                    id: 6,
                    url: 'https://image.weilanwl.com/img/4x3-2.jpg'
                }
            ]
          }
      },
      methods: {
          toTextDetail (item) {
              console.log('---- 文章详情参数 ----')
              console.log(item)
              wx.navigateTo({
                  url: "/pages/textDetail/main?params=" + item
              })
          }
      },
  }

</script>

<style scoped>

</style>
