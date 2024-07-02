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
    <v-row v-if="price == 0 || selectedVehicleType == null">
      <v-col cols="4">
        <CardPrice
          title="Basic user fee"
          description="Basic user fee: 10% of the price of the vehicle"
        />
      </v-col>
      <v-col cols="4" class="d-flex align-center">
        <CardPrice
          title="The seller's special fee"
          description="The seller's special fee"
        />
      </v-col>
      <v-col cols="4" class="d-flex align-center">
        <CardPrice
          title="Costs for the association"
          description="The added costs for the association based on the price of the vehicle"
        />
      </v-col>
    </v-row>
    <v-row
      v-if="price > 0 && selectedVehicleType != null"
      class="flex-row-reverse"
    >
      <v-col cols="12">
        <TablePrice :totalAmount="totalAmount" :loading="loading" />
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import CardPrice from "../components/CardPrice.vue";
import TablePrice from "../components/TablePrice.vue";
export default {
  components: {
    CardPrice,
    TablePrice,
  },
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
      this.totalAmount = {
        carPrice: this.price,
      };
      this.timeout = setTimeout(() => {
        this.getPrice();
      }, 1000);
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
      this.totalAmount = {
        ...this.totalAmount,
        ...response,
      };
    },
  },
};
</script>

<style scoped>
.full-width-skeleton {
  width: 100% !important;
}
</style>
