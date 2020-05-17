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
            <v-divider></v-divider>
            <v-card-subtitle>date</v-card-subtitle>
          </v-card>
        </v-col>
      </v-flex>

      <v-flex xs12 md8>
        <v-col cols="auto" xs12 md8>
          <v-card light>
            <v-card-subtitle>select date</v-card-subtitle>
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

       
    </v-layout>
  </v-container>
</template>



<script>
export default {
  name: "pichead",

  data: (vm) => ({
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
