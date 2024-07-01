<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field
          label="Enter a price"
          type="number"
          v-model="price"
          @input="onInputChange"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-select
          label="Enter the price of the vehicle"
          :items="['Common', 'Luxury']"
          v-model="selectedVehicleType"
          @update:modelValue="onSelectChange"
        ></v-select>
      </v-col>
    </v-row>
    <v-row v-if="!totalAmount || price == 0">
      <v-col cols="4">
        <v-card>
          <v-container
            style="height: 300px"
            class="d-flex flex-column justify-center align-center text-center"
          >
            <h1>Basic user fee</h1>
            <h3>Basic user fee: 10% of the price of the vehicle</h3>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="4" class="d-flex align-center">
        <v-card>
          <v-container
            style="height: 300px"
            class="d-flex flex-column justify-center align-center text-center"
          >
            <h1>The seller's special fee</h1>
            <h3>The seller's special fee</h3>
          </v-container>
        </v-card>
      </v-col>
      <v-col cols="4" class="d-flex align-center">
        <v-card>
          <v-container
            style="height: 300px"
            class="d-flex flex-column justify-center align-center text-center"
          >
            <h1>Costs for the association</h1>
            <h3>
              The added costs for the association based on the price of the
              vehicle
            </h3>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-row
      v-if="this.totalAmount != null && price > 0"
      class="flex-row-reverse"
    >
      <v-col cols="12">
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
                  <span v-else>{{ totalAmount.specialFee }}</span>
                </v-chip>
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
                  <span v-else>{{ totalAmount.associationFee }}</span>
                </v-chip>
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
                  <span v-else>{{ totalAmount.storageFee }}</span>
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
                  <span v-else>{{ totalAmount.totalCost }}</span>
                </v-chip>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
export default {
  data() {
    return {
      price: 0,
      selectedVehicleType: null,
      timeout: null,
      loading: false,

      totalAmount: null,
    };
  },
  methods: {
    onInputChange() {
      clearTimeout(this.timeout);
      this.loading = true;
      this.timeout = setTimeout(() => {
        this.getPrice();
      }, 2000);
    },
    onSelectChange() {
      this.loading = true;
      this.getPrice();
    },
    async getPrice() {
      const response = await this.$post("/calculator", {
        type: this.selectedVehicleType,
        basePrice: this.price,
      });
      this.loading = false;
      this.totalAmount = response;
    },
  },
};
</script>

<style scoped>
.full-width-skeleton {
  width: 100% !important;
}
</style>
