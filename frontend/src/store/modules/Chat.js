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
    state.usersMessages = payload.messages;
  },
  SET_USER_NAME(state, payload) {
    state.userName = payload;
  },
};

const actions = {
  async loadMessages({ commit }) {
    const messages = await apolloClient.query({
      query: gql`
        query {
          messages {
            id
            content
            user
          }
        }
      `,
    });

    commit("SET_MESSAGES", messages.data);
  },
  setName({ commit }, payload) {
    if (payload) {
      commit("SET_USER_NAME", payload);
      app.$router.push({ name: "ChatRoom" });
    }
  },
  sendMessage({ commit }, payload) {
    console.log(payload);
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
