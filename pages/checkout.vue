<template>
  <main class="c-checkout">
    <section class="c-checkout__cart">
      <button type="button" class="c-close">
        <span>
          Close
        </span>
      </button>

      <div class="c-cart">
        <h1 class="c-cart__event">
          The Nathan Cole Experience
        </h1>
        <div class="c-cart__date">
          8th February 2019
        </div>

        <div class="c-cart__options">
          <div>
            <div class="c-option">
              <div class="c-option__name">Regular</div>
              <div class="c-option__cost">N5000</div>
              <div class="c-option__quantity c-picker">
                <button class="c-picker__button">
                  <svg
                    width="10"
                    height="4"
                    viewBox="0 0 10 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0a2 2 0 110 4H2a2 2 0 110-4h6z"
                      fill="#828282"
                    />
                  </svg>
                </button>
                <p class="c-picker__number">0</p>
                <button class="c-picker__button">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 4.99a.91.91 0 01-.91.91H8.007c-1.1 0-1.993.893-1.993 1.993v1.082a1.025 1.025 0 11-2.049 0V7.883a1.983 1.983 0 00-1.982-1.982H.91a.91.91 0 110-1.821h1.073a1.983 1.983 0 001.982-1.983V1.025a1.025 1.025 0 012.05 0v1.062c0 1.1.892 1.993 1.992 1.993H9.09a.91.91 0 01.91.91z"
                      fill="#828282"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <hr />
          </div>

          <div>
            <div class="c-option">
              <div class="c-option__name">VIP</div>
              <div class="c-option__cost">N5000</div>
              <div class="c-option__quantity c-picker">
                <button class="c-picker__button">
                  <svg
                    width="10"
                    height="4"
                    viewBox="0 0 10 4"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 0a2 2 0 110 4H2a2 2 0 110-4h6z"
                      fill="#828282"
                    />
                  </svg>
                </button>
                <p class="c-picker__number">0</p>
                <button class="c-picker__button">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 4.99a.91.91 0 01-.91.91H8.007c-1.1 0-1.993.893-1.993 1.993v1.082a1.025 1.025 0 11-2.049 0V7.883a1.983 1.983 0 00-1.982-1.982H.91a.91.91 0 110-1.821h1.073a1.983 1.983 0 001.982-1.983V1.025a1.025 1.025 0 012.05 0v1.062c0 1.1.892 1.993 1.992 1.993H9.09a.91.91 0 01.91.91z"
                      fill="#828282"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <hr />
          </div>
        </div>

        <p class="c-ticketinfo">
          Ticket sales ends on 22nd November 2019
        </p>
      </div>
    </section>
    <section class="c-checkout__sidebar">
      <component :is="`checkout-${sidebarComponent}`"></component>
    </section>
  </main>
</template>

<script>
import CheckoutPayment from "~/components/CheckoutPayment.vue";
import CheckoutSummary from "~/components/CheckoutSummary.vue";
export default {
  components: { CheckoutSummary, CheckoutPayment },
  layout: "none",
  data() {
    return {
      sidebarComponent: "payment"
    };
  }
};
</script>

<style lang="scss" scoped></style>
