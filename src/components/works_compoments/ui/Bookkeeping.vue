<template lang="pug">
  #bookkeeping
    h2 bookkeeping
    .real-BK
        el-row.content
            el-col.control-box(
                :xs="24"
                :sm="10"
                :lg="6"
            )
                h1 col-6
            el-col.items-box(
                :xs="24"
                :sm="14"
                :lg="18"
            )
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
    .real-BK
        height: 100vh - $headerH
        display: flex
        flex-flow: column nowrap
        justify-content: space-between
        .content
            flex: 100 1 10px
            .el-col
                height: 100%
            .control-box
                background-color: #202931
            .items-box
                background-color: #2b323a
        footer
            flex: 1 1 $footerH
            background-color: #2c3544

// @media screen and (max-width: 767px)
//     #bookkeeping
//         h2
//         .real-BK
//             .content
//                 .el-col
//                     height: 50%
//                 .control-box
//                 .items-box
//             footer
//     @media (orientation: landscape) // 直視 , landscape 橫式
//         #bookkeeping
//             h2
//             .real-BK
//                 .content
//                     display: flex
//                     .el-col
//                     .control-box
//                     .items-box
//                 footer
</style>
