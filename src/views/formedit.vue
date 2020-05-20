<template>
  <v-container>
    <div id="comment">
      <v-card class="mx-auto" max-width="500" outlined col-md-6 offset-md-3>
        <v-card-text>
          <b class="display-1 text--primary">Edit caddy information</b>
        </v-card-text>

        <v-col>
          <!--form caddy -->

          <v-form ref="form" lazy-validation @submit.prevent="submit" onsubmit="return false;">
            <v-text-field v-model="form.code" :counter="3" label="Code" required></v-text-field>

            <v-text-field v-model.trim="form.firstname" name="firstname" label="Fristname" required></v-text-field>

            <v-text-field v-model.trim="form.lastname" label="Lastname" required></v-text-field>

            <v-text-field v-model="form.nickname" label="nickname" required></v-text-field>

            <v-text-field v-model="form.tel" :counter="10" label="telephone" required></v-text-field>

            <div class="my-2">
              <v-btn rounded block color="#4F9EFF" dark v-on:click="onUpdate">Save</v-btn>
              <br>
              <v-btn rounded block color="#FFBD17" dark v-on:click="onCancel">Cancel</v-btn>

              <v-icon dark>refresh</v-icon>
            </div>
          </v-form>
        </v-col>
      </v-card>
    </div>
  </v-container>
</template>

<script>
import { caddy, caddyinfo } from "../database/databaseconfig";
export default {
  data() {
    return {
      form: {
        code: "",
        firstname: "",
        lastname: "",
        nickname: "",
        tel: ""
      }
    };
  },
  mounted() {
    this.initialUpdateItem();
  },
  methods: {
    initialUpdateItem() {
      const data = this.$route.params;
      this.form = data;
 
    },
    onUpdate() {
      console.log(this.form);
      caddyinfo
        .child(this.form.id)
        .update({
          code: this.form.code,
          firstname: this.form.firstname,
          lastname: this.form.lastname,
          nickname: this.form.nickname,
          tel: this.form.tel
        })
        .then(res => {
          this.$router.push({ name: "caddyinfo" });
        })
        .catch(err => {
          console(err);
        });
    },onCancel(){
      this.$router.push({ name: "caddyinfo" });
    }
  }
};
</script>