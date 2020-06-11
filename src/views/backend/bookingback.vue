<template>
  <div class="home">
    <bookingback/>
  <timeloop/>
  </div>
</template>

<script>
// @ is an alias to /src
import bookingback from '@/components/backend/booking.vue'


export default {
  name: 'Home',
  components: {
    bookingback,
   
  }
}
</script>
