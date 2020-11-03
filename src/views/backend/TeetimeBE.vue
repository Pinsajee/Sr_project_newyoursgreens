<template>
  <div class="teetime">
    <Drawer />

    <v-container class="my-5">
      <h1>Teetime</h1>
      <v-layout row wrap>
        <v-flex>
          <v-card>
            <v-card-title
              ><v-col cols="12" sm="6" md="4">
                <v-menu
                  v-model="menu2"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="date"
                      label="Date select"
                      prepend-icon="event"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker
                    v-model="date"
                    @input="menu2 = fadatelse"
                    :landscape="$vuetify.breakpoint.smAndUp"
                    class="mt-4"
                  ></v-date-picker>
                </v-menu> </v-col
            ></v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
      <br />

      <v-layout row>
        <v-flex>
          {{ bookingperday }}
          <v-data-table
            :headers="headers"
            :items="bookingperday"
            class="elevation-1"
          >
            <template v-slot:top>
              <v-toolbar flat color="white">
                <v-toolbar-title>Teetime</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-dialog v-model="dialog" max-width="500px">
                  <!-- <template v-slot:activator="{ on, attrs }">
                    <v-btn
                      color="primary"
                      dark
                      class="mb-2"
                      v-bind="attrs"
                      v-on="on"
                      >New Item</v-btn
                    >
                  </template> -->
                  <v-card>
                    <v-card-title>
                      <span class="headline">Booking</span>
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row>
                          <v-col cols="12" sm="6" md="12">
                            <div class="text--primary">
                              Date: {{ date }}<br />
                              <v-text v-model="editedItem.time"
                                >Time: {{ editedItem.time }}</v-text
                              >
                            </div>
                          </v-col>

                          <v-col cols="12" sm="6" md="6">
                            <v-text-field
                              v-model="editedItem.firstname"
                              label="firstname"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field
                              v-model="editedItem.lastname"
                              label="lastname"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="12">
                            <v-text-field
                              v-model="editedItem.email"
                              label="email"
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="12">
                            <v-text-field
                              v-model="editedItem.mobile"
                              label="mobile"
                              required
                            ></v-text-field>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-select
                              v-model="editedItem.golfer"
                              :items="['1', '2', '3', '4', '5', '6']"
                              label="golfer"
                              required
                            ></v-select>
                          </v-col>
                          <v-col cols="12" sm="6" md="6">
                            <v-text-field
                              v-model="editedItem.admin"
                              label="admin"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="close"
                        >Cancel</v-btn
                      >
                      <v-btn
                        color="blue darken-1"
                        text
                        @click="save"
                        v-on:click="addbooking"
                        >Save</v-btn
                      >
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="editItem(item)">
                mdi-pencil
              </v-icon>
            </template>
            <template v-slot:no-data>
              <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
          </v-data-table>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import Drawer from "../../components/backend/Drawer";
