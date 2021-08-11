<template>
  <div class="msg-container">
    <div class="messages-box">
      <ChatMessage :mine="false"></ChatMessage>
      <ChatMessage :mine="true"></ChatMessage>
      <ChatMessage :mine="false"></ChatMessage>
      <ChatMessage :mine="false"></ChatMessage>
      <ChatMessage :mine="true"></ChatMessage>
      <ChatMessage :mine="true"></ChatMessage>
      <ChatMessage :mine="false"></ChatMessage>
      <ChatMessage :mine="true"></ChatMessage>
      <ChatMessage :mine="false"></ChatMessage>
      <ChatMessage :mine="true"></ChatMessage>
      <ChatMessage :mine="false"></ChatMessage>
      <ChatMessage :mine="true"></ChatMessage>
      <ChatMessage :mine="false"></ChatMessage>
      <ChatMessage :mine="false"></ChatMessage>
      <ChatMessage :mine="true"></ChatMessage>
      <ChatMessage :mine="true"></ChatMessage>
      <ChatMessage :mine="false"></ChatMessage>
      <ChatMessage :mine="true"></ChatMessage>
    </div>
    <div class="center content-inputs message-input">
      <vs-input primary v-model="message" placeholder="Escribe un mensaje"></vs-input>
      <vs-button
        icon
        color="#7d33ff"
        relief
      >
        <i class='bx bxs-paper-plane' ></i>
      </vs-button>
    </div>
  </div>
</template>
<script>
import ChatMessage from "@/components/ChatMessage.vue";

export default {
  name: "ChatContainer",
  components: {
    ChatMessage,
  },
  data: () => ({
    message: ''
  }),
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
