<template>
  <v-app>
    <Drawer />

    <v-container grid-list-xl text-xs-center>
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
                    @input="menu2 = false"
                    :landscape="$vuetify.breakpoint.smAndUp"
                    class="mt-4"
                   
                  ></v-date-picker>
                </v-menu> </v-col
            ></v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
      <v-layout>
        <v-flex>
          <v-col v-for="(item, i) in items" :key="i"  >
            <v-card>
              <v-card-actions>
                <v-list-item class="grow">
                  <v-list-item-content>
                    <v-list-item-title>{{ item.time }}</v-list-item-title>
                  </v-list-item-content>
                  <v-row align="center" justify="end">
                    <template>
                      <v-dialog v-model="dialog" persistent max-width="600px">
                        <template v-slot:activator="{ on, attrs }">
                          <v-btn icon v-bind="attrs" v-on="on">
                            <v-icon>mdi-heart</v-icon>
                          </v-btn>
                        </template>
                        <v-card  v-model="Booking">
                          <v-card-title>
                            <span class="headline">Booking</span>
                          </v-card-title>
                          <v-card-text>
                            <v-container >
                              <v-row>
                                 <v-col cols="12" >
                                <h2>Date:  {{ date }}</h2>
                                <h2 >time:  {{ item.selecttime }}</h2>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field v-model="firstname"
                                    label="Legal first name*"
                                    required
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6" md="4">
                                  <v-text-field v-model="lastname"
                                    label="Legal last name*"
                                    hint="example of persistent helper text"
                                    persistent-hint
                                    required
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-text-field
                                    label="Email*" v-model="email"
                                    required
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12">
                                  <v-text-field v-model="mobile"
                                    label="mobile*"
                                    type="mobile"
                                    required
                                  ></v-text-field>
                                </v-col>
                                <v-col cols="12" sm="6">
                                  <v-select v-model="golfer"
                                    :items="['1', '2', '3', '4', '5', '6']"
                                    label="Golfer"
                                    required
                                  ></v-select>
                                </v-col>
                                <v-col cols="12" sm="6" >
                                  <v-text-field v-model="admin"
                                    label="ชื่อพนักงานคนจอง"
                                    required
                                  ></v-text-field>
                                </v-col>
                              </v-row>
                            </v-container>
                            <small>*indicates required field</small>
                          </v-card-text>
                          <v-card-actions>
                            <v-spacer></v-spacer>
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="dialog = false"
                              >Close</v-btn
                            >
                            <v-btn
                              color="blue darken-1"
                              text
                              @click="dialog = false"
                              v-on:click="addbooking"
                              >Save</v-btn
                            >
                          </v-card-actions>
                        </v-card>
                      </v-dialog>
                    </template>

                    <v-btn icon>
                      <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                  </v-row>
                </v-list-item>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-flex>

        <v-flex>
          <v-card>
            <v-card-title>test</v-card-title>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<script>
import Drawer from "../backend/Drawer";
import { booking } from "../../database/databaseconfig";
export default {
  components: {
    Drawer,
  },
  data(){
    return{
    date: new Date().toISOString().substr(0, 10),
    menu2: false,
    dialog: false,
    items: [
      {
        time: "08.10",
        selecttime: "08.10"
      },
      {
        time: "08.17",
        selecttime: "08.17"
      },
      {
        time: "08.24",
        selecttime: "08.24"
      },
      {
        time: "08.24",
        selecttime: "08.24"
      },
      {
        time: "08.24",
        selecttime: "08.24"
      },
      {
        time: "08.24",
        selecttime: "08.24"
      },
      {
        time: "08.24",
        selecttime: "08.24"
      },
     
      ]
  }
},
methods: {
    addbooking() {
      booking.push({
        date: this.date,
        firstname: this.firstname,
        lastname: this.lastname,
        email: this.email,
        tel: this.mobile,
        golfers: this.golfer,
        bookedby: this.admin
      });
    }
}
};
</script>

<style></style>
