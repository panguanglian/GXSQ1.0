<template>
    <div class="card">
        <div class="title">
            <p class="txt">无意者 烈火焚身;以正义的烈火拔出黑暗。我有自己的正义，见证至高的烈火吧。</p>
        </div>
        <div class="content">
            <img class="img" src="https://ossweb-img.qq.com/images/lol/web201310/skin/big10006.jpg" width="120" height="90" alt="">
            <div class="desc">
                <div class="text-content">
                    <p> 折磨生出苦难，苦难又会加剧折磨，凡间这无穷的循环，将有我来终结！真正的恩典因不完整而美丽，因情感而真诚，因脆弱而自由！</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'card',
    props: {
        
    }
}
</script>

<style scoped>
.card {
    padding-bottom:30rpx;
    display:block;
    background-color:#fff;
    overflow:hidden;
    border-radius:10rpx;
    margin:30rpx;
    border: 1px solid #ddd;
    box-shadow: 0 1rpx 6rpx rgba(0, 0, 0, 0.1);
}
.card .title {
    font-size:30rpx;
    font-weight:900;
    color:var(--black);
    line-height:100rpx;
    padding:0 30rpx;
}
.card .title .txt {
    text-overflow:ellipsis;
    white-space:nowrap;
    overflow:hidden;
}
.card .content {
    display:flex;
    padding:0 30rpx;
}
.card .content .img {
    width: 120px;
    height: 90px;
    margin-right:20rpx;
    border-radius:6rpx;
    max-width:100%;
    display:inline-block;
    position:relative;
    z-index:0;
}
.card .content .desc {
    flex:1;
    display:flex;
    flex-direction:column;
    justify-content:space-between;

}
.card .content .desc .text-content {
    font-size:28rpx;
    color:#888;
    height:4.8em;
    overflow:hidden;
    line-height:1.6;
}

</style>
