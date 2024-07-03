<template>
  <v-app>
    <v-main>
      <v-toolbar title="PROGI" color="primary" />
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
