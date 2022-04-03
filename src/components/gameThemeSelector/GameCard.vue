<template>
    <div @click="startGame" :id="gameTheme" class="card">
        <img :src="image()" :alt="gameTheme">
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GameCard',
  props: {
    gameTheme: String
  },
  inject: ['startGame'],
  methods: {
    image () {
      return require(`../../assets/${this.gameTheme}/${this.gameTheme}1.png`)
    }
  }
})
</script>

<style lang="scss" scoped>
  .card {
      margin: 0 3px;
      border: 0.5px solid var(--light-border-color);
      border-radius: 0.5rem;
      width: 90px;
      height: 90px;
      box-shadow: 0 0px 2px rgb(0 0 0 / 7%), 0 5px 6px rgb(0 0 0 / 16%);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      img {
        width: 65px;
        height: 65px;
        object-fit: cover;
      }
  }
</style>
