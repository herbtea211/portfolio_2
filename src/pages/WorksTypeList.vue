<template lang="pug">
  #work-type-list
    h1 workTypeList
    .test
      h1 500
    sidebarCompoment
</template>

<script>
import sidebarCompoment from '@/components/SideBarComponent'

export default {
  name: 'workTypeListPage',
    components: {
      sidebarCompoment
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

@keyframes testAnimation
  from
    background-color: hsl(0, 0, 0)
  to
    background-color: hsl(220, 20, 60)

#work-type-list
  .test
    width: 500px
    height: 500px
    background-color: hsl(0, 0, 0)
    -webkit-background-clip: text
    background-clip: text
    color: transparent
    animation: testAnimation 5s
    animation-iteration-count: infinite
  
</style>
