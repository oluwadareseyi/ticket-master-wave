<template>
  <div class="c-payment">
    <button
      @click="$emit('summary')"
      type="button"
      class="c-payment__breadcrumb"
    >
      <span>
        Go Back
      </span>
    </button>
    <hr />
    <form
      @submit.prevent="$emit('makePayment', customerInfo)"
      class="c-payment__form"
    >
      <label class="c-form__label" for="name">Full name</label>
      <input
        type="text"
        name="name"
        id="name"
        class="c-form__input"
        v-model="name"
        required
      />

      <label class="c-form__label" for="email">Email address</label>
      <input
        type="text"
        name="email"
        id="email"
        class="c-form__input"
        required
        v-model="email"
      />

      <label class="c-form__label" for="phone">Phone number</label>
      <input
        type="text"
        name="phone"
        id="phone"
        class="c-form__input"
        required
        v-model="phone"
      />
      <div class="c-total">
        <div class="c-total__type">
          total payment
        </div>

        <div class="c-total__cost">N{{ total.toLocaleString() }}</div>
      </div>
      <button type="submit" class="c-button c-button--yellow">
        pay N{{ total.toLocaleString() }}
      </button>
    </form>

    <div class="c-seal">
      <span
        ><svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.62 25.01l-1.846.828a1.857 1.857 0 01-2.265-.607l-1.185-1.64a.929.929 0 00-.658-.38l-2.013-.206a1.857 1.857 0 01-1.657-1.658l-.208-2.013a.929.929 0 00-.38-.658L.77 17.491a1.857 1.857 0 01-.607-2.265L.99 13.38a.929.929 0 000-.76l-.828-1.846A1.857 1.857 0 01.77 8.509l1.64-1.185a.929.929 0 00.38-.658l.207-2.013a1.857 1.857 0 011.657-1.657l2.013-.208a.929.929 0 00.658-.38L8.509.77a1.857 1.857 0 012.265-.607L12.62.99a.929.929 0 00.76 0l1.846-.828a1.857 1.857 0 012.265.607l1.185 1.64a.929.929 0 00.658.38l2.013.207c.875.09 1.567.782 1.657 1.657l.207 2.013a.929.929 0 00.38.658l1.64 1.185c.713.516.966 1.461.607 2.265l-.828 1.846a.928.928 0 000 .76l.828 1.846c.36.804.106 1.749-.607 2.265l-1.64 1.185a.929.929 0 00-.38.658l-.206 2.013a1.857 1.857 0 01-1.658 1.657l-2.013.207a.929.929 0 00-.658.38l-1.185 1.64a1.857 1.857 0 01-2.265.607l-1.846-.828a.928.928 0 00-.76 0zM7.983 11.243L6.407 12.82l5.29 5.29 8.122-8.12-1.576-1.577-6.546 6.546-3.714-3.715z"
            fill="#2D9CDB"
          /></svg
      ></span>
      <div>
        <p>100% customer protection</p>
        <p>Money back guarantee</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["total"],
  data() {
    return {
      name: "",
      email: "",
      phone: ""
    };
  },
  computed: {
    customerInfo() {
      return {
        name: this.name,
        email: this.email,
        phone: this.phone
      };
    }
  }
};
</script>

<style lang="scss" scoped></style>
