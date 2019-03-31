<template>
    <div class="home">
        home
        <p @click="handleClick">click</p>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import { TEST } from 'store/mutation-types'
export default {
    name: 'home',
    computed: {
        ...mapState([
            'test',
        ])
    },
    methods: {
        ...mapMutations([
            TEST
        ]),
        handleClick () {
            this[TEST](Math.random())
            console.log(this.test)
        }
    },
}
</script>

<style scoped>

</style>
