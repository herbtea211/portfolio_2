<template lang="pug">
  #Shang-Qing-Go.bg-white
    img.top-img(
        :src="require('@/assets/images/works_img/ui/shang_qing_go/0.png')"
      )
    .introduction
      pageShareTitle(
        spanContent="簡介"
        lineColor = '#f65636'
        )
      h4 這是一個網購平台的APP版本,沒有被實作出來,但網頁版本還在,目前還是有在經營當中,當時的想法是要大改版,所以先把尚未開始的APP上線測試之後再回頭改網頁版本,但後來計畫腰斬,只剩下完成的UI但沒有被實作
      img(
          :src="require('@/assets/images/works_img/ui/shang_qing_go/1.png')"
        )
    .architecture
      pageShareTitle(
        spanContent="架構"
        lineColor = '#f65636'
        )
      el-row(:gutter="50")
        el-col(:sm="12")
          h4 APP前端用framework7,當時F7的特色之一就是把 ios 跟 Android 分開,開始設計之前已經討論過,這版本要用 Android ,也可以說經過測試之後,覺得 Android 比較符合我們的需要
        el-col(:sm="12")
          h4 主要是因為購物類型的 APP 資料內容很多,Android 的元件比較好表達,另一方面F7的 Android 有水平的scrollBar可以用,雖然有其它套件可以解決,但既然已經使用 framework 就盡量使用可以減少前端的負擔
    .color-style
      pageShareTitle(
        spanContent="配色"
        lineColor = '#f65636'
        )
      img(
          :src="require('@/assets/images/works_img/ui/shang_qing_go/2.png')"
        )
      h4 我的配色從來都很少,頂多是兩個主色配黑白灰,這裡紅色是主色,大概佔畫面的60％,有需要的話會做一些飽和度或明度的變化,但是比例一定不高
    .product
      pageShareTitle(
        spanContent="商品頁"
        lineColor = '#f65636'
        )
      el-row(:gutter="50")
        el-col(
          :sm="8"
          )
          img(
              :src="require('@/assets/images/works_img/ui/shang_qing_go/3.png')"
            )
        el-col(
          :sm="16"
          )
          h4 這裡比較特別之處在於,大部分商城在商品頁這邊都會有 tab 可以切換'產品說明','規格','退換貨須知',這邊就不分開,只有一個'產品說明',是希望廠商可以把過多的內容精簡,而不要為了填滿那些內容故意把資料寫得很多,當然會有些商品適合有些不適合,所以先這樣做但預留空間等到上線之後再依市場反饋來決定
          img(
              :src="require('@/assets/images/works_img/ui/shang_qing_go/4.png')"
            )
          h4 另一個部分是footer的金額會隨著不同規格改變,廠商做促銷或特價時候很好用,後面結帳的時候這裡會顯示總金額
    .pay
      pageShareTitle(
          spanContent="結帳"
          lineColor = '#f65636'
          )
      img(
          :src="require('@/assets/images/works_img/ui/shang_qing_go/5.png')"
        )
      h4 結帳流程裡還是希望可以簡單一點,因為蠻多 input 要填,所以把間距在拉開一點,這裡為了不要讓 user 分心,所以 header 只剩下返回鍵跟LOGO,希望 user 可以專心在結帳流程裡
</template>

<script>

import pageShareTitle from '../../../components/PageShareTitle'

export default {
  name: 'shangQingGo',
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

$mainColor: #f65636

#Shang-Qing-Go.bg-white
  background-color: #ffffff
  text-align: center
  letter-spacing: 3px
  .top-img
    width: 80%
    display: block
    margin: 0 auto
    padding-top: 50px
    padding-bottom: 50px
  .introduction
    h4
      width: 80%
      margin: 50px auto
      text-align: justify
    img
      width: 40%
  .architecture
    width: 80%
    margin: 50px auto
    text-align: justify
    .el-row
      margin-top: 50px
  .color-style
    img
      margin-top: 50px
      width: 50%
      min-width: 200px
    h4
      width: 80%
      margin: 50px auto
      text-align: justify
  .product
    width: 80%
    margin: 50px auto
    .el-row
      margin-top: 50px
      .el-col
        img
          width: 100%
        h4
          text-align: justify
  .pay
    width: 80%
    margin: 50px auto 0px
    img
      width: 100%
      margin-top: 50px
    h4
      padding: 50px 0px 100px 0px
      text-align: justify

@media screen and (max-width: 740px)
  #Shang-Qing-Go.bg-white
    .top-img
    .introduction
      h4
      img
    .architecture
      .el-row
    .color-style
      img
      h4
    .product
      .el-row
        .el-col
          img
          h4
            margin: 50px 0px
    .pay
      img
      h4
  
</style>
