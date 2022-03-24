<template>
    <div class="board" >
        <BoardCard v-for="card in cards" :key="card"/>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import BoardCard from './BoardCard.vue'

export default defineComponent({
  name: 'MainBoard',
  components: {
    BoardCard
  },
  data () {
    return {
      cards: [1, 2, 3, 4, 5, 6, 7, 8, 9]
    }
  }
})
</script>

<style scoped lang="scss">
    .board {
        border: 1px solid var(--primary-border-color);
        border-radius: 0.5rem;
        width: 100%;

       display: grid;
        grid-gap: 15px;
        grid-template-columns: repeat(3, 1fr);
        align-items: center;
        justify-items: center;
    }
</style>
