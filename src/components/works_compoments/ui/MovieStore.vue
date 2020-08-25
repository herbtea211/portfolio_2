<template lang="pug">
  #movie-store
    .top-flow-img-box
      img(
        :src="require('@/assets/images/works_img/ui/movie_store/0.png')"
      )
    .introduction
      pageShareTitle(
        spanContent="簡介"
        lineColor = "#2bdeb6"
      )
      p 這個電影院的訂位系統是一個練習的作品,有一天呢～～我用網站訂電影票,決定位置的時候發現,因為線上訂位都是用下拉式選單,選第幾排第幾位這樣,但因為我喜歡坐走道,變成根本無法選到想要的位置(除非我跳出到其他地方找到我要的資訊),這個事件又讓我想到,以前在做APP的時候,其實也有過類似的經驗,透過APP做預約訂位很困難,於是就想了一個方式,順便做個練習作品
    .order-way
      pageShareTitle(
        spanContent="訂位方式"
        lineColor = "#2bdeb6"
      )
      p 所以最重要的點只有一個,訂位流程圖像化~~用區塊的方式把位置先劃分出來,再從區塊裡選位置,至於區塊如何劃分是在後台設定,這部分就先省略
    .view-box(
      v-for="(item, index) in copyWritingConfig"
      :key="index"
    )
      .content-box
        .img-box
          img(
            :src="require(`@/assets/images/works_img/ui/movie_store/${item.src}.png`)"
          )
        .text-box
          h2 {{item.title}}
          .p-box
            p {{item.copyWriting}}
            .line
            .BG-Block
    //- .view-box
    //-   img(
    //-     :src="require('@/assets/images/works_img/ui/movie_store/2.png')"
    //-   )
    //- .view-box
    //-   img(
    //-     :src="require('@/assets/images/works_img/ui/movie_store/3.png')"
    //-   )
</template>

<script>

import pageShareTitle from '../../../components/PageShareTitle'


export default {
  name: 'movieStore',
    components: {
      pageShareTitle
    },
    data () {
    return {
      copyWritingConfig: [
        {
          src: '1',
          title: '訂位前準備',
          copyWriting: '這裡先把除了定位以外的流程走完,也可以說這裡一定要先做完才有辦法選位置'
        },
        {
          src: '2',
          title: '先選擇區塊',
          copyWriting: '這裡把所有位置先用區塊分開,可以很清楚知道位置靠那,還有整個廳院的動線,當然每個廳會有不一樣的設定,點擊之後可顯示目前剩幾位,一大群人要去,或者一位難求的電影這時候就很有用,確認完之後再點擊下一步'
        },
        {
          src: '3',
          title: '再選擇座位',
          copyWriting: '這裡就比較易懂了,用顏色區分可選的位置讓user點擊,如果人很多,可以在這裡先選一半,回上一頁找其他區塊的位置,當然劃分區塊之前就要先規劃好,一個區有幾排幾列,這裡先預計 10 x 10 ,再往下走就是確認訂單了'
        }
      ]
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

$fontColor: #a8a8a8
$BGColor: #141516
$focusColor: #2bdeb6

#movie-store
  color: $fontColor
  div
  .top-flow-img-box
    text-align: center
    padding: 10vh 0vw
    img
      width: 60%
  p
    @include pStyle(60%)
    margin: 50px auto
  .introduction
  .order-way
    background-color: #1d1d1d
    padding: 20px 0px 20px 0px
    // p
    //   @include pStyle(60%)
    //   margin: 50px auto
  .view-box
    position: relative
    width: 100%
    .content-box
      width: 60%
      margin: 10vh auto
      display: flex
      .img-box
        z-index: 1000
        width: 30%
        img
          width: 100%
      .text-box
        padding-left: 20px
        h2
          color: #ffffff
          letter-spacing: 3px
        .p-box
          margin-top: 10px
          position: relative
          padding-top: 10px
          p
            margin: 0px
            width: 80%
          .line
            width: 175%
            height: 2px
            background-color: $focusColor
            position: relative
            left: -88%
            margin-top: 10px
          .BG-Block
            width: 140%
            height: 200px
            background-color: #ffffff
            opacity: 0.2
            position: absolute
            top: 0
            left: -70%

@media screen and (max-width: 450px)
  @media (orientation: portrait) // 直視 , landscape 橫式
    #movie-store
      .top-flow-img-box
        img
          width: 80%
      .view-box
        .content-box
          width: 90%
          .img-box
            width: 60%
</style>
