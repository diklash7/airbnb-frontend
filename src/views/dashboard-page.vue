<template>
  <app-header class="order-layout" :orders="orders"/>
  <section class="dashboard-page main-layout">
    <section class="dashboard-container">
      <div class="main-container flex flex-column">
        <section class="dash-header flex space-between">
          <div class="dash-nav flex flex-column space-evenly">
            <button @click="openStays">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-house-fill"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                />
                <path
                  fill-rule="evenodd"
                  d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                />
              </svg>
              My Stays
            </button>
            <button @click="openOrders">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                class="bi bi-list-ul"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                />
              </svg>
              My Orders
            </button>
          </div>
          <div class="stats-container flex space-between">
            <div class="dash-stat">
              <h3>Total Rate</h3>
              <div class="rates-data flex flex-column space-between">
                <div>
                  <span class="flex align-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="#E01661"
                      class="bi bi-star-fill"
                      viewBox="0 0 16 16"
                    >
                      <path
                        d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                      />
                    </svg>
                    4.65 <small class="avg">avg</small></span
                  >
                </div>
                <div class="flex space-between">
                  <span>112<small> reviews</small></span>
                </div>
              </div>
            </div>
            <div class="dash-stat">
              <h3>Total Revenues</h3>
              <span class="total-revenue">{{ revenueSum }}</span>
            </div>
            <div class="dash-stat">
              <h3>Orders</h3>
              <span>{{ orders.length }}<small> orders</small></span>
            </div>
            <div class="dash-stat">
              <h3>Guests</h3>
            <span>{{guestSum}}<small> guests</small></span>
            </div>
          </div>
        </section>
        <section class="info-container">
          <section v-if="!isOpen" class="order-list">
            <div class="order-table">
              <div class="thead">
                <div class="thead-container gray-box-shadow">
                  <span>Date</span>
                  <span>Booker</span>
                  <span>Place</span>
                  <span>Trip Dates</span>
                  <span>Nights</span>
                  <span>Guests</span>
                  <span>Amount</span>
                  <span>Status</span>
                </div>
              </div>
            </div>
            <div class="tbody">
              <order-list :orders="orders" />
            </div>
          </section>
          <section v-else class="host-stay-list">
            <div class="stay-table">
              <div class="thead">
                <div class="thead-container gray-box-shadow">
                  <span>Name</span><span>Price per night</span>
                  <span>Address</span>
                  <span class="stay-actions">Actions</span>
                </div>
              </div>
              <div class="tbody">
                <stay-list />
              </div>
            </div>
          </section>
        </section>
      </div>
    </section>
  </section>
</template>

<script>
import appHeader from "../components/app-header.vue";
import orderList from "../components/order-list.vue";
import stayList from "../components/stay-list.vue";

export default {
  data() {
    return {
      isOpen: false,
      orders: [
        {
          date: "03/13/22",
          booker: "Leo",
          stay: "Fresh and modern 1BR in Bed-Stuy",
          tripDates: "03/14/22-03/18/22",
          nights: 4,
          guests: 3,
          amount: 516,
          status: ["✔️", "❌"],
        },
        {
          date: "03/09/22",
          booker: "Leo",
          stay: "Fresh and modern 1BR in Bed-Stuy",
          tripDates: "03/10/22-03/12/22",
          nights: 2,
          guests: 3,
          amount: 313,
          status: ["✔️", "❌"],
        },
        {
          date: "02/11/22",
          booker: "Leo",
          stay: "Fresh and modern 1BR in Bed-Stuy",
          tripDates: "02/16/22-02/17/22",
          nights: 1,
          guests: 2,
          amount: 330,
          status: ["✔️", "❌"],
        },
        {
          date: "02/03/22",
          booker: "Leo",
          stay: "Fresh and modern 1BR in Bed-Stuy",
          tripDates: "02/11/22-02/15/22",
          nights: 4,
          guests: 3,
          amount: 889,
          status: ["✔️", "❌"],
        },
        {
          date: "01/13/22",
          booker: "Leo",
          stay: "Fresh and modern 1BR in Bed-Stuy",
          tripDates: "01/14/22-01/18/22",
          nights: 4,
          guests: 5,
          amount: 1200,
          status: ["✔️", "❌"],
        },
        {
          date: "01/08/22",
          booker: "Leo",
          stay: "Fresh and modern 1BR in Bed-Stuy",
          tripDates: "01/15/22-01/18/22",
          nights: 3,
          guests: 2,
          amount: 550,
          status: ["✔️", "❌"],
        },
        {
          date: "12/13/21",
          booker: "Leo",
          stay: "Fresh and modern 1BR in Bed-Stuy",
          tripDates: "12/22/21-12/27/21",
          nights: 5,
          guests: 4,
          amount: 1600,
          status: ["✔️", "❌"],
        },
        {
          date: "11/18/21",
          booker: "Leo",
          stay: "Fresh and modern 1BR in Bed-Stuy",
          tripDates: "11/22/21-11/28/21",
          nights: 6,
          guests: 2,
          amount: 2500,
          status: ["✔️", "❌"],
        },
        {
          date: "11/13/21",
          booker: "Leo",
          stay: "Fresh and modern 1BR in Bed-Stuy",
          tripDates: "11/14/21-11/18/21",
          nights: 4,
          guests: 4,
          amount: 3000,
          status: ["✔️", "❌"],
        },
        {
          date: "10/15/21",
          booker: "Leo",
          stay: "Fresh and modern 1BR in Bed-Stuy",
          tripDates: "10/20/21-10/28/21",
          nights: 8,
          guests: 2,
          amount: 3500,
          status: ["✔️", "❌"],
        },
        {
          date: "09/10/21",
          booker: "Leo",
          stay: "Fresh and modern 1BR in Bed-Stuy",
          tripDates: "09/25/21-09/28/21",
          nights: 3,
          guests: 5,
          amount: 2000,
          status: ["✔️", "❌"],
        },
        {
          date: "08/13/21",
          booker: "Leo",
          stay: "Fresh and modern 1BR in Bed-Stuy",
          tripDates: "08/17/21-08/18/20",
          nights: 1,
          guests: 2,
          amount: 516,
          status: ["✔️", "❌"],
        },
        {
          date: "08/17/21",
          booker: "Leo",
          stay: "Fresh and modern 1BR in Bed-Stuy",
          tripDates: "08/19/21-08/22/21",
          nights: 3,
          guests: 4,
          amount: 1750,
          status: ["✔️", "❌"],
        },
      ],
    };
  },
  methods: {
    openStays() {
      console.log(this.isOpen);
      this.isOpen = true;
    },
    openOrders() {
      console.log(this.isOpen);
      this.isOpen = false;
    },
  },
  computed: {
    user() {
      return this.$store.getters.user;
    },
    revenueSum() {
      const revenue = this.orders.reduce((acc, order) => {
        return acc + order.amount;
      }, 0);
      return "$" + new Intl.NumberFormat("en-US").format(revenue);
    },
    guestSum() {
      const guests = this.orders.reduce((acc, order) => {
        return acc + order.guests;
      }, 0);
      return guests;
    },
  },
  components: {
    appHeader,
    orderList,
    stayList
  },
};
</script>

