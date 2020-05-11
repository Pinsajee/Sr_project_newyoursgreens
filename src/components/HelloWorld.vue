<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 md8>
        <v-col cols="12">
          <v-img :src="require('../assets/pic1.jpg')" max-height="200" />
        </v-col>
      </v-flex>

      <v-flex xs12 md8>
        <v-col cols="auto" xs12 md8>
          <v-card light>
            <v-flex xs12>
              <v-img
                src="../assets/golflogo.jpg"
                height="125px"
                contain
              ></v-img>
           

            <v-card-title class="headline"
              >Green Valley Country Club Bangkok</v-card-title
            >

            <v-card-subtitle
              >สนามกอล์ฟกรีนวัลเล่ คันทรีคลับ บางนา</v-card-subtitle
            >
             </v-flex>
          </v-card>
        </v-col>
      </v-flex>

      <v-flex xs12 md8>
        <v-col cols="auto" xs12 md8>
          <v-card light>
            <v-card-subtitle>search teetime</v-card-subtitle>
            <v-progress-linear
              color="red lighten-2"
              buffer-value="0"
              stream
            ></v-progress-linear>
            <v-card-subtitle>date</v-card-subtitle>
          </v-card>
        </v-col>
      </v-flex>

    
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "pichead",

  data: () => ({
    //
  }),
};
</script>
