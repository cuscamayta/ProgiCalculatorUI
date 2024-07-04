import { createStore } from "vuex";
import snackbar from "./snackbar";
import history from "../../modules/priceCalculator/store/history";

export default createStore({
  modules: {
    snackbar,
    priceCalculatorHistory: history,
  },
});
