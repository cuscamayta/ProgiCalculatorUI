<template>
  <v-card>
    <v-container v-if="!loading">
      <v-row
        v-for="(fee, index) in totalAmount.fees"
        :key="index"
        class="d-flex align-center"
      >
        <v-col cols="8">
          <h3 class="text-truncate">{{ fee.typeFee }}</h3>
        </v-col>
        <v-col
          cols="4"
          class="d-flex flex-column justify-center align-center text-center"
        >
          <LoadingChip :title="fee.cost.toFixed(2)" :loading="loading" />
        </v-col>
      </v-row>
      <v-divider style="margin: 12px 0px"></v-divider>

      <v-row class="d-flex align-center">
        <v-col cols="8">
          <h3 class="text-truncate">Total Cost</h3>
        </v-col>
        <v-col
          cols="4"
          class="d-flex flex-column justify-center align-center text-center"
        >
          <LoadingChip :title="totalAmount.totalCost" :loading="loading" />
        </v-col>
      </v-row>
    </v-container>
    <v-row v-else class="loading-span">
      <LoadingChip title="" :loading="loading" />
    </v-row>
  </v-card>
</template>
<script>
import LoadingChip from "../../../core/components/LoadingChip.vue";
export default {
  name: "TablePrice",
  components: {
    LoadingChip,
  },
  props: {
    totalAmount: {
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    showFields(fields) {
      console.log(fields);
    },
  },
};
</script>
<style scoped>
.loading-span {
  padding: 24px;
  display: flex;
  justify-content: center;
}
</style>
