<template>
  <CFlex d="flex" w="100vw" h="100vh" flex-dir="column" align="center">
    <CHeading text-align="center"> 영화 검색기 </CHeading>
    <CFlex>
      <CInput
        placeholder="영화를 검색하세요"
        size="md"
        w="50vw"
        v-model="keyword"
      />
      <NuxtLink :to="`/movies/keyword/${keyword}`">
        <CButton left-icon=""> 검색 </CButton>
      </NuxtLink>
    </CFlex>
    <c-grid
      padding="10"
      mt="40px"
      w="100%"
      template-columns="repeat(4, 1fr)"
      gap="6"
    >
      <c-grid-item v-for="movie in movies" :key="movie.imdbID">
        <movie-card
          :key="movie.imdbID"
          :title="movie.Title"
          :imdbID="movie.imdbID"
          :year="movie.Year"
          :poster="movie.Poster"
        ></movie-card
      ></c-grid-item>
    </c-grid>
  </CFlex>
</template>

<script lang="js">
import {
  CBox,
  CButton,
  CFlex,
  CHeading,
  CInput,
  CGrid,
  CGridItem
} from '@chakra-ui/vue'
import { fetchMovieList } from '../../../api/api'
import MovieCard from '../../../components/MovieCard.vue'

export default {
  name: 'IndexPage',
  components: {
    CBox,
    CButton,
    CFlex,
    CHeading,
    CInput,
    MovieCard,
    CGrid,
    CGridItem
  },
  asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
      return{
          keyword:params.keyword
      }
  },
  data () {
    return {
      keyword:"",
      movies:[],
    }
  },
  computed: {
  },
  async fetch(){
      const res  = await fetchMovieList(this.keyword)
      this.movies = res.Search
  },
}
</script>
