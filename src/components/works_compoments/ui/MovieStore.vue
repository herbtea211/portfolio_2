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
    .view-box
      .content-box
        img(
          :src="require('@/assets/images/works_img/ui/movie_store/1.png')"
        )
        .text-box
          h3 品書比國起遊起
          .p-box
            p 品書比國起遊起一係麼沒心文有主兩馬給運我性始金？石查其地的高成…
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
  .introduction
    p
      @include pStyle(60%)
      margin: 50px auto
  .view-box
    position: relative
    width: 100%
    .content-box
      width: 60%
      margin: 10vh auto
      display: flex
      img
        width: 40%
      .text-box
        h3
        .p-box
          position: relative
          p
          .line
            width: 100px
            height: 2px
            background-color: $focusColor
          .BG-Block
            width: 100%
            height: 100px
            background-color: #ffffff
            opacity: 0.2
            position: absolute
            top: 0
          
</style>
