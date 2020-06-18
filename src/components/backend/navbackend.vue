<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-tile avatar>
          <v-list-tile-avatar color="white">
            <v-img
              :src="require('../../assets/golflogo.jpg')"
              height="70"
              contain
              class=" darken-5"
            ></v-img>
            <br />
            <h4>Green Valley Country Club</h4>
            <br />
          </v-list-tile-avatar>
        </v-list-tile>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.route"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    
     <v-app-bar app color="#0F7D63" dark>
       <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
    <div class="d-flex align-center">
      <v-img
        :src="require('../../assets/logow.png')"
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


   
    <v-footer color="#0F7D63" app>
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </v-app>
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
