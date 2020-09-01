<template lang="pug">
  #coffee-plus
    img.poster(
      :src="require('@/assets/images/works_img/griphic/coffee+/0.png')"
    )
    h4 業主是女生,好不容易找到店面在台南可以開個咖啡廳,有別於其他店面經常使用工業風,業主喜歡偏溫馨可愛的手繪風,手繪風格也有分很多種～～看過店面之後示意圖之後,在這裡用的是溫馨感比較強烈的塗鴉方式
    h4 當然一開始是很搞剛,這裡的物件都是原創的不是素材,每個物件都要一個一個調整,但好處是,一但完成之後會有很多素材可以利用,而且都是照業主想法繪製出的原創素材,雖然準備期很長,但是效果很好
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
    h4 配色的話也可以有很多種變化,主要就是橘色,咖啡色,下去搭配就好,名片地址的部分也維持可愛的感覺做成一個微笑的樣子,因為製作當時業主店面還沒完工,所以多做一些顏色的搭配,之後裝潢完成可以根據整體風格搭配適合的配色,當然也可以混用
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
    el-row.cup-box
      el-col(:sm="12")
        h4 logo也可以當成連續圖案使用,剛好外帶杯可以用這種做法,有另一種趣味感覺
      el-col(:sm="12")
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
      margin-bottom: 50px
      .el-row
        .el-col
          margin-bottom: 20px
          img
            width: 70%
            -webkit-filter: drop-shadow(3px 3px 2px #a5a5a5)
            -moz-filter: drop-shadow(3px 3px 2px #a5a5a5)
            -o-filter: drop-shadow(3px 3px 2px #a5a5a5)
            filter: drop-shadow(3px 3px 2px #a5a5a5)
  .cup-box
    display: flex
    align-items: center
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
    .cup-box
      display: unset


</style>
