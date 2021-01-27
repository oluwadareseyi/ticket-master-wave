<template>
  <main class="c-checkout">
    <section class="c-checkout__cart">
      <button @click="goBack" type="button" class="c-close">
        <span>
          Close
        </span>
      </button>

      <div v-if="isEmpty" class="c-checkout__empty">
        <h1>No Items in cart</h1>
        <nuxt-link to="/">
          Back to Home
        </nuxt-link>
      </div>

      <div v-else class="c-cart">
        <h1 class="c-cart__event">
          {{ cart.name }}
        </h1>
        <div class="c-cart__date">
          {{ formatDate(cart.start_time) }}
        </div>

        <div class="c-cart__options">
          <div v-for="item in cartOrders" :key="item.name">
            <div class="c-option">
              <div class="c-option__name">{{ item.name }}</div>
              <div class="c-option__cost">
                N{{ item.amount.toLocaleString() }}
              </div>
              <div class="c-option__quantity c-picker">
                <button
                  class="c-picker__button"
                  @click="removeCart(item.type)"
                  :disabled="item.quantity < 1"
                >
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
                <p class="c-picker__number">{{ item.quantity }}</p>
                <button class="c-picker__button" @click="addToCart(item.type)">
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
          Ticket sales ends on {{ formatDate(cart.tickets_sale_end_date) }}
        </p>
      </div>
    </section>
    <section class="c-checkout__sidebar">
      <keep-alive>
        <component
          @summary="toSummary"
          @payment="toPayment"
          @makePayment="makePayment"
          :cartOrders="cartOrders"
          :subtotal="subTotal"
          :tax="getTax"
          :total="getTotal"
          :is="`checkout-${sidebarComponent}`"
        ></component>
      </keep-alive>
    </section>
  </main>
</template>

<script>
import CheckoutPayment from "~/components/CheckoutPayment.vue";
import CheckoutSummary from "~/components/CheckoutSummary.vue";
import { formatDate, defaultCart } from "~/utils";
export default {
  components: { CheckoutSummary, CheckoutPayment },
  layout: "none",
  data() {
    return {
      sidebarComponent: "summary",
      cartOrders: [],
      cart: {}
    };
  },
  computed: {
    subTotal() {
      let total = 0;
      this.cartOrders?.forEach(item => {
        const cost = item.quantity * item.amount;
        total += cost;
      });
      return total;
    },
    getTax() {
      return this.subTotal * 0.1;
    },
    getTotal() {
      return this.subTotal + this.getTax;
    },
    isEmpty() {
      return Object.entries(this.cart).length === 0;
    }
  },
  mounted() {
    this.cart = JSON.parse(localStorage.getItem("cart")) || {};
    this.cartOrders =
      JSON.parse(localStorage.getItem("cartOrders")) || defaultCart();

    const isDevelopment = process.env.NODE_ENV === "development";
    const script = document.createElement("script");
    script.src = isDevelopment
      ? "https://ravemodal-dev.herokuapp.com/v3.js"
      : "https://checkout.flutterwave.com/v3.js";
    document.getElementsByTagName("head")[0].appendChild(script);
  },
  watch: {
    cartOrders(newValue, oldValue) {
      localStorage.setItem("cartOrders", JSON.stringify(newValue));
    }
  },
  methods: {
    formatDate,
    toSummary() {
      this.sidebarComponent = "summary";
    },
    toPayment() {
      this.sidebarComponent = "payment";
    },
    goBack() {
      this.$router.go(-1);
    },
    addToCart(type) {
      const updatedOrders = this.cartOrders.map(order => {
        if (order.type === type) {
          return {
            ...order,
            quantity: order.quantity + 1
          };
        }
        return order;
      });
      this.cartOrders = updatedOrders;
    },
    removeCart(type) {
      const updatedOrders = this.cartOrders.map(order => {
        if (order.type === type) {
          return {
            ...order,
            quantity: order.quantity - 1
          };
        }
        return order;
      });
      this.cartOrders = updatedOrders;
    },
    makePayment(info) {
      window.FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-a9e1991d923bb0564ee8b113176f32d1-X",
        tx_ref: new Date().getTime(),
        amount: this.getTotal,
        currency: "NGN",
        country: "NG",
        payment_options: "card",
        customer: {
          email: info.email,
          phone_number: info.phone,
          name: info.name
        },
        callback: () => {
          localStorage.setItem("cartOrders", JSON.stringify(defaultCart()));
          localStorage.setItem("cart", JSON.stringify({}));
        },
        customizations: {
          title: "My store",
          description: `Payment for ${this.cart.name}`
        }
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
