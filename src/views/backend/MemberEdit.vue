<template>
  <v-container>
    <div id="editmemberinfo">
      <v-card class="mx-auto" max-width="500" outlined col-md-6 offset-md-3>
        <v-card-text>
          <b class="display-1 text--primary">Edit member information</b>
        </v-card-text>

        <v-col>
          <!--form member -->

          <v-form ref="form" lazy-validation @submit.prevent="submit" onsubmit="return false;">
            <v-text-field v-model="form.number" label="Number" required></v-text-field>

            <v-text-field v-model.trim="form.firstname" name="Firstname" label="Firstname" required></v-text-field>

            <v-text-field v-model.trim="form.lastname" label="Lastname" required></v-text-field>

            <v-text-field v-model="form.address" label="Address" required></v-text-field>

            <v-text-field v-model="form.tel" :counter="10" label="Telephone" required></v-text-field>

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
import { members } from "../../database/databaseconfig";
export default {
  
  data() {
    return {
      form: {
        number: "",
        firstname: "",
        lastname: "",
        address: "",
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
      members
        .child(this.form.id)
        .update({
          number: this.form.number,
          firstname: this.form.firstname,
          lastname: this.form.lastname,
          address: this.form.address,
          tel: this.form.tel
        })
        .then(res => {
          this.$router.push({ name: "memberinfo" });
        })
        .catch(err => {
          console(err);
        });
    },onCancel(){
      this.$router.push({ name: "memberinfo" });
    }
  }
};
</script>