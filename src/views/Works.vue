<template>
  <div>
    <h1>my work</h1>
  </div>
  <WorksList msg="App"/>
</template>

<script>
// @ is an alias to /src
import WorksList from '@/components/WorksList.vue'

export default {
  name: 'Works',
  components: {
    WorksList
  }
}
</script>
