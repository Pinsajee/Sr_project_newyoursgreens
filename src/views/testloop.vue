<template>
  <v-container>

  <v-layout row>
    <v-flex xs12 md8>
      <v-col cols="auto" xs12 md8>

<v-flex xs12 md8>
        <v-card light>
          <v-card-subtitle>select time</v-card-subtitle>
          <v-divider></v-divider>
          <v-card-subtitle>teetime</v-card-subtitle>
          <v-row class="d-flex flex-wrap"> 
            <v-col cols="2"  v-for="(item, i) in items" :key="i" >
              <v-btn class="ma-2">{{ item.time }}</v-btn>
            </v-col>
          </v-row>
        </v-card>
</v-flex>
      </v-col>
    </v-flex>
  </v-layout>
  </v-container>
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
