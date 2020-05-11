<template>
  <v-container>
    <v-row dense>
      <v-col cols="7">
        <v-card color="#385F73" dark>
          <v-card-title class="headline">comment</v-card-title>

          <v-card-subtitle>name</v-card-subtitle>
        </v-card>
      </v-col>

      <v-col v-for="(item, i) in items" :key="i" cols="7">
        <v-card :color="item.color" dark>
          <div class="d-flex flex-no-wrap justify-space-between">
            <div>
              <v-card-title
                class="headline"
                v-text="item.comment"
              ></v-card-title>

              <v-card-subtitle v-text="item.name"></v-card-subtitle>
            </div>
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "testloop",
  data: () => ({
    items: [
      {
        color: "#1F7087",
        comment: "gggg",
        name: "koko",
      },
      {
        color: "#952175",
        comment: "koko",
        name: "momo",
      },
      {
        color: "#16A085",
        comment: "momo",
        name: "lplp",
      },
    ],
  }),
};
</script>
