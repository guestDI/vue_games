<template>
    <div class="card" @click="flipCard" :class="{ flip: card.flipped }">
      <div class="card__face">
        <p>{{ card.back }}</p>
      </div>
      <div class="card__face card__face--back">
        <img alt="Vue logo" src="../../assets/logo.png">
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
  .card {
      border: 0.5px solid var(--light-border-color);
      border-radius: 0.5rem;
      width: 240px;
      height: 240px;
      box-shadow: 0 0px 2px rgb(0 0 0 / 7%), 0 5px 6px rgb(0 0 0 / 16%);

      display: flex;
      align-items: center;
      justify-content: center;

      transition: transform 0.5s;
      transform-style: preserve-3d;
  }

  .card__face {
    backface-visibility: hidden;
  }

  .card__face--back {
    transform: rotateY(180deg);
  }

  .flip {
    transform: rotateY(180deg);
  }
</style>
