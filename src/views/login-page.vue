<template>
  <section class="login-form-container flex column">
    <form class="login-form">
      <div class="login-form-header"><h2>Log in</h2></div>
      <div class="login-form-body flex column">
        <h1>Welcome back</h1>
        <input
          type="text"
          name="username"
          autocomplete="off"
          placeholder="Username"
          class="login-input"
        /><input
          type="password"
          name="password"
          autocomplete="off"
          placeholder="Password"
          class="login-input"
        />
        <p></p>
        <button type="submit" class="login-btn clickable">Submit</button>
        <div class="login-actions-btns flex space-between">
          <button type="button" class="toggle-form-btn actions-btn">
            New user
          </button>
        </div>
      </div>
    </form>
  </section>
</template>
