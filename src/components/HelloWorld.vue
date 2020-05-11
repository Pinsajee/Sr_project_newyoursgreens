<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 md8>
          <v-col cols="12">
            <v-img :src="require('../assets/pic1.jpg')" max-height="200" />
          </v-col>
          </v-flex>
<v-flex xs12 md8>
          <v-col v-for="(item, i) in items" :key="i" cols="12" xs12 md8>
            <v-card  >
              <div class="d-flex flex-no-wrap justify-space-between">
                <v-avatar class="ma-4" size="125" tile>
                  <v-img :src="require('../assets/golflogo.jpg')" width="300" />
                </v-avatar>
                <div>
                  <v-card-title
                    class="headline"
                    v-text="item.title"
                  ></v-card-title>

                  <v-card-subtitle
                    v-text="item.artist"
                  ></v-card-subtitle>
                </div>
              </div>
            </v-card>
          </v-col>

        
      </v-flex>
      <v-flex xs12 md4>
                <v-col xs12 md8>
<v-card >
  <v-col></v-col>
  <h1>your reservation</h1>
  <h2>kljvpsjvpsdjvpos</h2>
  <h1>hiiiiiiiiiiiigrgrgergrfbfdbsbgf<br>brgreagreabreagaerrea</h1>
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
    items: [
      {
        color: "#ffffff",
        title: "Green Valley Country Club Bangkok",
        artist: "สนามกอล์ฟกรีนวัลเล่ คันทรีคลับ บางนา",
      },
    ],
  }),
};
</script>
