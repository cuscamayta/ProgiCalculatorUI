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
          :items="carTypes.map((item) => item.label)"
          v-model="selectedVehicleType"
          @update:modelValue="onSelectChange"
        ></v-select>
      </v-col>
    </v-row>
    <v-row v-if="price == 0 || selectedVehicleType == null">
      <v-col v-for="(feeType, index) in feesTypes" :key="index">
        <CardPrice :title="feeType.name" :description="feeType.description" />
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
import { ref } from "vue";
import CardPrice from "../components/CardPrice.vue";
import TablePrice from "../components/TablePrice.vue";
import { useStore } from "vuex";
export default {
  components: {
    CardPrice,
    TablePrice,
  },
  data() {
    return {
      price: 0,
      timeout: null,
      loading: false,

      totalAmount: null,
    };
  },
  setup() {
    const store = useStore();
    const carTypes = ref([]);
    const feesTypes = ref([]);
    const selectedVehicleType = ref(null);
    const getCarTypes = async () => {
      const response = await fetch(
        `${process.env.VUE_APP_API_URL}/car-types`
      ).then((res) => res.json());
      carTypes.value = response;
      selectedVehicleType.value = response[0].label;
    };
    getCarTypes();

    const getFeeTypes = (res) => {
      return res.reduce((feesTypes, item) => {
        const currentFeeType = item.feesTypes;
        let exist = feesTypes.findIndex(
          (feeType) => feeType.id == currentFeeType.id
        );
        if (exist < 0) {
          feesTypes.push(currentFeeType);
          exist = feesTypes.length - 1;
        }

        return feesTypes;
      }, []);
    };

    const getFees = async () => {
      const response = await fetch(`${process.env.VUE_APP_API_URL}/fees`).then(
        (res) => res.json()
      );
      feesTypes.value = getFeeTypes(response);
    };
    getFees();
    return {
      carTypes,
      feesTypes,
      selectedVehicleType,
      store,
      getCarTypes,
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
        carTypeId: this.carTypes.find(
          (e) => e.label === this.selectedVehicleType
        ).id,
        basePrice: Number(this.price),
      });
      this.loading = false;
      let feeArrays = [],
        total = ["Total", 0];
      for (let key in response) {
        if (key != "TotalCost")
          feeArrays.push([key, Number(response[key]).toFixed(2)]);
        else total[1] = Number(response[key]).toFixed(2);
      }
      if (response) {
        delete response.TotalCost;
        this.store.dispatch("priceCalculatorHistory/saveQuote", {
          "Car Price": this.price,
          ...response,
          "Total Costs": total[1],
        });
      }
      this.totalAmount = [...feeArrays, ["Car Price", this.price], total];
    },
  },
};
</script>

<style scoped>
.full-width-skeleton {
  width: 100% !important;
}
</style>
