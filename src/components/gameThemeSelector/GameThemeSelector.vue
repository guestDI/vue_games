<template>
    <h3 >Game</h3>
    <div class="cards-container">
      <GameCard v-for="game in games" :key="game" :gameTheme="game"/>
    </div>
</template>

<script>
import { defineComponent } from 'vue'
import GameCard from './GameCard.vue'

export default defineComponent({
  name: 'GameThemeSelector',
  props: {
    games: Array
  },
  components: {
    GameCard
  }
})
</script>

<style lang="scss" scoped>
  h3 {
    margin-bottom: 10px;
  }

  .cards-container {
    width: 100%;
    display: flex;
    justify-content: space-around;

    .card {
      &:first-of-type {
        background: var(--background-card-color);
      }
      &:nth-of-type(2) {
        background: var(--background-card-color1);;
      }
      &:nth-of-type(3) {
        background: var(--background-card-color2);;
      }
      &:nth-of-type(4) {
        background: var(--background-card-color3);
      }
      &:nth-of-type(5) {
        background: var(--background-card-color4);
      }
      &:last-of-type {
        background: var(--background-card-color5);
      }
    }
  }
</style>
