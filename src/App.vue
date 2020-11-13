<template>
<div id="app">
  <v-app>
   
<v-content clss="mx-4 md4">
      <router-view/>
    </v-content>
    
  </v-app>
  
</div>
 
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