import { booking } from "../../database/databaseconfig";
export default {
  components: {
    Drawer,
  },
  data() {
    return {
      bookingArrays: [],
      bookingperday: [],
      date: new Date().toISOString().substr(0, 10),
      menu2: false,
      dialog: false,
      headers: [
        {
          text: "Time",
          align: "start",
          sortable: false,
          value: "time",
        },
        { text: "reservation info", value: "firstname" },
        { text: "golfer", value: "golfer" },
        { text: "Save/Edit Booking", value: "actions", sortable: false },
      ],
      teetime: [],
      editedIndex: -1,
      editedItem: {
        time: "",
        date: "",
        firstname: "",
        lastname: "",
        Email: "",
        mobile: "",
        golfer: "",
        admin: "",
        bookingArrays: [],
      },
      defaultItem: {
        time: "",
        firstname: "",
        lastname: "",
        Email: "",
        mobile: "",
        golfer: "",
        admin: "",
      },
    };
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    date: {
      handler: function (val, oldCal) {
        this.querydata(val);
      },
    },
  },

  created() {
    this.initialize();
    booking.on("child_added", (snapshot) => {
      this.bookingArrays.push({ ...snapshot.val(), id: snapshot.key });
      console.log(this.bookingArrays);
    });
  },

  methods: {
    async querydata(date) {
      await booking
        .orderByChild("date")
        .equalTo(date)
        .once("value", (snapshot) => {
          
          console.log("=================");
          let data = snapshot.val()
          for (const key in data) {
            // console.log(data[key])
            this.bookingperday.push(data[key] );
          }
          console.log(this.bookingperday);
        });
    },
    addbooking() {
      {
        booking.push({
          date: this.date,
          time: this.editedItem.time,
          firstname: this.editedItem.firstname,
          lastname: this.editedItem.lastname,
          email: this.editedItem.email,
          tel: this.editedItem.mobile,
          golfers: this.editedItem.golfer,
          bookedby: this.editedItem.admin,
        });
      }
    },
    initialize() {
      this.teetime = [
        {
          time: "08.10",
          firstname: "",
          lastname: "",
          Email: "",
          mobile: "",
          golfer: "",
          admin: "",
        },
        {
          time: "08.17",
          firstname: "",
          lastname: "",
          Email: "",
          mobile: "",
          golfer: "",
          admin: "",
        },
        {
          time: "08.24",
          firstname: "",
          lastname: "",
          Email: "",
          mobile: "",
          golfer: "",
          admin: "",
        },
        {
          time: "08.31",
          firstname: "",
          lastname: "",
          Email: "",
          mobile: "",
          golfer: "",
          admin: "",
        },
        {
          time: "08.38",
          firstname: "",
          lastname: "",
          Email: "",
          mobile: "",
          golfer: "",
          admin: "",
        },
        {
          time: "08.45",
          firstname: "",
          lastname: "",
          Email: "",
          mobile: "",
          golfer: "",
          admin: "",
        },
        {
          time: "08.52",
          firstname: "",
          lastname: "",
          Email: "",
          mobile: "",
          golfer: "",
          admin: "",
        },
        {
          time: "08.59",
          firstname: "",
          lastname: "",
          Email: "",
          mobile: "",
          golfer: "",
          admin: "",
        },
        {
          time: "09.06",
          firstname: "",
          lastname: "",
          Email: "",
          mobile: "",
          golfer: "",
          admin: "",
        },
        {
          time: "09.13",
          firstname: "",
          lastname: "",
          Email: "",
          mobile: "",
          golfer: "",
          admin: "",
        },
        {
          time: "09.20",
          firstname: "",
          lastname: "",
          Email: "",
          mobile: "",
          golfer: "",
          admin: "",
        },
        {
          time: "09.27",
          firstname: "",
          lastname: "",
          Email: "",
          mobile: "",
          golfer: "",
          admin: "",
        },
        {
          time: "09.34",
          firstname: "",
          lastname: "",
          Email: "",
          mobile: "",
          golfer: "",
          admin: "",
        },
        {
          time: "09.41",
          firstname: "",
          lastname: "",
          Email: "",
          mobile: "",
          golfer: "",
          admin: "",
        },
        {
          time: "09.48",
          firstname: "",
          lastname: "",
          Email: "",
          mobile: "",
          golfer: "",
          admin: "",
        },
        {
          time: "09.55",
          firstname: "",
          lastname: "",
          Email: "",
          mobile: "",
          golfer: "",
          admin: "",
        },
        {
          time: "10.02",
          firstname: "",
          lastname: "",
          Email: "",
          mobile: "",
          golfer: "",
          admin: "",
        },
        {
          time: "10.09",
          firstname: "",
          lastname: "",
          Email: "",
          mobile: "",
          golfer: "",
          admin: "",
        },
        {
          time: "10.16",
          firstname: "",
          lastname: "",
          Email: "",
          mobile: "",
          golfer: "",
          admin: "",
        },
        {
          time: "10.23",
          firstname: "",
          lastname: "",
          Email: "",
          mobile: "",
          golfer: "",
          admin: "",
        },
        {
          time: "10.30",
          firstname: "",
          lastname: "",
          Email: "",
          mobile: "",
          golfer: "",
          admin: "",
        },
        {
          time: "10.37",
          firstname: "",
          lastname: "",
          Email: "",
          mobile: "",
          golfer: "",
          admin: "",
        },
        {
          time: "10.44",
          firstname: "",
          lastname: "",
          Email: "",
          mobile: "",
          golfer: "",
          admin: "",
        },
        {
          time: "10.51",
          firstname: "",
          lastname: "",
          Email: "",
          mobile: "",
          golfer: "",
          admin: "",
        },
        {
          time: "10.58",
          firstname: "",
          lastname: "",
          Email: "",
          mobile: "",
          golfer: "",
          admin: "",
        },
      ];
    },

    editItem(item) {
      this.editedIndex = this.teetime.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    // deleteItem(item) {
    //   const index = this.teetime.indexOf(item);
    //   confirm("Are you sure you want to delete this item?") &&
    //     this.teetime.splice(index, 1);
    // },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.teetime[this.editedIndex], this.editedItem);
      } else {
        this.teetime.push(this.editedItem);
      }
      this.close();
    },
  },
};
</script>
