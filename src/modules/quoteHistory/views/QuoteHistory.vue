<template>
  <v-container>
    <v-data-table
      :headers="headers"
      :items="formattedQuoteHistory"
      :items-per-page="10"
      class="elevation-1"
    >
      <template v-slot:[`item.${header?.value}`]="{ item }">
        {{ Number(item[header.value]).toFixed(2) }}
      </template>
    </v-data-table>
  </v-container>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
export default {
  name: "HistoryTable",
  setup() {
    const store = useStore();
    const quoteHistory = ref([]);
    const headers = ref([]);
    quoteHistory.value = store.getters["priceCalculatorHistory/quoteHistory"];
    const getHeaders = () => {
      if (quoteHistory.value.length > 0) {
        let headers = quoteHistory.value[0].fees.map((fee) => ({
          title: fee.typeFee.toUpperCase(),
          key: fee.typeFee,
        }));
        return [
          { title: "CAR PRICE", key: "carPrice" },
          ...headers,
          { title: "TOTAL COST", key: "totalCost" },
        ];
      }
      return [];
    };
    headers.value = getHeaders();
    return {
      store,
      quoteHistory,
      headers,
    };
  },
  computed: {
    formattedQuoteHistory() {
      return this.quoteHistory.map((item) => {
        let result = {
          carPrice: item.carPrice,
          totalCost: item.totalCost,
        };
        item.fees.map((fee) => {
          result[fee.typeFee] = fee.cost;
        });
        return result;
      });
    },
  },
};
</script>
