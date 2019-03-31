<template>
    <div class="chatList">
        <div class="list-item shadow ">
            <div class="cu-avatar round lg margin-left" style="background-image:url(https://ossweb-img.qq.com/images/lol/web201310/skin/big81005.jpg);">
            </div>
            <div class="user-name">
                <p>{{name}}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'chatList',
    props: {
        name: {
            type: String,
            default: ''
        },
        acatarUrl: {
            type: String,
            default: ''
        }
    }
}
</script>

<style scoped>
.chatList {

}
.chatList .list-item {
    box-sizing: border-box;
    padding: 20rpx;
    background: #fff;
    border: 1px solid #ddd;
    display: flex;
    align-items: center;
}
.chatList .list-item .user-name {
    margin-left: 15px;
}
</style>
