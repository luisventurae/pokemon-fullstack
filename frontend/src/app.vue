<template>
  <div id="app">
    <!-- Orejas e Pikachu -->
    <div class="pikachu_triangle top_left"></div>
    <div class="pikachu_triangle top_right"></div>
    <!-- Pómulos e Pikachu -->
    <div class="pikachu_arc bottom_left"></div>
    <div class="pikachu_arc bottom_right"></div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
