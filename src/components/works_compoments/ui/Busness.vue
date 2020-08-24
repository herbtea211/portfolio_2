<template lang="pug">
  #busness
    .Introduction
      img.logo(
        :src="require('@/assets/images/works_img/ui/busness/18.png')"
      )
      img(
        :src="require('@/assets/images/works_img/ui/busness/0.png')"
      )
      pageShareTitle(
        spanContent="簡介"
        lineColor = "#e39e44"
        )
      p 這是一個為了線上開店平台所開發的APP原始版型,平台的主要客戶90%以上是零售業<br>基於這兩個前提這次改版有幾個重點:
    .point
      el-carousel(
        :autoplay="true"
        arrow="never"
        :loop="true"
        :interval="2000"
        )
        el-carousel-item(
          v-for="(item, index) in carousel_img_1" :key="item"
          )
          img(
            :src="require(`@/assets/images/works_img/ui/busness/${item}.png`)"
          )
      .text-box
        h2 風格簡約但不強烈
        p 為了適應各種不同的零售商品EX:服飾,食品,生活百貨..等風格太過強烈無法跟多樣性的店家做搭配
    .point.right
      .text-box
        h2 盡量符合多數消費者使用習慣
        p 消費者的年齡層非常廣泛跨越了至少兩個世代太新穎或太老舊的設計方式都會造成不同年齡層的使用障礙
      el-carousel(
        :autoplay="true"
        arrow="never"
        :loop="true"
        :interval="1500"
        )
        el-carousel-item(
          v-for="(item, index) in carousel_img_2" :key="item"
          )
          img(
            :src="require(`@/assets/images/works_img/ui/busness/${item}.png`)"
          )
    .point.auto-scroll
      .scroll-box
        img(
          :src="require('@/assets/images/works_img/ui/busness/5.png')"
        )
      .text-box
        h2 可以輕鬆應付各種客戶需求的UI
        p 開發一個線上開店的APP,最難克服的點就是”客戶端的需求可能性非常非常多”要如何一次做到位,讓各式各樣的客戶可以輕鬆開店,並且在操作過程中感到舒適,方便,效率就是”好產品”與”不良品”的差別
    .view-style
      pageShareTitle(
        spanContent="視覺風格"
        lineColor = "#e39e44"
        )
      img(
          :src="require('@/assets/images/works_img/ui/busness/6.png')"
        )
      p 開發一個線上開店的APP,最難克服的點就是”客戶端的需求可能性非常非常多”要如何一次做到位,讓各式各樣的客戶可以輕鬆開店,並且在操作過程中感到舒適,方便,效率就是”好產品”與”不良品”的差別
    .color-scheme-box
      pageShareTitle(
        spanContent="配色"
        lineColor = "#e39e44"
        )
      img.circle(
          :src="require('@/assets/images/works_img/ui/busness/7.png')"
        )
      p 為了強烈提醒USER購物車裡尚有商品未結帳,用強烈的具有提示的意味,整支APP只有一個地方如此使用
      el-row(
        :gutter="20"
      )
        el-col(:sm="12")
          img(
              :src="require('@/assets/images/works_img/ui/busness/8.png')"
            )
          .focus-point
        el-col(:sm="12")
          img(
              :src="require('@/assets/images/works_img/ui/busness/9.png')"
            )
          .focus-point.right
      p 為了強烈提醒USER購物車裡尚有商品未結帳,用強烈的具有提示的意味,整支APP只有一個地方如此使用
      el-row(
        :gutter="20"
      )
        el-col(:sm="8")
          img(
              :src="require('@/assets/images/works_img/ui/busness/10.png')"
            )
        el-col(:sm="8")
          img(
              :src="require('@/assets/images/works_img/ui/busness/11.png')"
            )
        el-col(:sm="8")
          img(
              :src="require('@/assets/images/works_img/ui/busness/12.png')"
            )
    .icon-style
      pageShareTitle(
        spanContent="ICON"
        lineColor = "#e39e44"
        )
      el-row(
        type="flex"
        justify="center"
        )
        el-col(:sm="3")
          img(
              :src="require('@/assets/images/works_img/ui/busness/13.png')"
            )
        el-col(:sm="3")
          img(
              :src="require('@/assets/images/works_img/ui/busness/14.png')"
            )
        el-col(:sm="3")
          img(
              :src="require('@/assets/images/works_img/ui/busness/15.png')"
            )
        el-col(:sm="3")
          img(
              :src="require('@/assets/images/works_img/ui/busness/16.png')"
            )
        el-col(:sm="3")
          img(
              :src="require('@/assets/images/works_img/ui/busness/17.png')"
            )
      p ICON設計上以線條及塊狀元素元素構成,由最基礎的幾何造型做變化,多直角配正圓,去掉圓角結構,形成較穩重的感覺
      
</template>

<script>

import pageShareTitle from '../../../components/PageShareTitle'


