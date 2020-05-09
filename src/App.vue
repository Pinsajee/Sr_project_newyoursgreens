<template>
  <v-app>

    <v-content>
      <router-view/>
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
