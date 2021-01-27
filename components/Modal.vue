<template>
  <div>
    <div class="c-modal">
      <div class="inner-modal">
        <button class="c-close" @click="$emit('clicked')">
          <img
            src="data:image/svg+xml,%3Csvg width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.5 4.5L4.5 13.5' stroke='%23333333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M4.5 4.5L13.5 13.5' stroke='%23333333' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E%0A"
            alt="close modal"
          />
        </button>
        <slot></slot>
      </div>
    </div>
    <div class="c-backdrop" @click="$emit('clicked')"></div>
  </div>
</template>

<script>
export default {
  props: ["isModal"]
};
</script>

<style lang="scss" scoped></style>
