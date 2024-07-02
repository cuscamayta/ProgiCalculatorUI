<template>
  <v-card>
    <v-container
      style="height: 300px"
      class="d-flex flex-column justify-center align-center text-center"
    >
      <h1>{{ title }}</h1>
      <h3>{{ description }}</h3>
    </v-container>
  </v-card>
</template>

<script>
export default {
  name: "CardPrice",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
};
</script>
