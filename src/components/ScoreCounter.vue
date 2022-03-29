<template>
<div>
  <h3>
    Score
  </h3>
  <div class="counter">
    <div class="counter-card">{{this.steps}}</div>
    <div class="counter-card">Card</div>
  </div>
</div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ScoreCounter',
  props: ['steps']
})
</script>

<style lang="scss" scoped>
  h3 {
    margin-bottom: 10px;
  }

  .counter {
    width: 100%;
    display: flex;
    justify-content: center;
    color: var(--primary-border-color);
    font-weight: 700;
    font-size: 30px;

    .counter-card {
      border: 0.5px solid var(--light-border-color);
      border-radius: 0.5rem;
      width: 100px;
      height: 100px;
      box-shadow: 0 0px 2px rgb(0 0 0 / 7%), 0 5px 6px rgb(0 0 0 / 16%);
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      background: var(--background-color-counter);

      &:first-of-type {
        margin-right: 5px;
      }
    }
  }
</style>
