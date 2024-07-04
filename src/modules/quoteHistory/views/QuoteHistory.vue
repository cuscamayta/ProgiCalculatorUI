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
    console.log("asdasdasd");
    const getHeaders = () => {
      if (quoteHistory.value.length > 0) {
        const headers = Object.keys(quoteHistory.value[0]).map((key) => ({
          text: key.toUpperCase(),
          value: key,
        }));
        return headers.value;
      }
      return [];
    };
    headers.value = getHeaders();
    console.log(quoteHistory);
    console.log(headers);
    return {
      store,
      quoteHistory,
      headers,
    };
  },
  computed: {
    formattedQuoteHistory() {
      return this.quoteHistory.map((item) => ({ ...item }));
    },
  },
};
</script>

<style scoped>
.no-quotes-message {
  background-color: yellow;
  padding: 10px;
  text-align: center;
  margin-top: 20px;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
