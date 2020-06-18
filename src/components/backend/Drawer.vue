<template>
  <nav>
    <v-toolbar app  color="#0F7D63" dark>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase gray--text">
        <span class="font-weight-light">YourGreen</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <v-btn text color="black">
        <span>Log Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
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

    <v-footer color="#0F7D63" app>
      <span class="white--text">&copy; 2020</span>
    </v-footer>
  </nav>
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
