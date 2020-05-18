<template>
  <v-layout row>
    <v-flex xs12 md8>
      <v-col cols="auto" xs12 md8>
        <v-card light>
          <v-card-subtitle>select time</v-card-subtitle>
          <v-divider></v-divider>
          <v-card-subtitle>teetime</v-card-subtitle>
        <v-row>
        <v-col cols="12" sm="3">
           
              <v-btn small>06:00</v-btn>
            
          </v-col>
          <v-col cols="12" sm="3"
           v-for="(item, i) in items"
            :key="i">
           
              <v-btn small>{{ item.time }}</v-btn>
            
          </v-col>

           <v-col cols="12" sm="3">
            <v-btn icon color="pink">
              <v-icon>mdi-heart</v-icon>
            </v-btn>
          </v-col>

          <v-col cols="12" sm="3">
            <v-btn icon color="indigo">
              <v-icon>mdi-star</v-icon>
            </v-btn>
          </v-col>

          <v-col cols="12" sm="3">
            <v-btn icon color="green">
              <v-icon>mdi-cached</v-icon>
            </v-btn>
          </v-col>
        </v-row>
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
