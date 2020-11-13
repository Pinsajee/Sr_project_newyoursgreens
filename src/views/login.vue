<template>
  <v-container>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <div id="login" class="main-box">
            <v-toolbar dark color="purple">
              <v-toolbar-title>Login Form</v-toolbar-title>
            </v-toolbar>
            <v-card-text>
              <v-form @submit="loginWithEmail">
                <v-text-field
                  prepend-icon="person"
                  name="login"
                  label="Login"
                  id="login"
                  type="text"
                  placeholder="Email"
                ></v-text-field>
                <v-text-field
                  prepend-icon="lock"
                  name="password"
                  label="Password"
                  id="password"
                  type="password"
                  placeholder="Password"
                ></v-text-field>
                <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn dark color="pink" type="submit" value="submit" class="btn"
                >Login</v-btn
              >
            </v-card-actions>
              </v-form>
            </v-card-text>
            
            
          </div>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
import firebase from "firebase";
export default {
  name: "Login",
  data: function() {
            return { email: "", password: "" };
        },
  methods: {
       login(e) {
            firebase
            .auth()
            .signInWithEmailAndPassword(this.email, this.password)
            .then(
                 user => {
                    this.$router.replace('Homebn');
                 },
                 err => {
                    alert(err.message)
                 });
            e.preventDefault();
       }
  }
}
</script>