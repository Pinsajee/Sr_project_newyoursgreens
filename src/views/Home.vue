<template>
 <div class="home">
   <navigation/>
    <bookingPage/>
 
  </div>
</template>

<script>
// @ is an alias to /src
import bookingPage from '@/components/BookingHome.vue'
import navigation from '@/components/navigation.vue'


export default {
  name: 'Home',
  components: {
    bookingPage,
    navigation,
   
  }
}
</script>
