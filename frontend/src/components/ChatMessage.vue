<template>
  <div class="flex" :class="isMine">
    <div class="user-av">
      <vs-avatar dark>
        <template #text>
          {{ user }}
        </template>
      </vs-avatar>
    </div>
    <vs-card class="msg-box">
      <template #text>
        <p class="text-mg">
          {{ message }}
        </p>
      </template>
    </vs-card>
  </div>
</template>
<script>
export default {
  name: "ChatMessage",
  props: {
    mine: {
      default: () => false,
      type: Boolean,
    },
    message: {
      default: () => "",
      type: String,
    },
    user: {
      default: () => "",
      type: String,
    },
  },
  computed: {
    isMine() {
      return {
        "my-msg": this.mine,
      };
    },
  },
};
</script>
<style lang="sass">
.flex
  display: flex
  margin: 1rem 2rem
  flex-direction: row
  .msg-box
    .vs-card
      background-color: #e7e4f9
.my-msg
  flex-direction: row-reverse
.text-mg
  padding: 0.6rem 0.5rem
.user-av
  margin: 0.5rem
</style>
