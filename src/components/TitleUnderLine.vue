<template lang="pug">
  #title-under-line
</template>

<script>

export default {
  name: 'titleUnderLine',
    components: {
   
    },
    props: [
      'name'
    ],
    data () {
    return {
      
    }
  },
  computed: {
    
  },
  mounted () {

    // window.onscroll = () => {
    //       console.log(this.$refs.el_title_under_line.getBoundingClientRect())
    // }
    
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
