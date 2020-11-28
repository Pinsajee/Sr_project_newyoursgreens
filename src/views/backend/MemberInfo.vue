<template>
<v-app>
<Drawer/>
  <v-container>
   <h1>MEMBER LIST</h1>

 <div>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on"
              >New member</v-btn
            >
          </template>
          <v-card class="mx-auto" max-width="500" outlined col-md-6 offset-md-3>
            <v-card-text>
              <p class="display-1 text--primary">member information</p>
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
                  v-model="number"
                  
                  
                  label="number"
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
                  v-model="address"
                  :rules="nicknameRules"
                  label="Address"
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



    <div slot="buttons">
    </div>

    <div id="members">
      <v-col cols="12" sm="6" v-for="(infoMember, key) in memberArrays" :key="key">
        <!--card-->
        <v-card max-width="460">
          <v-list-item three-line>
            <v-list-item-content>
              
          
              <!-- <v-text-field v-model="code" :counter="3" label="Code" required></v-text-field> -->
              <v-list-item-title>{{ infoMember.number }}</v-list-item-title>
              <v-list-item-subtitle>{{ infoMember.firstname }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{ infoMember.lastname }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{ infoMember. address }}</v-list-item-subtitle>
              <v-list-item-subtitle>{{ infoMember.tel }}</v-list-item-subtitle>
            </v-list-item-content>
            <div v-if="infoMember!=editedMemberinfo">
              <v-btn
                color="primary"
                dark
                class="ma-2"
                :to="{name:'memberedit' ,params : infoMember }"
              >Edit</v-btn>
              <v-btn color="error" dark class="ma-2" @click.prevent="deleteinfo(infoMember)">Delete</v-btn>
            </div>
            <div v-else>
              <v-btn color="error" dark class="ma-2" @click.prevent="CancelEdit()">Cancel</v-btn>
              <v-btn color="primary" dark class="ma-2" @click.prevent="updateinfo()">Update</v-btn>
            </div>
          </v-list-item>
        </v-card>
      </v-col>
    </div>

   
  </v-container>
</v-app>
</template>

<script>
import { members } from "../../database/databaseconfig";
import Drawer from '../../components/backend/Drawer';
import firebase from "firebase";
export default {
  components: {
    Drawer,
  },
  
  data() {
    return {
      editedMemberinfo : false,
      number: "",
      firstname: "",
      lastname: "",
      address: "",
      tel: "",
      memberArrays: []
    };
  },beforeCreate() {
    firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          this.$router.replace("/adminlogin")
          alert("You don't have a permission")
        }
    });
  },
  methods: {
    addmemberinfo() {
      members.push({
        number: this.number,
        firstname: this.firstname,
        lastname: this.lastname,
        address: this.address,
        tel: this.tel
      });
    },
    deleteinfo(infoMember) {
      members.child(infoMember.id).remove();
    },
    CancelEdit() {}
  },
  created() {
    members.on("child_added", snapshot => {
      this.memberArrays.push({ ...snapshot.val(), id: snapshot.key });
      console.log(snapshot.key);
    });

    members.on("child_removed", snapshot => {
      const deletedMember = this.memberArrays.find(
        infoMember => infoMember.id == snapshot.key
      );
      const index = this.memberArrays.indexOf(deletedMember);
      this.memberArrays.splice(index, 1);
    });

    members.on("child_changed", snapshot => {
      const updatedMembersInfo = this.memberArrays.find(
        infoMember => infoMember.id == snapshot.key
      );
      updatedMembersInfo.members = snapshot.val().members;
    });
  }
};
</script>