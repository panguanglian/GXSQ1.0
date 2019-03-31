<template>
    <div class="myTab2">
        <!-- 公告 -->
        <i-notice-bar icon="systemprompt" loop closable>
            2019/03/31,广现专才社区1.0版本正式启动
        </i-notice-bar>
        <!-- banner -->
        <div class="my-banner">
            <div class="banner-bg"></div>
        </div>
        <!-- 九宫导航 -->
        <grid></grid>
        <!-- 文章列表 -->
        <card></card>
    </div>
</template>

<script>
import grid from 'components/grid/grid'
import card from 'components/card/card'
export default {
    name: 'myTab2',
    components: {
        grid,
        card
    }
}
</script>

<style scoped>
.my-banner {
    width: 100%;
    height:420rpx;
    padding: 30rpx;
    box-sizing: border-box;
}
.my-banner .banner-bg {
    width: 100%;
    height: 100%;
    background: url(https://image.weilanwl.com/img/4x3-1.jpg) no-repeat;
    background-size:cover;
    background-position:center;
}
</style>
