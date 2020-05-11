<template>
  <v-app-bar app color="#0F7D63" dark>
    <div class="d-flex align-center">
      <v-img
        :src="require('../assets/logow.png')"
        alt="Logo"
        class="shrink mr-2"
        contain
        transition="scale-transition"
        width="50"
      />
    </div>
    <v-spacer></v-spacer>
    <span class="mr-2" >Booking</span>
      
    </v-app-bar>
</template>



<script>
  export default {
       name: "navigation",
    
      data: () => ({
    //
  })
};
</script>

<style >

</style>