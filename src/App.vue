<template>
  <v-app>

    <v-content>
      <HelloWorld/>
      <frominput/>
    </v-content>
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
