<template>
  <div>
    <!-- <h1>im a chat room, pls chat</h1>
    <p>{{ usersMessages }}</p>
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
import ChatContainer from "@/components/ChatContainer.vue";
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("Chat");
import gql from "graphql-tag";

export default {
  name: "ChatRoom",
  components: {
    ChatContainer,
  },
  apollo: {
    // messages: gql`
    //   query {
    //     messages {
    //       id
    //       content
    //       user
    //     }
    //   }
    // `,
    $subscribe: {
      messages: {
        query: gql`
          subscription {
            messages {
              id
              content
              user
            }
          }
        `,
        result({ data }) {
          this.setMessages(data.messages);
          // this.messages = data.messages;
        },
      },
    },
  },
  data: () => ({
    messages: [],
  }),
  computed: {
    ...mapGetters(["usersMessages", "userName"]),
  },
  created() {
    if (!this.userName) {
      this.$router.push({ name: "Login" });
    }
  },
  methods: {
    ...mapActions(["setMessages"]),
    getMessages() {},
  },
};
</script>
