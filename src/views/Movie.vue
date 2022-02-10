<template>
  <MovieList v-if="!$route.query.id"></MovieList>
</template>

<script>
// @ is an alias to /src
import MovieList from '@/components/MovieList.vue'
//import WorksView from '@/components/Worksview.vue'

export default {
    name: 'Movie',
    components: {
        MovieList,
    },
}
</script>