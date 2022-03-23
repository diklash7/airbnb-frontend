<template>
  <section class="app-header">
    <h1>LOGO Airbnb</h1>

    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/explore">Explore</router-link>
    </nav>
  </section>
</template>

<style>
.app-header {
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.5) 50%,
    rgba(0, 0, 0, 0.05) 85%,
    transparent 90%
  );
  height: 160px;
  background-color: transparent;
  box-shadow: none;
  grid-template-rows: 1fr 1fr;
  position: fixed;
  top: 0;
  display: grid;
  grid-template-columns: 80px 1fr 80px;
  width: 100%;
  z-index: 8000;
}

h1 {
  color: white;
}
</style>
