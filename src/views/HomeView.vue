<template>
<div class="layout">
  <div class="left-side">
    <div >
      <GameThemeSelector :games="games"/>
    </div>
    <div class="counter">
      <ScoreCounter :steps="steps"/>
    </div>
  </div>
  <div class="board">
      <MainBoard @count-step="countStep" :initialCards="initialCards" :gameTheme="gameTheme" @game-over="gameOver"/>
  </div>
    <Modal :open="showModal" :close="closeModal">
      <div class="content-wrapper">
        <img alt="Game image" :src="gameImage()">
        <div>Вы выиграли! Ваш результат </div>
        <span>{{ steps }}</span>
        <div>шагов </div>
        <button class="btn" @click="closeModal">
          Закрыть
        </button>
      </div>
    </Modal>
</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainBoard from '@/components/board/MainBoard.vue' // @ is an alias to /src
import { ScoreCounter, Modal, GameThemeSelector } from '@/components'
import { createBoard } from '@/helpers'
import { Card } from '@/types'

export default defineComponent({
  name: 'HomeView',
  data () {
    return {
      games: ['brave', 'frozen', 'aladdin', 'tangled', 'mermaid', 'fruits'],
      initialCards: new Array<Card>(),
      steps: 0,
      gameTheme: String,
      showModal: false
    }
  },
  components: {
    MainBoard,
    ScoreCounter,
    GameThemeSelector,
    Modal
  },
  provide () {
    return {
      startGame: this.selectGame
    }
  },
  methods: {
    selectGame (e) {
      this.initialCards = createBoard(16, e.currentTarget.id)
      this.steps = 0
      this.gameTheme = e.currentTarget.id
    },
    countStep () {
      this.steps++
    },
    closeModal () {
      this.showModal = false
    },
    openModal () {
      this.showModal = true
    },
    gameOver () {
      setTimeout(() => {
        this.showModal = true
      }, 300)
    },
    gameImage () {
      return require(`../assets/${this.gameTheme}/${this.gameTheme}1.png`)
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

      .counter {
        margin-top: 40px;
      }
    }

    .board {
        padding: 20px 10px 0;
        height: 80vh;
    }

    .content-wrapper {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 100%;

      img {
        width: 150px;
      }

      span {
        font-weight: 800;
        font-size: 3rem;
      }

      .btn {
        border: 1px solid var(--background-card-color4);
        border-radius: 5px;
        padding: 10px;
        max-width: 75px;
        box-shadow: var(--default-box-shadow);
        cursor: pointer;
      }
    }
  }

  @media screen and (min-width: 600px) and (max-width: 900px) {
    .layout {
      flex-direction: column;
      padding: 10px;

      .left-side {
        width: 100%;
        flex-direction: row;
        justify-content: space-around;
        margin-bottom: 10px;

        .counter {
          margin-top: 0;
        }
      }
    }
  }
</style>
