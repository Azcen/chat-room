<template>
  <div class="center full">
    <vs-avatar class="btn-mg" v-if="name">
      <template #text>
        {{ name }}
      </template>
    </vs-avatar>
    <vs-input
      v-model="name"
      placeholder="Ingresa tu nombre"
      v-on:keyup.enter="setName(name)"
    />
    <vs-button color="#7d33ff" relief @click="setName(name)" class="btn-mg">
      <i class="bx bxs-paper-plane icon-mgr"></i> Ingresar
    </vs-button>
  </div>
</template>
<script>
import { createNamespacedHelpers } from "vuex";
const { mapActions } = createNamespacedHelpers("Chat");

export default {
  name: "Login",
  data: () => ({
    name: "",
  }),
  methods: {
    ...mapActions(["setName"]),
  },
};
</script>
<style lang="sass">

.center
  display: flex
  align-items: center
  justify-content: center
  padding: 20px
  flex-wrap: wrap
  flex-direction: column
.btn-mg
  margin: 1rem 0 !important
.full
  height: 80vh
.icon-mgr
  margin-right: 0.5rem
</style>
