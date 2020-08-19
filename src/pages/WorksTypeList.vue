<template lang="pug">
  #work-type-list
    .title-box 繁忙的城市,每個人都在自己的路上和別人相遇著
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

@import '../assets/styles/var'

$finallyBGColor: hsl(0, 0, 50)

@keyframes testAnimation
  from
    background-color: $BG-colorHSL
  30%
    background-color: $BG-colorHSL
  50%
    background-color: hsl(359, 100, 50)
  to
    background-color: $finallyBGColor

#work-type-list
  .title-box
    width: 50%
    margin: 10vh auto 10vh
    letter-spacing: 5px
    font-weight: lighter
    background-color: $finallyBGColor
    -webkit-background-clip: text
    background-clip: text
    color: transparent
    animation: testAnimation 5s
    text-align: center
    font-size: 18px

@media screen and (max-width: 400px)
  @media (orientation: portrait) // 直視 , landscape 橫式
    #work-type-list
      .title-box
        width: 90%
        font-size: 14px
        margin-top: 15vh
  
</style>
