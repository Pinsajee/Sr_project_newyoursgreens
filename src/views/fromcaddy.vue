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
    v-model="valid"
    lazy-validation
  >
  
  <v-text-field
      v-model="code"
      :counter="3"
      :rules="codeRules"
      label="Code"
      required
    ></v-text-field>

  <v-text-field
      v-model="fristname"
      :rules="FnameRules"
      label="Fristname"
      required
    ></v-text-field>

 <v-text-field
      v-model="Lastname"
      :rules="LnameRules"
      label="Lastname"
      required
    ></v-text-field>

     <v-text-field
      v-model="nickname"
      :rules="NInameRules"
      label="nickname"
      required
    ></v-text-field>

  <v-text-field
      v-model="tel"
      :counter="10"
      :rules="telRules"
      label="telephone"
      required
    ></v-text-field>
    <v-file-input
    label="File input"
    filled
    prepend-icon="mdi-camera"
  ></v-file-input>
    
  </v-form>
   <div class="my-2">
          <v-btn rounded block color="#05BC01" dark v-on:click="addinfo">confrim</v-btn>
        </div>
  </v-col>
 
</v-card>
</v-container>
   
</template>

<script>
  export default {
    data: () => ({
      valid: true,
        code: '',
      codeRules: [
        v => !!v || 'code is required',
        v => (v && v.length <= 3) || 'Name must be less than 3 nummeric',
      ],
      fristname: '',
      FnameRules: [
        v => !!v || 'Name is required'
      ],
        Lastname: '',
      LnameRules: [
        v => !!v || 'Name is required'
      ],
        nickname: '',
      NInameRules: [
        v => !!v || 'Name is required'
      ],
         tel: '',
      telRules: [
        v => !!v || 'code is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 nummeric',
      ],
     
    }),

    methods: {
      validate () {
        this.$refs.form.validate()
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
  }
</script>