<template>
  <section class="app-header full-header home-page main-layout">
    <div class="main-header flex space-between">

      <div class="logo-container">
        <router-link to="/">
          <img class="logo-svg" src="../assets/airbnb-white.svg" />
        </router-link>
      </div>

      <button class="mini-filter flex space-between">
        Start Search
        <span>?</span>
      </button>

      <div class="main-nav-container">
        <nav class="main-nav flex align-center">
          <router-link to="/explore">Explore</router-link>
          <router-link to="/host">Become a Host</router-link>
          <button class="user-menu">BUTTON</button>
        </nav>
      </div>

    </div>
    
  </section>
</template>

<style></style>
