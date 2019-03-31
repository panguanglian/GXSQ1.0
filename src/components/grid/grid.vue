<template>
  <div class="cu-list grid col-3">
    <div class="cu-item" v-for="item in items" :key="item.id">
      <div :class='item.icon'>
      </div>
      <text>{{item.name}}</text>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Sudoku',
    data() {
      return {
        items: [{
            id: 1,
            name: "222",
            icon: "icon-recordfill text-mauve"
          },
          {
            id: 2,
            name: "111",
            icon: "icon-noticefill text-purple"
          },
          {
            id: 3,
            name: "222",
            icon: "icon-upstagefill text-blue"
          },
          {
            id: 4,
            name: "222",
            icon: "icon-upstagefill text-cyan"
          },
          {
            id: 5,
            name: "222",
            icon: "icon-upstagefill text-purple"
          },
          {
            id: 6,
            name: "222",
            icon: "icon-clothesfill text-purple"
          }
        ],
      };
    },
  }

</script>

<style>
