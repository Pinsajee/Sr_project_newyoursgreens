<<template>
  <v-flex xs12 md8>
    <v-col cols="auto" xs12 md8>
      <v-card light>
        <v-card-title>select time</v-card-title>
        <v-divider></v-divider>
 
        <v-row class="mb-2">
          <v-col cols="auto" ms12 class="text-center">
            
        
            <v-btn
            @click="show = !show"
              v-model="gettime"
              class="ma-2"
              large
              color="#43C677"
              dark
              v-for="(item, i) in items"
              :key="i"
              >{{ item.time }}
            </v-btn>

          </v-col>
        </v-row>
        
      </v-card>
    </v-col>
  </v-flex>
</template>

<script>


export default {
  name: "timeloop",

  data: () => ({
   
        show: false,
      
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
