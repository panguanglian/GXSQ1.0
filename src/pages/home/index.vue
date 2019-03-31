<template>
    <div class="home">
        <i-tabs :current="current" @change="handleChange" fixed="true" color="#2b99ff">
            <i-tab key="tab1" title="广场"></i-tab>
            <i-tab key="tab2" title="校友圈"></i-tab>
            <i-tab key="tab3" title="生活"></i-tab>
        </i-tabs>
        <div class="content">
            <div class="tab1 animation-fade" v-if="current == 'tab1'">
                <my-tab1></my-tab1>
            </div>
            <div class="tab2 animation-fade" v-if="current == 'tab2'">
                <my-tab2></my-tab2>
            </div>
            <div class="tab3 animation-fade" v-if="current == 'tab3'">
                <my-tab3></my-tab3>
            </div>
        </div>
    </div>
</template>

<script>
import myTab1 from './pages/myTab1/myTab1'
import myTab2 from './pages/myTab2/myTab2'
import myTab3 from './pages/myTab3/myTab3'
export default {
    name: 'home',
    components: {
        myTab1,
        myTab2,
        myTab3
    },
    data () {
        return {
            current: 'tab1',
            indicatorDots: false,
            
        }
    },
    methods: {
        handleChange (detail) {
            this.current = detail.mp.detail.key
        }
    },
}
</script>

<style scoped>
.home .content {
    padding-top: 42px;
}
</style>
