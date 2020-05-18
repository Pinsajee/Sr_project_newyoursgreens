<template>
  <v-container>

  <v-layout row>
    <v-flex xs12 md8>
      <v-col cols="auto" xs12 md8>

<v-flex xs12 md12>
        <v-card light>
          <v-card-subtitle>select time</v-card-subtitle>
          <v-divider></v-divider>
          <v-card-subtitle>teetime</v-card-subtitle>
          <v-row class="d-flex flex-wrap"> 
            <v-col cols="auto" ms12 >
             
              <v-btn class="ma-2" large color="#43C677" dark v-for="(item, i) in items" :key="i" >{{ item.time }}</v-btn>
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
        time: "07:00",
      },
      {
        time: "07:07",
      },
      {
        time: "07:14",
      },
       {
        time: "06:21",
      },
       {
        time: "06:28",
      },
       {
        time: "06:35",
      },
    ],
  }),
};
</script>
