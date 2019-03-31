<template>
    <div class="textDetail">
        <!-- 标题 -->
        <div class="title text-black text-bold text-xl">
            <span>这里有个戏精铲屎官，主子了解一下？</span>
        </div>
        <!-- 用户信息 -->
        <div class="user">
            <!-- 用户头像 -->
            <div class="cu-avatar round margin-left" style="background-image:url(https://image.weilanwl.com/img/4x3-3.jpg);"></div>
            <div class="user-info"> 
                <p class="user-name text-black text-bold">铲屎官</p>
                <p class="date">2019/03/31</p>
            </div>
            <div class="attention">
                <button class="cu-btn round bg-blue button-hover sm">关注</button>
            </div>
        </div>
        <!-- 文章内容 -->
        <div class="text-content shadow">
            <div class="text-img" style="background-image: url(https://image.weilanwl.com/img/4x3-1.jpg); ">

            </div>
            <div class="txt">
                <p>时光的单车飞快驶去，岁月的倒影也将消失，白天与黑夜不停的交替，轮回的四季斑驳了谁的岁月，蹉跎了谁的年华。一个人静静地与岁月交错，于平淡之中细细体会生活的深意，去注视，去聆听，去感受那些带着希望的别离以及那些经受沧桑的相逢，不论时光如何飞转，那些落花一样的往事，依然鲜活地存在于我的脑海之中。当岁月和美丽的回忆已成为风中的叹息，我们伤感的眼里也许依然残存旧时的泪痕，模糊了视线，不敢轻易触碰。</p>
            </div>
            <div class="text-img" style="background-image: url(https://image.weilanwl.com/img/4x3-2.jpg); ">
            
            </div>
            <div class="txt">
                <p>生活的列车慢慢的前进，有些人下去，也有人上去，不慌不忙的过着行云流水的日子，有的人知道自己的前方在哪里停靠，生活充实而安逸，有些人庸庸碌碌的过着不起波澜的日子，每天无头鸟似的瞎忙，朦胧的眼神向世界宣告着昏暗思想，一个个皮囊悬浮在空气中，没有生机的灵魂过着糜烂的时间。没有归属，无处生根。有时我们在迷茫青春的时候，日子也慢慢地溜走，不留一点痕迹。</p>
            </div>
        </div>
        <!-- 评论 -->
        <div class="comment">
            <div class="header">
                <span class="icon-comment lg text-blue"></span>
                <span class="text-bold">评论</span>
            </div>
            <!-- 评论列表 -->
            <div class="comment-list">
                <div class="item">
                    <!-- 用户头像 -->
                    <div class="cu-avatar lg round margin-left" style="background-image:url(https://image.weilanwl.com/img/4x3-4.jpg);">
                    </div>
                    <div class="item-info">
                        <!-- 用户评论内容 -->
                        <div class="main">
                            <div class="item-name text-bold text-lg">
                                <span>喵星人</span>
                                <span class="text-sm" style="float: right; color: #ccc;">1楼</span>
                            </div>
                            <div class="comment-content">
                                <p>喵喵喵喵喵喵喵喵喵</p>
                            </div>
                        </div>
                        <!-- 用户回复评论 -->
                        <div class="reply bg-gray">
                            <div class="reply-item">
                                <span class="reply-name text-bold">汪星人</span> : <span class="reply-content">汪汪汪汪...</span>
                            </div>
                            <div class="reply-item">
                                <span class="reply-name text-bold">喵星人</span>
                                <span> 回复 </span>
                                <span class="reply-name text-bold">汪星人</span>
                                 : <span class="reply-content">喵喵喵喵...</span>
                            </div>
                        </div>
                        <div class="date text-grey text-xs" style="margin: 10px 0px;">
                            <span>1分钟前</span>
                        </div>
                    </div>
                </div>
            </div>
            <!-- <div class="no-comment">
                <div class="no-icon">
                    <span class="icon-comment"></span>
                </div>
                <p class="tips">评论区空荡荡,点击发表第一条评论~</p>
            </div> -->
        </div>
        <!-- 发表评论 -->
        <div class="footer">
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'textDetail'
}
</script>

<style scoped>
.textDetail {
    
}
.textDetail .title {
    padding: 30rpx;
    background: #fff;
}
.textDetail .user {
    background: #fff;
    display: flex;
    padding: 15rpx;
    box-sizing: border-box;
    align-items: center;
}
.textDetail .user-info {
    margin-left: 20rpx;
    width: 70%;
}
.textDetail .user-info .date {
    color: #999999;
    font-size: 12px;
    margin-top: 5px;
}
.textDetail .text-content {
    padding: 30rpx;
    width: 100%;
    font-size: 15px;
    background: #fff;
}
.textDetail .text-content .text-img {
    width: 100%;
    min-height: 400rpx;
    display: flex;
    justify-content: center;
    align-items: center;
}
.textDetail .text-content .text-img {
    width: 100%;
    height: 100%;
}
.textDetail .text-content .txt {
    text-indent: 30px;
    color: #666;
    line-height: 1.8;
}
.textDetail .comment {
    margin-top: 10px;
    background: #fff;
}
.textDetail .comment .header {
    padding: 30rpx;
    display: flex;
    align-items: center;
    font-size: 16px;
}
.textDetail .comment .header span {
    margin: 5px;
}
.textDetail .comment .no-comment {
    width: 100%;
    height: 300rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.textDetail .comment .no-comment .no-icon {
    font-size: 80px;
    color: #2b99ff;
}
.textDetail .comment .comment-list .item{
    padding: 30rpx;
    display: flex;
}
.textDetail .comment .comment-list .item .item-info {
    margin-left: 20rpx;
    border-bottom: 1px solid #ddd;
    width: 80%;
}
.textDetail .comment .comment-list .item .item-info .main div {
    margin-bottom: 10px;
}
.textDetail .comment .comment-list .item .item-info .reply {
    padding: 15rpx;
    color: #666;
}
.textDetail .comment .comment-list .item .item-info .reply .reply-item {
    margin-bottom: 10px;
}
</style>
