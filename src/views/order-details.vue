<template>
  <app-header :stay="stay" />
  <section v-if="stay" class="order-details details-layout">
    <section class="order-details-container flex space-between">
      <div class="order-date-guest">
        <div class="order-title flex">
          <button @click="$router.back()">{{ "◀" }}</button>
          <h1>Your trip</h1>
        </div>
        <div class="dates-order">
          <div class="rare-stay">
            This is a rare find.
            <p>{{stay.host.fullname}}'s </p>
          </div>
          <div>
            <h3>Dates:</h3>
            <span>May 1 – 4</span>
          </div>
          <router-link class="btn-edit" to="/">Edit</router-link>
        </div>
        <div class="guests-order">
          <div>
            <h3>Guests:</h3>
            <span>2 guest</span>
          </div>
          <router-link class="btn-edit" to="/">Edit</router-link>
        </div>
        <hr />
      </div>

      <div class="total-price-order">
        <div class="order-img-rate flex">
          <img :src="'src/assets/Images/' + stay.imgUrls[0]" />
          <div class="order-rate-container flex flex-column space-between">
            <div class="order-rate">
              <small>{{ stay.roomType }}</small>
              <p class="stay-name">{{ stay.name }}</p>
            </div>
          </div>
        </div>
        <div class="type-price">
          <div class="type-pay">
            {{ $filters.currencyUSD(this.stay.price) }} x 3 nights
          </div>
          <span class="price">${{ totalPrice }}</span>
        </div>
        <div class="type-price">
          <div class="type-pay">Cleaning fee</div>
          <span class="price">$150</span>
        </div>
        <div class="type-price">
          <div class="type-pay">Service fee</div>
          <span class="price">$200</span>
        </div>
        <hr />
        <div class="type-price">
          <div class="pay-total">Total</div>
          <span class="price-total">${{ totalPay }}</span>
        </div>
      </div>
    </section>
  </section>
  <hr />
</template>

<script>
import { stayService } from "../services/stay-service";
import appHeader from "../components/app-header.vue";

export default {
  data() {
    return {
      stay: null,
    };
  },
  async created() {
    const { id } = this.$route.params;
    this.stay = await stayService.getById(id);
  },
  computed: {
    totalPrice() {
      return this.stay.price * 3;
    },
    totalPay() {
      return this.stay.price * 3 + 150 + 200;
    },
  },
  components: {
    appHeader,
  },
};
</script>