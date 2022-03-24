<template>
<div class="layout">
  <div class="counter">
    Counter
  </div>
  <div class="board">
    <MainBoard/>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainBoard from '@/components/board/MainBoard.vue' // @ is an alias to /src

export default defineComponent({
  name: 'HomeView',
  components: {
    MainBoard
  }
})
</script>

<style scoped lang="scss">
  .layout {
    display: flex;

    .counter {
      width: 20%;
    }

    .board {
        padding: 0 10px;
        height: 80vh;
    }
  }
</style>
