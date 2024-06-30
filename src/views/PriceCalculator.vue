<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-text-field label="Enter a price" type="number"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12">
        <v-select
          label="Enter the price of the vehicle"
          :items="['Common', 'Luxury ']"
        ></v-select>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4">
        <v-card>
          <v-container
            style="height: 300px"
            class="d-flex flex-column justify-center align-center text-center"
          >
            <h1>Basic user fee</h1>
            <v-chip
              color="primary"
              variant="flat"
              size="x-large"
              density="comfortable"
              >125$us</v-chip
            >
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
            <v-chip
              color="primary"
              variant="flat"
              size="x-large"
              density="comfortable"
              >125$us</v-chip
            >
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
            <v-chip
              color="primary"
              variant="flat"
              size="x-large"
              density="comfortable"
              >125$us</v-chip
            >
            <h3>
              The added costs for the association based on the price of the
              vehicle
            </h3>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="flex-row-reverse">
      <v-col cols="12">
        <v-card>
          <v-container>
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
                  >125$us</v-chip
                >
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-row class="flex-row-reverse">
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
                  >125$us</v-chip
                >
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
                  >125$us</v-chip
                >
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
                  >125$us</v-chip
                >
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
                  >125$us</v-chip
                >
              </v-col>
            </v-row>
            <v-divider style="margin: 5px 0px"></v-divider>
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
                  >125$us</v-chip
                >
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4"></v-col>
      <v-col cols="4" class="d-flex flex-column justify-center align-center">
        <v-btn prepend-icon="$vuetify" size="x-large">Save Quote</v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>
<style scoped>
.full-width-skeleton {
  width: 100% !important;
}
</style>
