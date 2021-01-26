<template>
  <main class="c-retrieve container">
    <h2>
      Enter your email and we’ll send your tickets right away!
    </h2>
    <div>
      <form v-if="!success" class="c-retrieve__request" @submit.prevent>
        <label for="email" class="c-form__label">Email address</label>
        <input
          type="email"
          name="email"
          id="email"
          class="c-form__input"
          required
        />
        <button type="submit" class="c-button c-button--yellow">
          CONFIRM AND SEND TICKET
        </button>
      </form>
      <div v-else class="c-retrieve__success">
        <check-icon />
        <div class="c-success__message">
          Your tickets have been confirmed and sent to your email address at
          <span>ted@flutterwave.com</span>
        </div>
        <nuxt-link to="/">
          <button type="button" class="c-button c-button--yellow">
            Buy more tickets
          </button>
        </nuxt-link>
      </div>
    </div>
    <div class="c-lines"></div>
  </main>
</template>

<script>
import CheckIcon from "~/components/CheckIcon.vue";
export default {
  components: { CheckIcon },
  data() {
    return {
      success: false
    };
  }
};
</script>

<style lang="scss" scoped></style>
