<template>
  <v-container>
    <h2>comment test</h2>
    <div id="comment">
      <v-col cols="12" sm="6" v-for="(message, key) in commentsArrays" :key="key">
        <!--card-->
        <v-card max-width="460">
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="headline mb-1" v-if="message!=editedComment">
                {{
                message.comments
                }}
                
              </v-list-item-title>
               <v-textarea v-else label="Comment" v-model="commentText"></v-textarea>
              <v-list-item-subtitle>{{ message.name }}</v-list-item-subtitle>
            </v-list-item-content>
            <div v-if="message!=editedComment">
              <v-btn color="primary" dark class="ma-2" @click.prevent="editComment(message)">Edit</v-btn>
              <v-btn color="error" dark class="ma-2" @click.prevent="deletecomment(message)">Delete</v-btn>
            </div>
            <div v-else>
              <v-btn color="primary" dark class="ma-2" @click.prevent="CancelEdit()">Cancel</v-btn>
              <v-btn color="error" dark class="ma-2" @click.prevent="updatecomment()">Update</v-btn>
            </div>

            
            
            
          </v-list-item>
        </v-card>
      </v-col>
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
  </v-container>
</template>

<script>
import { comments } from "../database/databaseconfig";
export default {
  name: "frominput",

  //     data: () => ({
  //  //
  //   }),
  data() {
    return {
      commentText: "",
      name: "",
      commentsArrays: [],
      editedComment: null
    };
  },
  methods: {
    addcomment() {
      comments.push({
        comments: this.commentText,
        name: this.name
      });
    },
    deletecomment(message) {
      comments.child(message.id).remove();
    },
    editComment(message) {
      this.editedComment = message
      this.commentText = message.comments
    },
    CancelEdit() {
      this.editedComment = null
      this.commentText = ""
    },
    updatecomment() {
      comments.child(this.editedComment.id).update({
        comments: this.commentText
      })
      this.CancelEdit()
    }
    
  },
  created() {
    comments.on("child_added", snapshot => {
      this.commentsArrays.push({...snapshot.val(),id:snapshot.key});
      console.log(snapshot.key);
    });

    comments.on("child_removed", snapshot => {
      const deletedComment = this.commentsArrays.find(message=>message.id == snapshot.key)
      const index = this.commentsArrays.indexOf(deletedComment)
      this.commentsArrays.splice(index,1)
    });

    comments.on("child_changed", snapshot => {
      const updatedcommentText = this.commentsArrays.find(message=>message.id == snapshot.key)
      updatedcommentText.comments = snapshot.val().comments
    });
    
  }
};
</script>
