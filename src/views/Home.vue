<template>
 <div class="home">
   <navigation/>
    <bookingPage/>
    <footer/>
 
  </div>
</template>

<script>
// @ is an alias to /src
import bookingPage from '@/components/BookingHome.vue'
import navigation from '@/components/navigation.vue'
import footer from '@/components/footer.vue'


export default {
  name: 'Home',
  components: {
    bookingPage,
    navigation,
    footer,
   
  }
}
</script>
