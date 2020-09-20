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
            .text-box
                span 銀行存款
            .edit-box
                el-input(
                    v-model="bankSavings"
                    ref="bankSavingsInput"
                    placeholder="0"
                    @focus="bankSavingsIsFocus(true)"
                    @blur="bankSavingsIsFocus(false)"
                )
</template>

<script>


export default {
  name: 'bookkeeping',
    components: {

    },
    data () {
    return {
        bankSavings: '',
        bankSavingsDisabled: true,
        bankSavingsInputIsFocus: false
    }
  },
  computed: {
    
  },
  mounted () {
      
},
  methods: {
      bankSavingsIsFocus(IsFocus) {
          if(IsFocus) {
              document.body.onkeydown = this.keyDown
          } else {
              this.checkBankSavingsText()
          }
          
      },
      checkBankSavingsText() {
          if(isNaN(this.bankSavings)) {
              // 不是數字
          } else {

          }
      },
      keyDown(e) {
          if(e.key === 'Enter') {
              if(this.bankSavingsInputIsFocus) {
                  this.checkBankSavingsText()
              }
            }
        }
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
$footerH: 70px
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
            display: flex
            font-size: 20px
            .text-box
                display: flex
                justify-content: flex-end
                align-items: center
                flex: 1 1 10px
                span
            .edit-box
                display: flex
                align-items: center
                justify-content: space-between
                flex: 3 1 10px
                padding: 0px 20px
                .el-input__inner
                    background-color: $BGColor
                    border: 1px solid $BGColor
                    height: unset
                    line-height: unset
                    font-size: 36px
                i

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
                    flex-flow: column nowrap

</style>
