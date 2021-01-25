<template>
  <nav class="c-nav container">
    <logo />
    <div class="c-nav__links">
      <nuxt-link to="/retrieve">I didn't get my tickets</nuxt-link>
      <button class="c-button c-button--yellow">Create your own event</button>
    </div>
  </nav>
</template>

<script>
import Logo from "./Logo.vue";
export default {
  components: { Logo }
};
</script>

<style lang="scss" scoped></style>
