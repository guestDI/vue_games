<template>
    <div class="board" >
        <BoardCard
          @flip-card="flipCard"
          v-for="(card, index) in cards"
          :key="index" :card="card"
          :gameTheme="gameTheme"
          :finallyMatched="checkIfCardMatched(card.id)"
        />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BoardCard from './BoardCard.vue'
import { isMatch } from '@/helpers'
import { Card } from '@/types'

export default defineComponent({
  name: 'MainBoard',
  components: {
    BoardCard
  },
  props: ['initialCards', 'gameTheme'],
  emits: ['count-step', 'game-over'],
  data () {
    return {
      cards: new Array<Card>(),
      flippedCards: new Array<Card>(),
      matchedCards: new Array<Card>(),
      isCardMatched: false
    }
  },
  watch: {
    initialCards: function () {
      this.cards = [...this.initialCards]
      this.flippedCards = []
      this.matchedCards = []
    },
    matchedCards: {
      deep: true,

      handler () {
        if (this.matchedCards.length === this.cards.length) {
          this.$emit('game-over')
        }
      }
    }
  },
  methods: {
    flipCard (cardId: number) {
      if (this.flippedCards.length < 2) {
        const card = this.cards.find(card => card.id === cardId)
        if (card && !card.flipped && this.flippedCards.length < 2) {
          card.flipped = true
          this.flippedCards.push(card)
        }

        if (this.flippedCards.length === 2) {
          if (isMatch(this.flippedCards)) {
            this.matchedCards.push(...this.flippedCards)
            this.flippedCards = []
          } else {
            setTimeout(() => {
              this.flippedCards[0].flipped = false
              this.flippedCards[1].flipped = false

              this.flippedCards = []
            }, 900)
          }

          this.$emit('count-step')
        }
      }
    },
    checkIfCardMatched (id) {
      // setTimeout(() => {
      //   this.isCardMatched = !!this.matchedCards.find((card) => card.id === id)
      // }, 300)

      return !!this.matchedCards.find((card) => card.id === id)
    }
  }
})
</script>

<style scoped lang="scss">
    .board {
        width: 100%;
        display: grid;
        grid-gap: 15px;
        grid-template-columns: repeat(4, 1fr);
        height: max-content;
        align-content: baseline;
    }
</style>
