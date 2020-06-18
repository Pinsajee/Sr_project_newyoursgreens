<template>
  <div class="home">
    <caddyinfo/>
  </div>
 
</template>

<script>
// @ is an alias to /src
import caddyinfo from '@/components/backend/CaddyInfo.vue'


export default {
  name: 'Home',
  components: {
    caddyinfo,
   
   
  }
}
</script>
