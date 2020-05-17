<template>
  <div class="home">
    <HelloWorld/>
    <timeloop/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import timelooop from '@/components/timeloop'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    timelooop
  }
}
</script>
