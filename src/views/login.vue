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
                      color="pink"
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
          this.$router.replace({ name: "Homebn" });
        })
        .catch((err) => {
          console.log(`====> Error : ${this.error}`)
          this.error = err.message;
        });
    },
  },
};
</script>
