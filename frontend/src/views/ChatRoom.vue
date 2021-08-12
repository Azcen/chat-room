<template>
  <div>
    <!-- <h1>im a chat room, pls chat</h1>
    <p>{{ messages }}</p> -->
    <vs-row>
      <vs-col
        offset="2"
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        w="8"
      >
        <ChatContainer></ChatContainer>
      </vs-col>
    </vs-row>
  </div>
</template>
<script>
import gql from "graphql-tag";
import ChatContainer from "@/components/ChatContainer.vue";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("Chat");

export default {
  name: "ChatRoom",
  components: {
    ChatContainer,
  },
  apollo: {
    messages: gql`
      query {
        messages {
          id
          content
          user
        }
      }
    `,
  },
  data: () => ({
    // messages: [
    //   {
    //     id: 1,
    //     user: 'Alex',
    //     msg: 'Wey! Listen'
    //   }
    // ]
    messages: "",
  }),
  computed: {
    ...mapGetters(["usersMessages", "userName"]),
  },
  created() {
    this.loadMessages();
  },
  methods: {
    ...mapActions(["loadMessages"]),
    getMessages() {},
  },
};
</script>
