<template>
  <div class="scene" >
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
      } else if (this.gameTheme === 'brave') {
        return {
          '--button-bg-color': '#6c927a'
        }
      } else if (this.gameTheme === 'mermaid') {
        return {
          '--button-bg-color': '#4fa9dd'
        }
      } else if (this.gameTheme === 'fruits') {
        return {
          '--button-bg-color': '#91679b'
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
    width: 170px;
    height: 170px;
  }

  .card {
      border: 0.5px solid var(--light-border-color);
      border-radius: 0.5rem;
      width: 100%;
      height: 100%;
      box-shadow: var(--default-box-shadow);
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
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--button-bg-color);
    border-radius: 0.5rem;
  }

  .card__face--front {
    transform: rotateY(0deg);
  }

  .card__face--back {
    transform: rotateY(180deg);
    background: rgba(143, 56, 56, 0.575);
  }

  .flip {
    transform: rotateY(180deg);
  }
</style>
