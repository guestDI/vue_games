<template>
  <!-- <nav> -->
    <!-- <router-link to="/">Home</router-link> -->
    <!-- <router-link to="/results">Results</router-link> -->
  <!-- </nav> -->
  <router-view/>
</template>

<style lang="scss">
@import './styles/variables.scss';

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  overflow: hidden;
  padding: 10px 0;
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
