<template>
  <v-app>
    <v-main>
      <v-toolbar title="PROGI" color="primary">
        <v-btn :to="{ name: 'PriceCalculator' }"> Price Calculator </v-btn>
        <v-btn :to="{ name: 'QuoteHistory' }"> History </v-btn>
      </v-toolbar>
      <router-view />
      <SnackbarAlert />
    </v-main>
  </v-app>
</template>

<script>
import SnackbarAlert from "./core/components/SnackbarAlert.vue";
export default {
  name: "App",
  components: {
    SnackbarAlert,
  },
  data: () => ({
    //
  }),
};
</script>
