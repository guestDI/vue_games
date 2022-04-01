<template>
  <div class="scene">
    <div class="card" @click="flipCard" :class="{ flip: card.flipped }" :style="cssVars" >
      <div class="card__face">
        <img alt="Frozen front" :src="frontImage()">
      </div>
      <div class="card__face card__face--back">
        <img alt="Frozen logo" :src="backImage()">
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BoardCard',
  props: {
    card: Object,
    gameTheme: String
  },
  emits: ['flip-card'],
  methods: {
    flipCard () {
      this.$emit('flip-card', this.card.id)
    },
    frontImage () {
      return require(`../../assets/${this.card.front}.png`)
    },

    backImage () {
      return require(`../../assets/${this.card.back}.png`)
    }
  },
  computed: {
    cssVars () {
      if (this.gameTheme === 'frozen') {
        return {
          '--button-bg-color': '#8894b3'
        }
      } else if (this.gameTheme === 'aladdin') {
        return {
          '--button-bg-color': '#3144af'
        }
      } else if (this.gameTheme === 'tangled') {
        return {
          '--button-bg-color': 'rgb(255, 149, 167)'
        }
      } else {
        return {
          '--button-bg-color': '#8894b3'
        }
      }
    }
  }
})
</script>

<style scoped lang="scss">
  .scene {
    width: 180px;
    height: 180px;
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
        width: 150px;
      height: 150px;
      object-fit: contain;
      }
  }

  .card__face {
    position: absolute;
    background-color: var(--button-bg-color);
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
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
        // background: transparent;
  }
</style>
