<template>
  <v-navigation-drawer id="app-drawer" class=" lighten-1" dark permanent>
    <v-list>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>

    <!-- <template v-slot:append>
      <div class="pa-2">
        <v-btn block>Logout</v-btn>
      </div>
    </template> -->
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "Teetime", icon: "dashboard" },
        { title: "Caddy", icon: "account_box" },
        { title: "Member", icon: "gavel" },
      ],
    };
  },
};
</script>

<style></style>
