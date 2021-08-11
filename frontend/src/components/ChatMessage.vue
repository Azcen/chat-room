<template>
  <div class="flex" :class="isMine">
    <div class="user-av">
      <vs-avatar dark>
        <i class="bx bx-user" text-white></i>
      </vs-avatar>
    </div>
    <vs-card class="msg-box">
      <template #text>
        <p class="text-mg">
          asdasd asdas asd asdasd dxcqa asdqwe asdazx asdasd qwea asd qwe azsas
          a qwe asd qwer aasd asdasd asdas asd asdasd dxcqa asdqwe asdazx asdasd
          qwea asd qwe azsas a qwe asd qwer aasd
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
  flex-direction: row-reverse
  .msg-box
    .vs-card
      background-color: #e7e4f9
.my-msg
  flex-direction: row
.text-mg
  padding: 0.6rem 0.5rem
.user-av
  margin: 0.5rem
</style>
