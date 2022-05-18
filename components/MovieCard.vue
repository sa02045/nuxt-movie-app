<template>
  <nuxt-link :to="`/movies/imdbID/${imdbID}`">
    <c-pseudo-box
      border-width="2px"
      rounded="lg"
      overflow="hidden"
      border-radius="12px"
      :_hover="{
        cursor: 'pointer',
        transform: 'translateY(-15px)',
        transition: '0.5s all',
      }"
    >
      <c-image width="100%" object-fit="cover" :src="poster" :alt="title" />
      <c-box p="3">
        <c-box font-weight="bold" fontSize="lg">
          {{ title }}
        </c-box>
        <c-box as="span" color="gray.600" fontSize="sm">{{ year }}</c-box>
      </c-box>
    </c-pseudo-box>
  </nuxt-link>
</template>

<script>
import { CBox, CImage, CFlex, CPseudoBox } from "@chakra-ui/vue";
export default {
  name: "MovieCard",
  components: { CBox, CImage, CFlex, CPseudoBox },
  props: {
    title: String,
    year: String,
    imdbID: String,
    poster: String,
  },
};
</script>
