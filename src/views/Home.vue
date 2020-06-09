<template>
  <div class="home">
    <bookingPage/>
  <timeloop/>
  </div>
</template>

<script>
// @ is an alias to /src
import bookingPage from '@/components/BookingHome.vue'


export default {
  name: 'Home',
  components: {
    bookingPage,
   
  }
}
</script>
