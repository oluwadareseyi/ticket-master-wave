<template>
  <div class="c-modal__success">
    <check-icon />
    <p class="c-success__message">
      You have successfully registered for {{ name }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["name"]
};
</script>

<style lang="scss" scoped></style>
