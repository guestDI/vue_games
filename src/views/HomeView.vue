<template>
<div class="layout">
  <div class="left-side">
    <div >
      <GameThemeSelector @select-game="selectGame"/>
    </div>
    <div class="counter">
      <ScoreCounter :steps="steps"/>
    </div>
  </div>
  <div class="board">
      <MainBoard @count-step="countStep" :initialCards="initialCards"/>
  </div>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainBoard from '@/components/board/MainBoard.vue' // @ is an alias to /src
import ScoreCounter from '@/components/ScoreCounter.vue'
import GameThemeSelector from '@/components/GameThemeSelector.vue'
import { createBoard } from '@/helpers'
import { Card } from '@/types'

export default defineComponent({
  name: 'HomeView',
  data () {
    return {
      initialCards: new Array<Card>(),
      steps: 0
    }
  },
  components: {
    MainBoard,
    ScoreCounter,
    GameThemeSelector
  },
  methods: {
    selectGame (e) {
      this.initialCards = createBoard(16, e.currentTarget.id)
    },
    countStep () {
      this.steps++
    }
  }
})
</script>

<style scoped lang="scss">
  .layout {
    display: flex;

    .left-side {
      display: flex;
      flex-direction: column;
      width: 30%;
      // text-align: left;

      .counter {
        margin-top: 40px;
      }
    }

    .board {
        padding: 0 10px;
        height: 80vh;
    }
  }
</style>
