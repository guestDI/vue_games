<template>
    <div class="board" >
        <BoardCard @flip-card="flipCard" v-for="(card, index) in cards" :key="index" :card="card" />
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
  props: ['initialCards'],
  emits: ['count-step'],
  data () {
    return {
      cards: new Array<Card>(),
      flippedCards: new Array<Card>()
    }
  },
  watch: {
    initialCards: function () {
      this.cards = [...this.initialCards]
    }
  },
  methods: {
    flipCard (cardId: number) {
      const card = this.cards.find(card => card.id === cardId)
      if (card && !card.flipped && this.flippedCards.length < 2) {
        card.flipped = true
        this.flippedCards.push(card)
      }

      if (this.flippedCards.length === 2) {
        setTimeout(() => {
          if (this.flippedCards.length && !isMatch(this.flippedCards)) {
            this.flippedCards[0].flipped = false
            this.flippedCards[1].flipped = false
          }

          this.flippedCards = []
        }, 1000)

        this.$emit('count-step')
      }
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
    }
</style>
