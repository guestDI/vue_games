<template>
    <div class="board" >
        <BoardCard @flip-card="flipCard" v-for="(card, index) in cards" :key="index" :card="card" />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BoardCard from './BoardCard.vue'
import { cards } from '../../assets/mocked'

export default defineComponent({
  name: 'MainBoard',
  components: {
    BoardCard
  },
  data () {
    return {
      cards: cards
    }
  },
  methods: {
    flipCard (cardId: string) {
      const card = this.cards.find(card => card.id === cardId)
      if (card) {
        card.flipped = !card.flipped
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
