<template lang="pug">
  #game
    .top-introduction
      h4 source code 不能外流,這裡就展示一些製作完成專案的片段
      h2 這裡都是H5的遊戲<br>使用 vue + Typescript + pixi.js + tweenmax.js<br>表演遊戲的動態和串接資料
    pageShareTitle(
        spanContent="SLOT"
        lineColor = "#e39e44"
        )
    el-row
      el-col.video-box(
        :sm="10"
      )
       video(
         autoplay
         loop
         )
        source(
          src="../../../assets/images/works_img/ui/game/video_0.mp4"
          type="video/mp4"
          )
      el-col(
        :sm="14"
      )
        h4 slot game 比較困難的地方在於解析中間盤面的資料
        h4 盤面的每個symbol是各自獨立的,每一次 slot 之後的狀態都會改變,如果有錯誤的連線表演會造成 user 對贏分的疑慮
        h4 因為這是開發穩定的專案,後面都是換皮,所以剛開始都用slot game 來熟悉框架
    pageShareTitle(
        spanContent="CARD"
        lineColor = "#e39e44"
        )
    el-row.landscape
      el-col.video-box(
        :sm="12"
      )
       video(
         autoplay
         loop
         )
        source(
          src="../../../assets/images/works_img/ui/game/video_1.mp4"
          type="video/mp4"
          )
      el-col(
        :sm="12"
      )
        h4 棋牌遊戲最困難的是每款遊戲的玩法都不一樣,製作前都要跟後端先討論資料格式,製作中間也要不斷的做修改
        h4 相對於 slot game,棋牌遊戲的 play-flow 會複雜許多,玩家跟 game 的互動變多了,觸發 event 一定也會變得更複雜,跟企劃,後端一起維持 data-flow 的流暢度就變得格外重要

</template>

<script>

import pageShareTitle from '../../../components/PageShareTitle'


export default {
  name: 'game',
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

  #game
    letter-spacing: 3px
    .top-introduction
      background-color: #000000
      padding-top: 100px
      padding-bottom: 100px
      margin-bottom: 50px
      color: #969696
      letter-spacing: 5px
      h4
        width: 50%
        margin: 0px auto 50px
      h2
        width: 50%
        margin: 0px auto 0px
    .page-share-title
      margin-bottom: 50px
    .el-row
      margin-bottom: 100px
      .el-col
        video
          width: 150px
          border-radius: 20px
          box-shadow: 5px 5px 6px 1px #c1c1c1
          -webkit-box-shadow: 5px 5px 6px 1px #c1c1c1
          -moz-box-shadow: 5px 5px 6px 1px #c1c1c1
          -o-box-shadow: 5px 5px 6px 1px #c1c1c1
        h4
          width: 60%
          margin: 0px 0px 10px 20px
      .video-box
        text-align: end
    .landscape.el-row
      .el-col
        video
          width: 400px

  @media screen and (max-width: 1000px)
    #game
      .landscape.el-row
        .el-col
          video
            width: 300px
    
  @media screen and (max-width: 800px)
    #game
      .page-share-title
      .el-row
        .el-col
          h4
            margin: 50px auto 20px
        .video-box
          text-align: center
      .landscape.el-row
        .el-col
          video
            width: 200px

  @media screen and (max-width: 430px)
    @media (orientation: portrait) // 直視 , landscape 橫式
      #game
        .top-introduction
          h4,h2
            width: 80%
        .el-row
          .el-col
            h4
              width: 80%

</style>
