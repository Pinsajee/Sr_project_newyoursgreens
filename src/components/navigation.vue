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
        <v-spacer></v-spacer>
        {{displayName}}
       <v-btn text color="#ffffff" @click="signout" type="submit" class="btn">
        <span>Log Out</span>
        <v-icon right>exit_to_app</v-icon>
      </v-btn>
  </v-app-bar>
 
</template>

<script>
import firebase from "firebase";
export default {
    //     {
  name: "navigation",
  beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          this.$router.replace("/")
         
        }else { 
console.log(user.displayName)
          this.user = firebase.auth().currentUser;
        if (this.user) {
          this.displayName = this.user.displayName;
        }
          // console.log(user.email)
          // console.log(user.displayName)
          // console.log(user.emailVerified)
          // console.log(user.photoURL)
          
          
         
    }});
  },

  data: () => ({
   
  }),
methods: {
    signout() {
       firebase
       .auth()
       .signOut()
       .then(() => {
         this.$router.replace("/");
       });
    },
  }
};

</script>

<style></style>
