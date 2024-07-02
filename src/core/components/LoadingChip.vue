<template>
  <v-chip color="primary" variant="flat" size="x-large" density="comfortable">
    <v-progress-circular
      v-if="loading"
      indeterminate
      color="white"
    ></v-progress-circular>
    <span v-else>{{ title }}</span>
  </v-chip>
</template>
<script>
export default {
  name: "LoadingChip",
  props: {
    loading: {
      type: Boolean,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
  },
};
</script>
