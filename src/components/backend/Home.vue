<template>
<v-app>
  <Drawer/>
   <div>
 <v-img
              :src="require('../../assets/golflogo.jpg')"
              height="70"
              contain
              class=" darken-5"
            ></v-img>
  </div>

  

</v-app>
</template>

<script>
import Drawer from '../backend/Drawer';
export default {
 components: {
    Drawer,
  },
}
</script>

<style>

</style>