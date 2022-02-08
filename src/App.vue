<template>
  <div class="container">
    <Header></Header>
    <router-view></router-view>
  </div>
</template>
<script>
import Header from '@/components/layout/Header.vue'
export default {
  name: 'App',
  components: {
    Header
  }
}
</script>