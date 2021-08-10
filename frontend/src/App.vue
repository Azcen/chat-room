<template>
  <div id="app">
    <div id="nav">
      <vs-navbar color="dark" text-white center-collapsed v-model="active">
        <template #left>
          <img src="/logo2.png" alt="" />
          <h4 text-white>Hey Chat-Now!</h4>
        </template>
        <!-- <vs-navbar-item :active="active == 'guide'" id="guide">
          Guide
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'docs'" id="docs">
          Documents
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'components'" id="components">
          Components
        </vs-navbar-item>
        <vs-navbar-item :active="active == 'license'" id="license">
          license
        </vs-navbar-item> -->
        <template #right>
          <vs-button flat>Login</vs-button>
          <vs-button>Get Started</vs-button>
        </template>
      </vs-navbar>
    </div>
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

#nav {
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
