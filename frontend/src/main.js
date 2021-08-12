import Vue from "vue";
import App from "./App.vue";
import VueApollo from "vue-apollo";
import router from "./router";
import store from "./store";
import "./style";
import { apolloClient } from "./apollo";

Vue.config.productionTip = false;
Vue.use(VueApollo);

const apolloProvider = new VueApollo({
  defaultClient: apolloClient,
});

export default new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App),
}).$mount("#app");
