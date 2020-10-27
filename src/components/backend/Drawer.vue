<template>
  <nav>
    <v-toolbar app color="#0F7D63" dark>
      <v-toolbar-title class="text-uppercase gray--text">
        <span class="font-weight-light">YourGreen</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn text color="#ffffff">
        <span>Log Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app >
      <v-list dense>
        <v-list-tile avatar>
          <v-list-tile-avatar color="white">
            <v-img
              :src="require('../../assets/logocourse.png')"
              height="70"
              contain
              class=" darken-5"
            ></v-img>
            <br>
           
           
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
            
            <v-list-item-title :to="item.route">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer color="#0F7D63" app>
      <span class="white--text">Green Valley Country Club <br> &copy; 2020 </span>
      
    </v-footer>
  </nav>
</template>

<script>
export default {
  name: "Drawer",
  props: ["drawer"],
  data() {
    return {
      items: [
        { title: "Home", icon: "home", route: "/Home" },
        { title: "Teetime", icon: "dashboard", route: "/Teetime" },
        { title: "Caddy", icon: "account_box", route: "/Caddy" },
        { title: "Member", icon: "account_box", route: "/memberinfo" },
      ],
    };
  },
};
</script>

<style></style>
