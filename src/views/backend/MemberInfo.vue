<template>
  <div class="home">
    <memberinfo/>
  <timeloop/>
  </div>
</template>

<script>
// @ is an alias to /src
import memberinfo from '@/components/backend/MemberInfo.vue'


export default {
  name: 'Home',
  components: {
    memberinfo,
   
  }
}
</script>
