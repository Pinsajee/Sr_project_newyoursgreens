<template>
<v-app>
    <Drawer/>
    <v-container>
     <v-flex xs12 md8>
    <v-col cols="auto" xs12 md8>
       <v-hover
        v-slot:default="{ hover }"
        open-delay="200"
      >
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
              <v-select v-model="selecttime" :items="time" label="teetime" dense solo></v-select>
            </v-col>
            
            <!-- <v-btn
            @click="show = !show"
              v-model="gettime"
              class="ma-2"
              large
              color="#43C677"
              dark
              v-for="(item, i) in items"
              :key="i"
              >{{ item.time }}
            </v-btn> -->
          </v-row>
        </v-col>
      </v-card>
    </v-col>
  </v-flex>
    </v-container>
</v-app>
  
</template>

<script>
import Drawer from '../backend/Drawer';
export default {
components:{
    Drawer,
}
}
</script>

<style>

</style>