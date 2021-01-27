<template>
  <div class="container c-eventinfo">
    <div class="c-eventinfo__details">
      <div class="c-summary">
        <h5 class="c-summary__date">
          {{ formatDate(event.start_time) }}
        </h5>
        <h1 class="c-summary__title">
          {{ event.name }}
        </h1>
        <p class="c-summary__desc">
          {{ event.description }}
        </p>
        <h3 class="c-summary__cost">
          N5000 – N2,000,000
        </h3>
        <button
          v-if="event.is_free"
          @click="isModal = !isModal"
          type="button"
          class="c-button c-button--yellow"
        >
          REGISTER FOR FREE
        </button>

        <button
          type="button"
          @click="toCheckout"
          class="c-button c-button--yellow"
        >
          Buy Tickets
        </button>
      </div>
      <div class="c-image">
        <img v-if="event.image" :src="event.image" :alt="event.name" />
      </div>
    </div>
    <hr />
    <div class="c-eventinfo__footer">
      <div class="c-venue">
        <h3 class="c-venue__title">Venue</h3>
        <h2 class="c-venue__address">
          Eko Atlantic Beach, Off Ahmadu Bello way, Victoria Island, Lagos.
        </h2>
        <a href="!#" class="c-venue__maplink">
          View map for directions
        </a>
      </div>

      <div class="c-eventdate">
        <h3 class="c-eventdate__title">DATE AND TIME</h3>
        <h2 class="c-eventdate__time">{{ formatWithDay(event.start_time) }}</h2>
        <div class="c-social">
          <h5 class="c-social__links">social link</h5>
          <p class="social-link">http://www.nathanielcole.com</p>
          <p class="social-link">https://twitter.com/nathanielcole</p>
          <p class="social-link">https://instagram.com/nathanielcole/</p>
        </div>
      </div>
    </div>

    <div class="c-lines"></div>

    <transition name="fade">
      <modal v-if="isModal" @clicked="closeModal">
        <div v-if="!isSuccess" class="c-modal__register">
          <h3>Register for free</h3>
          <hr />
          <form @submit.prevent="isSuccess = true" class="c-modal__form">
            <label class="c-form__label" for="name">Full name</label>
            <input
              type="text"
              name="name"
              id="name"
              class="c-form__input"
              required
            />

            <label class="c-form__label" for="email">Email address</label>
            <input
              type="text"
              name="email"
              id="email"
              class="c-form__input"
              required
            />

            <label class="c-form__label" for="phone">Phone number</label>
            <input
              type="text"
              name="phone"
              id="phone"
              class="c-form__input"
              required
            />
            <button type="submit" class="c-button c-button--yellow">
              Register
            </button>
          </form>
        </div>
        <completed v-else />
      </modal>
    </transition>
  </div>
</template>

<script>
import CheckIcon from "~/components/CheckIcon.vue";
import Modal from "~/components/Modal.vue";
import { mapState } from "vuex";
import { formatWithDay, formatDate } from "~/utils";
import Completed from "~/components/completed.vue";

export default {
  components: { Modal, CheckIcon, Completed },
  data() {
    return {
      id: this.$route.params.id,
      isModal: false,
      isSuccess: false,
      cart: {}
    };
  },
  computed: {
    ...mapState(["events"]),
    event() {
      return this.events.find(event => event.id.toString() === this.id);
    }
  },
  mounted() {
    this.checked = JSON.parse(localStorage.getItem("cart")) || {};
  },
  methods: {
    formatDate,
    formatWithDay,
    closeModal() {
      this.isModal = false;
      this.isSuccess = false;
    },
    toCheckout() {
      localStorage.setItem("cart", JSON.stringify(this.event));
      this.$router.push("/checkout");
    }
  },

  watch: {
    isModal() {
      const body = document.querySelector("body");
      body.classList.toggle("no-scroll");
    }
  }
};
</script>

<style lang="scss" scoped>
.fade-enter-active {
  transition: opacity 0.25s ease-out;
}

.fade-leave-active {
  transition: opacity 0.2s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
