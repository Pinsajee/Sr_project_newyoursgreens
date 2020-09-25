<template>
  <v-app>
    <Drawer />
    <div>
      <v-img
        :src="require('../../assets/AfirstPage_01.png')"
        height=""
        contain
        class=" darken-5"
      ></v-img>
    </div>
  </v-app>
</template>

<script>
import Drawer from "../../components/backend/Drawer";
export default {
  components: {
    Drawer,
  },
};
</script>

<style></style>
