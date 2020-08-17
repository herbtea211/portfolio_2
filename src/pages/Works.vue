<template lang="pug">
  #works
    h1 works
    div(:is="page")
</template>

<script>

import griphic01 from '@/components/works_compoments/griphic/01'


export default {
  name: 'worksPage',
    components: {
        griphic01
    },
    data () {
    return {
      page: null
    }
  },
  computed: {
    
  },
  mounted () {
    this.page = griphic01
  },
  methods: {
      
  },
  watch: {

  }
}
</script>

<style lang="sass">

#works
  
</style>
