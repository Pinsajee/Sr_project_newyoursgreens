<template>
  <div class="nav">
    <navigation />

    <v-carousel
      cycle
      height="200"
      hide-delimiter-background
      show-arrows-on-hover
    >
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <div>about
      <h1>Green Valley Country Club Bangkok</h1>
    </div>
    Gallery Fee
  </div>
</template>

<script>
import navigation from "@/components/navigation.vue";
export default {
  name: "courseinfo",
  components: {
    navigation,
  },
  data() {
    return {
      items: [
        {
          src: '/src/assets/about_1.JPG'
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
        },
        {
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
        },
      ],
    };
  },
};
</script>

<style></style>
