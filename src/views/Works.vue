<template>
  <div>
    <h1>{{$route.query}} aaaa</h1>
  </div>
  <WorksList v-if="!$route.query.id"></WorksList>
  <WorksView v-if="$route.query.id"></WorksView>
</template>

<script>
// @ is an alias to /src
import WorksList from '@/components/WorksList.vue'
//import WorksView from '@/components/Worksview.vue'

export default {
  name: 'Works',
  components: {
    WorksList,
    //WorksView
  },
  props: {
      view: {
          type: String,
          default : ''
      },
      id: {
          type: Number,
          default: 0
      }
  }
}
</script>