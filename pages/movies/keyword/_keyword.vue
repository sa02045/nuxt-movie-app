<template>
  <div class="container">
    <CBox d="flex" w="100vw" h="100vh" flex-dir="column">
      <CHeading text-align="center" mb="4"> keyword 검색기 </CHeading>
      <CFlex justify="center" align="center">
        <CInput
          placeholder="영화를 검색하세요"
          size="md"
          w="50vw"
          v-model="keyword"
        />
        <NuxtLink to="/movies/">
          <CButton left-icon=""> 검색 </CButton>
        </NuxtLink>
      </CFlex>
    </CBox>
  </div>
</template>

<script lang="js">
import {
  CBox,
  CButton,
  CFlex,
  CHeading,
  CInput
} from '@chakra-ui/vue'

export default {
  name: 'IndexPage',
  components: {
    CBox,
    CButton,
    CFlex,
    CHeading,
    CInput
  },
  data () {
    return {
      keyword:""
    }
  },
  computed: {
  },
  methods: {
    onClick(){

    }
  }
}
</script>
