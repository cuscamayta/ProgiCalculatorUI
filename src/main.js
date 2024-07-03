import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import vuetify from "./plugins/vuetify";
import { loadFonts } from "./plugins/webfontloader";
import service from "./plugins/service";
import store from "./core/store";

loadFonts();

const app = createApp(App);

app.use(store);
app.use(service, {
  apiUrl: process.env.VUE_APP_API_URL,
  filterResponse: app.config.globalProperties.$filterResponse,
  errorFormat: "mensaje",
});

app.use(router);
app.use(vuetify);
app.mount("#app");
