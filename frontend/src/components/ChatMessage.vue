<template>
  <div class="flex" :class="isMine">
    <div class="user-av">
      <vs-avatar dark v-if="!sameUser">
        <template #text>
          {{ user }}
        </template>
      </vs-avatar>
    </div>
    <vs-card class="msg-box" :class="isSameUser">
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
    sameUser: {
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
    isSameUser() {
      return {
        "same-user-pd-left": this.sameUser && !this.mine,
        "same-user-pd-right": this.sameUser && this.mine,
      };
    },
  },
};
</script>
<style lang="sass">
.flex
  display: flex
  margin: 0.4rem 2rem
  flex-direction: row
  .msg-box
    .vs-card
      background-color: #e7e4f9
.my-msg
  flex-direction: row-reverse
.text-mg
  padding: 0.6rem 0.5rem
.user-av
  margin: 0 0.5rem
.same-user-pd-left
  margin: 0 0 0 2.8rem
.same-user-pd-right
  margin: 0 2.8rem 0 0
.vs-card__text
  padding: 5px 15px !important
</style>
