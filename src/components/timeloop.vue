<template>
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
        <v-select v-model="selecttime"
          :items="time"
          label="teetime"
          dense
          solo
        ></v-select>
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
</template>

<script>


export default {
  name: "timeloop",

  data: () => ({
   
        show: false,
      
    time: [ '08:10', '08:24',
      '08:38',
        '08:52',
        '09:06',
         '09:20',
         '09:34',
        '09:48',
         '10:02',
        '10:16',
        '10:30',
       '10:44',
        '10:58',
        '11:12',
    
    ],
  }),
};
</script>

<style>

.v-btn::before {
    color: transparent
}

.v-btn:hover {
    color:aqua;
    background: aqua;
}

</style
>
