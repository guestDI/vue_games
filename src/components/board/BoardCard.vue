<template>
    <div @click="flipCard" class="card">
        <p v-if="card.flipped">{{ card.back }}</p>
        <img v-else alt="Vue logo" src="../../assets/logo.png">
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
  data () {
    return {
      name: 'Name'
    }
  },
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
  }
</style>
