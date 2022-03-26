<template>
  <div class="scene">
    <div class="card" @click="flipCard" :class="{ flip: card.flipped }">
      <div class="card__face">
        <img alt="Vue logo" src="../../assets/frozen/frozen1.png">
      </div>
      <div class="card__face card__face--back">
        <img alt="Vue logo" src="../../assets/logo.png">
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BoardCard',
  props: {
    card: Object
  },
  emits: ['flip-card'],
  methods: {
    flipCard () {
      this.$emit('flip-card', this.card.id)
    }
  }
})
</script>

<style scoped lang="scss">
  .scene {
    width: 210px;
  height: 210px;
  }

  .card {
      border: 0.5px solid var(--light-border-color);
      border-radius: 0.5rem;
      width: 100%;
      height: 100%;
      box-shadow: 0 0px 2px rgb(0 0 0 / 7%), 0 5px 6px rgb(0 0 0 / 16%);
      cursor: pointer;
      position: relative;
      transition: transform 0.5s;
      transform-style: preserve-3d;

      img {
        width: 170px;
      height: 170px;
      object-fit: cover;
      }
  }

  .card__face {
    position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  }

  .card__face--back {
    transform: rotateY(180deg);
  }

  .flip {
    transform: rotateY(180deg);
  }
</style>
