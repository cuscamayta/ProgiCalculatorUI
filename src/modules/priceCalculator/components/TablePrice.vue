<template>
  <v-card>
    <v-container>
      <v-row class="d-flex align-center">
        <v-col cols="8">
          <h3 class="text-truncate">Basic user fee</h3>
        </v-col>
        <v-col
          cols="4"
          class="d-flex flex-column justify-center align-center text-center"
        >
          <v-chip
            color="primary"
            variant="flat"
            size="x-large"
            density="comfortable"
          >
            <v-progress-circular
              v-if="loading"
              indeterminate
              color="white"
            ></v-progress-circular>
            <span v-else>{{ totalAmount.basicFee }}</span>
          </v-chip>
        </v-col>
      </v-row>
      <v-row class="d-flex align-center">
        <v-col cols="8">
          <h3 class="text-truncate">The seller's special fee</h3>
        </v-col>
        <v-col
          cols="4"
          class="d-flex flex-column justify-center align-center text-center"
        >
          <LoadingChip :title="totalAmount.specialFee" :loading="loading" />
        </v-col>
      </v-row>
      <v-row class="d-flex align-center">
        <v-col cols="8">
          <h3 class="text-truncate">Costs for the association</h3>
        </v-col>
        <v-col
          cols="4"
          class="d-flex flex-column justify-center align-center text-center"
        >
          <LoadingChip :title="totalAmount.associationFee" :loading="loading" />
        </v-col>
      </v-row>
      <v-row class="d-flex align-center">
        <v-col cols="8">
          <h3 class="text-truncate">A fixed storage fee</h3>
        </v-col>
        <v-col
          cols="4"
          class="d-flex flex-column justify-center align-center text-center"
        >
          <LoadingChip :title="totalAmount.storageFee" :loading="loading" />
        </v-col>
      </v-row>
      <v-row class="d-flex align-center">
        <v-col cols="8">
          <h3 class="text-truncate">Car Price</h3>
        </v-col>
        <v-col
          cols="4"
          class="d-flex flex-column justify-center align-center text-center"
        >
          <v-chip
            color="primary"
            variant="flat"
            size="x-large"
            density="comfortable"
          >
            <span>{{ totalAmount.carPrice }}</span>
          </v-chip>
        </v-col>
      </v-row>
      <v-divider style="margin: 12px 0px"></v-divider>
      <v-row class="d-flex align-center">
        <v-col cols="8">
          <h3 class="text-truncate">Total</h3>
        </v-col>
        <v-col
          cols="4"
          class="d-flex flex-column justify-center align-center text-center"
        >
          <LoadingChip :title="totalAmount.totalCost" :loading="loading" />
        </v-col>
      </v-row>
    </v-container>
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
