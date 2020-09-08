<template lang="pug">
  #kiosk
    pageShareTitle(
        spanContent="KIOSK"
        lineColor = "#F36A6A"
        )
    el-row(:gutter="50")
      el-col(:sm="12")
        h4 KIOSK就是‘自助點餐機’的統稱,大部分螢幕很大,跟人一般高,就像一個超大手機擺在面前,跟手機最大的差別就是可以吃現金,USER在使用中,會有一些地方需要透過軟體觸發硬體做反應(例如：開始付款投幣口會亮燈)
      el-col(:sm="12")
        h4 設計上需要注意的地方就是‘不能’所有內容都照比例放大,雖然形狀比例上跟手機很像,但是因為比手機大很多,所以設計ＵＩ的時候如果用平常手機的比例製作,放到實機上會變得非常大,感覺會很突兀,所以重點就是要利用大螢幕的特性,把以往在手機上必須透過切換畫面才能完成的動作，在大螢幕上一次完成
      el-col
        h4 我製作的是機台裡的點餐系統,因保密條款關係圖片不能外流,但官網有詳細介紹
    a(      
      href='https://www.bethel.com.tw/gx/product/xin_product_kiosk_k1.html'
      target="_blank"
    )
      el-button(
        round
        ) 外連至官網介紹
</template>

<script>

import pageShareTitle from '../../../components/PageShareTitle'

export default {
  name: 'kiosk',
    components: {
      pageShareTitle
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

@import '../../../assets/styles/var'

$mainColor: #F36A6A

#kiosk
  margin: 10vh 10vw
  text-align: center
  .el-row
      margin-top: 50px
      margin-bottom: 50px
      letter-spacing: 3px
      .el-col
        margin-top: 20px
      h4
        text-align: justify
  .el-button 
    background: $mainColor
    border: 1px solid $mainColor
    color: #fff
</style>
