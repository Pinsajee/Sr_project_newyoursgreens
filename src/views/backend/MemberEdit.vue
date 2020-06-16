<template>
  <div class="home">
    <memberedit/>
 
  </div>
</template>

<script>
// @ is an alias to /src
import memberedit from '@/components/backend/formeditMember.vue'


export default {
  name: 'Home',
  components: {
    memberedit,
   
  }
}
</script>