export default {
  name: 'busness',
    components: {
      pageShareTitle
    },
    data () {
    return {
      carousel_img_1: [
        '1',
        '2'
      ],
      carousel_img_2: [
        '3',
        '4'
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

$focusColor: #e39e44
$carouselWidth: 300px
$carouselWidthMoble: 250px
$carouselLeft: 20%

@keyframes scrollImgAnimation
  from
    top: 0px
  50%
    top: -500px
  to
    top: 0px

@keyframes circleImgAnimation
  from
    -moz-transform: rotate(0deg)
    -webkit-transform: rotate(0deg)
    -o-transform: rotate(0deg)
    -ms-transform: rotate(0deg)
  to
    -moz-transform: rotate(360deg)
    -webkit-transform: rotate(360deg)
    -o-transform: rotate(360deg)
    -ms-transform: rotate(360deg)

@keyframes focusPointImgAnimation
  from
    -moz-transform: scale(0.5)
    -webkit-transform: scale(0.5)
    -o-transform: scale(0.5)
    -ms-transform: scale(0.5)
  to
    -moz-transform: scale(1.5)
    -webkit-transform: scale(1.5)
    -o-transform: scale(1.5)
    -ms-transform: scale(1.5)
    opacity: 0.2


#busness
  .title
    width: 30%
    display: flex
    flex-flow: row nowrap
    justify-content: space-around
    position: relative
    span
      font-size: 36px
      margin-bottom: 20px
    .title-under-line
      position: absolute
      bottom: 0px
      width: 100%
      height: 2px
      background-color: $focusColor
  p
    width: 60%
    margin: 10vh auto
    font-size: 18px
    letter-spacing: 3px
    line-height: 36px
  .Introduction
    display: flex
    flex-flow: column nowrap
    align-items: center
    padding-top: 10vh
    img
      width: 60%
      margin-bottom: 20vh
    .logo
      width: 250px
  .point
    margin-bottom: 120px
    display: flex
    .el-carousel
      width: $carouselWidth
      left: $carouselLeft
      .el-carousel__container
        width: 100%
        height: $carouselWidth * 1.4
        img
          width: 100%
      .el-carousel__indicators
        display: none
    .text-box
      margin-left: $carouselLeft + 10%
      letter-spacing: 3px
      h2
        color: $focusColor
        width: 60%
      p
        margin: 20px 0px 0px 0px
  .right
    text-align: right
    .el-carousel
      left: unset
      right: 20%
    .text-box
      margin-left: 20%
  .auto-scroll
    padding: 0px 20%
    .scroll-box
      width: 450px
      height: 450px * 1.2
      overflow: hidden
      border-radius: 20px
      flex: 1 1 100px
      img
        width: 100%
        position: relative
        top: 0px
        animation: scrollImgAnimation 8s
        // animation-direction: alternate
        animation-iteration-count: infinite
        animation-delay: 3s
    .text-box
      margin-left: 50px
      flex: 1 1 100px
      h2
        width: 100%
      p
        width: 100%
  .view-style
    text-align: center
    .title
      margin: 0px auto 50px
    img
      border-radius: 20px
      width: 60%
    p
      text-align: left
      margin-top: 50px
  .color-scheme-box
    text-align: center
    margin-bottom: 100px
    img
      width: 100%
    .title
      margin: 0px auto 50px
    .circle
      width: 130px
      animation: circleImgAnimation 10s
      animation-iteration-count: infinite
    p
      text-align: left
    .el-row
      padding-left: 20%
      padding-right: 20%
      .el-col
        position: relative
        .focus-point
          width: 15px
          height: 15px
          background-color: #ff6686
          border-radius: 1000px
          position: absolute
          top: 10%
          left: 52%
          animation: focusPointImgAnimation 0.8s
          animation-iteration-count: infinite
        .right
          left: unset
          right: 5%
  .icon-style
    .title
      margin: 0 auto 50px
    .el-row
      .el-col
        text-align: center
        img
          width: 50%
    p
      margin-bottom: 200px


@media screen and (max-width: 1400px)
  #busness
    p
      margin: 4vh auto 7vh
    .Introduction
      img
        margin-bottom: 5vh
    .point
      margin-bottom: 40px
      .el-carousel
        .el-carousel__container
          height: $carouselWidth * 1.1
    .right
      text-align: left
    .color-scheme-box
      p
        margin-bottom: 10px
      .el-row
        margin-bottom: 50px
  @media (orientation: landscape) // 直視 , landscape 橫式
    #busness
      .point
        margin-bottom: 100px
        .el-carousel
          .el-carousel__container
            height: $carouselWidth * 1.4

@media screen and (max-width: 900px)
  #busness
    .point
      .el-carousel
        .el-carousel__container
          height: $carouselWidth * 0.85


@media screen and (max-width: 450px)
  @media (orientation: portrait) // 直視 , landscape 橫式
    #busness
      .title
        span
          font-size: 24px
      .point
        flex-flow: column
        align-items: center
        .el-carousel
          left: 0px
          width: $carouselWidthMoble
          .el-carousel__container
            height: $carouselWidthMoble * 1.72
        .text-box
          text-align: center
          margin: 20px 0px
          h2
            width: 80%
            margin: 0 auto
          p
            margin: 20px auto
            text-align: left
      .auto-scroll
        .scroll-box
          width: $carouselWidthMoble
          height: $carouselWidthMoble * 1.7
          flex: unset
      .color-scheme-box
        margin-bottom: 50px
      .icon-style
        .el-row
          margin-right: 15%
          margin-left: 15%

  
</style>
