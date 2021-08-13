<template>
  <div id="app">
    <div id="nav">
      <vs-navbar color="dark" text-white center-collapsed>
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
          <vs-avatar class="btn-mg" v-if="userName">
            <template #text>
              {{ userName }}
            </template>
          </vs-avatar>
        </template>
      </vs-navbar>
    </div>
    <router-view />
    <vs-sidebar absolute v-model="active" open v-if="$route.name !== 'Login'">
      <template #logo>
        <h4 text-white>Hey Chat-Now!</h4>
      </template>
      <template #header> </template>
      <vs-sidebar-item id="chat">
        <template #icon>
          <i class="bx bx-chat"></i>
        </template>
        Chat
      </vs-sidebar-item>
      <vs-sidebar-item id="">
        <template #icon>
          <i class="bx bx-search-alt"></i>
        </template>
        <vs-input v-model="query" placeholder="Buscar Mensajes" />
      </vs-sidebar-item>
      <div v-if="queryResult">
        <ChatMessage
          :mine="false"
          :same-user="false"
          :message="item.content"
          :user="item.user"
          v-for="(item, index) in queryResult"
          :key="index"
        ></ChatMessage>
      </div>
      >
      <template #footer>
        <vs-row justify="space-between">
          <vs-avatar>
            <img src="/avatars/avatar-5.png" alt="" />
          </vs-avatar>

          <vs-avatar badge-color="danger" badge-position="top-right">
            <i class="bx bx-bell"></i>

            <template #badge> 28 </template>
          </vs-avatar>
        </vs-row>
      </template>
    </vs-sidebar>
  </div>
</template>
<script>
import ChatMessage from "@/components/ChatMessage.vue";
import { createNamespacedHelpers } from "vuex";
const { mapGetters } = createNamespacedHelpers("Chat");
export default {
  components: {
    ChatMessage,
  },
  data: () => ({
    active: "chat",
    query: "",
  }),
  computed: {
    ...mapGetters(["userName", "usersMessages"]),
    queryResult() {
      const pattern = RegExp(`${this.query}${this.query ? "+" : ""}`, "gi");
      console.log(pattern);
      return this.query
        ? this.usersMessages.filter((msg) => {
            return pattern.test(msg.content) === true;
          })
        : [];
    },
  },
};
</script>

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
body {
  background-color: #e7e4f9;
}
</style>
