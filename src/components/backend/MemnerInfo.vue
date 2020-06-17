<template>

  <v-navigation-drawer id="app-drawer" class=" lighten-1"  permanent>
    <v-list>
            <v-list-tile avatar>
              <v-list-tile-avatar color="white">
                <v-img  
                :src="require('../../assets/golflogo.jpg')"
                 height="70" 
                 contain 
                  class=" darken-5"></v-img>
                  <br>
                  <h4  >Green Valley Country Club </h4>
                  <br>
              </v-list-tile-avatar>
            </v-list-tile>
    
      
      <v-list-item v-for="item in items" :key="item.title" :to="item.route" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <template v-slot:append>
      <div class="pa-2">
        <v-btn block>Logout</v-btn>
      </div>
    </template>
  </v-navigation-drawer>


</template>

<script>
export default {
  name: "Drawer",
   props: ['drawer'],
  data() {
    return {
      items: [
        { title: "Home", 
          icon: "dashboard",
          route: '/Home',},
        { title: "Teetime", icon: "dashboard",  route: '/Teetime'},
        { title: "Caddy", icon: "account_box",route: '/Caddy' },
        { title: "Member", icon: "gavel" ,route: '/memberinfo'},
      ],
    };
  },
};
</script>

<style></style>
