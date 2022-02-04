<template>
  <AppNav></AppNav>
  <router-view></router-view>
</template>
<script>
import AppNav from '@/components/layout/AppNav.vue'
export default {
  name: 'App',
  components: {
    AppNav
  }
}
</script>
