import { createStore } from "vuex";
import snackbar from "./snackbar";

export default createStore({
  modules: {
    snackbar,
  },
});
