<template>
<v-container>
<v-card  class="mx-auto"
    max-width="500"
    outlined col-md-6 offset-md-3>
   <v-card-text>
      <p class="display-1 text--primary">
        caddy information
      </p>
   </v-card-text>
  <v-col
         
          
        >
  <v-form
    ref="form"
    lazy-validation
  >
  
  <v-text-field
      v-model="code"
      :counter="3"
      label="Code"
      required
    ></v-text-field>

  <v-text-field
      v-model="firstname"
      label="Fristname"
      required
    ></v-text-field>

 <v-text-field
      v-model="lastname"
      label="Lastname"
      required
    ></v-text-field>

     <v-text-field
      v-model="nickname"
      label="nickname"
      required
    ></v-text-field>

  <v-text-field
      v-model="tel"
      :counter="10"
      label="telephone"
      required
    ></v-text-field>
    <!-- <v-file-input
    label="File input"
    filled
    prepend-icon="mdi-camera"
  ></v-file-input> -->
    
  </v-form>
   <div class="my-2">
          <v-btn rounded block color="#05BC01" dark v-on:click="addinfo">confrim</v-btn>
        </div>
  </v-col>
 
</v-card>
</v-container>
   
</template>

<script>
  import { caddy, caddyinfo } from '../database/databaseconfig' 
  export default {
    data() {
      return {
        code: "",
        firstname: "",
        lastname: "",
        nickname: "",
        tel: ""
      };
  },
  methods: {
    addinfo() {
      caddyinfo.push({
        code: this.code,
        firstname: this.firstname,
        lastname: this.lastname,
        nickname: this.nickname,
        tel: this.tel
      })

 },

  }
  }
</script>