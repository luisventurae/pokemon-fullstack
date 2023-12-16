<template>
  <div id="app" class="main-bg">
    <!-- Orejas e Pikachu -->
    <div
      class="main-bg__pikachu-triangle main-bg__pikachu-triangle__top-left"
    />
    <div
      class="main-bg__pikachu-triangle main-bg__pikachu-triangle__top-right"
    />
    <!-- Pómulos e Pikachu -->
    <div class="main-bg__pikachu-arc main-bg__pikachu-arc__bottom-left" />
    <div class="main-bg__pikachu-arc main-bg__pikachu-arc__bottom-right" />
    <!-- Contenido Principal -->
    <nav>
      <router-link to="/"> Home </router-link> |
      <router-link to="/about"> About </router-link>
    </nav>
    <router-view class="main-content" />
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
