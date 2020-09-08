<template lang="pug">
  #web-menu
    pageShareTitle(
        spanContent="WEB-MENU"
        lineColor = "#F36A6A"
        )
    el-row(:gutter="50")
      el-col(:sm="12")
        h4 雲端點餐實際上就是KIOSK的姊妹作,呈現的資料內容是一樣的,只是在不同螢幕上呈現,因兩種螢幕的落差非常大,又考慮到未來會配合的硬體設施大小型狀不一,所以這裡的RWD部分會比較複雜,另外使用上比較特別的點就是要到店家現場,掃描 QRcode 之後點餐才會生效
      el-col(:sm="12")
        h4 設計上最困難的部分就是原本可以完全攤開的內容必須適度地收合,但是操作步驟不能多太多,手機支付的流程也不一樣,開立發票的方式也差很多
      el-col
        h4 我製作的是手機上的點餐系統,因保密條款關係圖片不能外流,但官網有詳細介紹
    a(      
      href='https://www.bethel.com.tw/gx/product/xin_product_mobile-order.html'
      target="_blank"
    )
      el-button(
        round
        ) 外連至官網介紹
  
</template>

<script>

import pageShareTitle from '../../../components/PageShareTitle'

export default {
  name: 'webMenu',
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

#web-menu
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
