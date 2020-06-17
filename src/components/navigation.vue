<template>
<v-app>
  <v-app-bar app color="#0F7D63" darken-3>
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
    <!-- <v-toolbar-items center>
         <v-btn
         color="#0F7D63"
           v-for="item in nav"
           :key="item.icon"
           to="#"
           :title="item.title"
           flat
         >{{ item.text }}</v-btn>
        </v-toolbar-items>
       -->

    </v-app-bar>
    <v-footer fixed>
      <span>Vuetify $copy; 2020</span>
    </v-footer>
</v-app>
</template>



<script>
  export default {
       name: "navigation",
    
      data: () => ({
    //  nav: [
    //     {
    //       icon: 'home',
    //       text: 'Teetime',
    //       title: 'Back to Booling page',
    //       active: true
    //     },
    //     {
    //       icon: 'info',
    //       text: 'Caddy',
    //       title: 'About Caddy',
    //       active: false
    //     },
    //     {
    //       icon: 'assignment_turned_in',
    //       text: 'Member',
    //       title: 'member',
    //       active: false
    //     },
    //     {
    //       icon: 'email',
    //       text: 'Starter',
    //       title: 'starter',
    //       active: false
    //     }
    //   ]
  })
};
</script>

<style >

</style>