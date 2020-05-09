<template>
  <v-app>
    </v-app-bar>

    <v-content>
      <HelloWorld/>
      <frominput/>
    </v-content>
    <v-router></v-router>
    <router-vue></router-vue>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
import frominput from './components/from';

export default {
  name: 'App',

  components: {
    HelloWorld,
    frominput,
  },

  data: () => ({
    //
  }),
};
</script>
