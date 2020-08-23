<template lang="pug">
  #works(class="animated fadeIn")
    .workCon(
        :is="currentWork"
        )
    sidebarCompoment
</template>

<script>

import sidebarCompoment from '@/components/SideBarComponent'

export default {
  name: 'worksPage',
    components: {
        sidebarCompoment,
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

@import '../assets/styles/var'


#works
  width: 100vw
  overflow: hidden
  .workCon
    background-color: #f6f6ff
   

// @media screen and (max-width: 1400px)

</style>
