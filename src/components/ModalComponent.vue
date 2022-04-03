<template>
    <div class="modal" v-if="open" @click="close"/>
    <transition name="modal">
            <dialog open v-if="open" class="modal__content">
                <slot></slot>
            </dialog>
        </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'ModalComponent',
  props: {
    close: Function,
    open: Boolean,
    show: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeModal () {
      this.$emit('closeModal')
    }
  }
})
</script>

<style scoped lang="scss">
  .modal {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    background: rgba(0, 0, 0, 0.1);
  }

  .modal__content {
    margin: auto;
    padding: 16px;
    background: var(--secondary-font-color);
    border-radius: 10px;
    min-width: 400px;
    height: 350px;
    border: 1px solid var(--primary-border-color);
    box-shadow: var(--default-box-shadow);
    position: absolute;
    top: 50%;
    left: 50%;
    margin: -250px -200px;
  }

  .modal-enter-active {
    animation: modal 0.2s ease-out;
  }

  .modal-leave-active {
    animation: modal 0.2s ease-out reverse;
  }

  @keyframes modal {
    from {
      opacity: 0;
      transform: translateY(-50px) scale(0.9);
    }

    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }

</style>
