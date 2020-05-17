<template>
  <v-layout row>
    <v-flex xs12 md8>
      <v-col cols="auto" xs12 md8>
        <v-card light>
          <v-card-subtitle>select time</v-card-subtitle>
          <v-divider></v-divider>
          <v-card-subtitle>teetime</v-card-subtitle>
          <div v-for="(item, i) in items"
            :key="i">
          <v-col
            class="text-center"
            cols="12"
            sm="4"
           
          >
            <div class="my-2">
              <v-btn small>{{ item.time }}</v-btn>
            </div>
          </v-col>
          </div>
        </v-card>
      </v-col>
    </v-flex>
  </v-layout>
</template>
<script>
export default {
  name: "timeloop",

  data: () => ({
    items: [
      {
        time: "06:00",
      },
      {
        time: "06:07",
      },
      {
        time: "06:14",
      },
    ],
  }),
};
</script>
