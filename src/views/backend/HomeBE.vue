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
import firebase from "firebase";
export default {
  components: {
    Drawer,
  },
  name: "Homebn",
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          this.$router.replace("/adminlogin")
         
        }else {
        console.log(user.email);
        this.user = firebase.auth().currentUser;
        if (this.user) {
          this.email = this.user.email;
        }
      }
    });
  },
  methods: {
    signout() {
       firebase
       .auth()
       .signOut()
       .then(() => {
         this.$router.replace("/adminlogin");
       });
    },
  }}
</script>

<style></style>
