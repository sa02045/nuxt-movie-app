<template>
  <c-flex d="flex" w="100vw" h="100vh" flex-dir="column" align="center">
    <c-heading text-align="center"> 영화 검색기 </c-heading>
    <c-flex>
      <c-input
        placeholder="영화를 검색하세요"
        size="md"
        w="50vw"
        v-model="keyword"
      />
      <nuxt-link :to="`/movies/keyword/${keyword}`">
        <c-button left-icon=""> 검색 </c-button>
      </nuxt-link>
    </c-flex>
    <c-flex flex-dir="column" align="center" w="960px">
      <c-image height="500px" :src="movie.Poster.replace('SX300', 'SX700')" />
      <c-box d="flex" flex-dir="column" align="center">
        <c-box as="h1" fontSize="2rem" fontWeight="bold">{{
          movie.Title
        }}</c-box>
        <c-box>
          <c-box as="span"> 개봉일 {{ movie.Released }}</c-box>
          <c-box as="span">
            상영시간 {{ movie.Runtime.replace("min", "분") }}</c-box
          >
          <c-tag
            v-for="(genre, index) in movie.Genre.split(',')"
            :key="index"
            ml="3"
            variant-color="indigo"
            variant="solid"
            >{{ genre }}</c-tag
          >
        </c-box>
        <c-box>
          <c-box as="span"> 감독 {{ movie.Director }}</c-box>
          <c-box> 작가 {{ movie.Writer }}</c-box>
          <c-box> 배우 {{ movie.Actors }}</c-box>
        </c-box>
        <c-text mt="15"> 줄거리 <br />{{ movie.Plot }}</c-text>
      </c-box>
    </c-flex>
  </c-flex>
</template>

<script lang="js">
import {
  CBox,
  CButton,
  CFlex,
  CHeading,
  CInput,
  CGrid,
  CImage,
  CGridItem,
  CText,
  CBadge,
  CTag
} from '@chakra-ui/vue'
import { fetchMovieDetail } from '../../../api/api'
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
    CGridItem,
    CImage,
    CText,
    CBadge,
    CTag
  },
  async asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
      const movie  = await fetchMovieDetail(params.imdbID)
      return{
          movie
      }
  },
  data () {
    return {
      keyword:"",
      movie:null,
    }
  },
}
</script>
