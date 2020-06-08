<template>
  <v-container>
    <v-layout row>
      <!-- head photo-->
      <v-flex xs12 md8>
        <v-col cols="12">
          <v-img :src="require('../assets/pic1.jpg')" max-height="400" />
        </v-col>
      </v-flex>
      <!-- card 1-->
      <v-flex xs12 md12>
        <v-col cols="auto" xs12 md8>
          <v-card light class="hidden" hidd>
            <v-card-text>
              <v-row align="center">
                <v-col class="display-3" cols="5" xs12>
                  <v-img
                    src="../assets/golflogo.jpg"
                    height="180px"
                    contain
                  ></v-img>
                </v-col>
                <v-col class="display-3" cols="7" xs12>
                  <v-card-title 
                    >Green Valley Country Club Bangkok</v-card-title
                  >

                  <v-card-subtitle
                    >สนามกอล์ฟกรีนวัลเล่ คันทรีคลับ บางนา</v-card-subtitle
                  >
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-flex>

      <v-flex xs12 md8>
        <v-col cols="auto" xs12 md8>
          <v-card light>
            <v-card-title>search teetime</v-card-title>
            <v-divider></v-divider>
            <v-card-subtitle>date</v-card-subtitle>
          </v-card>
        </v-col>
      </v-flex>

      <v-flex xs12 md8>
        <v-col cols="auto" xs12 md8>
          <v-card light>
            <v-card-title>select date</v-card-title>
            <v-divider></v-divider>
            <v-col cols="11" sm="5">
              <v-dialog
                ref="menu1"
                v-model="menu1"
                :close-on-content-click="false"
                transition="scale-transition"
                offset-y
                max-width="290px"
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="dateFormatted"
                    label="Date"
                    hint="MM/DD/YYYY format"
                    persistent-hint
                    prepend-icon="event"
                    @blur="date = parseDate(dateFormatted)"
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker
                  v-model="date"
                  no-title
                  @input="menu1 = false"
                ></v-date-picker>
                <v-spacer></v-spacer>
              </v-dialog>
            </v-col>
          </v-card>
        </v-col>
      </v-flex>

      <v-flex xs12 md8>
        <v-col cols="auto" xs12 md8>
          <v-flex xs12 md12>
            <v-card light>
              <v-card-title>select time</v-card-title>
              <v-divider></v-divider>

              <v-row class="mb-2">
                <v-col cols="auto" ms12 class="text-center">
                  <v-btn
                    class="ma-2"
                    large
                    color="#43C677"
                    dark
                    v-for="(item, i) in items"
                    :key="i"
                    >{{ item.time }}</v-btn
                  >
                </v-col>
              </v-row>
            </v-card>
          </v-flex>
        </v-col>
      </v-flex>

      <v-flex xs12 md8>
        <v-col cols="auto" xs12 md8>
          <v-card light>
            <v-card-title>select gofer</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text--primary">
              <div>
                <v-row align="center" class="mb-2">
                  <v-col cols="6">
                    <h4>Member</h4>
                  </v-col>
                  <v-col cols="6">
                    <v-select
                      :items="golfer"
                      label="0 golfer"
                      dense
                      solo
                    ></v-select>
                  </v-col>

                  <v-col cols="6">
                    <h4>Visitor</h4>
                  </v-col>
                  <v-col cols="6">
                    <v-select
                      :items="golfer"
                      label="0 golfer"
                      dense
                      solo
                    ></v-select>
                  </v-col>

                  <v-col cols="6">
                    <h4>Guess</h4>
                  </v-col>
                  <v-col cols="6">
                    <v-select
                      :items="golfer"
                      label="0 golfer"
                      dense
                      solo
                    ></v-select>
                  </v-col>
                </v-row>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-flex>

      <v-flex xs12 md8>
        <v-col cols="auto" xs12 md8>
          <v-card light>
            <v-card-title>Reservation Information</v-card-title>
            <v-divider></v-divider>
            <v-col cols="12" sm="6">
              <v-text-field label="Name" single-line></v-text-field>
              <v-text-field label="E-mail" single-line></v-text-field>
              <v-text-field label="phone" single-line></v-text-field>
            </v-col>
          </v-card>
        </v-col>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "pichead",

  data: (vm) => ({
    golfer: [
      "1 golfer",
      "2 golfer",
      "3 golfer",
      "4 golfer",
      "5 golfer",
      "6 golfer",
    ],
    items: [
      {
        time: "08:10",
      },
      {
        time: "08:24",
      },
      {
        time: "08:38",
      },
      {
        time: "08:52",
      },
      {
        time: "09:06",
      },
      {
        time: "09:20",
      },
      {
        time: "09:34",
      },
      {
        time: "09:48",
      },
      {
        time: "10:02",
      },
      {
        time: "10:16",
      },
      {
        time: "10:30",
      },
      {
        time: "10:44",
      },
      {
        time: "10:58",
      },
      {
        time: "11:12",
      },
    ],
    date: new Date().toISOString().substr(0, 10),
    dateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
    menu1: false,
  }),

  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },

  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
    },
  },

  methods: {
    formatDate(date) {
      if (!date) return null;

      const [year, month, day] = date.split("-");
      return `${month}/${day}/${year}`;
    },
    parseDate(date) {
      if (!date) return null;

      const [month, day, year] = date.split("/");
      return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
    },
    items: [
      {
        time: "06:00",
      },
      {
        color: "#952175",
      },
      {
        color: "#16A085",
        comment: "momo",
        name: "lplp",
      },
    ],
  },
};
</script>
