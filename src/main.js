import Vue from "vue";
import App from "./App.vue";

import AppMessage from "./components/Message.vue";
import AppQuestion from "./components/Question.vue";
import AppResultScreen from "./components/ResultScreen.vue";
import AppStartScreen from "./components/StartScreen.vue";

Vue.config.productionTip = false;

Vue.component("AppMessage", AppMessage);
Vue.component("AppQuestion", AppQuestion);
Vue.component("AppResultScreen", AppResultScreen);
Vue.component("AppStartScreen", AppStartScreen);

new Vue({
  render: h => h(App)
}).$mount("#app");
