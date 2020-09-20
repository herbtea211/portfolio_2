<template lang="pug">
  #bookkeeping
    h2 bookkeeping
    .real-BK-layout
        .content
            .control-box
                h1 col-6
            .items-box
                h1 col-18
        footer
            h1 footer

</template>

<script>


export default {
  name: 'bookkeeping',
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

$mainColor: #48d7de
$BGColor: #171d24
$mainBGColor: #121a2d
$headerH: 8vh
$footerH: 100px
$btn-BoxH-In-Por: 100px

@import '../../../assets/styles/var'

#works
    .workCon
        background-color: $BGColor

#bookkeeping
    width: 100vw
    overflow: hidden
    h2
        height: $headerH
        margin-left: 10px
    .real-BK-layout
        height: 100vh - $headerH
        display: flex
        flex-flow: column nowrap
        justify-content: space-between
        .content
            flex: 100 1 10px
            display: flex
            flex-flow: row nowrap
            div
                height: 100%
            .control-box
                background-color: #202931
                flex: 1 1 100px
            .items-box
                background-color: #2b323a
                flex: 4 1 100px
        footer
            flex: 1 1 $footerH
            background-color: #2c3544

@media screen and (max-width: 1400px)
    #bookkeeping
        h2
        .real-BK-layout
            .content
                div
                .control-box
                    flex: 2 1 100px
                .items-box
                    flex: 4 1 100px
            footer

@media screen and (max-width: 420px)
    @media (orientation: portrait) // 直視 , landscape 橫式
        #bookkeeping
            h2
            .real-BK-layout
                .content
                    flex-flow: column nowrap
                    div
                    .control-box
                        flex: 1 1 $btn-BoxH-In-Por
                    .items-box
                        flex: 100 1 10px
                footer

</style>
