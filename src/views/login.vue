<template>
  <v-container  fluid fill-height>
>
    
    <v-layout align-center justify-center>
      
      <v-flex xs12 sm8 md4>
        <h1>Green Valley Country Club Bangkok</h1>
        <v-col cols="12">
        <v-card class="elevation-5">
          <div id="login" class="main-box">
            <v-toolbar dark color="#05AE62">
              <v-toolbar-title>Login </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
                <v-form>
                  <v-text-field
                    prepend-icon="person"
                    name="login"
                    label="Login"
                    id="login"
                    type="text"
                    placeholder="Email"
                    v-model="form.email"
                  ></v-text-field>
                  <v-text-field
                    prepend-icon="lock"
                    name="password"
                    label="Password"
                    id="password"
                    type="password"
                    placeholder="Password"
                    v-model="form.password"
                  ></v-text-field>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      dark
                      color="#05AE62"
                      type="button"
                      value="submit"
                      class="btn"
                      @click="loginWithEmail"
                      >Login</v-btn
                    >
                  </v-card-actions>
                </v-form>
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
    loginWithEmail() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((data) => {
                    console.log(`====> On Data : ${this.data}`)
          this.$router.replace({ name: "admindrawer" });
        })
        .catch((err) => {
          console.log(`====> Error : ${this.error}`)
          this.error = err.message;
        });
    },
  },
};
</script>
