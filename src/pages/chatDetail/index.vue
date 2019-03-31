<template>
    <div class="chatDetail">
        <!-- 聊天内容 -->
        <div class="cu-chat">
            <!-- 我的消息 -->
            <div class="cu-item self">
                <!-- 聊天内容 -->
                <div class="main">
                    <div class="content bg-green shadow">
                        <span>喵喵喵！喵喵喵！喵喵喵！喵喵！喵喵！！喵！喵喵喵！</span>
                    </div>
                </div>
                <!-- 头像 -->
                <div class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big107000.jpg);"></div>
                <!-- 消息时间 -->
                <div class="date">
                    <span>2019年3月30日 17:30</span>
                </div>
            </div>  

            <!-- 对方 -->
            <div class="cu-item">
                <!-- 对方头像 -->
                <div class="cu-avatar radius" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big143004.jpg);">></div>
                <!-- 聊天内容 -->
                <div class="main">
                    <div class="content shadow">
                        <span>喵喵喵！喵喵喵！</span>
                    </div>
                </div>
                <div class="date">
                    <span>17:33</span>
                </div>
            </div>

            

        </div>
        <!-- 底部 -->
        <div class="cu-bar foot input" style="bottom: 0px;">
            <div class="action">
                <span class="icon-sound text-grey"></span>
            </div>
            <input type="text" class="solid-bottom"   maxlength="300" cursor-spacing="10">
            <div class="action">
                <span class="icon-emojifill text-grey"></span>
            </div>
            <button class="cu-btn bg-green shadow" type="button">发送</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'chatDetail',
    data () {
        return {
            routerParams: null
        }
    },
    onLoad (options) {
        console.log('----- onLoad -----')
        console.log('** router-params **')
        console.log(options)
        this.routerParams = options
        wx.setNavigationBarTitle({
            title: options.params
        })
    }
}
</script>

<style scoped>

</style>
