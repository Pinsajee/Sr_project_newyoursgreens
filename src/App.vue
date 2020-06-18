<template>
  <v-app>
<v-content>
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
