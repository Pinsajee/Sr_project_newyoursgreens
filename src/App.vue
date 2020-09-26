<template>

  <v-app>
   
<v-content clss="mx-4 md4">
      <router-view></router-view>
    </v-content>
    
  </v-app>
  

 
</template>

<script>
import navigation from './components/navigation';
import Drawer from '../src/components/backend/Drawer';
export default {
  name: 'App',

  components: {
    navigation,
    Drawer,
    
    
  },

  data: () => ({
    //
  }),
};
</script>
