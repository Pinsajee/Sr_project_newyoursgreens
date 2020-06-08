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


export default {
  name: 'App',

  components: {
    navigation,
    
  },

  data: () => ({
    //
  }),
};
</script>
