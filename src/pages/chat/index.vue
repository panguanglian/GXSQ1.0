<template>
    <div class="chat" >
        <div class="chat-list" @click="toChatDetail(item)" v-for="(item, index) in 10" :key="index">
            <chat-list  :name="'管理员'+item"></chat-list>
        </div>
    </div>
</template>

<script>
import chatList from 'components/chatList/chatList'
export default {
    name: 'chat',
    components: {
        chatList
    },
    methods: {
        toChatDetail (item) {
            console.log('-------- router-params ---------')
            console.log(item)
            wx.navigateTo({
                url: '/pages/chatDetail/main?params=管理员' + item
            })
        }
    },
}
</script>

<style scoped>

</style>
