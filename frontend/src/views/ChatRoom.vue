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
  methods: {
    getMessages() {},
  },
};
</script>
