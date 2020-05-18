<<template>
<v-container>
  <v-flex xs12 md8>
    <v-col cols="auto" xs12 md8>
      <v-card light>
        <v-card-subtitle>select time</v-card-subtitle>
        <v-divider></v-divider>
        <v-card-subtitle>teetime</v-card-subtitle>
        
        <v-col
          class="text-center"
          sm="4"
          v-for="(item, i) in items"
          :key="i"
        >
          <div class="my-2">
            <v-btn small>{{item.time}}</v-btn>
          </div>
        </v-col>
        
      </v-card>
      
    </v-col>
  </v-flex>
  </v-container>
</template>

<script>
export default {
  name: "timeloop",

  data: () => ({
    items: [
      {
        time: "06:00",
      },
      {
        time: "06:07",
      },
      {
        time: "06:14",
      },
    ],
  }),
};
</script>

<style></style>
