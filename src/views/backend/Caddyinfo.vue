<template>
  <v-app>
    <Drawer />
    <v-container>
      <h1>CADDY LIST</h1>

      <div>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on"
              >New Caddy</v-btn
            >
          </template>
          <v-card class="mx-auto" max-width="500" outlined col-md-6 offset-md-3>
            <v-card-text>
              <p class="display-1 text--primary">caddy information</p>
            </v-card-text>

            <v-col>
              <!--form caddy -->
              <v-form
                ref="form"
                lazy-validation
                @submit.prevent="submit"
                onsubmit="return false;"
              >
                <v-text-field
                  v-model="code"
                  :rules="codeRules"
                  :counter="3"
                  label="Code"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="firstname"
                  :rules="firstnameRules"
                  label="Firstname"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="lastname"
                  :rules="lastnameRules"
                  label="Lastname"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="nickname"
                  :rules="nicknameRules"
                  label="Nickname"
                  required
                ></v-text-field>

                <v-text-field
                  v-model="tel"
                  :rules="phoneRules"
                  :counter="10"
                  maxlength="10"
                  label="Telephone"
                  required
                ></v-text-field>
                <!-- <v-file-input
    label="File input"
    filled
    prepend-icon="mdi-camera"
          ></v-file-input>-->
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn
                    rounded
                    block
                    color="#05BC01"
                    @click="dialog = false"
                    dark
                    v-on:click="addinfo"
                    >Confirm</v-btn
                  >
                  <br />
                </v-card-actions>
              </v-form>
            </v-col>
          </v-card>
        </v-dialog>
      </div>

      <!--card-->
      <v-card>
        <v-col
          cols="12"
          sm="6"
          v-for="(infocaddy, key) in caddyArrays"
          :key="key"
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">
                {{ infocaddy.code }}
              </v-list-item-title>
              <!-- <v-text-field v-model="code" :counter="3" label="Code" required></v-text-field> -->

              <v-list-item-subtitle>
                Firstname: {{ infocaddy.firstname }}
              </v-list-item-subtitle>
              <v-list-item-subtitle>
                Lastname: {{ infocaddy.lastname }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >Nickname: {{ infocaddy.nickname }}</v-list-item-subtitle
              >
              <v-list-item-subtitle
                >Phone: {{ infocaddy.tel }}</v-list-item-subtitle
              >
            </v-list-item-content>
            <div v-if="infocaddy != editedinfo">
              <v-btn
                color="primary"
                dark
                class="ma-2"
                :to="{ name: 'formedit', params: infocaddy }"
                >Edit</v-btn
              >
              <v-btn
                color="error"
                dark
                class="ma-2"
                @click.prevent="deleteinfo(infocaddy)"
                >Delete</v-btn
              >
            </div>
            <div v-else>
              <v-btn
                color="error"
                dark
                class="ma-2"
                @click.prevent="CancelEdit()"
                >Cancel</v-btn
              >
              <v-btn
                color="primary"
                dark
                class="ma-2"
                @click.prevent="updateinfo()"
                >Update</v-btn
              >
            </div>
          </v-list-item>
        </v-col>
      </v-card>
    </v-container>
  </v-app>
</template>

<script>
import { caddy, caddyinfo } from "../../database/databaseconfig";
import Drawer from "../../components/backend/Drawer";
export default {
  components: {
    Drawer,
  },
  data() {
    return {
      editedinfo: false,
      code: "",
      firstname: "",
      lastname: "",
      nickname: "",
      tel: "",
      caddyArrays: [],
      phoneRules: [
        (v) => !!v || "phone is required",
        (v) => v.length <= 10 || "phone must be less than 10 number",
        (v) => /^\d+$/.test(v) || "This field only accept numbers",
      ],
      codeRules: [
        (v) => !!v || "code is required",
        ,
        (v) => /^\d+$/.test(v) || "This field only accept numbers",
      ],
      nicknameRules: [(v) => !!v || "nickname is required"],
      firstnameRules: [(v) => !!v || "firstname is required"],
      lastnameRules: [(v) => !!v || "lastname is required"],
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
        tel: this.tel,
      });
    },
    deleteinfo(infocaddy) {
      caddyinfo.child(infocaddy.id).remove();
    },
    CancelEdit() {},
  },

  created() {
    caddyinfo.on("child_added", (snapshot) => {
      this.caddyArrays.push({ ...snapshot.val(), id: snapshot.key });
      console.log(snapshot.key);
    });

    caddyinfo.on("child_removed", (snapshot) => {
      const deletedCaddy = this.caddyArrays.find(
        (infocaddy) => infocaddy.id == snapshot.key
      );
      const index = this.caddyArrays.indexOf(deletedCaddy);
      this.caddyArrays.splice(index, 1);
    });

    caddyinfo.on("child_changed", (snapshot) => {
      const updatedCaddyInfo = this.caddyArrays.find(
        (infocaddy) => infocaddy.id == snapshot.key
      );
      updatedCaddyInfo.caddyinfo = snapshot.val().caddyinfo;
    });
  },
};
</script>
