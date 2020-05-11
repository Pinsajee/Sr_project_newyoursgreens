<template>
  <v-app>

    <v-content>
      <navigation/>
      <router-view/>
    </v-content>
    
  </v-app>
</template>

<script>
import navigation from './components/navigation';
import frominput from './components/from';

export default {
  name: 'App',

  components: {
    navigation,
    frominput,
  },

  data: () => ({
    //
  }),
};
</script>
