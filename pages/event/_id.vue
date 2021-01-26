<template>
  <div class="container c-eventinfo">
    <div class="c-eventinfo__details">
      <div class="c-summary">
        <h5 class="c-summary__date">
          8th February 2019
        </h5>
        <h1 class="c-summary__title">The Nathan Cole Experience</h1>
        <p class="c-summary__desc">
          Two-Time Grammy Award winner, Nathaniel Cole, who’s also just released
          an album, Into The Wild, will be having his first concert in Lagos,
          Nigeria!
        </p>
        <p class="c-summary__desc">
          Fans have waited so long for this announcement, and it promises to be
          everything anyone has imagined.
        </p>
        <h3 class="c-summary__cost">
          N5000 – N2,000,000
        </h3>
        <button type="button" class="c-button c-button--yellow">
          Buy Tickets
        </button>
      </div>
      <div class="c-image">
        <img
          src="https://res.cloudinary.com/dmwfd0zhh/image/upload/v1611616963/flutterwave/Event_image_1_vhzdaj.png"
          alt="The Nathan Cole Experience"
        />
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
        <h2 class="c-eventdate__time">Friday, February 8th 2019, 10:00pm</h2>
        <div class="c-social">
          <h5 class="c-social__links">social link</h5>
          <p class="social-link">http://www.nathanielcole.com</p>
          <p class="social-link">https://twitter.com/nathanielcole</p>
          <p class="social-link">https://instagram.com/nathanielcole/</p>
        </div>
      </div>
    </div>
    <div class="c-eventinfo__lines"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id
    };
  }
};
</script>

<style lang="scss" scoped></style>
