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
                    src="../assets/golflogo.jpg"
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

      <datePicker />

      <div class="selectTime">
        <selectTime />
      </div>

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
            <v-col cols="12" sm="12">
              <v-text-field label="Name" single-line></v-text-field>
              <v-text-field label="E-mail" single-line></v-text-field>
              <v-text-field label="Phone" single-line></v-text-field>
              <v-btn
                    rounded
                    block
                    color="#05BC01"
                    dark
                    v-bind="attrs"
                    v-on="on"
                  >
                    next
                  </v-btn>
            </v-col>
          </v-card>
        </v-col>
      </v-flex>

      <v-flex xs12 md8>
        <v-col cols="auto" xs12 md8>
          <v-card light>
            <v-card-title>Reservation Details</v-card-title>
            <v-divider></v-divider>
            <v-col cols="12" sm="12">
              <v-text-field label="Date:" single-line></v-text-field>
              <v-text-field label="Time:" single-line></v-text-field>
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
                  >
                    next
                  </v-btn>
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
                        ทางสนามจะส่งผลการจองไปให้ทางไลน์ ของท่านอีกครั้งค่ะ
                      </div>
                      <br />
                    </v-card-text>
                    <v-card-action>
                      <v-btn
                        rounded
                        block
                        color="#05BC01"
                        dark
                        text
                        @click="dialog = false"
                        >Confirm</v-btn
                      >
                      <br />
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

export default {
  components: {
    selectTime,
    datePicker,
    data() {
      return {
        dialog: false,
      };
    },
  },
};
</script>
