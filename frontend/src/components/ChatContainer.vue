<template>
  <div class="msg-container">
    <div class="messages-box">
      <div id="box">
        <ChatMessage
          :mine="item.user === userName"
          :same-user="
            index === 0 ? false : item.user === usersMessages[index - 1].user
          "
          :message="item.content"
          :user="item.user"
          v-for="(item, index) in usersMessages"
          :key="index"
        ></ChatMessage>
      </div>
    </div>
    <div class="message-input">
      <vs-input
        primary
        v-model="message"
        placeholder="Escribe un mensaje"
        v-on:keyup.enter="send({ user: userName, content: message })"
      ></vs-input>
      <vs-button
        icon
        color="#7d33ff"
        relief
        @click="send({ user: userName, content: message })"
      >
        <i class="bx bxs-paper-plane"></i>
      </vs-button>
    </div>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapGetters, mapActions } = createNamespacedHelpers("Chat");
import ChatMessage from "@/components/ChatMessage.vue";

export default {
  name: "ChatContainer",
  components: {
    ChatMessage,
  },
  data: () => ({
    message: "",
  }),
  computed: {
    ...mapGetters(["usersMessages", "userName"]),
  },
  methods: {
    ...mapActions(["sendMessage"]),
    send(payload) {
      console.log(payload);
      this.sendMessage(payload);
      this.message = "";
      this.scrollToBottom();
    },
    scrollToBottom() {
      let element = document.getElementById("box");
      element.scrollIntoView({ behavior: "smooth", block: "end" });
      console.log(element);
    },
  },
};
</script>
<style lang="sass">
.msg-container
  background-color: #fff
  height: 90vh
  border-radius: 1rem
  display: flex
  max-width: 50%
  flex-direction: column
  margin: 0 auto

.messages-box
  display: flex
  flex-direction: column
  overflow-y: auto
  direction: ltr
  scrollbar-color: #d4aa70 #e4e4e4
  scrollbar-width: thin
  height: 100%

.messages-box::-webkit-scrollbar
  width: 15px

.messages-box::-webkit-scrollbar-track
  background-color: transparent
  border-radius: 100px

.messages-box::-webkit-scrollbar-thumb
  border-radius: 100px
  border: 5px solid transparent
  background-clip: content-box
  background-color: #8070d4

.message-input
  display: flex
  margin: 0.5rem 2.2rem
  .vs-input-parent
    width: 90%
  .vs-input-content
    // margin: 10px 0px
    width: calc(100%)
    .vs-input
      width: 100%
</style>
