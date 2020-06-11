<template>
  <div class="login">
    <login/>
  
  </div>
</template>

<script>
// @ is an alias to /src
import login from '@/components/backend/login.vue'


export default {
  name: 'Login',
  components: {
    login,
   
  }
}
</script>
