<template>
  <v-card>
    <v-container v-if="!loading">
      <v-row
        v-for="(fee, index) in totalAmount.fees"
        :key="index"
        class="d-flex align-center"
      >
        <v-divider
          v-if="index === totalAmount.length - 1"
          style="margin: 12px 0px"
        ></v-divider>
        <v-col cols="8">
          <h3 class="text-truncate">{{ fee.typeFee }}</h3>
        </v-col>
        <v-col
          cols="4"
          class="d-flex flex-column justify-center align-center text-center"
        >
          <LoadingChip :title="fee.cost" :loading="loading" />
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
};
</script>
<style scoped>
.loading-span {
  padding: 24px;
  display: flex;
  justify-content: center;
}
</style>
