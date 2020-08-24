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
      p 品書比國起遊起一係麼沒心文有主兩馬給運我性始金？石查其地的高成……足同找些的……朋作國麼年全園無母清來長、麼特這女銷洲告，也對優子上，也所第種岸老每不可育上眼了明父果車。感我一車關法顧目國以快日當的斷是產一。有童而幾金山舉視就老單，自三天小紀的子克國理臉時！呢器幾兩中。
    .order-way
      pageShareTitle(
        spanContent="訂位方式"
        lineColor = "#2bdeb6"
      )
      p 品書比國起遊起一係麼沒心文有主兩馬給運我性始金？石查其地的高成……足同找些的……朋作國麼年全園無母清來長、麼特這女銷洲告，也對優子上，也所第種岸老每不可育上眼了明父果車。感我一車關法顧目國以快日當的斷是產一。有童而幾金山舉視就老單，自三天小紀的子克國理臉時！呢器幾兩中。

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
          title: '簡介',
          copyWriting: '品書比國起遊起一係麼沒心文有主兩馬給運我性始金？石查其地的高成…'
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
