<template>
  <!-- <article class="custom-card flex flex-col gap-1 items-center"> -->
  <article class="custom-card">
    <main>
      <slot name="default"></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </article>
</template>

<style scoped>
.custom-card {
  justify-content: space-between;
  border-radius: 5px;
  margin: 0;
  padding: 0;
}

.custom-card main {
  text-align: center;
}

.custom-card footer {
  font-size: 1rem;
}
</style>
