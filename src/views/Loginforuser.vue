<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 md8>
         <h3>Green Valley Country Club Bangkok</h3>
        <v-col cols="12">
        <v-card class="elevation-12">
          <div id="login" class="main-box">
            <v-toolbar dark color="purple">
              <v-toolbar-title>Login with facebook</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-img
                src="../assets/facebooklogo.png"
                height="120px"
                contain
              ></v-img>
<br>
              <div class="text-center">
                <v-btn
                  @click="socialFacecbookLogin"
                  rounded
                  color="primary"
                  dark
                >
                  Login
                </v-btn>
              </div>
            </v-card-text>
          </div>
        </v-card>
        </v-col>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import firebase from "firebase";

export default {
  name: "userlogin",
  data() {
    return {
      form: {
        email: "",
        password: "",
      },
      error: null,
    };
  },
  methods: {
    socialFacecbookLogin: function() {
      const provide = new firebase.auth.FacebookAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provide)
        // singin redairec 
  //       .signInWithRedirect(provide)
  //       auth.getRedirectResult().then(function(result) {
  //         if (result.credential) {
  //            var token = result.credential.accessToken;}
  //             var user = result.user;
  //              this.$router.replace({ name: "bookinguser" });
  //             }).catch(function(error) {
  //               var errorCode = error.code;
  // var errorMessage = error.message;
  // var email = error.email;
  // var credential = error.credential;
  // });
        .then((result) => {
          this.$router.replace({ name: "bookinguser" });
          // create user in db
          let obj = {
            facebook_id: result.additionalUserInfo.profile.id,
            fullname: result.additionalUserInfo.profile.name,
            email: result.additionalUserInfo.profile.email,
            profile_image: result.user.photoURL + "?height=500",
            user_type_id: 1,
          };
          console.log(obj);
        })
        .catch((err) => {
          alert("Oops. " + err.message);
        });
    },
  },
};

</script>
