<template>
<v-app>
    <Drawer/>
  <v-container>
    <div slot="buttons">
    </div>

    <div id="caddy">
      <v-col cols="12" sm="6" v-for="(infocaddy, key) in caddyArrays" :key="key">
        <!--card-->
        <v-card max-width="460">
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                {{
                infocaddy.code
                }}
              </v-list-item-title>
              <!-- <v-text-field v-model="code" :counter="3" label="Code" required></v-text-field> -->
              <v-list-item-subtitle>{{ infocaddy.code }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{ infocaddy.firstname }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{ infocaddy.lastname }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{ infocaddy. nickname }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{ infocaddy.tel }}</v-list-item-subtitle>
            </v-list-item-content>
            <div v-if="infocaddy!=editedinfo">
              <v-btn
                color="primary"
                dark
                class="ma-2"
                :to="{name:'formedit' ,params : infocaddy }"
              >Edit</v-btn>
              <v-btn color="error" dark class="ma-2" @click.prevent="deleteinfo(infocaddy)">Delete</v-btn>
            </div>
            <div v-else>
              <v-btn color="error" dark class="ma-2" @click.prevent="CancelEdit()">Cancel</v-btn>
              <v-btn color="primary" dark class="ma-2" @click.prevent="updateinfo()">Update</v-btn>
            </div>
          </v-list-item>
        </v-card>
      </v-col>
    </div>

    <br />

    <v-card class="mx-auto" max-width="500" outlined col-md-6 offset-md-3>
      <v-card-text>
        <p class="display-1 text--primary">caddy information</p>
      </v-card-text>

      <v-col>
        <!--form caddy -->

        <v-form ref="form" lazy-validation @submit.prevent="submit" onsubmit="return false;">
          <v-text-field v-model="code" :counter="3" label="Code" required></v-text-field>

          <v-text-field v-model="firstname" label="Firstname" required></v-text-field>

          <v-text-field v-model="lastname" label="Lastname" required></v-text-field>

          <v-text-field v-model="nickname" label="Nickname" required></v-text-field>

          <v-text-field v-model="tel" :counter="10" label="Telephone" required></v-text-field>
          <!-- <v-file-input
    label="File input"
    filled
    prepend-icon="mdi-camera"
          ></v-file-input>-->

          <div class="my-2">
            <v-btn rounded block color="#05BC01" dark v-on:click="addinfo">Confirm</v-btn>

            <v-icon dark>refresh</v-icon>
          </div>
        </v-form>
      </v-col>
    </v-card>
  </v-container>
  </v-app>
</template>

<script>
import { caddy, caddyinfo } from "../../database/databaseconfig";
import Drawer from '../../components/backend/Drawer';
export default {
     components: {
    Drawer,
  },
  data() {
    return {
      editedinfo : false,
      code: "",
      firstname: "",
      lastname: "",
      nickname: "",
      tel: "",
      caddyArrays: []
      // editedCode: null,
      // editedFirstname: null,
      // editedLastname: null,
      // editedNickname: null,
      // editedTel: null
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
      });
    },
    deleteinfo(infocaddy) {
      caddyinfo.child(infocaddy.id).remove();
    },
    CancelEdit() {}
  },
  created() {
    caddyinfo.on("child_added", snapshot => {
      this.caddyArrays.push({ ...snapshot.val(), id: snapshot.key });
      console.log(snapshot.key);
    });

    caddyinfo.on("child_removed", snapshot => {
      const deletedCaddy = this.caddyArrays.find(
        infocaddy => infocaddy.id == snapshot.key
      );
      const index = this.caddyArrays.indexOf(deletedCaddy);
      this.caddyArrays.splice(index, 1);
    });

    caddyinfo.on("child_changed", snapshot => {
      const updatedCaddyInfo = this.caddyArrays.find(
        infocaddy => infocaddy.id == snapshot.key
      );
      updatedCaddyInfo.caddyinfo = snapshot.val().caddyinfo;
    });
  }
};
</script>