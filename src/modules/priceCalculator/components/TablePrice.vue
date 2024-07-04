<template>
  <v-card>
    <v-container>
      <v-row
        v-for="(pairValue, index) in totalAmount"
        :key="index"
        class="d-flex align-center"
      >
        <v-divider
          v-if="index === totalAmount.length - 1"
          style="margin: 12px 0px"
        ></v-divider>
        <v-col cols="8">
          <h3 class="text-truncate">{{ pairValue[0] }}</h3>
        </v-col>
        <v-col
          cols="4"
          class="d-flex flex-column justify-center align-center text-center"
        >
          <LoadingChip :title="pairValue[1]" :loading="loading" />
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
