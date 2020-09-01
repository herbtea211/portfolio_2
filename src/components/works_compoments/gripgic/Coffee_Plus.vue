<template lang="pug">
  #coffee-plus
    img.poster(
      :src="require('@/assets/images/works_img/griphic/coffee+/0.png')"
    )
    h4 品書比國起遊起一係麼沒心文有主兩馬給運我性始金？石查其地的高成……足同找些的……朋作國麼年全園無母清來長、麼特這女銷洲告，也對優子上，也所第種岸老每不可育上眼了明父果車。感我一車關法顧目國以快日當的斷是產一。有童而幾金山舉視就老單，自三天小紀的子克國理臉時！呢器幾兩
    el-row.name-card-box(:gutter="20")
      el-col(:sm="8")
        img(
          :src="require('@/assets/images/works_img/griphic/coffee+/1.png')"
        )
      el-col(:sm="8")
        img(
          :src="require('@/assets/images/works_img/griphic/coffee+/2.png')"
        )
      el-col(:sm="8")
        img(
          :src="require('@/assets/images/works_img/griphic/coffee+/3.png')"
        )
    h4 品書比國起遊起一係麼沒心文有主兩馬給運我性始金？石查其地的高成……足同找些的……朋作國麼年全園無母清來長、麼特這女銷洲告，也對優子上，也所第種岸老每不可育上眼了明父果車。感我一車關法顧目國以快日當的斷是產一。有童而幾金山舉視就老單，自三天小紀的子克國理臉時！呢器幾兩
    el-row.catalog-box
      el-col.catalog-img(:sm="12")
        img(
          :src="require('@/assets/images/works_img/griphic/coffee+/4.png')"
        )
      el-col.coaster-box(:sm="12")
        el-row
          el-col(
            :xs="12"
            :sm="12"
            )
            img(
              :src="require('@/assets/images/works_img/griphic/coffee+/5.png')"
            )
          el-col(
            :xs="12"
            :sm="12"
            )
            img(
              :src="require('@/assets/images/works_img/griphic/coffee+/6.png')"
            )
          el-col(
            :xs="12"
            :sm="12"
            )
            img(
              :src="require('@/assets/images/works_img/griphic/coffee+/7.png')"
            )
          el-col(
            :xs="12"
            :sm="12"
            )
            img(
              :src="require('@/assets/images/works_img/griphic/coffee+/8.png')"
            )
    h4 品書比國起遊起一係麼沒心文有主兩馬給運我性始金？石查其地的高成……足同找些的……
    img.cup(
      :src="require('@/assets/images/works_img/griphic/coffee+/9.png')"
    )
</template>

<script>

export default {
  name: 'coffeePlus',
    components: {
   
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

@mixin imgStyle
  box-shadow: 2px 2px 4px 0px #a5a5a5
  -webkit-box-shadow: 2px 2px 4px 0px #a5a5a5
  -moz-box-shadow: 2px 2px 4px 0px #a5a5a5
  -o-box-shadow: 2px 2px 4px 0px #a5a5a5

#coffee-plus
  letter-spacing: 3px
  padding: 50px 10vw
  text-align: center
  h4
    text-align: justify
    margin-bottom: 50px
  .poster
    width: 50%
    min-width: 210px
    margin-bottom: 50px
  .name-card-box
    .el-col
      margin-bottom: 50px
      img
        width: 100%
        @include imgStyle
  .catalog-box
    .catalog-img
      text-align: left
      margin-bottom: 20px
      img
        width: 80%
        @include imgStyle
    .coaster-box
      .el-row
        .el-col
          margin-bottom: 20px
          img
            width: 70%
            -webkit-filter: drop-shadow(3px 3px 2px #a5a5a5)
            -moz-filter: drop-shadow(3px 3px 2px #a5a5a5)
            -o-filter: drop-shadow(3px 3px 2px #a5a5a5)
            filter: drop-shadow(3px 3px 2px #a5a5a5)
  .cup
    margin-bottom: 100px

@media screen and (max-width: 767px)
  #coffee-plus
    h4
    .poster
    .name-card-box
      .el-col
        img
          width: 80%
    .catalog-box
      .catalog-img
        text-align: center
        img
      .coaster-box
        .el-row
          .el-col
            img


</style>
