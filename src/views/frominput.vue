<template>
 <v-container>
    <h2>test</h2>
    <div id="comment">
    <v-col cols="12" sm="6"   v-for="(message, i) in comments"
          :key="i"
          >
        <!--card-->
        <v-card max-width="344">
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1">{{message.comments}}</v-list-item-title>
              <v-list-item-subtitle>{{message.name}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      
        </v-col >
      </div>
      <br />
      <hr />
    
    <!--form-->
    <v-col cols="12" sm="6">
      <div class="form-group">
        <div>
          <v-textarea label="Comment" v-model="commentText"></v-textarea>
        </div>
        <v-text-field label="name" v-model="name" single-line solo></v-text-field>
        <div class="my-2">
          <v-btn color="warning" dark v-on:click="addcomment">comment</v-btn>
        </div>
      </div>
    </v-col>
    </div>
  </v-container>


</template>

<script>
  import { comments } from '../database/databaseconfig' 
  export default {
    name: 'frominput',

//     data: () => ({
//  //
//   }),
  data() {
      return {
        commentText: '',
        name: '',
        commentArrays: []
      };
  },
  methods: {
    addcomment() {
      comments.push({
        comments: this.commentText,
        name: this.name,
      })

 },
 created() {
   comments.on('child_added' , snapshot => {
     this.commentArrays.push(snapshot.val());
     console.log(snapshot.key);
   })
 }

  }
  }
</script>
