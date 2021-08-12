import Vue from "vue";
import Vuex from "vuex";
import gql from "graphql-tag";
import { apolloClient } from "../../apollo";
// import { apolloClient } from '@apollo/client'
// import apollo from './apolloClient'
import app from "../../main";
// import { AxiosResponse } from 'axios'

Vue.use(Vuex);

const state = {
  usersMessages: [],
  userName: "",
};

const mutations = {
  SET_MESSAGES(state, payload) {
    state.usersMessages = payload;
  },
  SET_USER_NAME(state, payload) {
    state.userName = payload;
  },
};

const actions = {
  async setMessages({ commit }, payload) {
    if (payload) {
      commit("SET_MESSAGES", payload);
    }
  },
  setName({ commit }, payload) {
    if (payload) {
      commit("SET_USER_NAME", payload);
      app.$router.push({ name: "ChatRoom" });
    }
  },
  // eslint-disable-next-line no-unused-vars
  sendMessage({ commit }, payload) {
    if (payload) {
      apolloClient.mutate({
        mutation: gql`
          mutation ($user: String!, $content: String!) {
            postMessage(user: $user, content: $content)
          }
        `,
        variables: {
          user: payload.user,
          content: payload.content,
        },
      });
    }
  },
};

const getters = {
  usersMessages: (state) => state.usersMessages,
  userName: (state) => state.userName,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
};
