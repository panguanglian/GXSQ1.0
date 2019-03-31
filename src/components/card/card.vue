<template>
  <div class="cu-card article">
    <div v-for="item in forum" :key="item.id" class="cu-item shadow">
      <div class="title">{{item.title}}</div>
      <div class="content">
        <img :src="item.img">
          <div class="desc">
            <div class='text-content'>{{item.text}}</div>
            <div>
              <div class='cu-tag bg-red light sm round'>{{item.series}}</div>
              <div class='cu-tag bg-green light sm round'>{{item.set}}</div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'forum',
    data() {
      return {
        forum: [{
            id: 1,
            title: "1这里有个戏精铲屎官，主子了解一下？",
            img: "https://image.weilanwl.com/img/4x3-3.jpg",
            text: "这是一个伪铲屎官为了给自己的程序凑字数瞎几把乱写的一堆文字，了解一下就OK！ヾ(=･ω･=)o",
            series: "假装有猫系列",
            set: "戏精系列"
          },
          // {
          //   id: 2,
          //   title: "这里有个戏精铲屎官，主子了解一下？",
          //   img: "https://image.weilanwl.com/img/4x3-3.jpg",
          //   text: "这是一个伪铲屎官为了给自己的程序凑字数瞎几把乱写的一堆文字，了解一下就OK！ヾ(=･ω･=)o",
          //   series: "假装有猫系列",
          //   set: "戏精系列"
          // }
        ],
      };
    },
  }

</script>

<style>

</style>
