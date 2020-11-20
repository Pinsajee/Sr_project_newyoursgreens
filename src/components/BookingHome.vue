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
      <v-flex xs12 md8>
        <v-col cols="auto" xs12 md8>
          <v-card light>
            <v-card-text>
              <v-row align="center">
                <v-col class="display-3" cols="5" xs12>
                  <v-img
                    src="../assets/logocourse.png"
                    height="180px"
                    contain
                  ></v-img>
                </v-col>
                <v-col class="display-3" cols="7" xs12>
                  <v-card-title>Green Valley Country Club Bangkok</v-card-title>

                  <v-card-subtitle
                    >สนามกอล์ฟกรีนวัลเล่ คันทรีคลับ บางนา</v-card-subtitle
                  >
                </v-col>
              </v-row>
            </v-card-text>
          </v-card>
        </v-col>
      </v-flex>

      <!-- <datePicker /> -->
      <v-flex xs12 md8>
        <v-col cols="auto" xs12 md8>
          <v-hover v-slot:default="{ hover }" open-delay="200">
            <v-card light :elevation="hover ? 12 : 2">
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
                      :disabledDates="disabledDates"
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
          </v-hover>
        </v-col>
      </v-flex>
      <!-- <datePicker /> -->

      <!-- <selectTime /> -->
      <v-flex xs12 md8>
        <v-col cols="auto" xs12 md8>
          <v-card light>
            <v-card-title>select time</v-card-title>

            <v-col cols="auto" ms12 class="text-center">
              <v-row align="center" class="mb-2">
                <v-col cols="6">
                  <v-subheader>Teetime</v-subheader>
                </v-col>
                <v-col class="d-flex" cols="6" sm="6">
                  <v-select
                    v-model="time"
                    :items="times"
                    label="teetime"
                    dense
                    solo
                  ></v-select>
                </v-col>
              </v-row>
            </v-col>
          </v-card>
        </v-col>
      </v-flex>
      <!-- <selectTime /> -->

      <v-flex xs12 md8>
        <v-col cols="auto" xs12 md8>
          <v-card light>
            <v-card-title>select gofer</v-card-title>
            <v-divider></v-divider>
            <v-card-text class="text--primary">
              <div>
                <v-row align="center" class="mb-2">
                  <v-col cols="6">
                    <h4>Golfer</h4>
                  </v-col>
                  <v-col cols="6">
                    <v-select
                      v-model="golfers"
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
            <v-col cols="12" sm="12">
              <v-text-field
                v-model="firstname"
                label="Name"
                single-line
                required
                :rules="nameRules"
              ></v-text-field>
              <v-text-field
                v-model="email"
                :rules="emailRules"
                label="E-mail"
                single-line
                required
              ></v-text-field>
              <v-text-field
                v-model="mobile"
                :rules="phoneRules"
                label="Phone"
                single-line
                required
                :counter="10"
                maxlength="10"
              ></v-text-field>
            </v-col>
          </v-card>
        </v-col>
      </v-flex>

      <v-flex xs12 md8>
        <v-col cols="auto" xs12 md8>
          <v-card light>
            <v-card-title>Your Booking</v-card-title>
            <v-divider></v-divider>
            <v-col cols="12" sm="12">
              <div class="mt-5 text-left">
                Date: {{ date }}
                <br />
                <br />
                Time: {{ time }}
                <br />
                <br />
                Name: {{ firstname }}
                <br />
                <br />
                Golfers: {{ golfers }}
                <br />
                <br />
                E-mail: {{ email }}
                <br />
                <br />
                Phone: {{ mobile }}
                <br />
                <br />
              </div>

              <v-row justify="center">
                <v-dialog v-model="dialog" persistent width="400">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      rounded
                      block
                      color="#05BC01"
                      dark
                      v-bind="attrs"
                      v-on="on"
                      >next</v-btn
                    >
                  </template>

                  <div class="text-center">
                    <v-card class="mx-auto" max-width="400">
                      <v-avatar size="125" tile>
                        <v-img
                          src="../assets/icon/confirm.png"
                          height="100px"
                          contain
                        />
                      </v-avatar>
                      <v-card-text class="text--primary">
                        <div>
                          Green Valley Country Club Bangkok
                          ได้รับข้อมูลการจองเรียบร้อยแล้วค่ะ
                        </div>
                      </v-card-text>
                      <v-card-action>
                        <v-spacer></v-spacer>
                        <v-btn
                          v-on:click="addbooking"
                          text
                          color="primary"
                          @click="dialog = false"
                          >Submit</v-btn
                        >
                      </v-card-action>
                    </v-card>
                  </div>
                </v-dialog>
              </v-row>
            </v-col>
          </v-card>
        </v-col>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import selectTime from "@/components/timeloop.vue";
import datePicker from "@/components/DatePicker.vue";
import { booking } from "../database/databaseconfig";
import firebase from "firebase";

export default {
  data() {
    return {
      name: "userhome",
      name: "timeloop",
      dialog: false,

      show: false,

      times: [
        "08:10",
        "08:24",
        "08:38",
        "08:52",
        "09:06",
        "09:20",
        "09:34",
        "09:48",
        "10:02",
        "10:16",
        "10:30",
        "10:44",
        "10:58",
        "11:12",
      ],

      golfer: [
        "1 golfer",
        "2 golfer",
        "3 golfer",
        "4 golfer",
        "5 golfer",
        "6 golfer",
      ],
      date: null,
      time: "",
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      golfers: null,
      bookingArray: [],
      nameRules: [(v) => !!v || "Name is required"],
      emailRules: [
        (v) => !!v || "E-mail is required",
        (v) => /.+@.+/.test(v) || "E-mail must be valid",
      ],
      phoneRules: [
        (v) => !!v || "phone is required",
        (v) => v.length <= 10 || "phone must be less than 10 number",
        (v) => /^\d+$/.test(v) || "This field only accept numbers",
      ],
     
    };
  },beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          this.$router.replace("/")
          alert("You don't have a permission")
        }
    });
  },
  components: {
    // selectTime,
    datePicker,
  },
 
  methods: {
    signout() {
       firebase
       .auth()
       .signOut()
       .then(() => {
         this.$router.replace("/adminlogin");
       });
    },
    addbooking() {
      console.log({ date: this.date });
      console.log({ time: this.time });
      booking.push({
        date: this.date,
        time: this.time,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        tel: this.mobile,
        golfers: this.golfers,
        bookedby: "Customer",
      });
    },
    checkdata() {
      usersRef.once("value", function(snapshot) {
        if (snapshot.hasChild(theDataToAdd)) {
          alert("exists");
        }
      });
    },
    created() {
      booking.on("child_added", (snapshot) => {
        this.bookingArray.push({ ...snapshot.val(), id: snapshot.key });
        console.log(snapshot.key);
      });
    },

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
  },
  computed: {
    computedDateFormatted() {
      return this.formatDate(this.date);
    },
  },
  

  watch: {
    date(val) {
      this.dateFormatted = this.formatDate(this.date);
      this.disabledDates = new Date(Date.now() - 8640000);
    },
    dialog() {
      this.$refs.form.reset();
    },
  },
};
</script>
