<template lang="pug">
  #works
    h1 works
    div(:is="currentWork")
</template>

<script>

export default {
  name: 'worksPage',
    components: {
        // griphic01
    },
    data () {
    return {

    }
  },
  computed: {
    currentWork() {
        return this.$store.state.currentWork
    }
  },
  mounted () {
    
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
