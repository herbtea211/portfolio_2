<template lang="pug">
  #kiosk
    pageShareTitle(
        spanContent="KIOSK"
        lineColor = "#F36A6A"
        )
    el-row(:gutter="50")
      el-col(:sm="12")
        h4 KIOSK就是‘互動資訊服務站’的統稱,也可以說是一種透過軟硬體來服務顧客的機台,生活中最常見的就是'ibon'。<br>這款產品是專門為餐飲業設計的KIOSK系統,專注在點餐、付款的功能上,可以取代一部分人力,為消費者提供更有效率的服務。
      el-col(:sm="12")
        h4 設計上的重點：
          ul
            li 適應各種機台的RWD
            li 為手機版本的雲端點餐系統做準備
            li 適應各種餐飲形態的點餐方式
      el-col.text-center
        a(      
          href='https://www.bethel.com.tw/gx/product/xin_product_kiosk_k1.html'
          target="_blank"
        )
          el-button(
            round
            ) 外連至官網介紹
    pageShareTitle(
          spanContent="困難點"
          lineColor = "#F36A6A"
          )
    el-row
      el-col
        h4 上述的設計重點中,最困難的就是<b>'適應各種餐飲形態的點餐方式'!!</b>台灣的餐飲業很發達,為了提供顧客賓至如歸的體驗,可以調整的選項非常多,例如：主餐三選二牛排還要選幾分熟,加起司加麵還可以選粗細,拉麵湯頭有三種濃度,套餐五個大項每項都5選2飲料還分甜度冰量。<br>如果只有1~2層選項(EX:豚骨拉麵加麵改細麵)都不算困難,可是只要超過3層以上就會開始變得複雜,而且我們<b>永遠不知道業主會推出什麼樣的套餐選項。</b>而且還要配合現有的API,讓情況變得更棘手！！
    pageShareTitle(
          spanContent="解決方案"
          lineColor = "#F36A6A"
          )
    el-row.solution(:gutter="50")
      el-col
        h2.margin-top 資料端
      el-col
        h4 為了一勞永逸解決這個問題,我們把資料格式做成下列的樣子(下列為模擬資料格式,並非真實資料)
      el-col(:sm="12")
        img(
          :src="require('@/assets/images/works_img/ui/KIOSK/0.png')"
        )
      el-col(:sm="12")
        img(
          :src="require('@/assets/images/works_img/ui/KIOSK/1.png')"
        )
      el-col
        h4 很簡單可以看出規律,每層都有一個key => items,items不為null就表示有選項可選,而每個選項的key都是一樣的,只是items有沒有內容的差別,null就表示最後一層,以此類推,前端收到資料後主要靠items這個key做判斷,最重要的是,這種格式可以<b>很規律的“無限延伸”選項的內容,再複雜的層次選法都可以應付！！</b>
      el-col
        h2.margin-top 介面端-首頁
      el-col(:sm="10")
        img(
          :src="require('@/assets/images/works_img/ui/KIOSK/2.png')"
        )
      el-col(:sm="14")
        img(
          :src="require('@/assets/images/works_img/ui/KIOSK/3.png')"
        )
        h4.margin-top 稍微帶一下首頁,左圖很簡單就是一個menu的感覺,重點是上圖,如果是完全沒有選項的類別,可以直接在首頁+1操作,比較直接。
      el-col
        h2.margin-top 有選項的餐點
      el-col(:sm="12")
        img(
          :src="require('@/assets/images/works_img/ui/KIOSK/4.png')"
        )
      el-col(:sm="12")
        h4 點擊有選項的餐點,會觸發bottom-slide-box,底下的+ - ,跟畫面上方的數量是是連動的,右下角刪除的意義是“確認”這個餐點,
        el-row
          el-col
            img(
                :src="require('@/assets/images/works_img/ui/KIOSK/5.png')"
              )
          el-col
            h4 再點擊任一餐點(No.1)後,會有新的bottom-slide-box疊上來,這一層顯示的就是第一層的選項。沙拉底下只有一層選項(items: null),就不會有右邊的下拉箭頭,底下還有選項就可以觸發新的bottom-slide-box,以此類推。
    el-row(:gutter="50")
      el-col(:sm="12")
        img(
            :src="require('@/assets/images/works_img/ui/KIOSK/6.png')"
          )
      el-col(:sm="12")
        h4 上圖選了紅茶之後,觸發新的bottom-slide-box疊上來,再顯示選項,以此類推,畫面上就可以無限新增子選項。
      el-col
        h4 這個產品之後的延伸產品為專屬業主的手機點餐系統“雲端點餐”,可以連到官網看看,大致上的組件有7~8成像,功能也差不多,當然為了移動端做了一些調整
      el-col.text-center
        a(      
          href='https://www.bethel.com.tw/gx/product/xin_product_mobile-order.html'
          target="_blank"
        )
          el-button(
            round
            ) 延伸產品雲端點餐
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
  .text-center
    text-align: center
  .el-row
      margin-top: 30px
      margin-bottom: 50px
      letter-spacing: 3px
      .el-col
        margin-top: 20px
        img
          width: 100%
        .margin-top
          margin-top: 20px
      h4
        text-align: justify
  a
    .el-button 
      background: $mainColor
      border: 1px solid $mainColor
      color: #fff
      margin-bottom: 50px
      margin-top: 50px

</style>
