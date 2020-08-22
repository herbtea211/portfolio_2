<template lang="pug">
  #title-under-line(ref="el_title_under_line")
</template>

<script>

export default {
  name: 'titleUnderLine',
    components: {
   
    },
    data () {
    return {
      
    }
  },
  computed: {
    
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

#title-under-line
  position: relative
  width: 0%
  height: 2px
  margin-top: 15px
  background-color: #000000
  transition: width 0.3s
  -webkit-transition: width 0.3s
  -moz-transition: width 0.3s
  -o-transition: width 0.3s

#title-under-line.isShow
  width: 100%
  
</style>
