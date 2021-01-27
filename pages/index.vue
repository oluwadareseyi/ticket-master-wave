<template>
  <main class="c-landing container">
    <div></div>
    <h1 class="c-landing__title">The best events happening now.</h1>

    <section class="c-landing__events">
      <nuxt-link
        v-for="event in events"
        :to="`/event/${event.id}`"
        class="c-event"
        :key="event.id"
      >
        <div class="c-event__image">
          <img v-if="event.image" :src="event.image" :alt="event.name" />
        </div>
        <div class="c-event__details">
          <p class="c-event__date">
            {{ formatDate(event.start_time) }}
          </p>
          <h3 class="c-event__title">{{ event.name }}</h3>
          <p v-if="!event.is_free && !event.is_sold_out" class="c-event__cost">
            N5000 – N2,000,000
          </p>
          <p
            v-else-if="event.is_free && !event.is_sold_out"
            class="c-event__free"
          >
            Free
          </p>
          <p v-else class="c-event__sold-out">
            Sold out
          </p>
        </div>
      </nuxt-link>
    </section>
    <div class="c-landing__pagination">
      <h4 class="c-error__text" v-if="error">
        An error occured, try clicking the button again.
      </h4>
      <div v-if="loading" class="c-spinner">
        <spinner />
      </div>
      <button
        v-if="currentPage !== totalPages && loading === false"
        class="c-button c-button--yellow"
        @click="loadMore"
      >
        Load More
      </button>
    </div>
  </main>
</template>

<script>
import { mapState } from "vuex";
import spinner from "~/components/spinner.vue";
import { formatDate } from "../utils";
export default {
  components: { spinner },
  data() {
    return {
      loading: false,
      error: false
    };
  },
  computed: {
    ...mapState(["events", "currentPage", "totalPages"])
  },
  methods: {
    async loadMore() {
      console.log("clicked");
      const isLastPage = this.currentPage === this.totalPages;
      if (!isLastPage) {
        this.loading = true;
        const nextPage = this.currentPage + 1;
        try {
          const res = await this.$axios.$get(
            `/events?limit=10&page=${nextPage}`
          );
          const data = res.data;
          const { events, pageInfo } = data;
          const updatedEvents = [...this.events, ...events];
          this.$store.commit("updateEvents", updatedEvents);
          this.$store.commit("updateCurrentPage", pageInfo.currentPage);
          this.error = false;
        } catch (error) {
          this.error = true;
          console.log(error);
        } finally {
          this.loading = false;
        }
      }
    },
    formatDate
  }
};
</script>

<style lang="scss" scoped></style>
