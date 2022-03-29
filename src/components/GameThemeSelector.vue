<template>
    <h3 >Game</h3>
    <div class="cards-container">
      <div @click="selectGame" class="card" id="frozen">
          <img src="../assets/frozen/frozen1.png" alt="Frozen">
      </div>
      <div @click="selectGame" class="card" id="aladdin">
          <img src="../assets/aladdin/aladdin1.png" alt="Aladdin">
      </div>
      <div @click="selectGame" class="card" id="tangled">
          <img src="../assets/tangled/tangled1.png" alt="Tangled">
      </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GameThemeSelector',
  props: {
    card: Object
  },
  emits: ['select-game'],
  methods: {
    selectGame (e) {
      this.$emit('select-game', e)
    }
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
      border: 0.5px solid var(--light-border-color);
      border-radius: 0.5rem;
      width: 90px;
      height: 90px;
      box-shadow: 0 0px 2px rgb(0 0 0 / 7%), 0 5px 6px rgb(0 0 0 / 16%);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;

      &:first-of-type {
        background: var(--background-card-color);
      }
      &:nth-of-type(2) {
        background: var(--background-card-color2);;
      }
      &:last-of-type {
        background: var(--background-card-color3);
      }

      img {
        width: 65px;
        height: 65px;
        object-fit: cover;
      }
    }
  }
</style>
