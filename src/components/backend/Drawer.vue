<template>
  <nav>
    <v-toolbar app color="#0F7D63" dark>
      <v-toolbar-title class="text-uppercase gray--text">
        <span class="font-weight-light">YourGreen</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>
      <span>{{ email }}</span>
      <v-btn text color="#ffffff" @click="signout" type="submit" class="btn">
        <span>Log Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app>
      <v-list dense>
        <v-list-tile avatar>
          <v-list-tile-avatar color="white">
            <v-img
              :src="require('../../assets/logocourse.png')"
              height="70"
              contain
              class=" darken-5"
            ></v-img>
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
            <v-list-item-title :to="item.route">{{
              item.title
            }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-footer color="#0F7D63" app>
      <span class="white--text"
        >
        <strong>Green Valley Country Club </strong>
        &copy;  {{ new Date().getFullYear() }}
      </span>
    </v-footer>
  </nav>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Drawer",
  props: ["drawer"],
  data() {
    return {
      items: [
        { title: "Home", icon: "home", route: "/admin/home" },
        { title: "Teetime", icon: "dashboard", route: "/admin/Teetime" },
        { title: "Caddy", icon: "account_box", route: "/admin/Caddyinfo" },
        { title: "Member", icon: "account_box", route: "/admin/memberinfo" },
      ],
    };
  },
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
      if (!user) {
        this.$router.replace("/adminlogin");
      } else {
        console.log(user.email);
        this.user = firebase.auth().currentUser;
        if (this.user) {
          this.email = this.user.email;
        }
      }
    });
  },
  // },beforeCreate() {
  //   firebase.auth().onAuthStateChanged((user) => {
  //       if (!user) {
  //         this.$router.replace("/adminlogin")
  //         alert("You don't have a permission")
  //       }else {
  //   //       console.log(user.email)
  //   //       console.log(user.displayName)
  //   //       console.log(user.emailVerified)
  //   //       console.log(user.photoURL)

  //   //       var displayName = user.displayName;
  //   //      var email = user.email;
  //   // var emailVerified = user.emailVerified;
  //   // var photoURL = user.photoURL;
  //   // var isAnonymous = user.isAnonymous;
  //   // var uid = user.uid;
  //   // var providerData = user.providerData;
  //   }});
  // },
  //   getUsername(user) {
  //  this.getUsername(user.email)
  // },

  methods: {
    signout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.replace("/adminlogin");
        });
    },
  },
};
</script>

<style></style>
