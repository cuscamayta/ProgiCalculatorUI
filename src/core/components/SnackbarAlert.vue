<template>
  <v-snackbar v-model="show" :timeout="timeout" :color="color">
    {{ message }}
    <template v-slot:action="{ attrs }">
      <v-btn color="white" text v-bind="attrs" @click="hideSnackbar">
        Cerrar
      </v-btn>
    </template>
  </v-snackbar>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters("snackbar", ["snackbar"]),
    show() {
      return this.snackbar.show;
    },
    message() {
      return this.snackbar.message;
    },
    color() {
      return this.snackbar.color;
    },
    timeout() {
      return this.snackbar.timeout;
    },
  },
  methods: {
    ...mapActions("snackbar", ["hideSnackbar"]),
  },
};
</script>
